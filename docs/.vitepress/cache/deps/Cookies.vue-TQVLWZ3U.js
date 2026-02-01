import {
  w
} from "./chunk-ECR5QNH3.js";
import {
  a as a3,
  d,
  p
} from "./chunk-POSIBMR7.js";
import {
  a as a2
} from "./chunk-FLKPBNPD.js";
import {
  _
} from "./chunk-LBK4Y7ML.js";
import "./chunk-OCQDSXAT.js";
import {
  I,
  a,
  k,
  u,
  x
} from "./chunk-XLAEKMCN.js";
import {
  createCookie,
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
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  normalizeClass,
  onMounted,
  openBlock,
  renderList,
  toDisplayString,
  unref,
  vShow,
  withCtx,
  withDirectives
} from "./chunk-XKDLJUKD.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@scalar/api-client/dist/views/Cookies/CookieForm.vue.js
var _2 = { class: "flex items-center pointer-events-none" };
var f = createBaseVNode("label", {
  class: "absolute w-full h-full top-0 left-0 pointer-events-auto opacity-0 cursor-text",
  for: "cookiename"
}, null, -1);
var y = ["value"];
var F = defineComponent({
  __name: "CookieForm",
  setup(b) {
    const { cookies: r, activeCookieId: o, cookieMutators: c } = rt(), s = [
      { label: "Key", key: "key", placeholder: "Username" },
      { label: "Value", key: "value", placeholder: "123" },
      { label: "Domain", key: "domain", placeholder: "scalar.com" },
      { label: "Path", key: "path", placeholder: "/" },
      { label: "Expires", key: "expires", placeholder: "Tomorrow" },
      { label: "Secure", key: "secure", placeholder: "True/False" },
      { label: "HttpOnly", key: "httpOnly", placeholder: "True/False" }
    ], t = computed(
      () => r[o.value] || {}
    ), a4 = (n, e) => {
      o.value && c.edit(o.value, n, e);
    };
    return (n, e) => (openBlock(), createBlock(w, {
      data: t.value,
      onUpdate: a4,
      options: s
    }, {
      title: withCtx(() => [
        createBaseVNode("div", _2, [
          f,
          createBaseVNode("input", {
            id: "cookiename",
            class: "pl-1 outline-none border-0 text-c-2 rounded pointer-events-auto relative w-full",
            placeholder: "Cookie Name",
            value: t.value.name,
            onInput: e[0] || (e[0] = (i) => a4("name", i.target.value))
          }, null, 40, y)
        ])
      ]),
      _: 1
    }, 8, ["data"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Cookies/CookieRaw.vue.js
var u2 = createBaseVNode("span", null, "Raw Cookie String", -1);
var w2 = defineComponent({
  __name: "CookieRaw",
  setup(_3) {
    const { cookies: a4, activeCookieId: o } = rt();
    return (f2, d2) => (openBlock(), createBlock(u, null, {
      title: withCtx(() => [
        u2
      ]),
      default: withCtx(() => [
        unref(o) && unref(a4)[unref(o)] ? (openBlock(), createBlock(_, {
          key: 0,
          class: "px-2 py-2.5",
          lineNumbers: "",
          modelValue: ""
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Cookies/Cookies.vue2.js
var K = { class: "flex-1" };
var Q = ["onClick"];
var U = { class: "before:bg-b-3 before:absolute before:left-[calc(1rem_-_1.5px)] before:top-0 before:z-10 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 relative" };
var X = ["onClick"];
var Y = { class: "before:bg-b-3 before:absolute before:left-[calc(1.75rem_-_1.5px)] before:top-0 before:z-10 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 relative" };
var xe = defineComponent({
  __name: "Cookies",
  setup(Z) {
    const { cookies: p2, cookieMutators: g } = rt(), { collapsedSidebarFolders: i, toggleSidebarFolder: k2 } = a2(), b = useRouter(), E = () => {
      const t = Object.keys(p2).length, e = createCookie({
        uid: nanoid(),
        name: `Cookie ${t}`,
        value: "",
        domain: "example.com",
        path: "/",
        secure: false,
        httpOnly: false,
        sameSite: "None"
      });
      g.add(e), b.push(e.uid);
    }, z = (t) => {
      g.delete(t);
      const e = Object.values(p2).filter(
        (o) => o.uid !== t
      );
      if (e.length > 1) {
        const o = e[e.length - 1];
        b.push(o.uid);
      } else e.length === 1 && e[0].uid === "default" && b.push("default");
    }, _3 = computed(() => {
      const t = {};
      return Object.values(p2).forEach((e) => {
        e.domain && e.path && (t[e.domain] || (t[e.domain] = {}), t[e.domain][e.path] || (t[e.domain][e.path] = []), t[e.domain][e.path].push(e));
      }), t;
    }), C = (t) => i[t];
    return onMounted(() => {
      const t = Object.keys(_3.value), e = Object.entries(_3.value).flatMap(
        ([o, r]) => Object.keys(r).map((d2) => o + d2)
      );
      t.forEach((o) => {
        i[o] = true;
      }), e.forEach((o) => {
        i[o] = true;
      });
    }), (t, e) => (openBlock(), createBlock(p, null, {
      default: withCtx(() => [
        createVNode(a, null, {
          default: withCtx(() => [
            createVNode(unref(I), { title: "Cookies" }, {
              content: withCtx(() => [
                createBaseVNode("div", K, [
                  createVNode(d, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_3.value, (o, r) => (openBlock(), createElementBlock("div", { key: r }, [
                        createBaseVNode("button", {
                          class: "flex font-medium gap-1.5 items-center px-2 py-1.5 text-left text-sm w-full break-words rounded hover:bg-b-2",
                          type: "button",
                          onClick: (d2) => unref(k2)(r)
                        }, [
                          createVNode(unref(m), {
                            class: normalizeClass(["text-c-3", {
                              "rotate-90": unref(i)[r]
                            }]),
                            icon: "ChevronRight",
                            size: "sm",
                            thickness: "2.5"
                          }, null, 8, ["class"]),
                          createTextVNode(" " + toDisplayString(r), 1)
                        ], 8, Q),
                        withDirectives(createBaseVNode("div", U, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(o, (d2, c) => (openBlock(), createElementBlock("div", { key: c }, [
                            createBaseVNode("button", {
                              class: "flex font-medium gap-1.5 items-center pl-5 pr-2 py-1.5 text-left text-sm w-full break-words rounded hover:bg-b-2",
                              type: "button",
                              onClick: (u3) => unref(k2)(r + c)
                            }, [
                              createVNode(unref(m), {
                                class: normalizeClass(["text-c-3", {
                                  "rotate-90": unref(i)[r + c]
                                }]),
                                icon: "ChevronRight",
                                size: "sm",
                                thickness: "2.5"
                              }, null, 8, ["class"]),
                              createTextVNode(" " + toDisplayString(c), 1)
                            ], 8, X),
                            withDirectives(createBaseVNode("div", Y, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(d2, (u3) => (openBlock(), createBlock(a3, {
                                key: u3.uid,
                                class: "cookie text-xs",
                                variable: { name: u3.name, uid: u3.uid },
                                warningMessage: "Are you sure you want to delete this cookie?",
                                onDelete: (ee) => z(u3.uid)
                              }, null, 8, ["variable", "onDelete"]))), 128))
                            ], 512), [
                              [vShow, C(r + c)]
                            ])
                          ]))), 128))
                        ], 512), [
                          [vShow, C(r)]
                        ])
                      ]))), 128))
                    ]),
                    _: 1
                  })
                ])
              ]),
              button: withCtx(() => [
                createVNode(k, { click: E }, {
                  title: withCtx(() => [
                    createTextVNode("Add Item")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(x, { class: "flex-1" }, {
              default: withCtx(() => [
                createVNode(F),
                createVNode(w2)
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
  xe as default
};
//# sourceMappingURL=Cookies.vue-TQVLWZ3U.js.map
