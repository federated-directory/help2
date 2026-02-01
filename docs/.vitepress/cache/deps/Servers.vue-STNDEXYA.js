import {
  w
} from "./chunk-ECR5QNH3.js";
import {
  a as a2,
  d,
  p
} from "./chunk-POSIBMR7.js";
import "./chunk-OCQDSXAT.js";
import {
  I,
  a,
  k,
  x
} from "./chunk-XLAEKMCN.js";
import {
  createServer,
  rt,
  useRoute,
  useRouter
} from "./chunk-5TRJMYYP.js";
import "./chunk-2W4MFJRL.js";
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
  openBlock,
  renderList,
  unref,
  withCtx
} from "./chunk-XKDLJUKD.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@scalar/api-client/dist/views/Servers/ServerForm.vue.js
var j = { class: "w-full" };
var L = defineComponent({
  __name: "ServerForm",
  setup(B) {
    const { activeCollection: o, servers: v, serverMutators: n } = rt(), f = [
      { label: "URL", key: "url", placeholder: "https://void.scalar.com/api" },
      {
        label: "Label",
        key: "description",
        placeholder: "Production"
      }
    ], c = useRoute(), a3 = computed(
      () => {
        var e, t;
        return v[o.value && c.params.server === "default" ? (e = o.value) == null ? void 0 : e.spec.serverUids[0] : ((t = o.value) == null ? void 0 : t.spec.serverUids.find(
          (r) => r === c.params.server
        )) ?? ""];
      }
    ), _ = (e, t) => {
      o.value && n.edit(a3.value.uid, e, t);
    }, k2 = (e, t) => {
      o.value && n.edit(a3.value.uid, `variables.${e}.value`, t);
    }, h = computed(
      () => {
        var e;
        return Object.entries(((e = a3.value) == null ? void 0 : e.variables) ?? {}).map(
          ([t, r]) => {
            var s;
            return {
              key: t,
              label: t,
              placeholder: r.default ?? ((s = r == null ? void 0 : r.enum) == null ? void 0 : s[0]) ?? ""
            };
          }
        );
      }
    ), d2 = computed(
      () => Object.entries(a3.value.variables ?? {}).reduce((e, [t, r]) => {
        var s;
        return e[t] = r.value ?? r.default ?? ((s = r == null ? void 0 : r.enum) == null ? void 0 : s[0]) ?? "", e;
      }, {})
    );
    return (e, t) => (openBlock(), createElementBlock("div", j, [
      a3.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(w, {
          data: a3.value,
          onUpdate: _,
          options: f,
          title: "Server"
        }, null, 8, ["data"]),
        Object.keys(d2.value).length ? (openBlock(), createBlock(w, {
          key: 0,
          data: d2.value,
          onUpdate: k2,
          options: h.value,
          title: "Variables"
        }, null, 8, ["data", "options"])) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true)
    ]));
  }
});

// node_modules/@scalar/api-client/dist/views/Servers/Servers.vue2.js
var N = { class: "flex-1" };
var K = defineComponent({
  __name: "Servers",
  setup(g) {
    const { activeCollection: t, servers: m, serverMutators: c } = rt(), { push: u } = useRouter(), f = () => {
      if (!t.value) return;
      const o = createServer({ url: "http://localhost" });
      c.add(o, t.value.uid), u(`/servers/${o.uid}`);
    };
    return (o, H) => (openBlock(), createBlock(p, null, {
      default: withCtx(() => [
        createVNode(a, null, {
          default: withCtx(() => [
            createVNode(unref(I), { title: "Servers" }, {
              content: withCtx(() => [
                createBaseVNode("div", N, [
                  createVNode(d, null, {
                    default: withCtx(() => {
                      var i;
                      return [
                        (openBlock(true), createElementBlock(Fragment, null, renderList((i = unref(t)) == null ? void 0 : i.spec.serverUids, (a3) => (openBlock(), createBlock(a2, {
                          key: a3,
                          class: "text-xs",
                          variable: { name: unref(m)[a3].url, uid: a3 }
                        }, null, 8, ["variable"]))), 128))
                      ];
                    }),
                    _: 1
                  })
                ])
              ]),
              button: withCtx(() => [
                createVNode(k, { click: f }, {
                  title: withCtx(() => [
                    createTextVNode("Add Server")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(x, { class: "flex-1" }, {
              default: withCtx(() => [
                createVNode(L)
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
  K as default
};
//# sourceMappingURL=Servers.vue-STNDEXYA.js.map
