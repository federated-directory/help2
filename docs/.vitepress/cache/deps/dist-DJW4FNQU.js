import {
  A,
  a,
  f,
  m as m2,
  n
} from "./chunk-YZGRN2WK.js";
import {
  LS_KEYS,
  P,
  RouterView,
  createWorkspace,
  d,
  f as f2,
  getNestedValue,
  lt,
  r,
  rt,
  s,
  useRouter
} from "./chunk-5TRJMYYP.js";
import {
  B,
  C,
  C3 as C2,
  F,
  L,
  O,
  W,
  capitalize,
  l,
  m2 as m,
  objectMerge,
  v
} from "./chunk-2W4MFJRL.js";
import {
  Fragment,
  KeepAlive,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  nextTick,
  normalizeClass,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-XKDLJUKD.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@scalar/api-client/dist/components/ScreenReader.vue2.js
var s2 = {
  key: 0,
  class: "screenreader-only"
};
var d2 = defineComponent({
  __name: "ScreenReader",
  props: {
    if: { type: Boolean, default: true }
  },
  setup(a2) {
    return (e2, l2) => e2.$props.if ? (openBlock(), createElementBlock("span", s2, [
      renderSlot(e2.$slots, "default", {}, void 0, true)
    ])) : renderSlot(e2.$slots, "default", { key: 1 }, void 0, true);
  }
});

// node_modules/@scalar/api-client/dist/components/ScreenReader.vue.js
var c = s(d2, [["__scopeId", "data-v-681ebf2c"]]);

// node_modules/@scalar/api-client/dist/hooks/useDarkModeState.js
var t = ref(false);
function c2(a2) {
  var n2;
  const r4 = () => {
    var o, i;
    const e2 = typeof window < "u" ? (o = window.localStorage) == null ? void 0 : o.getItem("isDark") : null;
    return typeof e2 == "string" ? !!JSON.parse(e2) : !!(typeof window < "u" && typeof (window == null ? void 0 : window.matchMedia) == "function" && ((i = window == null ? void 0 : window.matchMedia("(prefers-color-scheme: dark)")) != null && i.matches));
  }, d5 = () => {
    var e2;
    t.value = !t.value, typeof window < "u" && ((e2 = window == null ? void 0 : window.localStorage) == null || e2.setItem("isDark", JSON.stringify(t.value)));
  };
  function l2(e2) {
    var o;
    t.value = e2, typeof window < "u" && ((o = window == null ? void 0 : window.localStorage) == null || o.setItem("isDark", JSON.stringify(t.value)));
  }
  return t.value = (typeof window > "u" ? null : JSON.parse(((n2 = window.localStorage) == null ? void 0 : n2.getItem("isDark")) || "null")) ?? a2 ?? r4(), watch(
    t,
    (e2) => {
      typeof document > "u" || (document.body.classList.toggle("dark-mode", e2), document.body.classList.toggle("light-mode", !e2));
    },
    { immediate: true }
  ), {
    isDark: t,
    toggleDarkMode: d5,
    setDarkMode: l2
  };
}

// node_modules/@scalar/api-client/dist/components/DarkModeToggle/DarkModeIconToggle.vue.js
var w = defineComponent({
  __name: "DarkModeIconToggle",
  setup(g4) {
    const { toggleDarkMode: t2, isDark: a2 } = c2();
    return (k5, o) => (openBlock(), createElementBlock("button", {
      class: "min-w-[37px] max-w-[42px] hover:bg-b-3 flex items-center justify-center rounded-lg p-[7px] text-c-3 focus:text-c-1 w-full aspect-square scalar-app-nav-padding",
      type: "button",
      onClick: o[0] || (o[0] = //@ts-ignore
      (...n2) => unref(t2) && unref(t2)(...n2))
    }, [
      createVNode(unref(m), {
        class: "block h-6 w-6",
        icon: "LightDarkModeToggle",
        thickness: "1.5"
      }),
      createVNode(c, null, {
        default: withCtx(() => [
          createTextVNode(" Switch to " + toDisplayString(unref(a2) ? "Light" : "Dark") + " Mode ", 1)
        ]),
        _: 1
      })
    ]));
  }
});

// node_modules/@scalar/api-client/dist/constants.js
var e = [
  { prettyName: "Request", name: "request", icon: "ExternalLink" },
  { prettyName: "Cookies", name: "cookies", icon: "Cookie" },
  { prettyName: "Env Vars", name: "environment", icon: "Brackets" }
  // { prettyName: 'Servers', name: 'servers', icon: 'Server' },
  // { label: 'Git Sync', icon: 'Branch', path: '/git-sync' },
];

// node_modules/@scalar/api-client/dist/components/SideNav/SideHelp.vue.js
var d3 = {
  class: "min-w-[37px] max-w-[42px] hover:bg-b-3 flex items-center justify-center rounded-lg p-[7px] text-c-3 focus:text-c-1 scalar-app-nav-padding",
  type: "button"
};
var _ = createBaseVNode("span", { class: "px-2.5 py-1.5 text-xs text-c-2 font-medium" }, "Support", -1);
var p = {
  class: "no-underline block",
  href: "https://discord.gg/scalar",
  target: "_blank"
};
var u = { class: "flex items-center justify-center" };
var f3 = createBaseVNode("span", null, "Discord", -1);
var h = {
  class: "no-underline block",
  href: "https://github.com/scalar/scalar",
  target: "_blank"
};
var m3 = { class: "flex items-center justify-center" };
var x = createBaseVNode("span", null, "GitHub", -1);
var g = {
  class: "no-underline block",
  href: "mailto:marc@scalar.com",
  target: "_blank"
};
var b = { class: "flex items-center justify-center" };
var k = createBaseVNode("span", null, "Email", -1);
var w2 = createBaseVNode("span", { class: "px-2.5 py-1.5 text-xs text-c-2 font-medium" }, "Product", -1);
var y = {
  class: "no-underline block",
  href: "https://scalar.com/changelog",
  target: "_blank"
};
var v2 = { class: "flex items-center justify-center" };
var j = createBaseVNode("span", null, "Changelog", -1);
var z = {
  class: "no-underline block",
  href: "https://github.com/scalar/scalar/issues/2669",
  target: "_blank"
};
var S = { class: "flex items-center justify-center" };
var C3 = createBaseVNode("span", null, "Roadmap", -1);
var I = defineComponent({
  __name: "SideHelp",
  setup(D2) {
    return (H2, E4) => (openBlock(), createBlock(unref(O), {
      class: "max-w-[150px]",
      placement: "top-end"
    }, {
      items: withCtx(() => [
        _,
        createBaseVNode("a", p, [
          createVNode(unref(C), { class: "flex items-center gap-1.5 w-full" }, {
            default: withCtx(() => [
              createBaseVNode("div", u, [
                createVNode(unref(m), {
                  icon: "DiscordLine",
                  size: "xs",
                  thickness: "1.75"
                })
              ]),
              f3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("a", h, [
          createVNode(unref(C), { class: "flex items-center gap-1.5 w-full" }, {
            default: withCtx(() => [
              createBaseVNode("div", m3, [
                createVNode(unref(m), {
                  icon: "GitHubLine",
                  size: "xs",
                  thickness: "1.75"
                })
              ]),
              x
            ]),
            _: 1
          })
        ]),
        createBaseVNode("a", g, [
          createVNode(unref(C), { class: "flex items-center gap-1.5 w-full" }, {
            default: withCtx(() => [
              createBaseVNode("div", b, [
                createVNode(unref(m), {
                  icon: "Email",
                  size: "xs"
                })
              ]),
              k
            ]),
            _: 1
          })
        ]),
        w2,
        createBaseVNode("a", y, [
          createVNode(unref(C), { class: "flex items-center gap-1.5 w-full" }, {
            default: withCtx(() => [
              createBaseVNode("div", v2, [
                createVNode(unref(m), {
                  icon: "Changelog",
                  size: "xs",
                  thickness: "1.75"
                })
              ]),
              j
            ]),
            _: 1
          })
        ]),
        createBaseVNode("a", z, [
          createVNode(unref(C), { class: "flex items-center gap-1.5 w-full" }, {
            default: withCtx(() => [
              createBaseVNode("div", S, [
                createVNode(unref(m), {
                  icon: "Roadmap",
                  size: "xs",
                  thickness: "1.75"
                })
              ]),
              C3
            ]),
            _: 1
          })
        ])
      ]),
      default: withCtx(() => [
        createBaseVNode("button", d3, [
          createVNode(unref(m), {
            icon: "Help",
            thickness: "1.5"
          })
        ])
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/components/SideNav/SideNavLink.vue.js
var k2 = { class: "no-underline font-medium text-[11px] hidden scalar-app-show capitalize" };
var x2 = { class: "sr-only" };
var b2 = defineComponent({
  __name: "SideNavLink",
  props: {
    icon: {},
    name: {},
    prettyName: {},
    active: { type: Boolean }
  },
  setup(g4) {
    const { activeWorkspace: n2 } = rt();
    return useRouter(), (e2, h2) => {
      const r4 = resolveComponent("router-link");
      return openBlock(), createBlock(r4, {
        activeClass: "active-link",
        class: "flex flex-col items-center gap-1 group no-underline",
        to: `/workspace/${unref(n2).uid}/${e2.name}/default`
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["min-w-[37px] max-w-[42px] group-hover:bg-b-3 active:text-c-1 flex items-center justify-center rounded-lg p-[7px] scalar-app-nav-padding text-c-3", {
              "bg-b-3 transition-none group-hover:cursor-auto !text-c-1": e2.active
            }])
          }, [
            createVNode(unref(m), {
              icon: e2.icon,
              thickness: "1.5"
            }, null, 8, ["icon"])
          ], 2),
          createBaseVNode("div", k2, toDisplayString(e2.prettyName), 1),
          createBaseVNode("span", x2, [
            renderSlot(e2.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["to"]);
    };
  }
});

// node_modules/@scalar/api-client/dist/components/SideNav/WorkspaceProfileIcon.vue.js
var k3 = {
  "aria-label": "Workspace Menu",
  class: "workspace-avatar shine-effect",
  type: "button"
};
var f4 = ["src"];
var u2 = { key: 1 };
var U = defineComponent({
  __name: "WorkspaceProfileIcon",
  props: {
    activeUser: {}
  },
  setup(_2) {
    return (e2, d5) => {
      var r4, o, t2, c3;
      return openBlock(), createElementBlock("button", k3, [
        (r4 = e2.activeUser) != null && r4.imageUri ? (openBlock(), createElementBlock("img", {
          key: 0,
          class: "workspace-avatar-image",
          src: e2.activeUser.imageUri
        }, null, 8, f4)) : (o = e2.activeUser) != null && o.displayName && ((t2 = e2.activeUser) != null && t2.displayName[0]) ? (openBlock(), createElementBlock("span", u2, toDisplayString((c3 = e2.activeUser) == null ? void 0 : c3.displayName[0]), 1)) : (openBlock(), createBlock(unref(m), {
          key: 2,
          class: "text-c-1 h-6 w-6",
          icon: "Logo"
        }))
      ]);
    };
  }
});

// node_modules/@scalar/api-client/dist/components/SideNav/SideNav.vue2.js
var $ = {
  "aria-label": "Side Navigation",
  class: "text-c-2 w-15 flex flex-col items-center px-2 py-2 scalar-sidenav relative drag-region",
  role: "navigation"
};
var k4 = { class: "mt-3.5 flex flex-col gap-1.5" };
var E = { class: "mt-auto flex flex-col py-1.5" };
var R = { class: "flex items-center no-drag-region" };
var V = { class: "flex items-center no-drag-region" };
var j2 = defineComponent({
  __name: "SideNav",
  setup(w3) {
    const { currentRoute: s3 } = useRouter();
    return (B6, C4) => (openBlock(), createElementBlock("nav", $, [
      createVNode(U, { class: "no-drag-region" }),
      createBaseVNode("ul", k4, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(e), ({ icon: c3, name: o, prettyName: l2 }, m7) => {
          var i;
          return openBlock(), createElementBlock("li", {
            key: m7,
            class: "no-drag-region"
          }, [
            createVNode(b2, {
              active: (i = unref(s3).name) == null ? void 0 : i.startsWith(o),
              icon: c3,
              name: o,
              prettyName: l2
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(o), 1)
              ]),
              _: 2
            }, 1032, ["active", "icon", "name", "prettyName"])
          ]);
        }), 128))
      ]),
      createBaseVNode("ul", E, [
        createBaseVNode("li", R, [
          createVNode(I)
        ]),
        createBaseVNode("li", V, [
          createVNode(w)
        ])
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/SideNav/SideNav.vue.js
var m4 = s(j2, [["__scopeId", "data-v-ed782b2b"]]);

// node_modules/@scalar/api-client/dist/components/TopNav/TopNavItem.vue2.js
var d4 = { class: "nav-item-icon-copy flex flex-1 items-center justify-center gap-1.5" };
var u3 = { class: "nav-item-copy text-xs" };
var g2 = defineComponent({
  __name: "TopNavItem",
  props: {
    hotkey: {},
    active: { type: Boolean },
    label: {},
    icon: {}
  },
  emits: ["click", "close"],
  setup(h2) {
    return (e2, t2) => (openBlock(), createBlock(unref(C2), {
      class: "scalar-client",
      delay: 500,
      resize: "",
      sideOffset: 4
    }, {
      trigger: withCtx(() => [
        createBaseVNode("div", {
          class: normalizeClass(["nav-item webkit-app-no-drag", { "nav-item__active": e2.active }]),
          onClick: t2[1] || (t2[1] = (r4) => e2.$emit("click"))
        }, [
          createBaseVNode("div", d4, [
            createVNode(unref(m), {
              icon: e2.icon,
              size: "xs",
              thickness: "2.5"
            }, null, 8, ["icon"]),
            createBaseVNode("span", u3, toDisplayString(e2.label), 1)
          ]),
          createBaseVNode("button", {
            class: "nav-item-close",
            type: "button",
            onClick: t2[0] || (t2[0] = (r4) => e2.$emit("close"))
          }, [
            createVNode(unref(m), {
              icon: "Close",
              thickness: "1.75"
            })
          ])
        ], 2)
      ]),
      content: withCtx(() => [
        e2.hotkey ? (openBlock(), createBlock(P, {
          key: 0,
          hotkey: e2.hotkey
        }, null, 8, ["hotkey"])) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/components/TopNav/TopNavItem.vue.js
var r2 = s(g2, [["__scopeId", "data-v-ffc99777"]]);

// node_modules/@scalar/api-client/dist/components/TopNav/TopNav.vue2.js
var $2 = (i) => (pushScopeId("data-v-91b3e5a4"), i = i(), popScopeId(), i);
var D = { class: "flex h-10 t-app__top-nav" };
var F2 = $2(() => createBaseVNode("div", { class: "t-app__top-nav-draggable" }, null, -1));
var H = { class: "flex h-10 flex-1 items-center justify-center gap-1.5 text-sm font-medium relative" };
var O2 = {
  key: 0,
  class: "flex items-center gap-1 w-full justify-center"
};
var Z = defineComponent({
  __name: "TopNav",
  setup(i) {
    const { activeRequest: N, router: n2 } = rt(), t2 = reactive([{ label: "", path: "", icon: "Add" }]), a2 = ref(0);
    function m7() {
      var o;
      const e2 = e.find((r4) => n2.currentRoute.value.name == r4.name);
      e2 && ((e2 == null ? void 0 : e2.name) === "request" ? t2[a2.value] = {
        label: ((o = N.value) == null ? void 0 : o.summary) || "",
        path: n2.currentRoute.value.path,
        icon: e2.icon
      } : t2[a2.value] = {
        label: capitalize(e2 == null ? void 0 : e2.name) || "",
        path: n2.currentRoute.value.path,
        icon: e2.icon
      });
    }
    function v4() {
      n2.push(t2[a2.value].path);
    }
    function d5() {
      t2.push({ label: "", path: "", icon: "Add" }), a2.value = t2.length - 1, m7();
    }
    function l2(e2) {
      a2.value = e2, v4();
    }
    watch(
      () => n2.currentRoute.value.path,
      () => {
        m7();
      },
      { immediate: true }
    );
    function f5(e2) {
      t2.splice(e2, 1), a2.value = Math.min(
        a2.value,
        t2.length - 1
      ), v4();
    }
    const I4 = computed(() => a2.value), h2 = (e2) => {
      if (e2.addTopNav && d5(), e2.closeTopNav && f5(a2.value), e2.navigateTopNavLeft && l2(Math.max(a2.value - 1, 0)), e2.navigateTopNavRight && l2(Math.min(a2.value + 1, t2.length - 1)), e2.jumpToTab) {
        const o = Number(e2.jumpToTab.key) - 1;
        o >= 0 && o < t2.length && l2(o);
      }
      e2.jumpToLastTab && l2(t2.length - 1);
    };
    return onMounted(() => a.on(h2)), onBeforeUnmount(() => a.off(h2)), (e2, o) => (openBlock(), createElementBlock("nav", D, [
      F2,
      createBaseVNode("div", H, [
        t2.length === 1 ? (openBlock(), createElementBlock("div", O2, [
          createVNode(unref(m), {
            icon: t2[0].icon,
            size: "xs",
            thickness: "2.5"
          }, null, 8, ["icon"]),
          createBaseVNode("div", null, toDisplayString(t2[0].label), 1)
        ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(t2, (r4, c3) => (openBlock(), createBlock(r2, {
          key: c3,
          active: c3 === I4.value,
          hotkey: (c3 + 1).toString(),
          icon: r4.icon,
          label: r4.label,
          onClick: (y2) => l2(c3),
          onClose: (y2) => f5(c3)
        }, null, 8, ["active", "hotkey", "icon", "label", "onClick", "onClose"]))), 128)),
        createBaseVNode("button", {
          class: "text-c-3 hover:bg-b-3 p-1.5 rounded-lg webkit-app-no-drag",
          type: "button",
          onClick: d5
        }, [
          createVNode(unref(m), {
            icon: "Add",
            size: "xs",
            thickness: "2.5"
          })
        ])
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/TopNav/TopNav.vue.js
var m5 = s(Z, [["__scopeId", "data-v-91b3e5a4"]]);

// node_modules/@scalar/api-client/dist/libs/local-storage.js
var g3 = (a2) => {
  const {
    collectionMutators: t2,
    cookieMutators: e2,
    environmentMutators: r4,
    folderMutators: l2,
    requestExampleMutators: c3,
    requestMutators: s3,
    serverMutators: u4,
    securitySchemeMutators: d5,
    workspaceMutators: S2
  } = a2;
  try {
    t2.loadLocalStorage(), e2.loadLocalStorage(), r4.loadLocalStorage(), l2.loadLocalStorage(), c3.loadLocalStorage(), s3.loadLocalStorage(), u4.loadLocalStorage(), d5.loadLocalStorage(), S2.loadLocalStorage(), localStorage.setItem("version", "2.0.53");
  } catch (o) {
    return console.error(o), o;
  }
};

// node_modules/@scalar/api-client/dist/components/CommandPalette/CommandPaletteCollection.vue.js
var M = { class: "flex w-full flex-col gap-3" };
var V2 = { class: "gap-3 rounded bg-b-2 focus-within:bg-b-1 focus-within:shadow-border min-h-20 relative" };
var B2 = createBaseVNode("label", {
  class: "absolute w-full h-full opacity-0 cursor-text",
  for: "collectionanme"
}, null, -1);
var K = ["onKeydown"];
var E2 = { class: "flex" };
var I2 = createBaseVNode("div", { class: "flex flex-1 gap-2 max-h-8" }, null, -1);
var P2 = defineComponent({
  __name: "CommandPaletteCollection",
  emits: ["close"],
  setup(S2, { emit: c3 }) {
    const i = c3, { activeWorkspace: r4, collectionMutators: u4 } = rt(), o = ref(""), l2 = () => {
      u4.add(
        {
          spec: {
            openapi: "3.1.0",
            info: {
              title: o.value,
              version: "0.0.1"
            }
          }
        },
        r4.value.uid
      ), i("close");
    }, n2 = ref(null);
    return onMounted(() => {
      var t2;
      (t2 = n2.value) == null || t2.focus();
    }), (t2, s3) => (openBlock(), createElementBlock("div", M, [
      createBaseVNode("div", V2, [
        B2,
        withDirectives(createBaseVNode("input", {
          id: "collectionanme",
          ref_key: "collectionInput",
          ref: n2,
          "onUpdate:modelValue": s3[0] || (s3[0] = (d5) => o.value = d5),
          autocomplete: "off",
          class: "border-transparent outline-none w-full pl-8 text-sm min-h-8 py-1.5",
          "data-form-type": "other",
          "data-lpignore": "true",
          label: "Collection Name",
          placeholder: "Collection Name",
          onKeydown: withKeys(withModifiers(l2, ["prevent"]), ["enter"])
        }, null, 40, K), [
          [vModelText, o.value]
        ])
      ]),
      createBaseVNode("div", E2, [
        I2,
        createVNode(unref(W), {
          class: "max-h-8 text-xs p-0 px-3",
          onClick: l2
        }, {
          default: withCtx(() => [
            createTextVNode(" Continue ")
          ]),
          _: 1
        })
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/CommandPalette/CommandPaletteExample.vue.js
var L2 = { class: "flex w-full flex-col gap-3" };
var P3 = { class: "gap-3 rounded bg-b-2 focus-within:bg-b-1 focus-within:shadow-border min-h-20 relative" };
var U2 = createBaseVNode("label", {
  class: "absolute w-full h-full opacity-0 cursor-text",
  for: "examplename"
}, null, -1);
var A2 = ["onKeydown"];
var G = { class: "flex gap-2" };
var J = { class: "flex flex-1 max-h-8" };
var O3 = { class: "flex items-center gap-2" };
var Q = { class: "max-h-40 custom-scroll" };
var oe = defineComponent({
  __name: "CommandPaletteExample",
  props: {
    metaData: {}
  },
  emits: ["close"],
  setup(b3, { emit: k5 }) {
    const y2 = b3, g4 = k5, { push: C4 } = useRouter(), {
      activeRequest: D2,
      activeWorkspace: E4,
      activeWorkspaceRequests: S2,
      requests: N,
      requestExampleMutators: M4
    } = rt(), c3 = ref(""), o = ref(
      // Ensure we pre-select the correct request
      N[y2.metaData ?? ""] ?? D2.value
    ), p2 = (e2) => o.value = e2, u4 = ref(null);
    onMounted(() => {
      var e2;
      return (e2 = u4.value) == null ? void 0 : e2.focus();
    });
    const x3 = () => {
      const e2 = M4.add(
        o.value,
        c3.value
      );
      e2 && (C4(
        `/workspace/${E4.value.uid}/request/${o.value.uid}/examples/${e2.uid}`
      ), g4("close"));
    };
    return onMounted(() => {
      var e2;
      (e2 = u4.value) == null || e2.focus();
    }), (e2, r4) => (openBlock(), createElementBlock("div", L2, [
      createBaseVNode("div", P3, [
        U2,
        withDirectives(createBaseVNode("input", {
          id: "examplename",
          ref_key: "exampleInput",
          ref: u4,
          "onUpdate:modelValue": r4[0] || (r4[0] = (t2) => c3.value = t2),
          class: "border-transparent outline-none w-full pl-8 text-sm min-h-8 py-1.5",
          label: "Example Name",
          placeholder: "Example Name",
          onKeydown: withKeys(withModifiers(x3, ["prevent"]), ["enter"])
        }, null, 40, A2), [
          [vModelText, c3.value]
        ])
      ]),
      createBaseVNode("div", G, [
        createBaseVNode("div", J, [
          createVNode(unref(O), {
            placement: "bottom",
            resize: ""
          }, {
            items: withCtx(() => [
              createBaseVNode("div", Q, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(S2), (t2) => (openBlock(), createBlock(unref(C), {
                  key: t2.uid,
                  class: "flex h-7 w-full items-center justify-between px-1 pr-[26px]",
                  onClick: (X) => p2(t2)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(t2.summary) + " ", 1),
                    createVNode(f, {
                      method: t2.method
                    }, null, 8, ["method"])
                  ]),
                  _: 2
                }, 1032, ["onClick"]))), 128))
              ])
            ]),
            default: withCtx(() => [
              createVNode(unref(W), {
                class: "justify-between p-2 max-h-8 w-full gap-1 text-xs hover:bg-b-2",
                variant: "outlined",
                onClick: r4[1] || (r4[1] = (t2) => p2(o.value))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(o.value.summary) + " ", 1),
                  createBaseVNode("div", O3, [
                    createVNode(f, {
                      method: o.value.method
                    }, null, 8, ["method"]),
                    createVNode(unref(m), {
                      class: "text-c-3",
                      icon: "ChevronDown",
                      size: "xs"
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createVNode(unref(W), {
          class: "max-h-8 text-xs p-0 px-3",
          onClick: x3
        }, {
          default: withCtx(() => [
            createTextVNode(" Create Example ")
          ]),
          _: 1
        })
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/CommandPalette/CommandPaletteFolder.vue.js
var T = { class: "flex w-full flex-col gap-3" };
var U3 = { class: "gap-3 rounded bg-b-2 focus-within:bg-b-1 focus-within:shadow-border min-h-20 relative" };
var W2 = createBaseVNode("label", {
  class: "absolute w-full h-full opacity-0 cursor-text",
  for: "foldername"
}, null, -1);
var j3 = ["onKeydown"];
var L3 = { class: "flex" };
var P4 = { class: "flex flex-1 gap-2 max-h-8" };
var J2 = defineComponent({
  __name: "CommandPaletteFolder",
  emits: ["close"],
  setup(q, { emit: h2 }) {
    var p2;
    const _2 = h2, { activeWorkspaceCollections: b3, folderMutators: w3, activeCollection: C4 } = rt(), s3 = ref(""), d5 = ref(((p2 = C4.value) == null ? void 0 : p2.uid) ?? ""), u4 = computed(
      () => b3.value.map((e2) => {
        var l2, o;
        return {
          id: e2.uid,
          label: ((o = (l2 = e2.spec) == null ? void 0 : l2.info) == null ? void 0 : o.title) ?? ""
        };
      })
    ), t2 = computed({
      get: () => u4.value.find(
        ({ id: e2 }) => e2 === d5.value
      ),
      set: (e2) => {
        e2 != null && e2.id && (d5.value = e2.id);
      }
    }), f5 = () => {
      s3.value && t2.value && (w3.add(
        {
          name: s3.value
        },
        d5.value
      ), _2("close"));
    }, m7 = ref(null);
    return onMounted(() => {
      var e2;
      (e2 = m7.value) == null || e2.focus();
    }), (e2, l2) => (openBlock(), createElementBlock("div", T, [
      createBaseVNode("div", U3, [
        W2,
        withDirectives(createBaseVNode("input", {
          id: "foldername",
          ref_key: "folderInput",
          ref: m7,
          "onUpdate:modelValue": l2[0] || (l2[0] = (o) => s3.value = o),
          autocomplete: "off",
          class: "border-transparent outline-none w-full pl-8 text-sm min-h-8 py-1.5",
          "data-form-type": "other",
          "data-lpignore": "true",
          label: "Folder Name",
          placeholder: "Folder Name",
          onKeydown: withKeys(withModifiers(f5, ["prevent"]), ["enter"])
        }, null, 40, j3), [
          [vModelText, s3.value]
        ])
      ]),
      createBaseVNode("div", L3, [
        createBaseVNode("div", P4, [
          createVNode(unref(F), {
            modelValue: t2.value,
            "onUpdate:modelValue": l2[1] || (l2[1] = (o) => t2.value = o),
            options: u4.value
          }, {
            default: withCtx(() => [
              createVNode(unref(W), {
                class: "justify-between p-2 max-h-8 w-full gap-1 text-xs hover:bg-b-2",
                variant: "outlined"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", {
                    class: normalizeClass(t2.value ? "text-c-1" : "text-c-3")
                  }, toDisplayString(t2.value ? t2.value.label : "Select Collection"), 3),
                  createVNode(unref(m), {
                    class: "text-c-3",
                    icon: "ChevronDown",
                    size: "xs"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "options"])
        ]),
        createVNode(unref(W), {
          class: "max-h-8 text-xs p-0 px-3",
          onClick: f5
        }, {
          default: withCtx(() => [
            createTextVNode(" Create Folder ")
          ]),
          _: 1
        })
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/CommandPalette/CommandPaletteImport.vue.js
var A3 = { class: "flex w-full flex-col gap-3" };
var B3 = { class: "gap-3 rounded bg-b-2 focus-within:bg-b-1 focus-within:shadow-border min-h-20 relative" };
var K2 = createBaseVNode("label", {
  class: "absolute w-full h-full opacity-0 cursor-text",
  for: "requestimport"
}, null, -1);
var L4 = ["onKeydown"];
var M2 = { class: "flex gap-2" };
var P5 = { class: "flex flex-1 gap-2 max-h-8" };
var W3 = defineComponent({
  __name: "CommandPaletteImport",
  emits: ["close"],
  setup(V5, { emit: h2 }) {
    const n2 = h2, { activeWorkspace: _2, importSpecFile: x3, importSpecFromUrl: g4 } = rt(), r4 = ref(""), { open: w3 } = n({
      onChange: async (e2) => {
        const s3 = e2 == null ? void 0 : e2[0];
        if (s3) {
          const i = new FileReader();
          i.onload = async (v4) => {
            var p2;
            const b3 = (p2 = v4.target) == null ? void 0 : p2.result;
            x3(b3, _2.value.uid), l2(), n2("close");
          }, i.readAsText(s3);
        }
      },
      multiple: false,
      accept: ".json,.yaml,.yml"
    }), l2 = async () => {
      r4.value && (await g4(r4.value), n2("close"));
    }, c3 = ref(null);
    return onMounted(() => {
      var e2;
      (e2 = c3.value) == null || e2.focus();
    }), (e2, s3) => (openBlock(), createElementBlock("div", A3, [
      createBaseVNode("div", B3, [
        K2,
        createBaseVNode("input", {
          id: "requestimport",
          ref_key: "importInput",
          ref: c3,
          class: "border-transparent outline-none w-full pl-8 text-sm min-h-8 py-1.5",
          label: "Paste Swagger File URL",
          placeholder: "Paste Swagger File URL",
          onKeydown: withKeys(withModifiers(l2, ["prevent"]), ["enter"])
        }, null, 40, L4)
      ]),
      createBaseVNode("div", M2, [
        createBaseVNode("div", P5, [
          createVNode(unref(W), {
            class: "p-2 max-h-8 gap-1 text-xs hover:bg-b-2 relative",
            variant: "outlined",
            onClick: unref(w3)
          }, {
            default: withCtx(() => [
              createTextVNode(" JSON, or YAML Files "),
              createVNode(unref(m), {
                class: "text-c-3 -rotate-90",
                icon: "ArrowRight",
                size: "sm"
              })
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        createVNode(unref(W), {
          class: "max-h-8 text-xs p-0 px-3",
          onClick: l2
        }, {
          default: withCtx(() => [
            createTextVNode(" Import Collection ")
          ]),
          _: 1
        })
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/CommandPalette/CommandPaletteRequest.vue.js
var Y = { class: "flex w-full flex-col gap-3" };
var Z2 = { class: "gap-3 rounded bg-b-2 focus-within:bg-b-1 focus-within:shadow-border min-h-20 relative" };
var ee = createBaseVNode("label", {
  class: "absolute w-full h-full opacity-0 cursor-text",
  for: "requestname"
}, null, -1);
var te = ["onKeydown"];
var le = { class: "flex" };
var ae = { class: "flex flex-1 gap-2 max-h-8" };
var re = defineComponent({
  __name: "CommandPaletteRequest",
  emits: ["close"],
  setup(oe2, { emit: R3 }) {
    var g4, q;
    const I4 = R3, { push: B6 } = useRouter(), {
      activeCollection: D2,
      activeWorkspace: E4,
      activeWorkspaceCollections: h2,
      requestMutators: j4,
      activeRequest: z2,
      folders: x3
    } = rt(), i = ref(""), f5 = ref("GET"), c3 = ref(((g4 = D2.value) == null ? void 0 : g4.uid) ?? ""), b3 = computed(
      () => h2.value.map((e2) => {
        var t2;
        return {
          id: e2.uid,
          label: ((t2 = e2.spec.info) == null ? void 0 : t2.title) ?? "Unititled Collection"
        };
      })
    ), n2 = computed({
      get: () => b3.value.find(({ id: e2 }) => e2 === c3.value),
      set: (e2) => {
        e2 != null && e2.id && (c3.value = e2.id);
      }
    }), m7 = computed(
      () => h2.value.flatMap(
        (e2) => e2.uid === c3.value ? e2.childUids.flatMap((t2) => {
          const l2 = x3[t2];
          return l2 ? [
            {
              id: l2.uid,
              label: l2.name
            }
          ] : [];
        }) : []
      )
    ), _2 = ref(
      ((q = Object.values(x3).find(
        (e2) => {
          var t2;
          return e2.childUids.includes((t2 = z2.value) == null ? void 0 : t2.uid);
        }
      )) == null ? void 0 : q.uid) ?? ""
    ), a2 = computed({
      get: () => m7.value.find(({ id: e2 }) => e2 === _2.value),
      set: (e2) => {
        e2 != null && e2.id && (_2.value = e2.id);
      }
    });
    function F5(e2) {
      f5.value = e2;
    }
    const w3 = () => {
      var l2, y2, V5;
      if (!c3.value && !((l2 = a2.value) != null && l2.id)) return;
      const e2 = ((y2 = a2.value) == null ? void 0 : y2.id) ?? ((V5 = n2.value) == null ? void 0 : V5.id), t2 = j4.add(
        {
          path: "",
          method: f5.value.toUpperCase(),
          description: i.value,
          operationId: i.value,
          summary: i.value,
          tags: ["default"]
        },
        e2
      );
      B6(`/workspace/${E4.value.uid}/request/${t2.uid}`), I4("close");
    }, C4 = ref(null);
    return onMounted(() => {
      var e2;
      (e2 = C4.value) == null || e2.focus();
    }), (e2, t2) => (openBlock(), createElementBlock("div", Y, [
      createBaseVNode("div", Z2, [
        ee,
        withDirectives(createBaseVNode("input", {
          id: "requestname",
          ref_key: "requestInput",
          ref: C4,
          "onUpdate:modelValue": t2[0] || (t2[0] = (l2) => i.value = l2),
          autocomplete: "off",
          class: "border-transparent outline-none w-full pl-8 text-sm min-h-8 py-1.5",
          "data-form-type": "other",
          "data-lpignore": "true",
          label: "Request Name",
          placeholder: "Request Name",
          onKeydown: withKeys(withModifiers(w3, ["prevent"]), ["enter"])
        }, null, 40, te), [
          [vModelText, i.value]
        ])
      ]),
      createBaseVNode("div", le, [
        createBaseVNode("div", ae, [
          createVNode(f, {
            isEditable: true,
            isSquare: "",
            method: f5.value,
            onChange: F5
          }, null, 8, ["method"]),
          createVNode(unref(F), {
            modelValue: n2.value,
            "onUpdate:modelValue": t2[1] || (t2[1] = (l2) => n2.value = l2),
            options: b3.value
          }, {
            default: withCtx(() => [
              createVNode(unref(W), {
                class: "justify-between p-2 max-h-8 w-full gap-1 text-xs hover:bg-b-2",
                variant: "outlined"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", {
                    class: normalizeClass(n2.value ? "text-c-1" : "text-c-3")
                  }, toDisplayString(n2.value ? n2.value.label : "Select Collection"), 3),
                  createVNode(unref(m), {
                    class: "text-c-3",
                    icon: "ChevronDown",
                    size: "xs"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "options"]),
          m7.value.length ? (openBlock(), createBlock(unref(F), {
            key: 0,
            modelValue: a2.value,
            "onUpdate:modelValue": t2[2] || (t2[2] = (l2) => a2.value = l2),
            options: m7.value
          }, {
            default: withCtx(() => [
              createVNode(unref(W), {
                class: "justify-between p-2 max-h-8 w-full gap-1 text-xs hover:bg-b-2",
                variant: "outlined"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", {
                    class: normalizeClass(a2.value ? "text-c-1" : "text-c-3")
                  }, toDisplayString(a2.value ? a2.value.label : "Select Folder"), 3),
                  createVNode(unref(m), {
                    class: "text-c-3",
                    icon: "ChevronDown",
                    size: "xs"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "options"])) : createCommentVNode("", true)
        ]),
        createVNode(unref(W), {
          class: "max-h-8 text-xs p-0 px-3",
          onClick: w3
        }, {
          default: withCtx(() => [
            createTextVNode(" Create Request ")
          ]),
          _: 1
        })
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/CommandPalette/CommandPaletteWorkspace.vue.js
var V3 = { class: "flex w-full flex-col gap-3" };
var W4 = { class: "gap-3 rounded bg-b-2 focus-within:bg-b-1 focus-within:shadow-border min-h-20 relative" };
var B4 = createBaseVNode("label", {
  class: "absolute w-full h-full opacity-0 cursor-text",
  for: "workspacename"
}, null, -1);
var K3 = ["onKeydown"];
var E3 = { class: "flex" };
var I3 = createBaseVNode("div", { class: "flex flex-1 gap-2 max-h-8" }, null, -1);
var U4 = defineComponent({
  __name: "CommandPaletteWorkspace",
  emits: ["close"],
  setup(S2, { emit: r4 }) {
    const c3 = r4, { push: i } = useRouter(), { workspaceMutators: u4 } = rt(), t2 = ref(""), s3 = () => {
      const e2 = u4.add({
        name: t2.value
      });
      i(`/workspace/${e2.uid}`), c3("close");
    }, a2 = ref(null);
    return onMounted(() => {
      var e2;
      (e2 = a2.value) == null || e2.focus();
    }), (e2, n2) => (openBlock(), createElementBlock("div", V3, [
      createBaseVNode("div", W4, [
        B4,
        withDirectives(createBaseVNode("input", {
          id: "workspacename",
          ref_key: "workspaceInput",
          ref: a2,
          "onUpdate:modelValue": n2[0] || (n2[0] = (p2) => t2.value = p2),
          autocomplete: "off",
          autofocus: "",
          class: "border-transparent outline-none w-full pl-8 text-sm min-h-8 py-1.5",
          "data-form-type": "other",
          "data-lpignore": "true",
          label: "Workspace Name",
          placeholder: "Workspace Name",
          onKeydown: withKeys(withModifiers(s3, ["prevent"]), ["enter"])
        }, null, 40, K3), [
          [vModelText, t2.value]
        ])
      ]),
      createBaseVNode("div", E3, [
        I3,
        createVNode(unref(W), {
          class: "max-h-8 text-xs p-0 px-3",
          onClick: s3
        }, {
          default: withCtx(() => [
            createTextVNode(" Continue ")
          ]),
          _: 1
        })
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/CommandPalette/TheCommandPalette.vue2.js
var le2 = { class: "commandmenu" };
var se = { class: "bg-b-2 flex items-center rounded mb-2 pl-2 focus-within:bg-b-1 focus-within:shadow-border" };
var ce = { for: "commandmenu" };
var me = ["onClick"];
var re2 = {
  key: 0,
  class: "text-c-3 text-center text-sm p-2 pt-3"
};
var ie = {
  name: "TheCommandPalette"
};
var ue = {
  "Import Collection": W3,
  "Create Request": re,
  "Create Workspace": U4,
  "Add Folder": J2,
  "Create Collection": P2,
  "Add Example": oe
};
var $e = defineComponent({
  ...ie,
  setup(de) {
    const y2 = [
      {
        label: "Add to Request Sidebar",
        commands: [
          {
            name: "Create Request",
            icon: "ExternalLink"
          },
          {
            name: "Import Collection",
            icon: "Import"
          },
          {
            name: "Add Folder",
            icon: "Folder"
          },
          {
            name: "Create Collection",
            icon: "Collection"
          },
          {
            name: "Add Example",
            icon: "Example"
          }
        ]
      },
      {
        label: "More Actions",
        commands: [
          {
            name: "Create Workspace",
            icon: "Workspace"
          },
          {
            name: "Add Server",
            icon: "Brackets",
            path: "/servers"
          },
          {
            name: "Add Environment",
            icon: "Server",
            path: "/environment"
          },
          {
            name: "Add Cookie",
            icon: "Cookie",
            path: "/cookies"
          }
        ]
      }
    ], c3 = B(), { push: z2 } = useRouter(), { activeWorkspace: M4 } = rt(), S2 = ref(), m7 = ref(""), r4 = ref(null), d5 = ref(-1), $3 = ref([]), C4 = computed(
      () => y2.reduce((e2, n2) => {
        const o = n2.commands.filter(
          (t2) => t2.name.toLowerCase().includes(m7.value.toLowerCase())
        );
        return [...e2, ...o];
      }, [])
    ), p2 = () => {
      c3.hide(), m7.value = "", r4.value = null, d5.value = -1;
    }, A4 = (e2) => {
      "path" in e2 ? (z2(`/workspace/${M4.value.uid}${e2.path}`), p2()) : r4.value = e2.name;
    }, D2 = ref(), P6 = ({
      commandName: e2,
      metaData: n2
    } = {}) => {
      r4.value = e2 ?? null, S2.value = n2, c3.show(), nextTick(() => {
        var o;
        return (o = D2.value) == null ? void 0 : o.focus();
      });
    }, R3 = (e2, n2) => {
      var v4;
      if (!c3.open) return;
      n2.preventDefault();
      const o = e2 === "up" ? -1 : 1, t2 = C4.value.length;
      d5.value = (d5.value + o + t2) % t2, (v4 = $3.value[d5.value]) == null || v4.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, k5 = computed(
      () => C4.value[d5.value]
    ), N = () => {
      k5.value && A4(k5.value);
    }, g4 = (e2) => {
      c3.open && (e2.closeModal && p2(), e2.commandPaletteUp && R3("up", e2.commandPaletteUp), e2.commandPaletteDown && R3("down", e2.commandPaletteDown), e2.commandPaletteSelect && N());
    };
    return onMounted(() => {
      m2.on(P6), a.on(g4);
    }), onBeforeUnmount(() => {
      m2.off(P6), a.off(g4);
    }), (e2, n2) => (openBlock(), createElementBlock(Fragment, null, [
      withDirectives(createBaseVNode("div", {
        class: "commandmenu-clickout",
        onClick: n2[0] || (n2[0] = (o) => p2())
      }, null, 512), [
        [vShow, unref(c3).open]
      ]),
      withDirectives(createBaseVNode("div", le2, [
        r4.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("button", {
            class: "absolute p-0.75 hover:bg-b-3 rounded text-c-3 active:text-c-1 m-1.5 z-10",
            type: "button",
            onClick: n2[2] || (n2[2] = (o) => r4.value = null)
          }, [
            createVNode(unref(m), {
              icon: "ChevronLeft",
              size: "md",
              thickness: "1.5"
            })
          ]),
          (openBlock(), createBlock(resolveDynamicComponent(ue[r4.value]), {
            metaData: S2.value,
            onClose: p2
          }, null, 40, ["metaData"]))
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", se, [
            createBaseVNode("label", ce, [
              createVNode(unref(m), {
                class: "text-c-1 mr-2.5",
                icon: "Search",
                size: "sm",
                thickness: "1.5"
              })
            ]),
            withDirectives(createBaseVNode("input", {
              id: "commandmenu",
              ref_key: "commandInputRef",
              ref: D2,
              "onUpdate:modelValue": n2[1] || (n2[1] = (o) => m7.value = o),
              autocomplete: "off",
              autofocus: "",
              class: "w-full rounded bg-none border-none py-1.5 text-sm focus:outline-none",
              placeholder: "Search commands...",
              type: "text"
            }, null, 512), [
              [vModelText, m7.value]
            ])
          ]),
          (openBlock(), createElementBlock(Fragment, null, renderList(y2, (o) => (openBlock(), createElementBlock(Fragment, {
            key: o.label
          }, [
            withDirectives(createBaseVNode("div", { class: "text-c-3 font-medium text-xs mt-2" }, toDisplayString(o.label), 513), [
              [
                vShow,
                o.commands.filter(
                  (t2) => t2.name.toLowerCase().includes(m7.value.toLowerCase())
                ).length > 0
              ]
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList(o.commands.filter(
              (t2) => t2.name.toLowerCase().includes(m7.value.toLowerCase())
            ), (t2, v4) => {
              var L6;
              return openBlock(), createElementBlock("div", {
                key: t2.name,
                ref_for: true,
                ref: (_2) => {
                  _2 && ($3.value[v4] = _2);
                },
                class: normalizeClass(["commandmenu-item text-sm flex items-center py-1.5 px-2 rounded hover:bg-b-2 cursor-pointer", {
                  "bg-b-2": t2.name === ((L6 = k5.value) == null ? void 0 : L6.name)
                }]),
                onClick: (_2) => A4(t2)
              }, [
                createVNode(unref(m), {
                  class: "text-c-1 mr-2.5",
                  icon: t2.icon,
                  size: "md",
                  thickness: "1.5"
                }, null, 8, ["icon"]),
                createTextVNode(" " + toDisplayString(t2.name), 1)
              ], 10, me);
            }), 128))
          ], 64))), 64)),
          C4.value.length ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", re2, " No commands found "))
        ], 64))
      ], 512), [
        [vShow, unref(c3).open]
      ])
    ], 64));
  }
});

// node_modules/@scalar/api-client/dist/components/CommandPalette/TheCommandPalette.vue.js
var r3 = s($e, [["__scopeId", "data-v-3597a300"]]);

// node_modules/@scalar/api-client/dist/layouts/App/ApiClientApp.vue.js
var V4 = ["innerHTML"];
var F3 = {
  key: 0,
  class: "flex min-h-0 flex-1 z-0"
};
var O4 = { class: "flex flex-1 flex-col min-w-0" };
var ee2 = defineComponent({
  __name: "ApiClientApp",
  setup(P6) {
    onMounted(() => {
      watchEffect(() => {
        document.body.classList.toggle("dark-mode", c3.value), document.body.classList.toggle("light-mode", !c3.value);
      });
    });
    const { isDark: c3 } = c2(), r4 = rt();
    onBeforeMount(async () => {
      if (localStorage.getItem(LS_KEYS.WORKSPACE)) {
        const o = {};
        let s3 = 0, t2 = 0, e2 = "";
        for (e2 in localStorage)
          Object.prototype.hasOwnProperty.call(localStorage, e2) && (t2 = (localStorage[e2].length + e2.length) * 2, s3 += t2, o[e2] = (t2 / 1024).toFixed(2) + " KB");
        o.Total = (s3 / 1024).toFixed(2) + " KB", console.table(o), g3(r4);
      } else
        r4.workspaceMutators.add({
          uid: "default",
          name: "Workspace",
          proxyUrl: "https://proxy.scalar.com"
        });
      l();
    });
    const m7 = (o) => A(o);
    onMounted(() => window.addEventListener("keydown", m7)), onBeforeUnmount(() => window.removeEventListener("keydown", m7));
    const u4 = computed(
      () => r4.activeWorkspace.value && `<style>
  ${L(r4.activeWorkspace.value.themeId, {
        fonts: true
      })}</style>`
    );
    return (o, s3) => {
      var t2;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", { innerHTML: u4.value }, null, 8, V4),
        createVNode(m5),
        (t2 = unref(r4).activeWorkspace.value) != null && t2.uid ? (openBlock(), createElementBlock("main", F3, [
          createVNode(m4),
          createVNode(unref(r3)),
          createBaseVNode("div", O4, [
            createVNode(unref(RouterView), null, {
              default: withCtx(({ Component: e2 }) => [
                (openBlock(), createBlock(KeepAlive, null, [
                  (openBlock(), createBlock(resolveDynamicComponent(e2)))
                ], 1024))
              ]),
              _: 1
            })
          ])
        ])) : createCommentVNode("", true),
        createVNode(unref(v))
      ], 64);
    };
  }
});

// node_modules/@scalar/api-client/dist/layouts/Modal/ApiClientModal.vue2.js
var B5 = { class: "scalar" };
var M3 = { className: "scalar-container" };
var K4 = { className: "scalar-app scalar-client scalar-app-layout" };
var L5 = defineComponent({
  __name: "ApiClientModal",
  setup(N) {
    const { activeWorkspace: c3, modalState: o } = rt(), a2 = (e2) => A(e2, c3.value.hotKeyConfig);
    watch(
      () => o.open,
      (e2) => {
        e2 ? (window.addEventListener("keydown", a2), document.documentElement.style.overflow = "hidden") : (window.removeEventListener("keydown", a2), document.documentElement.style.removeProperty("overflow"));
      }
    ), onBeforeMount(() => l());
    const r4 = (e2) => e2.closeModal && o.open && o.hide();
    return onMounted(() => a.on(r4)), onBeforeUnmount(() => {
      document.documentElement.style.removeProperty("overflow"), a.off(r4);
    }), (e2, s3) => withDirectives((openBlock(), createElementBlock("div", B5, [
      createBaseVNode("div", M3, [
        createBaseVNode("div", K4, [
          createVNode(unref(RouterView), { key: "$route.fullPath" })
        ]),
        createBaseVNode("div", {
          class: "scalar-app-exit",
          onClick: s3[0] || (s3[0] = (x3) => unref(o).hide())
        })
      ])
    ], 512)), [
      [vShow, unref(o).open]
    ]);
  }
});

// node_modules/@scalar/api-client/dist/layouts/Modal/ApiClientModal.vue.js
var m6 = s(L5, [["__scopeId", "data-v-fdd52d50"]]);

// node_modules/@scalar/api-client/dist/libs/create-client.js
var T2 = ({
  el: b3,
  appComponent: U5,
  configuration: t2 = {},
  isReadOnly: i = false,
  persistData: y2 = true,
  mountOnInitialize: A4 = true,
  router: p2
}) => {
  const a2 = lt(p2, y2);
  a2.workspaceMutators.rawAdd(
    createWorkspace({
      uid: "default",
      name: "Workspace",
      isReadOnly: i,
      proxyUrl: t2 == null ? void 0 : t2.proxyUrl
    })
  );
  const d5 = createApp(U5);
  d5.use(p2), d5.provide("workspace", a2);
  const {
    activeCollection: S2,
    activeWorkspace: o,
    importSpecFile: c3,
    importSpecFromUrl: I4,
    modalState: m7,
    requests: u4,
    securitySchemeMutators: x3,
    securitySchemes: C4,
    serverMutators: M4,
    workspaceMutators: h2
  } = a2, k5 = (e2 = b3) => {
    if (!e2) {
      console.error(
        "[@scalar/api-client-modal] Could not create the API client.",
        "Invalid HTML element provided.",
        "Read more: https://github.com/scalar/scalar/tree/main/packages/api-client"
      );
      return;
    }
    d5.mount(e2);
  };
  return o.value && (A4 && k5(), t2 != null && t2.proxyUrl && h2.edit(
    o.value.uid,
    "proxyUrl",
    t2 == null ? void 0 : t2.proxyUrl
  ), t2 != null && t2.themeId && h2.edit(
    o.value.uid,
    "themeId",
    t2 == null ? void 0 : t2.themeId
  )), {
    /** The vue app instance for the modal, be careful with this */
    app: d5,
    /** Update the API client config */
    updateConfig(e2, l2 = true) {
      l2 ? Object.assign(t2 ?? {}, e2) : objectMerge(t2 ?? {}, e2), e2.spec && c3(e2.spec);
    },
    /**
     * TODO this is just temporary for the modal, we'll put in a proper solution later
     * Here we update the currently selected serverUrl
     */
    updateServerUrl: (e2) => {
      var l2;
      return M4.edit(
        ((l2 = S2.value) == null ? void 0 : l2.selectedServerUid) ?? "",
        "url",
        e2
      );
    },
    /**
     * Update the security schemes
     * maps the references useAuthenticationStore to the client auth
     */
    updateAuth: (e2) => {
      Object.values(C4).forEach((s3) => {
        const r4 = (v4, w3 = "value") => v4.length && !getNestedValue(s3, w3).length && x3.edit(s3.uid, w3, v4);
        switch (s3.type) {
          case "apiKey":
            r4(e2.apiKey.token);
            break;
          case "http":
            s3.scheme === "bearer" ? r4(e2.http.bearer.token) : s3.scheme === "basic" && (r4(e2.http.basic.username), r4(e2.http.basic.password, "secondValue"));
            break;
          case "oauth2":
            r4(e2.oAuth2.clientId, "clientId"), (s3.flow.type === "implicit" || s3.flow.type === "password") && (r4(e2.oAuth2.accessToken, "flow.token"), r4(e2.oAuth2.scopes, "flow.selectedScopes"), s3.flow.type === "password" && (r4(e2.oAuth2.username, "flow.value"), r4(e2.oAuth2.password, "flow.secondValue")));
            break;
        }
      });
    },
    /** Update the spec file, this will re-parse it and clear your store */
    updateSpec: async (e2) => {
      e2 != null && e2.url ? await I4(e2.url, t2 == null ? void 0 : t2.proxyUrl) : e2 != null && e2.content ? await c3(e2 == null ? void 0 : e2.content) : console.error(
        "[@scalar/api-client-modal] Could not create the API client.",
        "Please provide an OpenAPI document: { spec: { url: '…' } }",
        "Read more: https://github.com/scalar/scalar/tree/main/packages/api-client"
      );
    },
    /** Route to a method + path */
    route: (e2) => {
      const l2 = Object.values(u4).find(
        ({ path: s3, method: r4 }) => s3 === e2.path && r4.toUpperCase() === e2.method.toUpperCase()
      );
      l2 && p2.push(`/workspace/default/request/${l2.uid}`);
    },
    /** Open the API client modal and optionally route to a request */
    open: (e2) => {
      if (e2) {
        const l2 = Object.values(u4).find(
          ({ path: s3, method: r4 }) => e2 ? (
            // The given operation
            s3 === e2.path && r4.toUpperCase() === e2.method.toUpperCase()
          ) : (
            // Or the first request
            true
          )
        );
        l2 && p2.push(`/workspace/default/request/${l2.uid}`);
      }
      m7.open = true;
    },
    /** Mount the references to a given element */
    mount: k5,
    /** State for controlling the modal */
    modalState: m7,
    /* The workspace store */
    store: a2
  };
};

// node_modules/@scalar/api-client/dist/layouts/Modal/create-api-client-modal.js
var R2 = async (t2, e2 = {}, p2 = true) => {
  var s3, l2, a2;
  const r4 = T2({
    el: t2,
    appComponent: m6,
    configuration: e2,
    persistData: false,
    isReadOnly: true,
    mountOnInitialize: p2,
    router: d()
  }), { importSpecFile: y2, importSpecFromUrl: o, workspaceMutators: C4 } = r4.store;
  return (s3 = e2.spec) != null && s3.url ? await o(
    e2.spec.url,
    e2.proxyUrl,
    e2 == null ? void 0 : e2.servers
  ) : (l2 = e2.spec) != null && l2.content ? await y2(
    (a2 = e2.spec) == null ? void 0 : a2.content,
    void 0,
    e2 == null ? void 0 : e2.servers
  ) : C4.add({
    uid: "default",
    name: "Workspace",
    isReadOnly: true,
    proxyUrl: "https://proxy.scalar.com"
  }), r4;
};
var v3 = (t2, e2 = {}, p2 = true) => T2({
  el: t2,
  appComponent: m6,
  configuration: e2,
  persistData: false,
  isReadOnly: true,
  mountOnInitialize: p2,
  router: d()
});

// node_modules/@scalar/api-client/dist/layouts/App/create-api-client-app.js
var F4 = async (o, e2 = {}, c3 = true, s3 = r) => {
  var p2, r4, m7;
  const t2 = T2({
    el: o,
    appComponent: ee2,
    configuration: e2,
    mountOnInitialize: c3,
    router: s3
  }), { importSpecFile: l2, importSpecFromUrl: i } = t2.store;
  return (p2 = e2.spec) != null && p2.url ? await i(e2.spec.url, e2.proxyUrl) : (r4 = e2.spec) != null && r4.content && await l2((m7 = e2.spec) == null ? void 0 : m7.content), t2;
};
export {
  ee2 as ApiClientApp,
  m6 as ApiClientModal,
  F4 as createApiClientApp,
  R2 as createApiClientModal,
  v3 as createApiClientModalSync,
  d as createModalRouter,
  f2 as createWebHashRouter,
  r as router,
  rt as useWorkspace
};
//# sourceMappingURL=dist-DJW4FNQU.js.map
