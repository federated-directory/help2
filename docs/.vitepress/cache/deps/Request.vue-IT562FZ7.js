import {
  a as a3
} from "./chunk-FLKPBNPD.js";
import {
  _,
  ge
} from "./chunk-LBK4Y7ML.js";
import {
  e as e2,
  f as f2,
  i as i3,
  m as m3
} from "./chunk-OCQDSXAT.js";
import {
  I as I2,
  a as a2,
  k as k2,
  k2 as k3,
  u,
  x as x2
} from "./chunk-XLAEKMCN.js";
import {
  a,
  f,
  m as m4,
  n
} from "./chunk-YZGRN2WK.js";
import {
  P,
  RouterLink,
  createRequestExampleParameter,
  i as i4,
  rt,
  s,
  useRouter
} from "./chunk-5TRJMYYP.js";
import {
  axios_default
} from "./chunk-IHG44N33.js";
import {
  Fuse
} from "./chunk-U6NJFA4U.js";
import {
  Ae,
  B,
  C,
  C2,
  C3,
  F,
  Fe,
  I,
  Ie,
  N,
  O,
  Q,
  REQUEST_METHODS,
  V,
  W,
  camelToTitleWords,
  e,
  httpStatusCodes,
  i2 as i,
  i3 as i2,
  isJsonString,
  isValidUrl,
  je,
  k,
  m,
  m2,
  redirectToProxy,
  shouldUseProxy,
  t,
  useEventBus,
  useMagicKeys,
  useMediaQuery,
  v2 as v,
  whenever,
  x,
  y
} from "./chunk-2W4MFJRL.js";
import {
  Fragment,
  capitalize,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  toDisplayString,
  toRaw,
  unref,
  useCssVars,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-XKDLJUKD.js";
import {
  __commonJS,
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/whatwg-mimetype/lib/utils.js
var require_utils = __commonJS({
  "node_modules/whatwg-mimetype/lib/utils.js"(exports) {
    "use strict";
    exports.removeLeadingAndTrailingHTTPWhitespace = (string) => {
      return string.replace(/^[ \t\n\r]+/u, "").replace(/[ \t\n\r]+$/u, "");
    };
    exports.removeTrailingHTTPWhitespace = (string) => {
      return string.replace(/[ \t\n\r]+$/u, "");
    };
    exports.isHTTPWhitespaceChar = (char) => {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    };
    exports.solelyContainsHTTPTokenCodePoints = (string) => {
      return /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(string);
    };
    exports.soleyContainsHTTPQuotedStringTokenCodePoints = (string) => {
      return /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(string);
    };
    exports.asciiLowercase = (string) => {
      return string.replace(/[A-Z]/ug, (l6) => l6.toLowerCase());
    };
    exports.collectAnHTTPQuotedString = (input, position) => {
      let value = "";
      position++;
      while (true) {
        while (position < input.length && input[position] !== '"' && input[position] !== "\\") {
          value += input[position];
          ++position;
        }
        if (position >= input.length) {
          break;
        }
        const quoteOrBackslash = input[position];
        ++position;
        if (quoteOrBackslash === "\\") {
          if (position >= input.length) {
            value += "\\";
            break;
          }
          value += input[position];
          ++position;
        } else {
          break;
        }
      }
      return [value, position];
    };
  }
});

// node_modules/whatwg-mimetype/lib/mime-type-parameters.js
var require_mime_type_parameters = __commonJS({
  "node_modules/whatwg-mimetype/lib/mime-type-parameters.js"(exports, module) {
    "use strict";
    var {
      asciiLowercase,
      solelyContainsHTTPTokenCodePoints,
      soleyContainsHTTPQuotedStringTokenCodePoints
    } = require_utils();
    module.exports = class MIMETypeParameters {
      constructor(map) {
        this._map = map;
      }
      get size() {
        return this._map.size;
      }
      get(name) {
        name = asciiLowercase(String(name));
        return this._map.get(name);
      }
      has(name) {
        name = asciiLowercase(String(name));
        return this._map.has(name);
      }
      set(name, value) {
        name = asciiLowercase(String(name));
        value = String(value);
        if (!solelyContainsHTTPTokenCodePoints(name)) {
          throw new Error(`Invalid MIME type parameter name "${name}": only HTTP token code points are valid.`);
        }
        if (!soleyContainsHTTPQuotedStringTokenCodePoints(value)) {
          throw new Error(`Invalid MIME type parameter value "${value}": only HTTP quoted-string token code points are valid.`);
        }
        return this._map.set(name, value);
      }
      clear() {
        this._map.clear();
      }
      delete(name) {
        name = asciiLowercase(String(name));
        return this._map.delete(name);
      }
      forEach(callbackFn, thisArg) {
        this._map.forEach(callbackFn, thisArg);
      }
      keys() {
        return this._map.keys();
      }
      values() {
        return this._map.values();
      }
      entries() {
        return this._map.entries();
      }
      [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
      }
    };
  }
});

// node_modules/whatwg-mimetype/lib/parser.js
var require_parser = __commonJS({
  "node_modules/whatwg-mimetype/lib/parser.js"(exports, module) {
    "use strict";
    var {
      removeLeadingAndTrailingHTTPWhitespace,
      removeTrailingHTTPWhitespace,
      isHTTPWhitespaceChar,
      solelyContainsHTTPTokenCodePoints,
      soleyContainsHTTPQuotedStringTokenCodePoints,
      asciiLowercase,
      collectAnHTTPQuotedString
    } = require_utils();
    module.exports = (input) => {
      input = removeLeadingAndTrailingHTTPWhitespace(input);
      let position = 0;
      let type = "";
      while (position < input.length && input[position] !== "/") {
        type += input[position];
        ++position;
      }
      if (type.length === 0 || !solelyContainsHTTPTokenCodePoints(type)) {
        return null;
      }
      if (position >= input.length) {
        return null;
      }
      ++position;
      let subtype = "";
      while (position < input.length && input[position] !== ";") {
        subtype += input[position];
        ++position;
      }
      subtype = removeTrailingHTTPWhitespace(subtype);
      if (subtype.length === 0 || !solelyContainsHTTPTokenCodePoints(subtype)) {
        return null;
      }
      const mimeType = {
        type: asciiLowercase(type),
        subtype: asciiLowercase(subtype),
        parameters: /* @__PURE__ */ new Map()
      };
      while (position < input.length) {
        ++position;
        while (isHTTPWhitespaceChar(input[position])) {
          ++position;
        }
        let parameterName = "";
        while (position < input.length && input[position] !== ";" && input[position] !== "=") {
          parameterName += input[position];
          ++position;
        }
        parameterName = asciiLowercase(parameterName);
        if (position < input.length) {
          if (input[position] === ";") {
            continue;
          }
          ++position;
        }
        let parameterValue = null;
        if (input[position] === '"') {
          [parameterValue, position] = collectAnHTTPQuotedString(input, position);
          while (position < input.length && input[position] !== ";") {
            ++position;
          }
        } else {
          parameterValue = "";
          while (position < input.length && input[position] !== ";") {
            parameterValue += input[position];
            ++position;
          }
          parameterValue = removeTrailingHTTPWhitespace(parameterValue);
          if (parameterValue === "") {
            continue;
          }
        }
        if (parameterName.length > 0 && solelyContainsHTTPTokenCodePoints(parameterName) && soleyContainsHTTPQuotedStringTokenCodePoints(parameterValue) && !mimeType.parameters.has(parameterName)) {
          mimeType.parameters.set(parameterName, parameterValue);
        }
      }
      return mimeType;
    };
  }
});

// node_modules/whatwg-mimetype/lib/serializer.js
var require_serializer = __commonJS({
  "node_modules/whatwg-mimetype/lib/serializer.js"(exports, module) {
    "use strict";
    var { solelyContainsHTTPTokenCodePoints } = require_utils();
    module.exports = (mimeType) => {
      let serialization = `${mimeType.type}/${mimeType.subtype}`;
      if (mimeType.parameters.size === 0) {
        return serialization;
      }
      for (let [name, value] of mimeType.parameters) {
        serialization += ";";
        serialization += name;
        serialization += "=";
        if (!solelyContainsHTTPTokenCodePoints(value) || value.length === 0) {
          value = value.replace(/(["\\])/ug, "\\$1");
          value = `"${value}"`;
        }
        serialization += value;
      }
      return serialization;
    };
  }
});

// node_modules/whatwg-mimetype/lib/mime-type.js
var require_mime_type = __commonJS({
  "node_modules/whatwg-mimetype/lib/mime-type.js"(exports, module) {
    "use strict";
    var MIMETypeParameters = require_mime_type_parameters();
    var parse = require_parser();
    var serialize = require_serializer();
    var {
      asciiLowercase,
      solelyContainsHTTPTokenCodePoints
    } = require_utils();
    module.exports = class MIMEType {
      constructor(string) {
        string = String(string);
        const result = parse(string);
        if (result === null) {
          throw new Error(`Could not parse MIME type string "${string}"`);
        }
        this._type = result.type;
        this._subtype = result.subtype;
        this._parameters = new MIMETypeParameters(result.parameters);
      }
      static parse(string) {
        try {
          return new this(string);
        } catch (e6) {
          return null;
        }
      }
      get essence() {
        return `${this.type}/${this.subtype}`;
      }
      get type() {
        return this._type;
      }
      set type(value) {
        value = asciiLowercase(String(value));
        if (value.length === 0) {
          throw new Error("Invalid type: must be a non-empty string");
        }
        if (!solelyContainsHTTPTokenCodePoints(value)) {
          throw new Error(`Invalid type ${value}: must contain only HTTP token code points`);
        }
        this._type = value;
      }
      get subtype() {
        return this._subtype;
      }
      set subtype(value) {
        value = asciiLowercase(String(value));
        if (value.length === 0) {
          throw new Error("Invalid subtype: must be a non-empty string");
        }
        if (!solelyContainsHTTPTokenCodePoints(value)) {
          throw new Error(`Invalid subtype ${value}: must contain only HTTP token code points`);
        }
        this._subtype = value;
      }
      get parameters() {
        return this._parameters;
      }
      toString() {
        return serialize(this);
      }
      isJavaScript({ prohibitParameters = false } = {}) {
        switch (this._type) {
          case "text": {
            switch (this._subtype) {
              case "ecmascript":
              case "javascript":
              case "javascript1.0":
              case "javascript1.1":
              case "javascript1.2":
              case "javascript1.3":
              case "javascript1.4":
              case "javascript1.5":
              case "jscript":
              case "livescript":
              case "x-ecmascript":
              case "x-javascript": {
                return !prohibitParameters || this._parameters.size === 0;
              }
              default: {
                return false;
              }
            }
          }
          case "application": {
            switch (this._subtype) {
              case "ecmascript":
              case "javascript":
              case "x-ecmascript":
              case "x-javascript": {
                return !prohibitParameters || this._parameters.size === 0;
              }
              default: {
                return false;
              }
            }
          }
          default: {
            return false;
          }
        }
      }
      isXML() {
        return this._subtype === "xml" && (this._type === "text" || this._type === "application") || this._subtype.endsWith("+xml");
      }
      isHTML() {
        return this._subtype === "html" && this._type === "text";
      }
    };
  }
});

// node_modules/@scalar/api-client/dist/libs/formatters.js
var s2 = (t4, o2 = 2) => t4 > 1e3 ? (t4 / 1e3).toFixed(o2) + "s" : t4 + "ms";

// node_modules/@scalar/api-client/dist/components/AddressBar/httpStatusCodeColors.js
var e3 = {
  100: {
    color: "text-yellow"
  },
  200: {
    color: "text-green"
  },
  202: {
    color: "text-green"
  },
  300: {
    color: "text-blue"
  },
  304: {
    color: "text-blue"
  },
  400: {
    color: "text-red"
  },
  401: {
    color: "text-orange"
  },
  422: {
    color: "text-yellow"
  },
  423: {
    color: "text-purple"
  },
  505: {
    color: "text-orange"
  }
};
var r = (o2) => e3[o2] || {
  /** default color */
  color: "text-grey"
};

// node_modules/@scalar/api-client/dist/components/AddressBar/AddressBarHistory.vue.js
var M = { class: "min-w-0" };
var N2 = { class: "min-w-0 truncate text-c-1" };
var J = defineComponent({
  __name: "AddressBarHistory",
  props: {
    open: { type: Boolean }
  },
  setup(V3) {
    const { activeRequest: u8, requestExampleMutators: x9 } = rt(), g4 = useRouter(), v5 = computed(() => u8.value.history.slice().reverse());
    function _7(o2) {
      const c3 = new URL(o2), s5 = new URLSearchParams(c3.search).get("scalar_url");
      return s5 ? new URL(s5).href : c3.href;
    }
    function k10(o2) {
      u8.value.uid !== o2.request.requestUid && g4.push(`/request/${o2.request.requestUid}`), x9.set({ ...o2.request });
    }
    return (o2, c3) => (openBlock(), createElementBlock(Fragment, null, [
      unref(u8).history.length ? (openBlock(), createBlock(unref(je), {
        key: 0,
        class: "adressbar-history-button mr-1 rounded p-1.5 text-c-3 focus:text-c-1"
      }, {
        default: withCtx(() => [
          createVNode(unref(m2), {
            icon: "History",
            size: "sm",
            thickness: "2.25"
          })
        ]),
        _: 1
      })) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass([
          "absolute left-0 top-[33px] w-full rounded before:pointer-events-none before:absolute before:left-0 before:top-[-33px] before:h-[calc(100%+33px)] before:w-full before:rounded z-50",
          { "before:shadow-lg": o2.open }
        ])
      }, [
        createVNode(unref(Ae), { class: "bg-b-1 custom-scroll bg-mix-transparent bg-mix-amount-30 max-h-[300px] rounded-b p-[3px] pt-0 backdrop-blur grid grid-cols-[44px,1fr,repeat(3,auto)] items-center" }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(v5.value, (e6, s5) => (openBlock(), createBlock(unref(Fe), {
              key: s5,
              class: "contents font-code text-sm *:rounded-none first:*:rounded-l last:*:rounded-r *:h-8 *:hover:bg-b-2 *:flex *:items-center *:cursor-pointer *:px-1.5 text-c-2 font-medium",
              value: s5,
              onClick: (a10) => k10(e6)
            }, {
              default: withCtx(() => {
                var a10;
                return [
                  e6.response.config.method ? (openBlock(), createBlock(f, {
                    key: 0,
                    class: "text-[11px]",
                    method: e6.response.config.method
                  }, null, 8, ["method"])) : createCommentVNode("", true),
                  createBaseVNode("div", M, [
                    createBaseVNode("div", N2, toDisplayString(_7(e6.response.config.url)), 1)
                  ]),
                  createBaseVNode("div", null, toDisplayString(unref(s2)(e6.response.duration)), 1),
                  createBaseVNode("div", {
                    class: normalizeClass([unref(r)(e6.response.status).color])
                  }, toDisplayString(e6.response.status), 3),
                  createBaseVNode("div", null, toDisplayString((a10 = unref(httpStatusCodes)[e6.response.status]) == null ? void 0 : a10.name), 1)
                ];
              }),
              _: 2
            }, 1032, ["value", "onClick"]))), 128))
          ]),
          _: 1
        })
      ], 2)
    ], 64));
  }
});

// node_modules/@scalar/api-client/dist/libs/event-busses/execute-request-bus.js
var t2 = Symbol();
var u2 = useEventBus(t2);

// node_modules/@scalar/api-client/dist/libs/event-busses/request-status-bus.js
var s3 = Symbol();
var u3 = useEventBus(s3);

