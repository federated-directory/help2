import {
  k2 as k
} from "./chunk-XLAEKMCN.js";
import {
  s,
  useRoute,
  useRouter
} from "./chunk-5TRJMYYP.js";
import {
  B,
  i2 as i,
  m,
  m2
} from "./chunk-2W4MFJRL.js";
import {
  Fragment,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  normalizeClass,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderSlot,
  resolveComponent,
  toDisplayString,
  unref,
  withCtx,
  withModifiers
} from "./chunk-XKDLJUKD.js";

// node_modules/@scalar/api-client/dist/components/Sidebar/SidebarList.vue.js
var s2 = {};
var l = { class: "flex flex-col p-2" };
function n(e, f) {
  return openBlock(), createElementBlock("ul", l, [
    renderSlot(e.$slots, "default")
  ]);
}
var d = s(s2, [["render", n]]);

// node_modules/@scalar/api-client/dist/hooks/useClipboard.js
var a = () => {
  const { toast: o } = i();
  return {
    copyToClipboard: (t) => {
      navigator.clipboard.writeText(t).then(() => {
        o("Copied to the clipboard.", "info");
      });
    }
  };
};

// node_modules/@scalar/api-client/dist/components/Sidebar/SidebarListElementActions.vue.js
var B2 = { class: "absolute flex right-1 opacity-0 group-hover:opacity-100" };
var I = defineComponent({
  __name: "SidebarListElementActions",
  props: {
    variable: {},
    warningMessage: {}
  },
  emits: ["delete"],
  setup(p2, { emit: v2 }) {
    const { variable: b2 } = p2, f = v2, t = ref({ action: "None", name: "" }), n2 = B(), { copyToClipboard: g } = a();
    function C2(e) {
      t.value = { action: e, name: b2.name }, n2.show();
    }
    function r() {
      n2.hide(), t.value = { action: "None", name: "" };
    }
    function h(e) {
      f("delete", e), r();
    }
    return (e, o) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", B2, [
        createBaseVNode("button", {
          class: "text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-[5px]",
          type: "button",
          onClick: o[0] || (o[0] = (s3) => unref(g)(e.variable.name))
        }, [
          createVNode(unref(m2), {
            class: "h-3 w-3",
            icon: "Clipboard"
          })
        ]),
        e.variable.isDefault ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
          key: 0,
          class: "text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-1",
          type: "button",
          onClick: o[1] || (o[1] = withModifiers((s3) => C2(
            "Delete"
            /* Delete */
          ), ["prevent"]))
        }, [
          createVNode(unref(m2), {
            class: "h-3.5 w-3.5",
            icon: "Close"
          })
        ]))
      ]),
      createVNode(unref(m), {
        size: "sm",
        state: unref(n2),
        title: `${t.value.action} ${t.value.name}`
      }, {
        default: withCtx(() => [
          t.value.action === "Delete" ? (openBlock(), createBlock(k, {
            key: 0,
            variableName: t.value.name,
            warningMessage: e.warningMessage,
            onClose: r,
            onDelete: o[2] || (o[2] = (s3) => h(e.variable.uid))
          }, null, 8, ["variableName", "warningMessage"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["state", "title"])
    ], 64));
  }
});

// node_modules/@scalar/api-client/dist/components/Sidebar/SidebarListElement.vue2.js
var C = {
  key: 0,
  class: "hover:bg-b-3 rounded p-1.5",
  type: "button"
};
var y = { class: "empty-variable-name" };
var V = defineComponent({
  __name: "SidebarListElement",
  props: {
    variable: {},
    warningMessage: {}
  },
  emits: ["delete"],
  setup(D, { emit: i2 }) {
    const s3 = i2, m3 = useRouter(), p2 = (e, a3) => {
      e.metaKey ? window.open(a3, "_blank") : m3.push(a3);
    }, u = (e) => {
      s3("delete", e);
    };
    return (e, a3) => {
      const d2 = resolveComponent("router-link");
      return openBlock(), createElementBlock("li", null, [
        createVNode(d2, {
          class: normalizeClass(["h-8 text-c-2 hover:bg-b-2 group relative block flex items-center gap-1 rounded py-1 pr-2 font-medium no-underline", [e.variable.color ? "pl-1" : "pl-2"]]),
          exactActiveClass: "active-link",
          to: `${e.variable.uid}`,
          onClick: a3[0] || (a3[0] = withModifiers((b2) => p2(b2, e.variable.uid), ["prevent"]))
        }, {
          default: withCtx(() => [
            e.variable.color ? (openBlock(), createElementBlock("button", C, [
              createBaseVNode("div", {
                class: normalizeClass(["h-2.5 w-2.5 rounded-xl", `bg-${e.variable.color}`])
              }, null, 2)
            ])) : createCommentVNode("", true),
            createBaseVNode("span", y, toDisplayString(e.variable.name), 1),
            createVNode(I, {
              variable: { ...e.variable, isDefault: e.variable.isDefault ?? false },
              warningMessage: e.warningMessage,
              onDelete: u
            }, null, 8, ["variable", "warningMessage"])
          ]),
          _: 1
        }, 8, ["class", "to"])
      ]);
    };
  }
});

// node_modules/@scalar/api-client/dist/components/Sidebar/SidebarListElement.vue.js
var a2 = s(V, [["__scopeId", "data-v-e9dbd857"]]);

// node_modules/@scalar/api-client/dist/components/SubpageHeader.vue2.js
var b = (e) => (pushScopeId("data-v-8a69ee40"), e = e(), popScopeId(), e);
var v = { class: "flex flex-1 flex-col rounded pt-0 h-full bg-b-1 relative border-1/2 rounded mr-1.5 mb-1.5 overflow-hidden" };
var x = { class: "lg:min-h-header items-center w-full p-1 t-app__top-container flex items-center border-b-1/2" };
var k2 = b(() => createBaseVNode("span", { class: "leading-none" }, "Back To Requests", -1));
var I2 = defineComponent({
  __name: "SubpageHeader",
  setup(e) {
    const n2 = useRoute();
    return (s3, g) => {
      const c = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", v, [
        createBaseVNode("div", x, [
          createVNode(c, {
            class: "text-c-2 text-sm font-medium ml-1 flex items-center p-1.5 hover:bg-b-2 rounded cursor-pointer gap-0.5 active:text-c-1 no-underline dark:hover:bg-b-2",
            to: `/workspace/${unref(n2).params.workspace}/request/default`
          }, {
            default: withCtx(() => [
              createVNode(unref(m2), {
                icon: "ChevronLeft",
                size: "md",
                thickness: "1.75"
              }),
              k2
            ]),
            _: 1
          }, 8, ["to"])
        ]),
        renderSlot(s3.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});

// node_modules/@scalar/api-client/dist/components/SubpageHeader.vue.js
var p = s(I2, [["__scopeId", "data-v-8a69ee40"]]);

export {
  d,
  a2 as a,
  p
};
//# sourceMappingURL=chunk-POSIBMR7.js.map
