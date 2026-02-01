import {
  a as a2,
  d,
  p
} from "./chunk-POSIBMR7.js";
import {
  _
} from "./chunk-LBK4Y7ML.js";
import {
  I,
  a,
  k,
  u,
  x
} from "./chunk-XLAEKMCN.js";
import {
  rt,
  useRouter
} from "./chunk-5TRJMYYP.js";
import "./chunk-U6NJFA4U.js";
import {
  m2 as m,
  nanoid
} from "./chunk-2W4MFJRL.js";
import {
  Fragment,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  nextTick,
  normalizeClass,
  onMounted,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  withCtx,
  withKeys
} from "./chunk-XKDLJUKD.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@scalar/api-client/dist/views/Environment/EnvironmentColors.vue.js
var p2 = { class: "flex flex-row gap-1.5 space-x-1" };
var u2 = ["onClick"];
var v = defineComponent({
  __name: "EnvironmentColors",
  props: {
    activeColor: {}
  },
  emits: ["select"],
  setup(d2) {
    const s = [
      { color: "grey", bgClass: "bg-grey" },
      { color: "red", bgClass: "bg-red" },
      { color: "yellow", bgClass: "bg-yellow" },
      { color: "green", bgClass: "bg-green" },
      { color: "orange", bgClass: "bg-orange" },
      { color: "blue", bgClass: "bg-blue" },
      { color: "text-c-2", bgClass: "bg-c-2" },
      { color: "purple", bgClass: "bg-purple" },
      { color: "pink", bgClass: "bg-pink" }
    ];
    return (r, f) => (openBlock(), createElementBlock("div", p2, [
      (openBlock(), createElementBlock(Fragment, null, renderList(s, (e) => createBaseVNode("div", {
        key: e.color,
        class: normalizeClass(["flex h-5 w-5 cursor-pointer items-center justify-center rounded-full", e.bgClass]),
        onClick: (k2) => r.$emit("select", e.color)
      }, [
        r.activeColor === e.color ? (openBlock(), createBlock(unref(m), {
          key: 0,
          icon: "Checkmark",
          size: "xs"
        })) : createCommentVNode("", true)
      ], 10, u2)), 64))
    ]));
  }
});

// node_modules/@scalar/api-client/dist/views/Environment/Environment.vue2.js
var G = { class: "flex-1" };
var P = ["value"];
var Q = { class: "colors ml-auto" };
var de = defineComponent({
  __name: "Environment",
  setup(X) {
    const v2 = useRouter(), { environments: l, environmentMutators: s } = rt(), e = ref(null), p3 = ref(null), m2 = ref(false);
    function y() {
      const t = {
        name: "New Environment",
        uid: nanoid(),
        color: "grey",
        raw: JSON.stringify({ exampleKey: "exampleValue" }, null, 2),
        parsed: [],
        isDefault: false
      };
      s.add(t), e.value = t.uid, v2.push(e.value);
    }
    function E(t) {
      e.value && s.edit(e.value, "raw", t);
    }
    const k2 = (t) => {
      s.delete(t), e.value === t && (e.value = null);
    }, g = (t) => {
      e.value && (l[e.value].color = t);
    }, b = () => {
      v2.currentRoute.value.params.environment === "default" && (e.value = l.default.uid);
    }, x2 = () => {
      e.value && !l[e.value].isDefault && (m2.value = true, nextTick(() => {
        var t;
        (t = p3.value) == null || t.focus();
      }));
    }, V = (t) => {
      const n = t.target.value;
      e.value && !l[e.value].isDefault && s.edit(e.value, "name", n);
    };
    return onMounted(b), (t, i) => (openBlock(), createBlock(p, null, {
      default: withCtx(() => [
        createVNode(a, null, {
          default: withCtx(() => [
            createVNode(I, { title: "Environment" }, {
              content: withCtx(() => [
                createBaseVNode("div", G, [
                  createVNode(d, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l), (n) => (openBlock(), createBlock(a2, {
                        key: n.uid,
                        class: "text-xs",
                        variable: {
                          name: n.name,
                          uid: n.uid,
                          color: n.color,
                          isDefault: n.isDefault
                        },
                        warningMessage: "Are you sure you want to delete this environment?",
                        onClick: (w) => e.value = n.uid,
                        onDelete: (w) => k2(n.uid)
                      }, null, 8, ["variable", "onClick", "onDelete"]))), 128))
                    ]),
                    _: 1
                  })
                ])
              ]),
              button: withCtx(() => [
                createVNode(k, { click: y }, {
                  title: withCtx(() => [
                    createTextVNode("Add Environment Variable")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(x, { class: "flex-1" }, {
              default: withCtx(() => [
                createVNode(u, null, createSlots({
                  default: withCtx(() => [
                    e.value ? (openBlock(), createBlock(_, {
                      key: 0,
                      class: "px-2 py-2.5",
                      lineNumbers: "",
                      modelValue: unref(l)[e.value].raw,
                      "onUpdate:modelValue": E
                    }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, [
                  e.value ? {
                    name: "title",
                    fn: withCtx(() => [
                      !m2.value || unref(l)[e.value].isDefault ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        onDblclick: x2
                      }, toDisplayString(unref(l)[e.value].name), 33)) : (openBlock(), createElementBlock("input", {
                        key: 1,
                        ref_key: "nameInputRef",
                        ref: p3,
                        class: "ring-1 ring-offset-4 ring-b-outline rounded",
                        spellcheck: "false",
                        type: "text",
                        value: unref(l)[e.value].name,
                        onBlur: i[0] || (i[0] = (n) => m2.value = false),
                        onInput: V,
                        onKeyup: i[1] || (i[1] = withKeys((n) => m2.value = false, ["enter"]))
                      }, null, 40, P)),
                      createBaseVNode("div", Q, [
                        createVNode(v, {
                          activeColor: unref(l)[e.value].color,
                          onSelect: g
                        }, null, 8, ["activeColor"])
                      ])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1024)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  de as default
};
//# sourceMappingURL=Environment.vue-FBKI4VXG.js.map
