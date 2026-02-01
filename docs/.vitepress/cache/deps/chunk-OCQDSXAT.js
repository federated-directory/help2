import {
  O
} from "./chunk-XLAEKMCN.js";
import {
  s
} from "./chunk-5TRJMYYP.js";
import {
  D
} from "./chunk-2W4MFJRL.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  mergeProps,
  normalizeClass,
  normalizeStyle,
  openBlock,
  ref,
  renderSlot,
  resolveDynamicComponent,
  unref,
  withCtx
} from "./chunk-XKDLJUKD.js";

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableCell.vue.js
var m = defineComponent({
  __name: "DataTableCell",
  props: {
    is: { default: "td" }
  },
  setup(s3) {
    return (e2, d) => (openBlock(), createBlock(resolveDynamicComponent(e2.is), {
      class: "min-h-8 min-w-8 border-l-0 border-t-0 border-b-1/2 border-r-1/2 flex text-sm last:border-r-0 group-last:border-b-transparent p-0 m-0 relative",
      role: "cell"
    }, {
      default: withCtx(() => [
        renderSlot(e2.$slots, "default")
      ]),
      _: 3
    }));
  }
});

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableInput.vue2.js
var F = {
  key: 0,
  class: "text-c-2 flex min-w-[120px] items-center border-r-1/2 pl-2 pr-0"
};
var I = { class: "row-1" };
var O2 = ["id", "max", "min", "readOnly", "required", "type", "value"];
var S = {
  key: 0,
  class: "absolute centered-y right-0 pt-px pr-2 text-xxs text-c-3 bg-b-1 shadow-[-8px_0_4px_var(--scalar-background-1)] opacity-100 duration-150 transition-opacity peer-focus:opacity-0"
};
var P = {
  key: 1,
  class: "absolute centered-y right-7 text-orange text-xs"
};
var _ = defineComponent({
  inheritAttrs: false,
  __name: "DataTableInput",
  props: {
    id: {},
    type: {},
    containerClass: {},
    required: { type: Boolean, default: false },
    modelValue: {},
    canAddCustomEnumValue: { type: Boolean, default: true },
    readOnly: { type: Boolean, default: false },
    enum: {},
    min: {},
    max: {}
  },
  emits: ["update:modelValue", "inputFocus", "inputBlur", "selectVariable"],
  setup(c2, { emit: f2 }) {
    const a = c2, n = f2, l2 = ref(true), y = ref(""), v = ref(false), w = () => {
      v.value || n("inputBlur");
    }, V = computed(
      () => a.type === "password" ? l2.value ? "password" : "text" : a.type ?? "text"
    ), g = (e2) => {
      const t = e2.target;
      y.value = t.value, n("update:modelValue", t.value);
    };
    return (e2, t) => (openBlock(), createBlock(m, {
      class: normalizeClass(["relative row", e2.containerClass])
    }, {
      default: withCtx(() => [
        e2.$slots.default ? (openBlock(), createElementBlock("div", F, [
          renderSlot(e2.$slots, "default", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", I, [
          a.enum && a.enum.length ? (openBlock(), createBlock(O, {
            key: 0,
            canAddCustomValue: e2.canAddCustomEnumValue,
            modelValue: a.modelValue,
            value: a.enum,
            "onUpdate:modelValue": t[0] || (t[0] = (u) => n("update:modelValue", u))
          }, null, 8, ["canAddCustomValue", "modelValue", "value"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("input", mergeProps(e2.$attrs, {
              id: e2.id,
              autocomplete: "off",
              class: "border-none text-c-1 min-w-0 w-full peer px-2 py-1.5 outline-none",
              "data-1p-ignore": "",
              max: e2.max,
              min: e2.min,
              readOnly: e2.readOnly,
              required: e2.required,
              spellcheck: "false",
              type: V.value,
              value: e2.modelValue,
              onBlur: w,
              onFocus: t[1] || (t[1] = (u) => n("inputFocus")),
              onInput: g
            }), null, 16, O2),
            e2.required ? (openBlock(), createElementBlock("div", S, " Required ")) : createCommentVNode("", true)
          ], 64))
        ]),
        e2.$slots.warning ? (openBlock(), createElementBlock("div", P, [
          renderSlot(e2.$slots, "warning", {}, void 0, true)
        ])) : createCommentVNode("", true),
        renderSlot(e2.$slots, "icon", {}, void 0, true),
        e2.type === "password" ? (openBlock(), createBlock(unref(D), {
          key: 2,
          class: "-ml-.5 mr-1 h-6 w-6 self-center p-1.5",
          icon: l2.value ? "Show" : "Hide",
          label: l2.value ? "Show Password" : "Hide Password",
          onClick: t[2] || (t[2] = (u) => l2.value = !l2.value)
        }, null, 8, ["icon", "label"])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableInput.vue.js
var e = s(_, [["__scopeId", "data-v-e4703b01"]]);

// node_modules/@scalar/api-client/dist/components/DataTable/DataTable.vue.js
var i = {
  key: 0,
  class: "sr-only"
};
var f = defineComponent({
  __name: "DataTable",
  props: {
    columns: {},
    scroll: { type: Boolean }
  },
  setup(p) {
    return (o, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["border-1/2 rounded mx-1 bg-b-1", o.scroll ? "overflow-x-auto custom-scroll" : "overflow-visible"])
    }, [
      createBaseVNode("table", {
        class: normalizeClass(["grid auto-rows-auto min-h-8 mb-0", { "min-w-full w-max": o.scroll }]),
        style: normalizeStyle({
          gridTemplateColumns: o.columns.map((t) => t || "1fr").join(" ")
        })
      }, [
        o.$slots.caption ? (openBlock(), createElementBlock("caption", i, [
          renderSlot(o.$slots, "caption")
        ])) : createCommentVNode("", true),
        renderSlot(o.$slots, "default")
      ], 6)
    ], 2));
  }
});

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableRow.vue.js
var c = {};
var s2 = { class: "group contents w-fit min-w-full" };
function l(t, a) {
  return openBlock(), createElementBlock("tr", s2, [
    renderSlot(t.$slots, "default")
  ]);
}
var i2 = s(c, [["render", l]]);

export {
  m,
  e,
  f,
  i2 as i
};
//# sourceMappingURL=chunk-OCQDSXAT.js.map