// node_modules/@scalar/api-client/dist/components/AddressBar/AddressBar.vue2.js
var v2 = (f8) => (pushScopeId("data-v-28ee5506"), f8 = f8(), popScopeId(), f8);
var ae = {
  key: 0,
  class: "order-last lg:order-none lg:w-auto w-full"
};
var re = { class: "m-auto flex basis-1/2 flex-row items-center" };
var se = { class: "pointer-events-none absolute left-0 top-0 z-10 block h-full w-full overflow-hidden" };
var ne = { class: "flex gap-1" };
var ie = { class: "codemirror-bg-switcher scroll-timeline-x scroll-timeline-x-hidden relative flex w-full" };
var ue = v2(() => createBaseVNode("div", { class: "fade-left" }, null, -1));
var de = v2(() => createBaseVNode("div", { class: "fade-right" }, null, -1));
var fe = v2(() => createBaseVNode("span", { class: "text-xxs relative z-10 lg:flex hidden" }, "Send", -1));
var Ee = defineComponent({
  __name: "AddressBar",
  setup(f8) {
    const {
      activeRequest: t4,
      activeExample: c3,
      isReadOnly: p8,
      requestMutators: h5,
      requestExampleMutators: S3,
      requestsHistory: E4
    } = rt(), x9 = ref(E4.value[0]), b6 = ref(null), g4 = useMagicKeys();
    whenever(
      t() ? g4.meta_enter : g4.ctrl_enter,
      () => u2.emit()
    );
    const C7 = (e6) => {
      !t4.value || t4.value.path === e6 || h5.edit(t4.value.uid, "path", e6);
    };
    watch(
      () => {
        var e6;
        return (e6 = t4.value) == null ? void 0 : e6.path;
      },
      (e6) => {
        t4.value && C7(e6);
      }
    );
    const r6 = ref(100), _7 = ref(0), s5 = ref(false), u8 = ref();
    function q() {
      s5.value ? r6.value -= (r6.value - 15) / 60 : r6.value -= _7.value / 20, r6.value <= 0 && (clearInterval(u8.value), u8.value = void 0, r6.value = 100, s5.value = false);
    }
    function R3() {
      s5.value || (s5.value = true, u8.value = setInterval(q, 20));
    }
    function I7() {
      _7.value = r6.value, s5.value = false;
    }
    function V3() {
      clearInterval(u8.value), u8.value = void 0, r6.value = 100, s5.value = false;
    }
    u3.on((e6) => {
      e6 === "start" && R3(), e6 === "stop" && I7(), e6 === "abort" && V3();
    });
    function M3(e6) {
      t4.value && h5.edit(t4.value.uid, "method", e6);
    }
    function z2() {
      if (!t4.value) return;
      const { method: e6 } = t4.value;
      return REQUEST_METHODS[e6].backgroundColor;
    }
    const U2 = (e6) => {
      c3.value && S3.edit(c3.value.uid, "url", e6);
    }, w2 = (e6) => {
      var o2;
      e6.focusAddressBar && ((o2 = b6.value) == null || o2.focus());
    };
    return onMounted(() => a.on(w2)), onBeforeUnmount(() => a.off(w2)), (e6, o2) => unref(t4) && unref(c3) ? (openBlock(), createElementBlock("div", ae, [
      createBaseVNode("div", re, [
        createVNode(unref(Ie), {
          modelValue: x9.value,
          "onUpdate:modelValue": o2[2] || (o2[2] = (d5) => x9.value = d5)
        }, {
          default: withCtx(({ open: d5 }) => [
            createBaseVNode("div", {
              class: normalizeClass([
                "addressbar-bg-states text-xxs relative flex w-full lg:min-w-[720px] lg:max-w-[720px] order-last lg:order-none flex-1 flex-row items-stretch rounded-lg border-1/2 p-[3px]",
                { "rounded-b-none": d5 },
                { "border-transparent": d5 }
              ])
            }, [
              createBaseVNode("div", se, [
                createBaseVNode("div", {
                  class: normalizeClass(["bg-mix-transparent bg-mix-amount-90 absolute left-0 top-0 h-full w-full", z2()]),
                  style: normalizeStyle({ transform: `translate3d(-${r6.value}%,0,0)` })
                }, null, 6)
              ]),
              createBaseVNode("div", ne, [
                createVNode(f, {
                  isEditable: !unref(p8),
                  isSquare: "",
                  method: unref(t4).method,
                  onChange: M3
                }, null, 8, ["isEditable", "method"])
              ]),
              createBaseVNode("div", ie, [
                ue,
                createVNode(_, {
                  ref_key: "addressBarRef",
                  ref: b6,
                  disableCloseBrackets: "",
                  disabled: unref(p8),
                  disableEnter: "",
                  disableTabIndent: "",
                  emitOnBlur: false,
                  modelValue: unref(c3).url,
                  placeholder: "Enter URL to get started",
                  server: "",
                  onSubmit: o2[0] || (o2[0] = (H2) => unref(u2).emit()),
                  "onUpdate:modelValue": U2
                }, null, 8, ["disabled", "modelValue"]),
                de
              ]),
              createVNode(J, { open: d5 }, null, 8, ["open"]),
              createVNode(unref(W), {
                class: "relative h-auto shrink-0 gap-1 overflow-hidden pl-2 pr-2.5 py-1 z-[1] font-bold",
                disabled: s5.value,
                onClick: o2[1] || (o2[1] = (H2) => unref(u2).emit())
              }, {
                default: withCtx(() => [
                  createVNode(unref(m2), {
                    class: "relative z-10 shrink-0 fill-current",
                    icon: "Play",
                    size: "xs"
                  }),
                  fe
                ]),
                _: 1
              }, 8, ["disabled"])
            ], 2)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ])
    ])) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-client/dist/components/AddressBar/AddressBar.vue.js
var a4 = s(Ee, [["__scopeId", "data-v-28ee5506"]]);

// node_modules/@scalar/api-client/dist/components/Search/SearchButton.vue2.js
var u4 = (e6) => (pushScopeId("data-v-2c26b5ad"), e6 = e6(), popScopeId(), e6);
var f3 = { class: "search-button-fade sticky top-0 z-50 px-3 py-2.5 pb-2.5" };
var h = { class: "w-[15px] flex items-center justify-center" };
var _2 = u4(() => createBaseVNode("div", { class: "sidebar-search-input ml-1.5 flex w-full items-center justify-between text-sm font-medium" }, [
  createBaseVNode("span", { class: "sidebar-search-placeholder" }, "Search")
], -1));
var v3 = defineComponent({
  __name: "SearchButton",
  emits: ["openSearchModal"],
  setup(e6, { emit: s5 }) {
    const c3 = s5;
    return (x9, o2) => (openBlock(), createElementBlock("div", f3, [
      createBaseVNode("button", {
        class: "border-1/2 text-c-2 flex w-full items-center rounded p-1.5",
        type: "button",
        onClick: o2[0] || (o2[0] = (b6) => c3("openSearchModal"))
      }, [
        createBaseVNode("div", h, [
          createVNode(unref(m2), {
            icon: "Search",
            size: "xs",
            thickness: "2.5"
          })
        ]),
        _2
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/Search/SearchButton.vue.js
var m5 = s(v3, [["__scopeId", "data-v-2c26b5ad"]]);

// node_modules/@scalar/api-client/dist/components/Search/SearchModal.vue2.js
var X = (u8) => (pushScopeId("data-v-905c8bd2"), u8 = u8(), popScopeId(), u8);
var Y = X(() => createBaseVNode("div", { class: "ref-search-meta" }, [
  createBaseVNode("span", null, "↑↓ Navigate"),
  createBaseVNode("span", null, "⏎ Select")
], -1));
var re2 = defineComponent({
  __name: "SearchModal",
  props: {
    modalState: {}
  },
  setup(u8) {
    const c3 = u8, E4 = useRouter(), { activeWorkspaceRequests: I7 } = rt(), v5 = useMagicKeys(), l6 = ref([]), f8 = ref([]), o2 = ref(0), s5 = ref(""), V3 = ref(null), S3 = new Fuse(l6.value, {
      keys: ["title", "description", "body"]
    }), F3 = () => {
      s5.value = "", o2.value = 0, f8.value = [];
    }, _7 = (e6) => {
      l6.value = e6.map((a10) => ({
        id: a10.uid,
        title: a10.summary ?? a10.method,
        description: a10.description ?? "",
        httpVerb: a10.method,
        path: a10.path
      })), S3.setCollection(l6.value);
    }, $5 = () => {
      o2.value = 0, f8.value = S3.search(s5.value);
    };
    watch(
      () => c3.modalState.open,
      (e6) => {
        var a10;
        if (!e6) {
          l6.value.length > 0 && (l6.value = [], S3.setCollection(l6.value));
          return;
        }
        (a10 = V3.value) == null || a10.focus(), F3(), _7(I7.value);
      }
    ), watch(
      I7,
      (e6) => {
        _7(e6);
      },
      { immediate: true }
    );
    function b6(e6) {
      E4.push(e6.item.id), c3.modalState.hide();
    }
    const k10 = computed(
      () => n4.value[o2.value]
    ), n4 = computed(
      () => s5.value.length === 0 ? l6.value.map((e6) => ({
        item: e6
      })) : f8.value
    );
    return whenever(v5.enter, () => {
      c3.modalState.open && window && b6(k10.value);
    }), whenever(v5.ArrowDown, () => {
      var e6;
      c3.modalState.open && window && (o2.value < n4.value.length - 1 ? o2.value++ : o2.value = 0, (e6 = document.getElementById(`search-modal-${k10.value.item.id}`)) == null || e6.scrollIntoView({
        behavior: "smooth",
        block: "center"
      }));
    }), whenever(v5.ArrowUp, () => {
      var e6;
      c3.modalState.open && window && (o2.value > 0 ? o2.value-- : o2.value = n4.value.length - 1, (e6 = document.getElementById(`search-modal-${k10.value.item.id}`)) == null || e6.scrollIntoView({
        behavior: "smooth",
        block: "center"
      }));
    }), (e6, a10) => (openBlock(), createBlock(unref(m), {
      state: e6.modalState,
      variant: "search"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          ref_key: "searchModalRef",
          ref: V3,
          class: "ref-search-container"
        }, [
          createVNode(unref(I), {
            modelValue: s5.value,
            "onUpdate:modelValue": a10[0] || (a10[0] = (t4) => s5.value = t4),
            onInput: $5
          }, null, 8, ["modelValue"])
        ], 512),
        createVNode(unref(v), {
          class: "ref-search-results custom-scroll",
          noResults: !n4.value.length
        }, {
          query: withCtx(() => [
            createTextVNode(toDisplayString(s5.value), 1)
          ]),
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(n4.value, (t4, C7) => (openBlock(), createBlock(unref(C2), {
              id: `#search-modal-${t4.item.id}`,
              key: t4.refIndex,
              active: o2.value === C7,
              icon: "Terminal",
              onClick: (x9) => b6(t4),
              onFocus: (x9) => o2.value = C7
            }, createSlots({
              addon: withCtx(() => [
                createVNode(unref(f), {
                  method: t4.item.httpVerb ?? "get"
                }, null, 8, ["method"])
              ]),
              default: withCtx(() => [
                createTextVNode(toDisplayString(t4.item.title) + " ", 1)
              ]),
              _: 2
            }, [
              (t4.item.httpVerb || t4.item.path) && t4.item.path !== t4.item.title ? {
                name: "description",
                fn: withCtx(() => [
                  createTextVNode(toDisplayString(t4.item.path), 1)
                ]),
                key: "0"
              } : t4.item.description ? {
                name: "description",
                fn: withCtx(() => [
                  createTextVNode(toDisplayString(t4.item.description), 1)
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["id", "active", "onClick", "onFocus"]))), 128))
          ]),
          _: 1
        }, 8, ["noResults"]),
        Y
      ]),
      _: 1
    }, 8, ["state"]));
  }
});

// node_modules/@scalar/api-client/dist/components/Search/SearchModal.vue.js
var m6 = s(re2, [["__scopeId", "data-v-905c8bd2"]]);

// node_modules/@scalar/api-client/dist/components/Sidebar/SidebarToggle.vue.js
var a5 = {
  class: "size-3.5",
  fill: "none",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var d = createBaseVNode("defs", null, [
  createBaseVNode("clipPath", { id: "mask" }, [
    createBaseVNode("path", {
      "clip-rule": "evenodd",
      d: "M9 3.2H4c-1.7 0-3 1.3-3 3v11.5c0 1.7 1.3 3 3 3h5V3.2z"
    })
  ])
], -1);
var i5 = { "clip-path": "url(#mask)" };
var c = createBaseVNode("path", {
  d: "M20 20.8H4c-1.7 0-3-1.3-3-3V6.2c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v11.5c0 1.7-1.3 3-3 3zM9 3.2v17.5",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2"
}, null, -1);
var h2 = defineComponent({
  __name: "SidebarToggle",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(u8) {
    return (t4, o2) => (openBlock(), createElementBlock("button", {
      class: "text-c-3 hover:bg-b-2 active:text-c-1 p-2 rounded",
      type: "button",
      onClick: o2[0] || (o2[0] = (p8) => t4.$emit("update:modelValue", !t4.modelValue))
    }, [
      (openBlock(), createElementBlock("svg", a5, [
        d,
        createBaseVNode("g", i5, [
          createBaseVNode("path", {
            class: normalizeClass(["transition-transform duration-300", t4.modelValue ? "translate-x-0" : "-translate-x-1/2"]),
            d: "M1 3.2h8v17.5H1z",
            fill: "currentColor"
          }, null, 2)
        ]),
        c
      ]))
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/ContextBar.vue2.js
var p = { class: "fade-request-section-content sticky top-0 z-10 pointer-events-none" };
var d2 = { class: "request-section-content request-section-content-filter bg-b-1 border-1/2 text-c-3 bg-b-1 mb-2.5 hidden xl:flex justify-center rounded p-[2.25px] text-xs gap-0.5 pointer-events-auto" };
var u5 = ["isActive", "onClick"];
var _3 = defineComponent({
  __name: "ContextBar",
  props: {
    sections: {},
    activeSection: {}
  },
  emits: ["setActiveSection"],
  setup(m11) {
    return (t4, v5) => (openBlock(), createElementBlock("div", p, [
      createBaseVNode("div", d2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t4.sections, (e6) => (openBlock(), createElementBlock("button", {
          key: e6,
          class: normalizeClass(["hover:bg-b-2 w-full rounded px-1 py-1 text-center font-medium", [
            t4.activeSection === e6 ? "bg-b-2 text-c-1  pointer-events-none" : ""
          ]]),
          isActive: t4.activeSection === e6,
          type: "button",
          onClick: (b6) => t4.$emit("setActiveSection", e6)
        }, toDisplayString(e6), 11, u5))), 128))
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/ContextBar.vue.js
var p2 = s(_3, [["__scopeId", "data-v-3656da18"]]);

// node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutCollapse.vue.js
var x3 = { class: "flex flex-1 items-center gap-1.5" };
var _4 = {
  key: 0,
  class: "bg-b-2 text-c-2 text-3xs inline-flex h-4 w-4 items-center justify-center rounded-full font-semibold"
};
var g = { class: "flex items-center gap-2" };
var v4 = {
  key: 0,
  class: "ui-not-open:invisible -my-1 flex items-center gap-2"
};
var D = defineComponent({
  __name: "ViewLayoutCollapse",
  props: {
    defaultOpen: { type: Boolean, default: true },
    itemCount: { default: 0 }
  },
  setup(y6) {
    return (e6, C7) => (openBlock(), createBlock(unref(N), {
      as: "div",
      class: "focus-within:bg-b-2 focus-within:text-c-1 text-c-2 rounded request-item ui-not-open:bg-transparent ui-open:pb-1 ui-open:mb-3 ui-not-open:mb-0 ui-not-open:pb-0",
      defaultOpen: e6.defaultOpen
    }, {
      default: withCtx(({ open: t4 }) => [
        createVNode(unref(Q), { class: "hover:text-c-1 group flex w-full items-center gap-1.5 overflow-hidden py-1.5 text-sm font-medium px-1.5" }, {
          default: withCtx(() => [
            createVNode(unref(m2), {
              class: "text-c-3 group-hover:text-c-1 ui-open:rotate-90 ui-not-open:rotate-0",
              icon: "ChevronRight",
              size: "sm",
              thickness: "2.5"
            }),
            createBaseVNode("div", x3, [
              renderSlot(e6.$slots, "title", { open: t4 }),
              !t4 && e6.itemCount ? (openBlock(), createElementBlock("span", _4, toDisplayString(e6.itemCount), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", g, [
              e6.$slots.actions ? (openBlock(), createElementBlock("div", v4, [
                renderSlot(e6.$slots, "actions", { open: t4 })
              ])) : createCommentVNode("", true)
            ])
          ]),
          _: 2
        }, 1024),
        createVNode(unref(V), { class: "rounded-b" }, {
          default: withCtx(() => [
            renderSlot(e6.$slots, "default", { open: t4 })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["defaultOpen"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuthDataTableInput.vue.js
var y2 = ["for"];
var C4 = defineComponent({
  __name: "RequestAuthDataTableInput",
  props: {
    id: {},
    type: {},
    containerClass: {},
    required: { type: Boolean, default: false },
    modelValue: {},
    readOnly: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "inputFocus", "inputBlur", "selectVariable"],
  setup(u8, { emit: s5 }) {
    const t4 = u8, o2 = s5;
    return (n4, e6) => (openBlock(), createBlock(e2, mergeProps({
      id: t4.id,
      containerClass: t4.containerClass,
      modelValue: t4.modelValue,
      readOnly: t4.readOnly,
      required: t4.required,
      type: t4.type
    }, n4.$attrs, {
      onInputBlur: e6[0] || (e6[0] = (l6) => o2("inputBlur")),
      onInputFocus: e6[1] || (e6[1] = (l6) => o2("inputFocus")),
      onSelectVariable: e6[2] || (e6[2] = (l6) => o2("selectVariable", l6)),
      "onUpdate:modelValue": e6[3] || (e6[3] = (l6) => o2("update:modelValue", l6))
    }), {
      default: withCtx(() => [
        createBaseVNode("label", {
          for: t4.id
        }, [
          renderSlot(n4.$slots, "default")
        ], 8, y2)
      ]),
      icon: withCtx(() => [
        renderSlot(n4.$slots, "icon")
      ]),
      _: 3
    }, 16, ["id", "containerClass", "modelValue", "readOnly", "required", "type"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/consts/new-auth-options.js
var t3 = {
  apiKeyCookie: {
    label: "API Key in Cookies",
    payload: {
      type: "apiKey",
      in: "cookie"
    }
  },
  apiKeyHeader: {
    label: "API Key in Headers",
    payload: {
      type: "apiKey",
      in: "header"
    }
  },
  apiKeyQuery: {
    label: "API Key in Query Params",
    payload: {
      type: "apiKey",
      in: "query"
    }
  },
  httpBasic: {
    label: "HTTP Basic",
    payload: {
      type: "http",
      scheme: "basic"
    }
  },
  httpBearer: {
    label: "HTTP Bearer",
    payload: {
      type: "http",
      scheme: "bearer"
    }
  },
  oauth2Implicit: {
    label: "Oauth2 Implicit Flow",
    payload: {
      type: "oauth2",
      flow: {
        type: "implicit"
      }
    }
  },
  oauth2Password: {
    label: "Oauth2 Password Flow",
    payload: {
      type: "oauth2",
      flow: {
        type: "password"
      }
    }
  },
  oauth2ClientCredentials: {
    label: "Oauth2 Client Credentials",
    payload: {
      type: "oauth2",
      flow: {
        type: "clientCredentials"
      }
    }
  },
  oauth2AuthorizationFlow: {
    label: "Oauth2 Authorization Code",
    payload: {
      type: "oauth2",
      flow: {
        type: "authorizationCode"
      }
    }
  }
};
var o = Object.entries(t3);
var l = o.map(
  ([e6, a10]) => ({
    id: e6,
    ...a10
  })
);

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableHeader.vue.js
var f4 = defineComponent({
  __name: "DataTableHeader",
  setup(c3) {
    return (e6, m11) => (openBlock(), createBlock(m3, {
      is: "th",
      class: "truncate font-medium px-2 py-1.5"
    }, {
      default: withCtx(() => [
        renderSlot(e6.$slots, "default")
      ]),
      _: 3
    }));
  }
});

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableCheckbox.vue.js
var p3 = ["checked", "disabled"];
var b = { class: "w-full h-full flex items-center justify-center centered text-border peer-checked:text-c-2 pointer-events-none absolute before:absolute before:opacity-0 group-hover/cell:before:opacity-100 before:border before:rounded before:w-9/12 before:aspect-square before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:border-[1px]" };
var x4 = defineComponent({
  __name: "DataTableCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(u8) {
    return (e6, o2) => (openBlock(), createBlock(m3, { class: "group/cell relative flex min-w-8" }, {
      default: withCtx(() => [
        createBaseVNode("input", {
          checked: e6.modelValue,
          class: "peer absolute inset-0 opacity-0 cursor-pointer",
          disabled: e6.disabled,
          tabindex: "-1",
          type: "checkbox",
          onChange: o2[0] || (o2[0] = (r6) => e6.$emit("update:modelValue", r6.target.checked))
        }, null, 40, p3),
        createBaseVNode("div", b, [
          createVNode(unref(m2), {
            icon: "Checkmark",
            size: "xs",
            thickness: "2.5"
          })
        ])
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/components/OAuthScopesInput.vue.js
var O2 = { class: "flex h-full w-full" };
var $ = createBaseVNode("div", { class: "text-c-2 min-w-[120px] items-center pl-2 h-full border-r-1/2" }, [
  createBaseVNode("span", { class: "h-8 flex items-center" }, " Scopes ")
], -1);
var j = { class: "flex-1 text-c-3" };
var E = {
  class: "grid auto-rows-auto border-t-1/2",
  style: { gridTemplateColumns: "1fr auto" }
};
var I3 = { class: "font-code text-xs" };
var P2 = defineComponent({
  __name: "OAuthScopesInput",
  props: {
    activeFlow: {},
    updateScheme: { type: Function }
  },
  setup(v5) {
    const n4 = v5, x9 = computed(
      () => {
        var e6;
        return Object.entries(((e6 = n4.activeFlow) == null ? void 0 : e6.scopes) ?? {}).map(([a10, t4]) => ({
          id: a10,
          label: a10,
          description: t4
        }));
      }
    ), r6 = computed(() => {
      var e6;
      return ((e6 = n4.activeFlow) == null ? void 0 : e6.selectedScopes) || [];
    });
    function w2(e6, a10) {
      a10 ? n4.updateScheme("flow.selectedScopes", [...r6.value, e6]) : n4.updateScheme(
        "flow.selectedScopes",
        r6.value.filter((t4) => t4 !== e6)
      );
    }
    return (e6, a10) => (openBlock(), createBlock(unref(m3), { class: "items-center min-h-8 h-auto" }, {
      default: withCtx(() => [
        createBaseVNode("div", O2, [
          $,
          createVNode(unref(N), {
            as: "div",
            class: "flex flex-col w-full"
          }, {
            default: withCtx(() => [
              createVNode(unref(Q), { class: "group/scopes-accordion flex items-center text-left min-h-8 gap-1.5 h-auto pl-2 hover:bg-b-2 pr-2.5 cursor-pointer" }, {
                default: withCtx(({ open: t4 }) => {
                  var i9, u8, d5;
                  return [
                    createBaseVNode("div", j, " Selected " + toDisplayString(((u8 = (i9 = e6.activeFlow) == null ? void 0 : i9.selectedScopes) == null ? void 0 : u8.length) || 0) + " / " + toDisplayString(Object.keys(((d5 = e6.activeFlow) == null ? void 0 : d5.scopes) ?? {}).length || 0), 1),
                    createVNode(unref(m2), {
                      class: "text-c-3 group-hover/scopes-accordion:text-c-2",
                      icon: t4 ? "ChevronDown" : "ChevronRight",
                      size: "xs"
                    }, null, 8, ["icon"])
                  ];
                }),
                _: 1
              }),
              createVNode(unref(V), { as: "template" }, {
                default: withCtx(() => [
                  createBaseVNode("table", E, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(x9.value, ({ id: t4, label: i9, description: u8 }) => (openBlock(), createBlock(unref(i3), {
                      key: t4,
                      class: "text-c-2",
                      onClick: (d5) => w2(t4, !r6.value.includes(t4))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(m3), { class: "w-full px-2 py-1.5 hover:bg-b-2 cursor-pointer" }, {
                          default: withCtx(() => [
                            createBaseVNode("span", null, [
                              createBaseVNode("span", I3, toDisplayString(i9), 1),
                              createBaseVNode("span", null, " – " + toDisplayString(u8), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(x4), {
                          modelValue: r6.value.includes(t4),
                          "onUpdate:modelValue": () => {
                          }
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["onClick"]))), 128))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/libs/oauth2.js
var p4 = (t4) => new Promise((r6, n4) => {
  if (t4.flow.type === "clientCredentials" || t4.flow.type === "password")
    u6(t4).then(r6).catch(n4);
  else {
    const e6 = t4.flow.selectedScopes.join(" "), a10 = (Math.random() + 1).toString(36).substring(7), o2 = new URL(t4.flow.authorizationUrl);
    t4.flow.type === "implicit" ? o2.searchParams.set("response_type", "token") : t4.flow.type === "authorizationCode" && o2.searchParams.set("response_type", "code"), o2.searchParams.set("client_id", t4.clientId), o2.searchParams.set("redirect_uri", t4.flow.redirectUri), o2.searchParams.set("scope", e6), o2.searchParams.set("state", a10);
    const i9 = window.open(o2, "openAuth2Window", "left=100,top=100,width=800,height=600");
    if (i9) {
      const d5 = setInterval(function() {
        var f8;
        let s5 = null, c3 = null;
        try {
          const l6 = new URL(i9.location.href).searchParams;
          s5 = l6.get("access_token"), c3 = l6.get("code");
        } catch {
        }
        if (i9.closed || s5 || c3)
          if (clearInterval(d5), i9.close(), s5) {
            const l6 = (f8 = i9.location.href.match(/state=([^&]*)/)) == null ? void 0 : f8[1];
            s5 && l6 === a10 && r6(s5);
          } else c3 ? u6(t4, c3).then(r6).catch(n4) : (clearInterval(d5), n4(
            new Error("Window was closed without granting authorization")
          ));
      }, 200);
    }
  }
});
var u6 = async (t4, r6) => {
  if (!("clientSecret" in t4.flow))
    throw new Error(
      "Authorize Servers only works for Client Credentials or Authorization Code flow"
    );
  if (!t4.flow) throw new Error("OAuth2 flow was not defined");
  const n4 = t4.flow.selectedScopes.join(" "), e6 = new URLSearchParams();
  e6.set("client_id", t4.clientId), e6.set("scope", n4), t4.flow.clientSecret && e6.set("client_secret", t4.flow.clientSecret), "redirectUri" in t4.flow && e6.set("redirect_uri", t4.flow.redirectUri), r6 && (e6.set("code", r6), e6.set("grant_type", "authorization_code")), "secondValue" in t4.flow ? (e6.set("grant_type", "password"), e6.set("username", t4.flow.value), e6.set("password", t4.flow.secondValue)) : e6.set("grant_type", "client_credentials");
  try {
    const a10 = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    t4.clientId && t4.flow.clientSecret && (a10.Authorization = `Basic ${btoa(`${t4.clientId}:${t4.flow.clientSecret}`)}`);
    const o2 = await fetch(t4.flow.tokenUrl, {
      method: "POST",
      headers: a10,
      body: e6
    }), { access_token: w2 } = await o2.json();
    return w2;
  } catch {
    throw new Error(
      "Failed to get an access token. Please check your credentials."
    );
  }
};

// node_modules/@scalar/api-client/dist/views/Request/components/OAuth2.vue.js
var F2 = { class: "h-8 flex items-center justify-self-end" };
var I4 = { class: "h-8 flex items-center justify-self-end" };
var E2 = defineComponent({
  __name: "OAuth2",
  props: {
    scheme: {}
  },
  setup(y6) {
    const w2 = y6, p8 = k(), { isReadOnly: U2, securitySchemeMutators: g4 } = rt(), r6 = (e6, l6) => g4.edit(w2.scheme.uid, e6, l6), z2 = async () => {
      if (p8.isLoading) return;
      p8.startLoading();
      const e6 = await p4(w2.scheme).finally(
        () => p8.stopLoading()
      );
      e6 && r6("flow.token", e6);
    };
    return (e6, l6) => e6.scheme.flow.token ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createVNode(unref(i3), null, {
        default: withCtx(() => [
          createVNode(C4, {
            id: "oauth2-access-token",
            class: "border-r-transparent",
            modelValue: e6.scheme.flow.token,
            placeholder: "QUxMIFlPVVIgQkFTRSBBUkUgQkVMT05HIFRPIFVT",
            type: "password",
            "onUpdate:modelValue": l6[0] || (l6[0] = (a10) => r6("flow.token", a10))
          }, {
            default: withCtx(() => [
              createTextVNode(" Access Token ")
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }),
      createVNode(unref(i3), { class: "min-w-full" }, {
        default: withCtx(() => [
          createBaseVNode("div", F2, [
            createVNode(unref(W), {
              class: "p-0 py-0.5 px-2 mr-1",
              loading: unref(p8),
              size: "sm",
              variant: "outlined",
              onClick: l6[1] || (l6[1] = (a10) => r6("flow.token", ""))
            }, {
              default: withCtx(() => [
                createTextVNode(" Clear ")
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 1
      })
    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      unref(U2) ? createCommentVNode("", true) : (openBlock(), createBlock(unref(i3), { key: 0 }, {
        default: withCtx(() => [
          "authorizationUrl" in e6.scheme.flow ? (openBlock(), createBlock(C4, {
            key: 0,
            id: `oauth2-authorization-url-${e6.scheme.uid}`,
            modelValue: e6.scheme.flow.authorizationUrl,
            placeholder: "https://galaxy.scalar.com/authorize",
            "onUpdate:modelValue": l6[2] || (l6[2] = (a10) => r6("flow.authorizationUrl", a10))
          }, {
            default: withCtx(() => [
              createTextVNode(" Authorization Url ")
            ]),
            _: 1
          }, 8, ["id", "modelValue"])) : createCommentVNode("", true),
          "tokenUrl" in e6.scheme.flow ? (openBlock(), createBlock(C4, {
            key: 1,
            id: `oauth2-token-url-${e6.scheme.uid}`,
            modelValue: e6.scheme.flow.tokenUrl,
            placeholder: "https://galaxy.scalar.com/token",
            "onUpdate:modelValue": l6[3] || (l6[3] = (a10) => r6("flow.tokenUrl", a10))
          }, {
            default: withCtx(() => [
              createTextVNode(" Token Url ")
            ]),
            _: 1
          }, 8, ["id", "modelValue"])) : createCommentVNode("", true)
        ]),
        _: 1
      })),
      "redirectUri" in e6.scheme.flow ? (openBlock(), createBlock(unref(i3), { key: 1 }, {
        default: withCtx(() => [
          createVNode(C4, {
            id: `oauth2-redirect-uri-${e6.scheme.uid}`,
            modelValue: e6.scheme.flow.redirectUri,
            placeholder: "https://galaxy.scalar.com/callback",
            "onUpdate:modelValue": l6[4] || (l6[4] = (a10) => r6("flow.redirectUri", a10))
          }, {
            default: withCtx(() => [
              createTextVNode(" Redirect Url ")
            ]),
            _: 1
          }, 8, ["id", "modelValue"])
        ]),
        _: 1
      })) : createCommentVNode("", true),
      e6.scheme.flow.type === "password" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        createVNode(unref(i3), null, {
          default: withCtx(() => [
            createVNode(C4, {
              id: `oauth2-password-username-${e6.scheme.uid}`,
              class: "text-c-2",
              modelValue: e6.scheme.flow.value,
              placeholder: "ScalarEnjoyer01",
              "onUpdate:modelValue": l6[5] || (l6[5] = (a10) => r6("flow.value", a10))
            }, {
              default: withCtx(() => [
                createTextVNode(" Username ")
              ]),
              _: 1
            }, 8, ["id", "modelValue"])
          ]),
          _: 1
        }),
        createVNode(unref(i3), null, {
          default: withCtx(() => [
            createVNode(C4, {
              id: `oauth2-password-password-${e6.scheme.uid}`,
              modelValue: e6.scheme.flow.secondValue,
              placeholder: "xxxxxx",
              type: "password",
              "onUpdate:modelValue": l6[6] || (l6[6] = (a10) => r6("flow.secondValue", a10))
            }, {
              default: withCtx(() => [
                createTextVNode(" Password ")
              ]),
              _: 1
            }, 8, ["id", "modelValue"])
          ]),
          _: 1
        })
      ], 64)) : createCommentVNode("", true),
      createVNode(unref(i3), null, {
        default: withCtx(() => [
          createVNode(C4, {
            id: `oauth2-client-id-${e6.scheme.uid}`,
            modelValue: e6.scheme.clientId,
            placeholder: "12345",
            "onUpdate:modelValue": l6[7] || (l6[7] = (a10) => r6("clientId", a10))
          }, {
            default: withCtx(() => [
              createTextVNode(" Client ID ")
            ]),
            _: 1
          }, 8, ["id", "modelValue"])
        ]),
        _: 1
      }),
      "clientSecret" in e6.scheme.flow ? (openBlock(), createBlock(unref(i3), { key: 3 }, {
        default: withCtx(() => [
          createVNode(C4, {
            id: `oauth2-client-secret-${e6.scheme.uid}`,
            modelValue: e6.scheme.flow.clientSecret,
            placeholder: "XYZ123",
            type: "password",
            "onUpdate:modelValue": l6[8] || (l6[8] = (a10) => r6("flow.clientSecret", a10))
          }, {
            default: withCtx(() => [
              createTextVNode(" Client Secret ")
            ]),
            _: 1
          }, 8, ["id", "modelValue"])
        ]),
        _: 1
      })) : createCommentVNode("", true),
      e6.scheme.flow.scopes ? (openBlock(), createBlock(unref(i3), { key: 4 }, {
        default: withCtx(() => [
          createVNode(P2, {
            activeFlow: e6.scheme.flow,
            updateScheme: r6
          }, null, 8, ["activeFlow"])
        ]),
        _: 1
      })) : createCommentVNode("", true),
      createVNode(unref(i3), { class: "min-w-full" }, {
        default: withCtx(() => [
          createBaseVNode("div", I4, [
            createVNode(unref(W), {
              class: "p-0 py-0.5 px-2 mr-1",
              loading: unref(p8),
              size: "sm",
              variant: "outlined",
              onClick: z2
            }, {
              default: withCtx(() => [
                createTextVNode(" Authorize ")
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 1
      })
    ], 64));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth.vue2.js
var D2 = (S3) => (pushScopeId("data-v-afbf407f"), S3 = S3(), popScopeId(), S3);
var ie2 = { class: "flex gap-1" };
var se2 = D2(() => createBaseVNode("div", { class: "text-c-2 h-8 flex min-w-[120px] items-center border-r-1/2 pr-0 pl-2" }, " Auth Type ", -1));
var re3 = {
  key: 0,
  class: "flex relative scroll-timeline-x w-full"
};
var de2 = D2(() => createBaseVNode("div", { class: "fade-left" }, null, -1));
var ce = { class: "flex flex-1 gap-0.75 mr-1.5 items-center" };
var pe = D2(() => createBaseVNode("div", { class: "fade-right" }, null, -1));
var me = {
  key: 1,
  class: "pl-2"
};
var $2 = "*sclrMulti*";
var Te = defineComponent({
  __name: "RequestAuth",
  props: {
    title: {}
  },
  setup(S3) {
    const {
      activeCollection: T2,
      activeRequest: k10,
      activeSecurityRequirements: O5,
      activeSecuritySchemes: R3,
      isReadOnly: w2,
      requestMutators: P4,
      securitySchemeMutators: N9,
      securitySchemes: U2
    } = rt(), B8 = ref(null), I7 = (t4) => {
      switch (t4 == null ? void 0 : t4.type) {
        case "apiKey":
          return `${capitalize(t4.in)}`;
        case "http":
          return `${capitalize(t4.scheme)} Authentication`;
        case "oauth2":
          return camelToTitleWords(t4.flow.type);
        case "openIdConnect":
          return "Open ID Connect";
        default:
          return "None";
      }
    }, j3 = computed(
      () => {
        var e6;
        const t4 = (e6 = T2.value) == null ? void 0 : e6.securitySchemeDict, l6 = O5.value.flatMap((d5) => {
          const a10 = Object.keys(d5);
          if (a10.length === 0 && w2.value)
            return { id: "none", label: "None" };
          if (!t4) return [];
          if (a10.length > 1) {
            const p8 = a10.map((r6) => {
              const x9 = t4[r6];
              return U2[x9];
            }), s5 = p8.map((r6) => r6.nameKey).join(" & ");
            return {
              id: $2 + p8.map((r6) => r6.uid).join($2),
              label: s5
            };
          }
          return a10.flatMap((p8) => {
            const s5 = t4[p8], r6 = U2[s5], x9 = I7(r6);
            return {
              id: s5,
              label: x9
            };
          });
        });
        if (w2.value)
          return l6;
        {
          const d5 = k10.value.securitySchemeUids.map((s5) => {
            const r6 = U2[s5], x9 = I7(r6);
            return {
              id: s5,
              label: "name" in r6 && r6.name.length ? `${x9} (${r6.name})` : x9
            };
          }), a10 = k10.value.selectedSecuritySchemeUids, p8 = d5.filter(
            (s5) => a10.includes(s5.id)
          );
          return [
            { label: "Select auth", options: [...l6, ...p8] },
            {
              label: "Add new auth",
              options: l
            }
          ];
        }
      }
    ), M3 = (t4) => {
      if (t4.startsWith($2)) {
        const l6 = t4.split($2);
        return l6.shift(), l6;
      } else
        return [t4];
    }, m11 = computed({
      // Grab the selected OR first security scheme
      get: () => {
        var l6;
        const t4 = new Set(
          ((l6 = k10.value) == null ? void 0 : l6.selectedSecuritySchemeUids) || []
        );
        return j3.value.flatMap(
          (e6) => "options" in e6 ? e6.options : e6
        ).filter(
          (e6) => M3(e6.id).some((d5) => t4.has(d5))
        );
      },
      // Update the selected auth per this request
      set: (t4) => {
        var e6, d5, a10, p8;
        const l6 = t4.find(
          (s5) => t3[s5.id]
        );
        l6 != null && l6.payload && T2.value ? ((p8 = (a10 = (d5 = (e6 = B8.value) == null ? void 0 : e6.comboboxPopoverRef) == null ? void 0 : d5.popoverButtonRef) == null ? void 0 : a10.el) == null || p8.click(), N9.add(
          l6.payload,
          T2.value.uid,
          k10.value,
          true
        )) : P4.edit(
          k10.value.uid,
          "selectedSecuritySchemeUids",
          t4.flatMap((s5) => M3(s5.id))
        );
      }
    }), W4 = computed(
      () => m11.value.flatMap(({ id: t4 }) => M3(t4)).map((t4) => {
        const l6 = U2[t4];
        return `${I7(l6)} (${l6.nameKey})`;
      })
    ), y6 = (t4, l6, e6) => N9.edit(t4.uid ?? "", l6, e6), H2 = (t4) => {
      const l6 = m11.value.filter(
        (e6) => e6.id !== t4
      );
      m11.value = l6;
    };
    return (t4, l6) => (openBlock(), createBlock(D, {
      class: "group/params",
      itemCount: m11.value.length
    }, {
      title: withCtx(() => [
        createBaseVNode("div", ie2, toDisplayString(t4.title), 1)
      ]),
      default: withCtx(() => [
        createBaseVNode("form", null, [
          createVNode(unref(f2), {
            class: "flex-1",
            columns: [""]
          }, {
            default: withCtx(() => [
              createVNode(unref(i3), null, {
                default: withCtx(() => [
                  createVNode(unref(f4), { class: "relative col-span-full cursor-pointer py-[0px] px-[0px] flex items-center" }, {
                    default: withCtx(() => [
                      createVNode(unref(y), {
                        ref_key: "comboboxRef",
                        ref: B8,
                        modelValue: m11.value,
                        "onUpdate:modelValue": l6[0] || (l6[0] = (e6) => m11.value = e6),
                        class: "text-xs w-full",
                        fullWidth: "",
                        multiple: "",
                        options: j3.value,
                        style: { "margin-left": "120px" },
                        teleport: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(W), {
                            class: "h-auto py-0 px-0 text-c-2 hover:text-c-1 font-normal justify-start",
                            fullWidth: "",
                            variant: "ghost"
                          }, {
                            default: withCtx(() => [
                              se2,
                              m11.value.length ? (openBlock(), createElementBlock("div", re3, [
                                de2,
                                createBaseVNode("div", ce, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(m11.value, (e6) => (openBlock(), createElementBlock("span", {
                                    key: e6.id,
                                    class: "cm-pill flex items-center mx-0 h-fit"
                                  }, [
                                    createTextVNode(toDisplayString(e6.label) + " ", 1),
                                    createVNode(unref(m2), {
                                      class: "ml-1 cursor-pointer text-c-3 hover:text-c-1",
                                      icon: "Close",
                                      size: "xs",
                                      onClick: withModifiers((d5) => H2(e6.id), ["stop"])
                                    }, null, 8, ["onClick"])
                                  ]))), 128))
                                ]),
                                pe
                              ])) : (openBlock(), createElementBlock("div", me, " None ")),
                              createVNode(unref(m2), {
                                class: "min-w-3 ml-auto mr-2.5",
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
                    _: 1
                  })
                ]),
                _: 1
              }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(R3), (e6, d5) => (openBlock(), createElementBlock(Fragment, {
                key: e6.uid
              }, [
                unref(R3).length > 1 ? (openBlock(), createBlock(unref(i3), {
                  key: 0,
                  class: "group/delete"
                }, {
                  default: withCtx(() => [
                    createVNode(m3, { class: "text-c-2 pl-2 text-xs font-medium flex items-center bg-b-2" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(W4.value[d5]), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                e6.type === "http" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  e6.scheme === "bearer" ? (openBlock(), createBlock(unref(i3), { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(C4, {
                        id: `http-bearer-token-${e6.uid}`,
                        modelValue: e6.value,
                        placeholder: "Token",
                        type: "password",
                        "onUpdate:modelValue": (a10) => y6(e6, "value", a10)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Bearer Token ")
                        ]),
                        _: 2
                      }, 1032, ["id", "modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : e6.scheme === "basic" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createVNode(unref(i3), null, {
                      default: withCtx(() => [
                        createVNode(C4, {
                          id: `http-basic-username-${e6.uid}`,
                          class: "text-c-2",
                          modelValue: e6.value,
                          placeholder: "ScalarEnjoyer01",
                          required: "",
                          "onUpdate:modelValue": (a10) => y6(e6, "value", a10)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Username ")
                          ]),
                          _: 2
                        }, 1032, ["id", "modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(i3), null, {
                      default: withCtx(() => [
                        createVNode(C4, {
                          id: `http-basic-password-${e6.uid}`,
                          modelValue: e6.secondValue,
                          placeholder: "xxxxxx",
                          type: "password",
                          "onUpdate:modelValue": (a10) => y6(e6, "secondValue", a10)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Password ")
                          ]),
                          _: 2
                        }, 1032, ["id", "modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)
                  ], 64)) : createCommentVNode("", true)
                ], 64)) : e6.type === "apiKey" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  unref(w2) ? (openBlock(), createBlock(unref(i3), { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(C4, {
                        id: `api-key-value-${e6.uid}`,
                        modelValue: e6.value,
                        placeholder: "Value",
                        "onUpdate:modelValue": (a10) => y6(e6, "value", a10)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(e6.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["id", "modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createVNode(unref(i3), null, {
                      default: withCtx(() => [
                        createVNode(C4, {
                          id: `api-key-name-${e6.uid}`,
                          modelValue: e6.name,
                          placeholder: "api-key",
                          "onUpdate:modelValue": (a10) => y6(e6, "name", a10)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Name ")
                          ]),
                          _: 2
                        }, 1032, ["id", "modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(i3), null, {
                      default: withCtx(() => [
                        createVNode(C4, {
                          id: `api-key-value-add-${e6.uid}`,
                          modelValue: e6.value,
                          placeholder: "QUxMIFlPVVIgQkFTRSBBUkUgQkVMT05HIFRPIFVT",
                          "onUpdate:modelValue": (a10) => y6(e6, "value", a10)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Value ")
                          ]),
                          _: 2
                        }, 1032, ["id", "modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)
                  ], 64))
                ], 64)) : e6.type === "oauth2" ? (openBlock(), createBlock(unref(E2), {
                  key: 3,
                  scheme: e6
                }, null, 8, ["scheme"])) : createCommentVNode("", true)
              ], 64))), 128))
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["itemCount"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth.vue.js
var e4 = s(Te, [["__scopeId", "data-v-afbf407f"]]);

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestTableTooltip.vue.js
var d3 = { class: "pl-1 pr-1.5 py-[9px]" };
var b2 = { class: "grid gap-1.5 pointer-events-none min-w-48 w-content shadow-lg rounded bg-b-1 z-100 p-2 text-xxs leading-5 z-10 text-c-1" };
var h3 = { class: "flex items-center text-c-2" };
var u7 = { key: 0 };
var g2 = {
  key: 1,
  class: "before:content-['·'] before:block before:mx-[0.5ch] flex"
};
var x5 = {
  key: 2,
  class: "before:content-['·'] before:block before:mx-[0.5ch] flex whitespace-nowrap"
};
var _5 = {
  key: 3,
  class: "before:content-['·'] before:block before:mx-[0.5ch] flex whitespace-nowrap"
};
var k4 = {
  key: 4,
  class: "before:content-['·'] before:block before:mx-[0.5ch] flex whitespace-nowrap"
};
var y3 = {
  key: 0,
  class: "leading-snug text-pretty text-sm",
  style: { maxWidth: "16rem" }
};
var B2 = defineComponent({
  __name: "RequestTableTooltip",
  props: {
    item: {}
  },
  setup(w2) {
    return (e6, v5) => (openBlock(), createBlock(unref(C3), {
      align: "start",
      class: "w-full",
      delay: 0,
      side: "left",
      triggerClass: "before:absolute before:content-[''] before:bg-gradient-to-r before:from-transparent before:to-b-1 before:min-h-full before:right-[23px] before:w-3 absolute h-8 right-0"
    }, {
      trigger: withCtx(() => [
        createBaseVNode("div", d3, [
          createVNode(unref(m2), {
            class: "text-c-3 group-hover/info:text-c-1",
            icon: "Info",
            size: "sm",
            thickness: "1.5"
          })
        ])
      ]),
      content: withCtx(() => [
        createBaseVNode("div", b2, [
          createBaseVNode("div", h3, [
            e6.item.type ? (openBlock(), createElementBlock("span", u7, toDisplayString(e6.item.type), 1)) : createCommentVNode("", true),
            e6.item.format ? (openBlock(), createElementBlock("span", g2, toDisplayString(e6.item.format), 1)) : createCommentVNode("", true),
            e6.item.minimum ? (openBlock(), createElementBlock("span", x5, "min: " + toDisplayString(e6.item.minimum), 1)) : createCommentVNode("", true),
            e6.item.maximum ? (openBlock(), createElementBlock("span", _5, "max: " + toDisplayString(e6.item.maximum), 1)) : createCommentVNode("", true),
            e6.item.default ? (openBlock(), createElementBlock("span", k4, "default: " + toDisplayString(e6.item.default), 1)) : createCommentVNode("", true)
          ]),
          e6.item.description ? (openBlock(), createElementBlock("span", y3, toDisplayString(e6.item.description), 1)) : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestTable.vue2.js
var O3 = (s5) => (pushScopeId("data-v-0c169f89"), s5 = s5(), popScopeId(), s5);
var j2 = { class: "text-c-2 max-w-[100%] overflow-hidden filemask flex items-end justify-end" };
var K = ["onClick"];
var L = O3(() => createBaseVNode("span", null, "File", -1));
var ee = defineComponent({
  __name: "RequestTable",
  props: {
    items: {},
    isEnabledHidden: { type: Boolean, default: false },
    showUploadButton: { type: Boolean, default: false }
  },
  emits: ["updateRow", "toggleRow", "addRow", "deleteRow", "inputFocus", "inputBlur", "uploadFile", "removeFile"],
  setup(s5, { emit: h5 }) {
    const B8 = s5, a10 = h5, _7 = B8.isEnabledHidden ? ["", ""] : ["", "", "36px"], b6 = (e6, n4, l6) => {
      a10("updateRow", e6, n4, l6);
    }, $5 = (e6) => {
      a10("uploadFile", e6);
    }, v5 = (e6) => !!(e6.description || e6.type || e6.default || e6.format), y6 = (e6) => computed(() => {
      if (e6.type === "integer" && e6.value !== void 0) {
        const n4 = Number(e6.value);
        if (e6.minimum !== void 0 && n4 < e6.minimum)
          return `Min is ${e6.minimum}`;
        if (e6.maximum !== void 0 && n4 > e6.maximum)
          return `Max is ${e6.maximum}`;
      }
      return false;
    }), R3 = (e6) => Array.isArray(e6.default) && e6.default.length === 1 ? e6.default[0] : e6.default;
    return (e6, n4) => (openBlock(), createBlock(f2, {
      class: "flex-1",
      columns: unref(_7)
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e6.items, (l6, t4) => (openBlock(), createBlock(i3, { key: t4 }, {
          default: withCtx(() => [
            e6.isEnabledHidden ? createCommentVNode("", true) : (openBlock(), createBlock(x4, {
              key: 0,
              modelValue: l6.enabled,
              "onUpdate:modelValue": (o2) => a10("toggleRow", t4, o2)
            }, null, 8, ["modelValue", "onUpdate:modelValue"])),
            createVNode(m3, null, {
              default: withCtx(() => [
                createVNode(_, {
                  disableCloseBrackets: "",
                  disableEnter: "",
                  disableTabIndent: "",
                  modelValue: l6.key,
                  placeholder: "Key",
                  required: l6.required,
                  onBlur: n4[0] || (n4[0] = (o2) => a10("inputBlur")),
                  onFocus: n4[1] || (n4[1] = (o2) => a10("inputFocus")),
                  onInput: (o2) => e6.items && t4 === e6.items.length - 1 && a10("addRow"),
                  onSelectVariable: (o2) => b6(t4, "key", o2),
                  "onUpdate:modelValue": (o2) => a10("updateRow", t4, "key", o2)
                }, null, 8, ["modelValue", "required", "onInput", "onSelectVariable", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            createVNode(m3, null, {
              default: withCtx(() => [
                createVNode(_, {
                  class: normalizeClass({
                    "pr-6": v5(l6)
                  }),
                  disableCloseBrackets: "",
                  disableEnter: "",
                  disableTabIndent: "",
                  enum: l6.enum,
                  max: l6.maximum,
                  min: l6.minimum,
                  modelValue: l6.value,
                  nullable: l6.nullable,
                  placeholder: "Value",
                  type: l6.type,
                  onBlur: n4[2] || (n4[2] = (o2) => a10("inputBlur")),
                  onFocus: n4[3] || (n4[3] = (o2) => a10("inputFocus")),
                  onInput: (o2) => e6.items && t4 === e6.items.length - 1 && a10("addRow"),
                  onSelectVariable: (o2) => b6(t4, "value", o2),
                  "onUpdate:modelValue": (o2) => a10("updateRow", t4, "value", o2)
                }, createSlots({
                  icon: withCtx(() => [
                    v5(l6) ? (openBlock(), createBlock(B2, {
                      key: 0,
                      item: { ...l6, default: R3(l6) }
                    }, null, 8, ["item"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, [
                  y6(l6).value ? {
                    name: "warning",
                    fn: withCtx(() => [
                      createTextVNode(toDisplayString(y6(l6).value), 1)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["class", "enum", "max", "min", "modelValue", "nullable", "type", "onInput", "onSelectVariable", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e6.showUploadButton ? (openBlock(), createBlock(m3, {
              key: 1,
              class: "group/upload p-1 overflow-hidden relative text-ellipsis whitespace-nowrap"
            }, {
              default: withCtx(() => {
                var o2;
                return [
                  l6.file ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("div", j2, [
                      createBaseVNode("span", null, toDisplayString((o2 = l6.file) == null ? void 0 : o2.name), 1)
                    ]),
                    createBaseVNode("button", {
                      class: "absolute bg-b-2 font-medium centered-x centered-y hidden rounded text-center p-0.5 w-[calc(100%_-_8px)] group-hover/upload:block text-xs",
                      type: "button",
                      onClick: (S3) => a10("removeFile", t4)
                    }, " Delete ", 8, K)
                  ], 64)) : (openBlock(), createBlock(unref(W), {
                    key: 1,
                    class: "bg-b-2 hover:bg-b-3 border-0 py-px text-c-2 shadow-none",
                    size: "sm",
                    variant: "outlined",
                    onClick: (S3) => $5(t4)
                  }, {
                    default: withCtx(() => [
                      L,
                      createVNode(unref(m2), {
                        class: "ml-1",
                        icon: "UploadSimple",
                        size: "xs",
                        thickness: "2.5"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))
                ];
              }),
              _: 2
            }, 1024)) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1024))), 128))
      ]),
      _: 1
    }, 8, ["columns"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestTable.vue.js
var f5 = s(ee, [["__scopeId", "data-v-0c169f89"]]);

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestBody.vue.js
var le = {
  key: 0,
  class: "text-c-3 flex min-h-14 w-full items-center justify-center rounded border border-dashed text-center text-base"
};
var re4 = createBaseVNode("span", null, "No Body", -1);
var ue2 = [
  re4
];
var se3 = {
  key: 0,
  class: "text-c-3 flex min-h-10 w-full items-center justify-center p-2 text-sm"
};
var ie3 = createBaseVNode("span", null, "No Body", -1);
var de3 = [
  ie3
];
var ce2 = {
  key: 1,
  class: "flex items-center justify-center p-1.5 overflow-hidden"
};
var me2 = { class: "text-c-2 text-xs w-full border rounded p-1 max-w-full overflow-hidden whitespace-nowrap" };
var pe2 = createBaseVNode("span", null, "Upload File", -1);
var Re = defineComponent({
  __name: "RequestBody",
  props: {
    title: {},
    body: {},
    formData: {}
  },
  setup(fe2) {
    const M3 = {
      multipartForm: "Multipart Form",
      formUrlEncoded: "Form URL Encoded",
      binaryFile: "Binary File",
      json: "JSON",
      xml: "XML",
      yaml: "YAML",
      edn: "EDN",
      other: "Other",
      none: "None"
    }, { activeRequest: p8, activeExample: t4, requestExampleMutators: r6 } = rt(), u8 = ref("none"), h5 = ref(null), O5 = {
      json: "json",
      xml: "xml",
      yaml: "yaml",
      edn: "edn",
      other: "html"
    }, z2 = computed(() => {
      const e6 = u8.value;
      return O5[e6] ?? "plaintext";
    });
    function R3() {
      console.log("deleteRow");
    }
    const C7 = (e6, a10, o2) => {
      if (!p8.value || !t4.value) return;
      const s5 = f8.value;
      if (s5.length > e6) {
        const n4 = [...s5];
        n4[e6] = { ...n4[e6], [a10]: o2 }, (n4[e6].key !== "" || n4[e6].value !== "") && (n4[e6].enabled = true), n4[e6].key === "" && n4[e6].value === "" && n4.splice(e6, 1), r6.edit(
          t4.value.uid,
          "body.formData.value",
          n4
        );
      } else {
        const n4 = [createRequestExampleParameter({ [a10]: o2 })];
        r6.edit(
          t4.value.uid,
          "body.formData.value",
          n4
        ), nextTick(() => {
          var P4;
          if (!h5.value) return;
          (P4 = h5.value.querySelectorAll("input")[a10 === "key" ? 0 : 1]) == null || P4.focus();
        });
      }
    }, f8 = computed(
      () => {
        var e6;
        return ((e6 = t4.value) == null ? void 0 : e6.body.formData.value) ?? [];
      }
    );
    function $5() {
      f8.value.length === 0 && w2();
    }
    const w2 = () => {
      if (!p8.value || !t4.value) return;
      const e6 = createRequestExampleParameter({
        enabled: false
      }), a10 = [...f8.value, e6];
      r6.edit(
        t4.value.uid,
        "body.formData.value",
        a10
      );
    }, H2 = (e6) => {
      !p8.value || !t4.value || r6.edit(
        t4.value.uid,
        "body.raw.value",
        e6
      );
    }, J2 = (e6) => e6 === "multipartForm" ? "multipart/form-data" : e6 === "formUrlEncoded" ? "application/x-www-form-urlencoded" : e6 === "binaryFile" ? "application/octet-stream" : e6 !== "none" ? `application/${e6}` : "", X4 = (e6) => e6 === "multipartForm" || e6 === "formUrlEncoded" ? "formData" : e6 === "binaryFile" ? "binary" : "raw", Y3 = (e6) => {
      const a10 = J2(e6), o2 = X4(e6);
      r6.edit(
        t4.value.uid,
        "body.activeBody",
        o2
      );
      const s5 = [
        ...t4.value.parameters.headers
      ].findIndex(
        (l6) => l6.key.toLowerCase() === "Content-Type".toLowerCase()
      ), n4 = [...t4.value.parameters.headers][s5];
      if ((n4 == null ? void 0 : n4.value) !== a10) {
        if (n4 && a10) {
          const l6 = [...t4.value.parameters.headers];
          l6[s5].value = a10, r6.edit(
            t4.value.uid,
            "parameters.headers",
            l6
          );
        } else if (a10) {
          const l6 = [
            ...t4.value.parameters.headers.filter(
              (E4) => E4.key.toLowerCase() !== "Content-Type".toLowerCase()
            )
          ];
          l6.push({
            key: "Content-Type",
            value: a10,
            enabled: true
          }), r6.edit(
            t4.value.uid,
            "parameters.headers",
            l6
          );
        }
      }
    }, T2 = async (e6) => {
      const { open: a10 } = n({
        onChange: async (o2) => {
          const s5 = o2 == null ? void 0 : o2[0];
          if (s5 && p8.value && t4.value) {
            const l6 = [...f8.value];
            l6[e6] = {
              ...l6[e6],
              file: s5
            }, r6.edit(
              t4.value.uid,
              "body.formData.value",
              l6
            );
          }
        },
        multiple: false,
        accept: "*/*"
      });
      a10();
    };
    function G() {
      !p8.value || !t4.value || r6.edit(t4.value.uid, "body.binary", void 0);
    }
    function U2(e6) {
      if (!p8.value || !t4.value) return;
      const o2 = [...f8.value];
      o2[e6] = {
        ...o2[e6],
        file: void 0
      }, r6.edit(
        t4.value.uid,
        "body.formData.value",
        o2
      );
    }
    function K3() {
      const { open: e6 } = n({
        onChange: async (a10) => {
          const o2 = a10 == null ? void 0 : a10[0];
          o2 && p8.value && t4.value && r6.edit(
            t4.value.uid,
            "body.binary",
            o2
          );
        },
        multiple: false,
        accept: "*/*"
      });
      e6();
    }
    const B8 = Object.entries(M3).map(
      ([e6, a10]) => ({
        id: e6,
        label: a10,
        value: e6
      })
    ), x9 = computed({
      get: () => B8.find((e6) => e6.id === u8.value),
      set: (e6) => {
        e6 != null && e6.id && (u8.value = e6.id);
      }
    }), g4 = computed(() => t4.value ? t4.value.body.activeBody === "formData" && t4.value.body.formData && t4.value.body.formData.value.length > 0 ? "multipartForm" : t4.value.body.activeBody === "raw" ? t4.value.body.raw.encoding : u8.value : "none");
    return g4.value !== "none" && (u8.value = g4.value), watch(
      g4,
      (e6) => {
        e6 && (u8.value = e6);
      },
      { immediate: true }
    ), watch(
      u8,
      (e6) => {
        (e6 === "multipartForm" || e6 === "formUrlEncoded") && $5(), Y3(e6);
      },
      { immediate: true }
    ), (e6, a10) => (openBlock(), createBlock(D, null, {
      title: withCtx(() => [
        createTextVNode(toDisplayString(e6.title), 1)
      ]),
      default: withCtx(() => [
        e6.body && e6.body.length === 0 && e6.formData && e6.formData.length === 0 ? (openBlock(), createElementBlock("div", le, ue2)) : e6.formData && e6.formData.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)) : (openBlock(), createBlock(f2, {
          key: 2,
          columns: [""]
        }, {
          default: withCtx(() => [
            createVNode(i3, null, {
              default: withCtx(() => [
                createVNode(f4, { class: "relative col-span-full flex h-8 cursor-pointer items-center px-[2.25px] py-[2.25px]" }, {
                  default: withCtx(() => [
                    createVNode(unref(F), {
                      modelValue: x9.value,
                      "onUpdate:modelValue": a10[0] || (a10[0] = (o2) => x9.value = o2),
                      class: "text-xxs w-full",
                      fullWidth: "",
                      options: unref(B8),
                      teleport: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(W), {
                          class: "flex gap-1.5 h-auto px-1.5 text-c-2 font-normal hover:text-c-1",
                          fullWidth: "",
                          variant: "ghost"
                        }, {
                          default: withCtx(() => {
                            var o2;
                            return [
                              createBaseVNode("span", null, toDisplayString((o2 = x9.value) == null ? void 0 : o2.label), 1),
                              createVNode(unref(m2), {
                                icon: "ChevronDown",
                                size: "xs",
                                thickness: "2.5"
                              })
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "options"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(i3, null, {
              default: withCtx(() => {
                var o2, s5, n4;
                return [
                  u8.value === "none" ? (openBlock(), createElementBlock("div", se3, de3)) : u8.value === "binaryFile" ? (openBlock(), createElementBlock("div", ce2, [
                    (o2 = unref(t4)) != null && o2.body.binary ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createBaseVNode("span", me2, toDisplayString((s5 = unref(t4)) == null ? void 0 : s5.body.binary.name), 1),
                      createVNode(unref(W), {
                        class: "bg-b-2 hover:bg-b-3 border-0 text-c-2 ml-1 shadow-none",
                        size: "sm",
                        variant: "outlined",
                        onClick: G
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete ")
                        ]),
                        _: 1
                      })
                    ], 64)) : (openBlock(), createBlock(unref(W), {
                      key: 1,
                      class: "bg-b-2 hover:bg-b-3 border-0 text-c-2 shadow-none",
                      size: "sm",
                      variant: "outlined",
                      onClick: K3
                    }, {
                      default: withCtx(() => [
                        pe2,
                        createVNode(unref(m2), {
                          class: "ml-1",
                          icon: "UploadSimple",
                          size: "xs",
                          thickness: "2.5"
                        })
                      ]),
                      _: 1
                    }))
                  ])) : u8.value == "multipartForm" ? (openBlock(), createBlock(f5, {
                    key: 2,
                    ref_key: "tableWrapperRef",
                    ref: h5,
                    class: "!m-0 rounded-t-none shadow-none border-l-0 border-r-0 border-t-0 border-b-0",
                    columns: ["32px", "", "", "61px"],
                    items: f8.value,
                    showUploadButton: "",
                    onAddRow: w2,
                    onDeleteRow: R3,
                    onRemoveFile: U2,
                    onUpdateRow: C7,
                    onUploadFile: T2
                  }, null, 8, ["items"])) : u8.value == "formUrlEncoded" ? (openBlock(), createBlock(f5, {
                    key: 3,
                    ref_key: "tableWrapperRef",
                    ref: h5,
                    class: "!m-0 rounded-t-none border-t-0 shadow-none border-l-0 border-r-0 border-t-0 border-b-0",
                    columns: ["32px", "", "", "61px"],
                    items: f8.value,
                    showUploadButton: "",
                    onAddRow: w2,
                    onDeleteRow: R3,
                    onRemoveFile: U2,
                    onUpdateRow: C7,
                    onUploadFile: T2
                  }, null, 8, ["items"])) : (openBlock(), createBlock(_, {
                    key: 4,
                    content: "",
                    language: z2.value,
                    lineNumbers: "",
                    lint: "",
                    modelValue: ((n4 = unref(t4)) == null ? void 0 : n4.body.raw.value) ?? "",
                    "onUpdate:modelValue": H2
                  }, null, 8, ["language", "modelValue"]))
                ];
              }),
              _: 1
            }),
            createVNode(i3)
          ]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestParams.vue.js
var z = { class: "text-c-2 flex whitespace-nowrap opacity-0 group-hover/params:opacity-100 request-meta-buttons" };
var O4 = defineComponent({
  __name: "RequestParams",
  props: {
    title: {},
    paramKey: {}
  },
  setup(k10) {
    const s5 = k10, { activeRequest: n4, activeExample: t4, requestExampleMutators: u8 } = rt(), l6 = computed(
      () => {
        var e6;
        return ((e6 = t4.value) == null ? void 0 : e6.parameters[s5.paramKey]) ?? [];
      }
    );
    onMounted(() => {
      c3();
    });
    const o2 = () => {
      if (!n4.value || !t4.value) return;
      const e6 = createRequestExampleParameter({ enabled: false }), r6 = [...l6.value, e6];
      u8.edit(
        t4.value.uid,
        `parameters.${s5.paramKey}`,
        r6
      );
    }, p8 = ref(null), b6 = (e6, r6, m11) => {
      if (!n4.value || !t4.value) return;
      const f8 = l6.value;
      if (f8.length > e6) {
        const a10 = [...f8];
        a10[e6] = { ...a10[e6], [r6]: m11 }, (a10[e6].key !== "" || a10[e6].value !== "") && (a10[e6].enabled = true), a10[e6].key === "" && a10[e6].value === "" && a10.splice(e6, 1), u8.edit(
          t4.value.uid,
          `parameters.${s5.paramKey}`,
          a10
        );
      } else {
        const a10 = [createRequestExampleParameter({ [r6]: m11 })];
        u8.edit(
          t4.value.uid,
          `parameters.${s5.paramKey}`,
          a10
        ), nextTick(() => {
          var v5;
          if (!p8.value) return;
          (v5 = p8.value.querySelectorAll("input")[r6 === "key" ? 0 : 1]) == null || v5.focus();
        });
      }
    }, q = (e6, r6) => n4.value && t4.value && u8.edit(
      t4.value.uid,
      `parameters.${s5.paramKey}.${e6}.enabled`,
      r6
    ), w2 = () => {
      !n4.value || !t4.value || (u8.edit(
        t4.value.uid,
        `parameters.${s5.paramKey}`,
        []
      ), nextTick(() => {
        o2();
      }));
    };
    function c3() {
      if (l6.value.length === 0)
        o2();
      else if (l6.value.length >= 1) {
        const e6 = l6.value[l6.value.length - 1];
        e6.key !== "" && e6.value !== "" && o2();
      }
    }
    const C7 = computed(
      () => l6.value.filter((e6) => e6.key || e6.value).length
    );
    return watch(
      () => t4.value,
      (e6, r6) => {
        e6 !== r6 && c3();
      },
      { immediate: true }
    ), (e6, r6) => (openBlock(), createBlock(D, {
      class: "group/params",
      itemCount: C7.value
    }, {
      title: withCtx(() => [
        createTextVNode(toDisplayString(e6.title), 1)
      ]),
      actions: withCtx(() => [
        createBaseVNode("div", z, [
          createVNode(unref(W), {
            class: "px-1 transition-none",
            size: "sm",
            variant: "ghost",
            onClick: withModifiers(w2, ["stop"])
          }, {
            default: withCtx(() => [
              createTextVNode(" Clear ")
            ]),
            _: 1
          })
        ])
      ]),
      default: withCtx(() => [
        createBaseVNode("div", {
          ref_key: "tableWrapperRef",
          ref: p8
        }, [
          createVNode(f5, {
            class: "flex-1",
            columns: ["32px", "", ""],
            items: l6.value,
            onAddRow: o2,
            onToggleRow: q,
            onUpdateRow: b6
          }, null, 8, ["items"])
        ], 512)
      ]),
      _: 1
    }, 8, ["itemCount"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestPathParams.vue.js
var B3 = {
  key: 1,
  class: "text-c-3 px-4 text-sm border rounded min-h-12 justify-center flex items-center bg-b-1 mx-1"
};
var N3 = createBaseVNode("code", { class: "bg-b-2 ml-1 px-1 rounded" }, "/endpoint/{my_path_variable}", -1);
var H = defineComponent({
  __name: "RequestPathParams",
  props: {
    title: {},
    paramKey: {}
  },
  setup(_7) {
    const s5 = _7, {
      activeRequest: o2,
      activeExample: r6,
      requestMutators: h5,
      requestExampleMutators: v5
    } = rt(), u8 = computed(
      () => {
        var e6;
        return ((e6 = r6.value) == null ? void 0 : e6.parameters[s5.paramKey]) ?? [];
      }
    ), x9 = (e6, n4, a10) => {
      var p8, t4;
      if (!o2.value || !r6.value) return;
      const c3 = r6.value.parameters[s5.paramKey], l6 = (p8 = c3[e6]) == null ? void 0 : p8.key;
      if (n4 === "key") {
        if ((t4 = c3[e6]) != null && t4.required)
          return;
        if (a10) {
          const i9 = encodeURIComponent(l6), m11 = encodeURIComponent(a10), $5 = new RegExp(`(?<=/):${i9}(?=[/?#]|$)`, "g"), k10 = o2.value.path.replace(
            $5,
            `:${m11}`
          );
          h5.edit(o2.value.uid, "path", k10);
        } else {
          c3.splice(e6, 1);
          const i9 = new RegExp(`/:${encodeURIComponent(l6)}(?=[/?#]|$)`, "g"), m11 = o2.value.path.replace(i9, "");
          h5.edit(o2.value.uid, "path", m11);
        }
      }
      v5.edit(
        r6.value.uid,
        `parameters.${s5.paramKey}.${e6}.${n4}`,
        a10
      );
    }, b6 = (e6) => {
      var p8;
      if (!r6.value) return;
      const n4 = ((p8 = e6.match(new RegExp("(?<!{){([^{}]+)}(?!})", "g"))) == null ? void 0 : p8.map((t4) => t4.slice(1, -1))) || [], a10 = r6.value.parameters[s5.paramKey], c3 = new Map(a10.map((t4) => [t4.key, t4])), l6 = n4.map(
        (t4) => c3.get(t4) || { key: t4, value: "", enabled: true }
      );
      a10.forEach((t4) => {
        !n4.includes(t4.key) && (t4.value || t4.required) && l6.push(t4);
      }), a10.splice(0, a10.length, ...l6), v5.edit(
        r6.value.uid,
        `parameters.${s5.paramKey}`,
        a10
      );
    };
    return watch(
      () => {
        var e6;
        return (e6 = r6.value) == null ? void 0 : e6.url;
      },
      (e6) => {
        e6 && b6(e6);
      }
    ), (e6, n4) => (openBlock(), createBlock(D, {
      itemCount: u8.value.length
    }, {
      title: withCtx(() => [
        createTextVNode(toDisplayString(e6.title), 1)
      ]),
      default: withCtx(() => [
        u8.value.length ? (openBlock(), createBlock(f5, {
          key: 0,
          class: "flex-1",
          isEnabledHidden: "",
          items: u8.value,
          onUpdateRow: x9
        }, null, 8, ["items"])) : (openBlock(), createElementBlock("div", B3, [
          createTextVNode(" You can use variables in your path: "),
          N3
        ]))
      ]),
      _: 1
    }, 8, ["itemCount"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestSection.vue.js
var K2 = { class: "flex-1 flex items-center pointer-events-none" };
var $3 = {
  key: 0,
  class: "absolute w-full h-full top-0 left-0 pointer-events-auto opacity-0 cursor-text",
  for: "requestname"
};
var Q2 = ["disabled", "value"];
var D3 = { class: "request-section-content custom-scroll flex flex-1 flex-col px-2 xl:px-5 py-2.5" };
var X2 = defineComponent({
  __name: "RequestSection",
  setup(I7) {
    const {
      activeRequest: i9,
      activeSecuritySchemes: x9,
      activeExample: v5,
      activeSecurityRequirements: p8,
      isReadOnly: r6,
      requestMutators: A2
    } = rt(), c3 = ["POST", "PUT", "PATCH", "DELETE"], S3 = computed(() => {
      const t4 = [
        "All",
        "Auth",
        "Request",
        "Cookies",
        "Headers",
        "Query",
        "Body"
      ];
      return v5.value.parameters.path.length || t4.splice(t4.indexOf("Request"), 1), c3.includes(i9.value.method) || t4.splice(t4.indexOf("Body"), 1), f8.value && t4.splice(t4.indexOf("Auth"), 1), t4;
    }), f8 = computed(
      () => r6.value && (p8.value.length === 0 || JSON.stringify(p8.value) === "[{}]")
    ), e6 = ref("All");
    watch(i9, (t4) => {
      e6.value === "Body" && !c3.includes(t4.method) && (e6.value = "All");
    });
    const q = (t4) => {
      const n4 = t4.target;
      A2.edit(i9.value.uid, "summary", n4.value);
    };
    return (t4, n4) => (openBlock(), createBlock(u, null, {
      title: withCtx(() => {
        var u8;
        return [
          createVNode(unref(m2), {
            class: "text-c-3 mr-2 pointer-events-none",
            icon: "ExternalLink",
            size: "sm",
            thickness: "2.5"
          }),
          createBaseVNode("div", K2, [
            createTextVNode(" Request "),
            unref(r6) ? createCommentVNode("", true) : (openBlock(), createElementBlock("label", $3)),
            createBaseVNode("input", {
              id: "requestname",
              class: "pl-1 outline-none border-0 text-c-2 rounded pointer-events-auto relative w-full",
              disabled: unref(r6),
              placeholder: "Request Name",
              value: (u8 = unref(i9)) == null ? void 0 : u8.summary,
              onInput: q
            }, null, 40, Q2)
          ])
        ];
      }),
      default: withCtx(() => [
        createBaseVNode("div", D3, [
          createVNode(p2, {
            activeSection: e6.value,
            sections: S3.value,
            onSetActiveSection: n4[0] || (n4[0] = (u8) => e6.value = u8)
          }, null, 8, ["activeSection", "sections"]),
          withDirectives(createVNode(e4, {
            index: 0,
            securityScheme: unref(x9)[0],
            title: "Authentication"
          }, null, 8, ["securityScheme"]), [
            [
              vShow,
              !f8.value && (e6.value === "All" || e6.value === "Auth")
            ]
          ]),
          withDirectives(createVNode(H, {
            paramKey: "path",
            title: "Path Variables"
          }, null, 512), [
            [
              vShow,
              (e6.value === "All" || e6.value === "Request") && unref(v5).parameters.path.length > 0
            ]
          ]),
          withDirectives(createVNode(O4, {
            paramKey: "cookies",
            title: "Cookies"
          }, null, 512), [
            [vShow, e6.value === "All" || e6.value === "Cookies"]
          ]),
          withDirectives(createVNode(O4, {
            paramKey: "headers",
            title: "Headers"
          }, null, 512), [
            [vShow, e6.value === "All" || e6.value === "Headers"]
          ]),
          withDirectives(createVNode(O4, {
            paramKey: "query",
            title: "Query Parameters"
          }, null, 512), [
            [vShow, e6.value === "All" || e6.value === "Query"]
          ]),
          withDirectives(createVNode(Re, {
            body: "foo",
            title: "Body"
          }, null, 512), [
            [
              vShow,
              (e6.value === "All" || e6.value === "Body") && c3.includes(unref(i9).method)
            ]
          ])
        ])
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBody.vue.js
var import_whatwg_mimetype = __toESM(require_mime_type(), 1);

// node_modules/@scalar/api-client/dist/views/Request/consts/mediaTypes.js
var n2 = {
  "application/epub+zip": { extension: ".epub" },
  "application/gzip": { extension: ".gz" },
  "application/java-archive": { extension: ".jar" },
  "application/javascript": { extension: ".js", raw: true },
  "application/json": { extension: ".json", raw: true, language: "json" },
  "application/ld+json": { extension: ".jsonld", raw: true, language: "json" },
  "application/problem+json": {
    extension: ".json",
    raw: true,
    language: "json"
  },
  "application/msword": { extension: ".doc" },
  "application/octet-stream": { extension: ".bin" },
  "application/ogg": { extension: ".ogx" },
  "application/pdf": { extension: ".pdf", preview: "object" },
  "application/rtf": { extension: ".rtf", raw: true },
  "application/vnd.amazon.ebook": { extension: ".azw" },
  "application/vnd.apple.installer+xml": {
    extension: ".mpkg",
    raw: true,
    language: "xml"
  },
  "application/vnd.mozilla.xul+xml": {
    extension: ".xul",
    raw: true,
    language: "xml"
  },
  "application/vnd.ms-excel": { extension: ".xls" },
  "application/vnd.ms-fontobject": { extension: ".eot" },
  "application/vnd.ms-powerpoint": { extension: ".ppt" },
  "application/vnd.oasis.opendocument.presentation": { extension: ".odp" },
  "application/vnd.oasis.opendocument.spreadsheet": { extension: ".ods" },
  "application/vnd.oasis.opendocument.text": { extension: ".odt" },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    extension: ".pptx"
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    extension: ".xlsx"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    extension: ".docx"
  },
  "application/vnd.rar": { extension: ".rar" },
  "application/vnd.visio": { extension: ".vsd" },
  "application/x-7z-compressed": { extension: ".7z" },
  "application/x-abiword": { extension: ".abw" },
  "application/x-bzip": { extension: ".bz" },
  "application/x-bzip2": { extension: ".bz2" },
  "application/x-cdf": { extension: ".cda" },
  "application/x-csh": { extension: ".csh" },
  "application/x-freearc": { extension: ".arc" },
  "application/x-httpd-php": { extension: ".php", raw: true },
  "application/x-sh": { extension: ".sh", raw: true },
  "application/x-tar": { extension: ".tar" },
  "application/xhtml+xml": { extension: ".xhtml", raw: true, language: "html" },
  "application/xml": { extension: ".xml", raw: true, language: "xml" },
  "application/yaml": { extension: ".yaml", raw: true, language: "yaml" },
  "application/zip": { extension: ".zip" },
  "audio/aac": { extension: ".aac" },
  "audio/midi": { extension: ".midi" },
  "audio/mpeg": { extension: ".mp3", preview: "audio" },
  "audio/ogg": { extension: ".oga" },
  "audio/wav": { extension: ".wav" },
  "audio/webm": { extension: ".weba" },
  "font/otf": { extension: ".otf" },
  "font/ttf": { extension: ".ttf" },
  "font/woff": { extension: ".woff" },
  "font/woff2": { extension: ".woff2" },
  "image/apng": { extension: ".apng", preview: "image", alpha: true },
  "image/avif": { extension: ".avif", preview: "image" },
  "image/bmp": { extension: ".bmp", preview: "image" },
  "image/gif": { extension: ".gif", preview: "image", alpha: true },
  "image/jpeg": { extension: ".jpg", preview: "image" },
  "image/png": { extension: ".png", preview: "image", alpha: true },
  "image/svg+xml": {
    extension: ".svg",
    raw: true,
    language: "xml",
    preview: "image",
    alpha: true
  },
  "image/tiff": { extension: ".tiff" },
  "image/vnd.microsoft.icon": { extension: ".ico", preview: "image" },
  "image/webp": { extension: ".webp", preview: "image", alpha: true },
  "text/calendar": { extension: ".ics", raw: true },
  "text/css": { extension: ".css", raw: true, language: "css" },
  "text/csv": { extension: ".csv", raw: true },
  "text/html": {
    extension: ".html",
    raw: true,
    language: "html",
    preview: "object"
  },
  "text/javascript": { extension: ".js", raw: true },
  "text/plain": { extension: ".txt", raw: true },
  "text/xml": { extension: ".xml", raw: true, language: "xml" },
  "text/yaml": { extension: ".yaml", raw: true, language: "yaml" },
  "video/3gpp": { extension: ".3gp" },
  "audio/3gpp": { extension: ".3gp" },
  "video/3gpp2": { extension: ".3g2" },
  "audio/3gpp2": { extension: ".3g2" },
  "video/mp2t": { extension: ".ts" },
  "video/mp4": { extension: ".mp4", preview: "video" },
  "video/mpeg": { extension: ".mpeg" },
  "video/ogg": { extension: ".ogv" },
  "video/webm": { extension: ".webm", preview: "video" },
  "video/x-msvideo": { extension: ".avi" }
};
var i6 = Object.entries(n2).filter(([, e6]) => e6 == null ? void 0 : e6.raw).map(([e6]) => e6);

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyDownload.vue.js
var x6 = ["download", "href"];
var h4 = createBaseVNode("span", null, "Download", -1);
var k5 = defineComponent({
  __name: "ResponseBodyDownload",
  props: {
    href: {},
    type: {}
  },
  setup(n4) {
    const t4 = n4, r6 = computed(
      () => {
        var e6;
        return ((e6 = n2[t4.type ?? ""]) == null ? void 0 : e6.extension) ?? ".unknown";
      }
    );
    return (e6, o2) => (openBlock(), createElementBlock("a", {
      class: "flex gap-1 text-c-3 text-xxs no-underline items-center hover:bg-b-3 rounded py-0.5 px-1.5",
      download: `response${r6.value}`,
      href: e6.href,
      onClick: o2[0] || (o2[0] = withModifiers(() => {
      }, ["stop"]))
    }, [
      createVNode(unref(m2), {
        icon: "Download",
        size: "xs"
      }),
      h4
    ], 8, x6));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyInfo.vue.js
var r2 = {};
var d4 = { class: "flex justify-center px-2 py-3" };
var f6 = { class: "text-c-3 p-2 text-sm" };
function l2(e6, _7) {
  return openBlock(), createElementBlock("div", d4, [
    createBaseVNode("div", f6, [
      renderSlot(e6.$slots, "default")
    ])
  ]);
}
var p5 = s(r2, [["render", l2]]);

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyPreview.vue2.js
var k6 = ["src"];
var w = ["src", "type"];
var B4 = ["src", "type"];
var E3 = ["data", "type"];
var $4 = defineComponent({
  __name: "ResponseBodyPreview",
  props: {
    src: {},
    type: {},
    mode: {},
    alpha: { type: Boolean }
  },
  setup(p8) {
    const u8 = p8, r6 = ref(false);
    return watch(
      () => u8.src,
      () => r6.value = false
    ), (e6, o2) => !r6.value && e6.src ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["flex justify-center overflow-hidden rounded-b", { "p-2 bg-preview": e6.alpha }])
    }, [
      e6.mode === "image" ? (openBlock(), createElementBlock("img", {
        key: 0,
        class: normalizeClass(["max-w-full", { rounded: e6.alpha }]),
        src: e6.src,
        onError: o2[0] || (o2[0] = (l6) => r6.value = true)
      }, null, 42, k6)) : e6.mode === "video" ? (openBlock(), createElementBlock("video", {
        key: 1,
        autoplay: "",
        controls: "",
        loop: "",
        width: "100%",
        onError: o2[1] || (o2[1] = (l6) => r6.value = true)
      }, [
        createBaseVNode("source", {
          src: e6.src,
          type: e6.type
        }, null, 8, w)
      ], 32)) : e6.mode === "audio" ? (openBlock(), createElementBlock("audio", {
        key: 2,
        class: "my-12",
        controls: "",
        loop: "",
        onError: o2[2] || (o2[2] = (l6) => r6.value = true)
      }, [
        createBaseVNode("source", {
          src: e6.src,
          type: e6.type
        }, null, 8, B4)
      ], 32)) : (openBlock(), createElementBlock("object", {
        key: 3,
        class: "w-full aspect-[4/3]",
        data: e6.src,
        type: e6.type,
        onError: o2[3] || (o2[3] = (l6) => r6.value = true)
      }, null, 40, E3))
    ], 2)) : (openBlock(), createBlock(p5, { key: 1 }, {
      default: withCtx(() => [
        createTextVNode("Preview unavailable")
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyPreview.vue.js
var s4 = s($4, [["__scopeId", "data-v-7fbe3767"]]);

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyRaw.vue2.js
var y4 = defineComponent({
  __name: "ResponseBodyRaw",
  props: {
    data: {},
    language: {}
  },
  setup(o2) {
    const r6 = o2, n4 = ref(null), t4 = computed(() => {
      const e6 = r6.data;
      return e6 && isJsonString(e6) ? JSON.stringify(JSON.parse(e6), null, 2) : e6 && typeof toRaw(e6) == "object" ? JSON.stringify(e6, null, 2) : e6;
    });
    return ge({
      codeMirrorRef: n4,
      readOnly: true,
      lineNumbers: true,
      content: t4,
      language: r6.language
    }), (e6, m11) => (openBlock(), createElementBlock("div", {
      ref_key: "codeMirrorRef",
      ref: n4
    }, null, 512));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyRaw.vue.js
var a6 = s(y4, [["__scopeId", "data-v-121b444b"]]);

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyToggle.vue.js
var a7 = { class: "text-c-3 flex -my-1 justify-center rounded text-xxs p-0.5 gap-0.5" };
var i7 = defineComponent({
  __name: "ResponseBodyToggle",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(p8) {
    return (e6, t4) => (openBlock(), createElementBlock("div", a7, [
      createBaseVNode("button", {
        class: normalizeClass(["hover:bg-b-3 rounded px-1", { "bg-b-3 text-c-1 cursor-default": e6.modelValue }]),
        type: "button",
        onClick: t4[0] || (t4[0] = withModifiers((s5) => e6.$emit("update:modelValue", true), ["stop"]))
      }, " Preview ", 2),
      createBaseVNode("button", {
        class: normalizeClass(["hover:bg-b-3 rounded px-1", { "bg-b-3 text-c-1 cursor-default": !e6.modelValue }]),
        type: "button",
        onClick: t4[1] || (t4[1] = withModifiers((s5) => e6.$emit("update:modelValue", false), ["stop"]))
      }, " Raw ", 2)
    ]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBody.vue.js
var M2 = {
  key: 0,
  class: "mx-1 border-1/2 flex flex-col rounded bg-b-1"
};
var P3 = { class: "flex justify-between items-center border-b-1/2 p-1.5" };
var D4 = { class: "text-xxs leading-3 font-code" };
var W2 = defineComponent({
  __name: "ResponseBody",
  props: {
    title: {},
    data: {},
    headers: {}
  },
  setup(h5) {
    const a10 = h5, _7 = (e6) => e6 instanceof Blob, d5 = ref(true), m11 = computed(
      () => {
        var e6;
        return !!((e6 = t4.value) != null && e6.raw && t4.value.preview);
      }
    ), B8 = computed(() => d5.value || !m11.value), R3 = computed(() => !d5.value || !m11.value), o2 = computed(() => {
      var s5;
      const e6 = ((s5 = a10.headers.find((c3) => c3.name.toLowerCase() === "content-type")) == null ? void 0 : s5.value) ?? "";
      return new import_whatwg_mimetype.default(e6);
    }), t4 = computed(() => n2[o2.value.essence]), n4 = computed(() => _7(a10.data) ? URL.createObjectURL(a10.data) : typeof a10.data == "string" ? URL.createObjectURL(
      new Blob([a10.data], { type: o2.value.toString() })
    ) : typeof a10.data == "object" && Object.keys(a10.data).length ? URL.createObjectURL(
      new Blob([JSON.stringify(a10.data)], {
        type: o2.value.toString()
      })
    ) : "");
    return (e6, s5) => (openBlock(), createBlock(D, null, createSlots({
      title: withCtx(() => [
        createTextVNode(toDisplayString(e6.title), 1)
      ]),
      default: withCtx(() => {
        var c3, v5, f8, y6;
        return [
          e6.data ? (openBlock(), createElementBlock("div", M2, [
            createBaseVNode("div", P3, [
              createBaseVNode("span", D4, toDisplayString(o2.value.essence), 1),
              m11.value ? (openBlock(), createBlock(i7, {
                key: 0,
                modelValue: d5.value,
                "onUpdate:modelValue": s5[0] || (s5[0] = (k10) => d5.value = k10)
              }, null, 8, ["modelValue"])) : createCommentVNode("", true)
            ]),
            (c3 = t4.value) != null && c3.raw && R3.value ? (openBlock(), createBlock(a6, {
              key: n4.value,
              data: e6.data,
              language: t4.value.language
            }, null, 8, ["data", "language"])) : createCommentVNode("", true),
            (v5 = t4.value) != null && v5.preview && B8.value ? (openBlock(), createBlock(s4, {
              key: n4.value,
              alpha: t4.value.alpha,
              mode: t4.value.preview,
              src: n4.value,
              type: o2.value.essence
            }, null, 8, ["alpha", "mode", "src", "type"])) : createCommentVNode("", true),
            !((f8 = t4.value) != null && f8.raw) && !((y6 = t4.value) != null && y6.preview) ? (openBlock(), createBlock(p5, { key: 2 }, {
              default: withCtx(() => [
                createTextVNode(" Binary file ")
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ];
      }),
      _: 2
    }, [
      e6.data && n4.value ? {
        name: "actions",
        fn: withCtx(() => [
          createVNode(k5, {
            href: n4.value,
            type: o2.value.essence
          }, null, 8, ["href", "type"])
        ]),
        key: "0"
      } : void 0
    ]), 1024));
  }
});

// node_modules/@scalar/api-client/dist/assets/computer.ascii.js
var B5 = `                         .,,uod8B8bou,,.
                ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
           ||||||||||||||!?TFPRBBBBBBBBBBBBBBB8m=,
           ||||   '""^^!!||||||||||TFPRBBBVT!:...!
           ||||            '""^^!!|||||?!:.......!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||,                    ||||.........\`
           |||||!!-._               ||||.......;.
           ':!|||||||||!!-._        ||||.....bBBBBWdou,.
         bBBBBB86foi!|||||||!!-..:|||!..bBBBBBBBBBBBBBBY!
         ::!?TFPRBBBBBB86foi!||||||||!!bBBBBBBBBBBBBBBY..!
         :::::::::!?TFPRBBBBBB86ftiaabBBBBBBBBBBBBBBY....!
         :::;\`"^!:;::::::!?TFPRBBBBBBBBBBBBBBBBBBBY......!
         ;::::::...''^::::::::::!?TFPRBBBBBBBBBBY........!
     .ob86foi;::::::::::::::::::::::::!?TFPRBY..........\`
    .b888888888886foi;:::::::::::::::::::::::..........\`
 .b888888888888888888886foi;::::::::::::::::..........
.b888888888888888888888888888886foi;:::::::::......\`
!Tf998888888888888888888888888888888886foi;:::....\`
  '"^!|Tf9988888888888888888888888888888888!::..\`
       '"^!|Tf998888888888888888888888889!! '\`
             '"^!|Tf9988888888888888888!!\`            iBBbo.
                  '"^!|Tf998888888889!\`             WBBBBbo.
                        '"^!|Tf9989!\`              YBBBP^'
                              '"^!\`               \`
`;

// node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue2.js
var r3 = 500;
var l3 = 100;
var k7 = defineComponent({
  __name: "ScalarAsciiArt",
  props: {
    art: {},
    animate: { type: Boolean }
  },
  setup(m11) {
    const p8 = m11, e6 = computed(() => p8.art.split(`
`)), u8 = (t4, o2) => ({
      animationDuration: `${t4 * l3}ms, ${r3}ms`,
      animationTimingFunction: `steps(${t4}), step-end`,
      animationDelay: `${o2 * l3}ms, 0ms`,
      animationIterationCount: `1, ${(e6.value.length + e6.value[e6.value.length - 1].length + 5) * l3 / r3}`
    });
    return (t4, o2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["ascii-art font-code text-c-3 flex flex-col items-start text-[6px] leading-[7px]", { "ascii-art-animate": t4.animate }])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(e6.value, (n4, s5) => (openBlock(), createElementBlock("span", {
        key: s5,
        class: "inline-block",
        style: normalizeStyle({ width: `calc(${n4.length + 1}ch)` })
      }, [
        createBaseVNode("span", {
          class: "inline-block whitespace-pre overflow-hidden",
          style: normalizeStyle(u8(n4.length, s5))
        }, toDisplayString(n4), 5)
      ], 4))), 128))
    ], 2));
  }
});

// node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue.js
var i8 = s(k7, [["__scopeId", "data-v-80684d49"]]);

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseEmpty.vue2.js
var p6 = (t4) => (pushScopeId("data-v-84b69d7e"), t4 = t4(), popScopeId(), t4);
var y5 = { class: "relative col-1 flex-center gap-6 p-2 capitalize" };
var b3 = { class: "flex h-[calc(100%_-_50px)] flex-col items-center justify-center" };
var R = {
  key: 0,
  class: "scalar-version-number"
};
var g3 = p6(() => createBaseVNode("b", null, "Alpha", -1));
var N4 = p6(() => createBaseVNode("div", { class: "mt-1" }, [
  createBaseVNode("a", {
    href: "https://github.com/scalar/scalar/issues/2669",
    target: "_blank"
  }, "Roadmap")
], -1));
var S = { class: "text-c-3 right-4 mt-auto flex w-full flex-col items-end gap-2 text-sm" };
var V2 = {
  key: 0,
  class: "flex items-center gap-1.5",
  type: "button"
};
var W3 = defineComponent({
  __name: "ResponseEmpty",
  setup(t4) {
    const { isReadOnly: m11, activeWorkspace: d5 } = rt();
    return (C7, l6) => (openBlock(), createElementBlock("div", y5, [
      createBaseVNode("div", b3, [
        unref(d5).isReadOnly ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", R, [
          createTextVNode(" Scalar V1.0.6 "),
          g3,
          createTextVNode(" Release "),
          N4
        ])),
        createVNode(i8, { art: unref(B5) }, null, 8, ["art"])
      ]),
      createBaseVNode("div", S, [
        createBaseVNode("button", {
          class: "flex items-center gap-1.5",
          type: "button",
          onClick: l6[0] || (l6[0] = (q) => unref(u2).emit())
        }, [
          createTextVNode(" Send Request "),
          createVNode(P, { hotkey: "↵" })
        ]),
        unref(m11) ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", V2, [
          createTextVNode(" New Request "),
          createVNode(P, { hotkey: "N" })
        ]))
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseEmpty.vue.js
var r4 = s(W3, [["__scopeId", "data-v-84b69d7e"]]);

// node_modules/@scalar/api-client/dist/components/HelpfulLink.vue.js
var l4 = ["href"];
var p7 = defineComponent({
  __name: "HelpfulLink",
  props: {
    href: {}
  },
  setup(s5) {
    return (e6, f8) => (openBlock(), createElementBlock("a", {
      class: "cursor-help decoration-c-3 underline underline-offset-2",
      href: e6.href,
      rel: "noopener noreferrer",
      target: "_blank"
    }, [
      renderSlot(e6.$slots, "default")
    ], 8, l4));
  }
});

// node_modules/pretty-bytes/index.js
var BYTE_UNITS = [
  "B",
  "kB",
  "MB",
  "GB",
  "TB",
  "PB",
  "EB",
  "ZB",
  "YB"
];
var BIBYTE_UNITS = [
  "B",
  "KiB",
  "MiB",
  "GiB",
  "TiB",
  "PiB",
  "EiB",
  "ZiB",
  "YiB"
];
var BIT_UNITS = [
  "b",
  "kbit",
  "Mbit",
  "Gbit",
  "Tbit",
  "Pbit",
  "Ebit",
  "Zbit",
  "Ybit"
];
var BIBIT_UNITS = [
  "b",
  "kibit",
  "Mibit",
  "Gibit",
  "Tibit",
  "Pibit",
  "Eibit",
  "Zibit",
  "Yibit"
];
var toLocaleString = (number, locale, options) => {
  let result = number;
  if (typeof locale === "string" || Array.isArray(locale)) {
    result = number.toLocaleString(locale, options);
  } else if (locale === true || options !== void 0) {
    result = number.toLocaleString(void 0, options);
  }
  return result;
};
function prettyBytes(number, options) {
  if (!Number.isFinite(number)) {
    throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
  }
  options = {
    bits: false,
    binary: false,
    space: true,
    ...options
  };
  const UNITS = options.bits ? options.binary ? BIBIT_UNITS : BIT_UNITS : options.binary ? BIBYTE_UNITS : BYTE_UNITS;
  const separator = options.space ? " " : "";
  if (options.signed && number === 0) {
    return ` 0${separator}${UNITS[0]}`;
  }
  const isNegative = number < 0;
  const prefix = isNegative ? "-" : options.signed ? "+" : "";
  if (isNegative) {
    number = -number;
  }
  let localeOptions;
  if (options.minimumFractionDigits !== void 0) {
    localeOptions = { minimumFractionDigits: options.minimumFractionDigits };
  }
  if (options.maximumFractionDigits !== void 0) {
    localeOptions = { maximumFractionDigits: options.maximumFractionDigits, ...localeOptions };
  }
  if (number < 1) {
    const numberString2 = toLocaleString(number, options.locale, localeOptions);
    return prefix + numberString2 + separator + UNITS[0];
  }
  const exponent = Math.min(Math.floor(options.binary ? Math.log(number) / Math.log(1024) : Math.log10(number) / 3), UNITS.length - 1);
  number /= (options.binary ? 1024 : 1e3) ** exponent;
  if (!localeOptions) {
    number = number.toPrecision(3);
  }
  const numberString = toLocaleString(Number(number), options.locale, localeOptions);
  const unit = UNITS[exponent];
  return prefix + numberString + separator + unit;
}

// node_modules/parse-ms/index.js
function parseMilliseconds(milliseconds) {
  if (typeof milliseconds !== "number") {
    throw new TypeError("Expected a number");
  }
  const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
  return {
    days: roundTowardsZero(milliseconds / 864e5),
    hours: roundTowardsZero(milliseconds / 36e5) % 24,
    minutes: roundTowardsZero(milliseconds / 6e4) % 60,
    seconds: roundTowardsZero(milliseconds / 1e3) % 60,
    milliseconds: roundTowardsZero(milliseconds) % 1e3,
    microseconds: roundTowardsZero(milliseconds * 1e3) % 1e3,
    nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1e3
  };
}

// node_modules/pretty-ms/index.js
var pluralize = (word, count) => count === 1 ? word : `${word}s`;
var SECOND_ROUNDING_EPSILON = 1e-7;
function prettyMilliseconds(milliseconds, options = {}) {
  if (!Number.isFinite(milliseconds)) {
    throw new TypeError("Expected a finite number");
  }
  if (options.colonNotation) {
    options.compact = false;
    options.formatSubMilliseconds = false;
    options.separateMilliseconds = false;
    options.verbose = false;
  }
  if (options.compact) {
    options.secondsDecimalDigits = 0;
    options.millisecondsDecimalDigits = 0;
  }
  const result = [];
  const floorDecimals = (value, decimalDigits) => {
    const flooredInterimValue = Math.floor(value * 10 ** decimalDigits + SECOND_ROUNDING_EPSILON);
    const flooredValue = Math.round(flooredInterimValue) / 10 ** decimalDigits;
    return flooredValue.toFixed(decimalDigits);
  };
  const add = (value, long, short, valueString) => {
    if ((result.length === 0 || !options.colonNotation) && value === 0 && !(options.colonNotation && short === "m")) {
      return;
    }
    valueString = (valueString || value || "0").toString();
    let prefix;
    let suffix;
    if (options.colonNotation) {
      prefix = result.length > 0 ? ":" : "";
      suffix = "";
      const wholeDigits = valueString.includes(".") ? valueString.split(".")[0].length : valueString.length;
      const minLength = result.length > 0 ? 2 : 1;
      valueString = "0".repeat(Math.max(0, minLength - wholeDigits)) + valueString;
    } else {
      prefix = "";
      suffix = options.verbose ? " " + pluralize(long, value) : short;
    }
    result.push(prefix + valueString + suffix);
  };
  const parsed = parseMilliseconds(milliseconds);
  add(Math.trunc(parsed.days / 365), "year", "y");
  add(parsed.days % 365, "day", "d");
  add(parsed.hours, "hour", "h");
  add(parsed.minutes, "minute", "m");
  if (options.separateMilliseconds || options.formatSubMilliseconds || !options.colonNotation && milliseconds < 1e3) {
    add(parsed.seconds, "second", "s");
    if (options.formatSubMilliseconds) {
      add(parsed.milliseconds, "millisecond", "ms");
      add(parsed.microseconds, "microsecond", "µs");
      add(parsed.nanoseconds, "nanosecond", "ns");
    } else {
      const millisecondsAndBelow = parsed.milliseconds + parsed.microseconds / 1e3 + parsed.nanoseconds / 1e6;
      const millisecondsDecimalDigits = typeof options.millisecondsDecimalDigits === "number" ? options.millisecondsDecimalDigits : 0;
      const roundedMiliseconds = millisecondsAndBelow >= 1 ? Math.round(millisecondsAndBelow) : Math.ceil(millisecondsAndBelow);
      const millisecondsString = millisecondsDecimalDigits ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits) : roundedMiliseconds;
      add(
        Number.parseFloat(millisecondsString),
        "millisecond",
        "ms",
        millisecondsString
      );
    }
  } else {
    const seconds = milliseconds / 1e3 % 60;
    const secondsDecimalDigits = typeof options.secondsDecimalDigits === "number" ? options.secondsDecimalDigits : 1;
    const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
    const secondsString = options.keepDecimalsOnWholeSeconds ? secondsFixed : secondsFixed.replace(/\.0+$/, "");
    add(Number.parseFloat(secondsString), "second", "s", secondsString);
  }
  if (result.length === 0) {
    return "0" + (options.verbose ? " milliseconds" : "ms");
  }
  if (options.compact) {
    return result[0];
  }
  if (typeof options.unitCount === "number") {
    const separator = options.colonNotation ? "" : " ";
    return result.slice(0, Math.max(options.unitCount, 1)).join(separator);
  }
  return options.colonNotation ? result.join("") : result.join(" ");
}

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseMetaInformation.vue.js
var I5 = { class: "flex gap-1.5 text-c-3 pl-1" };
var N5 = { key: 0 };
var S2 = { key: 1 };
var x7 = defineComponent({
  __name: "ResponseMetaInformation",
  props: {
    response: {}
  },
  setup(i9) {
    const m11 = i9, a10 = (e6) => {
      var p8;
      const r6 = parseInt(
        ((p8 = e6.headers) == null ? void 0 : p8["content-length"]) || "0",
        10
      );
      return r6 ? prettyBytes(r6) : void 0;
    }, o2 = computed(() => {
      const e6 = m11.response.status;
      if (e6)
        return httpStatusCodes[e6] ?? void 0;
    });
    return (e6, r6) => (openBlock(), createElementBlock("div", I5, [
      createBaseVNode("span", null, toDisplayString(unref(prettyMilliseconds)(e6.response.duration)), 1),
      a10(e6.response) ? (openBlock(), createElementBlock("span", N5, toDisplayString(a10(e6.response)), 1)) : createCommentVNode("", true),
      o2.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        o2.value.url ? (openBlock(), createBlock(p7, {
          key: 0,
          href: o2.value.url
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(e6.response.status) + " " + toDisplayString(o2.value.name), 1)
          ]),
          _: 1
        }, 8, ["href"])) : (openBlock(), createElementBlock("span", S2, toDisplayString(e6.response.status) + " " + toDisplayString(o2.value.name), 1))
      ], 64)) : createCommentVNode("", true)
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableText.vue.js
var c2 = { class: "flex-1 px-2 py-1.5 whitespace-nowrap" };
var m7 = defineComponent({
  __name: "DataTableText",
  props: {
    text: {}
  },
  setup(l6) {
    return (e6, _7) => (openBlock(), createBlock(m3, { class: "relative flex" }, {
      default: withCtx(() => [
        createBaseVNode("span", c2, toDisplayString(e6.text), 1)
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseCookies.vue.js
var k8 = {
  key: 1,
  class: "text-c-3 px-4 text-sm border border-1/2 rounded min-h-12 justify-center flex items-center bg-b-1 mx-1"
};
var N6 = defineComponent({
  __name: "ResponseCookies",
  props: {
    cookies: {}
  },
  setup(x9) {
    return (n4, b6) => (openBlock(), createBlock(D, { defaultOpen: false }, {
      title: withCtx(() => [
        createTextVNode("Cookies")
      ]),
      default: withCtx(() => [
        (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          n4.cookies.length ? (openBlock(), createBlock(f2, {
            key: 0,
            class: "flex-1",
            columns: ["", ""]
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(n4.cookies, (s5, i9) => (openBlock(), createBlock(i3, { key: i9 }, {
                default: withCtx(() => [
                  createVNode(m7, {
                    text: s5.name
                  }, null, 8, ["text"]),
                  createVNode(m7, {
                    text: s5.value
                  }, null, 8, ["text"])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })) : (openBlock(), createElementBlock("div", k8, " No cookies "))
        ], 64))
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseHeaders.vue.js
var x8 = {
  key: 1,
  class: "text-c-3 px-4 text-sm border rounded min-h-12 justify-center flex items-center bg-b-1 mx-1"
};
var B6 = defineComponent({
  __name: "ResponseHeaders",
  props: {
    headers: {}
  },
  setup(h5) {
    return (r6, k10) => (openBlock(), createBlock(D, {
      defaultOpen: false,
      itemCount: r6.headers.length
    }, {
      title: withCtx(() => [
        createTextVNode("Headers")
      ]),
      default: withCtx(() => [
        r6.headers.length ? (openBlock(), createBlock(f2, {
          key: 0,
          columns: ["minmax(auto, min-content)", "minmax(50%, 1fr)"],
          scroll: ""
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(r6.headers, (n4, l6) => (openBlock(), createBlock(i3, {
              key: l6,
              class: "text-c-1"
            }, {
              default: withCtx(() => [
                createVNode(m7, {
                  class: "sticky left-0 z-1 bg-b-1 max-w-48",
                  text: n4.name
                }, null, 8, ["text"]),
                createVNode(m7, {
                  class: "z-0",
                  text: n4.value
                }, null, 8, ["text"])
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 1
        })) : (openBlock(), createElementBlock("div", x8, " No Headers "))
      ]),
      _: 1
    }, 8, ["itemCount"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseSection.vue.js
var R2 = { class: "flex items-center flex-1" };
var b4 = { class: "custom-scroll flex flex-1 flex-col px-2 xl:px-6 py-2.5" };
var T = defineComponent({
  __name: "ResponseSection",
  props: {
    response: {}
  },
  setup(f8) {
    const c3 = f8, i9 = computed(() => {
      var s5;
      const e6 = (s5 = c3.response) == null ? void 0 : s5.headers;
      return e6 ? Object.keys(e6).map((o2) => ({
        name: o2,
        value: e6[o2],
        required: false
      })).filter(
        (o2) => ![
          "rest-api-client-content-length",
          "X-API-Client-Content-Length"
        ].includes(o2.name)
      ) : [];
    }), v5 = computed(() => {
      var s5, o2;
      const e6 = (o2 = (s5 = c3.response) == null ? void 0 : s5.headers) == null ? void 0 : o2.cookies;
      return e6 ? Object.keys(e6).map((a10) => ({
        name: a10,
        value: e6[a10],
        required: false
      })) : [];
    }), k10 = ["All", "Body", "Headers", "Cookies"], t4 = ref("All");
    return (e6, s5) => (openBlock(), createBlock(u, null, {
      title: withCtx(() => [
        createVNode(unref(m2), {
          class: "text-c-3 mr-2 rotate-180",
          icon: "ExternalLink",
          size: "sm",
          thickness: "2.5"
        }),
        createBaseVNode("div", R2, [
          createTextVNode(" Response "),
          e6.response ? (openBlock(), createBlock(x7, {
            key: 0,
            response: e6.response
          }, null, 8, ["response"])) : createCommentVNode("", true)
        ])
      ]),
      default: withCtx(() => {
        var o2;
        return [
          createBaseVNode("div", b4, [
            e6.response ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createVNode(p2, {
                activeSection: t4.value,
                sections: k10,
                onSetActiveSection: s5[0] || (s5[0] = (a10) => t4.value = a10)
              }, null, 8, ["activeSection"]),
              t4.value === "All" || t4.value === "Cookies" ? (openBlock(), createBlock(N6, {
                key: 0,
                cookies: v5.value
              }, null, 8, ["cookies"])) : createCommentVNode("", true),
              t4.value === "All" || t4.value === "Headers" ? (openBlock(), createBlock(B6, {
                key: 1,
                headers: i9.value
              }, null, 8, ["headers"])) : createCommentVNode("", true),
              t4.value === "All" || t4.value === "Body" ? (openBlock(), createBlock(W2, {
                key: 2,
                active: true,
                data: (o2 = c3.response) == null ? void 0 : o2.data,
                headers: i9.value,
                title: "Body"
              }, null, 8, ["data", "headers"])) : createCommentVNode("", true)
            ], 64)) : (openBlock(), createBlock(r4, { key: 0 }))
          ])
        ];
      }),
      _: 1
    }));
  }
});

// node_modules/@scalar/draggable/dist/index.js
var r5 = ref(null);
var n3 = ref(null);
var C6 = (d5, f8) => {
  let l6 = false;
  return function(...t4) {
    l6 || (d5(...t4), l6 = true, setTimeout(() => l6 = false, f8));
  };
};
var L2 = ["draggable"];
var A = defineComponent({
  __name: "Draggable",
  props: {
    ceiling: { default: 0.8 },
    floor: { default: 0.2 },
    isDraggable: { type: Boolean, default: true },
    isDroppable: { type: [Boolean, Function], default: true },
    parentIds: {},
    id: {}
  },
  emits: ["onDragEnd", "onDragStart"],
  setup(d5, { expose: f8, emit: l6 }) {
    const t4 = d5, u8 = l6, i9 = computed(
      () => (t4.parentIds.length ?? 0) > 0 ? t4.parentIds[t4.parentIds.length - 1] : null
    ), I7 = (e6) => {
      !e6.dataTransfer || !(e6.target instanceof HTMLElement) || !t4.isDraggable || (e6.target.classList.add("dragging"), e6.dataTransfer.dropEffect = "move", e6.dataTransfer.effectAllowed = "move", r5.value = { id: t4.id, parentId: i9.value }, u8("onDragStart", { id: t4.id, parentId: i9.value }));
    }, h5 = (e6) => typeof t4.isDroppable == "function" ? t4.isDroppable(r5.value, {
      id: t4.id,
      parentId: i9.value,
      offset: e6
    }) : t4.isDroppable, g4 = C6((e6) => {
      var _a, _b;
      if (!r5.value || r5.value.id === t4.id || t4.parentIds.includes(((_a = r5.value) == null ? void 0 : _a.id) ?? ""))
        return;
      const a10 = (_b = n3.value) == null ? void 0 : _b.offset, o2 = e6.target.offsetHeight, c3 = t4.floor * o2, p8 = t4.ceiling * o2;
      let s5 = 3;
      e6.offsetY <= 0 && a10 && a10 !== 3 ? s5 = a10 : e6.offsetY <= c3 ? s5 = 0 : e6.offsetY >= p8 ? s5 = 1 : e6.offsetY > c3 && e6.offsetY < p8 && (s5 = 2), h5(s5) && (n3.value = { id: t4.id, parentId: i9.value, offset: s5 });
    }, 25), E4 = ["above", "below", "asChild"], _7 = computed(() => {
      var _a;
      let e6 = "sidebar-indent-nested";
      return t4.id === ((_a = n3.value) == null ? void 0 : _a.id) && (e6 += ` dragover-${E4[n3.value.offset]}`), e6;
    }), S3 = () => {
      if (!n3.value || !r5.value) return;
      const e6 = { ...r5.value }, a10 = { ...n3.value };
      r5.value = null, n3.value = null, document.querySelectorAll("div.dragging").forEach((o2) => o2.classList.remove("dragging")), e6.id !== a10.id && u8("onDragEnd", e6, a10);
    };
    return f8({
      draggingItem: r5,
      hoveredItem: n3
    }), (e6, a10) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(_7.value),
      draggable: e6.isDraggable,
      onDragend: S3,
      onDragover: a10[0] || (a10[0] = withModifiers(
        //@ts-ignore
        (...o2) => unref(g4) && unref(g4)(...o2),
        ["prevent", "stop"]
      )),
      onDragstart: withModifiers(I7, ["stop"])
    }, [
      renderSlot(e6.$slots, "default")
    ], 42, L2));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItemMenu.vue2.js
var m8 = (a10) => (pushScopeId("data-v-5686fba5"), a10 = a10(), popScopeId(), a10);
var I6 = m8(() => createBaseVNode("span", null, "Add Example", -1));
var b5 = m8(() => createBaseVNode("span", null, "Rename", -1));
var B7 = m8(() => createBaseVNode("span", null, "Delete", -1));
var N7 = defineComponent({
  __name: "RequestSidebarItemMenu",
  props: {
    item: {},
    resourceTitle: {},
    static: { type: Boolean, default: false }
  },
  emits: ["delete", "rename"],
  setup(a10, { emit: x9 }) {
    const l6 = a10, d5 = x9, h5 = () => m4.emit({
      commandName: "Add Example",
      metaData: l6.item.uid
    }), k10 = computed(() => "summary" in l6.item);
    return (p8, s5) => (openBlock(), createBlock(unref(O), {
      static: p8.static,
      teleport: !p8.static
    }, {
      items: withCtx(() => [
        k10.value ? (openBlock(), createBlock(unref(C), {
          key: 0,
          class: "flex !gap-2",
          onClick: h5
        }, {
          default: withCtx(() => [
            createVNode(unref(m2), {
              class: "inline-flex",
              icon: "Add",
              size: "sm",
              thickness: "1.5"
            }),
            I6
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(unref(C), {
          class: "flex !gap-2",
          onClick: s5[1] || (s5[1] = (n4) => d5("rename"))
        }, {
          default: withCtx(() => [
            createVNode(unref(m2), {
              class: "inline-flex",
              icon: "Edit",
              size: "sm",
              thickness: "1.5"
            }),
            b5
          ]),
          _: 1
        }),
        createVNode(unref(C), {
          class: "flex !gap-2",
          onClick: s5[2] || (s5[2] = (n4) => d5("delete"))
        }, {
          default: withCtx(() => [
            createVNode(unref(m2), {
              class: "inline-flex",
              icon: "Trash",
              size: "sm",
              thickness: "1.5"
            }),
            B7
          ]),
          _: 1
        })
      ]),
      default: withCtx(() => [
        createVNode(unref(W), {
          class: "px-0.5 py-0 z-10 hover:bg-b-3 hidden group-hover:flex ui-open:flex absolute -translate-y-1/2 right-0 aspect-square inset-y-2/4 h-fit",
          size: "sm",
          variant: "ghost",
          onClick: s5[0] || (s5[0] = (n4) => {
            (l6.resourceTitle === "Collection" || l6.resourceTitle === "Folder") && n4.stopPropagation();
          })
        }, {
          default: withCtx(() => [
            createVNode(unref(m2), {
              icon: "Ellipses",
              size: "sm"
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["static", "teleport"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItemMenu.vue.js
var m9 = s(N7, [["__scopeId", "data-v-5686fba5"]]);

// node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItem.vue2.js
var Ee2 = (g4) => (pushScopeId("data-v-17dc8b59"), g4 = g4(), popScopeId(), g4);
var ze = { class: "flex flex-row gap-1 items-center" };
var Ne = { class: "relative" };
var Ve = { class: "flex items-start" };
var Oe = { class: "z-10 flex h-5 items-center justify-center max-w-[14px]" };
var Be = { class: "flex flex-1 flex-row justify-between editable-sidebar-hover" };
var Fe2 = { class: "relative flex h-fit" };
var je2 = Ee2(() => createBaseVNode("span", null, " ", -1));
var Ke = { key: 2 };
var Le = { class: "flex gap-3" };
var _6 = "hover:bg-sidebar-active-b indent-padding-left";
var _e = defineComponent({
  __name: "RequestSidebarItem",
  props: {
    isDraggable: { type: Boolean, default: false },
    isDroppable: { type: [Boolean, Function], default: false },
    parentUids: {},
    item: {}
  },
  emits: ["onDragEnd"],
  setup(g4) {
    useCssVars((e6) => ({
      "4035a823": se5.value,
      d307928a: le3.value
    }));
    const t4 = g4, {
      activeRequest: T2,
      activeRouterParams: R3,
      activeWorkspace: h5,
      collections: E4,
      folders: ee3,
      isReadOnly: a10,
      requests: z2,
      requestExamples: $5,
      collectionMutators: N9,
      folderMutators: V3,
      requestMutators: O5,
      requestExampleMutators: B8
    } = rt(), { replace: F3 } = useRouter(), { collapsedSidebarFolders: j3, toggleSidebarFolder: te2 } = a3(), ie4 = computed(() => "childUids" in t4.item), K3 = computed(() => "spec" in t4.item), L3 = computed(() => "summary" in t4.item), se5 = computed(() => t4.parentUids.length ? a10.value ? `${(t4.parentUids.length - 1) * 12}px` : `${t4.parentUids.length * 12}px` : "12px"), le3 = computed(() => t4.parentUids.length ? a10.value ? `${(t4.parentUids.length - 1) * 12}px` : `${t4.parentUids.length * 12}px` : "0px"), x9 = (e6) => {
      var s5;
      return "spec" in e6 ? (s5 = e6.spec.info) == null ? void 0 : s5.title : "summary" in e6 ? e6.summary || e6.path : "name" in e6 ? e6.name : "";
    }, re5 = computed(() => ("requestUid" in t4.item ? z2[t4.item.requestUid] : t4.item).method), ae3 = computed(
      () => {
        var e6;
        return j3[t4.item.uid] || ((e6 = T2.value) == null ? void 0 : e6.uid) === t4.item.uid && t4.item.childUids.length > 1;
      }
    ), ne3 = () => "requestUid" in t4.item ? `/workspace/${h5.value.uid}/request/${t4.item.requestUid}/examples/${t4.item.uid}` : `/workspace/${h5.value.uid}/request/${t4.item.uid}`, oe = computed(
      () => R3.value[i4.Request] === "default" && T2.value.uid === t4.item.uid
    ), S3 = ref(null), W4 = computed(() => {
      let e6 = 0.5, s5 = 0.5;
      if (!S3.value) return { ceiling: e6, floor: s5 };
      const { draggingItem: w2 } = S3.value;
      return !E4[w2 == null ? void 0 : w2.id] && K3.value ? (e6 = 1, s5 = 0) : ie4.value && !L3.value && !K3.value && (e6 = 0.8, s5 = 0.2), { ceiling: e6, floor: s5 };
    }), de4 = (e6, s5) => !(h5.value.isReadOnly || $5[s5.id] || E4[e6.id]), f8 = ref(""), k10 = B(), U2 = B(), P4 = () => {
      "summary" in t4.item ? O5.edit(t4.item.uid, "summary", f8.value) : "requestUid" in t4.item ? B8.edit(t4.item.uid, "name", f8.value) : "spec" in t4.item ? N9.edit(t4.item.uid, "spec.info.title", f8.value) : V3.edit(t4.item.uid, "name", f8.value), k10.hide();
    }, C7 = () => {
      f8.value = x9(t4.item) || "", k10.show();
    }, ue3 = () => {
      "requestUid" in t4.item ? (B8.delete(t4.item), R3.value[i4.Examples] === t4.item.uid && F3(`/workspace/${h5.value}/request/default`)) : "summary" in t4.item ? (O5.delete(
        t4.item,
        t4.parentUids[t4.parentUids.length - 1]
      ), R3.value[i4.Request] === t4.item.uid && F3(`/workspace/${h5.value.uid}/request/default`)) : "spec" in t4.item ? N9.delete(t4.item) : "name" in t4.item && V3.delete(
        t4.item,
        t4.parentUids[t4.parentUids.length - 1]
      );
    }, me4 = computed(() => {
      var e6;
      return "summary" in t4.item ? t4.item.summary || "" : "name" in t4.item ? t4.item.name || "" : "spec" in t4.item && ((e6 = t4.item.spec.info) == null ? void 0 : e6.title) || "";
    }), c3 = computed(() => "requestUid" in t4.item ? "Example" : "summary" in t4.item ? "Request" : "spec" in t4.item ? "Collection" : "Folder");
    return (e6, s5) => {
      const w2 = resolveComponent("RequestSidebarItem", true);
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass(["relative flex flex-row", [
            unref(a10) && e6.parentUids.length > 1 || !unref(a10) && e6.parentUids.length ? "before:bg-b-3 before:absolute before:left-[calc(.75rem_+_.5px)] before:top-0 before:z-10 before:h-[calc(100%_+_.5px)] last:before:h-full before:w-[.5px] mb-[.5px] last:mb-0 indent-border-line-offset" : ""
          ]])
        }, [
          createVNode(unref(A), {
            id: e6.item.uid,
            ref_key: "draggableRef",
            ref: S3,
            ceiling: W4.value.ceiling,
            class: "flex flex-1 flex-col gap-[.5px] text-sm",
            floor: W4.value.floor,
            isDraggable: e6.isDraggable,
            isDroppable: e6.isDroppable,
            parentIds: e6.parentUids,
            onOnDragEnd: s5[5] || (s5[5] = (...p8) => e6.$emit("onDragEnd", ...p8))
          }, {
            default: withCtx(() => {
              var p8, A2;
              return [
                "summary" in e6.item || "requestUid" in e6.item ? (openBlock(), createBlock(unref(RouterLink), {
                  key: 0,
                  class: "no-underline",
                  to: ne3()
                }, {
                  default: withCtx(({ isExactActive: r6 }) => [
                    createVNode(unref(x), { disabled: unref(a10) }, {
                      trigger: withCtx(() => [
                        createBaseVNode("div", {
                          class: normalizeClass(["group relative flex min-h-8 cursor-pointer flex-row items-start justify-between gap-2 py-1.5 pr-2 rounded editable-sidebar-hover w-full", [
                            _6,
                            r6 || oe.value ? "bg-sidebar-active-b text-sidebar-active-c transition-none" : "text-sidebar-c-2"
                          ]]),
                          tabindex: "0"
                        }, [
                          createBaseVNode("span", {
                            class: normalizeClass(["z-10 font-medium w-full pl-2 word-break-break-word", {
                              "editable-sidebar-hover-item": !unref(a10)
                            }])
                          }, toDisplayString(x9(e6.item)), 3),
                          createBaseVNode("div", ze, [
                            createBaseVNode("div", Ne, [
                              unref(a10) ? createCommentVNode("", true) : (openBlock(), createBlock(m9, {
                                key: 0,
                                item: e6.item,
                                parentUids: e6.parentUids,
                                resourceTitle: c3.value,
                                onDelete: s5[0] || (s5[0] = (u8) => unref(U2).show()),
                                onRename: C7
                              }, null, 8, ["item", "parentUids", "resourceTitle"]))
                            ]),
                            createBaseVNode("span", Ve, [
                              createTextVNode("   "),
                              createVNode(unref(f), {
                                class: "font-bold",
                                method: re5.value
                              }, null, 8, ["method"])
                            ])
                          ])
                        ], 2)
                      ]),
                      content: withCtx(() => [
                        createVNode(m9, {
                          item: e6.item,
                          parentUids: e6.parentUids,
                          resourceTitle: c3.value,
                          static: "",
                          onDelete: s5[1] || (s5[1] = (u8) => unref(U2).show()),
                          onRename: C7
                        }, null, 8, ["item", "parentUids", "resourceTitle"])
                      ]),
                      _: 2
                    }, 1032, ["disabled"])
                  ]),
                  _: 1
                }, 8, ["to"])) : !unref(a10) || e6.parentUids.length ? (openBlock(), createBlock(unref(x), {
                  key: 1,
                  disabled: unref(a10) || ((A2 = (p8 = e6.item.spec) == null ? void 0 : p8.info) == null ? void 0 : A2.title) === "Drafts"
                }, {
                  trigger: withCtx(() => {
                    var r6, u8;
                    return [
                      createBaseVNode("button", {
                        class: normalizeClass(["hover:bg-b-2 group relative flex w-full flex-row justify-start gap-1.5 rounded p-1.5 z-[1]", _6]),
                        type: "button",
                        onClick: s5[2] || (s5[2] = (pe3) => unref(te2)(e6.item.uid))
                      }, [
                        createBaseVNode("span", Oe, [
                          renderSlot(e6.$slots, "leftIcon", {}, () => [
                            createBaseVNode("div", {
                              class: normalizeClass({
                                "rotate-90": unref(j3)[e6.item.uid]
                              })
                            }, [
                              createVNode(unref(m2), {
                                class: "text-c-3 text-sm",
                                icon: "ChevronRight",
                                size: "sm",
                                thickness: "2.5"
                              })
                            ], 2)
                          ], true),
                          createTextVNode("   ")
                        ]),
                        createBaseVNode("div", Be, [
                          createBaseVNode("span", {
                            class: normalizeClass(["z-10 font-medium text-left w-full word-break-break-word", {
                              "editable-sidebar-hover-item": !unref(a10)
                            }])
                          }, toDisplayString(x9(e6.item)), 3),
                          createBaseVNode("div", Fe2, [
                            !unref(a10) && ((u8 = (r6 = e6.item.spec) == null ? void 0 : r6.info) == null ? void 0 : u8.title) !== "Drafts" ? (openBlock(), createBlock(m9, {
                              key: 0,
                              item: e6.item,
                              parentUids: e6.parentUids,
                              resourceTitle: c3.value
                            }, null, 8, ["item", "parentUids", "resourceTitle"])) : createCommentVNode("", true),
                            je2
                          ])
                        ])
                      ])
                    ];
                  }),
                  content: withCtx(() => {
                    var r6, u8;
                    return [
                      !unref(a10) && ((u8 = (r6 = e6.item.spec) == null ? void 0 : r6.info) == null ? void 0 : u8.title) !== "Drafts" ? (openBlock(), createBlock(m9, {
                        key: 0,
                        item: e6.item,
                        parentUids: e6.parentUids,
                        resourceTitle: c3.value,
                        static: "",
                        onDelete: s5[3] || (s5[3] = (pe3) => unref(U2).show()),
                        onRename: C7
                      }, null, 8, ["item", "parentUids", "resourceTitle"])) : createCommentVNode("", true)
                    ];
                  }),
                  default: withCtx(() => [
                    createTextVNode(" > ")
                  ]),
                  _: 3
                }, 8, ["disabled"])) : createCommentVNode("", true),
                "childUids" in e6.item ? withDirectives((openBlock(), createElementBlock("div", Ke, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(L3.value ? e6.item.childUids.slice(1) : e6.item.childUids, (r6) => (openBlock(), createBlock(w2, {
                    key: r6,
                    isDraggable: !unref($5)[r6],
                    isDroppable: de4,
                    item: unref(ee3)[r6] || unref(z2)[r6] || unref($5)[r6],
                    parentUids: [...e6.parentUids, e6.item.uid],
                    onOnDragEnd: s5[4] || (s5[4] = (...u8) => e6.$emit("onDragEnd", ...u8))
                  }, null, 8, ["isDraggable", "item", "parentUids"]))), 128))
                ], 512)), [
                  [vShow, ae3.value]
                ]) : createCommentVNode("", true)
              ];
            }),
            _: 3
          }, 8, ["id", "ceiling", "floor", "isDraggable", "isDroppable", "parentIds"])
        ], 2),
        createVNode(unref(m), {
          size: "sm",
          state: unref(U2),
          title: `Delete ${c3.value}`
        }, {
          default: withCtx(() => [
            createVNode(k3, {
              variableName: me4.value,
              warningMessage: "Warning: Deleting this will delete all items inside of this",
              onClose: s5[6] || (s5[6] = (p8) => unref(U2).hide()),
              onDelete: ue3
            }, null, 8, ["variableName"])
          ]),
          _: 1
        }, 8, ["state", "title"]),
        createVNode(unref(m), {
          state: unref(k10),
          title: `Rename ${c3.value}`
        }, {
          default: withCtx(() => [
            createVNode(unref(e), {
              modelValue: f8.value,
              "onUpdate:modelValue": s5[7] || (s5[7] = (p8) => f8.value = p8),
              label: c3.value,
              labelShadowColor: "var(--scalar-background-1)",
              onKeydown: withKeys(withModifiers(P4, ["prevent"]), ["enter"])
            }, null, 8, ["modelValue", "label", "onKeydown"]),
            createBaseVNode("div", Le, [
              createVNode(unref(W), {
                class: "flex-1",
                variant: "outlined",
                onClick: s5[8] || (s5[8] = (p8) => unref(k10).hide())
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }),
              createVNode(unref(W), {
                class: "flex-1",
                type: "submit",
                onClick: P4
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["state", "title"])
      ], 64);
    };
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItem.vue.js
var a8 = s(_e, [["__scopeId", "data-v-17dc8b59"]]);

// node_modules/@scalar/api-client/dist/views/Request/components/WorkspaceDropdown.vue.js
var X3 = { class: "xl:min-h-header xl:py-2.5 py-1 flex items-center border-b-1/2 px-2.5 text-sm" };
var Y2 = { class: "font-medium m-0 text-sm flex gap-1.5 items-center" };
var Z = createBaseVNode("span", null, "Rename", -1);
var ee2 = createBaseVNode("span", null, "Delete", -1);
var te = createBaseVNode("div", { class: "grid gap-1.5 pointer-events-none min-w-48 w-content shadow-lg rounded bg-b-1 z-100 p-2 text-xxs leading-5 z-10 text-c-1" }, [
  createBaseVNode("div", { class: "flex items-center text-c-2" }, [
    createBaseVNode("span", null, "Only workspace cannot be deleted.")
  ])
], -1);
var se4 = createBaseVNode("span", null, "Delete", -1);
var ae2 = { class: "flex items-center justify-center h-4 w-4" };
var ne2 = createBaseVNode("span", null, "Create new workspace", -1);
var le2 = { class: "flex gap-3" };
var me3 = defineComponent({
  __name: "WorkspaceDropdown",
  setup(oe) {
    const { activeWorkspace: f8, workspaces: d5, workspaceMutators: g4 } = rt(), { push: b6 } = useRouter(), j3 = (n4) => {
      n4 !== f8.value.uid && b6(`/workspace/${n4}`);
    }, y6 = computed(() => Object.keys(d5).length === 1), B8 = () => m4.emit({ commandName: "Create Workspace" }), o2 = ref(""), r6 = ref(""), v5 = B(), h5 = B(), R3 = (n4) => {
      o2.value = d5[n4].name, r6.value = n4, v5.show();
    }, C7 = () => {
      o2.value.trim() && (g4.rename(r6.value, o2.value.trim()), v5.hide());
    }, T2 = (n4) => {
      o2.value = d5[n4].name, r6.value = n4, h5.show();
    }, E4 = async () => {
      if (!y6.value) {
        const n4 = f8.value.uid === r6.value, l6 = { ...d5 };
        if (delete l6[r6.value], g4.delete(r6.value), n4) {
          const i9 = Object.keys(l6)[0];
          await b6(`/workspace/${i9}/`);
        }
      }
      h5.hide();
    };
    return (n4, l6) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", X3, [
        createVNode(unref(O), null, {
          items: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(d5), (i9, u8) => (openBlock(), createBlock(unref(x), { key: u8 }, {
              trigger: withCtx(() => [
                createVNode(unref(C), {
                  class: "flex gap-1.5 group/item items-center whitespace-nowrap text-ellipsis overflow-hidden w-full",
                  onClick: withModifiers((M3) => j3(u8), ["stop"])
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "flex items-center justify-center rounded-full p-[3px] w-4 h-4 group-hover/item:shadow-border",
                        unref(f8).uid === u8 ? "bg-blue text-b-1" : "text-transparent"
                      ])
                    }, [
                      createVNode(unref(m2), {
                        class: "size-2.5",
                        icon: "Checkmark",
                        thickness: "3.5"
                      })
                    ], 2),
                    createTextVNode(" " + toDisplayString(i9.name), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              content: withCtx(() => [
                createVNode(unref(O), { static: "" }, {
                  items: withCtx(() => [
                    createVNode(unref(C), {
                      class: "flex !gap-2",
                      onMousedown: (M3) => R3(u8)
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(m2), {
                          class: "inline-flex",
                          icon: "Edit",
                          size: "sm",
                          thickness: "1.5"
                        }),
                        Z
                      ]),
                      _: 2
                    }, 1032, ["onMousedown"]),
                    y6.value ? (openBlock(), createBlock(unref(C3), {
                      key: 0,
                      class: "z-10",
                      side: "bottom"
                    }, {
                      trigger: withCtx(() => [
                        createVNode(unref(C), {
                          class: "flex w-full",
                          disabled: "",
                          onMousedown: l6[0] || (l6[0] = withModifiers(() => {
                          }, ["prevent"]))
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(m2), {
                              class: "inline-flex",
                              icon: "Trash",
                              size: "sm",
                              thickness: "1.5"
                            }),
                            ee2
                          ]),
                          _: 1
                        })
                      ]),
                      content: withCtx(() => [
                        te
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(unref(C), {
                      key: 1,
                      class: "flex !gap-2",
                      onMousedown: withModifiers((M3) => T2(u8), ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(m2), {
                          class: "inline-flex",
                          icon: "Trash",
                          size: "sm",
                          thickness: "1.5"
                        }),
                        se4
                      ]),
                      _: 2
                    }, 1032, ["onMousedown"]))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024))), 128)),
            createVNode(unref(i2)),
            createVNode(unref(C), {
              class: "flex items-center gap-1.5",
              onClick: B8
            }, {
              default: withCtx(() => [
                createBaseVNode("div", ae2, [
                  createVNode(unref(m2), {
                    class: "h-2.5",
                    icon: "Add",
                    thickness: "3"
                  })
                ]),
                ne2
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(unref(W), {
              class: "font-normal h-full justify-start py-1.5 px-1.5 text-c-1 hover:bg-b-2 w-fit",
              fullWidth: "",
              variant: "ghost"
            }, {
              default: withCtx(() => [
                createBaseVNode("h2", Y2, [
                  createTextVNode(toDisplayString(unref(f8).name) + " ", 1),
                  createVNode(unref(m2), {
                    class: "size-2.5",
                    icon: "ChevronDown",
                    thickness: "3.5"
                  })
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      createVNode(unref(m), {
        size: "sm",
        state: unref(h5),
        title: `Delete ${o2.value}`
      }, {
        default: withCtx(() => [
          createVNode(k3, {
            variableName: o2.value,
            warningMessage: "Warning: Deleting this will delete all items inside of this",
            onClose: l6[1] || (l6[1] = (i9) => unref(h5).hide()),
            onDelete: E4
          }, null, 8, ["variableName"])
        ]),
        _: 1
      }, 8, ["state", "title"]),
      createVNode(unref(m), {
        state: unref(v5),
        title: "Rename Workspace"
      }, {
        default: withCtx(() => [
          createVNode(unref(e), {
            modelValue: o2.value,
            "onUpdate:modelValue": l6[2] || (l6[2] = (i9) => o2.value = i9),
            label: "Workspace",
            labelShadowColor: "var(--scalar-background-1)",
            onKeydown: withKeys(withModifiers(C7, ["prevent"]), ["enter"])
          }, null, 8, ["modelValue", "onKeydown"]),
          createBaseVNode("div", le2, [
            createVNode(unref(W), {
              class: "flex-1",
              variant: "outlined",
              onClick: l6[3] || (l6[3] = (i9) => unref(v5).hide())
            }, {
              default: withCtx(() => [
                createTextVNode(" Cancel ")
              ]),
              _: 1
            }),
            createVNode(unref(W), {
              class: "flex-1",
              type: "submit",
              onClick: C7
            }, {
              default: withCtx(() => [
                createTextVNode(" Save ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["state"])
    ], 64));
  }
});

// node_modules/@scalar/api-client/dist/errors.js
var e5 = {
  URL_EMPTY: "The adress bar seems to be empty. Try adding an URL.",
  INVALID_URL: "The URL seems to be invalid. Try adding a valid URL."
};

// node_modules/@scalar/api-client/dist/libs/normalizeHeaders.js
function l5(o2) {
  var r6, c3;
  const e6 = Object.keys(o2).find(
    (t4) => t4.toLowerCase() === "x-scalar-modified-headers"
  ), n4 = e6 ? ((c3 = (r6 = o2[e6]) == null ? void 0 : r6.toString().split(", ")) == null ? void 0 : c3.map((t4) => t4.toLowerCase())) ?? [] : [];
  return Object.keys(o2).forEach((t4) => {
    n4.includes(t4.toLowerCase()) && delete o2[t4];
  }), e6 && delete o2[e6], Object.keys(o2).forEach((t4) => {
    if (t4.toLowerCase().startsWith("x-scalar-original-")) {
      const i9 = t4.replace("X-Scalar-Original-", "");
      o2[i9] = o2[t4], delete o2[t4];
    }
  }), Object.keys(o2).forEach((t4) => {
    const i9 = a9(t4);
    t4 !== i9 && (o2[i9] = o2[t4], delete o2[t4]);
  }), Object.fromEntries(
    Object.entries(o2).sort(([t4], [i9]) => t4.localeCompare(i9))
  );
}
function a9(o2) {
  return o2.split("-").map((e6) => e6.charAt(0).toUpperCase() + e6.toLowerCase().slice(1)).join("-");
}

// node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i9 = 1; i9 < arguments.length; i9++) {
    var source = arguments[i9];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
  }
  function get(name) {
    if (typeof document === "undefined" || arguments.length && !name) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i9 = 0; i9 < cookies.length; i9++) {
      var parts = cookies[i9].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);
        if (name === found) {
          break;
        }
      } catch (e6) {
      }
    }
    return name ? jar[name] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(name, attributes) {
        set(
          name,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });

// node_modules/@scalar/api-client/dist/libs/sendRequest.js
var import_whatwg_mimetype2 = __toESM(require_mime_type(), 1);
var f7 = (s5 = []) => s5.reduce(
  (o2, n4) => (n4.key && (o2[n4.key] = n4.value), o2),
  {}
);
var k9 = (s5, o2) => {
  const n4 = new import_whatwg_mimetype2.default(o2);
  if (i6.includes(n4.essence)) {
    const d5 = new TextDecoder(n4.parameters.get("charset")).decode(s5);
    return n4.subtype === "json" ? JSON.parse(d5) : d5;
  } else
    return new Blob([s5], { type: n4.essence });
};
var N8 = async (s5, o2, n4, u8, d5, l6) => {
  let i9 = n4;
  o2.parameters.path.forEach((e6) => {
    !e6.key || !e6.value || (i9 = i9.replace(`{${e6.key}}`, e6.value));
  });
  const a10 = f7(
    o2.parameters.headers.filter(({ enabled: e6 }) => e6)
  );
  let c3 = null;
  if (o2.body.activeBody === "binary" && o2.body.binary)
    a10["Content-Type"] = o2.body.binary.type, a10["Content-Disposition"] = `attachment; filename="${o2.body.binary.name}"`, c3 = o2.body.binary;
  else if (o2.body.activeBody === "raw" && o2.body.raw.value)
    c3 = o2.body.raw.value;
  else if (o2.body.activeBody === "formData") {
    a10["Content-Type"] = "multipart/form-data";
    const e6 = new FormData();
    o2.body.formData.encoding === "form-data" && (o2.body.formData.value.forEach(
      (t4) => {
        const r6 = t4.file ? t4.file : t4.value;
        t4.key && r6 && e6.append(t4.key, r6);
      }
    ), c3 = e6);
  }
  const p8 = [], [D5, g4] = i9.split("?");
  new URLSearchParams(g4 ?? "").forEach((e6, t4) => {
    p8.push({
      key: t4,
      value: e6,
      enabled: true
    });
  });
  const w2 = {
    ...f7(
      o2.parameters.query.filter(({ enabled: e6 }) => e6).filter(({ value: e6 }) => e6 !== "")
    ),
    ...f7(p8)
  }, y6 = {
    ...f7(
      (o2.parameters.cookies ?? []).filter(({ enabled: e6 }) => e6)
    )
  };
  if (l6) {
    if (!n4)
      throw new Error(e5.URL_EMPTY);
    try {
      new URL(n4);
    } catch {
      throw new Error(e5.INVALID_URL);
    }
    const e6 = new URL(n4).host;
    Object.keys(l6).forEach((t4) => {
      const r6 = l6[t4];
      if (!r6.domain) return;
      (isValidUrl(r6.domain) ? new URL(r6.domain).origin : r6.domain) === e6 && (y6[r6.name] = r6.domain);
    });
  }
  u8 == null || u8.forEach((e6) => {
    if (e6.type === "apiKey" && e6.value)
      switch (e6.in) {
        case "cookie":
          y6[e6.name] = e6.value;
          break;
        case "query":
          w2[e6.name] = e6.value;
          break;
        case "header":
          a10[e6.name] = e6.value;
          break;
      }
    else e6.type === "http" && e6.value ? e6.scheme === "basic" && e6.secondValue ? a10.Authorization = `Basic ${btoa(`${e6.value}:${e6.secondValue}`)}` : a10.Authorization = `Bearer ${e6.value}` : e6.type === "oauth2" && e6.flow.token && (a10.Authorization = `Bearer ${e6.flow.token}`);
  }), Object.keys(y6).forEach((e6) => {
    api.set(e6, y6[e6], {
      // Means that the browser sends the cookie with both cross-site and same-site requests.
      sameSite: "None",
      // The Secure attribute must also be set when setting SameSite=None.
      secure: true
    });
  });
  const v5 = new URLSearchParams(w2).toString();
  i9 = `${D5}${v5 ? "?" + v5 : ""}`;
  const h5 = {
    url: redirectToProxy(d5, i9),
    method: s5.method,
    responseType: "arraybuffer",
    headers: a10
  };
  c3 && (h5.data = c3);
  const R3 = Date.now();
  try {
    const e6 = await axios_default(h5);
    shouldUseProxy(d5, i9) && [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Methods",
      "Access-Control-Expose-Headers"
    ].map((b6) => b6.toLowerCase()).forEach((b6) => delete e6.headers[b6]);
    const t4 = e6.data, r6 = e6.headers["Content-Type"] ?? e6.headers["content-type"] ?? "text/plain;charset=UTF-8", T2 = k9(t4, `${r6}`), A2 = l5(e6.headers);
    return {
      sentTime: Date.now(),
      request: o2,
      response: {
        ...e6,
        headers: A2,
        data: T2,
        duration: Date.now() - R3
      }
    };
  } catch (e6) {
    const t4 = e6, r6 = t4.response;
    return console.error("ERROR", e6), {
      sentTime: Date.now(),
      request: o2,
      response: r6 ? {
        ...r6,
        data: k9(
          r6.data,
          "text/plain;charset=UTF-8"
        ),
        duration: Date.now() - R3
      } : void 0,
      error: t4
    };
  }
};

// node_modules/@scalar/api-client/dist/views/Request/Request.vue2.js
var Ie2 = (w2) => (pushScopeId("data-v-b7bd40a0"), w2 = w2(), popScopeId(), w2);
var Ve2 = { class: "lg:min-h-header flex items-center w-full justify-center p-1 flex-wrap t-app__top-container border-b-1/2" };
var $e = { class: "flex flex-row items-center gap-1 lg:px-1 lg:mb-0 mb-0.5 lg:flex-1 w-6/12" };
var Ee3 = Ie2(() => createBaseVNode("a", {
  class: "text-c-2 text-sm font-medium gitbook-show ml-.5 hover:text-c-1 border p-1 rounded hover:bg-b-3",
  href: "https://scalar.com/",
  target: "_blank"
}, " Powered by Scalar.com ", -1));
var Pe = { class: "flex flex-row items-center gap-1 lg:px-1 lg:mb-0 mb-0.5 lg:flex-1 justify-end w-6/12" };
var dt = defineComponent({
  __name: "Request",
  setup(w2) {
    var E4;
    const {
      activeExample: y6,
      activeRequest: f8,
      activeSecuritySchemes: L3,
      activeWorkspace: l6,
      activeWorkspaceCollections: T2,
      activeWorkspaceServers: A2,
      activeWorkspaceRequests: K3,
      collectionMutators: B8,
      collections: m11,
      cookies: H2,
      environments: J2,
      findRequestFolders: Q3,
      folders: x9,
      folderMutators: D5,
      modalState: G,
      requestMutators: X4,
      workspaceMutators: O5
    } = rt(), { collapsedSidebarFolders: Y3, setCollapsedSidebarFolder: Z2 } = a3(), { toast: q } = i(), M3 = B(), ee3 = useMediaQuery("(max-width: 780px)"), u8 = ref(!((E4 = l6.value) != null && E4.isReadOnly));
    watch(ee3, (o2) => u8.value = !o2), watch(
      f8,
      (o2) => {
        o2 && Q3(o2.uid).forEach(
          (e6) => Z2(e6, true)
        );
      },
      { immediate: true }
    );
    const I7 = async () => {
      var i9;
      if (!f8.value || !y6.value) {
        console.warn(
          "There is no request active at the moment. Please select one then try again."
        );
        return;
      }
      let o2 = y6.value.url;
      const e6 = Object.values(J2).reduce(
        (r6, a10) => {
          try {
            return { ...r6, ...JSON.parse(a10.raw) };
          } catch {
            return r6;
          }
        },
        {}
      ), t4 = /\{\{(.*?)\}\}/g;
      o2 = o2.replace(t4, (r6, a10) => (A2.value.forEach((n4) => {
        if (n4.url === a10)
          return a10;
      }), e6[a10] || a10)), u3.emit("start");
      try {
        const { request: r6, response: a10, error: n4 } = await N8(
          f8.value,
          y6.value,
          o2,
          L3.value,
          (i9 = l6.value) == null ? void 0 : i9.proxyUrl,
          H2
        );
        r6 && a10 ? (X4.edit(f8.value.uid, "history", [
          ...f8.value.history,
          {
            request: r6,
            response: a10,
            timestamp: Date.now()
          }
        ]), u3.emit("stop")) : (q((n4 == null ? void 0 : n4.message) ?? "Send Request Failed", "error"), u3.emit("abort"));
      } catch (r6) {
        console.error(r6), q(`Oops! 
${r6}`, "error"), u3.emit("abort");
      }
    }, V3 = (o2) => {
      o2.toggleSidebar && (u8.value = !u8.value), o2.openCommandPalette && (o2.openCommandPalette.preventDefault(), m4.emit());
    };
    onMounted(() => {
      u2.on(I7), a.on(V3);
    }), onBeforeUnmount(() => {
      u2.off(I7), a.off(V3);
    });
    const $5 = (o2, e6) => {
      m11[o2] ? B8.edit(o2, "childUids", e6) : x9[o2] && D5.edit(o2, "childUids", e6);
    }, te2 = (o2, e6) => {
      if (!o2 || !e6) return;
      const { id: t4, parentId: i9 } = o2, { id: r6, parentId: a10, offset: n4 } = e6;
      if (i9 ? m11[i9] ? B8.edit(
        i9,
        "childUids",
        m11[i9].childUids.filter(
          (d5) => d5 !== t4
        )
      ) : x9[i9] && D5.edit(
        i9,
        "childUids",
        x9[i9].childUids.filter((d5) => d5 !== t4)
      ) : O5.edit(
        l6.value.uid,
        "collectionUids",
        l6.value.collectionUids.filter((d5) => d5 !== t4)
      ), n4 === 2) {
        const d5 = m11[r6] || x9[r6];
        $5(r6, [...d5.childUids, t4]);
      } else if (a10) {
        const g4 = [...(m11[a10] || x9[a10]).childUids], _7 = g4.findIndex((re5) => r6 === re5) ?? 0;
        g4.splice(_7 + n4, 0, t4), $5(a10, g4);
      } else {
        const d5 = [...l6.value.collectionUids], g4 = d5.findIndex((_7) => r6 === _7) ?? 0;
        d5.splice(g4 + n4, 0, t4), O5.edit(
          l6.value.uid,
          "collectionUids",
          d5
        );
      }
    }, oe = (o2, e6) => {
      var t4, i9, r6;
      return !(l6.value.isReadOnly || !m11[o2.id] && e6.offset !== 2 || m11[o2.id] && ((r6 = (i9 = (t4 = m11[e6.id]) == null ? void 0 : t4.spec) == null ? void 0 : i9.info) == null ? void 0 : r6.title) === "Drafts");
    };
    return (o2, e6) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", {
        class: normalizeClass(["flex flex-1 flex-col rounded pt-0 h-full bg-b-1 relative border-1/2 rounded mr-1.5 mb-1.5 overflow-hidden", {
          "!mr-0 !mb-0 !border-0": unref(l6).isReadOnly
        }])
      }, [
        createBaseVNode("div", Ve2, [
          createBaseVNode("div", $e, [
            createVNode(h2, {
              modelValue: u8.value,
              "onUpdate:modelValue": e6[0] || (e6[0] = (t4) => u8.value = t4),
              class: "gitbook-hidden"
            }, null, 8, ["modelValue"]),
            Ee3
          ]),
          createVNode(a4),
          createBaseVNode("div", Pe, [
            unref(l6).isReadOnly ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "text-c-3 hover:bg-b-2 active:text-c-1 p-2 rounded",
              type: "button",
              onClick: e6[1] || (e6[1] = (t4) => unref(G).hide())
            }, [
              createVNode(unref(m2), {
                icon: "Close",
                size: "lg",
                thickness: "1.75"
              })
            ])) : createCommentVNode("", true)
          ])
        ]),
        createVNode(a2, null, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(I2), {
              class: normalizeClass([u8.value ? "sidebar-active-width" : ""]),
              showSideBar: u8.value,
              "onUpdate:showSideBar": e6[5] || (e6[5] = (t4) => u8.value = t4)
            }, createSlots({
              content: withCtx(() => [
                createVNode(m5, {
                  onOpenSearchModal: e6[2] || (e6[2] = (t4) => unref(M3).show())
                }),
                createBaseVNode("div", {
                  class: normalizeClass(["custom-scroll flex flex-1 flex-col overflow-visible px-3 pb-3 pt-0", {
                    "pb-14": !unref(l6).isReadOnly
                  }]),
                  onDragenter: e6[3] || (e6[3] = withModifiers(() => {
                  }, ["prevent"])),
                  onDragover: e6[4] || (e6[4] = withModifiers(() => {
                  }, ["prevent"]))
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(T2), (t4) => {
                    var i9, r6;
                    return openBlock(), createBlock(a8, {
                      key: t4.uid,
                      isDraggable: !unref(l6).isReadOnly && ((r6 = (i9 = t4.spec) == null ? void 0 : i9.info) == null ? void 0 : r6.title) !== "Drafts",
                      isDroppable: oe,
                      item: t4,
                      parentUids: [],
                      onOnDragEnd: te2
                    }, {
                      leftIcon: withCtx(() => [
                        createVNode(unref(m2), {
                          class: "text-sidebar-c-2 text-sm group-hover:hidden",
                          icon: "CodeFolder",
                          size: "sm",
                          thickness: "2"
                        }),
                        createBaseVNode("div", {
                          class: normalizeClass({
                            "rotate-90": unref(Y3)[t4.uid]
                          })
                        }, [
                          createVNode(unref(m2), {
                            class: "text-c-3 hidden text-sm group-hover:block",
                            icon: "ChevronRight",
                            size: "sm"
                          })
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["isDraggable", "item"]);
                  }), 128))
                ], 34)
              ]),
              button: withCtx(() => [
                unref(l6).isReadOnly ? createCommentVNode("", true) : (openBlock(), createBlock(k2, {
                  key: 0,
                  class: normalizeClass({
                    "empty-sidebar-item": unref(K3).length === 1
                  }),
                  click: unref(m4).emit
                }, {
                  title: withCtx(() => [
                    createTextVNode("Add Item")
                  ]),
                  _: 1
                }, 8, ["class", "click"]))
              ]),
              _: 2
            }, [
              unref(l6).isReadOnly ? void 0 : {
                name: "header",
                fn: withCtx(() => [
                  createVNode(unref(me3))
                ]),
                key: "0"
              }
            ]), 1032, ["class", "showSideBar"]), [
              [vShow, u8.value]
            ]),
            unref(y6) ? (openBlock(), createBlock(x2, {
              key: 0,
              class: normalizeClass(["flex-1", [u8.value ? "sidebar-active-hide-layout" : ""]])
            }, {
              default: withCtx(() => {
                var t4, i9, r6, a10, n4;
                return [
                  createVNode(X2),
                  createVNode(T, {
                    response: (n4 = (a10 = (t4 = unref(f8)) == null ? void 0 : t4.history) == null ? void 0 : a10[((r6 = (i9 = unref(f8)) == null ? void 0 : i9.history) == null ? void 0 : r6.length) - 1]) == null ? void 0 : n4.response
                  }, null, 8, ["response"])
                ];
              }),
              _: 1
            }, 8, ["class"])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 2),
      createVNode(m6, { modalState: unref(M3) }, null, 8, ["modalState"])
    ], 64));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/Request.vue.js
var m10 = s(dt, [["__scopeId", "data-v-b7bd40a0"]]);
export {
  m10 as default
};
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/
//# sourceMappingURL=Request.vue-IT562FZ7.js.map
