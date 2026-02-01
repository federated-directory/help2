import {
  P,
  rt,
  s
} from "./chunk-5TRJMYYP.js";
import {
  C,
  O,
  W,
  i3 as i,
  m2 as m,
  nanoid
} from "./chunk-2W4MFJRL.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  nextTick,
  normalizeClass,
  normalizeStyle,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  vModelText,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-XKDLJUKD.js";

// node_modules/@scalar/api-client/dist/components/Sidebar/SidebarButton.vue.js
var m2 = { class: "fixed relative bottom-[42px] z-10 flex px-2.5 pb-2 pt-0" };
var k = defineComponent({
  __name: "SidebarButton",
  props: {
    click: { type: Function }
  },
  setup(o) {
    const r = o, t = () => {
      r.click();
    };
    return (c4, f) => (openBlock(), createElementBlock("div", m2, [
      createVNode(unref(W), {
        class: "bg-b-1 text-c-1 hover:bg-b-2 group relative w-full border-1/2 p-1.5 h-auto",
        icon: "Plus",
        variant: "outlined",
        onClick: t
      }, {
        default: withCtx(() => [
          renderSlot(c4.$slots, "title"),
          createVNode(P, {
            class: "absolute right-2 group-hover:opacity-80 text-c-2 add-item-hotkey",
            hotkey: "K",
            onHotkeyPressed: t
          })
        ]),
        _: 3
      })
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayout.vue.js
var c = {};
var l = { class: "flex min-h-0 flex-1 xl:overflow-hidden leading-3 z-0" };
function s2(e, f) {
  return openBlock(), createElementBlock("div", l, [
    renderSlot(e.$slots, "default")
  ]);
}
var a = s(c, [["render", s2]]);

// node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutContent.vue.js
var l2 = {};
var c2 = { class: "divide divide-y xl:divide-y-0 xl:divide-x-1/2 flex xl:flex-row flex-col custom-scroll rounded" };
function i2(e, n) {
  return openBlock(), createElementBlock("div", c2, [
    renderSlot(e.$slots, "default")
  ]);
}
var x = s(l2, [["render", i2]]);

// node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutSection.vue.js
var a2 = ["aria-labelledby"];
var c3 = ["id"];
var u = defineComponent({
  __name: "ViewLayoutSection",
  setup(m3) {
    const e = nanoid();
    return (t, x2) => (openBlock(), createElementBlock("section", {
      "aria-labelledby": unref(e),
      class: "flex xl:min-w-0 xl:flex-1 flex-col xl:custom-scroll bg-b-1"
    }, [
      createBaseVNode("div", {
        id: unref(e),
        class: "xl:min-h-header py-2.5 flex items-center border-b-1/2 px-4 xl:px-6 text-sm font-medium sticky top-0 bg-b-1 z-20 rounded-t xl:rounded-none"
      }, [
        renderSlot(t.$slots, "title")
      ], 8, c3),
      renderSlot(t.$slots, "default")
    ], 8, a2));
  }
});

// node_modules/@scalar/api-client/dist/components/Sidebar/Sidebar.vue.js
var W2 = {
  key: 0,
  class: "xl:min-h-header py-2.5 flex items-center border-b-1/2 px-4 text-sm"
};
var C2 = { class: "font-medium m-0 text-sm whitespace-nowrap" };
var I = defineComponent({
  __name: "Sidebar",
  props: {
    title: {},
    showSideBar: { type: Boolean, default: true }
  },
  setup(g2) {
    const b2 = g2, { isReadOnly: i3, sidebarWidth: s3, setSidebarWidth: o } = rt(), n = ref(false), d = ref(null), w = (e) => {
      e.preventDefault();
      const m3 = e.clientX, y = parseInt(
        getComputedStyle(d.value).width || s3.value,
        10
      ), c4 = (E) => {
        n.value = true, document.body.classList.add("dragging");
        let t = y + E.clientX - m3;
        t > 420 && (t = 420 + (t - 420) * 0.2), t < 240 && (t = 240), o(`${t}px`);
      }, u2 = () => {
        n.value = false, document.body.classList.remove("dragging"), document.documentElement.removeEventListener("mousemove", c4, false), document.documentElement.removeEventListener("mouseup", u2, false), parseInt(s3.value, 10) > 420 ? o("360px") : parseInt(s3.value, 10) < 240 && o("240px");
      };
      document.documentElement.addEventListener("mousemove", c4, false), document.documentElement.addEventListener("mouseup", u2, false);
    };
    return (e, m3) => withDirectives((openBlock(), createElementBlock("aside", {
      ref_key: "sidebarRef",
      ref: d,
      class: normalizeClass(["sidebar overflow-hidden relative flex flex-col border-r-1/2 bg-b-1", { dragging: n.value }]),
      style: normalizeStyle({ width: unref(s3) })
    }, [
      renderSlot(e.$slots, "header"),
      !unref(i3) && e.title ? (openBlock(), createElementBlock("div", W2, [
        createBaseVNode("h2", C2, toDisplayString(e.title), 1)
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(["custom-scroll sidebar-height", {
          "sidebar-mask": !unref(i3)
        }])
      }, [
        renderSlot(e.$slots, "content")
      ], 2),
      renderSlot(e.$slots, "button"),
      createBaseVNode("div", {
        class: "resizer",
        onMousedown: w
      }, null, 32)
    ], 6)), [
      [vShow, b2.showSideBar]
    ]);
  }
});

// node_modules/@scalar/api-client/dist/components/Sidebar/Actions/SidebarListElementForm.vue2.js
var g = ["error"];
var S = defineComponent({
  __name: "SidebarListElementForm",
  props: {
    danger: { type: Boolean },
    label: {}
  },
  emits: ["cancel", "submit"],
  setup(x2, { emit: u2 }) {
    const o = u2;
    return (t, e) => (openBlock(), createElementBlock("form", {
      class: "text-base",
      onSubmit: e[1] || (e[1] = withModifiers((a4) => o("submit"), ["prevent"]))
    }, [
      renderSlot(t.$slots, "default", {}, void 0, true),
      createBaseVNode("div", null, [
        createBaseVNode("button", {
          class: "w-full text-left focus:bg-b-2 hover:bg-b-2 rounded gap-1.5 px-2.5 py-1.5 focus:outline-none flex items-center cursor-pointer",
          type: "button",
          onClick: e[0] || (e[0] = (a4) => o("cancel"))
        }, [
          createVNode(unref(m), {
            class: "inline-flex",
            icon: "Close",
            size: "sm",
            thickness: "1.75"
          }),
          createTextVNode(" Cancel ")
        ]),
        createBaseVNode("button", {
          class: "w-full text-left focus:bg-b-2 hover:bg-b-2 rounded gap-1.5 px-2.5 py-1.5 focus:outline-none flex items-center cursor-pointer delete-warning-button",
          error: t.danger,
          type: "submit"
        }, [
          createVNode(unref(m), {
            class: "inline-flex",
            icon: "Trash",
            size: "sm",
            thickness: "1.5"
          }),
          createTextVNode(" " + toDisplayString(t.label ?? "Submit"), 1)
        ], 8, g)
      ])
    ], 32));
  }
});

// node_modules/@scalar/api-client/dist/components/Sidebar/Actions/SidebarListElementForm.vue.js
var a3 = s(S, [["__scopeId", "data-v-e58070fb"]]);

// node_modules/@scalar/api-client/dist/components/Sidebar/Actions/DeleteSidebarListElement.vue.js
var b = {
  key: 0,
  class: "text-c-3 font-medium text-xs mb-2"
};
var k2 = defineComponent({
  __name: "DeleteSidebarListElement",
  props: {
    variableName: {},
    warningMessage: {}
  },
  emits: ["close", "delete"],
  setup(u2, { emit: o }) {
    const t = o;
    async function r() {
      t("delete");
    }
    return (e, n) => (openBlock(), createBlock(a3, {
      danger: "",
      label: `Delete ${e.variableName}`,
      onCancel: n[0] || (n[0] = (f) => t("close")),
      onSubmit: r
    }, {
      default: withCtx(() => [
        e.warningMessage ? (openBlock(), createElementBlock("p", b, toDisplayString(e.warningMessage), 1)) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["label"]));
  }
});

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableInputSelect.vue.js
var U = { class: "w-full" };
var W3 = { class: "flex items-center justify-center h-4 w-4" };
var q = createBaseVNode("span", null, "Add value", -1);
var O2 = defineComponent({
  __name: "DataTableInputSelect",
  props: {
    modelValue: {},
    value: {},
    canAddCustomValue: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(_, { emit: g2 }) {
    const v = _, h = g2, S2 = computed(() => v.value ?? []), o = ref(v.modelValue.toString()), s3 = ref(false), a4 = ref(""), x2 = ref(null);
    watch(a4, (e) => {
      h("update:modelValue", e);
    });
    const w = (e) => {
      o.value = e, h("update:modelValue", e), s3.value = false;
    }, D = () => {
      a4.value.trim() && (w(a4.value), a4.value = "");
    }, B = () => {
      a4.value.trim() || (o.value = "", s3.value = false);
    }, b2 = (e) => o.value === e;
    return watch(s3, (e) => {
      e && nextTick(() => {
        var u2;
        (u2 = x2.value) == null || u2.focus();
      });
    }), (e, u2) => (openBlock(), createElementBlock("div", U, [
      s3.value ? withDirectives((openBlock(), createElementBlock("input", {
        key: 0,
        ref_key: "inputRef",
        ref: x2,
        "onUpdate:modelValue": u2[0] || (u2[0] = (t) => a4.value = t),
        class: "border-none text-c-1 min-w-0 w-full px-2 py-1.5 outline-none",
        placeholder: "Value",
        type: "text",
        onBlur: B,
        onKeyup: withKeys(D, ["enter"])
      }, null, 544)), [
        [vModelText, a4.value]
      ]) : (openBlock(), createBlock(unref(O), {
        key: 1,
        resize: "",
        value: o.value
      }, {
        items: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S2.value, (t) => (openBlock(), createBlock(unref(C), {
            key: t,
            class: "flex gap-1.5 group/item items-center whitespace-nowrap text-ellipsis overflow-hidden",
            value: t,
            onClick: (G) => w(t)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass([
                  "flex items-center justify-center rounded-full p-[3px] w-4 h-4 group-hover/item:shadow-border",
                  b2(t) ? "bg-blue text-b-1" : "text-transparent"
                ])
              }, [
                createVNode(unref(m), {
                  class: "size-2.5",
                  icon: "Checkmark",
                  thickness: "3.5"
                })
              ], 2),
              createTextVNode(" " + toDisplayString(t), 1)
            ]),
            _: 2
          }, 1032, ["value", "onClick"]))), 128)),
          createVNode(unref(i)),
          e.canAddCustomValue ? (openBlock(), createBlock(unref(C), {
            key: 0,
            class: "flex items-center gap-1.5",
            onClick: u2[1] || (u2[1] = (t) => s3.value = true)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", W3, [
                createVNode(unref(m), {
                  class: "h-2.5",
                  icon: "Add"
                })
              ]),
              q
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        default: withCtx(() => [
          createVNode(unref(W), {
            class: "gap-1.5 font-normal h-full justify-start px-2 py-1.5",
            fullWidth: "",
            variant: "ghost"
          }, {
            default: withCtx(() => [
              createBaseVNode("span", null, toDisplayString(o.value || "Select a value"), 1),
              o.value ? createCommentVNode("", true) : (openBlock(), createBlock(unref(m), {
                key: 0,
                icon: "ChevronDown",
                size: "xs"
              }))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["value"]))
    ]));
  }
});

export {
  O2 as O,
  k,
  a,
  x,
  u,
  k2,
  I
};
//# sourceMappingURL=chunk-XLAEKMCN.js.map
