import {
  s
} from "./chunk-5TRJMYYP.js";
import {
  F,
  REQUEST_METHODS,
  cva,
  cx,
  getRequest,
  t,
  useEventBus
} from "./chunk-2W4MFJRL.js";
import {
  computed,
  createBaseVNode,
  createBlock,
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  readonly,
  ref,
  toDisplayString,
  unref,
  withCtx
} from "./chunk-XKDLJUKD.js";

// node_modules/@scalar/api-client/dist/libs/event-busses/hot-keys-bus.js
var m = Symbol();
var a = useEventBus(m);
var u = [
  "Escape",
  "ArrowDown",
  "ArrowUp",
  "Enter",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12"
];
var l = {
  Escape: { event: "closeModal" },
  b: { event: "toggleSidebar", modifiers: ["default"] },
  k: { event: "openCommandPalette", modifiers: ["default"] },
  ArrowUp: { event: "commandPaletteUp" },
  ArrowDown: { event: "commandPaletteDown" },
  Enter: { event: "commandPaletteSelect" },
  t: { event: "addTopNav", modifiers: ["default"] },
  w: { event: "closeTopNav", modifiers: ["default"] },
  ArrowLeft: { event: "navigateTopNavLeft", modifiers: ["default", "Alt"] },
  ArrowRight: { event: "navigateTopNavRight", modifiers: ["default", "Alt"] },
  l: { event: "focusAddressBar", modifiers: ["default"] },
  1: { event: "jumpToTab", modifiers: ["default"] },
  2: { event: "jumpToTab", modifiers: ["default"] },
  3: { event: "jumpToTab", modifiers: ["default"] },
  4: { event: "jumpToTab", modifiers: ["default"] },
  5: { event: "jumpToTab", modifiers: ["default"] },
  6: { event: "jumpToTab", modifiers: ["default"] },
  7: { event: "jumpToTab", modifiers: ["default"] },
  8: { event: "jumpToTab", modifiers: ["default"] },
  9: { event: "jumpToLastTab", modifiers: ["default"] }
};
var r = (e2) => {
  if (!(e2.target instanceof HTMLElement)) return false;
  const t2 = e2.target;
  return t2.tagName === "INPUT" ? !u.includes(e2.key) : !!(t2.tagName === "TEXTAREA" || t2.getAttribute("contenteditable"));
};
var c = {
  Alt: "altKey",
  Control: "ctrlKey",
  Shift: "shiftKey",
  Meta: "metaKey"
};
var T = (e2) => e2.map(
  (t2) => t2 === "default" ? t() ? "metaKey" : "ctrlKey" : c[t2]
);
var A = (e2, {
  hotKeys: t2 = l,
  modifiers: n2 = ["default"]
} = {}) => {
  const i = e2.key === " " ? "Space" : e2.key, o = t2[i];
  o && (i === "Escape" ? a.emit({ [o.event]: e2 }) : T(o.modifiers || n2).every((s2) => e2[s2] === true) && !r(e2) ? a.emit({ [o.event]: e2 }) : !r(e2) && o.modifiers === void 0 && a.emit({ [o.event]: e2 }));
};

// node_modules/@scalar/api-client/dist/libs/event-busses/command-palette-bus.js
var e = Symbol();
var m2 = useEventBus(e);

// node_modules/@scalar/api-client/dist/components/HttpMethod/HttpMethod.vue2.js
var O = defineComponent({
  __name: "HttpMethod",
  props: {
    isSquare: { type: Boolean, default: false },
    method: {},
    isEditable: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(f2, { emit: b }) {
    const i = f2, h = b, o = computed(() => getRequest(i.method)), n2 = Object.entries(REQUEST_METHODS).map(
      ([e2, { short: a2 }]) => ({
        id: e2,
        label: e2.charAt(0) + e2.toLowerCase().slice(1)
      })
    ), d = computed({
      get: () => n2.find(({ id: e2 }) => e2 === i.method),
      set: (e2) => (e2 == null ? void 0 : e2.id) && h("change", e2.id)
    }), u2 = cva({
      base: "text-center font-code text-3xs justify-center items-center flex",
      variants: {
        isSquare: {
          true: "px-2.5 whitespace-nowrap font-bold border-r h-fit m-auto",
          false: "rounded-full"
        },
        isEditable: {
          true: "px-0 http-bg-gradient rounded-md border-1/2 border-r-1/2",
          false: "cusor-pointer"
        }
      }
    }), v = computed(() => o.value.short);
    return (e2, a2) => e2.isEditable ? (openBlock(), createBlock(unref(F), {
      key: 0,
      modelValue: d.value,
      "onUpdate:modelValue": a2[0] || (a2[0] = (E) => d.value = E),
      options: unref(n2)
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          class: normalizeClass(["h-full", { "pointer-events-none": !e2.isEditable }])
        }, [
          createBaseVNode("button", {
            class: normalizeClass(["relative h-full", unref(cx)(unref(u2)({ isSquare: e2.isSquare, isEditable: e2.isEditable }), o.value.color)]),
            type: "button"
          }, [
            createBaseVNode("span", null, toDisplayString(v.value), 1)
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["relative gap-1 whitespace-nowrap", unref(cx)(unref(u2)({ isSquare: e2.isSquare, isEditable: e2.isEditable }), o.value.color)]),
      type: "button"
    }, toDisplayString(o.value.short), 3));
  }
});

// node_modules/@scalar/api-client/dist/components/HttpMethod/HttpMethod.vue.js
var f = s(O, [["__scopeId", "data-v-5fe98831"]]);

// node_modules/@scalar/api-client/dist/hooks/useFileDialog.js
function n({
  multiple: u2,
  accept: c2,
  onChange: l2,
  onError: t2
} = {}) {
  const i = ref(null);
  let e2;
  typeof document < "u" && (e2 = document.createElement("input"), e2.type = "file", e2.onchange = (p) => {
    const s2 = p.target;
    i.value = s2.files, l2 == null || l2(i.value);
  }, e2.onerror = () => t2 == null ? void 0 : t2(), e2.multiple = u2, e2.accept = c2);
  const f2 = () => {
    if (!e2) return t2 == null ? void 0 : t2();
    e2.click();
  };
  return {
    files: readonly(i),
    open: f2
  };
}

export {
  f,
  a,
  A,
  n,
  m2 as m
};
//# sourceMappingURL=chunk-YZGRN2WK.js.map
