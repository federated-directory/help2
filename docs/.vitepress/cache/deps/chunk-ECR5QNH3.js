import {
  e,
  f,
  i
} from "./chunk-OCQDSXAT.js";
import {
  u
} from "./chunk-XLAEKMCN.js";
import {
  Fragment,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  normalizeClass,
  openBlock,
  renderList,
  renderSlot,
  toDisplayString,
  withCtx
} from "./chunk-XKDLJUKD.js";

// node_modules/@scalar/api-client/dist/components/Form/Form.vue.js
var C = { key: 0 };
var N = { class: "custom-scroll flex flex-1 flex-col gap-1.5 px-5 py-5" };
var w = defineComponent({
  __name: "Form",
  props: {
    title: {},
    options: {},
    data: {},
    onUpdate: { type: Function }
  },
  setup(U) {
    return (e2, B) => (openBlock(), createBlock(u, null, {
      title: withCtx(() => [
        e2.title ? (openBlock(), createElementBlock("span", C, toDisplayString(e2.title), 1)) : renderSlot(e2.$slots, "title", { key: 1 })
      ]),
      default: withCtx(() => [
        createBaseVNode("div", N, [
          Object.keys(e2.data).length > 0 ? (openBlock(), createBlock(f, {
            key: 0,
            columns: [""]
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(e2.options, (a, r) => (openBlock(), createBlock(i, {
                key: r,
                class: normalizeClass({ "border-t": r === 0 })
              }, {
                default: withCtx(() => [
                  createVNode(e, {
                    modelValue: String(e2.data[a.key] ?? ""),
                    placeholder: a.placeholder,
                    "onUpdate:modelValue": (d) => e2.onUpdate(a.key, d)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(a.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "placeholder", "onUpdate:modelValue"])
                ]),
                _: 2
              }, 1032, ["class"]))), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]),
      _: 3
    }));
  }
});

export {
  w
};
//# sourceMappingURL=chunk-ECR5QNH3.js.map
