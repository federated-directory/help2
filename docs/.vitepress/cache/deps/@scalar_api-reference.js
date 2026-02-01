import {
  createHooks
} from "./chunk-CNEGYWKK.js";
import {
  AxiosHeaders
} from "./chunk-IHG44N33.js";
import {
  Fuse
} from "./chunk-U6NJFA4U.js";
import {
  A,
  Ae,
  B,
  C2 as C,
  D,
  F,
  Fe,
  I,
  Ie,
  L,
  M,
  N,
  Q,
  V,
  W,
  autoUpdate,
  computedAsync,
  concatenateUrlAndPath,
  createHash,
  defaultStateFactory,
  fetchSpecFromUrl,
  findVariables,
  flip,
  getExampleFromSchema,
  getHeadings,
  getParametersFromOperation,
  getRequestFromOperation,
  h,
  i,
  i2,
  isJsonString,
  isValidUrl,
  je,
  l,
  m,
  m2,
  me,
  normalizeMimeTypeObject,
  o,
  objectMerge,
  offset,
  pe,
  prettyPrintJson,
  redirectToProxy,
  replaceVariables,
  s,
  s2,
  shift,
  splitContent,
  ssrState,
  t,
  useDebounceFn,
  useElementHover,
  useEventBus,
  useFloating,
  useIntersectionObserver,
  useMagicKeys,
  useMediaQuery,
  useResizeObserver,
  v,
  v2,
  whenever,
  xe
} from "./chunk-2W4MFJRL.js";
import {
  Fragment,
  Teleport,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  guardReactiveProps,
  inject,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  onServerPrefetch,
  openBlock,
  popScopeId,
  provide,
  pushScopeId,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  toRef,
  toValue,
  unref,
  useSSRContext,
  useSlots,
  vModelCheckbox,
  vModelSelect,
  vModelText,
  vShow,
  version,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-XKDLJUKD.js";
import {
  __commonJS,
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/is-regexp/index.js
var require_is_regexp = __commonJS({
  "node_modules/is-regexp/index.js"(exports, module) {
    "use strict";
    module.exports = function(re2) {
      return Object.prototype.toString.call(re2) === "[object RegExp]";
    };
  }
});

// node_modules/is-obj/index.js
var require_is_obj = __commonJS({
  "node_modules/is-obj/index.js"(exports, module) {
    "use strict";
    module.exports = function(x7) {
      var type = typeof x7;
      return x7 !== null && (type === "object" || type === "function");
    };
  }
});

// node_modules/get-own-enumerable-property-symbols/lib/index.js
var require_lib = __commonJS({
  "node_modules/get-own-enumerable-property-symbols/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (object) => Object.getOwnPropertySymbols(object).filter((keySymbol) => Object.prototype.propertyIsEnumerable.call(object, keySymbol));
  }
});

// node_modules/stringify-object/index.js
var require_stringify_object = __commonJS({
  "node_modules/stringify-object/index.js"(exports, module) {
    "use strict";
    var isRegexp = require_is_regexp();
    var isObj = require_is_obj();
    var getOwnEnumPropSymbols = require_lib().default;
    module.exports = (val, opts, pad) => {
      const seen = [];
      return function stringify(val2, opts2, pad2) {
        opts2 = opts2 || {};
        opts2.indent = opts2.indent || "	";
        pad2 = pad2 || "";
        let tokens;
        if (opts2.inlineCharacterLimit === void 0) {
          tokens = {
            newLine: "\n",
            newLineOrSpace: "\n",
            pad: pad2,
            indent: pad2 + opts2.indent
          };
        } else {
          tokens = {
            newLine: "@@__STRINGIFY_OBJECT_NEW_LINE__@@",
            newLineOrSpace: "@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",
            pad: "@@__STRINGIFY_OBJECT_PAD__@@",
            indent: "@@__STRINGIFY_OBJECT_INDENT__@@"
          };
        }
        const expandWhiteSpace = (string) => {
          if (opts2.inlineCharacterLimit === void 0) {
            return string;
          }
          const oneLined = string.replace(new RegExp(tokens.newLine, "g"), "").replace(new RegExp(tokens.newLineOrSpace, "g"), " ").replace(new RegExp(tokens.pad + "|" + tokens.indent, "g"), "");
          if (oneLined.length <= opts2.inlineCharacterLimit) {
            return oneLined;
          }
          return string.replace(new RegExp(tokens.newLine + "|" + tokens.newLineOrSpace, "g"), "\n").replace(new RegExp(tokens.pad, "g"), pad2).replace(new RegExp(tokens.indent, "g"), pad2 + opts2.indent);
        };
        if (seen.indexOf(val2) !== -1) {
          return '"[Circular]"';
        }
        if (val2 === null || val2 === void 0 || typeof val2 === "number" || typeof val2 === "boolean" || typeof val2 === "function" || typeof val2 === "symbol" || isRegexp(val2)) {
          return String(val2);
        }
        if (val2 instanceof Date) {
          return `new Date('${val2.toISOString()}')`;
        }
        if (Array.isArray(val2)) {
          if (val2.length === 0) {
            return "[]";
          }
          seen.push(val2);
          const ret = "[" + tokens.newLine + val2.map((el, i24) => {
            const eol = val2.length - 1 === i24 ? tokens.newLine : "," + tokens.newLineOrSpace;
            let value = stringify(el, opts2, pad2 + opts2.indent);
            if (opts2.transform) {
              value = opts2.transform(val2, i24, value);
            }
            return tokens.indent + value + eol;
          }).join("") + tokens.pad + "]";
          seen.pop();
          return expandWhiteSpace(ret);
        }
        if (isObj(val2)) {
          let objKeys = Object.keys(val2).concat(getOwnEnumPropSymbols(val2));
          if (opts2.filter) {
            objKeys = objKeys.filter((el) => opts2.filter(val2, el));
          }
          if (objKeys.length === 0) {
            return "{}";
          }
          seen.push(val2);
          const ret = "{" + tokens.newLine + objKeys.map((el, i24) => {
            const eol = objKeys.length - 1 === i24 ? tokens.newLine : "," + tokens.newLineOrSpace;
            const isSymbol = typeof el === "symbol";
            const isClassic = !isSymbol && /^[a-z$_][a-z$_0-9]*$/i.test(el);
            const key = isSymbol || isClassic ? el : stringify(el, opts2);
            let value = stringify(val2[el], opts2, pad2 + opts2.indent);
            if (opts2.transform) {
              value = opts2.transform(val2, el, value);
            }
            return tokens.indent + String(key) + ": " + value + eol;
          }).join("") + tokens.pad + "}";
          seen.pop();
          return expandWhiteSpace(ret);
        }
        val2 = String(val2).replace(/[\r\n]/g, (x7) => x7 === "\n" ? "\\n" : "\\r");
        if (opts2.singleQuotes === false) {
          val2 = val2.replace(/"/g, '\\"');
          return `"${val2}"`;
        }
        val2 = val2.replace(/\\?'/g, "\\'");
        return `'${val2}'`;
      }(val, opts, pad);
    };
  }
});

// node_modules/packrup/dist/index.mjs
function unpackToArray(input, options) {
  const unpacked = [];
  const kFn = options.resolveKeyData || ((ctx) => ctx.key);
  const vFn = options.resolveValueData || ((ctx) => ctx.value);
  for (const [k10, v11] of Object.entries(input)) {
    unpacked.push(...(Array.isArray(v11) ? v11 : [v11]).map((i24) => {
      const ctx = { key: k10, value: i24 };
      const val = vFn(ctx);
      if (typeof val === "object")
        return unpackToArray(val, options);
      if (Array.isArray(val))
        return val;
      return {
        [typeof options.key === "function" ? options.key(ctx) : options.key]: kFn(ctx),
        [typeof options.value === "function" ? options.value(ctx) : options.value]: val
      };
    }).flat());
  }
  return unpacked;
}
function unpackToString(value, options) {
  return Object.entries(value).map(([key, value2]) => {
    if (typeof value2 === "object")
      value2 = unpackToString(value2, options);
    if (options.resolve) {
      const resolved = options.resolve({ key, value: value2 });
      if (typeof resolved !== "undefined")
        return resolved;
    }
    if (typeof value2 === "number")
      value2 = value2.toString();
    if (typeof value2 === "string" && options.wrapValue) {
      value2 = value2.replace(new RegExp(options.wrapValue, "g"), `\\${options.wrapValue}`);
      value2 = `${options.wrapValue}${value2}${options.wrapValue}`;
    }
    return `${key}${options.keyValueSeparator || ""}${value2}`;
  }).join(options.entrySeparator || "");
}

// node_modules/@unhead/shared/dist/index.mjs
var TagsWithInnerContent = /* @__PURE__ */ new Set(["title", "titleTemplate", "script", "style", "noscript"]);
var HasElementTags = /* @__PURE__ */ new Set([
  "base",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
]);
var ValidHeadTags = /* @__PURE__ */ new Set([
  "title",
  "titleTemplate",
  "templateParams",
  "base",
  "htmlAttrs",
  "bodyAttrs",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
]);
var UniqueTags = /* @__PURE__ */ new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
var TagConfigKeys = /* @__PURE__ */ new Set(["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]);
var IsBrowser = typeof window !== "undefined";
var composableNames = [
  "getActiveHead",
  "useHead",
  "useSeoMeta",
  "useHeadSafe",
  "useServerHead",
  "useServerSeoMeta",
  "useServerHeadSafe"
];
function defineHeadPlugin(plugin) {
  return plugin;
}
function hashCode(s19) {
  let h10 = 9;
  for (let i24 = 0; i24 < s19.length; )
    h10 = Math.imul(h10 ^ s19.charCodeAt(i24++), 9 ** 9);
  return ((h10 ^ h10 >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function hashTag(tag) {
  if (tag._h) {
    return tag._h;
  }
  if (tag._d) {
    return hashCode(tag._d);
  }
  let content = `${tag.tag}:${tag.textContent || tag.innerHTML || ""}:`;
  for (const key in tag.props) {
    content += `${key}:${String(tag.props[key])},`;
  }
  return hashCode(content);
}
var p = (p22) => ({ keyValue: p22, metaKey: "property" });
var k = (p22) => ({ keyValue: p22 });
var MetaPackingSchema = {
  appleItunesApp: {
    unpack: {
      entrySeparator: ", ",
      resolve({ key, value }) {
        return `${fixKeyCase(key)}=${value}`;
      }
    }
  },
  articleExpirationTime: p("article:expiration_time"),
  articleModifiedTime: p("article:modified_time"),
  articlePublishedTime: p("article:published_time"),
  bookReleaseDate: p("book:release_date"),
  charset: {
    metaKey: "charset"
  },
  contentSecurityPolicy: {
    unpack: {
      entrySeparator: "; ",
      resolve({ key, value }) {
        return `${fixKeyCase(key)} ${value}`;
      }
    },
    metaKey: "http-equiv"
  },
  contentType: {
    metaKey: "http-equiv"
  },
  defaultStyle: {
    metaKey: "http-equiv"
  },
  fbAppId: p("fb:app_id"),
  msapplicationConfig: k("msapplication-Config"),
  msapplicationTileColor: k("msapplication-TileColor"),
  msapplicationTileImage: k("msapplication-TileImage"),
  ogAudioSecureUrl: p("og:audio:secure_url"),
  ogAudioUrl: p("og:audio"),
  ogImageSecureUrl: p("og:image:secure_url"),
  ogImageUrl: p("og:image"),
  ogSiteName: p("og:site_name"),
  ogVideoSecureUrl: p("og:video:secure_url"),
  ogVideoUrl: p("og:video"),
  profileFirstName: p("profile:first_name"),
  profileLastName: p("profile:last_name"),
  profileUsername: p("profile:username"),
  refresh: {
    metaKey: "http-equiv",
    unpack: {
      entrySeparator: ";",
      resolve({ key, value }) {
        if (key === "seconds")
          return `${value}`;
      }
    }
  },
  robots: {
    unpack: {
      entrySeparator: ", ",
      resolve({ key, value }) {
        if (typeof value === "boolean")
          return `${fixKeyCase(key)}`;
        else
          return `${fixKeyCase(key)}:${value}`;
      }
    }
  },
  xUaCompatible: {
    metaKey: "http-equiv"
  }
};
var openGraphNamespaces = /* @__PURE__ */ new Set([
  "og",
  "book",
  "article",
  "profile"
]);
function resolveMetaKeyType(key) {
  var _a;
  const fKey = fixKeyCase(key);
  const prefixIndex = fKey.indexOf(":");
  if (openGraphNamespaces.has(fKey.substring(0, prefixIndex)))
    return "property";
  return ((_a = MetaPackingSchema[key]) == null ? void 0 : _a.metaKey) || "name";
}
function resolveMetaKeyValue(key) {
  var _a;
  return ((_a = MetaPackingSchema[key]) == null ? void 0 : _a.keyValue) || fixKeyCase(key);
}
function fixKeyCase(key) {
  const updated = key.replace(/([A-Z])/g, "-$1").toLowerCase();
  const prefixIndex = updated.indexOf("-");
  const fKey = updated.substring(0, prefixIndex);
  if (fKey === "twitter" || openGraphNamespaces.has(fKey))
    return key.replace(/([A-Z])/g, ":$1").toLowerCase();
  return updated;
}
function changeKeyCasingDeep(input) {
  if (Array.isArray(input)) {
    return input.map((entry) => changeKeyCasingDeep(entry));
  }
  if (typeof input !== "object" || Array.isArray(input))
    return input;
  const output = {};
  for (const key in input) {
    if (!Object.prototype.hasOwnProperty.call(input, key)) {
      continue;
    }
    output[fixKeyCase(key)] = changeKeyCasingDeep(input[key]);
  }
  return output;
}
function resolvePackedMetaObjectValue(value, key) {
  const definition = MetaPackingSchema[key];
  if (key === "refresh")
    return `${value.seconds};url=${value.url}`;
  return unpackToString(
    changeKeyCasingDeep(value),
    {
      keyValueSeparator: "=",
      entrySeparator: ", ",
      resolve({ value: value2, key: key2 }) {
        if (value2 === null)
          return "";
        if (typeof value2 === "boolean")
          return `${key2}`;
      },
      ...definition == null ? void 0 : definition.unpack
    }
  );
}
var ObjectArrayEntries = /* @__PURE__ */ new Set(["og:image", "og:video", "og:audio", "twitter:image"]);
function sanitize(input) {
  const out = {};
  for (const k22 in input) {
    if (!Object.prototype.hasOwnProperty.call(input, k22)) {
      continue;
    }
    const v11 = input[k22];
    if (String(v11) !== "false" && k22)
      out[k22] = v11;
  }
  return out;
}
function handleObjectEntry(key, v11) {
  const value = sanitize(v11);
  const fKey = fixKeyCase(key);
  const attr = resolveMetaKeyType(fKey);
  if (ObjectArrayEntries.has(fKey)) {
    const input = {};
    for (const k22 in value) {
      if (!Object.prototype.hasOwnProperty.call(value, k22)) {
        continue;
      }
      input[`${key}${k22 === "url" ? "" : `${k22[0].toUpperCase()}${k22.slice(1)}`}`] = value[k22];
    }
    return unpackMeta(input).sort((a23, b14) => {
      var _a, _b;
      return (((_a = a23[attr]) == null ? void 0 : _a.length) || 0) - (((_b = b14[attr]) == null ? void 0 : _b.length) || 0);
    });
  }
  return [{ [attr]: fKey, ...value }];
}
function unpackMeta(input) {
  const extras = [];
  const primitives = {};
  for (const key in input) {
    if (!Object.prototype.hasOwnProperty.call(input, key)) {
      continue;
    }
    const value = input[key];
    if (!Array.isArray(value)) {
      if (typeof value === "object" && value) {
        if (ObjectArrayEntries.has(fixKeyCase(key))) {
          extras.push(...handleObjectEntry(key, value));
          continue;
        }
        primitives[key] = sanitize(value);
      } else {
        primitives[key] = value;
      }
      continue;
    }
    for (const v11 of value) {
      extras.push(...typeof v11 === "string" ? unpackMeta({ [key]: v11 }) : handleObjectEntry(key, v11));
    }
  }
  const meta = unpackToArray(primitives, {
    key({ key }) {
      return resolveMetaKeyType(key);
    },
    value({ key }) {
      return key === "charset" ? "charset" : "content";
    },
    resolveKeyData({ key }) {
      return resolveMetaKeyValue(key);
    },
    resolveValueData({ value, key }) {
      if (value === null)
        return "_null";
      if (typeof value === "object")
        return resolvePackedMetaObjectValue(value, key);
      return typeof value === "number" ? value.toString() : value;
    }
  });
  return [...extras, ...meta].map((m29) => {
    if (m29.content === "_null")
      m29.content = null;
    return m29;
  });
}
function thenable(val, thenFn) {
  if (val instanceof Promise) {
    return val.then(thenFn);
  }
  return thenFn(val);
}
function normaliseTag(tagName, input, e14, normalizedProps) {
  const props = normalizedProps || normaliseProps(
    // explicitly check for an object
    // @ts-expect-error untyped
    typeof input === "object" && typeof input !== "function" && !(input instanceof Promise) ? { ...input } : { [tagName === "script" || tagName === "noscript" || tagName === "style" ? "innerHTML" : "textContent"]: input },
    tagName === "templateParams" || tagName === "titleTemplate"
  );
  if (props instanceof Promise) {
    return props.then((val) => normaliseTag(tagName, input, e14, val));
  }
  const tag = {
    tag: tagName,
    props
  };
  for (const k10 of TagConfigKeys) {
    const val = tag.props[k10] !== void 0 ? tag.props[k10] : e14[k10];
    if (val !== void 0) {
      if (!(k10 === "innerHTML" || k10 === "textContent" || k10 === "children") || TagsWithInnerContent.has(tag.tag)) {
        tag[k10 === "children" ? "innerHTML" : k10] = val;
      }
      delete tag.props[k10];
    }
  }
  if (tag.props.body) {
    tag.tagPosition = "bodyClose";
    delete tag.props.body;
  }
  if (tag.tag === "script") {
    if (typeof tag.innerHTML === "object") {
      tag.innerHTML = JSON.stringify(tag.innerHTML);
      tag.props.type = tag.props.type || "application/json";
    }
  }
  return Array.isArray(tag.props.content) ? tag.props.content.map((v11) => ({ ...tag, props: { ...tag.props, content: v11 } })) : tag;
}
function normaliseStyleClassProps(key, v11) {
  var _a;
  const sep = key === "class" ? " " : ";";
  if (v11 && typeof v11 === "object" && !Array.isArray(v11)) {
    v11 = Object.entries(v11).filter(([, v22]) => v22).map(([k10, v22]) => key === "style" ? `${k10}:${v22}` : k10);
  }
  return (_a = String(Array.isArray(v11) ? v11.join(sep) : v11)) == null ? void 0 : _a.split(sep).filter((c24) => Boolean(c24.trim())).join(sep);
}
function nestedNormaliseProps(props, virtual, keys, startIndex) {
  for (let i24 = startIndex; i24 < keys.length; i24 += 1) {
    const k10 = keys[i24];
    if (k10 === "class" || k10 === "style") {
      props[k10] = normaliseStyleClassProps(k10, props[k10]);
      continue;
    }
    if (props[k10] instanceof Promise) {
      return props[k10].then((val) => {
        props[k10] = val;
        return nestedNormaliseProps(props, virtual, keys, i24);
      });
    }
    if (!virtual && !TagConfigKeys.has(k10)) {
      const v11 = String(props[k10]);
      const isDataKey = k10.startsWith("data-");
      if (v11 === "true" || v11 === "") {
        props[k10] = isDataKey ? "true" : true;
      } else if (!props[k10]) {
        if (isDataKey && v11 === "false")
          props[k10] = "false";
        else
          delete props[k10];
      }
    }
  }
}
function normaliseProps(props, virtual = false) {
  const resolvedProps = nestedNormaliseProps(props, virtual, Object.keys(props), 0);
  if (resolvedProps instanceof Promise) {
    return resolvedProps.then(() => props);
  }
  return props;
}
var TagEntityBits = 10;
function nestedNormaliseEntryTags(headTags, tagPromises, startIndex) {
  for (let i24 = startIndex; i24 < tagPromises.length; i24 += 1) {
    const tags = tagPromises[i24];
    if (tags instanceof Promise) {
      return tags.then((val) => {
        tagPromises[i24] = val;
        return nestedNormaliseEntryTags(headTags, tagPromises, i24);
      });
    }
    if (Array.isArray(tags)) {
      headTags.push(...tags);
    } else {
      headTags.push(tags);
    }
  }
}
function normaliseEntryTags(e14) {
  const tagPromises = [];
  const input = e14.resolvedInput;
  for (const k10 in input) {
    if (!Object.prototype.hasOwnProperty.call(input, k10)) {
      continue;
    }
    const v11 = input[k10];
    if (v11 === void 0 || !ValidHeadTags.has(k10)) {
      continue;
    }
    if (Array.isArray(v11)) {
      for (const props of v11) {
        tagPromises.push(normaliseTag(k10, props, e14));
      }
      continue;
    }
    tagPromises.push(normaliseTag(k10, v11, e14));
  }
  if (tagPromises.length === 0) {
    return [];
  }
  const headTags = [];
  return thenable(nestedNormaliseEntryTags(headTags, tagPromises, 0), () => headTags.map((t12, i24) => {
    t12._e = e14._i;
    e14.mode && (t12._m = e14.mode);
    t12._p = (e14._i << TagEntityBits) + i24;
    return t12;
  }));
}
var NetworkEvents = /* @__PURE__ */ new Set(["onload", "onerror", "onabort", "onprogress", "onloadstart"]);
var TAG_WEIGHTS = {
  // tags
  base: -10,
  title: 10
};
var TAG_ALIASES = {
  // relative scores to their default values
  critical: -80,
  high: -10,
  low: 20
};
function tagWeight(tag) {
  const priority = tag.tagPriority;
  if (typeof priority === "number")
    return priority;
  let weight = 100;
  if (tag.tag === "meta") {
    if (tag.props["http-equiv"] === "content-security-policy")
      weight = -30;
    else if (tag.props.charset)
      weight = -20;
    else if (tag.props.name === "viewport")
      weight = -15;
  } else if (tag.tag === "link" && tag.props.rel === "preconnect") {
    weight = 20;
  } else if (tag.tag in TAG_WEIGHTS) {
    weight = TAG_WEIGHTS[tag.tag];
  }
  if (priority && priority in TAG_ALIASES) {
    return weight + TAG_ALIASES[priority];
  }
  return weight;
}
var SortModifiers = [{ prefix: "before:", offset: -1 }, { prefix: "after:", offset: 1 }];
var allowedMetaProperties = ["name", "property", "http-equiv"];
function tagDedupeKey(tag) {
  const { props, tag: tagName } = tag;
  if (UniqueTags.has(tagName))
    return tagName;
  if (tagName === "link" && props.rel === "canonical")
    return "canonical";
  if (props.charset)
    return "charset";
  if (props.id) {
    return `${tagName}:id:${props.id}`;
  }
  for (const n15 of allowedMetaProperties) {
    if (props[n15] !== void 0) {
      return `${tagName}:${n15}:${props[n15]}`;
    }
  }
  return false;
}
var sepSub = "%separator";
function sub(p20, token, isJson = false) {
  var _a;
  let val;
  if (token === "s" || token === "pageTitle") {
    val = p20.pageTitle;
  } else if (token.includes(".")) {
    const dotIndex = token.indexOf(".");
    val = (_a = p20[token.substring(0, dotIndex)]) == null ? void 0 : _a[token.substring(dotIndex + 1)];
  } else {
    val = p20[token];
  }
  if (val !== void 0) {
    return isJson ? (val || "").replace(/"/g, '\\"') : val || "";
  }
  return void 0;
}
var sepSubRe = new RegExp(`${sepSub}(?:\\s*${sepSub})*`, "g");
function processTemplateParams(s19, p20, sep, isJson = false) {
  if (typeof s19 !== "string" || !s19.includes("%"))
    return s19;
  let decoded = s19;
  try {
    decoded = decodeURI(s19);
  } catch {
  }
  const tokens = decoded.match(/%\w+(?:\.\w+)?/g);
  if (!tokens) {
    return s19;
  }
  const hasSepSub = s19.includes(sepSub);
  s19 = s19.replace(/%\w+(?:\.\w+)?/g, (token) => {
    if (token === sepSub || !tokens.includes(token)) {
      return token;
    }
    const re2 = sub(p20, token.slice(1), isJson);
    return re2 !== void 0 ? re2 : token;
  }).trim();
  if (hasSepSub) {
    if (s19.endsWith(sepSub))
      s19 = s19.slice(0, -sepSub.length);
    if (s19.startsWith(sepSub))
      s19 = s19.slice(sepSub.length);
    s19 = s19.replace(sepSubRe, sep).trim();
  }
  return s19;
}
function resolveTitleTemplate(template, title) {
  if (template == null)
    return title || null;
  if (typeof template === "function")
    return template(title);
  return template;
}

// node_modules/@unhead/dom/dist/index.mjs
async function renderDOMHead(head, options = {}) {
  const dom = options.document || head.resolvedOptions.document;
  if (!dom || !head.dirty)
    return;
  const beforeRenderCtx = { shouldRender: true, tags: [] };
  await head.hooks.callHook("dom:beforeRender", beforeRenderCtx);
  if (!beforeRenderCtx.shouldRender)
    return;
  if (head._domUpdatePromise) {
    return head._domUpdatePromise;
  }
  head._domUpdatePromise = new Promise(async (resolve) => {
    var _a;
    const tags = (await head.resolveTags()).map((tag) => ({
      tag,
      id: HasElementTags.has(tag.tag) ? hashTag(tag) : tag.tag,
      shouldRender: true
    }));
    let state = head._dom;
    if (!state) {
      state = {
        elMap: { htmlAttrs: dom.documentElement, bodyAttrs: dom.body }
      };
      const takenDedupeKeys = /* @__PURE__ */ new Set();
      for (const key of ["body", "head"]) {
        const children = (_a = dom[key]) == null ? void 0 : _a.children;
        for (const c24 of children) {
          const tag = c24.tagName.toLowerCase();
          if (!HasElementTags.has(tag)) {
            continue;
          }
          const t12 = {
            tag,
            props: await normaliseProps(
              c24.getAttributeNames().reduce((props, name) => ({ ...props, [name]: c24.getAttribute(name) }), {})
            ),
            innerHTML: c24.innerHTML
          };
          const dedupeKey = tagDedupeKey(t12);
          let d17 = dedupeKey;
          let i24 = 1;
          while (d17 && takenDedupeKeys.has(d17))
            d17 = `${dedupeKey}:${i24++}`;
          if (d17) {
            t12._d = d17;
            takenDedupeKeys.add(d17);
          }
          state.elMap[c24.getAttribute("data-hid") || hashTag(t12)] = c24;
        }
      }
    }
    state.pendingSideEffects = { ...state.sideEffects };
    state.sideEffects = {};
    function track(id, scope, fn) {
      const k10 = `${id}:${scope}`;
      state.sideEffects[k10] = fn;
      delete state.pendingSideEffects[k10];
    }
    function trackCtx({ id, $el, tag }) {
      const isAttrTag = tag.tag.endsWith("Attrs");
      state.elMap[id] = $el;
      if (!isAttrTag) {
        if (tag.textContent && tag.textContent !== $el.textContent) {
          $el.textContent = tag.textContent;
        }
        if (tag.innerHTML && tag.innerHTML !== $el.innerHTML) {
          $el.innerHTML = tag.innerHTML;
        }
        track(id, "el", () => {
          var _a2;
          (_a2 = state.elMap[id]) == null ? void 0 : _a2.remove();
          delete state.elMap[id];
        });
      }
      if (tag._eventHandlers) {
        for (const k10 in tag._eventHandlers) {
          if (!Object.prototype.hasOwnProperty.call(tag._eventHandlers, k10)) {
            continue;
          }
          if ($el.getAttribute(`data-${k10}`) !== "") {
            (tag.tag === "bodyAttrs" ? dom.defaultView : $el).addEventListener(
              // onload -> load
              k10.substring(2),
              tag._eventHandlers[k10].bind($el)
            );
            $el.setAttribute(`data-${k10}`, "");
          }
        }
      }
      for (const k10 in tag.props) {
        if (!Object.prototype.hasOwnProperty.call(tag.props, k10)) {
          continue;
        }
        const value = tag.props[k10];
        const ck = `attr:${k10}`;
        if (k10 === "class") {
          if (!value) {
            continue;
          }
          for (const c24 of value.split(" ")) {
            isAttrTag && track(id, `${ck}:${c24}`, () => $el.classList.remove(c24));
            !$el.classList.contains(c24) && $el.classList.add(c24);
          }
        } else if (k10 === "style") {
          if (!value) {
            continue;
          }
          for (const c24 of value.split(";")) {
            const propIndex = c24.indexOf(":");
            const k22 = c24.substring(0, propIndex).trim();
            const v11 = c24.substring(propIndex + 1).trim();
            track(id, `${ck}:${k22}`, () => {
              $el.style.removeProperty(k22);
            });
            $el.style.setProperty(k22, v11);
          }
        } else {
          $el.getAttribute(k10) !== value && $el.setAttribute(k10, value === true ? "" : String(value));
          isAttrTag && track(id, ck, () => $el.removeAttribute(k10));
        }
      }
    }
    const pending = [];
    const frag = {
      bodyClose: void 0,
      bodyOpen: void 0,
      head: void 0
    };
    for (const ctx of tags) {
      const { tag, shouldRender, id } = ctx;
      if (!shouldRender)
        continue;
      if (tag.tag === "title") {
        dom.title = tag.textContent;
        continue;
      }
      ctx.$el = ctx.$el || state.elMap[id];
      if (ctx.$el) {
        trackCtx(ctx);
      } else if (HasElementTags.has(tag.tag)) {
        pending.push(ctx);
      }
    }
    for (const ctx of pending) {
      const pos = ctx.tag.tagPosition || "head";
      ctx.$el = dom.createElement(ctx.tag.tag);
      trackCtx(ctx);
      frag[pos] = frag[pos] || dom.createDocumentFragment();
      frag[pos].appendChild(ctx.$el);
    }
    for (const ctx of tags)
      await head.hooks.callHook("dom:renderTag", ctx, dom, track);
    frag.head && dom.head.appendChild(frag.head);
    frag.bodyOpen && dom.body.insertBefore(frag.bodyOpen, dom.body.firstChild);
    frag.bodyClose && dom.body.appendChild(frag.bodyClose);
    for (const k10 in state.pendingSideEffects) {
      state.pendingSideEffects[k10]();
    }
    head._dom = state;
    await head.hooks.callHook("dom:rendered", { renders: tags });
    resolve();
  }).finally(() => {
    head._domUpdatePromise = void 0;
    head.dirty = false;
  });
  return head._domUpdatePromise;
}
function debouncedRenderDOMHead(head, options = {}) {
  const fn = options.delayFn || ((fn2) => setTimeout(fn2, 10));
  return head._domDebouncedUpdatePromise = head._domDebouncedUpdatePromise || new Promise((resolve) => fn(() => {
    return renderDOMHead(head, options).then(() => {
      delete head._domDebouncedUpdatePromise;
      resolve();
    });
  }));
}
function DomPlugin(options) {
  return defineHeadPlugin((head) => {
    var _a, _b;
    const initialPayload = ((_b = (_a = head.resolvedOptions.document) == null ? void 0 : _a.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : _b.innerHTML) || false;
    if (initialPayload) {
      head.push(JSON.parse(initialPayload));
    }
    return {
      mode: "client",
      hooks: {
        "entries:updated": (head2) => {
          debouncedRenderDOMHead(head2, options);
        }
      }
    };
  });
}

// node_modules/unhead/dist/index.mjs
var UsesMergeStrategy = /* @__PURE__ */ new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
var DedupePlugin = defineHeadPlugin({
  hooks: {
    "tag:normalise": ({ tag }) => {
      if (tag.props.hid) {
        tag.key = tag.props.hid;
        delete tag.props.hid;
      }
      if (tag.props.vmid) {
        tag.key = tag.props.vmid;
        delete tag.props.vmid;
      }
      if (tag.props.key) {
        tag.key = tag.props.key;
        delete tag.props.key;
      }
      const generatedKey = tagDedupeKey(tag);
      if (generatedKey && !generatedKey.startsWith("meta:og:") && !generatedKey.startsWith("meta:twitter:")) {
        delete tag.key;
      }
      const dedupe = generatedKey || (tag.key ? `${tag.tag}:${tag.key}` : false);
      if (dedupe)
        tag._d = dedupe;
    },
    "tags:resolve": (ctx) => {
      const deduping = /* @__PURE__ */ Object.create(null);
      for (const tag of ctx.tags) {
        const dedupeKey = (tag.key ? `${tag.tag}:${tag.key}` : tag._d) || hashTag(tag);
        const dupedTag = deduping[dedupeKey];
        if (dupedTag) {
          let strategy = tag == null ? void 0 : tag.tagDuplicateStrategy;
          if (!strategy && UsesMergeStrategy.has(tag.tag))
            strategy = "merge";
          if (strategy === "merge") {
            const oldProps = dupedTag.props;
            if (oldProps.style && tag.props.style) {
              if (oldProps.style[oldProps.style.length - 1] !== ";") {
                oldProps.style += ";";
              }
              tag.props.style = `${oldProps.style} ${tag.props.style}`;
            }
            if (oldProps.class && tag.props.class) {
              tag.props.class = `${oldProps.class} ${tag.props.class}`;
            } else if (oldProps.class) {
              tag.props.class = oldProps.class;
            }
            deduping[dedupeKey].props = {
              ...oldProps,
              ...tag.props
            };
            continue;
          } else if (tag._e === dupedTag._e) {
            dupedTag._duped = dupedTag._duped || [];
            tag._d = `${dupedTag._d}:${dupedTag._duped.length + 1}`;
            dupedTag._duped.push(tag);
            continue;
          } else if (tagWeight(tag) > tagWeight(dupedTag)) {
            continue;
          }
        }
        const hasProps = tag.innerHTML || tag.textContent || Object.keys(tag.props).length !== 0;
        if (!hasProps && HasElementTags.has(tag.tag)) {
          delete deduping[dedupeKey];
          continue;
        }
        deduping[dedupeKey] = tag;
      }
      const newTags = [];
      for (const key in deduping) {
        const tag = deduping[key];
        const dupes = tag._duped;
        newTags.push(tag);
        if (dupes) {
          delete tag._duped;
          newTags.push(...dupes);
        }
      }
      ctx.tags = newTags;
      ctx.tags = ctx.tags.filter((t12) => !(t12.tag === "meta" && (t12.props.name || t12.props.property) && !t12.props.content));
    }
  }
});
var ValidEventTags = /* @__PURE__ */ new Set(["script", "link", "bodyAttrs"]);
var EventHandlersPlugin = defineHeadPlugin((head) => ({
  hooks: {
    "tags:resolve": (ctx) => {
      for (const tag of ctx.tags) {
        if (!ValidEventTags.has(tag.tag)) {
          continue;
        }
        const props = tag.props;
        for (const key in props) {
          if (key[0] !== "o" || key[1] !== "n") {
            continue;
          }
          if (!Object.prototype.hasOwnProperty.call(props, key)) {
            continue;
          }
          const value = props[key];
          if (typeof value !== "function") {
            continue;
          }
          if (head.ssr && NetworkEvents.has(key)) {
            props[key] = `this.dataset.${key}fired = true`;
          } else {
            delete props[key];
          }
          tag._eventHandlers = tag._eventHandlers || {};
          tag._eventHandlers[key] = value;
        }
        if (head.ssr && tag._eventHandlers && (tag.props.src || tag.props.href)) {
          tag.key = tag.key || hashCode(tag.props.src || tag.props.href);
        }
      }
    },
    "dom:renderTag": ({ $el, tag }) => {
      var _a, _b;
      const dataset = $el == null ? void 0 : $el.dataset;
      if (!dataset) {
        return;
      }
      for (const k10 in dataset) {
        if (!k10.endsWith("fired")) {
          continue;
        }
        const ek = k10.slice(0, -5);
        if (!NetworkEvents.has(ek)) {
          continue;
        }
        (_b = (_a = tag._eventHandlers) == null ? void 0 : _a[ek]) == null ? void 0 : _b.call($el, new Event(ek.substring(2)));
      }
    }
  }
}));
var DupeableTags = /* @__PURE__ */ new Set(["link", "style", "script", "noscript"]);
var HashKeyedPlugin = defineHeadPlugin({
  hooks: {
    "tag:normalise": ({ tag }) => {
      if (tag.key && DupeableTags.has(tag.tag)) {
        tag.props["data-hid"] = tag._h = hashCode(tag.key);
      }
    }
  }
});
var PayloadPlugin = defineHeadPlugin({
  mode: "server",
  hooks: {
    "tags:beforeResolve": (ctx) => {
      const payload = {};
      let hasPayload = false;
      for (const tag of ctx.tags) {
        if (tag._m !== "server" || tag.tag !== "titleTemplate" && tag.tag !== "templateParams" && tag.tag !== "title") {
          continue;
        }
        payload[tag.tag] = tag.tag === "title" || tag.tag === "titleTemplate" ? tag.textContent : tag.props;
        hasPayload = true;
      }
      if (hasPayload) {
        ctx.tags.push({
          tag: "script",
          innerHTML: JSON.stringify(payload),
          props: { id: "unhead:payload", type: "application/json" }
        });
      }
    }
  }
});
var SortPlugin = defineHeadPlugin({
  hooks: {
    "tags:resolve": (ctx) => {
      var _a;
      for (const tag of ctx.tags) {
        if (typeof tag.tagPriority !== "string") {
          continue;
        }
        for (const { prefix, offset: offset2 } of SortModifiers) {
          if (!tag.tagPriority.startsWith(prefix)) {
            continue;
          }
          const key = tag.tagPriority.substring(prefix.length);
          const position = (_a = ctx.tags.find((tag2) => tag2._d === key)) == null ? void 0 : _a._p;
          if (position !== void 0) {
            tag._p = position + offset2;
            break;
          }
        }
      }
      ctx.tags.sort((a23, b14) => {
        const aWeight = tagWeight(a23);
        const bWeight = tagWeight(b14);
        if (aWeight < bWeight) {
          return -1;
        } else if (aWeight > bWeight) {
          return 1;
        }
        return a23._p - b14._p;
      });
    }
  }
});
var SupportedAttrs = {
  meta: "content",
  link: "href",
  htmlAttrs: "lang"
};
var contentAttrs = ["innerHTML", "textContent"];
var TemplateParamsPlugin = defineHeadPlugin((head) => ({
  hooks: {
    "tags:resolve": (ctx) => {
      var _a;
      const { tags } = ctx;
      let templateParams;
      for (let i24 = 0; i24 < tags.length; i24 += 1) {
        const tag = tags[i24];
        if (tag.tag !== "templateParams") {
          continue;
        }
        templateParams = ctx.tags.splice(i24, 1)[0].props;
        i24 -= 1;
      }
      const params2 = templateParams || {};
      const sep = params2.separator || "|";
      delete params2.separator;
      params2.pageTitle = processTemplateParams(
        // find templateParams
        params2.pageTitle || ((_a = tags.find((tag) => tag.tag === "title")) == null ? void 0 : _a.textContent) || "",
        params2,
        sep
      );
      for (const tag of tags) {
        if (tag.processTemplateParams === false) {
          continue;
        }
        const v11 = SupportedAttrs[tag.tag];
        if (v11 && typeof tag.props[v11] === "string") {
          tag.props[v11] = processTemplateParams(tag.props[v11], params2, sep);
        } else if (tag.processTemplateParams || tag.tag === "titleTemplate" || tag.tag === "title") {
          for (const p20 of contentAttrs) {
            if (typeof tag[p20] === "string")
              tag[p20] = processTemplateParams(tag[p20], params2, sep, tag.tag === "script" && tag.props.type.endsWith("json"));
          }
        }
      }
      head._templateParams = params2;
      head._separator = sep;
    },
    "tags:afterResolve": ({ tags }) => {
      let title;
      for (let i24 = 0; i24 < tags.length; i24 += 1) {
        const tag = tags[i24];
        if (tag.tag === "title" && tag.processTemplateParams !== false) {
          title = tag;
        }
      }
      if (title == null ? void 0 : title.textContent) {
        title.textContent = processTemplateParams(title.textContent, head._templateParams, head._separator);
      }
    }
  }
}));
var TitleTemplatePlugin = defineHeadPlugin({
  hooks: {
    "tags:resolve": (ctx) => {
      const { tags } = ctx;
      let titleTag;
      let titleTemplateTag;
      for (let i24 = 0; i24 < tags.length; i24 += 1) {
        const tag = tags[i24];
        if (tag.tag === "title") {
          titleTag = tag;
        } else if (tag.tag === "titleTemplate") {
          titleTemplateTag = tag;
        }
      }
      if (titleTemplateTag && titleTag) {
        const newTitle = resolveTitleTemplate(
          titleTemplateTag.textContent,
          titleTag.textContent
        );
        if (newTitle !== null) {
          titleTag.textContent = newTitle || titleTag.textContent;
        } else {
          ctx.tags.splice(ctx.tags.indexOf(titleTag), 1);
        }
      } else if (titleTemplateTag) {
        const newTitle = resolveTitleTemplate(
          titleTemplateTag.textContent
        );
        if (newTitle !== null) {
          titleTemplateTag.textContent = newTitle;
          titleTemplateTag.tag = "title";
          titleTemplateTag = void 0;
        }
      }
      if (titleTemplateTag) {
        ctx.tags.splice(ctx.tags.indexOf(titleTemplateTag), 1);
      }
    }
  }
});
var XSSPlugin = defineHeadPlugin({
  hooks: {
    "tags:afterResolve": (ctx) => {
      for (const tag of ctx.tags) {
        if (typeof tag.innerHTML === "string") {
          if (tag.innerHTML && (tag.props.type === "application/ld+json" || tag.props.type === "application/json")) {
            tag.innerHTML = tag.innerHTML.replace(/</g, "\\u003C");
          } else {
            tag.innerHTML = tag.innerHTML.replace(new RegExp(`</${tag.tag}`, "g"), `<\\/${tag.tag}`);
          }
        }
      }
    }
  }
});
var activeHead;
function createHead(options = {}) {
  const head = createHeadCore(options);
  head.use(DomPlugin());
  return activeHead = head;
}
function filterMode(mode, ssr) {
  return !mode || mode === "server" && ssr || mode === "client" && !ssr;
}
function createHeadCore(options = {}) {
  const hooks = createHooks();
  hooks.addHooks(options.hooks || {});
  options.document = options.document || (IsBrowser ? document : void 0);
  const ssr = !options.document;
  const updated = () => {
    head.dirty = true;
    hooks.callHook("entries:updated", head);
  };
  let entryCount = 0;
  let entries = [];
  const plugins = [];
  const head = {
    plugins,
    dirty: false,
    resolvedOptions: options,
    hooks,
    headEntries() {
      return entries;
    },
    use(p20) {
      const plugin = typeof p20 === "function" ? p20(head) : p20;
      if (!plugin.key || !plugins.some((p22) => p22.key === plugin.key)) {
        plugins.push(plugin);
        filterMode(plugin.mode, ssr) && hooks.addHooks(plugin.hooks || {});
      }
    },
    push(input, entryOptions) {
      entryOptions == null ? true : delete entryOptions.head;
      const entry = {
        _i: entryCount++,
        input,
        ...entryOptions
      };
      if (filterMode(entry.mode, ssr)) {
        entries.push(entry);
        updated();
      }
      return {
        dispose() {
          entries = entries.filter((e14) => e14._i !== entry._i);
          updated();
        },
        // a patch is the same as creating a new entry, just a nice DX
        patch(input2) {
          for (const e14 of entries) {
            if (e14._i === entry._i) {
              e14.input = entry.input = input2;
            }
          }
          updated();
        }
      };
    },
    async resolveTags() {
      const resolveCtx = { tags: [], entries: [...entries] };
      await hooks.callHook("entries:resolve", resolveCtx);
      for (const entry of resolveCtx.entries) {
        const resolved = entry.resolvedInput || entry.input;
        entry.resolvedInput = await (entry.transform ? entry.transform(resolved) : resolved);
        if (entry.resolvedInput) {
          for (const tag of await normaliseEntryTags(entry)) {
            const tagCtx = { tag, entry, resolvedOptions: head.resolvedOptions };
            await hooks.callHook("tag:normalise", tagCtx);
            resolveCtx.tags.push(tagCtx.tag);
          }
        }
      }
      await hooks.callHook("tags:beforeResolve", resolveCtx);
      await hooks.callHook("tags:resolve", resolveCtx);
      await hooks.callHook("tags:afterResolve", resolveCtx);
      return resolveCtx.tags;
    },
    ssr
  };
  [
    DedupePlugin,
    PayloadPlugin,
    EventHandlersPlugin,
    HashKeyedPlugin,
    SortPlugin,
    TemplateParamsPlugin,
    TitleTemplatePlugin,
    XSSPlugin,
    ...(options == null ? void 0 : options.plugins) || []
  ].forEach((p20) => head.use(p20));
  head.hooks.callHook("init", head);
  return head;
}
function getActiveHead() {
  return activeHead;
}
var ScriptProxyTarget = Symbol("ScriptProxyTarget");
function scriptProxy() {
}
scriptProxy[ScriptProxyTarget] = true;

// node_modules/@unhead/vue/dist/shared/vue.ziyDaVMR.mjs
var Vue3 = version[0] === "3";
function resolveUnref(r16) {
  return typeof r16 === "function" ? r16() : unref(r16);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r16) => resolveUnrefHeadInput(r16));
  if (typeof root === "object") {
    const resolved = {};
    for (const k10 in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k10)) {
        continue;
      }
      if (k10 === "titleTemplate" || k10[0] === "o" && k10[1] === "n") {
        resolved[k10] = unref(root[k10]);
        continue;
      }
      resolved[k10] = resolveUnrefHeadInput(root[k10]);
    }
    return resolved;
  }
  return root;
}
var VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});
var headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createHead2(options = {}) {
  options.domDelayFn = options.domDelayFn || ((fn) => nextTick(() => setTimeout(() => fn(), 0)));
  const head = createHead(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__unhead_injection_handler__";
function injectHead() {
  if (globalKey in _global) {
    return _global[globalKey]();
  }
  const head = inject(headSymbol);
  if (!head && true)
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}

// node_modules/@unhead/vue/dist/shared/vue.-sixQ7xP.mjs
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e14) => {
    entry.patch(e14);
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}

// node_modules/@unhead/vue/dist/index.mjs
var coreComposableNames = [
  "injectHead"
];
var unheadVueComposablesImports = {
  "@unhead/vue": [...coreComposableNames, ...composableNames]
};
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t12) {
      const meta2 = unpackMeta({ ...t12._flatMeta });
      delete t12._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t12,
        meta: meta2
      };
    }
  });
}

// node_modules/@scalar/api-reference/dist/hooks/useDarkModeState.js
var t2 = ref(false);
function c(r16, n15) {
  var i24;
  const d17 = () => {
    var o11, a23;
    const e14 = typeof window < "u" ? (o11 = window.localStorage) == null ? void 0 : o11.getItem("isDark") : null;
    return typeof e14 == "string" ? !!JSON.parse(e14) : !!(typeof window < "u" && typeof (window == null ? void 0 : window.matchMedia) == "function" && ((a23 = window == null ? void 0 : window.matchMedia("(prefers-color-scheme: dark)")) != null && a23.matches));
  }, l14 = () => {
    var e14;
    t2.value = !t2.value, typeof window < "u" && ((e14 = window == null ? void 0 : window.localStorage) == null || e14.setItem("isDark", JSON.stringify(t2.value)));
  };
  function s19(e14) {
    var o11;
    t2.value = e14, typeof window < "u" && ((o11 = window == null ? void 0 : window.localStorage) == null || o11.setItem("isDark", JSON.stringify(t2.value)));
  }
  return n15 ? t2.value = n15 === "dark" : t2.value = (typeof window > "u" ? null : JSON.parse(((i24 = window.localStorage) == null ? void 0 : i24.getItem("isDark")) || "null")) ?? r16 ?? d17(), watch(
    t2,
    (e14) => {
      typeof document > "u" || (document.body.classList.toggle("dark-mode", e14), document.body.classList.toggle("light-mode", !e14));
    },
    { immediate: true }
  ), {
    isDark: t2,
    toggleDarkMode: l14,
    setDarkMode: s19
  };
}

// node_modules/@scalar/openapi-parser/dist/utils/load/plugins/fetchUrls.js
var t3 = { limit: 20 };
var e = (e14) => {
  let s19 = 0;
  const r16 = { ...t3, ...e14 };
  return { check: (t12) => "string" == typeof t12 && !(!t12.startsWith("http://") && !t12.startsWith("https://")), async get(t12) {
    if (false !== (r16 == null ? void 0 : r16.limit) && s19 >= (r16 == null ? void 0 : r16.limit)) console.warn(`[fetchUrls] Maximum number of requests reeached (${r16 == null ? void 0 : r16.limit}), skipping request`);
    else try {
      s19++;
      const e15 = await ((r16 == null ? void 0 : r16.fetch) ? r16.fetch(t12) : fetch(t12));
      return await e15.text();
    } catch (e15) {
      console.error("[fetchUrls]", e15.message, `(${t12})`);
    }
  } };
};

// node_modules/@scalar/api-reference/dist/helpers/deepMerge.js
function c2(f18, o11) {
  for (const [e14, n15] of Object.entries(f18))
    n15 !== null && typeof n15 == "object" ? (o11[e14] ?? (o11[e14] = new n15.__proto__.constructor()), c2(n15, o11[e14])) : typeof n15 < "u" && (o11[e14] = n15);
  return o11;
}

// node_modules/@scalar/api-reference/dist/helpers/createEmptySpecification.js
function i3(e14) {
  return c2(e14 ?? {}, {
    info: {
      title: "",
      description: "",
      termsOfService: "",
      version: "",
      license: {
        name: "",
        url: ""
      },
      contact: {
        email: ""
      }
    },
    externalDocs: {
      description: "",
      url: ""
    },
    servers: [],
    tags: []
  });
}

// node_modules/@scalar/api-reference/dist/legacy/fixtures/httpRequestMethods.js
var t4 = [
  "GET",
  "POST",
  "PUT",
  "HEAD",
  "DELETE",
  "PATCH",
  "OPTIONS",
  "CONNECT",
  "TRACE"
];
function T(e14) {
  return t4.includes(e14);
}

// node_modules/@scalar/api-reference/dist/legacy/helpers/normalizeRequestMethod.js
var e2 = "GET";
var r = (t12) => {
  if (typeof t12 != "string")
    return console.warn(
      `Request method is not a string. Using ${e2} as the default.`
    ), e2;
  const o11 = t12.trim().toUpperCase();
  return T(o11) ? o11 : (console.warn(
    `${t12} is not a valid request method. Using ${e2} as the default.`
  ), e2);
};

// node_modules/@scalar/api-reference/dist/helpers/parse.js
var D2 = (p20, {
  proxy: t12
} = {}) => new Promise(async (a23, h10) => {
  var s19;
  try {
    if (!p20)
      return a23(
        u(i3())
      );
    const i24 = performance.now(), { filesystem: n15 } = await s(p20, {
      plugins: [
        e({
          fetch: (o11) => fetch(t12 ? redirectToProxy(t12, o11) : o11)
        })
      ]
    }), { schema: e14, errors: r16 } = await i(n15), f18 = performance.now();
    return console.log(`dereference: ${Math.round(f18 - i24)} ms`), r16 != null && r16.length && console.warn(
      `Please open an issue on https://github.com/scalar/scalar
`,
      `Scalar OpenAPI Parser Warning:
`,
      r16
    ), e14 === void 0 ? (h10(((s19 = r16 == null ? void 0 : r16[0]) == null ? void 0 : s19.message) ?? "Failed to parse the OpenAPI file."), a23(
      u(i3())
    )) : a23(u(e14));
  } catch (i24) {
    h10(i24);
  }
  return a23(
    u(i3())
  );
});
var u = (p20) => {
  let t12 = {};
  p20 && typeof p20 == "object" ? t12 = structuredClone(p20) : t12 = i3(), t12.tags || (t12.tags = []), t12.paths || (t12.paths = {});
  const a23 = {};
  return Object.keys(t12.webhooks ?? {}).forEach((s19) => {
    var i24;
    Object.keys(((i24 = t12.webhooks) == null ? void 0 : i24[s19]) ?? {}).forEach((n15) => {
      var r16, f18, o11;
      const e14 = (r16 = t12.webhooks) == null ? void 0 : r16[s19][n15];
      (e14 == null ? void 0 : e14["x-internal"]) !== true && (a23[s19] === void 0 && (a23[s19] = {}), a23[s19][n15] = {
        // Transformed data
        httpVerb: r(n15),
        path: s19,
        operationId: (e14 == null ? void 0 : e14.operationId) || s19,
        name: (e14 == null ? void 0 : e14.summary) || s19 || "",
        description: (e14 == null ? void 0 : e14.description) || "",
        pathParameters: (o11 = (f18 = t12.paths) == null ? void 0 : f18[s19]) == null ? void 0 : o11.parameters,
        // Original webhook
        information: {
          ...e14
        }
      });
    });
  }), Object.keys(t12.paths).forEach((s19) => {
    Object.keys(t12.paths[s19]).filter(
      (n15) => t4.includes(n15.toUpperCase())
    ).forEach((n15) => {
      var f18, o11, g7, w8, y9, x7;
      const e14 = t12.paths[s19][n15];
      if (e14 === void 0 || e14["x-internal"] === true)
        return;
      const r16 = {
        httpVerb: r(n15),
        path: s19,
        operationId: e14.operationId || s19,
        name: e14.summary || s19 || "",
        description: e14.description || "",
        information: {
          ...e14
        },
        pathParameters: (o11 = (f18 = t12.paths) == null ? void 0 : f18[s19]) == null ? void 0 : o11.parameters
      };
      if (!e14.tags || e14.tags.length === 0) {
        (g7 = t12.tags) != null && g7.find(
          (c24) => c24.name === "default"
        ) || (w8 = t12.tags) == null || w8.push({
          name: "default",
          description: "",
          operations: []
        });
        const d17 = (y9 = t12.tags) == null ? void 0 : y9.findIndex(
          (c24) => c24.name === "default"
        );
        d17 >= 0 && ((x7 = t12.tags[d17]) == null || x7.operations.push(r16));
      } else
        e14.tags.forEach((d17) => {
          var I8, O10, P11;
          const c24 = (I8 = t12.tags) == null ? void 0 : I8.findIndex(
            // @ts-expect-error TODO: The types are just screwed, needs refactoring
            (R8) => R8.name === d17
          );
          c24 === -1 && ((O10 = t12.tags) == null || O10.push({
            name: d17,
            description: ""
          }));
          const l14 = c24 !== -1 ? c24 : t12.tags.length - 1;
          typeof ((P11 = t12.tags[l14]) == null ? void 0 : P11.operations) > "u" && (t12.tags[l14].operations = []), t12.tags[l14].operations.push(r16);
        });
    });
  }), {
    ...t12,
    webhooks: a23
  };
};

// node_modules/@scalar/api-reference/dist/hooks/useReactiveSpec.js
var y = async ({ url: e14, content: r16 }, o11) => {
  if (e14) {
    const i24 = performance.now(), s19 = isValidUrl(e14) ? await fetchSpecFromUrl(e14, o11) : await fetchSpecFromUrl(e14), n15 = performance.now();
    return console.log(`fetch: ${Math.round(n15 - i24)} ms (${e14})`), console.log("size:", Math.round(s19.length / 1024), "kB"), s19;
  }
  const t12 = typeof r16 == "function" ? r16() : r16;
  if (typeof t12 == "string")
    return t12;
  if (typeof t12 == "object")
    return prettyPrintJson(t12);
};
function C2({
  specConfig: e14,
  proxy: r16
}) {
  const o11 = ref(""), t12 = reactive(i3()), i24 = ref(null);
  function s19(n15) {
    return n15 ? D2(n15, {
      proxy: r16 ? toValue(r16) : void 0
    }).then((c24) => {
      i24.value = null, Object.assign(t12, {
        servers: [],
        ...c24
      });
    }).catch((c24) => {
      i24.value = c24.toString();
    }) : Object.assign(t12, i3());
  }
  return watch(
    () => toValue(e14),
    async (n15) => {
      var c24;
      if (n15) {
        const p20 = (c24 = await y(n15, toValue(r16))) == null ? void 0 : c24.trim();
        typeof p20 == "string" && (o11.value = p20);
      }
    },
    { immediate: true, deep: true }
  ), watch(o11, () => {
    s19(o11.value);
  }), {
    rawSpec: o11,
    parsedSpec: t12,
    specErrors: i24
  };
}

// node_modules/@scalar/api-reference/dist/components/api-client-bus.js
var o2 = Symbol();
var e3 = Symbol();
var n = useEventBus(o2);
var a = useEventBus(e3);

// node_modules/@scalar/api-reference/dist/legacy/helpers/getUrlFromServerState.js
function i4(l14) {
  var o11;
  const r16 = (o11 = l14 == null ? void 0 : l14.servers) == null ? void 0 : o11[l14.selectedServer ?? 0];
  return typeof (r16 == null ? void 0 : r16.url) == "string" ? replaceVariables(r16 == null ? void 0 : r16.url, l14.variables) : r16 == null ? void 0 : r16.url;
}

// node_modules/@scalar/api-reference/dist/legacy/stores/useAuthenticationStore.js
var a2 = () => ({
  preferredSecurityScheme: null,
  // In case the spec has no security and the user would like to add some
  customSecurity: false,
  http: {
    basic: {
      username: "",
      password: ""
    },
    bearer: {
      token: ""
    }
  },
  apiKey: {
    token: ""
  },
  oAuth2: {
    username: "",
    password: "",
    clientId: "",
    scopes: [],
    accessToken: "",
    state: ""
  }
});
var t5 = reactive(
  ssrState["useGlobalStore-authentication"] ?? a2()
);
var n2 = (e14) => Object.assign(t5, e14);
var i5 = () => ({
  authentication: t5,
  setAuthentication: n2
});

// node_modules/@scalar/api-reference/dist/legacy/stores/useServerStore.js
var s3 = () => ({
  selectedServer: null,
  servers: [],
  variables: {}
});
var e4 = reactive(s3());
var c3 = (r16) => {
  Object.assign(e4, {
    ...e4,
    ...r16
  });
};
var v3 = () => ({
  server: e4,
  setServer: c3
});

// node_modules/@scalar/api-reference/dist/components/ApiClientModal.vue.js
var b = defineComponent({
  __name: "ApiClientModal",
  props: {
    proxyUrl: {},
    spec: {},
    servers: {}
  },
  setup(u12) {
    const t12 = u12, o11 = ref(null), p20 = ref(null), { authentication: c24 } = i5(), { server: i24 } = v3();
    return onMounted(async () => {
      if (!o11.value) return;
      const { createApiClientModal: r16 } = await import("./dist-DJW4FNQU.js"), { app: n15, open: m29, updateAuth: f18, updateServerUrl: d17, modalState: v11, updateSpec: a23 } = await r16(o11.value, {
        spec: t12.spec ?? {},
        proxyUrl: t12.proxyUrl,
        servers: t12.servers
      });
      a.emit(v11), n.on((e14) => {
        if (e14.open) {
          f18(c24);
          const s19 = i4(i24);
          s19 && d17(s19), m29(e14.open);
        }
        e14.updateSpec && a23(e14.updateSpec);
      }), watch(
        () => t12.spec,
        (e14) => e14 && a23(e14),
        { deep: true }
      ), p20.value = n15;
    }), onBeforeUnmount(() => {
      var r16;
      return (r16 = p20.value) == null ? void 0 : r16.unmount();
    }), (r16, n15) => (openBlock(), createElementBlock("div", {
      ref_key: "el",
      ref: o11
    }, null, 512));
  }
});

// node_modules/@scalar/api-reference/dist/components/GettingStarted.vue2.js
var x = (s19) => (pushScopeId("data-v-391b4e37"), s19 = s19(), popScopeId(), s19);
var k2 = { class: "start custom-scroll" };
var Z = { class: "start-copy" };
var F2 = createStaticVNode('<div class="start-logo" data-v-391b4e37><svg height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg" data-v-391b4e37><path d="M18 0a18 18 0 1 1 0 36 18 18 0 0 1 0-36Zm11.2 6.5c-3.3-3.3-11.1-1-17.4 5.3-6.2 6.3-8.6 14-5.3 17.4 3.3 3.3 11 .9 17.3-5.4 6.3-6.2 8.7-14 5.4-17.3ZM17.6 12a6.3 6.3 0 1 1 0 12.7 6.3 6.3 0 0 1 0-12.7Z" fill="currentColor" fill-rule="evenodd" data-v-391b4e37></path></svg></div><h1 class="start-h1" data-v-391b4e37>Swagger Editor</h1><p class="start-p" data-v-391b4e37> Welcome to the Scalar API References + Swagger Editor, a Free &amp; Open-Source tool that takes your Swagger/OAS file and generates Beautiful API references. </p>', 3);
var B2 = { class: "start-cta" };
var I2 = { class: "start-row" };
var E = createStaticVNode('<div class="start-section start-section-integrations" data-v-391b4e37><div class="start-h2" data-v-391b4e37>INTEGRATIONS</div><a class="start-item" href="https://github.com/scalar/scalar/tree/main/packages/fastify-api-reference#readme" target="_blank" data-v-391b4e37><svg fill="currentColor" height="16" viewBox="0 0 19 16" width="19" xmlns="http://www.w3.org/2000/svg" data-v-391b4e37><path d="m18.2 3.1.8-2V.9l-4.7 1.3C15.2 1 15 0 15 0s-2.5 1.6-4.3 1.5c-2 0-3.6.8-4 1-1.8 1.2-2.5 3.3-3.2 3.8L0 8.9 2.3 8l-2 2.5c.2.3 1.2 1.6 2.1 1.3l.4-.1 1.6.5-.7-1 .2-.2.9.3-.1-.8.9.3-.1-.8.3-.1 1-3.5 3.7-2.6-.3.7A4 4 0 0 1 8 7l-.6.2c-.5.5-.7.7-.8 2.5a2 2 0 0 1 1 0c1.6.4 2.2 2.3 1.7 2.9l-.7.6H8v.6h-.7v.5l-.2.2c-.7 0-1.4-.6-1.4-.6 0 .5.4 1.3.4 1.3s1.7 1.1 2.7.7c1-.4.7-2.3 2.8-3.2l3.3-.9.8-2.2-1.7.5v-2l2.5-.6.9-2.2-3.4.9v-2l4.2-1.1Z" fill="currentColor" fill-rule="nonzero" data-v-391b4e37></path></svg><span data-v-391b4e37>Fastify</span></a><a class="start-item" href="https://github.com/scalar/scalar/tree/main#from-a-cdn" target="_blank" data-v-391b4e37><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-391b4e37><g data-v-391b4e37><path d="M22.5 1.5h-21A1.5 1.5 0 0 0 0 3v3a1.5 1.5 0 0 0 1.5 1.5h21A1.5 1.5 0 0 0 24 6V3a1.5 1.5 0 0 0-1.5-1.5Zm-19.25 3A1.25 1.25 0 1 1 4.5 5.75 1.25 1.25 0 0 1 3.25 4.5ZM8.5 5.75A1.25 1.25 0 1 1 9.75 4.5 1.25 1.25 0 0 1 8.5 5.75Z" fill="currentColor" data-v-391b4e37></path><path d="M22.5 9h-21A1.5 1.5 0 0 0 0 10.5v3A1.5 1.5 0 0 0 1.5 15h21a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 22.5 9ZM3.25 12a1.25 1.25 0 1 1 1.25 1.25A1.25 1.25 0 0 1 3.25 12Zm5.25 1.25A1.25 1.25 0 1 1 9.75 12a1.25 1.25 0 0 1-1.25 1.25Z" fill="currentColor" data-v-391b4e37></path><path d="M22.5 16.5h-21A1.5 1.5 0 0 0 0 18v3a1.5 1.5 0 0 0 1.5 1.5h21A1.5 1.5 0 0 0 24 21v-3a1.5 1.5 0 0 0-1.5-1.5Zm-19.25 3a1.25 1.25 0 1 1 1.25 1.25 1.25 1.25 0 0 1-1.25-1.25Zm5.25 1.25a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.25 1.25Z" fill="currentColor" data-v-391b4e37></path></g></svg><span data-v-391b4e37>CDN</span></a><a class="start-item" href="https://github.com/scalar/scalar/tree/main#with-vuejs" target="_blank" data-v-391b4e37><svg height="170" viewBox="0 0 196.3 170" width="196.3" xmlns="http://www.w3.org/2000/svg" data-v-391b4e37><g fill="currentColor" fill-rule="nonzero" data-v-391b4e37><polygon points="39.23 0 0 0 2.9450761 5.1010782 98.16 170.02 196.32 0 157.06 0 98.16 102.01 42.175701 5.0991171" data-v-391b4e37></polygon><polygon points="75.5 2.009956e-14 0 2.009956e-14 2.94 5.1 78.44871 5.1 98.16 39.26 117.87937 5.1 193.38 5.1 196.325 0 120.82 7.8065636e-15 114.97322 2.009956e-14 98.16 29.037153 81.35 2.009956e-14" data-v-391b4e37></polygon></g></svg><span data-v-391b4e37>Vue</span></a><a class="start-item" href="https://github.com/scalar/scalar/tree/main#with-react" target="_blank" data-v-391b4e37><svg height="23.3" viewBox="0 0 22 23.3" width="22" xmlns="http://www.w3.org/2000/svg" data-v-391b4e37><g fill="none" fill-rule="evenodd" data-v-391b4e37><circle cx="11" cy="11.6" fill="currentColor" fill-rule="nonzero" r="2" data-v-391b4e37></circle><g stroke="currentColor" data-v-391b4e37><ellipse cx="11" cy="11.6" rx="11" ry="4.2" data-v-391b4e37></ellipse><ellipse cx="11" cy="11.6" rx="11" ry="4.2" transform="rotate(60 11 11.6)" data-v-391b4e37></ellipse><ellipse cx="11" cy="11.6" rx="11" ry="4.2" transform="rotate(120 11 11.6)" data-v-391b4e37></ellipse></g></g></svg><span data-v-391b4e37>React</span></a></div>', 1);
var M2 = { class: "start-section start-section-colors" };
var N2 = x(() => createBaseVNode("p", { class: "start-h2" }, "THEMING", -1));
var P = ["onClick"];
var O = createStaticVNode('<p class="start-h1" data-v-391b4e37>Features</p><ul class="start-ul" data-v-391b4e37><li data-v-391b4e37><p class="start-h3" data-v-391b4e37>Customize</p> Bring your typography &amp; color palettes, or use our themes! </li><li data-v-391b4e37><p class="start-h3" data-v-391b4e37>Testing</p> A deeply integrated Rest API Client (Also Free &amp; Open-Source) </li><li data-v-391b4e37><p class="start-h3" data-v-391b4e37>Search</p> Fully integrated Search (Using fuse.js) </li><li data-v-391b4e37><p class="start-h3" data-v-391b4e37>Hosting</p> Free subdomain hosting on https://apidocumentation.com </li><li data-v-391b4e37><p class="start-h3" data-v-391b4e37>OpenAPI &amp; Swagger</p> Support for OpenAPI 3.1, OpenAPI 3.0, and Swagger 2.0 </li><li data-v-391b4e37><p class="start-h3" data-v-391b4e37>Code Samples</p> Code samples to show off your API in most popular languages </li></ul>', 2);
var $ = defineComponent({
  __name: "GettingStarted",
  props: {
    theme: {}
  },
  emits: ["changeTheme", "loadSwaggerFile", "linkSwaggerFile", "updateContent"],
  setup(s19, { emit: g7 }) {
    const m29 = g7, u12 = [
      "default",
      "alternate",
      "moon",
      "purple",
      "solarized",
      "bluePlanet",
      "saturn",
      "kepler",
      "mars",
      "deepSpace"
    ];
    async function b14() {
      const e14 = await fetch(
        "https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.yaml"
      );
      m29("updateContent", await e14.text());
    }
    return (e14, o11) => (openBlock(), createElementBlock("div", k2, [
      createBaseVNode("div", Z, [
        F2,
        createBaseVNode("div", B2, [
          createVNode(unref(W), {
            fullWidth: "",
            onClick: b14
          }, {
            default: withCtx(() => [
              createTextVNode(" Show Example ")
            ]),
            _: 1
          }),
          createVNode(unref(W), {
            fullWidth: "",
            variant: "outlined",
            onClick: o11[0] || (o11[0] = (t12) => e14.$emit("loadSwaggerFile"))
          }, {
            default: withCtx(() => [
              createTextVNode(" Upload File ")
            ]),
            _: 1
          })
        ])
      ]),
      createBaseVNode("div", I2, [
        E,
        createBaseVNode("div", M2, [
          N2,
          (openBlock(), createElementBlock(Fragment, null, renderList(u12, (t12) => createBaseVNode("div", {
            key: t12,
            class: normalizeClass(["start-item", { "start-item-active": t12 === e14.theme }]),
            onClick: (T8) => e14.$emit("changeTheme", { id: t12, label: unref(A)[t12] })
          }, toDisplayString(unref(A)[t12]), 11, P)), 64))
        ])
      ]),
      O
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/_virtual/_plugin-vue_export-helper.js
var s4 = (t12, e14) => {
  const o11 = t12.__vccOpts || t12;
  for (const [r16, c24] of e14)
    o11[r16] = c24;
  return o11;
};

// node_modules/@scalar/api-reference/dist/components/GettingStarted.vue.js
var m3 = s4($, [["__scopeId", "data-v-391b4e37"]]);

// node_modules/@scalar/api-reference/dist/helpers/specDownloads.js
var p2 = Symbol("downloadSpec");
var u2 = useEventBus(p2);
function b2(o11, n15) {
  const t12 = isJsonString(o11), s19 = t12 ? new Blob([o11], { type: "application/json" }) : new Blob([o11], { type: "application/x-yaml" }), c24 = URL.createObjectURL(s19), l14 = t12 ? ".json" : ".yaml", a23 = "spec" + l14, i24 = n15 ? n15 + l14 : a23, e14 = document.createElement("a");
  e14.href = c24, e14.download = i24, e14.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window
    })
  ), setTimeout(() => {
    window.URL.revokeObjectURL(c24), e14.remove();
  }, 100);
}

// node_modules/@scalar/api-reference/dist/hooks/useDeprecationWarnings.js
var t6 = "https://api.scalar.com/request-proxy";
var o3 = "https://proxy.scalar.com";
var a3 = "http://localhost:5051";
function n3(e14) {
  watch(
    () => e14,
    () => {
      var r16;
      e14.proxy === t6 ? (console.warn(
        `[DEPRECATED] Warning: configuration.proxy points to our old proxy (${t6}).`
      ), console.warn(
        `[DEPRECATED] We are overwriting the value and use the new proxy URL (${o3}) instead.`
      ), e14.proxy = o3, console.warn(
        `[DEPRECATED] Action Required: You should manually update your configuration to use the new URL (${o3}). Read more: https://github.com/scalar/scalar`
      )) : (r16 = e14.proxy) != null && r16.length && e14.proxy !== o3 && e14.proxy !== a3 && (console.warn(
        `[DEPRECATED] Warning: configuration.proxy points to a custom proxy (${e14 == null ? void 0 : e14.proxy}).`
      ), console.warn(
        "[DEPRECATED] Action Required: You need to use our new proxy (written in Go). Read more: https://github.com/scalar/scalar/tree/main/examples/proxy-server"
      ));
    },
    {
      immediate: true
    }
  );
}

// node_modules/@scalar/api-reference/dist/components/HttpMethod/constants.js
var r2 = [
  "GET",
  "POST",
  "PUT",
  "HEAD",
  "DELETE",
  "PATCH",
  "OPTIONS",
  "CONNECT",
  "TRACE"
];
var a4 = {
  POST: "var(--scalar-color-green)",
  DELETE: "var(--scalar-color-red)",
  PATCH: "var(--scalar-color-yellow)",
  GET: "var(--scalar-color-blue)",
  PUT: "var(--scalar-color-orange)",
  OPTIONS: "var(--scalar-color-purple)",
  HEAD: "var(--scalar-color-2)",
  CONNECT: "var(--scalar-color-2)",
  TRACE: "var(--scalar-color-2)"
};
var o4 = {
  POST: "POST",
  DELETE: "DEL",
  PATCH: "PATCH",
  GET: "GET",
  PUT: "PUT",
  OPTIONS: "OPTS",
  HEAD: "HEAD",
  CONNECT: "CONN",
  TRACE: "TRACE"
};

// node_modules/@scalar/api-reference/dist/components/HttpMethod/utils/isRequestMethod.js
function i6(e14) {
  return r2.includes(e14);
}

// node_modules/@scalar/api-reference/dist/components/HttpMethod/HttpMethod.vue.js
var S = defineComponent({
  __name: "HttpMethod",
  props: {
    as: {},
    property: {},
    short: { type: Boolean },
    method: {}
  },
  setup(s19) {
    const n15 = s19, e14 = computed(() => n15.method.trim().toUpperCase()), t12 = computed(() => i6(e14.value) ? o4[e14.value] : e14.value.slice(0, 4)), a23 = computed(() => i6(e14.value) ? a4[e14.value] : "var(--scalar-color-ghost)");
    return (o11, M11) => (openBlock(), createBlock(resolveDynamicComponent(o11.as ?? "span"), {
      style: normalizeStyle({ [o11.property || "color"]: a23.value })
    }, {
      default: withCtx(() => [
        renderSlot(o11.$slots, "default", normalizeProps(guardReactiveProps({ normalized: e14.value, abbreviated: t12.value, color: a23.value })), () => [
          createTextVNode(toDisplayString(o11.short ? t12.value : e14.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["style"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarHttpBadge.vue2.js
var d = defineComponent({
  __name: "SidebarHttpBadge",
  props: {
    active: { type: Boolean },
    method: {}
  },
  setup(s19) {
    return (e14, i24) => (openBlock(), createBlock(unref(S), {
      class: normalizeClass(["sidebar-heading-type", { "sidebar-heading-type-active": e14.active }]),
      method: e14.method,
      property: "--method-color",
      short: ""
    }, null, 8, ["class", "method"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarHttpBadge.vue.js
var p3 = s4(d, [["__scopeId", "data-v-f51e2805"]]);

// node_modules/@scalar/api-reference/dist/helpers/sleep.js
var s5 = (e14) => new Promise((o11) => setTimeout(o11, e14));

// node_modules/@scalar/api-reference/dist/helpers/joinWithSlash.js
var c4 = (e14, a23) => e14.replace(/\/$/, "") + "/" + a23.replace(/^\//, "");

// node_modules/@scalar/api-reference/dist/helpers/scrollToId.js
var t7 = async (e14) => {
  var o11;
  (o11 = document.getElementById(e14)) == null || o11.scrollIntoView();
};

// node_modules/github-slugger/regex.js
var regex = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;

// node_modules/github-slugger/index.js
var own = Object.hasOwnProperty;
var BananaSlug = class {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences;
    this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(value, maintainCase) {
    const self2 = this;
    let result = slug(value, maintainCase === true);
    const originalSlug = result;
    while (own.call(self2.occurrences, result)) {
      self2.occurrences[originalSlug]++;
      result = originalSlug + "-" + self2.occurrences[originalSlug];
    }
    self2.occurrences[result] = 0;
    return result;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
};
function slug(value, maintainCase) {
  if (typeof value !== "string") return "";
  if (!maintainCase) value = value.toLowerCase();
  return value.replace(regex, "").replace(/ /g, "-");
}

// node_modules/@scalar/api-reference/dist/hooks/useNavState.js
var r3 = ref(ssrState.hash ?? "");
var n4 = ref();
var i7 = ref(false);
var h2 = (e14) => e14.slug ? `description/${e14.slug}` : "";
var u3 = (e14) => {
  var t12;
  if (!n4.value) return "";
  const o11 = new RegExp("^" + ((t12 = n4.value) == null ? void 0 : t12.basePath) + "/?");
  return decodeURIComponent(e14.replace(o11, ""));
};
var p4 = (e14, o11) => {
  if (!e14)
    return "webhooks";
  const t12 = slug(e14), s19 = encodeURIComponent(t12);
  return `webhook/${o11}/${s19}`;
};
var m4 = (e14) => {
  if (!e14)
    return "models";
  const o11 = slug(e14);
  return `model/${encodeURIComponent(o11)}`;
};
var I3 = (e14, o11) => `${l2(o11)}/${e14.httpVerb}${e14.path}`;
var l2 = ({ name: e14 }) => {
  const o11 = slug(e14);
  return `tag/${encodeURIComponent(o11)}`;
};
var w = (e14 = r3.value) => {
  var a23;
  const o11 = (a23 = e14.match(/(tag\/[^/]+)/)) == null ? void 0 : a23[0], t12 = e14.startsWith("model") ? "models" : "", s19 = e14.startsWith("webhook") ? "webhooks" : "";
  return o11 || t12 || s19;
};
var b3 = () => {
  r3.value = n4.value ? u3(window.location.pathname) : decodeURIComponent(window.location.hash.replace(/^#/, ""));
};
var $2 = () => ({
  hash: r3,
  getWebhookId: p4,
  getModelId: m4,
  getHeadingId: h2,
  getOperationId: I3,
  getPathRoutingId: u3,
  getSectionId: w,
  getTagId: l2,
  isIntersectionEnabled: i7,
  pathRouting: n4,
  updateHash: b3
});

// node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarElement.vue2.js
var D3 = ["id"];
var L2 = {
  key: 0,
  class: "sidebar-heading-chevron"
};
var T2 = ["href"];
var U = { class: "sidebar-heading-link-title" };
var z = {
  key: 1,
  class: "sidebar-heading-link-method"
};
var P2 = {
  key: 1,
  class: "action-menu"
};
var J = defineComponent({
  __name: "SidebarElement",
  props: {
    id: {},
    item: {},
    isActive: { type: Boolean },
    hasChildren: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["toggleOpen"],
  setup(b14, { emit: C8 }) {
    const i24 = b14, c24 = C8, { hash: w8, isIntersectionEnabled: r16, pathRouting: l14 } = $2(), m29 = async () => {
      var e14, t12;
      i24.hasChildren && c24("toggleOpen"), (t12 = (e14 = i24.item) == null ? void 0 : e14.select) == null || t12.call(e14), i24.open && (r16.value = false, await s5(100), r16.value = true);
    }, y9 = () => {
      if (l14.value)
        return c4(l14.value.basePath, i24.item.id);
      if (typeof window < "u") {
        const e14 = new URL(window.location.href);
        return e14.hash = i24.item.id, `${e14.pathname}${e14.search}${e14.hash}`;
      } else return `#${i24.item.id}`;
    }, S12 = async (e14) => {
      var t12, o11;
      if (l14.value) {
        e14.preventDefault(), i24.hasChildren && c24("toggleOpen"), (o11 = (t12 = i24.item) == null ? void 0 : t12.select) == null || o11.call(t12), c24("toggleOpen"), r16.value = false, w8.value = i24.item.id;
        const n15 = new URL(window.location.href);
        n15.pathname = c4(l14.value.basePath, i24.item.id), window.history.pushState({}, "", n15), t7(i24.item.id), await s5(100), r16.value = true;
      }
    };
    return (e14, t12) => {
      var o11, n15;
      return openBlock(), createElementBlock("li", {
        id: e14.id,
        class: "sidebar-group-item"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["sidebar-heading", {
            "sidebar-group-item__folder": e14.hasChildren,
            active_page: e14.isActive,
            deprecated: e14.item.deprecated ?? false
          }]),
          onClick: m29
        }, [
          e14.hasChildren ? (openBlock(), createElementBlock("p", L2, [
            createVNode(unref(D), {
              class: "toggle-nested-icon",
              icon: e14.open ? "ChevronDown" : "ChevronRight",
              label: "Toggle group",
              size: "xs",
              onClick: withModifiers(m29, ["stop"])
            }, null, 8, ["icon"]),
            createTextVNode("   ")
          ])) : createCommentVNode("", true),
          createBaseVNode("a", {
            class: "sidebar-heading-link",
            href: y9(),
            onClick: S12
          }, [
            (n15 = (o11 = e14.item) == null ? void 0 : o11.icon) != null && n15.src ? (openBlock(), createBlock(unref(m2), {
              key: 0,
              class: "sidebar-icon",
              icon: e14.item.icon.src
            }, null, 8, ["icon"])) : createCommentVNode("", true),
            createBaseVNode("p", U, toDisplayString(e14.item.title), 1),
            e14.item.httpVerb && !e14.hasChildren ? (openBlock(), createElementBlock("p", z, [
              createTextVNode("   "),
              createVNode(p3, {
                active: e14.isActive,
                method: e14.item.httpVerb
              }, null, 8, ["active", "method"])
            ])) : createCommentVNode("", true)
          ], 8, T2)
        ], 2),
        e14.open ? renderSlot(e14.$slots, "default", { key: 0 }, void 0, true) : createCommentVNode("", true),
        e14.$slots["action-menu"] ? (openBlock(), createElementBlock("div", P2, [
          renderSlot(e14.$slots, "action-menu", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 8, D3);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarElement.vue.js
var a5 = s4(J, [["__scopeId", "data-v-8f97b414"]]);

// node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarGroup.vue2.js
var p5 = defineComponent({
  __name: "SidebarGroup",
  props: {
    level: {}
  },
  setup(a23) {
    return (e14, n15) => (openBlock(), createElementBlock("ul", {
      class: "sidebar-group sidebar-indent-nested",
      style: normalizeStyle({ "--scalar-sidebar-level": e14.level })
    }, [
      renderSlot(e14.$slots, "default", {}, void 0, true)
    ], 4));
  }
});

// node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarGroup.vue.js
var m5 = s4(p5, [["__scopeId", "data-v-39c84840"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Lazy/lazyBus.js
var s6 = Symbol();
var e5 = useEventBus(s6);

// node_modules/@scalar/api-reference/dist/helpers/getLowestHeadingLevel.js
var o5 = (t12) => {
  const e14 = Math.min(...t12.map((n15) => n15.depth));
  return e14 >= 1 && e14 <= 6 ? e14 : 1;
};

// node_modules/@scalar/api-reference/dist/legacy/stores/useApiClientStore.js
function o6() {
  return {
    showApiClient: false,
    activeApiClientEndpointId: "",
    activeItem: {},
    snippetType: "javascript"
  };
}
var t8 = reactive(o6());
function s7(e14, i24 = false) {
  i24 ? t8.showApiClient = true : t8.showApiClient = !t8.showApiClient, e14 && (t8.activeItem = e14);
}
function l3() {
  t8.showApiClient = false;
}
function a6(e14) {
  t8.activeApiClientEndpointId = e14;
}
function c5(e14) {
  t8.snippetType = e14;
}
var A2 = () => ({
  state: readonly(t8),
  toggleApiClient: s7,
  setActiveApiClientEndpointId: a6,
  setSnippetType: c5,
  hideApiClient: l3
});

// node_modules/@scalar/api-reference/dist/helpers/getHarRequest.js
var c6 = (...i24) => {
  let e14 = {
    httpVersion: "1.1",
    method: "GET",
    url: "",
    path: "",
    headers: [],
    headersSize: -1,
    queryString: [],
    cookies: [],
    bodySize: -1
  };
  i24.forEach((r16) => {
    e14 = {
      ...e14,
      ...r16,
      headers: [...e14.headers, ...r16.headers ?? []],
      queryString: [
        ...e14.queryString,
        ...r16.queryString ?? []
      ],
      cookies: [...e14.cookies, ...r16.cookies ?? []]
    };
  });
  const a23 = e14.headers.reduce(
    (r16, { name: o11, value: n15 }) => (r16[o11] = n15, r16),
    {}
  ), d17 = AxiosHeaders.from(a23).normalize(true);
  e14.headers = Object.entries(d17).map(
    ([r16, o11]) => ({ name: r16, value: o11 })
  );
  const { path: s19, ...t12 } = e14;
  return s19 ? {
    ...t12,
    url: `${e14.url}${s19}`
  } : t12;
};

// node_modules/@scalar/api-reference/dist/legacy/helpers/encodeStringAsBase64.js
function n5(e14) {
  return typeof window > "u" ? Buffer.from(e14).toString("base64") : btoa(e14);
}

// node_modules/@scalar/api-reference/dist/legacy/helpers/getRequestFromAuthentication.js
function i8(e14) {
  return !(!e14 || Array.isArray(e14) && !e14.length || (e14 ?? []).some(
    (r16) => !Object.keys(r16).length
  ));
}
function K(e14, r16) {
  var o11, c24;
  const n15 = [], p20 = [], l14 = [];
  if (!e14.customSecurity && (!e14.preferredSecurityScheme || !i8(r16)))
    return { headers: n15, queryString: p20, cookies: l14 };
  const m29 = (r16 == null ? void 0 : r16.some(
    (t12) => e14.preferredSecurityScheme && Object.keys(t12).includes(
      e14.preferredSecurityScheme
    )
  )) || e14.customSecurity ? e14.preferredSecurityScheme : Object.keys((r16 == null ? void 0 : r16[0]) ?? {}).pop(), s19 = (o11 = e14.securitySchemes) == null ? void 0 : o11[m29 ?? ""];
  if (s19) {
    if ("type" in s19 && s19.type === "apiKey") {
      if ("in" in s19 && s19.in === "header") {
        const t12 = (c24 = e14.apiKey.token) != null && c24.length ? e14.apiKey.token : "YOUR_TOKEN";
        n15.push({
          name: "name" in s19 ? s19.name : "",
          value: t12
        });
      } else if ("in" in s19 && s19.in === "cookie") {
        const t12 = e14.apiKey.token.length ? e14.apiKey.token : "YOUR_TOKEN";
        l14.push({
          name: s19.name,
          value: t12
        });
      } else if ("in" in s19 && s19.in === "query") {
        const t12 = e14.apiKey.token.length ? e14.apiKey.token : "YOUR_TOKEN";
        p20.push({
          name: s19.name,
          value: t12
        });
      }
    } else if ("type" in s19 && (s19.type === "http" || s19.type === "basic")) {
      if ("type" in s19 && (s19.type === "basic" || s19.type === "http" && s19.scheme === "basic")) {
        const { username: t12, password: y9 } = e14.http.basic, h10 = f(t12, y9);
        n15.push({
          name: "Authorization",
          value: `Basic ${h10}`.trim()
        });
      } else if ("type" in s19 && s19.type === "http" && s19.scheme === "bearer") {
        const t12 = e14.http.bearer.token.length ? e14.http.bearer.token : "YOUR_SECRET_TOKEN";
        n15.push({
          name: "Authorization",
          value: `Bearer ${t12}`
        });
      }
    } else if ("type" in s19 && s19.type.toLowerCase() === "oauth2") {
      const t12 = e14.oAuth2.accessToken || "YOUR_SECRET_TOKEN";
      n15.push({
        name: "Authorization",
        value: `Bearer ${t12}`
      });
    }
  }
  return { headers: n15, queryString: p20, cookies: l14 };
}
function f(e14, r16) {
  return e14 != null && e14.length || r16 != null && r16.length ? n5(`${e14}:${r16}`) : "";
}
function S2(e14) {
  return [
    e14.apiKey.token,
    e14.http.bearer.token,
    e14.oAuth2.accessToken,
    // The basic auth token is the base64 encoded username and password
    f(
      e14.http.basic.username,
      e14.http.basic.password
    ),
    // The plain text password shouldn’t appear anyway, but just in case
    e14.http.basic.password
  ].filter(Boolean);
}

// node_modules/@scalar/api-reference/dist/helpers/getApiClientRequest.js
function O2({
  serverState: t12,
  authenticationState: o11,
  operation: e14,
  globalSecurity: l14
}) {
  var u12, a23;
  const r16 = c6(
    {
      url: i4(t12)
    },
    getRequestFromOperation(e14, { requiredOnly: false }),
    // Only generate authentication parameters if an authentication state is passed.
    o11 ? K(
      o11,
      ((u12 = e14.information) == null ? void 0 : u12.security) ?? l14 ?? []
    ) : {}
  ), p20 = getRequestFromOperation(e14, {
    requiredOnly: false
  }), q9 = getParametersFromOperation(e14, "path", false);
  return {
    id: e14.operationId,
    name: e14.name,
    type: r16.method,
    path: p20.path ?? "",
    variables: q9,
    cookies: i9(r16.cookies),
    query: r16.queryString.map((m29) => ({ ...m29, enabled: m29.required ?? true })),
    headers: i9(r16.headers),
    url: i4(t12) ?? "",
    body: (a23 = r16.postData) == null ? void 0 : a23.text
  };
}
function i9(t12) {
  return (t12 ?? []).map((o11) => ({ ...o11, enabled: true }));
}

// node_modules/@scalar/api-reference/dist/legacy/helpers/createPlaceholderRequest.js
var e6 = () => ({
  name: "",
  url: "",
  type: "GET",
  path: "",
  variables: [],
  headers: [],
  query: [],
  body: "",
  formData: []
});

// node_modules/@scalar/api-reference/dist/legacy/stores/useRequestStore.js
var o7 = reactive({});
var a7 = ref([]);
var s8 = ref("");
var r4 = reactive(e6());
var l4 = (e14) => {
  o7[e14.responseId] = e14, s8.value = e14.responseId, a7.value.unshift(e14.responseId);
};
var v4 = (e14) => {
  var i24;
  s8.value = e14;
  const t12 = (i24 = o7[e14]) == null ? void 0 : i24.request, c24 = JSON.parse(JSON.stringify(t12));
  c24.body = JSON.stringify((t12 == null ? void 0 : t12.body) ?? "", null, 2), Object.assign(r4, c24);
};
var q = computed(
  () => {
    var e14;
    return s8.value ? (e14 = o7[s8.value ?? ""]) == null ? void 0 : e14.response : null;
  }
);
var R = (e14) => {
  Object.assign(r4, e14);
};
var y2 = () => {
  s8.value = "";
};
var O3 = ref(true);
var b4 = () => ({
  readOnly: O3,
  activeRequest: r4,
  activeResponse: q,
  requestHistory: o7,
  requestHistoryOrder: a7,
  activeRequestId: s8,
  setActiveResponse: v4,
  resetActiveResponse: y2,
  addRequestToHistory: l4,
  setActiveRequest: R
});

// node_modules/@scalar/api-reference/dist/legacy/stores/useOpenApiStore.js
var i10 = () => ({
  operation: {},
  globalSecurity: []
});
var t9 = reactive(i10());
var n6 = (e14) => {
  Object.assign(t9, {
    ...t9,
    operation: e14
  });
};
var c7 = (e14) => {
  Object.assign(t9, {
    ...t9,
    globalSecurity: e14
  });
};
var r5 = () => ({
  openApi: t9,
  setOperation: n6,
  setGlobalSecurity: c7
});

// node_modules/@scalar/api-reference/dist/helpers/openClientFor.js
var { server: l5 } = v3();
var { setOperation: p6, setGlobalSecurity: c8 } = r5();
var { toggleApiClient: m6 } = A2();
var { setActiveRequest: S3, resetActiveResponse: a8 } = b4();
function C3(e14, o11) {
  const t12 = O2({
    serverState: l5,
    operation: e14,
    // Let the API client handle the authentication.
    authenticationState: null,
    globalSecurity: null
  });
  a8(), S3(t12), p6(e14), c8(o11), m6(t12, true);
}

// node_modules/@scalar/api-reference/dist/helpers/getModels.js
function l6(t12) {
  var o11, i24;
  if (!t12)
    return {};
  const n15 = (
    // OpenAPI 3.x
    Object.keys(((o11 = t12 == null ? void 0 : t12.components) == null ? void 0 : o11.schemas) ?? {}).length ? (i24 = t12 == null ? void 0 : t12.components) == null ? void 0 : i24.schemas : (
      // Swagger 2.0
      Object.keys((t12 == null ? void 0 : t12.definitions) ?? {}).length ? t12 == null ? void 0 : t12.definitions : (
        // Fallback
        {}
      )
    )
  );
  return Object.keys(n15 ?? {}).forEach((r16) => {
    var f18;
    ((f18 = n15[r16]) == null ? void 0 : f18["x-internal"]) === true && delete n15[r16];
  }), n15;
}

// node_modules/@scalar/api-reference/dist/helpers/hasModels.js
var o8 = (e14) => e14 ? !!Object.keys(l6(e14) ?? {}).length : false;

// node_modules/@scalar/api-reference/dist/helpers/hasWebhooks.js
var t10 = (r16) => r16 ? !!Object.keys((r16 == null ? void 0 : r16.webhooks) ?? {}).length : false;

// node_modules/@scalar/api-reference/dist/helpers/getHeadingsFromMarkdown.js
var o9 = (t12, e14) => t12.map((r16) => ({
  ...r16,
  slug: e14.slug(r16.value)
}));
function i11(t12) {
  const e14 = new BananaSlug(), r16 = getHeadings(t12);
  return o9(r16, e14);
}

// node_modules/@scalar/api-reference/dist/hooks/useSidebar.js
var {
  getHeadingId: z2,
  getModelId: P3,
  getOperationId: R2,
  getSectionId: Q2,
  getTagId: U2,
  getWebhookId: A3,
  hash: O4
} = $2();
var l7 = ref(void 0);
var S4 = reactive({});
function q2(t12) {
  var s19, o11;
  return S4.tagsSorter === "alpha" ? t12.tags = (s19 = t12.tags) == null ? void 0 : s19.sort((r16, c24) => r16.name.localeCompare(c24.name)) : typeof S4.tagsSorter == "function" && (t12.tags = (o11 = t12.tags) == null ? void 0 : o11.sort(S4.tagsSorter)), l7.value = t12;
}
var X = ref(false);
var Y = ref(false);
var f2 = reactive(
  ssrState["useSidebarContent-collapsedSidebarItems"] ?? {}
);
function ne(t12) {
  f2[t12] = !f2[t12];
}
function h3(t12, s19) {
  f2[t12] = s19;
}
var C4 = ref([]);
function ae(t12) {
  const s19 = i11(t12), o11 = o5(s19);
  return s19.filter((r16) => (
    // highest level, eg. # Introduction
    r16.depth === o11 || // second highest level, eg. ## Authentication
    r16.depth === o11 + 1
  ));
}
var Z2 = computed(() => {
  var T8, I8, y9, H10, M11, j8, x7, E8, G5, L8;
  const { state: t12 } = A2(), s19 = {}, {
    openApi: { globalSecurity: o11 }
  } = r5(), r16 = [];
  let c24 = null;
  C4.value.forEach((e14) => {
    var i24;
    e14.depth === o5(C4.value) ? (c24 = {
      id: z2(e14),
      title: e14.value,
      show: !t12.showApiClient,
      children: []
    }, r16.push(c24)) : c24 && ((i24 = c24.children) == null || i24.push({
      id: z2(e14),
      title: e14.value,
      show: !t12.showApiClient
    }));
  });
  const p20 = (I8 = (T8 = l7.value) == null ? void 0 : T8.tags) == null ? void 0 : I8[0], v11 = p20 && ((e14) => (e14 == null ? void 0 : e14.length) !== 1 || e14[0].name !== "default" || e14[0].description !== "")((y9 = l7.value) == null ? void 0 : y9.tags) ? (M11 = (H10 = l7.value) == null ? void 0 : H10.tags) == null ? void 0 : M11.filter((e14) => {
    var i24;
    return ((i24 = e14.operations) == null ? void 0 : i24.length) > 0;
  }).map((e14) => {
    var i24;
    return {
      id: U2(e14),
      title: e14.name,
      displayTitle: e14["x-displayName"] ?? e14.name,
      show: true,
      children: (i24 = e14.operations) == null ? void 0 : i24.map(
        (n15) => {
          var d17;
          const a23 = R2(n15, e14), u12 = n15.name ?? n15.path;
          return s19[a23] = u12, {
            id: a23,
            title: u12,
            httpVerb: n15.httpVerb,
            deprecated: ((d17 = n15.information) == null ? void 0 : d17.deprecated) ?? false,
            show: true,
            select: () => {
              t12.showApiClient && C3(n15, o11);
            }
          };
        }
      )
    };
  }) : (j8 = p20 == null ? void 0 : p20.operations) == null ? void 0 : j8.map((e14) => {
    var a23;
    const i24 = R2(e14, p20), n15 = e14.name ?? e14.path;
    return s19[i24] = n15, {
      id: i24,
      title: n15,
      httpVerb: e14.httpVerb,
      deprecated: ((a23 = e14.information) == null ? void 0 : a23.deprecated) ?? false,
      show: true,
      select: () => {
        t12.showApiClient && C3(e14, o11);
      }
    };
  });
  let g7 = o8(l7.value) && !X.value ? [
    {
      id: P3(),
      title: "Models",
      show: !t12.showApiClient,
      children: Object.keys(l6(l7.value) ?? {}).map(
        (e14) => {
          var n15;
          const i24 = P3(e14);
          return s19[i24] = e14, {
            id: i24,
            title: ((n15 = l6(l7.value)) == null ? void 0 : n15[e14]).title ?? e14,
            show: !t12.showApiClient
          };
        }
      )
    }
  ] : [], w8 = t10(l7.value) ? [
    {
      id: A3(),
      title: "Webhooks",
      show: !t12.showApiClient,
      children: Object.keys(((x7 = l7.value) == null ? void 0 : x7.webhooks) ?? {}).map((e14) => {
        var n15, a23;
        const i24 = A3(e14);
        return s19[i24] = e14, Object.keys(
          ((a23 = (n15 = l7.value) == null ? void 0 : n15.webhooks) == null ? void 0 : a23[e14]) ?? {}
        ).map((u12) => {
          var d17, b14, W5;
          return {
            id: A3(e14, u12),
            title: (W5 = (b14 = (d17 = l7.value) == null ? void 0 : d17.webhooks) == null ? void 0 : b14[e14][u12]) == null ? void 0 : W5.name,
            httpVerb: u12,
            show: !t12.showApiClient
          };
        });
      }).flat()
    }
  ] : [];
  const _11 = (E8 = l7.value) != null && E8["x-tagGroups"] ? (L8 = (G5 = l7.value) == null ? void 0 : G5["x-tagGroups"]) == null ? void 0 : L8.map((e14) => {
    var a23;
    const i24 = [];
    return (a23 = e14.tags) == null || a23.map((u12) => {
      if (u12 === "models" && g7.length > 0)
        i24.push(g7[0]), g7 = [];
      else if (u12 === "webhooks" && w8.length > 0)
        i24.push(w8[0]), w8 = [];
      else {
        const d17 = v11 == null ? void 0 : v11.find(
          (b14) => b14.title === u12
        );
        d17 && i24.push(d17);
      }
    }), {
      id: e14.name,
      title: e14.name,
      children: i24,
      show: true,
      isGroup: true
    };
  }) : void 0, k10 = [
    ...r16,
    ..._11 ?? v11 ?? [],
    ...w8,
    ...g7
  ];
  return Y.value && k10.forEach((e14) => {
    h3(e14.id, true), e14.show = true;
  }), {
    entries: k10,
    titles: s19
  };
});
var ue = ref(false);
var de = computed(() => {
  var t12, s19;
  return ((s19 = (t12 = Z2.value) == null ? void 0 : t12.titles) == null ? void 0 : s19[O4.value]) ?? "";
});
var ce = (t12) => {
  const s19 = Q2(t12);
  if (s19 !== t12)
    if (f2[s19])
      t7(t12);
    else {
      const o11 = e5.on((r16) => {
        r16.id === t12 && (t7(t12), o11());
      });
      h3(s19, true);
    }
};
function Ie2(t12) {
  return Object.assign(S4, t12), t12 != null && t12.parsedSpec && (q2(t12.parsedSpec), watch(
    () => {
      var s19, o11;
      return (o11 = (s19 = l7.value) == null ? void 0 : s19.tags) == null ? void 0 : o11.length;
    },
    () => {
      var s19, o11;
      if (O4.value) {
        const r16 = Q2(O4.value);
        r16 && h3(r16, true);
      } else {
        const r16 = (o11 = (s19 = l7.value) == null ? void 0 : s19.tags) == null ? void 0 : o11[0];
        r16 && h3(U2(r16), true);
      }
    }
  ), watch(
    () => {
      var s19, o11;
      return (o11 = (s19 = l7.value) == null ? void 0 : s19.info) == null ? void 0 : o11.description;
    },
    () => {
      var o11, r16;
      const s19 = (r16 = (o11 = l7.value) == null ? void 0 : o11.info) == null ? void 0 : r16.description;
      return s19 ? C4.value = ae(s19) : C4.value = [];
    },
    {
      immediate: true
    }
  )), {
    breadcrumb: de,
    items: Z2,
    isSidebarOpen: ue,
    collapsedSidebarItems: f2,
    toggleCollapsedSidebarItem: ne,
    setCollapsedSidebarItem: h3,
    hideModels: X,
    setParsedSpec: q2,
    defaultOpenAllTags: Y,
    scrollToOperation: ce
  };
}

// node_modules/@scalar/api-reference/dist/components/Sidebar/Sidebar.vue2.js
var D4 = { class: "sidebar" };
var H = { class: "sidebar-group-title" };
var M3 = -160;
var P4 = defineComponent({
  __name: "Sidebar",
  props: {
    parsedSpec: {},
    tagsSorter: { type: [String, Function] }
  },
  setup(A7) {
    const S12 = A7, { hash: o11, isIntersectionEnabled: $11 } = $2(), { items: O10, toggleCollapsedSidebarItem: T8, collapsedSidebarItems: g7 } = Ie2(
      {
        parsedSpec: S12.parsedSpec,
        tagsSorter: S12.tagsSorter
      }
    ), y9 = ref(null), c24 = ref(true);
    watch(o11, (p20) => {
      !$11.value || c24.value || typeof window > "u" || k10(p20);
    });
    const k10 = (p20) => {
      var t12, r16, s19, _11;
      const n15 = document.getElementById(`sidebar-${p20}`);
      if (!n15 || !y9.value) return;
      let e14 = M3;
      n15.getAttribute("data-sidebar-type") === "heading" ? e14 += n15.offsetTop + ((t12 = n15.getElementsByClassName("sidebar-heading")) == null ? void 0 : t12[0]).offsetHeight : e14 += n15.offsetTop + (((r16 = n15.parentElement) == null ? void 0 : r16.offsetTop) ?? 0) + (((_11 = (s19 = n15.parentElement) == null ? void 0 : s19.parentElement) == null ? void 0 : _11.offsetTop) ?? 0), y9.value.scrollTo({ top: e14, behavior: "smooth" });
    };
    return onMounted(() => {
      setTimeout(() => k10(o11.value), 500), c24.value = false;
    }), (p20, n15) => (openBlock(), createElementBlock("div", D4, [
      renderSlot(p20.$slots, "sidebar-start", {}, void 0, true),
      createBaseVNode("div", {
        ref_key: "scrollerEl",
        ref: y9,
        class: "sidebar-pages custom-scroll custom-scroll-self-contain-overflow"
      }, [
        createVNode(m5, { level: 0 }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(O10).entries, (e14) => (openBlock(), createElementBlock(Fragment, {
              key: e14.id
            }, [
              e14.isGroup ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("li", H, toDisplayString(e14.displayTitle ?? e14.title), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(e14.children, (t12) => (openBlock(), createBlock(a5, {
                  key: t12.id,
                  id: `sidebar-${t12.id}`,
                  "data-sidebar-type": "heading",
                  hasChildren: t12.children && t12.children.length > 0,
                  isActive: unref(o11) === t12.id,
                  item: {
                    id: t12.id,
                    title: t12.displayTitle ?? t12.title,
                    select: t12.select,
                    httpVerb: t12.httpVerb,
                    deprecated: t12.deprecated ?? false
                  },
                  open: unref(g7)[t12.id] ?? false,
                  onToggleOpen: async () => {
                    c24.value = true, unref(T8)(t12.id), await unref(s5)(100), c24.value = false;
                  }
                }, {
                  default: withCtx(() => {
                    var r16;
                    return [
                      t12.children && ((r16 = t12.children) == null ? void 0 : r16.length) > 0 ? (openBlock(), createBlock(m5, {
                        key: 0,
                        level: 1
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(t12.children, (s19) => (openBlock(), createElementBlock(Fragment, {
                            key: s19.id
                          }, [
                            e14.show ? (openBlock(), createBlock(a5, {
                              key: 0,
                              id: `sidebar-${s19.id}`,
                              isActive: unref(o11) === s19.id,
                              item: {
                                id: s19.id,
                                title: s19.displayTitle ?? s19.title,
                                select: s19.select,
                                httpVerb: s19.httpVerb,
                                deprecated: s19.deprecated ?? false
                              }
                            }, null, 8, ["id", "isActive", "item"])) : createCommentVNode("", true)
                          ], 64))), 128))
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
                    ];
                  }),
                  _: 2
                }, 1032, ["id", "hasChildren", "isActive", "item", "open", "onToggleOpen"]))), 128))
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                e14.show ? (openBlock(), createBlock(a5, {
                  key: 0,
                  id: `sidebar-${e14.id}`,
                  "data-sidebar-type": "heading",
                  hasChildren: e14.children && e14.children.length > 0,
                  isActive: unref(o11) === e14.id,
                  item: {
                    id: e14.id,
                    title: e14.displayTitle ?? e14.title,
                    select: e14.select,
                    httpVerb: e14.httpVerb,
                    deprecated: e14.deprecated ?? false
                  },
                  open: unref(g7)[e14.id] ?? false,
                  onToggleOpen: async () => {
                    c24.value = true, unref(T8)(e14.id), await unref(s5)(100), c24.value = false;
                  }
                }, {
                  default: withCtx(() => {
                    var t12;
                    return [
                      e14.children && ((t12 = e14.children) == null ? void 0 : t12.length) > 0 ? (openBlock(), createBlock(m5, {
                        key: 0,
                        level: 1
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(e14.children, (r16) => (openBlock(), createElementBlock(Fragment, {
                            key: r16.id
                          }, [
                            e14.show ? (openBlock(), createBlock(a5, {
                              key: 0,
                              id: `sidebar-${r16.id}`,
                              isActive: unref(o11) === r16.id,
                              item: {
                                id: r16.id,
                                title: r16.displayTitle ?? r16.title,
                                select: r16.select,
                                httpVerb: r16.httpVerb,
                                deprecated: r16.deprecated ?? false
                              }
                            }, null, 8, ["id", "isActive", "item"])) : createCommentVNode("", true)
                          ], 64))), 128))
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
                    ];
                  }),
                  _: 2
                }, 1032, ["id", "hasChildren", "isActive", "item", "open", "onToggleOpen"])) : createCommentVNode("", true)
              ], 64))
            ], 64))), 128))
          ]),
          _: 1
        })
      ], 512),
      renderSlot(p20.$slots, "sidebar-end", {}, void 0, true)
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Sidebar/Sidebar.vue.js
var m7 = s4(P4, [["__scopeId", "data-v-66b58ff3"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionContainerAccordion.vue2.js
var p7 = { class: "section-accordion-wrapper" };
var m8 = { class: "section-accordion-title" };
var B3 = defineComponent({
  __name: "SectionContainerAccordion",
  setup(h10) {
    return (c24, v11) => (openBlock(), createElementBlock("div", p7, [
      createVNode(unref(N), {
        as: "div",
        class: "section-accordion",
        defaultOpen: ""
      }, {
        default: withCtx(({ open: s19 }) => [
          createVNode(unref(Q), { class: "section-accordion-button" }, {
            default: withCtx(() => [
              createVNode(unref(m2), {
                class: "section-accordion-chevron",
                icon: s19 ? "ChevronDown" : "ChevronRight"
              }, null, 8, ["icon"]),
              createBaseVNode("div", m8, [
                renderSlot(c24.$slots, "title", {}, void 0, true)
              ])
            ]),
            _: 2
          }, 1024),
          createVNode(unref(V), { class: "section-accordion-content" }, {
            default: withCtx(() => [
              renderSlot(c24.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/SectionContainerAccordion.vue.js
var i12 = s4(B3, [["__scopeId", "data-v-2049975e"]]);

// node_modules/@scalar/api-reference/dist/components/LoadingSkeleton.vue2.js
var m9 = defineComponent({
  __name: "LoadingSkeleton",
  props: {
    lines: { default: 1 }
  },
  setup(i24) {
    return (e14, p20) => (openBlock(true), createElementBlock(Fragment, null, renderList([...Array(e14.lines).keys()], (r16) => (openBlock(), createElementBlock("div", {
      key: r16,
      class: normalizeClass(["loading", { "single-line": e14.lines === 1 }])
    }, null, 2))), 128));
  }
});

// node_modules/@scalar/api-reference/dist/components/LoadingSkeleton.vue.js
var e7 = s4(m9, [["__scopeId", "data-v-c90b2c46"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionHeader.vue2.js
var u4 = defineComponent({
  __name: "SectionHeader",
  props: {
    loading: { type: Boolean, default: false },
    tight: { type: Boolean, default: false },
    level: { default: 1 }
  },
  setup(d17) {
    return (e14, p20) => e14.loading ? (openBlock(), createBlock(e7, { key: 0 })) : (openBlock(), createBlock(resolveDynamicComponent(`h${e14.level}`), {
      key: 1,
      class: normalizeClass(["section-header", { tight: e14.tight }])
    }, {
      default: withCtx(() => [
        renderSlot(e14.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/SectionHeader.vue.js
var f3 = s4(u4, [["__scopeId", "data-v-3bd1b9f0"]]);

// node_modules/@scalar/api-reference/dist/components/ScreenReader.vue2.js
var s9 = {
  key: 0,
  class: "screenreader-only"
};
var d2 = defineComponent({
  __name: "ScreenReader",
  props: {
    if: { type: Boolean, default: true }
  },
  setup(a23) {
    return (e14, l14) => e14.$props.if ? (openBlock(), createElementBlock("span", s9, [
      renderSlot(e14.$slots, "default", {}, void 0, true)
    ])) : renderSlot(e14.$slots, "default", { key: 1 }, void 0, true);
  }
});

// node_modules/@scalar/api-reference/dist/components/ScreenReader.vue.js
var c9 = s4(d2, [["__scopeId", "data-v-681ebf2c"]]);

// node_modules/@scalar/api-reference/dist/hooks/useClipboard.js
var a9 = () => {
  const { toast: o11 } = i2();
  return {
    copyToClipboard: (t12) => {
      navigator.clipboard.writeText(t12).then(() => {
        o11("Copied to the clipboard", "info");
      });
    }
  };
};

// node_modules/@scalar/api-reference/dist/components/Anchor/Anchor.vue2.js
var S5 = (t12) => (pushScopeId("data-v-d9801d4e"), t12 = t12(), popScopeId(), t12);
var b5 = { class: "label" };
var k3 = { class: "anchor" };
var v5 = S5(() => createBaseVNode("span", null, "​", -1));
var $3 = defineComponent({
  __name: "Anchor",
  props: {
    id: {}
  },
  setup(t12) {
    const { copyToClipboard: d17 } = a9(), l14 = (o11) => {
      const e14 = new URL(window.location.href);
      return e14.hash = o11, e14.toString();
    };
    return (o11, e14) => (openBlock(), createElementBlock("span", b5, [
      renderSlot(o11.$slots, "default", {}, void 0, true),
      createBaseVNode("span", k3, [
        v5,
        createBaseVNode("button", {
          class: "anchor-copy",
          type: "button",
          onClick: e14[0] || (e14[0] = withModifiers((y9) => unref(d17)(l14(o11.id)), ["stop"]))
        }, [
          createTextVNode(" # "),
          createVNode(c9, null, {
            default: withCtx(() => [
              createTextVNode('Copy link to "'),
              renderSlot(o11.$slots, "default", {}, void 0, true),
              createTextVNode('"')
            ]),
            _: 3
          })
        ])
      ])
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Anchor/Anchor.vue.js
var _ = s4($3, [["__scopeId", "data-v-d9801d4e"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Tag/TagAccordion.vue2.js
var N3 = defineComponent({
  __name: "TagAccordion",
  props: {
    tag: {},
    spec: {}
  },
  setup(_11) {
    const { getTagId: r16 } = $2();
    return (t12, S12) => (openBlock(), createBlock(unref(i12), { class: "tag-section" }, {
      title: withCtx(() => [
        createVNode(unref(f3), {
          class: "tag-name",
          level: 2
        }, {
          default: withCtx(() => [
            createVNode(unref(_), {
              id: unref(r16)(t12.tag)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(t12.tag.name), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 1
        }),
        createVNode(unref(h), {
          class: "tag-description",
          value: t12.tag.description,
          withImages: ""
        }, null, 8, ["value"])
      ]),
      default: withCtx(() => [
        renderSlot(t12.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Tag/TagAccordion.vue.js
var e8 = s4(N3, [["__scopeId", "data-v-fe69da0e"]]);

// node_modules/@scalar/api-reference/dist/components/ShowMoreButton.vue2.js
var S6 = defineComponent({
  __name: "ShowMoreButton",
  props: {
    id: {}
  },
  setup(l14) {
    const { setCollapsedSidebarItem: t12 } = Ie2();
    return (r16, e14) => (openBlock(), createElementBlock("button", {
      class: "show-more",
      type: "button",
      onClick: e14[0] || (e14[0] = (u12) => unref(t12)(r16.id, true))
    }, [
      createTextVNode(" Show More "),
      createVNode(unref(m2), {
        class: "show-more-icon",
        icon: "ChevronDown"
      })
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/components/ShowMoreButton.vue.js
var p8 = s4(S6, [["__scopeId", "data-v-b1ddf847"]]);

// node_modules/@scalar/api-reference/dist/components/IntersectionObserver.vue.js
var x2 = defineComponent({
  __name: "IntersectionObserver",
  props: {
    id: {},
    is: {}
  },
  emits: ["intersecting"],
  setup(o11, { emit: r16 }) {
    const i24 = o11, s19 = r16, n15 = ref(), c24 = (e14) => {
      const t12 = e14.offsetHeight;
      return `${t12 / 2}px 0px ${t12 / 2}px 0px`;
    }, a23 = (e14) => e14.offsetHeight < window.innerHeight ? 0.8 : 0.5;
    return onMounted(() => {
      if (n15.value) {
        const e14 = {
          rootMargin: c24(n15.value),
          threshold: a23(n15.value)
        };
        useIntersectionObserver(
          n15,
          ([{ isIntersecting: t12 }]) => {
            t12 && i24.id && s19("intersecting");
          },
          e14
        );
      }
    }), (e14, t12) => (openBlock(), createBlock(resolveDynamicComponent(e14.is ?? "div"), {
      id: e14.id,
      ref_key: "intersectionObserverRef",
      ref: n15
    }, {
      default: withCtx(() => [
        renderSlot(e14.$slots, "default")
      ]),
      _: 3
    }, 8, ["id"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/Section.vue2.js
var B4 = defineComponent({
  __name: "Section",
  props: {
    id: {},
    label: {}
  },
  setup(s19) {
    const t12 = s19, { getSectionId: r16, hash: l14, isIntersectionEnabled: d17, pathRouting: i24 } = $2(), { setCollapsedSidebarItem: c24 } = Ie2();
    function h10() {
      var n15, a23;
      if (!t12.label || !d17.value) return;
      const e14 = new URL(window.location.href), o11 = t12.id ?? "";
      i24.value ? e14.pathname = c4(i24.value.basePath, o11) : e14.hash = o11, l14.value = o11, window.history.replaceState({}, "", e14), ((n15 = t12.id) != null && n15.startsWith("model") || (a23 = t12.id) != null && a23.startsWith("webhook")) && c24(r16(t12.id), true);
    }
    return (e14, o11) => (openBlock(), createBlock(x2, {
      is: "section",
      id: e14.id,
      class: "section",
      onIntersecting: h10
    }, {
      default: withCtx(() => [
        renderSlot(e14.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["id"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/Section.vue.js
var m10 = s4(B4, [["__scopeId", "data-v-fc324287"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionContent.vue2.js
var s10 = { class: "section-content" };
var f4 = defineComponent({
  __name: "SectionContent",
  props: {
    loading: { type: Boolean, default: false }
  },
  setup(c24) {
    return (e14, i24) => (openBlock(), createElementBlock("div", s10, [
      e14.loading ? (openBlock(), createBlock(e7, {
        key: 1,
        lines: 8
      })) : renderSlot(e14.$slots, "default", { key: 0 }, void 0, true)
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/SectionContent.vue.js
var p9 = s4(f4, [["__scopeId", "data-v-9735459e"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionColumns.vue.js
var r6 = {};
var s11 = { class: "section-columns" };
function d3(e14, _11) {
  return openBlock(), createElementBlock("div", s11, [
    renderSlot(e14.$slots, "default", {}, void 0, true)
  ]);
}
var a10 = s4(r6, [["render", d3], ["__scopeId", "data-v-8b9602bf"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionColumn.vue.js
var r7 = {};
var s12 = { class: "section-column" };
function d4(e14, _11) {
  return openBlock(), createElementBlock("div", s12, [
    renderSlot(e14.$slots, "default", {}, void 0, true)
  ]);
}
var f5 = s4(r7, [["render", d4], ["__scopeId", "data-v-d64e7382"]]);

// node_modules/@scalar/api-reference/dist/components/Card/Card.vue.js
var n7 = {};
var s13 = { class: "scalar-card" };
function a11(e14, d17) {
  return openBlock(), createElementBlock("div", s13, [
    renderSlot(e14.$slots, "default", {}, void 0, true)
  ]);
}
var i13 = s4(n7, [["render", a11], ["__scopeId", "data-v-38801681"]]);

// node_modules/@scalar/api-reference/dist/components/Card/CardContent.vue2.js
var d5 = defineComponent({
  __name: "CardContent",
  props: {
    muted: { type: Boolean },
    contrast: { type: Boolean },
    frameless: { type: Boolean },
    transparent: { type: Boolean },
    borderless: { type: Boolean }
  },
  setup(n15) {
    return (e14, l14) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["scalar-card-content", {
        "scalar-card--muted": e14.muted,
        "scalar-card--contrast": e14.contrast,
        "scalar-card--frameless": e14.frameless,
        "scalar-card--transparent": e14.transparent,
        "scalar-card--borderless": e14.borderless
      }])
    }, [
      renderSlot(e14.$slots, "default", {}, void 0, true)
    ], 2));
  }
});

// node_modules/@scalar/api-reference/dist/components/Card/CardContent.vue.js
var d6 = s4(d5, [["__scopeId", "data-v-dd83e46e"]]);

// node_modules/@scalar/api-reference/dist/components/Card/CardHeader.vue2.js
var i14 = { class: "scalar-card-header-slots" };
var h4 = { class: "scalar-card-header-slot scalar-card-header-title" };
var m11 = { class: "scalar-card-header-slot scalar-card-header-actions" };
var B5 = defineComponent({
  __name: "CardHeader",
  props: {
    muted: { type: Boolean },
    contrast: { type: Boolean },
    frameless: { type: Boolean },
    transparent: { type: Boolean },
    borderless: { type: Boolean }
  },
  setup(t12) {
    const o11 = t12;
    return (a23, _11) => (openBlock(), createBlock(d6, mergeProps(o11, { class: "scalar-card-header" }), {
      default: withCtx(() => [
        createBaseVNode("div", i14, [
          createBaseVNode("div", h4, [
            renderSlot(a23.$slots, "default", {}, void 0, true)
          ]),
          createBaseVNode("div", m11, [
            renderSlot(a23.$slots, "actions", {}, void 0, true)
          ])
        ])
      ]),
      _: 3
    }, 16));
  }
});

// node_modules/@scalar/api-reference/dist/components/Card/CardHeader.vue.js
var f6 = s4(B5, [["__scopeId", "data-v-ef7873bc"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Tag/Endpoints.vue2.js
var L3 = { class: "endpoints" };
var M4 = ["onClick"];
var te = defineComponent({
  __name: "Endpoints",
  props: {
    id: {},
    tag: {}
  },
  setup(C8) {
    const _11 = C8, { getOperationId: l14, getTagId: h10 } = $2(), { scrollToOperation: k10 } = Ie2(), S12 = async (t12) => {
      const d17 = l14(t12, _11.tag);
      k10(d17);
    };
    return (t12, d17) => (openBlock(), createBlock(unref(m10), {
      id: t12.id,
      label: t12.tag.name.toUpperCase()
    }, {
      default: withCtx(() => [
        createVNode(unref(p9), null, {
          default: withCtx(() => [
            createVNode(unref(a10), null, {
              default: withCtx(() => [
                createVNode(unref(f5), null, {
                  default: withCtx(() => [
                    createVNode(unref(f3), { level: 2 }, {
                      default: withCtx(() => [
                        createVNode(unref(_), {
                          id: unref(h10)(t12.tag)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(t12.tag["x-displayName"] ?? t12.tag.name), 1)
                          ]),
                          _: 1
                        }, 8, ["id"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(h), {
                      value: t12.tag.description,
                      withImages: ""
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                }),
                createVNode(unref(f5), null, {
                  default: withCtx(() => {
                    var i24;
                    return [
                      ((i24 = t12.tag.operations) == null ? void 0 : i24.length) > 0 ? (openBlock(), createBlock(unref(i13), {
                        key: 0,
                        class: "scalar-card-sticky"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(f6), { muted: "" }, {
                            default: withCtx(() => [
                              createTextVNode("Endpoints")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(d6), {
                            class: "custom-scroll",
                            muted: ""
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", L3, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(t12.tag.operations, (r16) => {
                                  var m29;
                                  return openBlock(), createElementBlock("a", {
                                    key: unref(l14)(r16, t12.tag),
                                    class: "endpoint",
                                    onClick: (U5) => S12(r16)
                                  }, [
                                    createVNode(unref(S), {
                                      method: r16.httpVerb
                                    }, null, 8, ["method"]),
                                    createBaseVNode("span", {
                                      class: normalizeClass({ deprecated: (m29 = r16.information) == null ? void 0 : m29.deprecated })
                                    }, toDisplayString(r16.path), 3)
                                  ], 8, M4);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["id", "label"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Tag/Endpoints.vue.js
var c10 = s4(te, [["__scopeId", "data-v-ccfa4910"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionContainer.vue.js
var c11 = {};
var s14 = { class: "section-container" };
function i15(e14, a23) {
  return openBlock(), createElementBlock("div", s14, [
    renderSlot(e14.$slots, "default", {}, void 0, true)
  ]);
}
var l8 = s4(c11, [["render", i15], ["__scopeId", "data-v-823b8471"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Tag/Tag.vue2.js
var _2 = defineComponent({
  __name: "Tag",
  props: {
    id: {},
    tag: {},
    spec: {}
  },
  setup(s19) {
    const o11 = s19, d17 = ref(null), { collapsedSidebarItems: l14 } = Ie2(), { getTagId: m29 } = $2(), p20 = computed(
      () => {
        var e14, n15, t12;
        return ((e14 = o11.spec.tags) == null ? void 0 : e14.length) !== 1 || ((n15 = o11.tag) == null ? void 0 : n15.name) !== "default" || ((t12 = o11.tag) == null ? void 0 : t12.description) !== "";
      }
    );
    return (e14, n15) => (openBlock(), createBlock(unref(l8), {
      ref_key: "sectionContainerRef",
      ref: d17,
      class: "tag-section-container"
    }, {
      default: withCtx(() => {
        var t12;
        return [
          p20.value ? (openBlock(), createBlock(c10, {
            key: 0,
            id: e14.id,
            tag: e14.tag
          }, null, 8, ["id", "tag"])) : createCommentVNode("", true),
          !unref(l14)[unref(m29)(e14.tag)] && ((t12 = e14.tag.operations) == null ? void 0 : t12.length) > 1 ? (openBlock(), createBlock(p8, {
            key: 1,
            id: e14.id ?? ""
          }, null, 8, ["id"])) : renderSlot(e14.$slots, "default", { key: 2 }, void 0, true)
        ];
      }),
      _: 3
    }, 512));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Tag/Tag.vue.js
var p10 = s4(_2, [["__scopeId", "data-v-ac369778"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Operation/ContentTypeSelect.vue2.js
var q3 = ["value"];
var V2 = ["value"];
var k4 = defineComponent({
  __name: "ContentTypeSelect",
  props: {
    requestBody: {},
    defaultValue: {}
  },
  emits: ["selectContentType"],
  setup(p20, { emit: i24 }) {
    const e14 = p20, m29 = i24, y9 = (t12) => {
      const n15 = t12.target.value;
      a23.value = n15, m29("selectContentType", { contentType: n15 });
    }, s19 = computed(() => {
      var t12;
      return (t12 = e14.requestBody) != null && t12.content ? Object.keys(e14.requestBody.content) : [];
    }), a23 = ref(
      e14.defaultValue || s19.value[0]
    );
    return (t12, c24) => {
      var n15;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["content-type-select", { "content-type-no-select": s19.value.length <= 1 }])
      }, [
        createBaseVNode("span", null, toDisplayString(a23.value), 1),
        e14 != null && e14.requestBody && s19.value.length > 1 ? (openBlock(), createElementBlock("select", {
          key: 0,
          value: a23.value,
          onChange: c24[0] || (c24[0] = (r16) => y9(r16))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList((n15 = e14.requestBody) == null ? void 0 : n15.content, (r16, u12) => (openBlock(), createElementBlock("option", {
            key: u12,
            value: u12
          }, toDisplayString(u12), 9, V2))), 128))
        ], 40, q3)) : createCommentVNode("", true)
      ], 2);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/ContentTypeSelect.vue.js
var d7 = s4(k4, [["__scopeId", "data-v-19d1d4d0"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaHeading.vue2.js
var d8 = {
  key: 0,
  class: "schema-type"
};
var c12 = ["title"];
var j = defineComponent({
  __name: "SchemaHeading",
  props: {
    value: {},
    name: {}
  },
  setup(f18) {
    return (e14, h10) => {
      var u12, m29, p20, y9, s19, i24;
      return typeof e14.value == "object" ? (openBlock(), createElementBlock("span", d8, [
        createBaseVNode("span", {
          class: "schema-type-icon",
          title: typeof e14.value.type == "string" ? e14.value.type : Array.isArray(e14.value.type) ? e14.value.type.join(" | ") : "unkown type"
        }, [
          e14.value.type === "object" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(" {} ")
          ], 64)) : createCommentVNode("", true),
          e14.value.type === "array" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(" [] ")
          ], 64)) : createCommentVNode("", true),
          e14.value.enum ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createTextVNode(" enum ")
          ], 64)) : createCommentVNode("", true)
        ], 8, c12),
        (m29 = (u12 = e14.value) == null ? void 0 : u12.xml) != null && m29.name && ((y9 = (p20 = e14.value) == null ? void 0 : p20.xml) == null ? void 0 : y9.name) !== "##default" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(" <" + toDisplayString((i24 = (s19 = e14.value) == null ? void 0 : s19.xml) == null ? void 0 : i24.name) + " /> ", 1)
        ], 64)) : e14.name ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(e14.name), 1)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          createTextVNode(toDisplayString(e14.value.type), 1)
        ], 64))
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaHeading.vue.js
var c13 = s4(j, [["__scopeId", "data-v-c0a69ad0"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/Schema.vue2.js
var F3 = {
  key: 0,
  class: "schema-card-description"
};
var K2 = defineComponent({
  __name: "Schema",
  props: {
    value: {},
    level: { default: 0 },
    name: {},
    compact: { type: Boolean },
    noncollapsible: { type: Boolean }
  },
  setup(B12) {
    const v11 = B12, y9 = computed(() => !(v11.noncollapsible || v11.level === 0)), j8 = (e14) => v11.noncollapsible && e14.stopPropagation();
    return (e14, I8) => typeof e14.value == "object" && Object.keys(e14.value).length ? (openBlock(), createBlock(unref(N), {
      key: 0,
      defaultOpen: e14.noncollapsible
    }, {
      default: withCtx(({ open: n15 }) => {
        var k10;
        return [
          createBaseVNode("div", {
            class: normalizeClass(["schema-card", [
              `schema-card--level-${e14.level}`,
              { "schema-card--compact": e14.compact, "schema-card--open": n15 }
            ]])
          }, [
            (k10 = e14.value) != null && k10.description && typeof e14.value.description == "string" ? (openBlock(), createElementBlock("div", F3, [
              createVNode(unref(h), {
                value: e14.value.description
              }, null, 8, ["value"])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(["schema-properties", { "schema-properties-open": n15 }])
            }, [
              withDirectives(createVNode(unref(Q), {
                as: e14.noncollapsible ? "div" : "button",
                class: normalizeClass(["schema-card-title", { "schema-card-title--compact": e14.compact }]),
                style: normalizeStyle({
                  top: `calc(var(--refs-header-height) +  calc(var(--schema-title-height) * ${e14.level}))`
                }),
                onClickCapture: j8
              }, {
                default: withCtx(() => {
                  var c24, a23, u12;
                  return [
                    e14.compact ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      y9.value ? (openBlock(), createBlock(unref(m2), {
                        key: 0,
                        class: normalizeClass(["schema-card-title-icon h-2.5", { "schema-card-title-icon--open": n15 }]),
                        icon: "Add",
                        thickness: "3"
                      }, null, 8, ["class"])) : createCommentVNode("", true),
                      n15 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode(" Hide " + toDisplayString(((c24 = e14.value) == null ? void 0 : c24.title) ?? "Child Attributes"), 1)
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        createTextVNode(" Show " + toDisplayString(((a23 = e14.value) == null ? void 0 : a23.title) ?? "Child Attributes"), 1)
                      ], 64))
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      y9.value ? (openBlock(), createBlock(unref(m2), {
                        key: 0,
                        class: normalizeClass(["schema-card-title-icon", { "schema-card-title-icon--open": n15 }]),
                        icon: "ChevronRight",
                        size: "md"
                      }, null, 8, ["class"])) : createCommentVNode("", true),
                      createVNode(c13, {
                        name: ((u12 = e14.value) == null ? void 0 : u12.title) ?? e14.name,
                        value: e14.value
                      }, null, 8, ["name", "value"])
                    ], 64))
                  ];
                }),
                _: 2
              }, 1032, ["as", "class", "style"]), [
                [vShow, !(e14.noncollapsible && e14.compact)]
              ]),
              createVNode(unref(V), { static: e14.noncollapsible }, {
                default: withCtx(() => {
                  var c24;
                  return [
                    e14.value.properties || e14.value.additionalProperties ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      e14.value.properties ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(Object.keys((c24 = e14.value) == null ? void 0 : c24.properties), (a23) => {
                        var u12, f18, b14, g7;
                        return openBlock(), createBlock(m12, {
                          key: a23,
                          compact: e14.compact,
                          level: e14.level,
                          name: a23,
                          required: ((u12 = e14.value.required) == null ? void 0 : u12.includes(a23)) || ((b14 = (f18 = e14.value.properties) == null ? void 0 : f18[a23]) == null ? void 0 : b14.required) === true,
                          value: (g7 = e14.value.properties) == null ? void 0 : g7[a23]
                        }, null, 8, ["compact", "level", "name", "required", "value"]);
                      }), 128)) : createCommentVNode("", true),
                      e14.value.additionalProperties ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        e14.value.additionalProperties === true || Object.keys(e14.value.additionalProperties).length === 0 || !e14.value.additionalProperties.type ? (openBlock(), createBlock(m12, {
                          key: 0,
                          additional: "",
                          compact: e14.compact,
                          level: e14.level,
                          noncollapsible: "",
                          value: {
                            type: "anything",
                            ...typeof e14.value.additionalProperties == "object" ? e14.value.additionalProperties : {}
                          }
                        }, null, 8, ["compact", "level", "value"])) : (openBlock(), createBlock(m12, {
                          key: 1,
                          additional: "",
                          compact: e14.compact,
                          level: e14.level,
                          noncollapsible: "",
                          value: e14.value.additionalProperties
                        }, null, 8, ["compact", "level", "value"]))
                      ], 64)) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createBlock(m12, {
                      key: 1,
                      compact: e14.compact,
                      level: e14.level,
                      name: e14.value.name,
                      value: e14.value
                    }, null, 8, ["compact", "level", "name", "value"]))
                  ];
                }),
                _: 1
              }, 8, ["static"])
            ], 2)
          ], 2)
        ];
      }),
      _: 1
    }, 8, ["defaultOpen"])) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/Schema.vue.js
var c14 = s4(K2, [["__scopeId", "data-v-ab8ac369"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDetail.vue2.js
var n8 = {
  key: 0,
  class: "property-detail-prefix"
};
var d9 = {
  key: 1,
  class: "property-detail-value"
};
var i16 = {
  key: 2,
  class: "property-detail-value"
};
var m13 = defineComponent({
  __name: "SchemaPropertyDetail",
  props: {
    truncate: { type: Boolean },
    code: { type: Boolean }
  },
  setup(c24) {
    return (e14, u12) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(["property-detail", { "property-detail-truncate": e14.truncate }])
    }, [
      e14.$slots.prefix ? (openBlock(), createElementBlock("div", n8, [
        renderSlot(e14.$slots, "prefix", {}, void 0, true),
        createTextVNode("  ")
      ])) : createCommentVNode("", true),
      e14.code ? (openBlock(), createElementBlock("code", d9, [
        renderSlot(e14.$slots, "default", {}, void 0, true)
      ])) : (openBlock(), createElementBlock("span", i16, [
        renderSlot(e14.$slots, "default", {}, void 0, true)
      ]))
    ], 2));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDetail.vue.js
var m14 = s4(m13, [["__scopeId", "data-v-16d94ef5"]]);

// node_modules/@scalar/api-reference/dist/components/Badge/Badge.vue.js
var n9 = {};
var d10 = { class: "badge" };
function s15(e14, a23) {
  return openBlock(), createElementBlock("div", d10, [
    renderSlot(e14.$slots, "default", {}, void 0, true)
  ]);
}
var l9 = s4(n9, [["render", s15], ["__scopeId", "data-v-190574ac"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyHeading.vue2.js
var S7 = { class: "property-heading" };
var V3 = {
  key: 0,
  class: "property-name"
};
var C5 = {
  key: 1,
  class: "property-additional"
};
var $4 = {
  key: 2,
  class: "property-deprecated"
};
var b6 = {
  key: 3,
  class: "property-required"
};
var D5 = {
  key: 4,
  class: "property-const"
};
var j2 = {
  key: 5,
  class: "property-details"
};
var E2 = {
  key: 6,
  class: "property-write-only"
};
var F4 = {
  key: 7,
  class: "property-read-only"
};
var K3 = defineComponent({
  __name: "SchemaPropertyHeading",
  props: {
    value: {},
    enum: { type: Boolean },
    required: { type: Boolean, default: false },
    additional: { type: Boolean }
  },
  setup(H10) {
    const O10 = ["oneOf", "anyOf", "allOf", "not"], w8 = (e14) => Array.isArray(e14 == null ? void 0 : e14.default) && e14.default.length === 1 ? e14.default[0] : e14 == null ? void 0 : e14.default;
    return (e14, T8) => {
      var v11, f18, k10, h10, g7, B12, q9;
      return openBlock(), createElementBlock("div", S7, [
        e14.$slots.name ? (openBlock(), createElementBlock("div", V3, [
          renderSlot(e14.$slots, "name", {}, void 0, true)
        ])) : createCommentVNode("", true),
        e14.additional ? (openBlock(), createElementBlock("div", C5, [
          (v11 = e14.value) != null && v11["x-additionalPropertiesName"] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(e14.value["x-additionalPropertiesName"]), 1)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode("additional properties")
          ], 64))
        ])) : createCommentVNode("", true),
        (f18 = e14.value) != null && f18.deprecated ? (openBlock(), createElementBlock("div", $4, [
          createVNode(unref(l9), null, {
            default: withCtx(() => [
              createTextVNode("deprecated")
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        e14.required ? (openBlock(), createElementBlock("div", b6, " required ")) : createCommentVNode("", true),
        (k10 = e14.value) != null && k10.const || (h10 = e14.value) != null && h10.enum && e14.value.enum.length === 1 ? (openBlock(), createElementBlock("div", D5, [
          createVNode(m14, { truncate: "" }, {
            prefix: withCtx(() => [
              createTextVNode("const:")
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e14.value.const ?? e14.value.enum[0]), 1)
            ]),
            _: 1
          })
        ])) : (g7 = e14.value) != null && g7.type ? (openBlock(), createElementBlock("div", j2, [
          createVNode(m14, null, {
            default: withCtx(() => {
              var d17, s19, p20;
              return [
                (s19 = (d17 = e14.value) == null ? void 0 : d17.items) != null && s19.type ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(e14.value.type) + " " + toDisplayString(e14.value.items.type) + "[] ", 1)
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(Array.isArray(e14.value.type) ? e14.value.type.join(" | ") : e14.value.type) + " " + toDisplayString((p20 = e14.value) != null && p20.nullable ? " | nullable" : ""), 1)
                ], 64)),
                e14.value.minItems || e14.value.maxItems ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  createTextVNode(toDisplayString(e14.value.minItems) + "…" + toDisplayString(e14.value.maxItems), 1)
                ], 64)) : createCommentVNode("", true)
              ];
            }),
            _: 1
          }),
          e14.value.minLength ? (openBlock(), createBlock(m14, { key: 0 }, {
            prefix: withCtx(() => [
              createTextVNode("min:")
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e14.value.minLength), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e14.value.maxLength ? (openBlock(), createBlock(m14, { key: 1 }, {
            prefix: withCtx(() => [
              createTextVNode("max:")
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e14.value.maxLength), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e14.value.uniqueItems ? (openBlock(), createBlock(m14, { key: 2 }, {
            default: withCtx(() => [
              createTextVNode(" unique! ")
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e14.value.format ? (openBlock(), createBlock(m14, { key: 3 }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(e14.value.format), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e14.value.minimum !== void 0 && e14.value.exclusiveMinimum ? (openBlock(), createBlock(m14, { key: 4 }, {
            prefix: withCtx(() => [
              createTextVNode("greater than:")
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e14.value.minimum), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e14.value.minimum !== void 0 && !e14.value.exclusiveMinimum ? (openBlock(), createBlock(m14, { key: 5 }, {
            prefix: withCtx(() => [
              createTextVNode("min:")
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e14.value.minimum), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e14.value.maximum !== void 0 && e14.value.exclusiveMaximum ? (openBlock(), createBlock(m14, { key: 6 }, {
            prefix: withCtx(() => [
              createTextVNode("less than:")
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e14.value.maximum), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e14.value.maximum !== void 0 && !e14.value.exclusiveMaximum ? (openBlock(), createBlock(m14, { key: 7 }, {
            prefix: withCtx(() => [
              createTextVNode("max:")
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e14.value.maximum), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e14.value.pattern ? (openBlock(), createBlock(m14, {
            key: 8,
            code: "",
            truncate: ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(e14.value.pattern), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e14.$props.enum ? (openBlock(), createBlock(m14, { key: 9 }, {
            default: withCtx(() => [
              createTextVNode("enum")
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e14.value.default ? (openBlock(), createBlock(m14, {
            key: 10,
            truncate: ""
          }, {
            prefix: withCtx(() => [
              createTextVNode("default:")
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(w8(e14.value)), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        (B12 = e14.value) != null && B12.writeOnly ? (openBlock(), createElementBlock("div", E2, " write-only ")) : (q9 = e14.value) != null && q9.readOnly ? (openBlock(), createElementBlock("div", F4, " read-only ")) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(O10.filter((d17) => {
          var s19, p20, I8;
          return ((s19 = e14.value) == null ? void 0 : s19[d17]) || ((I8 = (p20 = e14.value) == null ? void 0 : p20.items) == null ? void 0 : I8[d17]);
        }), (d17) => (openBlock(), createBlock(unref(l9), { key: d17 }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(d17), 1)
          ]),
          _: 2
        }, 1024))), 128))
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyHeading.vue.js
var m15 = s4(K3, [["__scopeId", "data-v-51fd8de8"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaProperty.vue2.js
var G = (d17) => (pushScopeId("data-v-d1d8e2ad"), d17 = d17(), popScopeId(), d17);
var J2 = {
  key: 0,
  class: "property-description"
};
var K4 = {
  key: 1,
  class: "property-description"
};
var Q3 = {
  key: 2,
  class: "property-example custom-scroll"
};
var W2 = G(() => createBaseVNode("span", { class: "property-example-label" }, "Example", -1));
var X2 = { class: "property-example-value" };
var Y2 = {
  key: 3,
  class: "property-enum"
};
var _3 = {
  key: 0,
  class: "property-list"
};
var x3 = { class: "property-heading" };
var ee = { class: "property-name" };
var te2 = { class: "property-description" };
var le = {
  key: 1,
  class: "property-enum-values"
};
var oe = {
  key: 4,
  class: "children"
};
var re = {
  key: 0,
  class: "children"
};
var ae2 = {
  key: 0,
  class: "property-rule"
};
var ne2 = {
  key: 1,
  class: "property-rule"
};
var ue2 = defineComponent({
  __name: "SchemaProperty",
  props: {
    value: {},
    level: { default: 0 },
    name: {},
    required: { type: Boolean, default: false },
    compact: { type: Boolean, default: false },
    description: {},
    additional: { type: Boolean }
  },
  setup(d17) {
    const k10 = {
      integer: {
        _default: "Integer numbers.",
        int32: "Signed 32-bit integers (commonly used integer type).",
        int64: "Signed 64-bit integers (long type)."
      },
      string: {
        date: "full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21",
        "date-time": "the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z",
        password: "a hint to UIs to mask the input",
        byte: "base64-encoded characters, for example, U3dhZ2dlciByb2Nrcw==",
        binary: "binary data, used to describe files"
      }
    }, g7 = function(e14, o11) {
      return o11 != null && o11.properties || o11 != null && o11.additionalProperties ? null : e14 || (o11 == null ? void 0 : o11.description) || null;
    }, b14 = function(e14) {
      return !e14 || !k10[e14.type] ? null : k10[e14.type][e14.format || "_default"];
    }, u12 = function(e14) {
      var o11;
      return (e14 == null ? void 0 : e14.enum) || ((o11 = e14 == null ? void 0 : e14.items) == null ? void 0 : o11.enum) || [];
    }, U5 = ["oneOf", "anyOf", "allOf", "not"];
    return (e14, o11) => {
      var S12, B12, C8, w8, D11, I8, N6, P11, q9, E8, F8;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["property", [
          `property--level-${e14.level}`,
          {
            "property--compact": e14.compact,
            "property--deprecated": (S12 = e14.value) == null ? void 0 : S12.deprecated
          }
        ]])
      }, [
        createVNode(m15, {
          additional: e14.additional,
          enum: u12(e14.value).length > 1,
          required: e14.required,
          value: e14.value
        }, createSlots({ _: 2 }, [
          e14.name ? {
            name: "name",
            fn: withCtx(() => [
              createTextVNode(toDisplayString(e14.name), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["additional", "enum", "required", "value"]),
        g7(e14.description, e14.value) ? (openBlock(), createElementBlock("div", J2, [
          createVNode(unref(h), {
            value: g7(e14.description, e14.value)
          }, null, 8, ["value"])
        ])) : b14(e14.value) ? (openBlock(), createElementBlock("div", K4, [
          createVNode(unref(h), {
            value: b14(e14.value) || ""
          }, null, 8, ["value"])
        ])) : createCommentVNode("", true),
        (B12 = e14.value) != null && B12.example || (w8 = (C8 = e14.value) == null ? void 0 : C8.items) != null && w8.example ? (openBlock(), createElementBlock("div", Q3, [
          W2,
          createBaseVNode("code", X2, toDisplayString(e14.value.example || ((D11 = e14.value) == null ? void 0 : D11.items.example)), 1)
        ])) : createCommentVNode("", true),
        ((I8 = u12(e14.value)) == null ? void 0 : I8.length) > 1 ? (openBlock(), createElementBlock("div", Y2, [
          (N6 = e14.value) != null && N6["x-enumDescriptions"] ? (openBlock(), createElementBlock("div", _3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(u12(e14.value), (r16) => (openBlock(), createElementBlock("div", {
              key: r16,
              class: "property"
            }, [
              createBaseVNode("div", x3, [
                createBaseVNode("div", ee, toDisplayString(r16), 1)
              ]),
              createBaseVNode("div", te2, [
                createVNode(unref(h), {
                  value: e14.value["x-enumDescriptions"][r16]
                }, null, 8, ["value"])
              ])
            ]))), 128))
          ])) : (openBlock(), createElementBlock("ul", le, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(u12(e14.value), (r16) => (openBlock(), createElementBlock("li", {
              key: r16,
              class: "property-enum-value"
            }, toDisplayString(r16), 1))), 128))
          ]))
        ])) : createCommentVNode("", true),
        ((P11 = e14.value) == null ? void 0 : P11.type) === "object" && ((q9 = e14.value) != null && q9.properties || (E8 = e14.value) != null && E8.additionalProperties) ? (openBlock(), createElementBlock("div", oe, [
          createVNode(c14, {
            compact: e14.compact,
            level: e14.level + 1,
            value: e14.value
          }, null, 8, ["compact", "level", "value"])
        ])) : createCommentVNode("", true),
        (F8 = e14.value) != null && F8.items ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
          ["object"].includes(e14.value.items.type) ? (openBlock(), createElementBlock("div", re, [
            createVNode(c14, {
              compact: e14.compact,
              level: e14.level + 1,
              value: e14.value.items
            }, null, 8, ["compact", "level", "value"])
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        (openBlock(), createElementBlock(Fragment, null, renderList(U5, (r16) => {
          var O10, j8, R8;
          return openBlock(), createElementBlock(Fragment, { key: r16 }, [
            (O10 = e14.value) != null && O10[r16] ? (openBlock(), createElementBlock("div", ae2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(e14.value[r16], (v11, y9) => (openBlock(), createBlock(c14, {
                key: y9,
                compact: e14.compact,
                level: e14.level + 1,
                value: v11
              }, null, 8, ["compact", "level", "value"]))), 128))
            ])) : createCommentVNode("", true),
            (R8 = (j8 = e14.value) == null ? void 0 : j8.items) != null && R8[r16] && e14.level < 3 ? (openBlock(), createElementBlock("div", ne2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(e14.value.items[r16], (v11, y9) => (openBlock(), createBlock(c14, {
                key: y9,
                compact: e14.compact,
                level: e14.level + 1,
                value: v11
              }, null, 8, ["compact", "level", "value"]))), 128))
            ])) : createCommentVNode("", true)
          ], 64);
        }), 64))
      ], 2);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaProperty.vue.js
var m12 = s4(ue2, [["__scopeId", "data-v-d1d8e2ad"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Operation/ParameterItem.vue2.js
var S8 = { class: "parameter-item" };
var V4 = { class: "parameter-item-name" };
var T3 = { class: "parameter-item-type" };
var j3 = {
  key: 1,
  class: "parameter-item-container parameter-item-container-markdown"
};
var P5 = defineComponent({
  __name: "ParameterItem",
  props: {
    parameter: {},
    showChildren: { type: Boolean, default: false },
    collapsableItems: { type: Boolean, default: false }
  },
  setup(C8) {
    const t12 = C8, r16 = ref(false), k10 = computed(() => t12.parameter.content ? Object.keys(t12.parameter.content) : []), n15 = ref(
      k10.value[0]
    );
    t12.parameter.content && "application/json" in t12.parameter.content && (n15.value = "application/json");
    const a23 = computed(() => t12.collapsableItems && t12.parameter.content);
    return (e14, o11) => {
      var p20, i24;
      return openBlock(), createElementBlock("li", S8, [
        a23.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["flex parameter-item-trigger", { "parameter-item-trigger-open": r16.value }]),
          onClick: o11[1] || (o11[1] = (c24) => r16.value = !r16.value)
        }, [
          createVNode(unref(m2), {
            class: "parameter-item-icon",
            icon: r16.value ? "ChevronDown" : "ChevronRight",
            size: "md",
            thickness: "1.75"
          }, null, 8, ["icon"]),
          createBaseVNode("span", V4, toDisplayString(e14.parameter.name), 1),
          createBaseVNode("span", T3, toDisplayString(e14.parameter.description), 1),
          a23.value && t12.parameter.content ? (openBlock(), createBlock(d7, {
            key: 0,
            class: "parameter-item-content-type",
            defaultValue: n15.value,
            requestBody: t12.parameter,
            onSelectContentType: o11[0] || (o11[0] = ({ contentType: c24 }) => n15.value = c24)
          }, null, 8, ["defaultValue", "requestBody"])) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        a23.value && r16.value || !a23.value ? (openBlock(), createElementBlock("div", j3, [
          createVNode(unref(m12), {
            compact: "",
            description: a23.value ? "" : e14.parameter.description,
            level: 0,
            name: a23.value ? "" : e14.parameter.name,
            noncollapsible: e14.showChildren,
            required: e14.parameter.required,
            value: e14.parameter.content ? (i24 = (p20 = e14.parameter.content) == null ? void 0 : p20[n15.value]) == null ? void 0 : i24.schema : e14.parameter.schema
          }, null, 8, ["description", "name", "noncollapsible", "required", "value"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/ParameterItem.vue.js
var e9 = s4(P5, [["__scopeId", "data-v-41582b48"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Operation/Parameters.vue2.js
var h5 = {
  key: 0,
  class: "parameters"
};
var u5 = { class: "parameters-title" };
var f7 = { class: "parameter-list" };
var I4 = defineComponent({
  __name: "Parameters",
  props: {
    parameters: {},
    showChildren: { type: Boolean, default: false },
    collapsableItems: { type: Boolean, default: false }
  },
  setup(_11) {
    return (e14, C8) => {
      var r16;
      return (r16 = e14.parameters) != null && r16.length ? (openBlock(), createElementBlock("div", h5, [
        createBaseVNode("div", u5, [
          renderSlot(e14.$slots, "title", {}, void 0, true)
        ]),
        createBaseVNode("ul", f7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e14.parameters, (a23) => (openBlock(), createBlock(e9, {
            key: a23.name,
            collapsableItems: e14.collapsableItems,
            parameter: a23,
            showChildren: e14.showChildren
          }, null, 8, ["collapsableItems", "parameter", "showChildren"]))), 128))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/Parameters.vue.js
var m16 = s4(I4, [["__scopeId", "data-v-eade05ab"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Operation/RequestBody.vue2.js
var E3 = { key: 0 };
var M5 = { class: "request-body-title" };
var T4 = ["value"];
var x4 = {
  key: 0,
  class: "request-body-description"
};
var z3 = {
  key: 0,
  class: "request-body-schema"
};
var R3 = defineComponent({
  __name: "RequestBody",
  props: {
    requestBody: {}
  },
  setup(h10) {
    var c24;
    const e14 = h10, s19 = computed(() => {
      var l14;
      return (l14 = e14.requestBody) != null && l14.content ? Object.keys(e14.requestBody.content) : [];
    }), t12 = ref("application/json");
    return (c24 = e14.requestBody) != null && c24.content && s19.value.length > 0 && (t12.value = s19.value[0]), (l14, d17) => {
      var i24, v11, y9, m29;
      return e14 != null && e14.requestBody ? (openBlock(), createElementBlock("div", E3, [
        createBaseVNode("div", M5, [
          renderSlot(l14.$slots, "title", {}, void 0, true),
          createBaseVNode("div", {
            class: normalizeClass(["request-body-title-select", { "request-body-title-no-select": s19.value.length <= 1 }])
          }, [
            createBaseVNode("span", null, toDisplayString(t12.value), 1),
            e14 != null && e14.requestBody && s19.value.length > 1 ? withDirectives((openBlock(), createElementBlock("select", {
              key: 0,
              "onUpdate:modelValue": d17[0] || (d17[0] = (q9) => t12.value = q9)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList((i24 = e14.requestBody) == null ? void 0 : i24.content, (q9, r16) => (openBlock(), createElementBlock("option", {
                key: r16,
                value: r16
              }, toDisplayString(r16), 9, T4))), 128))
            ], 512)), [
              [vModelSelect, t12.value]
            ]) : createCommentVNode("", true)
          ], 2),
          e14 != null && e14.requestBody.description ? (openBlock(), createElementBlock("div", x4, [
            createVNode(unref(h), {
              value: e14.requestBody.description
            }, null, 8, ["value"])
          ])) : createCommentVNode("", true)
        ]),
        (v11 = e14 == null ? void 0 : e14.requestBody.content) != null && v11[t12.value] ? (openBlock(), createElementBlock("div", z3, [
          createVNode(unref(c14), {
            compact: "",
            noncollapsible: "",
            value: (m29 = (y9 = e14 == null ? void 0 : e14.requestBody.content) == null ? void 0 : y9[t12.value]) == null ? void 0 : m29.schema
          }, null, 8, ["value"])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/RequestBody.vue.js
var p11 = s4(R3, [["__scopeId", "data-v-3b43342b"]]);

// node_modules/@scalar/api-reference/dist/hooks/useOperation.js
function t11(h10) {
  return {
    parameterMap: computed(() => {
      var n15;
      const s19 = ((n15 = h10.operation.information) == null ? void 0 : n15.parameters) ?? [], o11 = {
        path: [],
        query: [],
        header: [],
        body: [],
        formData: []
      };
      return h10.operation.pathParameters && h10.operation.pathParameters.forEach((i24) => {
        i24.in === "path" ? o11.path.push(i24) : i24.in === "query" ? o11.query.push(i24) : i24.in === "header" ? o11.header.push(i24) : i24.in === "body" ? o11.body.push(i24) : i24.in === "formData" && o11.formData.push(i24);
      }), s19 && s19.forEach((i24) => {
        i24.in === "path" ? o11.path.push(i24) : i24.in === "query" ? o11.query.push(i24) : i24.in === "header" ? o11.header.push(i24) : i24.in === "body" ? o11.body.push(i24) : i24.in === "formData" && o11.formData.push(i24);
      }), o11;
    })
  };
}

// node_modules/@scalar/api-reference/dist/hooks/useResponses.js
function i17(e14) {
  return { responses: computed(() => {
    if (!e14.information) return [];
    const { responses: n15 } = e14.information, o11 = [];
    return n15 && Object.keys(n15).forEach((r16) => {
      o11.push({
        name: r16,
        description: n15[r16].description,
        content: n15[r16].content
      });
    }), o11;
  }) };
}

// node_modules/@scalar/api-reference/dist/components/Content/Operation/EndpointDetailsCard.vue2.js
var B6 = { class: "endpoint-details-card" };
var k5 = defineComponent({
  __name: "EndpointDetailsCard",
  props: {
    operation: {}
  },
  setup(p20) {
    const i24 = p20, { parameterMap: o11 } = t11(i24), { responses: d17 } = i17(i24.operation);
    return (m29, h10) => {
      var n15;
      return openBlock(), createElementBlock("div", B6, [
        createVNode(m16, {
          class: "endpoint-details-card-item",
          parameters: unref(o11).path
        }, {
          title: withCtx(() => [
            createTextVNode("Path Parameters")
          ]),
          _: 1
        }, 8, ["parameters"]),
        createVNode(m16, {
          class: "endpoint-details-card-item",
          parameters: unref(o11).query
        }, {
          title: withCtx(() => [
            createTextVNode("Query Parameters")
          ]),
          _: 1
        }, 8, ["parameters"]),
        createVNode(m16, {
          class: "endpoint-details-card-item",
          parameters: unref(o11).header
        }, {
          title: withCtx(() => [
            createTextVNode("Headers")
          ]),
          _: 1
        }, 8, ["parameters"]),
        createVNode(p11, {
          class: "endpoint-details-card-item",
          requestBody: (n15 = m29.operation.information) == null ? void 0 : n15.requestBody
        }, {
          title: withCtx(() => [
            createTextVNode("Body")
          ]),
          _: 1
        }, 8, ["requestBody"]),
        createVNode(m16, {
          class: "endpoint-details-card-item",
          parameters: unref(d17)
        }, {
          title: withCtx(() => [
            createTextVNode("Responses")
          ]),
          _: 1
        }, 8, ["parameters"])
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/EndpointDetailsCard.vue.js
var i18 = s4(k5, [["__scopeId", "data-v-102733a0"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Operation/EndpointPath.vue2.js
var k6 = { key: 0 };
var B7 = defineComponent({
  __name: "EndpointPath",
  props: {
    path: {},
    deprecated: { type: Boolean }
  },
  setup(r16) {
    const p20 = r16, c24 = (n15) => n15.startsWith("{") && n15.endsWith("}"), d17 = computed(() => p20.path.split(/({[^}]+})/));
    return (n15, y9) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(["endpoint-path", { deprecated: n15.deprecated }])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(d17.value, (a23, i24) => (openBlock(), createElementBlock(Fragment, { key: i24 }, [
        c24(a23) ? (openBlock(), createElementBlock("em", k6, toDisplayString(a23), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(a23), 1)
        ], 64))
      ], 64))), 128))
    ], 2));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/EndpointPath.vue.js
var r8 = s4(B7, [["__scopeId", "data-v-b5ffe25a"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Operation/TestRequestButton.vue2.js
var h6 = (e14) => (pushScopeId("data-v-1dbecca0"), e14 = e14(), popScopeId(), e14);
var f8 = ["method"];
var _4 = h6(() => createBaseVNode("span", null, "Test Request", -1));
var V5 = defineComponent({
  __name: "TestRequestButton",
  props: {
    operation: {}
  },
  setup(e14) {
    return (t12, o11) => (openBlock(), createElementBlock("button", {
      class: "show-api-client-button",
      method: t12.operation.httpVerb,
      type: "button",
      onClick: o11[0] || (o11[0] = withModifiers((b14) => unref(n).emit({
        open: {
          path: t12.operation.path,
          method: t12.operation.httpVerb
        }
      }), ["stop"]))
    }, [
      createVNode(unref(m2), {
        icon: "Play",
        size: "sm"
      }),
      _4
    ], 8, f8));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/TestRequestButton.vue.js
var a12 = s4(V5, [["__scopeId", "data-v-1dbecca0"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionAccordion.vue2.js
var B8 = { class: "section-accordion-button-content" };
var y3 = {
  key: 0,
  class: "section-accordion-button-actions"
};
var D6 = {
  key: 0,
  class: "section-accordion-description"
};
var w2 = { class: "section-accordion-content-card" };
var A4 = defineComponent({
  __name: "SectionAccordion",
  props: {
    id: {},
    transparent: { type: Boolean }
  },
  setup(E8) {
    const i24 = ref(), u12 = useElementHover(i24);
    return (o11, N6) => (openBlock(), createBlock(x2, {
      id: o11.id,
      class: "section-wrapper"
    }, {
      default: withCtx(() => [
        createVNode(unref(N), {
          as: "section",
          class: normalizeClass(["section-accordion", { "section-accordion-transparent": o11.transparent }])
        }, {
          default: withCtx(({ open: r16 }) => [
            createVNode(unref(Q), {
              ref_key: "button",
              ref: i24,
              class: "section-accordion-button"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", B8, [
                  renderSlot(o11.$slots, "title", {}, void 0, true)
                ]),
                o11.$slots.actions ? (openBlock(), createElementBlock("div", y3, [
                  renderSlot(o11.$slots, "actions", {
                    active: unref(u12) || r16
                  }, void 0, true)
                ])) : createCommentVNode("", true),
                createVNode(unref(m2), {
                  class: "section-accordion-chevron",
                  icon: r16 ? "ChevronDown" : "ChevronRight"
                }, null, 8, ["icon"])
              ]),
              _: 2
            }, 1536),
            createVNode(unref(V), { class: "section-accordion-content" }, {
              default: withCtx(() => [
                o11.$slots.description ? (openBlock(), createElementBlock("div", D6, [
                  renderSlot(o11.$slots, "description", {}, void 0, true)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", w2, [
                  renderSlot(o11.$slots, "default", {}, void 0, true)
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 8, ["id"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/SectionAccordion.vue.js
var i19 = s4(A4, [["__scopeId", "data-v-07cabcb0"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Operation/PathResponses/ExampleResponse.vue2.js
var R4 = {
  key: 0,
  class: "rule"
};
var q4 = { class: "rule-title" };
var w3 = { class: "rule-items" };
var z4 = {
  key: 2,
  class: "empty-state"
};
var Q4 = defineComponent({
  __name: "ExampleResponse",
  props: {
    response: {}
  },
  setup(G5) {
    const F8 = ["oneOf", "anyOf", "not"], p20 = (e14) => e14.reduce((i24, m29) => ({
      ...i24,
      ...m29
    }), {});
    return (e14, i24) => {
      var m29, d17, g7, h10, y9, u12, f18, k10, b14;
      return (m29 = e14.response) != null && m29.example ? (openBlock(), createBlock(unref(M), {
        key: 0,
        class: "bg-b-2",
        content: unref(prettyPrintJson)((d17 = e14.response) == null ? void 0 : d17.example),
        lang: "json"
      }, null, 8, ["content"])) : (g7 = e14.response) != null && g7.schema ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        (openBlock(), createElementBlock(Fragment, null, renderList(F8, (n15) => {
          var S12, j8, O10, B12, E8, N6;
          return openBlock(), createElementBlock(Fragment, { key: n15 }, [
            (S12 = e14.response) != null && S12.schema[n15] && (((j8 = e14.response) == null ? void 0 : j8.schema[n15].length) > 1 || n15 === "not") ? (openBlock(), createElementBlock("div", R4, [
              createBaseVNode("div", q4, toDisplayString(n15), 1),
              createBaseVNode("ol", w3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList((O10 = e14.response) == null ? void 0 : O10.schema[n15], (_11, A7) => (openBlock(), createElementBlock("li", {
                  key: A7,
                  class: "rule-item"
                }, [
                  createVNode(unref(M), {
                    class: "bg-b-2",
                    content: unref(getExampleFromSchema)(_11, {
                      emptyString: "…",
                      mode: "read"
                    }),
                    lang: "json"
                  }, null, 8, ["content"])
                ]))), 128))
              ])
            ])) : (B12 = e14.response) != null && B12.schema[n15] && ((E8 = e14.response) == null ? void 0 : E8.schema[n15].length) === 1 ? (openBlock(), createBlock(unref(M), {
              key: 1,
              class: "bg-b-2",
              content: unref(getExampleFromSchema)((N6 = e14.response) == null ? void 0 : N6.schema[n15][0], {
                emptyString: "…",
                mode: "read"
              }),
              lang: "json"
            }, null, 8, ["content"])) : createCommentVNode("", true)
          ], 64);
        }), 64)),
        (h10 = e14.response) != null && h10.schema.allOf ? (openBlock(), createBlock(unref(M), {
          key: 0,
          class: "bg-b-2",
          content: p20(
            (y9 = e14.response) == null ? void 0 : y9.schema.allOf.map(
              (n15) => unref(getExampleFromSchema)(n15, {
                emptyString: "…",
                mode: "read"
              })
            )
          ),
          lang: "json"
        }, null, 8, ["content"])) : (f18 = (u12 = e14.response) == null ? void 0 : u12.schema.items) != null && f18.allOf ? (openBlock(), createBlock(unref(M), {
          key: 1,
          class: "bg-b-2",
          content: p20(
            (k10 = e14.response) == null ? void 0 : k10.schema.items.allOf.map(
              (n15) => unref(getExampleFromSchema)(n15, {
                emptyString: "…",
                mode: "read"
              })
            )
          ),
          lang: "json"
        }, null, 8, ["content"])) : (openBlock(), createBlock(unref(M), {
          key: 2,
          class: "bg-b-2",
          content: unref(prettyPrintJson)(
            unref(getExampleFromSchema)((b14 = e14.response) == null ? void 0 : b14.schema, {
              emptyString: "…",
              mode: "read"
            })
          ),
          lang: "json"
        }, null, 8, ["content"]))
      ], 64)) : (openBlock(), createElementBlock("div", z4, " No Body "));
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/PathResponses/ExampleResponse.vue.js
var r9 = s4(Q4, [["__scopeId", "data-v-65d90380"]]);

// node_modules/@scalar/api-reference/dist/components/Card/CardTabHeader.vue2.js
var g = defineComponent({
  __name: "CardTabHeader",
  emits: ["change"],
  setup(p20, { emit: s19 }) {
    const c24 = s19, n15 = (e14) => {
      c24("change", e14);
    };
    return (e14, _11) => (openBlock(), createBlock(f6, { class: "scalar-card-header scalar-card-header-tabs" }, {
      actions: withCtx(() => [
        renderSlot(e14.$slots, "actions", {}, void 0, true)
      ]),
      default: withCtx(() => [
        createVNode(unref(me), { onChange: n15 }, {
          default: withCtx(() => [
            createVNode(unref(pe), { class: "tab-list custom-scroll" }, {
              default: withCtx(() => [
                renderSlot(e14.$slots, "default", {}, void 0, true)
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
});

// node_modules/@scalar/api-reference/dist/components/Card/CardTabHeader.vue.js
var e10 = s4(g, [["__scopeId", "data-v-03fdb072"]]);

// node_modules/@scalar/api-reference/dist/components/Card/CardTab.vue2.js
var i20 = defineComponent({
  __name: "CardTab",
  setup(m29) {
    return (t12, d17) => (openBlock(), createBlock(unref(xe), { as: "template" }, {
      default: withCtx(({ selected: a23 }) => [
        createBaseVNode("button", {
          class: normalizeClass({ tab: true, "tab-selected": a23 }),
          type: "button"
        }, [
          createBaseVNode("span", null, [
            renderSlot(t12.$slots, "default", {}, void 0, true)
          ])
        ], 2)
      ]),
      _: 3
    }));
  }
});

// node_modules/@scalar/api-reference/dist/components/Card/CardTab.vue.js
var f9 = s4(i20, [["__scopeId", "data-v-f373ecc2"]]);

// node_modules/@scalar/api-reference/dist/components/Card/CardFooter.vue2.js
var i21 = defineComponent({
  __name: "CardFooter",
  props: {
    muted: { type: Boolean },
    contrast: { type: Boolean },
    frameless: { type: Boolean },
    transparent: { type: Boolean },
    borderless: { type: Boolean }
  },
  setup(e14) {
    const o11 = e14;
    return (t12, m29) => (openBlock(), createBlock(d6, normalizeProps(guardReactiveProps(o11)), {
      default: withCtx(() => [
        renderSlot(t12.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 16));
  }
});

// node_modules/@scalar/api-reference/dist/components/Card/CardFooter.vue.js
var p12 = s4(i21, [["__scopeId", "data-v-918ab8d6"]]);

// node_modules/@scalar/api-reference/dist/features/ExampleRequest/TextSelect.vue.js
var v6 = ["value"];
var _5 = ["label"];
var c15 = ["value"];
var g2 = ["value"];
var f10 = defineComponent({
  __name: "TextSelect",
  props: {
    modelValue: {},
    options: {}
  },
  emits: ["update:modelValue"],
  setup(k10) {
    return (a23, n15) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["text-select", a23.options.length === 1 ? "text-select--single-option" : ""])
    }, [
      createBaseVNode("span", null, [
        renderSlot(a23.$slots, "default")
      ]),
      createBaseVNode("select", {
        value: a23.modelValue,
        onInput: n15[0] || (n15[0] = (e14) => a23.$emit("update:modelValue", e14.target.value))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(a23.options, (e14) => (openBlock(), createElementBlock(Fragment, {
          key: e14.value
        }, [
          e14.options ? (openBlock(), createElementBlock("optgroup", {
            key: 0,
            label: e14.label
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e14.options, (o11) => (openBlock(), createElementBlock("option", {
              key: o11.value,
              value: o11.value
            }, toDisplayString(o11.label), 9, c15))), 128))
          ], 8, _5)) : (openBlock(), createElementBlock("option", {
            key: e14.value,
            value: e14.value
          }, toDisplayString(e14.label), 9, g2))
        ], 64))), 128))
      ], 40, v6)
    ], 2));
  }
});

// node_modules/@scalar/api-reference/dist/features/ExampleRequest/ExamplePicker.vue2.js
var k7 = defineComponent({
  __name: "ExamplePicker",
  props: {
    examples: {}
  },
  emits: ["update:modelValue"],
  setup(p20, { emit: r16 }) {
    const l14 = p20, n15 = r16, t12 = ref(Object.keys(l14.examples)[0]);
    function u12(e14) {
      e14 && (t12.value = e14);
    }
    watch(
      () => l14.examples,
      () => {
        u12(Object.keys(l14.examples)[0]);
      },
      { immediate: true }
    ), watch(
      t12,
      () => {
        t12.value && n15("update:modelValue", t12.value);
      },
      { immediate: true }
    );
    function o11(e14) {
      if (!e14)
        return "Select an example";
      const a23 = l14.examples[e14];
      return (a23 == null ? void 0 : a23.summary) ?? e14;
    }
    return (e14, a23) => (openBlock(), createBlock(f10, {
      modelValue: t12.value,
      "onUpdate:modelValue": a23[0] || (a23[0] = (m29) => t12.value = m29),
      class: "example-selector",
      options: Object.keys(e14.examples).map((m29) => ({
        label: o11(m29),
        value: m29
      }))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(o11(t12.value)), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options"]));
  }
});

// node_modules/@scalar/api-reference/dist/features/ExampleRequest/ExamplePicker.vue.js
var p13 = s4(k7, [["__scopeId", "data-v-090632a2"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Operation/PathResponses/PathResponses.vue2.js
var Y3 = (u12) => (pushScopeId("data-v-f7baab98"), u12 = u12(), popScopeId(), u12);
var Z3 = {
  key: 1,
  class: "scalar-card-checkbox"
};
var $5 = Y3(() => createBaseVNode("span", { class: "scalar-card-checkbox-checkmark" }, null, -1));
var z5 = { class: "scalar-card-container custom-scroll" };
var ee2 = {
  key: 1,
  class: "response-description"
};
var ie = defineComponent({
  __name: "PathResponses",
  props: {
    operation: {}
  },
  setup(u12) {
    const k10 = u12, { copyToClipboard: V8 } = a9(), p20 = ref(), C8 = computed(
      () => {
        var e14, a23;
        return Object.keys(((a23 = (e14 = k10 == null ? void 0 : k10.operation) == null ? void 0 : e14.information) == null ? void 0 : a23.responses) ?? {}).sort();
      }
    ), y9 = computed(
      () => !!o11.value.examples
    ), E8 = ref(0), m29 = computed(() => {
      var a23, i24;
      const e14 = C8.value[E8.value];
      return (i24 = (a23 = k10.operation.information) == null ? void 0 : a23.responses) == null ? void 0 : i24[e14];
    }), o11 = computed(() => {
      var a23;
      const e14 = normalizeMimeTypeObject(
        (a23 = m29.value) == null ? void 0 : a23.content
      );
      return (
        // OpenAPI 3.x
        (e14 == null ? void 0 : e14["application/json"]) ?? (e14 == null ? void 0 : e14["text/plain"]) ?? // Swagger 2.0
        m29.value
      );
    }), j8 = () => {
      if (y9.value) {
        if (Array.isArray(o11.value.examples))
          return o11.value.examples[0];
        {
          const e14 = Object.keys(o11.value.examples)[0];
          return o11.value.examples[e14];
        }
      } else return o11.value.example;
    }, h10 = computed(() => ({
      ...o11.value,
      example: y9.value && p20.value ? o11.value.examples[p20.value].value ?? o11.value.examples[p20.value] : j8()
    })), I8 = (e14) => {
      E8.value = e14, p20.value = void 0;
    }, _11 = ref(false);
    return (e14, a23) => C8.value.length ? (openBlock(), createBlock(unref(i13), { key: 0 }, {
      default: withCtx(() => {
        var i24;
        return [
          createVNode(unref(e10), {
            muted: "",
            x: "as",
            onChange: I8
          }, {
            actions: withCtx(() => {
              var l14, d17;
              return [
                (l14 = o11.value) != null && l14.example ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "code-copy",
                  type: "button",
                  onClick: a23[0] || (a23[0] = () => {
                    var n15;
                    return unref(V8)((n15 = o11.value) == null ? void 0 : n15.example);
                  })
                }, [
                  createVNode(unref(m2), {
                    icon: "Clipboard",
                    width: "12px",
                    x: "asd"
                  })
                ])) : createCommentVNode("", true),
                (d17 = o11.value) != null && d17.schema ? (openBlock(), createElementBlock("label", Z3, [
                  createTextVNode(" Show Schema "),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": a23[1] || (a23[1] = (n15) => _11.value = n15),
                    class: "scalar-card-checkbox-input",
                    type: "checkbox"
                  }, null, 512), [
                    [vModelCheckbox, _11.value]
                  ]),
                  $5
                ])) : createCommentVNode("", true)
              ];
            }),
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(C8.value, (l14) => (openBlock(), createBlock(unref(f9), { key: l14 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(l14), 1)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          }),
          createBaseVNode("div", z5, [
            createVNode(unref(d6), { muted: "" }, {
              default: withCtx(() => {
                var l14;
                return [
                  (l14 = o11.value) != null && l14.schema ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    _11.value && h10.value ? (openBlock(), createBlock(unref(M), {
                      key: 0,
                      content: h10.value,
                      lang: "json"
                    }, null, 8, ["content"])) : (openBlock(), createBlock(r9, {
                      key: 1,
                      response: h10.value
                    }, null, 8, ["response"]))
                  ], 64)) : (openBlock(), createBlock(r9, {
                    key: 1,
                    response: h10.value
                  }, null, 8, ["response"]))
                ];
              }),
              _: 1
            })
          ]),
          (i24 = m29.value) != null && i24.description || y9.value ? (openBlock(), createBlock(unref(p12), {
            key: 0,
            class: "response-card-footer",
            muted: ""
          }, {
            default: withCtx(() => {
              var l14, d17;
              return [
                y9.value ? (openBlock(), createBlock(unref(p13), {
                  key: 0,
                  class: "response-example-selector",
                  examples: (l14 = o11.value) == null ? void 0 : l14.examples,
                  "onUpdate:modelValue": a23[2] || (a23[2] = (n15) => p20.value = n15)
                }, null, 8, ["examples"])) : (d17 = m29.value) != null && d17.description ? (openBlock(), createElementBlock("div", ee2, [
                  createVNode(unref(h), {
                    class: "markdown",
                    value: m29.value.description
                  }, null, 8, ["value"])
                ])) : createCommentVNode("", true)
              ];
            }),
            _: 1
          })) : createCommentVNode("", true)
        ];
      }),
      _: 1
    })) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/PathResponses/PathResponses.vue.js
var r10 = s4(ie, [["__scopeId", "data-v-f7baab98"]]);

// node_modules/@scalar/snippetz/dist/index.js
function u6(n15) {
  return n15.reduce((t12, e14) => (t12[e14.name] = e14.value, t12), {});
}
function p14(n15) {
  return /\s|-/.test(n15);
}
function c16(n15, t12 = 0) {
  let e14 = [], a23 = " ".repeat(t12), s19 = " ".repeat(t12 + 2);
  for (const [h10, i24] of Object.entries(n15)) {
    let d17 = p14(h10) ? `'${h10}'` : h10;
    if (Array.isArray(i24)) {
      const r16 = i24.map((o11) => typeof o11 == "string" ? `'${o11}'` : o11 && typeof o11 == "object" ? c16(o11, t12 + 2) : o11).join(`, ${s19}`);
      e14.push(`${s19}${d17}: [${r16}]`);
    } else if (i24 && typeof i24 == "object")
      e14.push(
        `${s19}${d17}: ${c16(
          i24,
          t12 + 2
        )}`
      );
    else if (typeof i24 == "string") {
      let r16 = `${i24}`;
      if (i24.startsWith("JSON.stringify")) {
        const o11 = i24.split(`
`);
        o11.length > 1 && (r16 = o11.map((f18, l14) => l14 === 0 ? f18 : `${s19}${f18}`).join(`
`));
      } else
        r16 = `'${i24}'`;
      e14.push(`${s19}${d17}: ${r16}`);
    } else
      e14.push(`${s19}${d17}: ${i24}`);
  }
  return `{
${e14.join(`,
`)}
${a23}}`;
}
function m17(n15) {
  var d17, r16;
  const t12 = {
    method: "GET",
    ...n15
  };
  t12.method = t12.method.toUpperCase();
  const e14 = {
    method: t12.method === "GET" ? void 0 : t12.method
  }, a23 = new URLSearchParams(
    t12.queryString ? u6(t12.queryString) : void 0
  ), s19 = a23.size ? `?${a23.toString()}` : "";
  (d17 = t12.headers) != null && d17.length && (e14.headers = {}, t12.headers.forEach((o11) => {
    e14.headers[o11.name] = o11.value;
  })), (r16 = t12.cookies) != null && r16.length && (e14.headers = e14.headers || {}, t12.cookies.forEach((o11) => {
    e14.headers["Set-Cookie"] = e14.headers["Set-Cookie"] ? `${e14.headers["Set-Cookie"]}; ${o11.name}=${o11.value}` : `${o11.name}=${o11.value}`;
  })), Object.keys(e14).forEach((o11) => {
    e14[o11] === void 0 && delete e14[o11];
  }), t12.postData && (e14.body = t12.postData.text, t12.postData.mimeType === "application/json" && (e14.body = `JSON.stringify(${c16(JSON.parse(e14.body))})`));
  const h10 = Object.keys(e14).length ? `, ${c16(e14)}` : "";
  return {
    target: "node",
    client: "undici",
    code: `import { request } from 'undici'

const { statusCode, body } = await request('${t12.url}${s19}'${h10})`
  };
}
function $6(n15) {
  var d17, r16;
  const t12 = {
    method: "GET",
    ...n15
  };
  t12.method = t12.method.toUpperCase();
  const e14 = {
    method: t12.method === "GET" ? void 0 : t12.method
  }, a23 = new URLSearchParams(
    t12.queryString ? u6(t12.queryString) : void 0
  ), s19 = a23.size ? `?${a23.toString()}` : "";
  (d17 = t12.headers) != null && d17.length && (e14.headers = {}, t12.headers.forEach((o11) => {
    e14.headers[o11.name] = o11.value;
  })), (r16 = t12.cookies) != null && r16.length && (e14.headers = e14.headers || {}, t12.cookies.forEach((o11) => {
    e14.headers["Set-Cookie"] = e14.headers["Set-Cookie"] ? `${e14.headers["Set-Cookie"]}; ${o11.name}=${o11.value}` : `${o11.name}=${o11.value}`;
  })), Object.keys(e14).forEach((o11) => {
    e14[o11] === void 0 && delete e14[o11];
  }), t12.postData && (e14.body = t12.postData.text, t12.postData.mimeType === "application/json" && (e14.body = `JSON.stringify(${c16(
    JSON.parse(e14.body)
  )})`));
  const h10 = Object.keys(e14).length ? `, ${c16(e14)}` : "";
  return {
    target: "node",
    client: "fetch",
    code: `fetch('${t12.url}${s19}'${h10})`
  };
}
function g3(n15) {
  var d17, r16;
  const t12 = {
    method: "GET",
    ...n15
  };
  t12.method = t12.method.toUpperCase();
  const e14 = {
    method: t12.method === "GET" ? void 0 : t12.method
  }, a23 = new URLSearchParams(
    t12.queryString ? u6(t12.queryString) : void 0
  ), s19 = a23.size ? `?${a23.toString()}` : "";
  (d17 = t12.headers) != null && d17.length && (e14.headers = {}, t12.headers.forEach((o11) => {
    e14.headers[o11.name] = o11.value;
  })), (r16 = t12.cookies) != null && r16.length && (e14.headers = e14.headers || {}, t12.cookies.forEach((o11) => {
    e14.headers["Set-Cookie"] = e14.headers["Set-Cookie"] ? `${e14.headers["Set-Cookie"]}; ${o11.name}=${o11.value}` : `${o11.name}=${o11.value}`;
  })), Object.keys(e14).forEach((o11) => {
    e14[o11] === void 0 && delete e14[o11];
  }), t12.postData && (e14.body = t12.postData.text, t12.postData.mimeType === "application/json" && (e14.body = `JSON.stringify(${c16(
    JSON.parse(e14.body)
  )})`));
  const h10 = Object.keys(e14).length ? `, ${c16(e14)}` : "";
  return {
    target: "js",
    client: "fetch",
    code: `fetch('${t12.url}${s19}'${h10})`
  };
}
function y4(n15) {
  var i24, d17;
  const t12 = {
    method: "GET",
    ...n15
  };
  t12.method = t12.method.toUpperCase();
  const e14 = {
    method: t12.method === "GET" ? void 0 : t12.method
  }, a23 = new URLSearchParams(
    t12.queryString ? u6(t12.queryString) : void 0
  );
  a23.size && (e14.query = {}, a23.forEach((r16, o11) => {
    e14.query[o11] = r16;
  })), (i24 = t12.headers) != null && i24.length && (e14.headers = {}, t12.headers.forEach((r16) => {
    e14.headers[r16.name] = r16.value;
  })), (d17 = t12.cookies) != null && d17.length && (e14.headers = e14.headers || {}, t12.cookies.forEach((r16) => {
    e14.headers["Set-Cookie"] = e14.headers["Set-Cookie"] ? `${e14.headers["Set-Cookie"]}; ${r16.name}=${r16.value}` : `${r16.name}=${r16.value}`;
  })), Object.keys(e14).forEach((r16) => {
    e14[r16] === void 0 && delete e14[r16];
  }), t12.postData && (e14.body = t12.postData.text, t12.postData.mimeType === "application/json" && (e14.body = JSON.parse(e14.body)));
  const s19 = Object.keys(e14).length ? `, ${c16(e14)}` : "";
  return {
    target: "js",
    client: "ofetch",
    code: `ofetch('${t12.url}'${s19})`
  };
}
function S9(n15) {
  var i24, d17;
  const t12 = {
    method: "GET",
    ...n15
  };
  t12.method = t12.method.toUpperCase();
  const e14 = {
    method: t12.method === "GET" ? void 0 : t12.method
  }, a23 = new URLSearchParams(
    t12.queryString ? u6(t12.queryString) : void 0
  );
  a23.size && (e14.query = {}, a23.forEach((r16, o11) => {
    e14.query[o11] = r16;
  })), (i24 = t12.headers) != null && i24.length && (e14.headers = {}, t12.headers.forEach((r16) => {
    e14.headers[r16.name] = r16.value;
  })), (d17 = t12.cookies) != null && d17.length && (e14.headers = e14.headers || {}, t12.cookies.forEach((r16) => {
    e14.headers["Set-Cookie"] = e14.headers["Set-Cookie"] ? `${e14.headers["Set-Cookie"]}; ${r16.name}=${r16.value}` : `${r16.name}=${r16.value}`;
  })), Object.keys(e14).forEach((r16) => {
    e14[r16] === void 0 && delete e14[r16];
  }), t12.postData && (e14.body = t12.postData.text, t12.postData.mimeType === "application/json" && (e14.body = JSON.parse(e14.body)));
  const s19 = Object.keys(e14).length ? `, ${c16(e14)}` : "";
  return {
    target: "node",
    client: "ofetch",
    code: `ofetch('${t12.url}'${s19})`
  };
}
function v7() {
  const n15 = [m17, $6, g3, y4, S9];
  return {
    get(t12, e14, a23) {
      const s19 = this.findPlugin(t12, e14);
      if (s19)
        return s19(a23);
    },
    print(t12, e14, a23) {
      var s19;
      return (s19 = this.get(t12, e14, a23)) == null ? void 0 : s19.code;
    },
    targets() {
      return n15.map((t12) => t12().target).filter((t12, e14, a23) => a23.indexOf(t12) === e14);
    },
    clients() {
      return n15.map((t12) => t12().client);
    },
    plugins() {
      return n15.map((t12) => {
        const e14 = t12();
        return {
          target: e14.target,
          client: e14.client
        };
      });
    },
    findPlugin(t12, e14) {
      return n15.find((a23) => {
        const s19 = a23();
        return s19.target === t12 && s19.client === e14;
      });
    },
    hasPlugin(t12, e14) {
      return !!this.findPlugin(t12, e14);
    }
  };
}

// node_modules/formdata-node/lib/esm/browser.js
var globalObject = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return window;
}();
var { FormData, Blob: Blob2, File } = globalObject;

// node_modules/httpsnippet-lite/dist/esm/helpers/form-data.mjs
var carriage = "\r\n";
var dashes = "-".repeat(2);
var NAME = Symbol.toStringTag;
var isBlob = (object) => typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(1)}`;
var getHeader = (boundary, name, field) => {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (typeof field !== "string" && field.name !== "blob") {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
};
var formDataIterator = async function* (form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (typeof value === "string") {
      yield value;
    } else {
      yield await value.text();
    }
    yield carriage;
  }
  yield getFooter(boundary);
};

// node_modules/httpsnippet-lite/dist/esm/helpers/headers.mjs
var getHeaderName = (headers, name) => Object.keys(headers).find((header) => header.toLowerCase() === name.toLowerCase());
var getHeader2 = (headers, name) => {
  const headerName = getHeaderName(headers, name);
  if (!headerName) {
    return void 0;
  }
  return headers[headerName];
};
var hasHeader = (headers, name) => Boolean(getHeaderName(headers, name));
var mimeTypeJson = [
  "application/json",
  "application/x-json",
  "text/json",
  "text/x-json",
  "+json"
];
var isMimeTypeJSON = (mimeType) => mimeTypeJson.some((type) => mimeType.includes(type));

// node_modules/httpsnippet-lite/dist/esm/helpers/reducer.mjs
var reducer = (accumulator, pair) => {
  if (pair.value === void 0) {
    return accumulator;
  }
  const currentValue = accumulator[pair.name];
  if (currentValue === void 0) {
    accumulator[pair.name] = pair.value;
    return accumulator;
  }
  if (Array.isArray(currentValue)) {
    currentValue.push(pair.value);
    return accumulator;
  }
  accumulator[pair.name] = [currentValue, pair.value];
  return accumulator;
};

// node_modules/httpsnippet-lite/dist/esm/helpers/url.mjs
function toSearchParams(obj) {
  return new URLSearchParams(Object.entries(obj).map(([key, value]) => {
    if (Array.isArray(value)) {
      return value.map((v11) => [key, v11]);
    }
    return [[key, value]];
  }).flat(1));
}
var ExtendedURL = class extends URL {
  get path() {
    return this.pathname + this.search;
  }
};

// node_modules/httpsnippet-lite/dist/esm/helpers/code-builder.mjs
var DEFAULT_INDENTATION_CHARACTER = "";
var DEFAULT_LINE_JOIN = "\n";
var CodeBuilder = class {
  /**
   * Helper object to format and aggragate lines of code.
   * Lines are aggregated in a `code` array, and need to be joined to obtain a proper code snippet.
   */
  constructor({ indent, join } = {}) {
    this.postProcessors = [];
    this.code = [];
    this.indentationCharacter = DEFAULT_INDENTATION_CHARACTER;
    this.lineJoin = DEFAULT_LINE_JOIN;
    this.indentLine = (line, indentationLevel = 0) => {
      const indent2 = this.indentationCharacter.repeat(indentationLevel);
      return `${indent2}${line}`;
    };
    this.unshift = (line, indentationLevel) => {
      const newLine = this.indentLine(line, indentationLevel);
      this.code.unshift(newLine);
    };
    this.push = (line, indentationLevel) => {
      const newLine = this.indentLine(line, indentationLevel);
      this.code.push(newLine);
    };
    this.blank = () => {
      this.code.push("");
    };
    this.join = () => {
      const unreplacedCode = this.code.join(this.lineJoin);
      const replacedOutput = this.postProcessors.reduce((accumulator, replacer) => replacer(accumulator), unreplacedCode);
      return replacedOutput;
    };
    this.addPostProcessor = (postProcessor) => {
      this.postProcessors = [...this.postProcessors, postProcessor];
    };
    this.indentationCharacter = indent || DEFAULT_INDENTATION_CHARACTER;
    this.lineJoin = join !== null && join !== void 0 ? join : DEFAULT_LINE_JOIN;
  }
};

// node_modules/httpsnippet-lite/dist/esm/helpers/escape.mjs
function escapeString(rawValue, options = {}) {
  const { delimiter = '"', escapeChar = "\\", escapeNewlines = true } = options;
  const stringValue = rawValue.toString();
  return [...stringValue].map((c24) => {
    if (c24 === "\b") {
      return `${escapeChar}b`;
    } else if (c24 === "	") {
      return `${escapeChar}t`;
    } else if (c24 === "\n") {
      if (escapeNewlines) {
        return `${escapeChar}n`;
      }
      return c24;
    } else if (c24 === "\f") {
      return `${escapeChar}f`;
    } else if (c24 === "\r") {
      if (escapeNewlines) {
        return `${escapeChar}r`;
      }
      return c24;
    } else if (c24 === escapeChar) {
      return escapeChar + escapeChar;
    } else if (c24 === delimiter) {
      return escapeChar + delimiter;
    } else if (c24 < " " || c24 > "~") {
      return JSON.stringify(c24).slice(1, -1);
    }
    return c24;
  }).join("");
}
var escapeForSingleQuotes = (value) => escapeString(value, { delimiter: "'" });
var escapeForDoubleQuotes = (value) => escapeString(value, { delimiter: '"' });

// node_modules/httpsnippet-lite/dist/esm/targets/c/libcurl/client.mjs
var libcurl = {
  info: {
    key: "libcurl",
    title: "Libcurl",
    link: "http://curl.haxx.se/libcurl",
    description: "Simple REST and HTTP API Client for C"
  },
  convert: ({ method, fullUrl, headersObj, allHeaders, postData }) => {
    const { push, blank, join } = new CodeBuilder();
    push("CURL *hnd = curl_easy_init();");
    blank();
    push(`curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "${method.toUpperCase()}");`);
    push(`curl_easy_setopt(hnd, CURLOPT_URL, "${fullUrl}");`);
    const headers = Object.keys(headersObj);
    if (headers.length) {
      blank();
      push("struct curl_slist *headers = NULL;");
      headers.forEach((header) => {
        push(`headers = curl_slist_append(headers, "${header}: ${escapeForDoubleQuotes(headersObj[header])}");`);
      });
      push("curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);");
    }
    if (allHeaders.cookie) {
      blank();
      push(`curl_easy_setopt(hnd, CURLOPT_COOKIE, "${allHeaders.cookie}");`);
    }
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      blank();
      push(`curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, ${JSON.stringify(postData.text)});`);
    }
    blank();
    push("CURLcode ret = curl_easy_perform(hnd);");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/c/target.mjs
var c17 = {
  info: {
    key: "c",
    title: "C",
    extname: ".c",
    default: "libcurl"
  },
  clientsById: {
    libcurl
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/clojure/clj_http/client.mjs
var Keyword = class {
  constructor(name) {
    this.name = "";
    this.toString = () => `:${this.name}`;
    this.name = name;
  }
};
var File2 = class {
  constructor(path) {
    this.path = "";
    this.toString = () => `(clojure.java.io/file "${this.path}")`;
    this.path = path;
  }
};
var jsType = (input) => {
  if (input === void 0) {
    return null;
  }
  if (input === null) {
    return "null";
  }
  return input.constructor.name.toLowerCase();
};
var objEmpty = (input) => {
  if (jsType(input) === "object") {
    return Object.keys(input).length === 0;
  }
  return false;
};
var filterEmpty = (input) => {
  Object.keys(input).filter((x7) => objEmpty(input[x7])).forEach((x7) => {
    delete input[x7];
  });
  return input;
};
var padBlock = (padSize, input) => {
  const padding = " ".repeat(padSize);
  return input.replace(/\n/g, `
${padding}`);
};
var jsToEdn = (js) => {
  switch (jsType(js)) {
    case "string":
      return `"${js.replace(/"/g, '\\"')}"`;
    case "file":
      return js.toString();
    case "keyword":
      return js.toString();
    case "null":
      return "nil";
    case "regexp":
      return `#"${js.source}"`;
    case "object": {
      const obj = Object.keys(js).reduce((accumulator, key) => {
        const val = padBlock(key.length + 2, jsToEdn(js[key]));
        return `${accumulator}:${key} ${val}
 `;
      }, "").trim();
      return `{${padBlock(1, obj)}}`;
    }
    case "array": {
      const arr = js.reduce((accumulator, value) => `${accumulator} ${jsToEdn(value)}`, "").trim();
      return `[${padBlock(1, arr)}]`;
    }
    default:
      return js.toString();
  }
};
var clj_http = {
  info: {
    key: "clj_http",
    title: "clj-http",
    link: "https://github.com/dakrone/clj-http",
    description: "An idiomatic clojure http client wrapping the apache client."
  },
  convert: ({ queryObj, method, postData, url, allHeaders }, options) => {
    const { push, join } = new CodeBuilder({ indent: options === null || options === void 0 ? void 0 : options.indent });
    const methods = ["get", "post", "put", "delete", "patch", "head", "options"];
    method = method.toLowerCase();
    if (!methods.includes(method)) {
      push("Method not supported");
      return join();
    }
    const params2 = {
      headers: allHeaders,
      "query-params": queryObj
    };
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/json":
        {
          params2["content-type"] = new Keyword("json");
          params2["form-params"] = postData.jsonObj;
          const header = getHeaderName(params2.headers, "content-type");
          if (header) {
            delete params2.headers[header];
          }
        }
        break;
      case "application/x-www-form-urlencoded":
        {
          params2["form-params"] = postData.paramsObj;
          const header = getHeaderName(params2.headers, "content-type");
          if (header) {
            delete params2.headers[header];
          }
        }
        break;
      case "text/plain":
        {
          params2.body = postData.text;
          const header = getHeaderName(params2.headers, "content-type");
          if (header) {
            delete params2.headers[header];
          }
        }
        break;
      case "multipart/form-data": {
        if (postData.params) {
          params2.multipart = postData.params.map((param) => {
            if (param.fileName && !param.value) {
              return {
                name: param.name,
                content: new File2(param.fileName)
              };
            }
            return {
              name: param.name,
              content: param.value
            };
          });
          const header = getHeaderName(params2.headers, "content-type");
          if (header) {
            delete params2.headers[header];
          }
        }
        break;
      }
    }
    switch (getHeader2(params2.headers, "accept")) {
      case "application/json":
        {
          params2.accept = new Keyword("json");
          const header = getHeaderName(params2.headers, "accept");
          if (header) {
            delete params2.headers[header];
          }
        }
        break;
    }
    push("(require '[clj-http.client :as client])\n");
    if (objEmpty(filterEmpty(params2))) {
      push(`(client/${method} "${url}")`);
    } else {
      const padding = 11 + method.length + url.length;
      const formattedParams = padBlock(padding, jsToEdn(filterEmpty(params2)));
      push(`(client/${method} "${url}" ${formattedParams})`);
    }
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/clojure/target.mjs
var clojure = {
  info: {
    key: "clojure",
    title: "Clojure",
    extname: ".clj",
    default: "clj_http"
  },
  clientsById: {
    clj_http
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/csharp/httpclient/client.mjs
var getDecompressionMethods = (allHeaders) => {
  let acceptEncodings = getHeader2(allHeaders, "accept-encoding");
  if (!acceptEncodings) {
    return [];
  }
  const supportedMethods2 = {
    gzip: "DecompressionMethods.GZip",
    deflate: "DecompressionMethods.Deflate"
  };
  const methods = [];
  if (typeof acceptEncodings === "string") {
    acceptEncodings = [acceptEncodings];
  }
  acceptEncodings.forEach((acceptEncoding) => {
    acceptEncoding.split(",").forEach((encoding) => {
      const match = /\s*([^;\s]+)/.exec(encoding);
      if (match) {
        const method = supportedMethods2[match[1]];
        if (method) {
          methods.push(method);
        }
      }
    });
  });
  return methods;
};
var httpclient = {
  info: {
    key: "httpclient",
    title: "HttpClient",
    link: "https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient",
    description: ".NET Standard HTTP Client"
  },
  convert: ({ allHeaders, postData, method, fullUrl }, options) => {
    var _a, _b;
    const opts = {
      indent: "    ",
      ...options
    };
    const { push, join } = new CodeBuilder({ indent: opts.indent });
    push("using System.Net.Http.Headers;");
    let clienthandler = "";
    const cookies = Boolean(allHeaders.cookie);
    const decompressionMethods = getDecompressionMethods(allHeaders);
    if (cookies || decompressionMethods.length) {
      clienthandler = "clientHandler";
      push("var clientHandler = new HttpClientHandler");
      push("{");
      if (cookies) {
        push("UseCookies = false,", 1);
      }
      if (decompressionMethods.length) {
        push(`AutomaticDecompression = ${decompressionMethods.join(" | ")},`, 1);
      }
      push("};");
    }
    push(`var client = new HttpClient(${clienthandler});`);
    push("var request = new HttpRequestMessage");
    push("{");
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS", "TRACE"];
    method = method.toUpperCase();
    if (method && methods.includes(method)) {
      method = `HttpMethod.${method[0]}${method.substring(1).toLowerCase()}`;
    } else {
      method = `new HttpMethod("${method}")`;
    }
    push(`Method = ${method},`, 1);
    push(`RequestUri = new Uri("${fullUrl}"),`, 1);
    const headers = Object.keys(allHeaders).filter((header) => {
      switch (header.toLowerCase()) {
        case "content-type":
        case "content-length":
        case "accept-encoding":
          return false;
        default:
          return true;
      }
    });
    if (headers.length) {
      push("Headers =", 1);
      push("{", 1);
      headers.forEach((key) => {
        push(`{ "${key}", "${escapeForDoubleQuotes(allHeaders[key])}" },`, 2);
      });
      push("},", 1);
    }
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      const contentType = postData.mimeType;
      switch (contentType) {
        case "application/x-www-form-urlencoded":
          push("Content = new FormUrlEncodedContent(new Dictionary<string, string>", 1);
          push("{", 1);
          (_a = postData.params) === null || _a === void 0 ? void 0 : _a.forEach((param) => {
            push(`{ "${param.name}", "${param.value}" },`, 2);
          });
          push("}),", 1);
          break;
        case "multipart/form-data":
          push("Content = new MultipartFormDataContent", 1);
          push("{", 1);
          (_b = postData.params) === null || _b === void 0 ? void 0 : _b.forEach((param) => {
            push(`new StringContent(${JSON.stringify(param.value || "")})`, 2);
            push("{", 2);
            push("Headers =", 3);
            push("{", 3);
            if (param.contentType) {
              push(`ContentType = new MediaTypeHeaderValue("${param.contentType}"),`, 4);
            }
            push('ContentDisposition = new ContentDispositionHeaderValue("form-data")', 4);
            push("{", 4);
            push(`Name = "${param.name}",`, 5);
            if (param.fileName) {
              push(`FileName = "${param.fileName}",`, 5);
            }
            push("}", 4);
            push("}", 3);
            push("},", 2);
          });
          push("},", 1);
          break;
        default:
          push(`Content = new StringContent(${JSON.stringify((postData === null || postData === void 0 ? void 0 : postData.text) || "")})`, 1);
          push("{", 1);
          push("Headers =", 2);
          push("{", 2);
          push(`ContentType = new MediaTypeHeaderValue("${contentType}")`, 3);
          push("}", 2);
          push("}", 1);
          break;
      }
    }
    push("};");
    push("using (var response = await client.SendAsync(request))");
    push("{");
    push("response.EnsureSuccessStatusCode();", 1);
    push("var body = await response.Content.ReadAsStringAsync();", 1);
    push("Console.WriteLine(body);", 1);
    push("}");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/csharp/restsharp/client.mjs
var restsharp = {
  info: {
    key: "restsharp",
    title: "RestSharp",
    link: "http://restsharp.org/",
    description: "Simple REST and HTTP API Client for .NET"
  },
  convert: ({ allHeaders, method, fullUrl, headersObj, cookies, postData }) => {
    const { push, join } = new CodeBuilder();
    const isSupportedMethod = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"].includes(method.toUpperCase());
    if (!isSupportedMethod) {
      return "Method not supported";
    }
    push(`var client = new RestClient("${fullUrl}");`);
    push(`var request = new RestRequest(Method.${method.toUpperCase()});`);
    Object.keys(headersObj).forEach((key) => {
      push(`request.AddHeader("${key}", "${escapeForDoubleQuotes(headersObj[key])}");`);
    });
    cookies === null || cookies === void 0 ? void 0 : cookies.forEach(({ name, value }) => {
      push(`request.AddCookie("${name}", "${value}");`);
    });
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      const header = getHeader2(allHeaders, "content-type");
      const text = JSON.stringify(postData.text);
      push(`request.AddParameter("${header}", ${text}, ParameterType.RequestBody);`);
    }
    push("IRestResponse response = client.Execute(request);");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/csharp/target.mjs
var csharp = {
  info: {
    key: "csharp",
    title: "C#",
    extname: ".cs",
    default: "restsharp"
  },
  clientsById: {
    httpclient,
    restsharp
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/go/native/client.mjs
var native = {
  info: {
    key: "native",
    title: "NewRequest",
    link: "http://golang.org/pkg/net/http/#NewRequest",
    description: "Golang HTTP client request"
  },
  convert: ({ postData, method, allHeaders, fullUrl }, options = {}) => {
    const { blank, push, join } = new CodeBuilder({ indent: "	" });
    const { showBoilerplate = true, checkErrors = false, printBody = true, timeout = -1, insecureSkipVerify = false } = options;
    const errorPlaceholder = checkErrors ? "err" : "_";
    const indent = showBoilerplate ? 1 : 0;
    const errorCheck = () => {
      if (checkErrors) {
        push("if err != nil {", indent);
        push("panic(err)", indent + 1);
        push("}", indent);
      }
    };
    if (showBoilerplate) {
      push("package main");
      blank();
      push("import (");
      push('"fmt"', indent);
      if (timeout > 0) {
        push('"time"', indent);
      }
      if (insecureSkipVerify) {
        push('"crypto/tls"', indent);
      }
      if (postData === null || postData === void 0 ? void 0 : postData.text) {
        push('"strings"', indent);
      }
      push('"net/http"', indent);
      if (printBody) {
        push('"io"', indent);
      }
      push(")");
      blank();
      push("func main() {");
      blank();
    }
    if (insecureSkipVerify) {
      push("insecureTransport := http.DefaultTransport.(*http.Transport).Clone()", indent);
      push("insecureTransport.TLSClientConfig = &tls.Config{InsecureSkipVerify: true}", indent);
    }
    const hasTimeout = timeout > 0;
    const hasClient = hasTimeout || insecureSkipVerify;
    const client = hasClient ? "client" : "http.DefaultClient";
    if (hasClient) {
      push("client := http.Client{", indent);
      if (hasTimeout) {
        push(`Timeout: time.Duration(${timeout} * time.Second),`, indent + 1);
      }
      if (insecureSkipVerify) {
        push("Transport: insecureTransport,", indent + 1);
      }
      push("}", indent);
      blank();
    }
    push(`url := "${fullUrl}"`, indent);
    blank();
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`payload := strings.NewReader(${JSON.stringify(postData.text)})`, indent);
      blank();
      push(`req, ${errorPlaceholder} := http.NewRequest("${method}", url, payload)`, indent);
      blank();
    } else {
      push(`req, ${errorPlaceholder} := http.NewRequest("${method}", url, nil)`, indent);
      blank();
    }
    errorCheck();
    if (Object.keys(allHeaders).length) {
      Object.keys(allHeaders).forEach((key) => {
        push(`req.Header.Add("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`, indent);
      });
      blank();
    }
    push(`res, ${errorPlaceholder} := ${client}.Do(req)`, indent);
    errorCheck();
    if (printBody) {
      blank();
      push("defer res.Body.Close()", indent);
      push(`body, ${errorPlaceholder} := io.ReadAll(res.Body)`, indent);
      errorCheck();
    }
    blank();
    push("fmt.Println(res)", indent);
    if (printBody) {
      push("fmt.Println(string(body))", indent);
    }
    if (showBoilerplate) {
      blank();
      push("}");
    }
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/go/target.mjs
var go = {
  info: {
    key: "go",
    title: "Go",
    extname: ".go",
    default: "native"
  },
  clientsById: {
    native
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/http/http1.1/client.mjs
var CRLF = "\r\n";
var http11 = {
  info: {
    key: "http1.1",
    title: "HTTP/1.1",
    link: "https://tools.ietf.org/html/rfc7230",
    description: "HTTP/1.1 request string in accordance with RFC 7230"
  },
  convert: ({ method, fullUrl, uriObj, httpVersion, allHeaders, postData }, options) => {
    const opts = {
      absoluteURI: false,
      autoContentLength: true,
      autoHost: true,
      ...options
    };
    const { blank, push, join } = new CodeBuilder({ indent: "", join: CRLF });
    const requestUrl = opts.absoluteURI ? fullUrl : uriObj.path;
    push(`${method} ${requestUrl} ${httpVersion}`);
    const headerKeys = Object.keys(allHeaders);
    headerKeys.forEach((key) => {
      const keyCapitalized = key.toLowerCase().replace(/(^|-)(\w)/g, (input) => input.toUpperCase());
      push(`${keyCapitalized}: ${allHeaders[key]}`);
    });
    if (opts.autoHost && !headerKeys.includes("host")) {
      push(`Host: ${uriObj.host}`);
    }
    if (opts.autoContentLength && (postData === null || postData === void 0 ? void 0 : postData.text) && !headerKeys.includes("content-length")) {
      push(`Content-Length: ${postData.text.length}`);
    }
    blank();
    const headerSection = join();
    const messageBody = (postData === null || postData === void 0 ? void 0 : postData.text) || "";
    return `${headerSection}${CRLF}${messageBody}`;
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/http/target.mjs
var http = {
  info: {
    key: "http",
    title: "HTTP",
    extname: null,
    default: "1.1"
  },
  clientsById: {
    "http1.1": http11
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/java/asynchttp/client.mjs
var asynchttp = {
  info: {
    key: "asynchttp",
    title: "AsyncHttp",
    link: "https://github.com/AsyncHttpClient/async-http-client",
    description: "Asynchronous Http and WebSocket Client library for Java"
  },
  convert: ({ method, allHeaders, postData, fullUrl }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { blank, push, join } = new CodeBuilder({ indent: opts.indent });
    push("AsyncHttpClient client = new DefaultAsyncHttpClient();");
    push(`client.prepare("${method.toUpperCase()}", "${fullUrl}")`);
    Object.keys(allHeaders).forEach((key) => {
      push(`.setHeader("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`, 1);
    });
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`.setBody(${JSON.stringify(postData.text)})`, 1);
    }
    push(".execute()", 1);
    push(".toCompletableFuture()", 1);
    push(".thenAccept(System.out::println)", 1);
    push(".join();", 1);
    blank();
    push("client.close();");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/java/nethttp/client.mjs
var nethttp = {
  info: {
    key: "nethttp",
    title: "java.net.http",
    link: "https://openjdk.java.net/groups/net/httpclient/intro.html",
    description: "Java Standardized HTTP Client API"
  },
  convert: ({ allHeaders, fullUrl, method, postData }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { push, join } = new CodeBuilder({ indent: opts.indent });
    push("HttpRequest request = HttpRequest.newBuilder()");
    push(`.uri(URI.create("${fullUrl}"))`, 2);
    Object.keys(allHeaders).forEach((key) => {
      push(`.header("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`, 2);
    });
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`.method("${method.toUpperCase()}", HttpRequest.BodyPublishers.ofString(${JSON.stringify(postData.text)}))`, 2);
    } else {
      push(`.method("${method.toUpperCase()}", HttpRequest.BodyPublishers.noBody())`, 2);
    }
    push(".build();", 2);
    push("HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());");
    push("System.out.println(response.body());");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/java/okhttp/client.mjs
var okhttp = {
  info: {
    key: "okhttp",
    title: "OkHttp",
    link: "http://square.github.io/okhttp/",
    description: "An HTTP Request Client Library"
  },
  convert: ({ postData, method, fullUrl, allHeaders }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { push, blank, join } = new CodeBuilder({ indent: opts.indent });
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"];
    const methodsWithBody = ["POST", "PUT", "DELETE", "PATCH"];
    push("OkHttpClient client = new OkHttpClient();");
    blank();
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      if (postData.boundary) {
        push(`MediaType mediaType = MediaType.parse("${postData.mimeType}; boundary=${postData.boundary}");`);
      } else {
        push(`MediaType mediaType = MediaType.parse("${postData.mimeType}");`);
      }
      push(`RequestBody body = RequestBody.create(mediaType, ${JSON.stringify(postData.text)});`);
    }
    push("Request request = new Request.Builder()");
    push(`.url("${fullUrl}")`, 1);
    if (!methods.includes(method.toUpperCase())) {
      if (postData === null || postData === void 0 ? void 0 : postData.text) {
        push(`.method("${method.toUpperCase()}", body)`, 1);
      } else {
        push(`.method("${method.toUpperCase()}", null)`, 1);
      }
    } else if (methodsWithBody.includes(method.toUpperCase())) {
      if (postData === null || postData === void 0 ? void 0 : postData.text) {
        push(`.${method.toLowerCase()}(body)`, 1);
      } else {
        push(`.${method.toLowerCase()}(null)`, 1);
      }
    } else {
      push(`.${method.toLowerCase()}()`, 1);
    }
    Object.keys(allHeaders).forEach((key) => {
      push(`.addHeader("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`, 1);
    });
    push(".build();", 1);
    blank();
    push("Response response = client.newCall(request).execute();");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/java/unirest/client.mjs
var unirest = {
  info: {
    key: "unirest",
    title: "Unirest",
    link: "http://unirest.io/java.html",
    description: "Lightweight HTTP Request Client Library"
  },
  convert: ({ method, allHeaders, postData, fullUrl }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { join, push } = new CodeBuilder({ indent: opts.indent });
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    if (!methods.includes(method.toUpperCase())) {
      push(`HttpResponse<String> response = Unirest.customMethod("${method.toUpperCase()}","${fullUrl}")`);
    } else {
      push(`HttpResponse<String> response = Unirest.${method.toLowerCase()}("${fullUrl}")`);
    }
    Object.keys(allHeaders).forEach((key) => {
      push(`.header("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`, 1);
    });
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`.body(${JSON.stringify(postData.text)})`, 1);
    }
    push(".asString();", 1);
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/java/target.mjs
var java = {
  info: {
    key: "java",
    title: "Java",
    extname: ".java",
    default: "unirest"
  },
  clientsById: {
    asynchttp,
    nethttp,
    okhttp,
    unirest
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/javascript/axios/client.mjs
var import_stringify_object = __toESM(require_stringify_object(), 1);
var axios = {
  info: {
    key: "axios",
    title: "Axios",
    link: "https://github.com/axios/axios",
    description: "Promise based HTTP client for the browser and node.js"
  },
  convert: ({ allHeaders, method, url, queryObj, postData }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { blank, push, join, addPostProcessor } = new CodeBuilder({ indent: opts.indent });
    push("import axios from 'axios';");
    blank();
    const requestOptions = {
      method,
      url
    };
    if (Object.keys(queryObj).length) {
      requestOptions.params = queryObj;
    }
    if (Object.keys(allHeaders).length) {
      requestOptions.headers = allHeaders;
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        if (postData.params) {
          push("const encodedParams = new URLSearchParams();");
          postData.params.forEach((param) => {
            push(`encodedParams.set('${param.name}', '${param.value}');`);
          });
          blank();
          requestOptions.data = "encodedParams,";
          addPostProcessor((code) => code.replace(/'encodedParams,'/, "encodedParams,"));
        }
        break;
      case "application/json":
        if (postData.jsonObj) {
          requestOptions.data = postData.jsonObj;
        }
        break;
      case "multipart/form-data":
        if (!postData.params) {
          break;
        }
        push("const form = new FormData();");
        postData.params.forEach((param) => {
          push(`form.append('${param.name}', '${param.value || param.fileName || ""}');`);
        });
        blank();
        requestOptions.data = "[form]";
        break;
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          requestOptions.data = postData.text;
        }
    }
    const optionString = (0, import_stringify_object.default)(requestOptions, {
      indent: "  ",
      inlineCharacterLimit: 80
    }).replace('"[form]"', "form");
    push(`const options = ${optionString};`);
    blank();
    push("try {");
    push("const { data } = await axios.request(options);", 1);
    push("console.log(data);", 1);
    push("} catch (error) {");
    push("console.error(error);", 1);
    push("}");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/javascript/fetch/client.mjs
var import_stringify_object2 = __toESM(require_stringify_object(), 1);
var fetch2 = {
  info: {
    key: "fetch",
    title: "fetch",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
    description: "Perform asynchronous HTTP requests with the Fetch API"
  },
  convert: ({ method, allHeaders, postData, fullUrl }, inputOpts) => {
    const opts = {
      indent: "  ",
      credentials: null,
      ...inputOpts
    };
    const { blank, join, push } = new CodeBuilder({ indent: opts.indent });
    const options = {
      method
    };
    if (Object.keys(allHeaders).length) {
      options.headers = allHeaders;
    }
    if (opts.credentials !== null) {
      options.credentials = opts.credentials;
    }
    push(`const url = '${fullUrl}';`);
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        options.body = postData.paramsObj ? postData.paramsObj : postData.text;
        break;
      case "application/json":
        options.body = JSON.stringify(postData.jsonObj);
        break;
      case "multipart/form-data":
        if (!postData.params) {
          break;
        }
        const contentTypeHeader = getHeaderName(allHeaders, "content-type");
        if (contentTypeHeader) {
          delete allHeaders[contentTypeHeader];
        }
        push("const form = new FormData();");
        postData.params.forEach((param) => {
          push(`form.append('${param.name}', '${param.value || param.fileName || ""}');`);
        });
        blank();
        break;
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          options.body = postData.text;
        }
    }
    if (options.headers && !Object.keys(options.headers).length) {
      delete options.headers;
    }
    push(`const options = ${(0, import_stringify_object2.default)(options, {
      indent: opts.indent,
      inlineCharacterLimit: 80,
      transform: (_11, property, originalResult) => {
        if (property === "body" && postData && postData.mimeType === "application/x-www-form-urlencoded") {
          return `new URLSearchParams(${originalResult})`;
        }
        return originalResult;
      }
    })};`);
    blank();
    if ((postData === null || postData === void 0 ? void 0 : postData.params) && postData.mimeType === "multipart/form-data") {
      push("options.body = form;");
      blank();
    }
    push("try {");
    push(`const response = await fetch(url, options);`, 1);
    push("const data = await response.json();", 1);
    push("console.log(data);", 1);
    push("} catch (error) {");
    push("console.error(error);", 1);
    push("}");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/javascript/jquery/client.mjs
var import_stringify_object3 = __toESM(require_stringify_object(), 1);
var jquery = {
  info: {
    key: "jquery",
    title: "jQuery",
    link: "http://api.jquery.com/jquery.ajax/",
    description: "Perform an asynchronous HTTP (Ajax) requests with jQuery"
  },
  convert: ({ fullUrl, method, allHeaders, postData }, options) => {
    var _a;
    const opts = {
      indent: "  ",
      ...options
    };
    const { blank, push, join } = new CodeBuilder({ indent: opts.indent });
    const settings = {
      async: true,
      crossDomain: true,
      url: fullUrl,
      method,
      headers: allHeaders
    };
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        settings.data = postData.paramsObj ? postData.paramsObj : postData.text;
        break;
      case "application/json":
        settings.processData = false;
        settings.data = postData.text;
        break;
      case "multipart/form-data":
        if (!postData.params) {
          break;
        }
        push("const form = new FormData();");
        postData.params.forEach((param) => {
          push(`form.append('${param.name}', '${param.value || param.fileName || ""}');`);
        });
        settings.processData = false;
        settings.contentType = false;
        settings.mimeType = "multipart/form-data";
        settings.data = "[form]";
        if (hasHeader(allHeaders, "content-type")) {
          if ((_a = getHeader2(allHeaders, "content-type")) === null || _a === void 0 ? void 0 : _a.includes("boundary")) {
            const headerName = getHeaderName(allHeaders, "content-type");
            if (headerName) {
              delete settings.headers[headerName];
            }
          }
        }
        blank();
        break;
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          settings.data = postData.text;
        }
    }
    const stringifiedSettings = (0, import_stringify_object3.default)(settings, { indent: opts.indent }).replace("'[form]'", "form");
    push(`const settings = ${stringifiedSettings};`);
    blank();
    push("$.ajax(settings).done(function (response) {");
    push("console.log(response);", 1);
    push("});");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/javascript/xhr/client.mjs
var import_stringify_object4 = __toESM(require_stringify_object(), 1);
var xhr = {
  info: {
    key: "xhr",
    title: "XMLHttpRequest",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",
    description: "W3C Standard API that provides scripted client functionality"
  },
  convert: ({ postData, allHeaders, method, fullUrl }, options) => {
    var _a;
    const opts = {
      indent: "  ",
      cors: true,
      ...options
    };
    const { blank, push, join } = new CodeBuilder({ indent: opts.indent });
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/json":
        push(`const data = JSON.stringify(${(0, import_stringify_object4.default)(postData.jsonObj, {
          indent: opts.indent
        })});`);
        blank();
        break;
      case "multipart/form-data":
        if (!postData.params) {
          break;
        }
        push("const data = new FormData();");
        postData.params.forEach((param) => {
          push(`data.append('${param.name}', '${param.value || param.fileName || ""}');`);
        });
        if (hasHeader(allHeaders, "content-type")) {
          if ((_a = getHeader2(allHeaders, "content-type")) === null || _a === void 0 ? void 0 : _a.includes("boundary")) {
            const headerName = getHeaderName(allHeaders, "content-type");
            if (headerName) {
              delete allHeaders[headerName];
            }
          }
        }
        blank();
        break;
      default:
        push(`const data = ${(postData === null || postData === void 0 ? void 0 : postData.text) ? `'${postData.text}'` : "null"};`);
        blank();
    }
    push("const xhr = new XMLHttpRequest();");
    if (opts.cors) {
      push("xhr.withCredentials = true;");
    }
    blank();
    push("xhr.addEventListener('readystatechange', function () {");
    push("if (this.readyState === this.DONE) {", 1);
    push("console.log(this.responseText);", 2);
    push("}", 1);
    push("});");
    blank();
    push(`xhr.open('${method}', '${fullUrl}');`);
    Object.keys(allHeaders).forEach((key) => {
      push(`xhr.setRequestHeader('${key}', '${escapeForSingleQuotes(allHeaders[key])}');`);
    });
    blank();
    push("xhr.send(data);");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/javascript/target.mjs
var javascript = {
  info: {
    key: "javascript",
    title: "JavaScript",
    extname: ".js",
    default: "xhr"
  },
  clientsById: {
    xhr,
    axios,
    fetch: fetch2,
    jquery
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/kotlin/okhttp/client.mjs
var okhttp2 = {
  info: {
    key: "okhttp",
    title: "OkHttp",
    link: "http://square.github.io/okhttp/",
    description: "An HTTP Request Client Library"
  },
  convert: ({ postData, fullUrl, method, allHeaders }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { blank, join, push } = new CodeBuilder({ indent: opts.indent });
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"];
    const methodsWithBody = ["POST", "PUT", "DELETE", "PATCH"];
    push("val client = OkHttpClient()");
    blank();
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      if (postData.boundary) {
        push(`val mediaType = MediaType.parse("${postData.mimeType}; boundary=${postData.boundary}")`);
      } else {
        push(`val mediaType = MediaType.parse("${postData.mimeType}")`);
      }
      push(`val body = RequestBody.create(mediaType, ${JSON.stringify(postData.text)})`);
    }
    push("val request = Request.Builder()");
    push(`.url("${fullUrl}")`, 1);
    if (!methods.includes(method.toUpperCase())) {
      if (postData === null || postData === void 0 ? void 0 : postData.text) {
        push(`.method("${method.toUpperCase()}", body)`, 1);
      } else {
        push(`.method("${method.toUpperCase()}", null)`, 1);
      }
    } else if (methodsWithBody.includes(method.toUpperCase())) {
      if (postData === null || postData === void 0 ? void 0 : postData.text) {
        push(`.${method.toLowerCase()}(body)`, 1);
      } else {
        push(`.${method.toLowerCase()}(null)`, 1);
      }
    } else {
      push(`.${method.toLowerCase()}()`, 1);
    }
    Object.keys(allHeaders).forEach((key) => {
      push(`.addHeader("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`, 1);
    });
    push(".build()", 1);
    blank();
    push("val response = client.newCall(request).execute()");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/kotlin/target.mjs
var kotlin = {
  info: {
    key: "kotlin",
    title: "Kotlin",
    extname: ".kt",
    default: "okhttp"
  },
  clientsById: {
    okhttp: okhttp2
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/node/axios/client.mjs
var import_stringify_object5 = __toESM(require_stringify_object(), 1);
var axios2 = {
  info: {
    key: "axios",
    title: "Axios",
    link: "https://github.com/axios/axios",
    description: "Promise based HTTP client for the browser and node.js"
  },
  convert: ({ method, url, queryObj, allHeaders, postData }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { blank, join, push, addPostProcessor } = new CodeBuilder({ indent: opts.indent });
    push("const axios = require('axios').default;");
    const reqOpts = {
      method,
      url
    };
    if (Object.keys(queryObj).length) {
      reqOpts.params = queryObj;
    }
    if (Object.keys(allHeaders).length) {
      reqOpts.headers = allHeaders;
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        if (postData.params) {
          push("const { URLSearchParams } = require('url');");
          blank();
          push("const encodedParams = new URLSearchParams();");
          postData.params.forEach((param) => {
            push(`encodedParams.set('${param.name}', '${param.value}');`);
          });
          blank();
          reqOpts.data = "encodedParams,";
          addPostProcessor((code) => code.replace(/'encodedParams,'/, "encodedParams,"));
        }
        break;
      case "application/json":
        blank();
        if (postData.jsonObj) {
          reqOpts.data = postData.jsonObj;
        }
        break;
      default:
        blank();
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          reqOpts.data = postData.text;
        }
    }
    const stringifiedOptions = (0, import_stringify_object5.default)(reqOpts, { indent: "  ", inlineCharacterLimit: 80 });
    push(`const options = ${stringifiedOptions};`);
    blank();
    push("try {");
    push("const { data } = await axios.request(options);", 1);
    push("console.log(data);", 1);
    push("} catch (error) {");
    push("console.error(error);", 1);
    push("}");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/node/fetch/client.mjs
var import_stringify_object6 = __toESM(require_stringify_object(), 1);
var fetch3 = {
  info: {
    key: "fetch",
    title: "Fetch",
    link: "https://github.com/bitinn/node-fetch",
    description: "Simplified HTTP node-fetch client"
  },
  convert: ({ method, fullUrl, postData, headersObj, cookies }, options) => {
    var _a;
    const opts = {
      indent: "  ",
      ...options
    };
    let includeFS = false;
    const { blank, push, join, unshift } = new CodeBuilder({ indent: opts.indent });
    push("const fetch = require('node-fetch');");
    blank();
    const reqOpts = {
      method
    };
    if (Object.keys(headersObj).length) {
      reqOpts.headers = headersObj;
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        unshift("const { URLSearchParams } = require('url');");
        push("const encodedParams = new URLSearchParams();");
        (_a = postData.params) === null || _a === void 0 ? void 0 : _a.forEach((param) => {
          push(`encodedParams.set('${param.name}', '${param.value}');`);
        });
        blank();
        reqOpts.body = "encodedParams";
        break;
      case "application/json":
        if (postData.jsonObj) {
          reqOpts.body = JSON.stringify(postData.jsonObj);
        }
        break;
      case "multipart/form-data":
        if (!postData.params) {
          break;
        }
        const contentTypeHeader = getHeaderName(headersObj, "content-type");
        if (contentTypeHeader) {
          delete headersObj[contentTypeHeader];
        }
        unshift("const FormData = require('form-data');");
        push("const formData = new FormData();");
        postData.params.forEach((param) => {
          if (!param.fileName && !param.fileName && !param.contentType) {
            push(`formData.append('${param.name}', '${param.value}');`);
            return;
          }
          if (param.fileName) {
            includeFS = true;
            push(`formData.append('${param.name}', fs.createReadStream('${param.fileName}'));`);
          }
        });
        blank();
        break;
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          reqOpts.body = postData.text;
        }
    }
    if (cookies.length) {
      const cookiesString = cookies.map((cookie) => `${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}`).join("; ");
      if (reqOpts.headers) {
        reqOpts.headers.cookie = cookiesString;
      } else {
        reqOpts.headers = {};
        reqOpts.headers.cookie = cookiesString;
      }
    }
    push(`const url = '${fullUrl}';`);
    if (reqOpts.headers && !Object.keys(reqOpts.headers).length) {
      delete reqOpts.headers;
    }
    const stringifiedOptions = (0, import_stringify_object6.default)(reqOpts, { indent: "  ", inlineCharacterLimit: 80 });
    push(`const options = ${stringifiedOptions};`);
    if (includeFS) {
      unshift("const fs = require('fs');");
    }
    if ((postData === null || postData === void 0 ? void 0 : postData.params) && postData.mimeType === "multipart/form-data") {
      push("options.body = formData;");
    }
    blank();
    push("try {");
    push(`const response = await fetch(url, options);`, 1);
    push("const data = await response.json();", 1);
    push("console.log(data);", 1);
    push("} catch (error) {");
    push("console.error(error);", 1);
    push("}");
    return join().replace(/'encodedParams'/, "encodedParams").replace(/"fs\.createReadStream\(\\"(.+)\\"\)"/, 'fs.createReadStream("$1")');
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/node/native/client.mjs
var import_stringify_object7 = __toESM(require_stringify_object(), 1);
var native2 = {
  info: {
    key: "native",
    title: "HTTP",
    link: "http://nodejs.org/api/http.html#http_http_request_options_callback",
    description: "Node.js native HTTP interface"
  },
  convert: ({ uriObj, method, allHeaders, postData }, options = {}) => {
    const { indent = "  ", insecureSkipVerify = false } = options;
    const { blank, join, push, unshift } = new CodeBuilder({ indent });
    const reqOpts = {
      method,
      hostname: uriObj.hostname,
      port: uriObj.port === "" ? null : uriObj.port,
      path: uriObj.path,
      headers: allHeaders,
      ...insecureSkipVerify ? { rejectUnauthorized: false } : {}
    };
    push(`const http = require('${uriObj.protocol.replace(":", "")}');`);
    blank();
    push(`const options = ${(0, import_stringify_object7.default)(reqOpts, { indent })};`);
    blank();
    push("const req = http.request(options, function (res) {");
    push("const chunks = [];", 1);
    blank();
    push("res.on('data', function (chunk) {", 1);
    push("chunks.push(chunk);", 2);
    push("});", 1);
    blank();
    push("res.on('end', function () {", 1);
    push("const body = Buffer.concat(chunks);", 2);
    push("console.log(body.toString());", 2);
    push("});", 1);
    push("});");
    blank();
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        if (postData.paramsObj) {
          unshift("const qs = require('querystring');");
          push(`req.write(qs.stringify(${(0, import_stringify_object7.default)(postData.paramsObj, {
            indent: "  ",
            inlineCharacterLimit: 80
          })}));`);
        }
        break;
      case "application/json":
        if (postData.jsonObj) {
          push(`req.write(JSON.stringify(${(0, import_stringify_object7.default)(postData.jsonObj, {
            indent: "  ",
            inlineCharacterLimit: 80
          })}));`);
        }
        break;
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          push(`req.write(${(0, import_stringify_object7.default)(postData.text, { indent })});`);
        }
    }
    push("req.end();");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/node/request/client.mjs
var import_stringify_object8 = __toESM(require_stringify_object(), 1);
var request = {
  info: {
    key: "request",
    title: "Request",
    link: "https://github.com/request/request",
    description: "Simplified HTTP request client"
  },
  convert: ({ method, url, queryObj, postData, headersObj, cookies }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    let includeFS = false;
    const { push, blank, join, unshift } = new CodeBuilder({ indent: opts.indent });
    push("const request = require('request');");
    blank();
    const reqOpts = {
      method,
      url
    };
    if (Object.keys(queryObj).length) {
      reqOpts.qs = queryObj;
    }
    if (Object.keys(headersObj).length) {
      reqOpts.headers = headersObj;
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        reqOpts.form = postData.paramsObj;
        break;
      case "application/json":
        if (postData.jsonObj) {
          reqOpts.body = postData.jsonObj;
          reqOpts.json = true;
        }
        break;
      case "multipart/form-data":
        if (!postData.params) {
          break;
        }
        reqOpts.formData = {};
        postData.params.forEach((param) => {
          if (!param.fileName && !param.fileName && !param.contentType) {
            reqOpts.formData[param.name] = param.value;
            return;
          }
          let attachment = {};
          if (param.fileName) {
            includeFS = true;
            attachment = {
              value: `fs.createReadStream(${param.fileName})`,
              options: {
                filename: param.fileName,
                contentType: param.contentType ? param.contentType : null
              }
            };
          } else if (param.value) {
            attachment.value = param.value;
          }
          reqOpts.formData[param.name] = attachment;
        });
        break;
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          reqOpts.body = postData.text;
        }
    }
    if (cookies.length) {
      reqOpts.jar = "JAR";
      push("const jar = request.jar();");
      cookies.forEach((cookie) => {
        push(`jar.setCookie(request.cookie('${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}'), '${url}');`);
      });
      blank();
    }
    if (includeFS) {
      unshift("const fs = require('fs');");
    }
    push(`const options = ${(0, import_stringify_object8.default)(reqOpts, { indent: "  ", inlineCharacterLimit: 80 })};`);
    blank();
    push("request(options, function (error, response, body) {");
    push("if (error) throw new Error(error);", 1);
    blank();
    push("console.log(body);", 1);
    push("});");
    return join().replace("'JAR'", "jar").replace(/'fs\.createReadStream\((.*)\)'/, "fs.createReadStream('$1')");
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/node/unirest/client.mjs
var import_stringify_object9 = __toESM(require_stringify_object(), 1);
var unirest2 = {
  info: {
    key: "unirest",
    title: "Unirest",
    link: "http://unirest.io/nodejs.html",
    description: "Lightweight HTTP Request Client Library"
  },
  convert: ({ method, url, cookies, queryObj, postData, headersObj }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    let includeFS = false;
    const { addPostProcessor, blank, join, push, unshift } = new CodeBuilder({
      indent: opts.indent
    });
    push("const unirest = require('unirest');");
    blank();
    push(`const req = unirest('${method}', '${url}');`);
    blank();
    if (cookies.length) {
      push("const CookieJar = unirest.jar();");
      cookies.forEach((cookie) => {
        push(`CookieJar.add('${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}', '${url}');`);
      });
      push("req.jar(CookieJar);");
      blank();
    }
    if (Object.keys(queryObj).length) {
      push(`req.query(${(0, import_stringify_object9.default)(queryObj, { indent: opts.indent })});`);
      blank();
    }
    if (Object.keys(headersObj).length) {
      push(`req.headers(${(0, import_stringify_object9.default)(headersObj, { indent: opts.indent })});`);
      blank();
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        if (postData.paramsObj) {
          push(`req.form(${(0, import_stringify_object9.default)(postData.paramsObj, { indent: opts.indent })});`);
          blank();
        }
        break;
      case "application/json":
        if (postData.jsonObj) {
          push("req.type('json');");
          push(`req.send(${(0, import_stringify_object9.default)(postData.jsonObj, { indent: opts.indent })});`);
          blank();
        }
        break;
      case "multipart/form-data": {
        if (!postData.params) {
          break;
        }
        const multipart = [];
        postData.params.forEach((param) => {
          const part = {};
          if (param.fileName && !param.value) {
            includeFS = true;
            part.body = `fs.createReadStream('${param.fileName}')`;
            addPostProcessor((code) => code.replace(/'fs\.createReadStream\(\\'(.+)\\'\)'/, "fs.createReadStream('$1')"));
          } else if (param.value) {
            part.body = param.value;
          }
          if (part.body) {
            if (param.contentType) {
              part["content-type"] = param.contentType;
            }
            multipart.push(part);
          }
        });
        push(`req.multipart(${(0, import_stringify_object9.default)(multipart, { indent: opts.indent })});`);
        blank();
        break;
      }
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          push(`req.send(${(0, import_stringify_object9.default)(postData.text, { indent: opts.indent })});`);
          blank();
        }
    }
    if (includeFS) {
      unshift("const fs = require('fs');");
    }
    push("req.end(function (res) {");
    push("if (res.error) throw new Error(res.error);", 1);
    blank();
    push("console.log(res.body);", 1);
    push("});");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/node/target.mjs
var node = {
  info: {
    key: "node",
    title: "Node.js",
    extname: ".js",
    default: "native"
  },
  clientsById: {
    native: native2,
    request,
    unirest: unirest2,
    axios: axios2,
    fetch: fetch3
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/objc/helpers.mjs
var nsDeclaration = (nsClass, name, parameters, indent) => {
  const opening = `${nsClass} *${name} = `;
  const literal = literalRepresentation(parameters, indent ? opening.length : void 0);
  return `${opening}${literal};`;
};
var literalRepresentation = (value, indentation) => {
  const join = indentation === void 0 ? ", " : `,
   ${" ".repeat(indentation)}`;
  switch (Object.prototype.toString.call(value)) {
    case "[object Number]":
      return `@${value}`;
    case "[object Array]": {
      const valuesRepresentation = value.map((value2) => literalRepresentation(value2));
      return `@[ ${valuesRepresentation.join(join)} ]`;
    }
    case "[object Object]": {
      const keyValuePairs = [];
      for (const key in value) {
        keyValuePairs.push(`@"${key}": ${literalRepresentation(value[key])}`);
      }
      return `@{ ${keyValuePairs.join(join)} }`;
    }
    case "[object Boolean]":
      return value ? "@YES" : "@NO";
    default:
      if (value === null || value === void 0) {
        return "";
      }
      return `@"${value.toString().replace(/"/g, '\\"')}"`;
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/objc/nsurlsession/client.mjs
var nsurlsession = {
  info: {
    key: "nsurlsession",
    title: "NSURLSession",
    link: "https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLSession_class/index.html",
    description: "Foundation's NSURLSession request"
  },
  convert: ({ allHeaders, postData, method, fullUrl }, options) => {
    var _a;
    const opts = {
      indent: "    ",
      pretty: true,
      timeout: 10,
      ...options
    };
    const { push, join, blank } = new CodeBuilder({ indent: opts.indent });
    const req = {
      hasHeaders: false,
      hasBody: false
    };
    push("#import <Foundation/Foundation.h>");
    if (Object.keys(allHeaders).length) {
      req.hasHeaders = true;
      blank();
      push(nsDeclaration("NSDictionary", "headers", allHeaders, opts.pretty));
    }
    if (postData && (postData.text || postData.jsonObj || postData.params)) {
      req.hasBody = true;
      switch (postData.mimeType) {
        case "application/x-www-form-urlencoded":
          if ((_a = postData.params) === null || _a === void 0 ? void 0 : _a.length) {
            blank();
            const [head, ...tail] = postData.params;
            push(`NSMutableData *postData = [[NSMutableData alloc] initWithData:[@"${head.name}=${head.value}" dataUsingEncoding:NSUTF8StringEncoding]];`);
            tail.forEach(({ name, value }) => {
              push(`[postData appendData:[@"&${name}=${value}" dataUsingEncoding:NSUTF8StringEncoding]];`);
            });
          } else {
            req.hasBody = false;
          }
          break;
        case "application/json":
          if (postData.jsonObj) {
            push(nsDeclaration("NSDictionary", "parameters", postData.jsonObj, opts.pretty));
            blank();
            push("NSData *postData = [NSJSONSerialization dataWithJSONObject:parameters options:0 error:nil];");
          }
          break;
        case "multipart/form-data":
          push(nsDeclaration("NSArray", "parameters", postData.params || [], opts.pretty));
          push(`NSString *boundary = @"${postData.boundary}";`);
          blank();
          push("NSError *error;");
          push("NSMutableString *body = [NSMutableString string];");
          push("for (NSDictionary *param in parameters) {");
          push('[body appendFormat:@"--%@\\r\\n", boundary];', 1);
          push('if (param[@"fileName"]) {', 1);
          push('[body appendFormat:@"Content-Disposition:form-data; name=\\"%@\\"; filename=\\"%@\\"\\r\\n", param[@"name"], param[@"fileName"]];', 2);
          push('[body appendFormat:@"Content-Type: %@\\r\\n\\r\\n", param[@"contentType"]];', 2);
          push('[body appendFormat:@"%@", [NSString stringWithContentsOfFile:param[@"fileName"] encoding:NSUTF8StringEncoding error:&error]];', 2);
          push("if (error) {", 2);
          push('NSLog(@"%@", error);', 3);
          push("}", 2);
          push("} else {", 1);
          push('[body appendFormat:@"Content-Disposition:form-data; name=\\"%@\\"\\r\\n\\r\\n", param[@"name"]];', 2);
          push('[body appendFormat:@"%@", param[@"value"]];', 2);
          push("}", 1);
          push("}");
          push('[body appendFormat:@"\\r\\n--%@--\\r\\n", boundary];');
          push("NSData *postData = [body dataUsingEncoding:NSUTF8StringEncoding];");
          break;
        default:
          blank();
          push(`NSData *postData = [[NSData alloc] initWithData:[@"${postData.text}" dataUsingEncoding:NSUTF8StringEncoding]];`);
      }
    }
    blank();
    push(`NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"${fullUrl}"]`);
    push("                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy");
    push(`                                                   timeoutInterval:${opts.timeout.toFixed(1)}];`);
    push(`[request setHTTPMethod:@"${method}"];`);
    if (req.hasHeaders) {
      push("[request setAllHTTPHeaderFields:headers];");
    }
    if (req.hasBody) {
      push("[request setHTTPBody:postData];");
    }
    blank();
    push("NSURLSession *session = [NSURLSession sharedSession];");
    push("NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request");
    push("                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {");
    push("                                            if (error) {", 1);
    push('                                            NSLog(@"%@", error);', 2);
    push("                                            } else {", 1);
    push("                                            NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;", 2);
    push('                                            NSLog(@"%@", httpResponse);', 2);
    push("                                            }", 1);
    push("                                            }];");
    push("[dataTask resume];");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/objc/target.mjs
var objc = {
  info: {
    key: "objc",
    title: "Objective-C",
    extname: ".m",
    default: "nsurlsession"
  },
  clientsById: {
    nsurlsession
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/ocaml/cohttp/client.mjs
var cohttp = {
  info: {
    key: "cohttp",
    title: "CoHTTP",
    link: "https://github.com/mirage/ocaml-cohttp",
    description: "Cohttp is a very lightweight HTTP server using Lwt or Async for OCaml"
  },
  convert: ({ fullUrl, allHeaders, postData, method }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const methods = ["get", "post", "head", "delete", "patch", "put", "options"];
    const { push, blank, join } = new CodeBuilder({ indent: opts.indent });
    push("open Cohttp_lwt_unix");
    push("open Cohttp");
    push("open Lwt");
    blank();
    push(`let uri = Uri.of_string "${fullUrl}" in`);
    const headers = Object.keys(allHeaders);
    if (headers.length === 1) {
      push(`let headers = Header.add (Header.init ()) "${headers[0]}" "${escapeForDoubleQuotes(allHeaders[headers[0]])}" in`);
    } else if (headers.length > 1) {
      push("let headers = Header.add_list (Header.init ()) [");
      headers.forEach((key) => {
        push(`("${key}", "${escapeForDoubleQuotes(allHeaders[key])}");`, 1);
      });
      push("] in");
    }
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`let body = Cohttp_lwt_body.of_string ${JSON.stringify(postData.text)} in`);
    }
    blank();
    const h10 = headers.length ? "~headers " : "";
    const b14 = (postData === null || postData === void 0 ? void 0 : postData.text) ? "~body " : "";
    const m29 = methods.includes(method.toLowerCase()) ? `\`${method.toUpperCase()}` : `(Code.method_of_string "${method}")`;
    push(`Client.call ${h10}${b14}${m29} uri`);
    push(">>= fun (res, body_stream) ->");
    push("(* Do stuff with the result *)", 1);
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/ocaml/target.mjs
var ocaml = {
  info: {
    key: "ocaml",
    title: "OCaml",
    extname: ".ml",
    default: "cohttp"
  },
  clientsById: {
    cohttp
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/php/helpers.mjs
var convertType = (obj, indent, lastIndent) => {
  lastIndent = lastIndent || "";
  indent = indent || "";
  switch (Object.prototype.toString.call(obj)) {
    case "[object Null]":
      return "null";
    case "[object Undefined]":
      return "null";
    case "[object String]":
      return `'${escapeString(obj, { delimiter: "'", escapeNewlines: false })}'`;
    case "[object Number]":
      return obj.toString();
    case "[object Array]": {
      const contents = obj.map((item) => convertType(item, `${indent}${indent}`, indent)).join(`,
${indent}`);
      return `[
${indent}${contents}
${lastIndent}]`;
    }
    case "[object Object]": {
      const result = [];
      for (const i24 in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, i24)) {
          result.push(`${convertType(i24, indent)} => ${convertType(obj[i24], `${indent}${indent}`, indent)}`);
        }
      }
      return `[
${indent}${result.join(`,
${indent}`)}
${lastIndent}]`;
    }
    default:
      return "null";
  }
};
var supportedMethods = [
  "ACL",
  "BASELINE_CONTROL",
  "CHECKIN",
  "CHECKOUT",
  "CONNECT",
  "COPY",
  "DELETE",
  "GET",
  "HEAD",
  "LABEL",
  "LOCK",
  "MERGE",
  "MKACTIVITY",
  "MKCOL",
  "MKWORKSPACE",
  "MOVE",
  "OPTIONS",
  "POST",
  "PROPFIND",
  "PROPPATCH",
  "PUT",
  "REPORT",
  "TRACE",
  "UNCHECKOUT",
  "UNLOCK",
  "UPDATE",
  "VERSION_CONTROL"
];

// node_modules/httpsnippet-lite/dist/esm/targets/php/curl/client.mjs
var curl = {
  info: {
    key: "curl",
    title: "cURL",
    link: "http://php.net/manual/en/book.curl.php",
    description: "PHP with ext-curl"
  },
  convert: ({ uriObj, postData, fullUrl, method, httpVersion, cookies, headersObj }, options = {}) => {
    const { closingTag = false, indent = "  ", maxRedirects = 10, namedErrors = false, noTags = false, shortTags = false, timeout = 30 } = options;
    const { push, blank, join } = new CodeBuilder({ indent });
    if (!noTags) {
      push(shortTags ? "<?" : "<?php");
      blank();
    }
    push("$curl = curl_init();");
    blank();
    const curlOptions = [
      {
        escape: true,
        name: "CURLOPT_PORT",
        value: uriObj.port === "" ? null : uriObj.port
      },
      {
        escape: true,
        name: "CURLOPT_URL",
        value: fullUrl
      },
      {
        escape: false,
        name: "CURLOPT_RETURNTRANSFER",
        value: "true"
      },
      {
        escape: true,
        name: "CURLOPT_ENCODING",
        value: ""
      },
      {
        escape: false,
        name: "CURLOPT_MAXREDIRS",
        value: maxRedirects
      },
      {
        escape: false,
        name: "CURLOPT_TIMEOUT",
        value: timeout
      },
      {
        escape: false,
        name: "CURLOPT_HTTP_VERSION",
        value: httpVersion === "HTTP/1.0" ? "CURL_HTTP_VERSION_1_0" : "CURL_HTTP_VERSION_1_1"
      },
      {
        escape: true,
        name: "CURLOPT_CUSTOMREQUEST",
        value: method
      },
      {
        escape: !(postData === null || postData === void 0 ? void 0 : postData.jsonObj),
        name: "CURLOPT_POSTFIELDS",
        value: postData ? postData.jsonObj ? `json_encode(${convertType(postData.jsonObj, indent.repeat(2), indent)})` : postData.text : void 0
      }
    ];
    push("curl_setopt_array($curl, [");
    const curlopts = new CodeBuilder({ indent, join: `
${indent}` });
    curlOptions.forEach(({ value, name, escape: escape2 }) => {
      if (value !== null && value !== void 0) {
        curlopts.push(`${name} => ${escape2 ? JSON.stringify(value) : value},`);
      }
    });
    const curlCookies = cookies.map((cookie) => `${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}`);
    if (curlCookies.length) {
      curlopts.push(`CURLOPT_COOKIE => "${curlCookies.join("; ")}",`);
    }
    const headers = Object.keys(headersObj).sort().map((key) => `"${key}: ${escapeForDoubleQuotes(headersObj[key])}"`);
    if (headers.length) {
      curlopts.push("CURLOPT_HTTPHEADER => [");
      curlopts.push(headers.join(`,
${indent}${indent}`), 1);
      curlopts.push("],");
    }
    push(curlopts.join(), 1);
    push("]);");
    blank();
    push("$response = curl_exec($curl);");
    push("$err = curl_error($curl);");
    blank();
    push("curl_close($curl);");
    blank();
    push("if ($err) {");
    if (namedErrors) {
      push('echo array_flip(get_defined_constants(true)["curl"])[$err];', 1);
    } else {
      push('echo "cURL Error #:" . $err;', 1);
    }
    push("} else {");
    push("echo $response;", 1);
    push("}");
    if (!noTags && closingTag) {
      blank();
      push("?>");
    }
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/php/guzzle/client.mjs
var guzzle = {
  info: {
    key: "guzzle",
    title: "Guzzle",
    link: "http://docs.guzzlephp.org/en/stable/",
    description: "PHP with Guzzle"
  },
  convert: ({ postData, fullUrl, method, cookies, headersObj }, options) => {
    var _a;
    const opts = {
      closingTag: false,
      indent: "  ",
      noTags: false,
      shortTags: false,
      ...options
    };
    const { push, blank, join } = new CodeBuilder({ indent: opts.indent });
    const { code: requestCode, push: requestPush, join: requestJoin } = new CodeBuilder({ indent: opts.indent });
    if (!opts.noTags) {
      push(opts.shortTags ? "<?" : "<?php");
      blank();
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        requestPush(`'form_params' => ${convertType(postData.paramsObj, opts.indent + opts.indent, opts.indent)},`, 1);
        break;
      case "multipart/form-data": {
        const fields = [];
        if (postData.params) {
          postData.params.forEach(function(param) {
            if (param.fileName) {
              const field = {
                name: param.name,
                filename: param.fileName,
                contents: param.value
              };
              if (param.contentType) {
                field.headers = { "Content-Type": param.contentType };
              }
              fields.push(field);
            } else if (param.value) {
              fields.push({
                name: param.name,
                contents: param.value
              });
            }
          });
        }
        if (fields.length) {
          requestPush(`'multipart' => ${convertType(fields, opts.indent + opts.indent, opts.indent)}`, 1);
          if (hasHeader(headersObj, "content-type")) {
            if ((_a = getHeader2(headersObj, "content-type")) === null || _a === void 0 ? void 0 : _a.indexOf("boundary")) {
              const headerName = getHeaderName(headersObj, "content-type");
              if (headerName) {
                delete headersObj[headerName];
              }
            }
          }
        }
        break;
      }
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          requestPush(`'body' => ${convertType(postData.text)},`, 1);
        }
    }
    const headers = Object.keys(headersObj).sort().map(function(key) {
      return `${opts.indent}${opts.indent}'${key}' => '${escapeForSingleQuotes(headersObj[key])}',`;
    });
    const cookieString = cookies.map((cookie) => `${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}`).join("; ");
    if (cookieString.length) {
      headers.push(`${opts.indent}${opts.indent}'cookie' => '${escapeForSingleQuotes(cookieString)}',`);
    }
    if (headers.length) {
      requestPush("'headers' => [", 1);
      requestPush(headers.join("\n"));
      requestPush("],", 1);
    }
    push("$client = new \\GuzzleHttp\\Client();");
    blank();
    if (requestCode.length) {
      push(`$response = $client->request('${method}', '${fullUrl}', [`);
      push(requestJoin());
      push("]);");
    } else {
      push(`$response = $client->request('${method}', '${fullUrl}');`);
    }
    blank();
    push("echo $response->getBody();");
    if (!opts.noTags && opts.closingTag) {
      blank();
      push("?>");
    }
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/php/http1/client.mjs
var http1 = {
  info: {
    key: "http1",
    title: "HTTP v1",
    link: "http://php.net/manual/en/book.http.php",
    description: "PHP with pecl/http v1"
  },
  convert: ({ method, url, postData, queryObj, headersObj, cookiesObj }, options = {}) => {
    const { closingTag = false, indent = "  ", noTags = false, shortTags = false } = options;
    const { push, blank, join } = new CodeBuilder({ indent });
    if (!noTags) {
      push(shortTags ? "<?" : "<?php");
      blank();
    }
    if (!supportedMethods.includes(method.toUpperCase())) {
      push(`HttpRequest::methodRegister('${method}');`);
    }
    push("$request = new HttpRequest();");
    push(`$request->setUrl(${convertType(url)});`);
    if (supportedMethods.includes(method.toUpperCase())) {
      push(`$request->setMethod(HTTP_METH_${method.toUpperCase()});`);
    } else {
      push(`$request->setMethod(HttpRequest::HTTP_METH_${method.toUpperCase()});`);
    }
    blank();
    if (Object.keys(queryObj).length) {
      push(`$request->setQueryData(${convertType(queryObj, indent)});`);
      blank();
    }
    if (Object.keys(headersObj).length) {
      push(`$request->setHeaders(${convertType(headersObj, indent)});`);
      blank();
    }
    if (Object.keys(cookiesObj).length) {
      push(`$request->setCookies(${convertType(cookiesObj, indent)});`);
      blank();
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        push(`$request->setContentType(${convertType(postData.mimeType)});`);
        push(`$request->setPostFields(${convertType(postData.paramsObj, indent)});`);
        blank();
        break;
      case "application/json":
        push(`$request->setContentType(${convertType(postData.mimeType)});`);
        push(`$request->setBody(json_encode(${convertType(postData.jsonObj, indent)}));`);
        blank();
        break;
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          push(`$request->setBody(${convertType(postData.text)});`);
          blank();
        }
    }
    push("try {");
    push("$response = $request->send();", 1);
    blank();
    push("echo $response->getBody();", 1);
    push("} catch (HttpException $ex) {");
    push("echo $ex;", 1);
    push("}");
    if (!noTags && closingTag) {
      blank();
      push("?>");
    }
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/php/http2/client.mjs
var http2 = {
  info: {
    key: "http2",
    title: "HTTP v2",
    link: "http://devel-m6w6.rhcloud.com/mdref/http",
    description: "PHP with pecl/http v2"
  },
  convert: ({ postData, headersObj, method, queryObj, cookiesObj, url }, options = {}) => {
    var _a;
    const { closingTag = false, indent = "  ", noTags = false, shortTags = false } = options;
    const { push, blank, join } = new CodeBuilder({ indent });
    let hasBody = false;
    if (!noTags) {
      push(shortTags ? "<?" : "<?php");
      blank();
    }
    push("$client = new http\\Client;");
    push("$request = new http\\Client\\Request;");
    blank();
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        push("$body = new http\\Message\\Body;");
        push(`$body->append(new http\\QueryString(${convertType(postData.paramsObj, indent)}));`);
        blank();
        hasBody = true;
        break;
      case "multipart/form-data": {
        if (!postData.params) {
          break;
        }
        const files = [];
        const fields = {};
        postData.params.forEach(({ name, fileName, value, contentType }) => {
          if (fileName) {
            files.push({
              name,
              type: contentType,
              file: fileName,
              data: value
            });
            return;
          }
          if (value) {
            fields[name] = value;
          }
        });
        const field = Object.keys(fields).length ? convertType(fields, indent) : "null";
        const formValue = files.length ? convertType(files, indent) : "null";
        push("$body = new http\\Message\\Body;");
        push(`$body->addForm(${field}, ${formValue});`);
        if (hasHeader(headersObj, "content-type")) {
          if ((_a = getHeader2(headersObj, "content-type")) === null || _a === void 0 ? void 0 : _a.indexOf("boundary")) {
            const headerName = getHeaderName(headersObj, "content-type");
            if (headerName) {
              delete headersObj[headerName];
            }
          }
        }
        blank();
        hasBody = true;
        break;
      }
      case "application/json":
        push("$body = new http\\Message\\Body;");
        push(`$body->append(json_encode(${convertType(postData.jsonObj, indent)}));`);
        hasBody = true;
        break;
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          push("$body = new http\\Message\\Body;");
          push(`$body->append(${convertType(postData.text)});`);
          blank();
          hasBody = true;
        }
    }
    push(`$request->setRequestUrl(${convertType(url)});`);
    push(`$request->setRequestMethod(${convertType(method)});`);
    if (hasBody) {
      push("$request->setBody($body);");
      blank();
    }
    if (Object.keys(queryObj).length) {
      push(`$request->setQuery(new http\\QueryString(${convertType(queryObj, indent)}));`);
      blank();
    }
    if (Object.keys(headersObj).length) {
      push(`$request->setHeaders(${convertType(headersObj, indent)});`);
      blank();
    }
    if (Object.keys(cookiesObj).length) {
      blank();
      push(`$client->setCookies(${convertType(cookiesObj, indent)});`);
      blank();
    }
    push("$client->enqueue($request)->send();");
    push("$response = $client->getResponse();");
    blank();
    push("echo $response->getBody();");
    if (!noTags && closingTag) {
      blank();
      push("?>");
    }
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/php/target.mjs
var php = {
  info: {
    key: "php",
    title: "PHP",
    extname: ".php",
    default: "curl"
  },
  clientsById: {
    curl,
    guzzle,
    http1,
    http2
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/powershell/common.mjs
var generatePowershellConvert = (command) => {
  const convert = ({ method, headersObj, cookies, uriObj, fullUrl, postData, allHeaders }) => {
    const { push, join } = new CodeBuilder();
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    if (!methods.includes(method.toUpperCase())) {
      return "Method not supported";
    }
    const commandOptions = [];
    const headers = Object.keys(headersObj);
    if (headers.length) {
      push("$headers=@{}");
      headers.forEach((key) => {
        if (key !== "connection") {
          push(`$headers.Add("${key}", "${escapeString(headersObj[key], { escapeChar: "`" })}")`);
        }
      });
      commandOptions.push("-Headers $headers");
    }
    if (cookies.length) {
      push("$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession");
      cookies.forEach((cookie) => {
        push("$cookie = New-Object System.Net.Cookie");
        push(`$cookie.Name = '${cookie.name}'`);
        push(`$cookie.Value = '${cookie.value}'`);
        push(`$cookie.Domain = '${uriObj.host}'`);
        push("$session.Cookies.Add($cookie)");
      });
      commandOptions.push("-WebSession $session");
    }
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      commandOptions.push(`-ContentType '${escapeString(getHeader2(allHeaders, "content-type"), {
        delimiter: "'",
        escapeChar: "`"
      })}'`);
      commandOptions.push(`-Body '${postData.text}'`);
    }
    push(`$response = ${command} -Uri '${fullUrl}' -Method ${method} ${commandOptions.join(" ")}`);
    return join();
  };
  return convert;
};

// node_modules/httpsnippet-lite/dist/esm/targets/powershell/restmethod/client.mjs
var restmethod = {
  info: {
    key: "restmethod",
    title: "Invoke-RestMethod",
    link: "https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Utility/Invoke-RestMethod",
    description: "Powershell Invoke-RestMethod client"
  },
  convert: generatePowershellConvert("Invoke-RestMethod")
};

// node_modules/httpsnippet-lite/dist/esm/targets/powershell/webrequest/client.mjs
var webrequest = {
  info: {
    key: "webrequest",
    title: "Invoke-WebRequest",
    link: "https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Utility/Invoke-WebRequest",
    description: "Powershell Invoke-WebRequest client"
  },
  convert: generatePowershellConvert("Invoke-WebRequest")
};

// node_modules/httpsnippet-lite/dist/esm/targets/powershell/target.mjs
var powershell = {
  info: {
    key: "powershell",
    title: "Powershell",
    extname: ".ps1",
    default: "webrequest"
  },
  clientsById: {
    webrequest,
    restmethod
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/python/python3/client.mjs
var python3 = {
  info: {
    key: "python3",
    title: "http.client",
    link: "https://docs.python.org/3/library/http.client.html",
    description: "Python3 HTTP Client"
  },
  convert: ({ uriObj: { path, protocol, host }, postData, allHeaders, method }, options = {}) => {
    const { insecureSkipVerify = false } = options;
    const { push, blank, join } = new CodeBuilder();
    push("import http.client");
    if (insecureSkipVerify) {
      push("import ssl");
    }
    blank();
    if (protocol === "https:") {
      const sslContext = insecureSkipVerify ? ", context = ssl._create_unverified_context()" : "";
      push(`conn = http.client.HTTPSConnection("${host}"${sslContext})`);
      blank();
    } else {
      push(`conn = http.client.HTTPConnection("${host}")`);
      blank();
    }
    const payload = JSON.stringify(postData === null || postData === void 0 ? void 0 : postData.text);
    if (payload) {
      push(`payload = ${payload}`);
      blank();
    }
    const headers = allHeaders;
    const headerCount = Object.keys(headers).length;
    if (headerCount === 1) {
      for (const header in headers) {
        push(`headers = { '${header}': "${escapeForDoubleQuotes(headers[header])}" }`);
        blank();
      }
    } else if (headerCount > 1) {
      let count = 1;
      push("headers = {");
      for (const header in headers) {
        if (count++ !== headerCount) {
          push(`    '${header}': "${escapeForDoubleQuotes(headers[header])}",`);
        } else {
          push(`    '${header}': "${escapeForDoubleQuotes(headers[header])}"`);
        }
      }
      push("}");
      blank();
    }
    if (payload && headerCount) {
      push(`conn.request("${method}", "${path}", payload, headers)`);
    } else if (payload && !headerCount) {
      push(`conn.request("${method}", "${path}", payload)`);
    } else if (!payload && headerCount) {
      push(`conn.request("${method}", "${path}", headers=headers)`);
    } else {
      push(`conn.request("${method}", "${path}")`);
    }
    blank();
    push("res = conn.getresponse()");
    push("data = res.read()");
    blank();
    push('print(data.decode("utf-8"))');
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/python/helpers.mjs
function concatValues(concatType, values, pretty, indentation, indentLevel) {
  const currentIndent = indentation.repeat(indentLevel);
  const closingBraceIndent = indentation.repeat(indentLevel - 1);
  const join = pretty ? `,
${currentIndent}` : ", ";
  const openingBrace = concatType === "object" ? "{" : "[";
  const closingBrace = concatType === "object" ? "}" : "]";
  if (pretty) {
    return `${openingBrace}
${currentIndent}${values.join(join)}
${closingBraceIndent}${closingBrace}`;
  }
  if (concatType === "object" && values.length > 0) {
    return `${openingBrace} ${values.join(join)} ${closingBrace}`;
  }
  return `${openingBrace}${values.join(join)}${closingBrace}`;
}
var literalRepresentation2 = (value, opts, indentLevel) => {
  indentLevel = indentLevel === void 0 ? 1 : indentLevel + 1;
  switch (Object.prototype.toString.call(value)) {
    case "[object Number]":
      return value;
    case "[object Array]": {
      let pretty = false;
      const valuesRepresentation = value.map((v11) => {
        if (Object.prototype.toString.call(v11) === "[object Object]") {
          pretty = Object.keys(v11).length > 1;
        }
        return literalRepresentation2(v11, opts, indentLevel);
      });
      return concatValues("array", valuesRepresentation, pretty, opts.indent, indentLevel);
    }
    case "[object Object]": {
      const keyValuePairs = [];
      for (const key in value) {
        keyValuePairs.push(`"${key}": ${literalRepresentation2(value[key], opts, indentLevel)}`);
      }
      return concatValues("object", keyValuePairs, opts.pretty && keyValuePairs.length > 1, opts.indent, indentLevel);
    }
    case "[object Null]":
      return "None";
    case "[object Boolean]":
      return value ? "True" : "False";
    default:
      if (value === null || value === void 0) {
        return "";
      }
      return `"${value.toString().replace(/"/g, '\\"')}"`;
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/python/requests/client.mjs
var builtInMethods = ["HEAD", "GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"];
var requests = {
  info: {
    key: "requests",
    title: "Requests",
    link: "http://docs.python-requests.org/en/latest/api/#requests.request",
    description: "Requests HTTP library"
  },
  convert: ({ queryObj, url, postData, allHeaders, method }, options) => {
    const opts = {
      indent: "    ",
      pretty: true,
      ...options
    };
    const { push, blank, join } = new CodeBuilder({ indent: opts.indent });
    push("import requests");
    blank();
    push(`url = "${url}"`);
    blank();
    let qs;
    if (Object.keys(queryObj).length) {
      qs = `querystring = ${JSON.stringify(queryObj)}`;
      push(qs);
      blank();
    }
    const headers = allHeaders;
    let payload = {};
    const files = {};
    let hasFiles = false;
    let hasPayload = false;
    let jsonPayload = false;
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/json":
        if (postData.jsonObj) {
          push(`payload = ${literalRepresentation2(postData.jsonObj, opts)}`);
          jsonPayload = true;
          hasPayload = true;
        }
        break;
      case "multipart/form-data":
        if (!postData.params) {
          break;
        }
        payload = {};
        postData.params.forEach((p20) => {
          if (p20.fileName) {
            files[p20.name] = `open('${p20.fileName}', 'rb')`;
            hasFiles = true;
          } else {
            payload[p20.name] = p20.value;
            hasPayload = true;
          }
        });
        if (hasFiles) {
          push(`files = ${literalRepresentation2(files, opts)}`);
          if (hasPayload) {
            push(`payload = ${literalRepresentation2(payload, opts)}`);
          }
          const headerName = getHeaderName(headers, "content-type");
          if (headerName) {
            delete headers[headerName];
          }
        } else {
          const nonFilePayload = JSON.stringify(postData.text);
          if (nonFilePayload) {
            push(`payload = ${nonFilePayload}`);
            hasPayload = true;
          }
        }
        break;
      default: {
        if (!postData) {
          break;
        }
        if (postData.mimeType === "application/x-www-form-urlencoded" && postData.paramsObj) {
          push(`payload = ${literalRepresentation2(postData.paramsObj, opts)}`);
          hasPayload = true;
          break;
        }
        const payload2 = JSON.stringify(postData.text);
        if (payload2) {
          push(`payload = ${payload2}`);
          hasPayload = true;
        }
      }
    }
    const headerCount = Object.keys(headers).length;
    if (headerCount === 0 && (hasPayload || hasFiles)) {
      blank();
    } else if (headerCount === 1) {
      for (const header in headers) {
        push(`headers = {"${header}": "${escapeForDoubleQuotes(headers[header])}"}`);
        blank();
      }
    } else if (headerCount > 1) {
      let count = 1;
      push("headers = {");
      for (const header in headers) {
        if (count !== headerCount) {
          push(`"${header}": "${escapeForDoubleQuotes(headers[header])}",`, 1);
        } else {
          push(`"${header}": "${escapeForDoubleQuotes(headers[header])}"`, 1);
        }
        count += 1;
      }
      push("}");
      blank();
    }
    let request2 = builtInMethods.includes(method) ? `response = requests.${method.toLowerCase()}(url` : `response = requests.request("${method}", url`;
    if (hasPayload) {
      if (jsonPayload) {
        request2 += ", json=payload";
      } else {
        request2 += ", data=payload";
      }
    }
    if (hasFiles) {
      request2 += ", files=files";
    }
    if (headerCount > 0) {
      request2 += ", headers=headers";
    }
    if (qs) {
      request2 += ", params=querystring";
    }
    request2 += ")";
    push(request2);
    blank();
    push("print(response.json())");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/python/target.mjs
var python = {
  info: {
    key: "python",
    title: "Python",
    extname: ".py",
    default: "python3"
  },
  clientsById: {
    python3,
    requests
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/r/httr/client.mjs
var httr = {
  info: {
    key: "httr",
    title: "httr",
    link: "https://cran.r-project.org/web/packages/httr/vignettes/quickstart.html",
    description: "httr: Tools for Working with URLs and HTTP"
  },
  convert: ({ url, queryObj, queryString, postData, allHeaders, method }, options = {}) => {
    var _a, _b;
    const { push, blank, join } = new CodeBuilder({
      indent: (_a = options.indent) !== null && _a !== void 0 ? _a : "  "
    });
    push("library(httr)");
    blank();
    push(`url <- "${url}"`);
    blank();
    const qs = queryObj;
    delete queryObj.key;
    const entries = Object.entries(qs);
    const entriesCount = entries.length;
    if (entriesCount === 1) {
      const entry = entries[0];
      push(`queryString <- list(${entry[0]} = "${entry[1]}")`);
      blank();
    } else if (entriesCount > 1) {
      push("queryString <- list(");
      entries.forEach(([key, value], i24) => {
        const isLastItem = i24 !== entriesCount - 1;
        const maybeComma = isLastItem ? "," : "";
        push(`${key} = "${value}"${maybeComma}`, 1);
      });
      push(")");
      blank();
    }
    const payload = JSON.stringify(postData === null || postData === void 0 ? void 0 : postData.text);
    if (payload) {
      push(`payload <- ${payload}`);
      blank();
    }
    if (postData && (postData.text || postData.jsonObj || postData.params)) {
      switch (postData.mimeType) {
        case "application/x-www-form-urlencoded":
          push('encode <- "form"');
          blank();
          break;
        case "application/json":
          push('encode <- "json"');
          blank();
          break;
        case "multipart/form-data":
          push('encode <- "multipart"');
          blank();
          break;
        default:
          push('encode <- "raw"');
          blank();
          break;
      }
    }
    const cookieHeader = getHeader2(allHeaders, "cookie");
    const acceptHeader = getHeader2(allHeaders, "accept");
    const setCookies = cookieHeader ? `set_cookies(\`${String(cookieHeader).replace(/;/g, '", `').replace(/` /g, "`").replace(/[=]/g, '` = "')}")` : void 0;
    const setAccept = acceptHeader ? `accept("${escapeForDoubleQuotes(acceptHeader)}")` : void 0;
    const setContentType = `content_type("${escapeForDoubleQuotes((_b = postData === null || postData === void 0 ? void 0 : postData.mimeType) !== null && _b !== void 0 ? _b : "application/octet-stream")}")`;
    const otherHeaders = Object.entries(allHeaders).filter(([key]) => !["cookie", "accept", "content-type"].includes(key.toLowerCase())).map(([key, value]) => `'${key}' = '${escapeForSingleQuotes(value)}'`).join(", ");
    const setHeaders = otherHeaders ? `add_headers(${otherHeaders})` : void 0;
    let request2 = `response <- VERB("${method}", url`;
    if (payload) {
      request2 += ", body = payload";
    }
    if (queryString.length) {
      request2 += ", query = queryString";
    }
    const headerAdditions = [setHeaders, setContentType, setAccept, setCookies].filter((x7) => !!x7).join(", ");
    if (headerAdditions) {
      request2 += `, ${headerAdditions}`;
    }
    if (postData && (postData.text || postData.jsonObj || postData.params)) {
      request2 += ", encode = encode";
    }
    request2 += ")";
    push(request2);
    blank();
    push('content(response, "text")');
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/r/target.mjs
var r11 = {
  info: {
    key: "r",
    title: "R",
    extname: ".r",
    default: "httr"
  },
  clientsById: {
    httr
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/ruby/native/client.mjs
var native3 = {
  info: {
    key: "native",
    title: "net::http",
    link: "http://ruby-doc.org/stdlib-2.2.1/libdoc/net/http/rdoc/Net/HTTP.html",
    description: "Ruby HTTP client"
  },
  convert: ({ uriObj, method: rawMethod, fullUrl, postData, allHeaders }, options = {}) => {
    const { insecureSkipVerify = false } = options;
    const { push, blank, join } = new CodeBuilder();
    push("require 'uri'");
    push("require 'net/http'");
    blank();
    const method = rawMethod.toUpperCase();
    const methods = [
      "GET",
      "POST",
      "HEAD",
      "DELETE",
      "PATCH",
      "PUT",
      "OPTIONS",
      "COPY",
      "LOCK",
      "UNLOCK",
      "MOVE",
      "TRACE"
    ];
    const capMethod = method.charAt(0) + method.substring(1).toLowerCase();
    if (!methods.includes(method)) {
      push(`class Net::HTTP::${capMethod} < Net::HTTPRequest`);
      push(`  METHOD = '${method.toUpperCase()}'`);
      push(`  REQUEST_HAS_BODY = '${(postData === null || postData === void 0 ? void 0 : postData.text) ? "true" : "false"}'`);
      push("  RESPONSE_HAS_BODY = true");
      push("end");
      blank();
    }
    push(`url = URI("${fullUrl}")`);
    blank();
    push("http = Net::HTTP.new(url.host, url.port)");
    if (uriObj.protocol === "https:") {
      push("http.use_ssl = true");
      if (insecureSkipVerify) {
        push("http.verify_mode = OpenSSL::SSL::VERIFY_NONE");
      }
    }
    blank();
    push(`request = Net::HTTP::${capMethod}.new(url)`);
    const headers = Object.keys(allHeaders);
    if (headers.length) {
      headers.forEach((key) => {
        push(`request["${key}"] = '${escapeForSingleQuotes(allHeaders[key])}'`);
      });
    }
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`request.body = ${JSON.stringify(postData.text)}`);
    }
    blank();
    push("response = http.request(request)");
    push("puts response.read_body");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/ruby/target.mjs
var ruby = {
  info: {
    key: "ruby",
    title: "Ruby",
    extname: ".rb",
    default: "native"
  },
  clientsById: {
    native: native3
  }
};

// node_modules/httpsnippet-lite/dist/esm/helpers/shell.mjs
var quote = (value = "") => {
  const safe = /^[a-z0-9-_/.@%^=:]+$/i;
  const isShellSafe = safe.test(value);
  if (isShellSafe) {
    return value;
  }
  return `'${value.replace(/'/g, "'\\''")}'`;
};
var escape = (value) => value.replace(/\r/g, "\\r").replace(/\n/g, "\\n");

// node_modules/httpsnippet-lite/dist/esm/targets/shell/curl/client.mjs
var params = {
  "http1.0": "0",
  "url ": "",
  cookie: "b",
  data: "d",
  form: "F",
  globoff: "g",
  header: "H",
  insecure: "k",
  request: "X"
};
var getArg = (short) => (longName) => {
  if (short) {
    const shortName = params[longName];
    if (!shortName) {
      return "";
    }
    return `-${shortName}`;
  }
  return `--${longName}`;
};
var curl2 = {
  info: {
    key: "curl",
    title: "cURL",
    link: "http://curl.haxx.se/",
    description: "cURL is a command line tool and library for transferring data with URL syntax"
  },
  convert: ({ fullUrl, method, httpVersion, headersObj, allHeaders, postData }, options = {}) => {
    var _a;
    const { binary = false, globOff = false, indent = "  ", insecureSkipVerify = false, prettifyJson = false, short = false } = options;
    const { push, join } = new CodeBuilder({
      ...typeof indent === "string" ? { indent } : {},
      join: indent !== false ? ` \\
${indent}` : " "
    });
    const arg = getArg(short);
    let formattedUrl = quote(fullUrl);
    push(`curl ${arg("request")} ${method}`);
    if (globOff) {
      formattedUrl = unescape(formattedUrl);
      push(arg("globoff"));
    }
    push(`${arg("url ")}${formattedUrl}`);
    if (insecureSkipVerify) {
      push(arg("insecure"));
    }
    if (httpVersion === "HTTP/1.0") {
      push(arg("http1.0"));
    }
    if (getHeader2(allHeaders, "accept-encoding")) {
      push("--compressed");
    }
    if ((postData === null || postData === void 0 ? void 0 : postData.mimeType) === "multipart/form-data") {
      const contentTypeHeaderName = getHeaderName(headersObj, "content-type");
      if (contentTypeHeaderName) {
        const contentTypeHeader = headersObj[contentTypeHeaderName];
        if (contentTypeHeaderName && contentTypeHeader) {
          const noBoundary = contentTypeHeader.replace(/; boundary.+?(?=(;|$))/, "");
          headersObj[contentTypeHeaderName] = noBoundary;
          allHeaders[contentTypeHeaderName] = noBoundary;
        }
      }
    }
    Object.keys(headersObj).sort().forEach((key) => {
      const header = `${key}: ${headersObj[key]}`;
      push(`${arg("header")} ${quote(header)}`);
    });
    if (allHeaders.cookie) {
      push(`${arg("cookie")} ${quote(allHeaders.cookie)}`);
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "multipart/form-data":
        (_a = postData.params) === null || _a === void 0 ? void 0 : _a.forEach((param) => {
          let post = "";
          if (param.fileName) {
            post = `${param.name}=@${param.fileName}`;
          } else {
            post = `${param.name}=${param.value}`;
          }
          push(`${arg("form")} ${quote(post)}`);
        });
        break;
      case "application/x-www-form-urlencoded":
        if (postData.params) {
          postData.params.forEach((param) => {
            const unencoded = param.name;
            const encoded = encodeURIComponent(param.name);
            const needsEncoding = encoded !== unencoded;
            const name = needsEncoding ? encoded : unencoded;
            const flag = binary ? "--data-binary" : `--data${needsEncoding ? "-urlencode" : ""}`;
            push(`${flag} ${quote(`${name}=${param.value}`)}`);
          });
        } else {
          push(`${binary ? "--data-binary" : arg("data")} ${quote(postData.text)}`);
        }
        break;
      default: {
        if (!postData) {
          break;
        }
        if (!postData.text) {
          break;
        }
        const flag = binary ? "--data-binary" : arg("data");
        let builtPayload = false;
        if (isMimeTypeJSON(postData.mimeType)) {
          const couldBeJSON = postData.text.length > 2;
          if (couldBeJSON && prettifyJson) {
            try {
              const jsonPayload = JSON.parse(postData.text);
              builtPayload = true;
              const payload = JSON.stringify(jsonPayload, void 0, indent);
              if (postData.text.indexOf("'") > 0) {
                push(`${flag} @- <<EOF
${payload}
EOF`);
              } else {
                push(`${flag} '
${payload}
'`);
              }
            } catch (err) {
            }
          }
        }
        if (!builtPayload) {
          push(`${flag} ${quote(postData.text)}`);
        }
      }
    }
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/shell/httpie/client.mjs
var httpie = {
  info: {
    key: "httpie",
    title: "HTTPie",
    link: "http://httpie.org/",
    description: "a CLI, cURL-like tool for humans"
  },
  convert: ({ allHeaders, postData, queryObj, fullUrl, method, url }, options) => {
    const opts = {
      body: false,
      cert: false,
      headers: false,
      indent: "  ",
      pretty: false,
      print: false,
      queryParams: false,
      short: false,
      style: false,
      timeout: false,
      verbose: false,
      verify: false,
      ...options
    };
    const { push, join, unshift } = new CodeBuilder({
      indent: opts.indent,
      // @ts-expect-error SEEMS LEGIT
      join: opts.indent !== false ? ` \\
${opts.indent}` : " "
    });
    let raw = false;
    const flags = [];
    if (opts.headers) {
      flags.push(opts.short ? "-h" : "--headers");
    }
    if (opts.body) {
      flags.push(opts.short ? "-b" : "--body");
    }
    if (opts.verbose) {
      flags.push(opts.short ? "-v" : "--verbose");
    }
    if (opts.print) {
      flags.push(`${opts.short ? "-p" : "--print"}=${opts.print}`);
    }
    if (opts.verify) {
      flags.push(`--verify=${opts.verify}`);
    }
    if (opts.cert) {
      flags.push(`--cert=${opts.cert}`);
    }
    if (opts.pretty) {
      flags.push(`--pretty=${opts.pretty}`);
    }
    if (opts.style) {
      flags.push(`--style=${opts.style}`);
    }
    if (opts.timeout) {
      flags.push(`--timeout=${opts.timeout}`);
    }
    if (opts.queryParams) {
      Object.keys(queryObj).forEach((name) => {
        const value = queryObj[name];
        if (Array.isArray(value)) {
          value.forEach((val) => {
            push(`${name}==${quote(val)}`);
          });
        } else {
          push(`${name}==${quote(value)}`);
        }
      });
    }
    Object.keys(allHeaders).sort().forEach((key) => {
      push(`${key}:${quote(allHeaders[key])}`);
    });
    if ((postData === null || postData === void 0 ? void 0 : postData.mimeType) === "application/x-www-form-urlencoded") {
      if (postData.params && postData.params.length) {
        flags.push(opts.short ? "-f" : "--form");
        postData.params.forEach((param) => {
          push(`${param.name}=${quote(param.value)}`);
        });
      }
    } else {
      raw = true;
    }
    const cliFlags = flags.length ? `${flags.join(" ")} ` : "";
    url = quote(opts.queryParams ? url : fullUrl);
    unshift(`http ${cliFlags}${method} ${url}`);
    if (raw && (postData === null || postData === void 0 ? void 0 : postData.text)) {
      const postDataText = quote(postData.text);
      unshift(`echo ${postDataText} | `);
    }
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/shell/wget/client.mjs
var wget = {
  info: {
    key: "wget",
    title: "Wget",
    link: "https://www.gnu.org/software/wget/",
    description: "a free software package for retrieving files using HTTP, HTTPS"
  },
  convert: ({ method, postData, allHeaders, fullUrl }, options) => {
    const opts = {
      indent: "  ",
      short: false,
      verbose: false,
      ...options
    };
    const { push, join } = new CodeBuilder({
      indent: opts.indent,
      // @ts-expect-error SEEMS LEGIT
      join: opts.indent !== false ? ` \\
${opts.indent}` : " "
    });
    if (opts.verbose) {
      push(`wget ${opts.short ? "-v" : "--verbose"}`);
    } else {
      push(`wget ${opts.short ? "-q" : "--quiet"}`);
    }
    push(`--method ${quote(method)}`);
    Object.keys(allHeaders).forEach((key) => {
      const header = `${key}: ${allHeaders[key]}`;
      push(`--header ${quote(header)}`);
    });
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`--body-data ${escape(quote(postData.text))}`);
    }
    push(opts.short ? "-O" : "--output-document");
    push(`- ${quote(fullUrl)}`);
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/shell/target.mjs
var shell = {
  info: {
    key: "shell",
    title: "Shell",
    extname: ".sh",
    default: "curl"
  },
  clientsById: {
    curl: curl2,
    httpie,
    wget
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/swift/helpers.mjs
var buildString = (length, str) => str.repeat(length);
var concatArray = (arr, pretty, indentation, indentLevel) => {
  const currentIndent = buildString(indentLevel, indentation);
  const closingBraceIndent = buildString(indentLevel - 1, indentation);
  const join = pretty ? `,
${currentIndent}` : ", ";
  if (pretty) {
    return `[
${currentIndent}${arr.join(join)}
${closingBraceIndent}]`;
  }
  return `[${arr.join(join)}]`;
};
var literalDeclaration = (name, parameters, opts) => `let ${name} = ${literalRepresentation3(parameters, opts)}`;
var literalRepresentation3 = (value, opts, indentLevel) => {
  indentLevel = indentLevel === void 0 ? 1 : indentLevel + 1;
  switch (Object.prototype.toString.call(value)) {
    case "[object Number]":
      return value;
    case "[object Array]": {
      let pretty = false;
      const valuesRepresentation = value.map((v11) => {
        if (Object.prototype.toString.call(v11) === "[object Object]") {
          pretty = Object.keys(v11).length > 1;
        }
        return literalRepresentation3(v11, opts, indentLevel);
      });
      return concatArray(valuesRepresentation, pretty, opts.indent, indentLevel);
    }
    case "[object Object]": {
      const keyValuePairs = [];
      for (const key in value) {
        keyValuePairs.push(`"${key}": ${literalRepresentation3(value[key], opts, indentLevel)}`);
      }
      return concatArray(
        keyValuePairs,
        // @ts-expect-error needs better types
        opts.pretty && keyValuePairs.length > 1,
        // @ts-expect-error needs better types
        opts.indent,
        indentLevel
      );
    }
    case "[object Boolean]":
      return value.toString();
    default:
      if (value === null || value === void 0) {
        return "";
      }
      return `"${value.toString().replace(/"/g, '\\"')}"`;
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/swift/nsurlsession/client.mjs
var nsurlsession2 = {
  info: {
    key: "nsurlsession",
    title: "NSURLSession",
    link: "https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLSession_class/index.html",
    description: "Foundation's NSURLSession request"
  },
  convert: ({ allHeaders, postData, fullUrl, method }, options) => {
    var _a;
    const opts = {
      indent: "  ",
      pretty: true,
      timeout: "10",
      ...options
    };
    const { push, blank, join } = new CodeBuilder({ indent: opts.indent });
    const req = {
      hasHeaders: false,
      hasBody: false
    };
    push("import Foundation");
    if (Object.keys(allHeaders).length) {
      req.hasHeaders = true;
      blank();
      push(literalDeclaration("headers", allHeaders, opts));
    }
    if (postData && (postData.text || postData.jsonObj || postData.params)) {
      req.hasBody = true;
      switch (postData.mimeType) {
        case "application/x-www-form-urlencoded":
          blank();
          if ((_a = postData.params) === null || _a === void 0 ? void 0 : _a.length) {
            const [head, ...tail] = postData.params;
            push(`let postData = NSMutableData(data: "${head.name}=${head.value}".data(using: String.Encoding.utf8)!)`);
            tail.forEach(({ name, value }) => {
              push(`postData.append("&${name}=${value}".data(using: String.Encoding.utf8)!)`);
            });
          } else {
            req.hasBody = false;
          }
          break;
        case "application/json":
          if (postData.jsonObj) {
            push(`${literalDeclaration("parameters", postData.jsonObj, opts)} as [String : Any]`);
            blank();
            push("let postData = JSONSerialization.data(withJSONObject: parameters, options: [])");
          }
          break;
        case "multipart/form-data":
          push(literalDeclaration("parameters", postData.params, opts));
          blank();
          push(`let boundary = "${postData.boundary}"`);
          blank();
          push('var body = ""');
          push("var error: NSError? = nil");
          push("for param in parameters {");
          push('let paramName = param["name"]!', 1);
          push('body += "--\\(boundary)\\r\\n"', 1);
          push('body += "Content-Disposition:form-data; name=\\"\\(paramName)\\""', 1);
          push('if let filename = param["fileName"] {', 1);
          push('let contentType = param["content-type"]!', 2);
          push("let fileContent = String(contentsOfFile: filename, encoding: String.Encoding.utf8)", 2);
          push("if (error != nil) {", 2);
          push("print(error as Any)", 3);
          push("}", 2);
          push('body += "; filename=\\"\\(filename)\\"\\r\\n"', 2);
          push('body += "Content-Type: \\(contentType)\\r\\n\\r\\n"', 2);
          push("body += fileContent", 2);
          push('} else if let paramValue = param["value"] {', 1);
          push('body += "\\r\\n\\r\\n\\(paramValue)"', 2);
          push("}", 1);
          push("}");
          break;
        default:
          blank();
          push(`let postData = NSData(data: "${postData.text}".data(using: String.Encoding.utf8)!)`);
      }
    }
    blank();
    push(`let request = NSMutableURLRequest(url: NSURL(string: "${fullUrl}")! as URL,`);
    push("                                        cachePolicy: .useProtocolCachePolicy,");
    push(
      // @ts-expect-error needs better types
      `                                    timeoutInterval: ${parseInt(opts.timeout, 10).toFixed(1)})`
    );
    push(`request.httpMethod = "${method}"`);
    if (req.hasHeaders) {
      push("request.allHTTPHeaderFields = headers");
    }
    if (req.hasBody) {
      push("request.httpBody = postData as Data");
    }
    blank();
    push("let session = URLSession.shared");
    push("let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in");
    push("if (error != nil) {", 1);
    push("print(error as Any)", 2);
    push("} else {", 1);
    push("let httpResponse = response as? HTTPURLResponse", 2);
    push("print(httpResponse)", 2);
    push("}", 1);
    push("})");
    blank();
    push("dataTask.resume()");
    return join();
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/swift/target.mjs
var swift = {
  info: {
    key: "swift",
    title: "Swift",
    extname: ".swift",
    default: "nsurlsession"
  },
  clientsById: {
    nsurlsession: nsurlsession2
  }
};

// node_modules/httpsnippet-lite/dist/esm/targets/targets.mjs
var targets = {
  c: c17,
  clojure,
  csharp,
  go,
  http,
  java,
  javascript,
  kotlin,
  node,
  objc,
  ocaml,
  php,
  powershell,
  python,
  r: r11,
  ruby,
  shell,
  swift
};

// node_modules/httpsnippet-lite/dist/esm/helpers/utils.mjs
var availableTargets = () => Object.keys(targets).map((targetId) => ({
  ...targets[targetId].info,
  clients: Object.keys(targets[targetId].clientsById).map((clientId) => targets[targetId].clientsById[clientId].info)
}));

// node_modules/httpsnippet-lite/dist/esm/httpsnippet.mjs
function basename(value) {
  const parts = value.split("/");
  return parts[parts.length - 1];
}
var isHarEntry = (value) => typeof value === "object" && "log" in value && typeof value.log === "object" && "entries" in value.log && Array.isArray(value.log.entries);
var HTTPSnippet = class {
  constructor(input) {
    let entries = [];
    if (isHarEntry(input)) {
      entries = input.log.entries;
    } else {
      entries = [
        {
          request: input
        }
      ];
    }
    this.requests = Promise.all(entries.map(({ request: request2 }) => {
      var _a;
      const req = {
        bodySize: 0,
        headersSize: 0,
        headers: [],
        cookies: [],
        httpVersion: "HTTP/1.1",
        queryString: [],
        postData: {
          mimeType: ((_a = request2.postData) === null || _a === void 0 ? void 0 : _a.mimeType) || "application/octet-stream"
        },
        ...request2
      };
      return this.prepare(req);
    }));
  }
  async prepare(harRequest) {
    var _a, _b, _c, _d;
    const request2 = {
      ...harRequest,
      fullUrl: "",
      queryObj: {},
      headersObj: {},
      cookiesObj: {},
      allHeaders: {}
    };
    if (request2.queryString && request2.queryString.length) {
      request2.queryObj = request2.queryString.reduce(reducer, {});
    }
    if (request2.headers && request2.headers.length) {
      const http2VersionRegex = /^HTTP\/2/;
      request2.headersObj = request2.headers.reduce((accumulator, { name, value }) => {
        const headerName = http2VersionRegex.exec(request2.httpVersion) ? name.toLocaleLowerCase() : name;
        return {
          ...accumulator,
          [headerName]: value
        };
      }, {});
    }
    if (request2.cookies && request2.cookies.length) {
      request2.cookiesObj = request2.cookies.reduceRight((accumulator, { name, value }) => ({
        ...accumulator,
        [name]: value
      }), {});
    }
    const cookies = (_a = request2.cookies) === null || _a === void 0 ? void 0 : _a.map(({ name, value }) => `${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
    if (cookies === null || cookies === void 0 ? void 0 : cookies.length) {
      request2.allHeaders.cookie = cookies.join("; ");
    }
    switch ((_b = request2.postData) === null || _b === void 0 ? void 0 : _b.mimeType) {
      case "multipart/mixed":
      case "multipart/related":
      case "multipart/form-data":
      case "multipart/alternative":
        request2.postData.text = "";
        request2.postData.mimeType = "multipart/form-data";
        if ((_c = request2.postData) === null || _c === void 0 ? void 0 : _c.params) {
          const form = new FormData();
          const boundary = "---011000010111000001101001";
          (_d = request2.postData) === null || _d === void 0 ? void 0 : _d.params.forEach((param) => {
            const name = param.name;
            const value = param.value || "";
            const filename = param.fileName;
            if (isBlob(value)) {
              form.append(name, value, filename);
            } else {
              form.append(name, new Blob2([value], { type: param.contentType }), filename ? basename(filename) : filename);
            }
          });
          const { postData } = request2;
          for await (const data of formDataIterator(form, boundary)) {
            postData.text += data;
          }
          request2.postData.boundary = boundary;
          const contentTypeHeader = getHeaderName(request2.headersObj, "content-type") || "content-type";
          request2.headersObj[contentTypeHeader] = `multipart/form-data; boundary=${boundary}`;
        }
        break;
      case "application/x-www-form-urlencoded":
        if (!request2.postData.params) {
          request2.postData.text = "";
        } else {
          request2.postData.paramsObj = request2.postData.params.reduce(reducer, {});
          request2.postData.text = toSearchParams(request2.postData.paramsObj).toString();
        }
        break;
      case "text/json":
      case "text/x-json":
      case "application/json":
      case "application/x-json":
        request2.postData.mimeType = "application/json";
        if (request2.postData.text) {
          try {
            request2.postData.jsonObj = JSON.parse(request2.postData.text);
          } catch (e14) {
            request2.postData.mimeType = "text/plain";
          }
        }
        break;
    }
    const allHeaders = {
      ...request2.allHeaders,
      ...request2.headersObj
    };
    const url = new URL(request2.url);
    const query = Object.fromEntries(url.searchParams);
    request2.queryObj = {
      ...request2.queryObj,
      ...query
    };
    const search = toSearchParams(request2.queryObj);
    const fullUrl = new URL(request2.url);
    fullUrl.search = search.toString();
    url.search = "";
    return {
      ...request2,
      allHeaders,
      fullUrl: fullUrl.toString(),
      url: url.toString(),
      uriObj: new ExtendedURL(fullUrl.toString())
    };
  }
  async convert(targetId, clientId, options) {
    if (!options && clientId) {
      options = clientId;
    }
    const target = targets[targetId];
    if (!target) {
      return null;
    }
    const { convert } = target.clientsById[clientId || target.info.default];
    const results = (await this.requests).map((request2) => convert(request2, options));
    return results.length === 1 ? results[0] : results;
  }
};

// node_modules/@scalar/api-reference/dist/helpers/provideSymbols.js
var O5 = Symbol();
var o10 = Symbol();

// node_modules/@scalar/api-reference/dist/stores/useHttpClientStore.js
var y5 = {
  targetKey: "shell",
  clientKey: "curl"
};
function p15(e14) {
  var n15;
  return ((n15 = l10.value.find((t12) => t12.key === e14.targetKey)) == null ? void 0 : n15.title) ?? e14.targetKey;
}
function C6(e14) {
  var n15, t12;
  return ((t12 = (n15 = l10.value.find((i24) => i24.key === e14.targetKey)) == null ? void 0 : n15.clients.find((i24) => i24.key === e14.clientKey)) == null ? void 0 : t12.title) ?? e14.clientKey;
}
var b7 = computed(() => p15(r12));
var H2 = computed(() => C6(r12));
function h7(e14, n15) {
  return n15.value === true ? [] : e14.flatMap((t12) => {
    var i24;
    return typeof n15.value != "object" ? [] : Array.isArray(n15.value) ? (t12.clients = t12.clients.filter(
      // @ts-expect-error Typescript, chill. It’s all good. It has to be an array.
      (s19) => !n15.value.includes(s19.key)
    ), [t12]) : n15.value[t12.key] === true ? [] : (Array.isArray(n15.value[t12.key]) && (t12.clients = t12.clients.filter((s19) => !// @ts-expect-error We checked whether it’s an Array already.
    n15.value[t12.key].includes(s19.key))), (i24 = t12 == null ? void 0 : t12.clients) != null && i24.length ? [t12] : []);
  });
}
var l10 = computed(() => {
  var n15;
  const e14 = availableTargets();
  return (n15 = e14.find((t12) => t12.key === "node")) == null || n15.clients.unshift({
    description: "An HTTP/1.1 client, written from scratch for Node.js.",
    key: "undici",
    link: "https://github.com/nodejs/undici",
    title: "undici"
  }), h7(e14, c18);
});
var d11 = {
  node: ["unirest"]
};
var c18 = ref({
  ...d11 === true ? {} : d11
});
var a13 = ref();
function E4(e14) {
  e14 !== void 0 && (a13.value = e14, K5(u7()));
}
var u7 = () => {
  var e14, n15, t12, i24;
  return v8(a13.value) ? a13.value : v8(y5) ? y5 : {
    targetKey: (e14 = l10.value[0]) == null ? void 0 : e14.key,
    clientKey: (i24 = (t12 = (n15 = l10.value[0]) == null ? void 0 : n15.clients) == null ? void 0 : t12[0]) == null ? void 0 : i24.key
  };
};
function v8(e14) {
  return e14 === void 0 ? false : !!l10.value.find(
    (n15) => n15.key === e14.targetKey && n15.clients.find((t12) => t12.key === e14.clientKey)
  );
}
function L4() {
  objectMerge(r12, u7());
}
var r12 = reactive(u7());
var K5 = (e14) => {
  Object.assign(r12, {
    ...r12,
    ...e14
  });
};
var _6 = () => ({
  httpClient: readonly(r12),
  resetState: L4,
  setHttpClient: K5,
  setDefaultHttpClient: E4,
  excludedClients: readonly(c18),
  setExcludedClients: (e14) => {
    c18.value = e14, objectMerge(r12, u7());
  },
  availableTargets: l10,
  getClientTitle: C6,
  getTargetTitle: p15,
  httpTargetTitle: b7,
  httpClientTitle: H2
});

// node_modules/@scalar/api-reference/dist/features/ExampleRequest/ExampleRequest.vue2.js
var ye = { class: "request-header" };
var ge = { class: "code-snippet" };
var he = {
  key: 0,
  class: "request-card-footer-addon"
};
var Ue = defineComponent({
  __name: "ExampleRequest",
  props: {
    customExamples: {},
    operation: {}
  },
  setup(B12) {
    var k10;
    const a23 = B12, K9 = `components-Content-Operation-Example-Request${createHash(
      a23.operation.path + a23.operation.httpVerb + a23.operation.operationId
    )}`, x7 = ref(), {
      httpClient: n15,
      setHttpClient: T8,
      availableTargets: $11,
      httpTargetTitle: w8,
      httpClientTitle: F8
    } = _6(), { server: E8 } = v3(), { authentication: g7 } = i5(), l14 = ref(
      // Default to first custom example
      (k10 = a23.customExamples) != null && k10.length ? {
        targetKey: "customExamples",
        clientKey: 0
      } : (
        // Otherwise use the globally selected HTTP client
        {
          targetKey: n15.targetKey,
          clientKey: n15.clientKey
        }
      )
    );
    watch(n15, () => {
      l14.value = {
        targetKey: n15.targetKey,
        clientKey: n15.clientKey
      };
    });
    const C8 = computed(
      () => {
        var e14, o11, t12, r16;
        return Object.keys(
          ((r16 = (t12 = (o11 = (e14 = a23.operation.information) == null ? void 0 : e14.requestBody) == null ? void 0 : o11.content) == null ? void 0 : t12["application/json"]) == null ? void 0 : r16.examples) ?? {}
        ).length > 1;
      }
    ), i24 = inject(O5);
    async function S12() {
      var r16, m29, u12;
      if (l14.value.targetKey === "customExamples")
        return ((m29 = (r16 = a23.customExamples) == null ? void 0 : r16[l14.value.clientKey]) == null ? void 0 : m29.source) ?? "";
      const e14 = c6(
        {
          url: i4(E8)
        },
        getRequestFromOperation(
          a23.operation,
          {
            replaceVariables: true
          },
          x7.value
        ),
        K(
          g7,
          ((u12 = a23.operation.information) == null ? void 0 : u12.security) ?? (i24 == null ? void 0 : i24())
        )
      ), o11 = n15.clientKey === "undici" || n15.clientKey === "fetch" || n15.clientKey === "ofetch" ? n15.clientKey : null, t12 = n15.targetKey.replace("javascript", "js");
      if (o11 && v7().hasPlugin(t12, o11) && (t12 === "node" || t12 === "js"))
        return v7().print(t12, o11, e14) ?? "";
      try {
        return await new HTTPSnippet(e14).convert(
          n15.targetKey,
          n15.clientKey
        );
      } catch (f18) {
        return console.error("[ExampleRequest]", f18), "";
      }
    }
    const q9 = computedAsync(async () => {
      try {
        return await S12();
      } catch (e14) {
        return console.error("[generateSnippet]", e14), "";
      }
    }, ssrState[K9] ?? "");
    onServerPrefetch(async () => {
      const e14 = useSSRContext();
      e14.payload.data[K9] = await S12();
    }), computed(() => O2({
      serverState: E8,
      authenticationState: g7,
      operation: a23.operation,
      globalSecurity: i24 == null ? void 0 : i24()
    }));
    const A7 = computed(() => {
      var o11, t12, r16;
      const e14 = (
        // Specified language
        ((o11 = l14.value) == null ? void 0 : o11.targetKey) === "customExamples" ? ((r16 = (t12 = a23.customExamples) == null ? void 0 : t12[l14.value.clientKey]) == null ? void 0 : r16.lang) ?? "plaintext" : (
          // Or language for the globally selected HTTP client
          n15.targetKey
        )
      );
      return e14 === "shell" && q9.value.includes("curl") ? "curl" : e14 === "Objective-C" ? "objc" : e14;
    }), J5 = computed(() => {
      var o11;
      const e14 = $11.value.map((t12) => ({
        value: t12.key,
        label: t12.title,
        options: t12.clients.map((r16) => ({
          value: JSON.stringify({
            targetKey: t12.key,
            clientKey: r16.key
          }),
          label: r16.title
        }))
      }));
      return (o11 = a23.customExamples) != null && o11.length && e14.unshift({
        value: "customExamples",
        label: "Examples",
        options: a23.customExamples.map((t12, r16) => ({
          value: JSON.stringify({
            targetKey: "customExamples",
            clientKey: r16
          }),
          label: t12.label ?? t12.lang ?? `Example #${r16 + 1}`
        }))
      }), e14;
    });
    function P11(e14) {
      const o11 = JSON.parse(e14);
      o11.targetKey === "customExamples" ? l14.value = o11 : T8(o11);
    }
    return (e14, o11) => (openBlock(), createBlock(unref(i13), { class: "dark-mode" }, {
      default: withCtx(() => [
        createVNode(unref(f6), { muted: "" }, {
          actions: withCtx(() => [
            createVNode(f10, {
              class: "request-client-picker",
              modelValue: JSON.stringify(l14.value),
              options: J5.value,
              "onUpdate:modelValue": P11
            }, {
              default: withCtx(() => {
                var t12;
                return [
                  l14.value.targetKey === "customExamples" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(((t12 = a23.customExamples) == null ? void 0 : t12[l14.value.clientKey].label) ?? "Example"), 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(unref(w8)) + " " + toDisplayString(unref(F8)), 1)
                  ], 64))
                ];
              }),
              _: 1
            }, 8, ["modelValue", "options"])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", ye, [
              createVNode(unref(S), {
                as: "span",
                class: "request-method",
                method: e14.operation.httpVerb
              }, null, 8, ["method"]),
              renderSlot(e14.$slots, "header", {}, void 0, true)
            ])
          ]),
          _: 3
        }),
        createVNode(unref(d6), {
          borderless: "",
          class: "request-editor-section custom-scroll",
          frameless: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", ge, [
              createVNode(unref(M), {
                class: "bg-b-2",
                content: unref(q9),
                hideCredentials: unref(S2)(unref(g7)),
                lang: A7.value,
                lineNumbers: ""
              }, null, 8, ["content", "hideCredentials", "lang"])
            ])
          ]),
          _: 1
        }),
        C8.value || e14.$slots.footer ? (openBlock(), createBlock(unref(p12), {
          key: 0,
          class: "request-card-footer",
          contrast: ""
        }, {
          default: withCtx(() => {
            var t12, r16, m29, u12;
            return [
              C8.value ? (openBlock(), createElementBlock("div", he, [
                createVNode(p13, {
                  class: "request-example-selector",
                  examples: ((u12 = (m29 = (r16 = (t12 = e14.operation.information) == null ? void 0 : t12.requestBody) == null ? void 0 : r16.content) == null ? void 0 : m29["application/json"]) == null ? void 0 : u12.examples) ?? [],
                  "onUpdate:modelValue": o11[0] || (o11[0] = (f18) => x7.value = f18)
                }, null, 8, ["examples"])
              ])) : createCommentVNode("", true),
              renderSlot(e14.$slots, "footer", {}, void 0, true)
            ];
          }),
          _: 3
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});

// node_modules/@scalar/api-reference/dist/features/ExampleRequest/ExampleRequest.vue.js
var r13 = s4(Ue, [["__scopeId", "data-v-de3f5cc4"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Operation/OperationAccordion.vue2.js
var R5 = { class: "endpoint-header" };
var g4 = { class: "endpoint-details" };
var A5 = { class: "endpoint-label" };
var I5 = { class: "endpoint-label-path" };
var P6 = { class: "endpoint-label-name" };
var V6 = { class: "endpoint-content" };
var H3 = defineComponent({
  __name: "OperationAccordion",
  props: {
    id: {},
    operation: {}
  },
  setup(q9) {
    const { copyToClipboard: d17 } = a9();
    return (o11, s19) => (openBlock(), createBlock(unref(i19), {
      id: o11.id,
      class: "reference-endpoint",
      transparent: ""
    }, createSlots({
      title: withCtx(() => [
        createBaseVNode("h3", R5, [
          createBaseVNode("div", g4, [
            createVNode(unref(S), {
              class: "endpoint-type",
              method: o11.operation.httpVerb,
              short: ""
            }, null, 8, ["method"]),
            createVNode(unref(_), {
              id: o11.id ?? "",
              class: "endpoint-anchor"
            }, {
              default: withCtx(() => {
                var a23;
                return [
                  createBaseVNode("div", A5, [
                    createBaseVNode("div", I5, [
                      createVNode(r8, {
                        deprecated: (a23 = o11.operation.information) == null ? void 0 : a23.deprecated,
                        path: o11.operation.path
                      }, null, 8, ["deprecated", "path"])
                    ]),
                    createBaseVNode("div", P6, toDisplayString(o11.operation.name), 1)
                  ])
                ];
              }),
              _: 1
            }, 8, ["id"])
          ])
        ])
      ]),
      actions: withCtx(({ active: a23 }) => [
        a23 ? (openBlock(), createBlock(a12, {
          key: 0,
          operation: o11.operation
        }, null, 8, ["operation"])) : (openBlock(), createBlock(unref(m2), {
          key: 1,
          class: "endpoint-try-hint",
          icon: "Play",
          thickness: "1.75px"
        })),
        createVNode(unref(D), {
          class: "endpoint-copy",
          icon: "Clipboard",
          label: "Copy endpoint URL",
          size: "xs",
          variant: "ghost",
          onClick: s19[0] || (s19[0] = withModifiers((D11) => unref(d17)(o11.operation.path), ["stop"]))
        })
      ]),
      default: withCtx(() => [
        createBaseVNode("div", V6, [
          createVNode(i18, { operation: o11.operation }, null, 8, ["operation"]),
          createVNode(unref(r10), { operation: o11.operation }, null, 8, ["operation"]),
          createVNode(unref(r13), { operation: o11.operation }, null, 8, ["operation"])
        ])
      ]),
      _: 2
    }, [
      o11.operation.description ? {
        name: "description",
        fn: withCtx(() => [
          createVNode(unref(h), {
            value: o11.operation.description,
            withImages: ""
          }, null, 8, ["value"])
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["id"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/OperationAccordion.vue.js
var a14 = s4(H3, [["__scopeId", "data-v-912f50cc"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Operation/EndpointDetails.vue.js
var v9 = { class: "endpoint-details" };
var w4 = { class: "endpoint-description" };
var I6 = defineComponent({
  __name: "EndpointDetails",
  props: {
    operation: {}
  },
  setup(l14) {
    const m29 = l14, { parameterMap: s19 } = t11(m29), { responses: c24 } = i17(m29.operation);
    return (p20, C8) => {
      var n15, i24;
      return openBlock(), createElementBlock("div", v9, [
        createBaseVNode("div", w4, [
          createVNode(unref(h), {
            value: p20.operation.description,
            withImages: ""
          }, null, 8, ["value"])
        ]),
        createVNode(m16, {
          parameters: unref(s19).path
        }, {
          title: withCtx(() => [
            createTextVNode("Path Parameters")
          ]),
          _: 1
        }, 8, ["parameters"]),
        createVNode(m16, {
          parameters: unref(s19).query
        }, {
          title: withCtx(() => [
            createTextVNode("Query Parameters")
          ]),
          _: 1
        }, 8, ["parameters"]),
        createVNode(m16, {
          parameters: unref(s19).header
        }, {
          title: withCtx(() => [
            createTextVNode("Headers")
          ]),
          _: 1
        }, 8, ["parameters"]),
        createVNode(m16, {
          parameters: unref(s19).body,
          showChildren: ""
        }, {
          title: withCtx(() => [
            createTextVNode("Body Parameters")
          ]),
          _: 1
        }, 8, ["parameters"]),
        createVNode(m16, {
          parameters: unref(s19).formData
        }, {
          title: withCtx(() => [
            createTextVNode("Form Data")
          ]),
          _: 1
        }, 8, ["parameters"]),
        (n15 = p20.operation.information) != null && n15.requestBody ? (openBlock(), createBlock(p11, {
          key: 0,
          requestBody: (i24 = p20.operation.information) == null ? void 0 : i24.requestBody
        }, {
          title: withCtx(() => [
            createTextVNode("Body")
          ]),
          _: 1
        }, 8, ["requestBody"])) : createCommentVNode("", true),
        createVNode(m16, {
          collapsableItems: true,
          parameters: unref(c24)
        }, {
          title: withCtx(() => [
            createTextVNode("Responses")
          ]),
          _: 1
        }, 8, ["parameters"])
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/Operation.vue2.js
var H4 = { class: "examples" };
var Q5 = defineComponent({
  __name: "Operation",
  props: {
    id: {},
    operation: {}
  },
  setup(c24) {
    const m29 = c24, { availableTargets: h10 } = _6(), C8 = computed(() => {
      var n15;
      const e14 = ["x-custom-examples", "x-codeSamples", "x-code-samples"];
      for (const a23 of e14)
        if ((n15 = m29.operation.information) != null && n15[a23])
          return m29.operation.information[a23];
      return null;
    });
    return (e14, n15) => (openBlock(), createBlock(unref(m10), {
      id: e14.id,
      label: e14.operation.name
    }, {
      default: withCtx(() => [
        createVNode(unref(p9), null, {
          default: withCtx(() => [
            createVNode(unref(a10), null, {
              default: withCtx(() => [
                createVNode(unref(f5), null, {
                  default: withCtx(() => {
                    var a23, l14;
                    return [
                      (a23 = e14.operation.information) != null && a23.deprecated ? (openBlock(), createBlock(unref(l9), { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(" Deprecated ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createBaseVNode("div", {
                        class: normalizeClass((l14 = e14.operation.information) != null && l14.deprecated ? "deprecated" : "")
                      }, [
                        createVNode(unref(f3), { level: 3 }, {
                          default: withCtx(() => [
                            createVNode(unref(_), {
                              id: e14.id ?? ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(e14.operation.name), 1)
                              ]),
                              _: 1
                            }, 8, ["id"])
                          ]),
                          _: 1
                        })
                      ], 2),
                      createVNode(I6, { operation: e14.operation }, null, 8, ["operation"])
                    ];
                  }),
                  _: 1
                }),
                createVNode(unref(f5), null, {
                  default: withCtx(() => [
                    createBaseVNode("div", H4, [
                      unref(h10).length ? (openBlock(), createBlock(unref(r13), {
                        key: 0,
                        customExamples: C8.value,
                        operation: e14.operation
                      }, {
                        header: withCtx(() => {
                          var a23;
                          return [
                            createVNode(r8, {
                              class: "example-path",
                              deprecated: (a23 = e14.operation.information) == null ? void 0 : a23.deprecated,
                              path: e14.operation.path
                            }, null, 8, ["deprecated", "path"])
                          ];
                        }),
                        footer: withCtx(() => [
                          createVNode(a12, { operation: e14.operation }, null, 8, ["operation"])
                        ]),
                        _: 1
                      }, 8, ["customExamples", "operation"])) : createCommentVNode("", true),
                      createVNode(unref(r10), {
                        operation: e14.operation,
                        style: { "margin-top": "12px" }
                      }, null, 8, ["operation"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["id", "label"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operation/Operation.vue.js
var a15 = s4(Q5, [["__scopeId", "data-v-d7704f5f"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Lazy/Loading.vue.js
var fe = defineComponent({
  __name: "Loading",
  props: {
    layout: { default: "default" },
    parsedSpec: {}
  },
  setup(L8) {
    const i24 = L8, C8 = ref(false), S12 = ref([]), y9 = ref([]), { getModelId: V8, getSectionId: z9, getTagId: B12, hash: a23, isIntersectionEnabled: I8 } = $2(), _11 = ref(i24.layout !== "accordion" && a23.value);
    watch(
      () => {
        var r16;
        return (r16 = i24.parsedSpec.tags) == null ? void 0 : r16.length;
      },
      (r16) => {
        var e14, u12;
        if (!a23.value || typeof r16 != "number" || !i24.parsedSpec.tags)
          return;
        const l14 = z9();
        if (l14.startsWith("tag")) {
          let t12 = 0;
          const d17 = ((e14 = i24.parsedSpec.tags) == null ? void 0 : e14.findIndex(
            (b14) => B12(b14) === l14
          )) ?? 0, s19 = a23.value.match(/tag\/([^/]+)\/([^/]+)\/(.+)/);
          if ((s19 == null ? void 0 : s19.length) === 4) {
            const b14 = s19[2], O10 = "/" + s19[3];
            t12 = (u12 = i24.parsedSpec.tags[d17]) == null ? void 0 : u12.operations.findIndex(
              ({ httpVerb: W5, path: D11 }) => b14 === W5 && O10 === D11
            );
          }
          const c24 = i24.parsedSpec.tags[d17];
          if (!c24) return;
          c24.name !== "default" && (C8.value = l14 !== a23.value && l14.startsWith("tag")), S12.value.push({
            ...c24,
            lazyOperations: c24.operations.slice(
              t12,
              t12 + 2
            )
          });
        } else if (a23.value.startsWith("model")) {
          const t12 = Object.keys(l6(i24.parsedSpec) ?? {}), [, d17] = a23.value.toLowerCase().split("/"), s19 = a23.value === "models" ? 0 : t12.findIndex((c24) => c24.toLowerCase() === d17);
          if (s19 === -1) return;
          y9.value = t12.slice(s19, s19 + 3);
        } else
          typeof window < "u" && t7(a23.value), setTimeout(() => I8.value = true, 1e3);
      },
      { immediate: true }
    );
    const N6 = e5.on(({ id: r16 }) => {
      const l14 = a23.value;
      !l14 || r16 !== l14 || (N6(), setTimeout(() => {
        typeof window < "u" && t7(l14), _11.value = false, setTimeout(() => I8.value = true, 1e3);
      }, 300));
    });
    return onMounted(() => {
      a23.value || setTimeout(() => I8.value = true, 1e3);
    }), (r16, l14) => withDirectives((openBlock(), createElementBlock("div", {
      class: normalizeClass(["references-loading", {
        "references-loading-hidden-tag": C8.value,
        "references-loading-top-spacer": S12.value.length
      }])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(S12.value, (e14, u12) => (openBlock(), createElementBlock(Fragment, {
        key: e14.name + u12
      }, [
        e14.operations && e14.operations.length > 0 ? (openBlock(), createBlock(unref(p10), {
          key: 0,
          spec: r16.parsedSpec,
          tag: e14
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e14.lazyOperations, (t12) => (openBlock(), createBlock(unref(a15), {
              key: `${t12.httpVerb}-${t12.operationId}`,
              operation: t12,
              tag: e14
            }, null, 8, ["operation", "tag"]))), 128))
          ]),
          _: 2
        }, 1032, ["spec", "tag"])) : createCommentVNode("", true)
      ], 64))), 128)),
      y9.value.length ? (openBlock(), createBlock(unref(l8), { key: 0 }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(y9.value, (e14) => (openBlock(), createBlock(unref(m10), {
            key: e14,
            label: e14
          }, {
            default: withCtx(() => {
              var u12;
              return [
                (u12 = unref(l6)(r16.parsedSpec)) != null && u12[e14] ? (openBlock(), createBlock(unref(p9), { key: 0 }, {
                  default: withCtx(() => {
                    var t12;
                    return [
                      createVNode(unref(f3), { level: 2 }, {
                        default: withCtx(() => [
                          createVNode(unref(_), {
                            id: unref(V8)(e14)
                          }, {
                            default: withCtx(() => {
                              var d17;
                              return [
                                createTextVNode(toDisplayString(((d17 = unref(l6)(r16.parsedSpec)) == null ? void 0 : d17[e14]).title ?? e14), 1)
                              ];
                            }),
                            _: 2
                          }, 1032, ["id"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(c14), {
                        name: e14,
                        noncollapsible: "",
                        value: (t12 = unref(l6)(r16.parsedSpec)) == null ? void 0 : t12[e14]
                      }, null, 8, ["name", "value"])
                    ];
                  }),
                  _: 2
                }, 1024)) : createCommentVNode("", true)
              ];
            }),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ], 2)), [
      [vShow, _11.value]
    ]);
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Introduction/Description.vue2.js
var P7 = {
  key: 0,
  class: "introduction-description"
};
var T5 = defineComponent({
  __name: "Description",
  props: {
    value: {}
  },
  setup(h10) {
    const i24 = h10, f18 = computed(() => {
      if (!i24.value)
        return [];
      const e14 = new BananaSlug();
      return splitContent(i24.value).map((t12) => {
        const [r16] = getHeadings(t12);
        return {
          id: r16 ? l14({
            ...r16,
            slug: e14.slug(r16.value)
          }) : void 0,
          content: t12
        };
      });
    }), { getHeadingId: l14, hash: g7, isIntersectionEnabled: v11, pathRouting: s19 } = $2();
    function w8(e14 = "") {
      if (!v11.value) return;
      const n15 = new URL(window.location.href);
      s19.value ? n15.pathname = c4(s19.value.basePath, e14) : n15.hash = e14, g7.value = e14, window.history.replaceState({}, "", n15);
    }
    const _11 = new BananaSlug(), k10 = (e14) => (e14.data = {
      hProperties: {
        id: l14({
          depth: e14.depth,
          value: e14.children[0].value,
          slug: _11.slug(e14.children[0].value)
        })
      }
    }, e14);
    return (e14, n15) => e14.value ? (openBlock(), createElementBlock("div", P7, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(f18.value, (t12, r16) => (openBlock(), createElementBlock(Fragment, { key: r16 }, [
        t12.id ? (openBlock(), createBlock(x2, {
          key: 0,
          id: t12.id,
          class: "introduction-description-heading",
          onIntersecting: () => w8(t12.id)
        }, {
          default: withCtx(() => [
            createVNode(unref(h), {
              transform: k10,
              transformType: "heading",
              value: t12.content
            }, null, 8, ["value"])
          ]),
          _: 2
        }, 1032, ["id", "onIntersecting"])) : (openBlock(), createBlock(unref(h), {
          key: 1,
          value: t12.content,
          withImages: ""
        }, null, 8, ["value"]))
      ], 64))), 128))
    ])) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Introduction/Description.vue.js
var c19 = s4(T5, [["__scopeId", "data-v-15c890da"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Introduction/DownloadSpec.vue2.js
var u8 = { class: "download" };
var w5 = { class: "download-cta" };
var S10 = defineComponent({
  __name: "DownloadSpec",
  props: {
    specTitle: {}
  },
  setup(n15) {
    const c24 = n15, d17 = inject(o10), l14 = () => {
      u2.emit({ id: "", specTitle: c24.specTitle });
    };
    return (f18, D11) => {
      var o11;
      return openBlock(), createElementBlock("div", u8, [
        createBaseVNode("div", w5, [
          (o11 = unref(d17)) != null && o11() ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
            key: 0,
            class: "download-button",
            type: "button",
            onClick: l14
          }, " Download OpenAPI Spec "))
        ])
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Introduction/DownloadSpec.vue.js
var m18 = s4(S10, [["__scopeId", "data-v-810904a4"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Introduction/Introduction.vue2.js
var D7 = { class: "badges" };
var $7 = { class: "sticky-cards" };
var K6 = defineComponent({
  __name: "Introduction",
  props: {
    info: {},
    parsedSpec: {}
  },
  setup(S12) {
    const l14 = S12, v11 = new BananaSlug(), u12 = computed(() => l14.parsedSpec.openapi ?? l14.parsedSpec.swagger ?? ""), _11 = computed(() => v11.slug(l14.info.title ?? ""));
    return (e14, b14) => (openBlock(), createBlock(unref(l8), null, {
      default: withCtx(() => [
        createVNode(unref(m10), { class: "introduction-section" }, {
          default: withCtx(() => [
            createVNode(unref(p9), {
              loading: !e14.info.description && !e14.info.title
            }, {
              default: withCtx(() => [
                createVNode(unref(a10), null, {
                  default: withCtx(() => [
                    createVNode(unref(f5), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", D7, [
                          e14.info.version ? (openBlock(), createBlock(unref(l9), { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(e14.info.version), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          u12.value ? (openBlock(), createBlock(unref(l9), { key: 1 }, {
                            default: withCtx(() => [
                              createTextVNode(" OAS " + toDisplayString(u12.value), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode(unref(f3), {
                          level: 1,
                          loading: !e14.info.title,
                          tight: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(e14.info.title), 1)
                          ]),
                          _: 1
                        }, 8, ["loading"]),
                        createVNode(m18, { specTitle: _11.value }, null, 8, ["specTitle"]),
                        createVNode(c19, {
                          value: e14.info.description
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    e14.$slots.aside ? (openBlock(), createBlock(unref(f5), { key: 0 }, {
                      default: withCtx(() => [
                        createBaseVNode("div", $7, [
                          renderSlot(e14.$slots, "aside", {}, void 0, true)
                        ])
                      ]),
                      _: 3
                    })) : createCommentVNode("", true)
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["loading"]),
            renderSlot(e14.$slots, "after", {}, void 0, true)
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Introduction/Introduction.vue.js
var _7 = s4(K6, [["__scopeId", "data-v-0362b02e"]]);

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerUrl.vue2.js
var f11 = ["title", "innerHTML"];
var k8 = defineComponent({
  __name: "ServerUrl",
  props: {
    server: {},
    variables: {}
  },
  setup(a23) {
    const r16 = a23, c24 = computed(() => {
      var s19;
      const t12 = (((s19 = r16.server) == null ? void 0 : s19.url) ?? "").replace(/(<([^>]+)>)/gi, "");
      return replaceVariables(t12, (n15) => {
        var o11;
        const l14 = ((o11 = r16.variables) == null ? void 0 : o11[n15]) ?? "";
        return `<span class="base-url-variable">${l14 !== "" ? l14 : `{${n15}}`}</span>`;
      });
    });
    return (e14, t12) => e14.server ? (openBlock(), createElementBlock("a", {
      key: 0,
      class: "base-url",
      title: e14.server.description,
      innerHTML: c24.value
    }, null, 8, f11)) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerUrl.vue.js
var c20 = s4(k8, [["__scopeId", "data-v-41e1c30c"]]);

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerUrlSelect.vue2.js
var B9 = { class: "w-full" };
var w6 = { class: "custom-scroll" };
var b8 = defineComponent({
  __name: "ServerUrlSelect",
  props: {
    options: {},
    value: {}
  },
  emits: ["change"],
  setup(u12, { emit: d17 }) {
    const n15 = u12, m29 = d17, o11 = computed(
      () => n15.options.map((e14, t12) => ({
        id: t12.toString(),
        label: e14.url ?? ""
      }))
    ), s19 = computed({
      get: () => {
        var e14;
        return (e14 = o11.value) == null ? void 0 : e14.find((t12) => t12.id === n15.value.toString());
      },
      set: (e14) => m29("change", (e14 == null ? void 0 : e14.id) ?? "")
    });
    return (e14, t12) => (openBlock(), createElementBlock("div", B9, [
      createVNode(unref(F), {
        modelValue: s19.value,
        "onUpdate:modelValue": t12[0] || (t12[0] = (p20) => s19.value = p20),
        options: o11.value,
        resize: ""
      }, {
        default: withCtx(() => [
          createVNode(unref(W), {
            class: normalizeClass(["url-select", { "pointer-events-none": o11.value.length <= 1 }]),
            fullWidth: "",
            variant: "ghost"
          }, {
            default: withCtx(() => [
              createBaseVNode("span", w6, [
                renderSlot(e14.$slots, "default", {}, void 0, true)
              ]),
              o11.value.length > 1 ? (openBlock(), createBlock(unref(m2), {
                key: 0,
                icon: "ChevronDown",
                size: "xs"
              })) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["class"])
        ]),
        _: 3
      }, 8, ["modelValue", "options"])
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerUrlSelect.vue.js
var m19 = s4(b8, [["__scopeId", "data-v-a3e94a85"]]);

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerVariablesSelect.vue2.js
var b9 = { class: "w-full" };
var B10 = defineComponent({
  __name: "ServerVariablesSelect",
  props: {
    enum: {},
    value: {}
  },
  emits: ["change"],
  setup(u12, { emit: c24 }) {
    const l14 = u12, d17 = c24, o11 = computed(
      () => l14.enum.map((e14) => ({ id: e14, label: e14 }))
    ), n15 = computed({
      get: () => o11.value.find((e14) => e14.id === l14.value),
      set: (e14) => d17("change", (e14 == null ? void 0 : e14.id) ?? "")
    });
    return (e14, s19) => (openBlock(), createElementBlock("div", b9, [
      createVNode(unref(F), {
        modelValue: n15.value,
        "onUpdate:modelValue": s19[0] || (s19[0] = (m29) => n15.value = m29),
        options: o11.value
      }, {
        default: withCtx(() => [
          createVNode(unref(W), {
            class: "variable-select",
            fullWidth: "",
            variant: "ghost"
          }, {
            default: withCtx(() => [
              createBaseVNode("span", null, toDisplayString(e14.value), 1),
              createVNode(unref(m2), {
                icon: "ChevronDown",
                size: "xs"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "options"])
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerVariablesSelect.vue.js
var m20 = s4(B10, [["__scopeId", "data-v-4b092d90"]]);

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerVariablesTextbox.vue2.js
var x5 = defineComponent({
  __name: "ServerVariablesTextbox",
  props: {
    value: {}
  },
  emits: ["change"],
  setup(l14, { emit: a23 }) {
    const n15 = l14, s19 = a23, e14 = computed({
      get: () => n15.value,
      set: (t12) => s19("change", t12)
    });
    return (t12, o11) => withDirectives((openBlock(), createElementBlock("input", {
      "onUpdate:modelValue": o11[0] || (o11[0] = (c24) => e14.value = c24),
      autocomplete: "off",
      class: "variable-textbox",
      placeholder: "value",
      spellcheck: "false",
      type: "text"
    }, null, 512)), [
      [vModelText, e14.value]
    ]);
  }
});

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerVariablesTextbox.vue.js
var c21 = s4(x5, [["__scopeId", "data-v-fbcac0a4"]]);

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerVariablesForm.vue2.js
var B11 = {
  key: 0,
  class: "variable-container"
};
var j4 = ["for"];
var O6 = defineComponent({
  __name: "ServerVariablesForm",
  props: {
    variables: {},
    values: {}
  },
  emits: ["update:variable"],
  setup(d17, { emit: f18 }) {
    const i24 = d17, g7 = f18;
    function n15(a23, r16) {
      g7("update:variable", a23, r16);
    }
    const s19 = (a23) => {
      var r16, e14;
      return (((r16 = i24.values) == null ? void 0 : r16[a23]) ?? ((e14 = i24.variables) == null ? void 0 : e14[a23].default) ?? "").toString();
    };
    return (a23, r16) => a23.variables && Object.keys(a23.variables ?? {}).length ? (openBlock(), createElementBlock("div", B11, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(a23.variables), (e14) => {
        var u12, v11, b14, c24;
        return openBlock(), createElementBlock("div", {
          key: e14,
          class: "variable-container-item"
        }, [
          createBaseVNode("label", {
            class: "variable-label",
            for: `variable-${e14}`
          }, [
            createBaseVNode("code", null, toDisplayString(e14), 1)
          ], 8, j4),
          (v11 = (u12 = a23.variables) == null ? void 0 : u12[e14].enum) != null && v11.length ? (openBlock(), createBlock(m20, {
            key: 0,
            enum: ((c24 = (b14 = a23.variables[e14]) == null ? void 0 : b14.enum) == null ? void 0 : c24.map((l14) => `${l14}`)) ?? [],
            value: s19(e14),
            onChange: (l14) => n15(e14, l14)
          }, null, 8, ["enum", "value", "onChange"])) : (openBlock(), createBlock(c21, {
            key: 1,
            value: s19(e14),
            onChange: (l14) => n15(e14, l14)
          }, null, 8, ["value", "onChange"]))
        ]);
      }), 128))
    ])) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerVariablesForm.vue.js
var m21 = s4(O6, [["__scopeId", "data-v-d5675216"]]);

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerForm.vue2.js
var y6 = (r16) => (pushScopeId("data-v-da7210d5"), r16 = r16(), popScopeId(), r16);
var E5 = { key: 0 };
var F5 = y6(() => createBaseVNode("span", { class: "server-form-title" }, "Base URL", -1));
var L5 = { class: "server-form" };
var M6 = { class: "server-form-container" };
var $8 = { class: "server-item" };
var j5 = {
  key: 0,
  muted: ""
};
var q5 = { class: "description" };
var H5 = defineComponent({
  __name: "ServerForm",
  props: {
    selected: { default: 0 },
    servers: {},
    variables: {}
  },
  emits: ["update:selected", "update:variable"],
  setup(r16, { emit: m29 }) {
    const i24 = r16, f18 = m29, l14 = toRef(Number(i24.selected)), _11 = (e14) => {
      const s19 = parseInt(e14, 10);
      f18("update:selected", s19), l14.value = s19;
    }, a23 = computed(() => {
      var e14;
      return (e14 = i24.servers) == null ? void 0 : e14[l14.value];
    });
    return (e14, s19) => {
      var d17, v11, n15;
      return (d17 = e14.servers) != null && d17.length ? (openBlock(), createElementBlock("div", E5, [
        F5,
        createBaseVNode("div", L5, [
          createBaseVNode("div", M6, [
            createBaseVNode("div", $8, [
              createVNode(m19, {
                options: e14.servers,
                value: l14.value,
                onChange: _11
              }, {
                default: withCtx(() => [
                  createVNode(c20, {
                    server: a23.value,
                    variables: e14.variables
                  }, null, 8, ["server", "variables"])
                ]),
                _: 1
              }, 8, ["options", "value"])
            ]),
            createVNode(m21, {
              values: e14.variables,
              variables: (v11 = a23.value) == null ? void 0 : v11.variables,
              "onUpdate:variable": s19[0] || (s19[0] = (b14, h10) => e14.$emit("update:variable", b14, h10))
            }, null, 8, ["values", "variables"])
          ])
        ]),
        (n15 = a23.value) != null && n15.description ? (openBlock(), createElementBlock("div", j5, [
          createBaseVNode("div", q5, [
            createVNode(unref(h), {
              value: a23.value.description
            }, null, 8, ["value"])
          ])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/BaseUrl/ServerForm.vue.js
var e11 = s4(H5, [["__scopeId", "data-v-da7210d5"]]);

// node_modules/@scalar/api-reference/dist/features/BaseUrl/utils/getServers.js
function S11(r16, l14) {
  var a23;
  let e14 = [];
  return r16 != null && r16.servers && (r16 == null ? void 0 : r16.servers.length) > 0 ? e14 = r16.servers : r16 != null && r16.host ? e14 = [
    {
      url: `${((a23 = r16.schemes) == null ? void 0 : a23[0]) ?? "http"}://${r16.host}${(r16 == null ? void 0 : r16.basePath) ?? ""}`
    }
  ] : e14 = [
    {
      url: l14 != null && l14.defaultServerUrl ? l14 == null ? void 0 : l14.defaultServerUrl : typeof window < "u" ? window.location.origin : "/"
    }
  ], (l14 != null && l14.defaultServerUrl || typeof window < "u") && (e14 = e14.map((d17) => b10(d17, l14))), e14.map((d17) => {
    const h10 = d17.variables ?? {};
    return findVariables(d17.url ?? "").filter((u12) => !h10[u12]).forEach((u12) => {
      d17.variables === void 0 && (d17.variables = {}), d17.variables[u12] = {
        default: ""
      };
    }), d17;
  });
}
function b10(r16, l14) {
  var e14;
  return (e14 = r16.url) != null && e14.match(/^(?!(https?|file):\/\/|{).+/) && (r16.url = concatenateUrlAndPath(
    l14 != null && l14.defaultServerUrl ? l14 == null ? void 0 : l14.defaultServerUrl : typeof window < "u" ? window.location.origin : "",
    r16.url
  )), r16;
}

// node_modules/@scalar/api-reference/dist/features/BaseUrl/BaseUrl.vue.js
var w7 = defineComponent({
  __name: "BaseUrl",
  props: {
    specification: {},
    defaultServerUrl: {},
    servers: {}
  },
  setup(f18) {
    const a23 = f18, { server: i24, setServer: o11 } = v3(), s19 = ref(0);
    watch(
      s19,
      () => o11({
        selectedServer: s19.value
      }),
      {
        immediate: true
      }
    ), watch(
      () => a23.specification,
      () => {
        var r16;
        const t12 = (
          // Use the specification
          a23.servers === void 0 ? a23.specification : (
            // Or create an empty one with the specified servers list
            i3({
              servers: a23.servers
            })
          )
        ), e14 = S11(t12, {
          defaultServerUrl: a23.defaultServerUrl
        });
        o11({
          servers: e14,
          variables: {
            // Set the initial values for the variables
            ...m29(
              ((r16 = e14[s19.value]) == null ? void 0 : r16.variables) ?? {}
            ),
            // Don’t overwrite existing values, but filter out non-existing variables
            ...p20(
              i24.variables,
              e14[s19.value]
            )
          }
        });
      },
      { deep: true, immediate: true }
    );
    function m29(t12) {
      return Object.fromEntries(
        Object.entries(t12 ?? {}).map(([e14, r16]) => {
          var n15, l14, v11;
          return [
            e14,
            // 1) Default
            ((n15 = r16.default) == null ? void 0 : n15.toString()) ?? // 2) First enum value
            ((v11 = (l14 = r16.enum) == null ? void 0 : l14[0]) == null ? void 0 : v11.toString()) ?? // 3) Empty string
            ""
          ];
        })
      );
    }
    function p20(t12, e14) {
      return Object.fromEntries(
        Object.entries(t12).filter(
          ([r16]) => r16 in (e14.variables ?? {})
        )
      );
    }
    function d17(t12, e14) {
      o11({
        variables: {
          ...i24.variables,
          [t12]: e14
        }
      });
    }
    return (t12, e14) => (openBlock(), createBlock(e11, {
      selected: s19.value,
      servers: unref(i24).servers,
      variables: unref(i24).variables,
      "onUpdate:selected": e14[0] || (e14[0] = (r16) => {
        s19.value = r16;
      }),
      "onUpdate:variable": d17
    }, null, 8, ["selected", "servers", "variables"]));
  }
});

// node_modules/@scalar/api-reference/dist/legacy/components/CardForm.vue.js
var n10 = {};
var d12 = { class: "card-form" };
function s16(e14, f18) {
  return openBlock(), createElementBlock("form", d12, [
    renderSlot(e14.$slots, "default", {}, void 0, true)
  ]);
}
var l11 = s4(n10, [["render", s16], ["__scopeId", "data-v-20e78fcd"]]);

// node_modules/@scalar/api-reference/dist/legacy/components/CardFormButton.vue2.js
var p16 = defineComponent({
  __name: "CardFormButton",
  setup(l14, { expose: t12 }) {
    const e14 = ref();
    return t12({ el: e14 }), (o11, u12) => (openBlock(), createElementBlock("button", {
      ref_key: "el",
      ref: e14,
      class: "card-form-button",
      type: "button"
    }, [
      renderSlot(o11.$slots, "default", {}, void 0, true)
    ], 512));
  }
});

// node_modules/@scalar/api-reference/dist/legacy/components/CardFormButton.vue.js
var p17 = s4(p16, [["__scopeId", "data-v-502d153b"]]);

// node_modules/@scalar/api-reference/dist/legacy/components/CardFormGroup.vue.js
var n11 = {};
var d13 = { class: "card-form-group" };
function s17(r16, a23) {
  return openBlock(), createElementBlock("div", d13, [
    renderSlot(r16.$slots, "default", {}, void 0, true)
  ]);
}
var p18 = s4(n11, [["render", s17], ["__scopeId", "data-v-88abf5f7"]]);

// node_modules/@scalar/api-reference/dist/legacy/components/CardFormRows.vue.js
var s18 = {};
var n12 = { class: "card-form-rows" };
function d14(e14, a23) {
  return openBlock(), createElementBlock("div", n12, [
    renderSlot(e14.$slots, "default", {}, void 0, true)
  ]);
}
var i22 = s4(s18, [["render", d14], ["__scopeId", "data-v-1611fc76"]]);

// node_modules/@scalar/api-reference/dist/legacy/components/CardFormTextInput.vue2.js
var y7 = { class: "card-form-input" };
var h8 = ["for"];
var _8 = ["id", "type"];
var b11 = defineComponent({
  inheritAttrs: false,
  __name: "CardFormTextInput",
  props: {
    id: {},
    type: {}
  },
  setup(l14) {
    const o11 = l14, e14 = ref(true), n15 = computed(
      () => o11.type === "password" ? e14.value ? "password" : "text" : o11.type ?? "text"
    );
    return (t12, r16) => (openBlock(), createElementBlock("div", y7, [
      createBaseVNode("label", { for: t12.id }, [
        renderSlot(t12.$slots, "default", {}, void 0, true)
      ], 8, h8),
      createBaseVNode("input", mergeProps(t12.$attrs, {
        id: t12.id,
        autocomplete: "off",
        "data-1p-ignore": "",
        spellcheck: "false",
        type: n15.value
      }), null, 16, _8),
      t12.type === "password" ? (openBlock(), createBlock(unref(D), {
        key: 0,
        class: "password-mask",
        icon: e14.value ? "Show" : "Hide",
        label: e14.value ? "Show Password" : "Hide Password",
        onClick: r16[0] || (r16[0] = (B12) => e14.value = !e14.value)
      }, null, 8, ["icon", "label"])) : createCommentVNode("", true)
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/legacy/components/CardFormTextInput.vue.js
var a16 = s4(b11, [["__scopeId", "data-v-8e6b4182"]]);

// node_modules/@scalar/api-reference/dist/legacy/components/SecuritySchemeScopes.vue2.js
var K7 = (o11) => (pushScopeId("data-v-6d6455a4"), o11 = o11(), popScopeId(), o11);
var P8 = { class: "scopes-label" };
var Q6 = K7(() => createBaseVNode("em", null, "/", -1));
var R6 = ["checked"];
var W3 = { class: "dropdown-item-title" };
var X3 = { class: "dropdown-item-description" };
var oe2 = defineComponent({
  __name: "SecuritySchemeScopes",
  props: {
    scopes: {},
    selected: {}
  },
  emits: ["update:selected"],
  setup(o11, { emit: w8 }) {
    const g7 = o11, b14 = w8, m29 = ref(), u12 = ref(), { floatingStyles: v11 } = useFloating(m29, u12, {
      placement: "bottom-end",
      whileElementsMounted: autoUpdate,
      middleware: [offset(5), flip(), shift()]
    }), c24 = computed({
      get: () => g7.selected,
      set: (s19) => b14("update:selected", s19)
    });
    return (s19, f18) => Object.keys(s19.scopes ?? {}).length ? (openBlock(), createBlock(unref(Ie), {
      key: 0,
      modelValue: c24.value,
      "onUpdate:modelValue": f18[0] || (f18[0] = (l14) => c24.value = l14),
      multiple: ""
    }, {
      default: withCtx(({ open: l14 }) => [
        createBaseVNode("div", {
          ref_key: "trigger",
          ref: m29,
          class: normalizeClass(["wrapper", { "wrapper-open": l14 }])
        }, [
          createVNode(unref(je), { as: p17 }, {
            default: withCtx(() => [
              createBaseVNode("div", P8, [
                createTextVNode(" Scopes " + toDisplayString(c24.value.length), 1),
                Q6,
                createTextVNode(toDisplayString(Object.entries(s19.scopes ?? {}).length) + " ", 1),
                createVNode(unref(m2), {
                  icon: l14 ? "ChevronUp" : "ChevronDown",
                  size: "sm"
                }, null, 8, ["icon"])
              ])
            ]),
            _: 2
          }, 1024)
        ], 2),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createBaseVNode("div", {
            ref_key: "dropdown",
            ref: u12,
            class: "floating scalar-app",
            style: normalizeStyle(unref(v11))
          }, [
            createVNode(unref(Ae), {
              as: "dl",
              class: "dropdown"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Object.entries(s19.scopes ?? {}), ([a23, S12]) => (openBlock(), createBlock(unref(Fe), {
                  key: a23,
                  as: "div",
                  class: "dropdown-item",
                  value: a23
                }, {
                  default: withCtx(({ selected: k10 }) => [
                    createBaseVNode("input", {
                      checked: k10,
                      class: "dropdown-item-check",
                      tabindex: "-1",
                      type: "checkbox"
                    }, null, 8, R6),
                    createBaseVNode("dt", W3, toDisplayString(a23), 1),
                    createBaseVNode("dd", X3, toDisplayString(S12), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128))
              ]),
              _: 1
            })
          ], 4)
        ]))
      ]),
      _: 1
    }, 8, ["modelValue"])) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-reference/dist/legacy/components/SecuritySchemeScopes.vue.js
var m22 = s4(oe2, [["__scopeId", "data-v-6d6455a4"]]);

// node_modules/@scalar/api-reference/dist/legacy/components/SecurityScheme.vue2.js
var fe2 = defineComponent({
  __name: "SecurityScheme",
  props: {
    value: {},
    proxy: {}
  },
  setup(se) {
    const { toast: R8 } = i2(), { server: L8 } = v3(), { authentication: t12, setAuthentication: p20 } = i5(), N6 = (e14) => {
      p20({
        apiKey: {
          ...t12.apiKey,
          token: e14.target.value
        }
      });
    }, V8 = (e14) => {
      p20({
        http: {
          ...t12.http,
          basic: {
            ...t12.http.basic,
            username: e14.target.value
          }
        }
      });
    }, D11 = (e14) => {
      p20({
        http: {
          ...t12.http,
          basic: {
            ...t12.http.basic,
            password: e14.target.value
          }
        }
      });
    }, E8 = (e14) => {
      p20({
        http: {
          ...t12.http,
          bearer: {
            ...t12.http.bearer,
            token: e14.target.value
          }
        }
      });
    }, S12 = (e14) => {
      p20({
        oAuth2: {
          ...t12.oAuth2,
          clientId: e14.target.value
        }
      });
    }, H10 = (e14) => {
      p20({
        oAuth2: {
          ...t12.oAuth2,
          username: e14.target.value
        }
      });
    }, G5 = (e14) => {
      p20({
        oAuth2: {
          ...t12.oAuth2,
          password: e14.target.value
        }
      });
    };
    function M11(e14) {
      const a23 = t12.oAuth2.scopes.join(" "), l14 = (Math.random() + 1).toString(36).substring(7), o11 = new URL(e14.authorizationUrl);
      return p20({
        oAuth2: { ...t12.oAuth2, state: l14 }
      }), o11.searchParams.set("response_type", "token"), o11.searchParams.set("client_id", t12.oAuth2.clientId), o11.searchParams.set("redirect_uri", window.location.href), o11.searchParams.set("scope", a23), o11.searchParams.set("state", l14), o11.toString();
    }
    function $11(e14, a23) {
      if (typeof e14 != "string") {
        console.log("tokenUrl is not a string");
        return;
      }
      const l14 = a23 != null && a23.baseUrl && !e14.startsWith("http") ? concatenateUrlAndPath(a23 == null ? void 0 : a23.baseUrl, e14) : e14, o11 = new URL(l14);
      o11.searchParams.set("grant_type", "password"), o11.searchParams.set("username", t12.oAuth2.username), o11.searchParams.set("password", t12.oAuth2.password), o11.searchParams.set("client_id", t12.oAuth2.clientId), o11.searchParams.set("scope", t12.oAuth2.scopes.join(" ")), fetch(
        a23 != null && a23.proxy ? redirectToProxy(a23 == null ? void 0 : a23.proxy, o11.toString()) : o11.toString(),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      ).then((r16) => {
        if (!r16.ok)
          throw new Error(
            "Failed to get an access token. Please check your credentials."
          );
        return r16.json();
      }).then((r16) => {
        p20({
          oAuth2: { ...t12.oAuth2, accessToken: r16.access_token }
        });
      }).catch((r16) => {
        R8("Couldn’t retrieve the password grant token", "warn", {
          description: "Open your browser console to get more information."
        }), console.error("[authorizeWithPassword]", r16);
      });
    }
    const I8 = computed({
      get: () => t12.oAuth2.scopes,
      set: (e14) => p20({ oAuth2: { ...t12.oAuth2, scopes: e14 } })
    }), q9 = (e14) => {
      const l14 = window.open(e14, "openAuth2Window", "left=100,top=100,width=800,height=600");
      if (l14) {
        const o11 = setInterval(function() {
          var r16;
          try {
            const h10 = new URLSearchParams(l14.location.href).get("access_token");
            if (l14.closed || h10) {
              clearInterval(o11);
              const m29 = (r16 = l14.location.href.match(/state=([^&]*)/)) == null ? void 0 : r16[1];
              h10 && t12.oAuth2.state === m29 && p20({
                oAuth2: { ...t12.oAuth2, accessToken: h10 }
              }), l14.close();
            }
          } catch {
          }
        }, 200);
      }
    };
    return (e14, a23) => {
      var l14;
      return e14.value && ((l14 = e14.value) != null && l14.type) ? (openBlock(), createBlock(l11, { key: 0 }, {
        default: withCtx(() => [
          e14.value.type === "apiKey" ? (openBlock(), createBlock(a16, {
            key: 0,
            id: `security-scheme-${e14.value.name}`,
            placeholder: "Token",
            type: "password",
            value: unref(t12).apiKey.token,
            onInput: N6
          }, {
            default: withCtx(() => {
              var o11, r16, d17;
              return [
                e14.value.in ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(((r16 = (o11 = e14.value.in) == null ? void 0 : o11.charAt(0)) == null ? void 0 : r16.toUpperCase()) + ((d17 = e14.value.in) == null ? void 0 : d17.slice(1))), 1)
                ], 64)) : createCommentVNode("", true),
                createTextVNode(" API ")
              ];
            }),
            _: 1
          }, 8, ["id", "value"])) : e14.value.type === "http" || e14.value.type === "basic" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            e14.value.type === "basic" || e14.value.scheme === "basic" ? (openBlock(), createBlock(p18, { key: 0 }, {
              default: withCtx(() => [
                createVNode(a16, {
                  id: "http.basic.username",
                  placeholder: "Username",
                  value: unref(t12).http.basic.username,
                  onInput: V8
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Username ")
                  ]),
                  _: 1
                }, 8, ["value"]),
                createVNode(a16, {
                  id: "http.basic.password",
                  placeholder: "Password",
                  type: "password",
                  value: unref(t12).http.basic.password,
                  onInput: D11
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Password ")
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })) : e14.value.type === "http" && e14.value.scheme === "bearer" ? (openBlock(), createBlock(a16, {
              key: 1,
              id: "http.bearer.token",
              placeholder: "Token",
              type: "password",
              value: unref(t12).http.bearer.token,
              onInput: E8
            }, {
              default: withCtx(() => [
                createTextVNode(" Bearer Token ")
              ]),
              _: 1
            }, 8, ["value"])) : createCommentVNode("", true)
          ], 64)) : e14.value.type.toLowerCase() === "oauth2" && e14.value.flows ? (openBlock(), createBlock(p18, { key: 2 }, {
            default: withCtx(() => {
              var o11, r16;
              return [
                e14.value.flows.implicit ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  unref(t12).oAuth2.accessToken ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createVNode(a16, {
                      id: "oAuth2.accessToken",
                      placeholder: "xxxxx",
                      type: "password",
                      value: unref(t12).oAuth2.accessToken
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Access Token ")
                      ]),
                      _: 1
                    }, 8, ["value"]),
                    createVNode(p17, {
                      onClick: a23[0] || (a23[0] = () => unref(p20)({
                        oAuth2: {
                          ...unref(t12).oAuth2,
                          accessToken: "",
                          state: ""
                        }
                      }))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Reset ")
                      ]),
                      _: 1
                    })
                  ], 64)) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true),
                (r16 = (o11 = e14.value) == null ? void 0 : o11.flows) != null && r16.password ? (openBlock(), createBlock(i22, { key: 1 }, {
                  default: withCtx(() => [
                    createVNode(p18, null, {
                      default: withCtx(() => [
                        createVNode(a16, {
                          id: "oAuth2.username",
                          placeholder: "Username",
                          value: unref(t12).oAuth2.username,
                          onInput: H10
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Username ")
                          ]),
                          _: 1
                        }, 8, ["value"]),
                        createVNode(a16, {
                          id: "oAuth2.password",
                          placeholder: "Password",
                          type: "password",
                          value: unref(t12).oAuth2.password,
                          onInput: G5
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Password ")
                          ]),
                          _: 1
                        }, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(p18, null, {
                      default: withCtx(() => {
                        var d17, h10, m29, A7, y9, k10, T8, U5, F8, B12, O10;
                        return [
                          createVNode(a16, {
                            id: "oAuth2.clientId",
                            placeholder: "12345",
                            type: "text",
                            value: unref(t12).oAuth2.clientId,
                            onInput: S12
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Client ID ")
                            ]),
                            _: 1
                          }, 8, ["value"]),
                          e14.value !== void 0 && Object.entries(
                            ((m29 = (h10 = (d17 = e14.value) == null ? void 0 : d17.flows) == null ? void 0 : h10.implicit) == null ? void 0 : m29.scopes) ?? ((k10 = (y9 = (A7 = e14.value) == null ? void 0 : A7.flows) == null ? void 0 : y9.password) == null ? void 0 : k10.scopes) ?? {}
                          ).length > 0 ? (openBlock(), createBlock(m22, {
                            key: 0,
                            selected: I8.value,
                            "onUpdate:selected": a23[1] || (a23[1] = (g7) => I8.value = g7),
                            scopes: ((F8 = (U5 = (T8 = e14.value) == null ? void 0 : T8.flows) == null ? void 0 : U5.implicit) == null ? void 0 : F8.scopes) ?? ((O10 = (B12 = e14.value) == null ? void 0 : B12.flows) == null ? void 0 : O10.password.scopes)
                          }, null, 8, ["selected", "scopes"])) : createCommentVNode("", true),
                          createBaseVNode("button", {
                            class: "cardform-auth-button",
                            type: "button",
                            onClick: a23[2] || (a23[2] = () => {
                              var g7, z9;
                              return $11(
                                (z9 = (g7 = e14.value.flows) == null ? void 0 : g7.password) == null ? void 0 : z9.tokenUrl,
                                {
                                  baseUrl: unref(i4)(unref(L8)),
                                  proxy: e14.proxy
                                }
                              );
                            })
                          }, " Authorize ")
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(i22, { key: 2 }, {
                  default: withCtx(() => [
                    createVNode(p18, null, {
                      default: withCtx(() => {
                        var d17, h10;
                        return [
                          createVNode(a16, {
                            id: "oAuth2.clientId",
                            placeholder: "12345",
                            type: "text",
                            value: unref(t12).oAuth2.clientId,
                            onInput: S12
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Client ID ")
                            ]),
                            _: 1
                          }, 8, ["value"]),
                          e14.value !== void 0 && Object.entries(
                            ((d17 = e14.value.flows.implicit) == null ? void 0 : d17.scopes) ?? e14.value.flows.password.scopes
                          ).length > 0 ? (openBlock(), createBlock(m22, {
                            key: 0,
                            selected: I8.value,
                            "onUpdate:selected": a23[3] || (a23[3] = (m29) => I8.value = m29),
                            scopes: ((h10 = e14.value.flows.implicit) == null ? void 0 : h10.scopes) ?? e14.value.flows.password.scopes
                          }, null, 8, ["selected", "scopes"])) : createCommentVNode("", true),
                          createBaseVNode("button", {
                            class: "cardform-auth-button",
                            type: "button",
                            onClick: a23[4] || (a23[4] = () => {
                              var m29, A7, y9, k10;
                              return q9(
                                M11(
                                  ((A7 = (m29 = e14.value) == null ? void 0 : m29.flows) == null ? void 0 : A7.implicit) ?? ((k10 = (y9 = e14.value) == null ? void 0 : y9.flows) == null ? void 0 : k10.password)
                                )
                              );
                            })
                          }, " Authorize ")
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }))
              ];
            }),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/legacy/components/SecurityScheme.vue.js
var a17 = s4(fe2, [["__scopeId", "data-v-3bdd11a8"]]);

// node_modules/@scalar/api-reference/dist/legacy/components/SecuritySchemeSelector.vue2.js
var M7 = (r16) => (pushScopeId("data-v-630d0ab4"), r16 = r16(), popScopeId(), r16);
var T6 = {
  key: 0,
  class: "security-scheme-label"
};
var z6 = {
  key: 1,
  class: "security-scheme-selector"
};
var q6 = { class: "security-scheme-label" };
var G2 = ["value"];
var J3 = M7(() => createBaseVNode("option", { value: "" }, "No Authentication", -1));
var Q7 = ["value"];
var X4 = defineComponent({
  __name: "SecuritySchemeSelector",
  props: {
    value: {}
  },
  emits: ["input"],
  setup(r16, { emit: v11 }) {
    const l14 = r16, m29 = v11, { authentication: o11, setAuthentication: A7 } = i5(), _11 = (e14) => {
      p20(e14.target.value);
    };
    onMounted(() => {
      o11.preferredSecurityScheme || p20(Object.keys(l14.value ?? {})[0] ?? null);
    });
    const p20 = (e14) => {
      A7({
        preferredSecurityScheme: e14
      }), m29("input", e14);
    };
    onServerPrefetch(
      () => p20(Object.keys(l14.value ?? {})[0] ?? null)
    );
    const w8 = (e14) => !(e14 != null && e14.type), b14 = (e14) => e14.type.toLowerCase() === "apikey", C8 = (e14) => e14.type === "http" && e14.scheme.toLowerCase() === "basic" || e14.type.toLowerCase() === "basic", I8 = (e14) => e14.type === "http" && e14.scheme.toLowerCase() === "bearer", L8 = (e14) => e14.type.toLowerCase() === "oauth2", h10 = (e14, t12) => `${g7(e14)} (${t12})`, g7 = (e14) => {
      var t12, s19;
      return w8(e14) ? "No Authentication" : b14(e14) ? "API Key" : C8(e14) ? "Basic Authentication" : I8(e14) ? "Bearer Authentication" : L8(e14) ? (t12 = e14.flows) != null && t12.implicit ? "OAuth 2.0 Implicit" : (s19 = e14.flows) != null && s19.password ? "OAuth 2.0 Password" : "OAuth 2.0" : `${e14.type} (not yet supported)`;
    }, n15 = computed(() => Object.keys(l14.value ?? {}));
    return (e14, t12) => {
      var s19, f18;
      return n15.value.length === 1 ? (openBlock(), createElementBlock("div", T6, toDisplayString(h10((s19 = e14.value) == null ? void 0 : s19[n15.value[0]], n15.value[0])), 1)) : n15.value.length > 1 ? (openBlock(), createElementBlock("div", z6, [
        createBaseVNode("span", q6, toDisplayString(unref(o11).preferredSecurityScheme ? h10(
          (f18 = e14.value) == null ? void 0 : f18[unref(o11).preferredSecurityScheme],
          unref(o11).preferredSecurityScheme
        ) : "No Authentication"), 1),
        createVNode(unref(m2), { icon: "ChevronDown" }),
        createBaseVNode("select", {
          value: unref(o11).preferredSecurityScheme,
          onClick: t12[0] || (t12[0] = withModifiers(() => {
          }, ["prevent"])),
          onInput: _11
        }, [
          J3,
          (openBlock(true), createElementBlock(Fragment, null, renderList(n15.value, (u12) => {
            var S12;
            return openBlock(), createElementBlock("option", {
              key: u12,
              value: u12 ?? null
            }, toDisplayString(h10((S12 = e14.value) == null ? void 0 : S12[u12], u12)), 9, Q7);
          }), 128))
        ], 40, G2)
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/legacy/components/SecuritySchemeSelector.vue.js
var m23 = s4(X4, [["__scopeId", "data-v-630d0ab4"]]);

// node_modules/@scalar/api-reference/dist/helpers/hasSecuritySchemes.js
var r14 = (e14) => {
  var t12;
  return !!Object.keys(((t12 = e14 == null ? void 0 : e14.components) == null ? void 0 : t12.securitySchemes) ?? {}).length;
};

// node_modules/@scalar/api-reference/dist/components/Content/Authentication/Authentication.vue2.js
var b12 = { key: 0 };
var G3 = { class: "authentication-header" };
var P9 = { class: "selector" };
var R7 = {
  key: 0,
  class: "authentication-content"
};
var H6 = defineComponent({
  __name: "Authentication",
  props: {
    parsedSpec: {},
    proxy: {}
  },
  setup(d17) {
    const s19 = d17, { authentication: r16, setAuthentication: l14 } = i5(), y9 = computed(() => {
      var t12, c24, o11;
      if (!r16.preferredSecurityScheme)
        return false;
      const e14 = (o11 = (c24 = (t12 = s19.parsedSpec) == null ? void 0 : t12.components) == null ? void 0 : c24.securitySchemes) == null ? void 0 : o11[r16.preferredSecurityScheme];
      return !!e14 && "type" in e14 && !!e14.type;
    });
    return watch(
      () => {
        var e14, t12;
        return (t12 = (e14 = s19.parsedSpec) == null ? void 0 : e14.components) == null ? void 0 : t12.securitySchemes;
      },
      () => {
        var e14, t12;
        l14({
          securitySchemes: (t12 = (e14 = s19.parsedSpec) == null ? void 0 : e14.components) == null ? void 0 : t12.securitySchemes
        });
      },
      { deep: true, immediate: true }
    ), onServerPrefetch(async () => {
      const e14 = useSSRContext();
      await s5(1), e14.payload.data["useGlobalStore-authentication"] = r16;
    }), (e14, t12) => {
      var c24, o11, p20, u12, m29;
      return unref(r14)(e14.parsedSpec) ? (openBlock(), createElementBlock("div", b12, [
        createBaseVNode("div", G3, [
          createBaseVNode("div", P9, [
            createVNode(m23, {
              value: (o11 = (c24 = e14.parsedSpec) == null ? void 0 : c24.components) == null ? void 0 : o11.securitySchemes
            }, null, 8, ["value"])
          ])
        ]),
        y9.value ? (openBlock(), createElementBlock("div", R7, [
          unref(r16).preferredSecurityScheme ? (openBlock(), createBlock(a17, {
            key: 0,
            proxy: e14.proxy,
            value: (m29 = (u12 = (p20 = e14.parsedSpec) == null ? void 0 : p20.components) == null ? void 0 : u12.securitySchemes) == null ? void 0 : m29[unref(r16).preferredSecurityScheme]
          }, null, 8, ["proxy", "value"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Authentication/Authentication.vue.js
var c22 = s4(H6, [["__scopeId", "data-v-cfd417f3"]]);

// node_modules/@scalar/api-reference/dist/components/Content/ClientLibraries/ClientSelector.vue2.js
var M8 = (o11) => (pushScopeId("data-v-4951736c"), o11 = o11(), popScopeId(), o11);
var T7 = ["onClick"];
var J4 = ["value"];
var O7 = ["label"];
var V7 = ["value"];
var $9 = { class: "client-libraries-icon__more" };
var E6 = {
  key: 1,
  class: "client-libraries-icon",
  height: "50",
  viewBox: "0 0 50 50",
  width: "50",
  xmlns: "http://www.w3.org/2000/svg"
};
var F6 = M8(() => createBaseVNode("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, [
  createBaseVNode("path", { d: "M10.71 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0M21.13 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0M31.55 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0" })
], -1));
var H7 = [
  F6
];
var L6 = { key: 0 };
var q7 = defineComponent({
  __name: "ClientSelector",
  setup(o11) {
    const {
      httpClient: r16,
      setHttpClient: g7,
      availableTargets: y9,
      getClientTitle: m29,
      getTargetTitle: b14
    } = _6(), C8 = ref(), p20 = [
      {
        targetKey: "shell",
        clientKey: "curl"
      },
      {
        targetKey: "ruby",
        clientKey: "native"
      },
      {
        targetKey: "node",
        clientKey: "undici"
      },
      {
        targetKey: "php",
        clientKey: "guzzle"
      },
      {
        targetKey: "python",
        clientKey: "python3"
      }
    ].filter(
      (i24) => y9.value.find((s19) => s19.key === i24.targetKey && s19.clients.find((e14) => e14.key === i24.clientKey))
    ), K9 = (i24) => `programming-language-${i24}`, S12 = (i24) => i24.targetKey === r16.targetKey && i24.clientKey === r16.clientKey, h10 = (i24) => p20.some(
      (s19) => s19.targetKey === i24.targetKey && s19.clientKey === i24.clientKey
    );
    return (i24, s19) => (openBlock(), createElementBlock("div", {
      ref_key: "containerRef",
      ref: C8,
      class: "client-libraries-content"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(p20), (e14) => (openBlock(), createElementBlock("div", {
        key: e14.clientKey,
        class: normalizeClass(["client-libraries rendered-code-sdks", {
          "client-libraries__active": S12(e14)
        }]),
        onClick: () => unref(g7)(e14)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(`client-libraries-icon__${e14.targetKey}`)
        }, [
          createVNode(unref(m2), {
            class: "client-libraries-icon",
            icon: K9(e14.targetKey)
          }, null, 8, ["icon"])
        ], 2),
        createBaseVNode("span", null, toDisplayString(unref(b14)(e14)), 1)
      ], 10, T7))), 128)),
      createBaseVNode("div", {
        class: normalizeClass(["client-libraries client-libraries__select", {
          "client-libraries__active": unref(r16) && !h10(unref(r16))
        }])
      }, [
        createBaseVNode("select", {
          class: "language-select",
          value: JSON.stringify(unref(r16)),
          onInput: s19[0] || (s19[0] = (e14) => unref(g7)(JSON.parse(e14.target.value)))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(y9), (e14) => (openBlock(), createElementBlock("optgroup", {
            key: e14.key,
            label: e14.title
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e14.clients, (u12) => (openBlock(), createElementBlock("option", {
              key: u12.key,
              value: JSON.stringify({
                targetKey: e14.key,
                clientKey: u12.key
              })
            }, toDisplayString(unref(m29)({
              targetKey: e14.key,
              clientKey: u12.key
            })), 9, V7))), 128))
          ], 8, O7))), 128))
        ], 40, J4),
        createBaseVNode("div", $9, [
          unref(r16) && !h10(unref(r16)) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(`client-libraries-icon__${unref(r16).targetKey}`)
          }, [
            createVNode(unref(m2), {
              class: "client-libraries-icon",
              icon: K9(unref(r16).targetKey)
            }, null, 8, ["icon"])
          ], 2)) : (openBlock(), createElementBlock("svg", E6, H7))
        ]),
        unref(y9).length ? (openBlock(), createElementBlock("span", L6, "More")) : createCommentVNode("", true)
      ], 2)
    ], 512));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/ClientLibraries/ClientSelector.vue.js
var m24 = s4(q7, [["__scopeId", "data-v-4951736c"]]);

// node_modules/@scalar/api-reference/dist/components/Content/ClientLibraries/ClientLibraries.vue2.js
var C7 = (e14) => (pushScopeId("data-v-dbf83e74"), e14 = e14(), popScopeId(), e14);
var g5 = C7(() => createBaseVNode("div", { class: "client-libraries-heading" }, "Client Libraries", -1));
var v10 = {
  class: "selected-client card-footer",
  muted: ""
};
var N4 = defineComponent({
  __name: "ClientLibraries",
  setup(e14) {
    const { availableTargets: l14, httpTargetTitle: a23, httpClientTitle: c24 } = _6();
    return (S12, b14) => (openBlock(), createElementBlock("div", null, [
      unref(l14).length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        g5,
        createBaseVNode("div", null, [
          createVNode(m24)
        ]),
        createBaseVNode("div", v10, toDisplayString(unref(c24)) + " " + toDisplayString(unref(a23)), 1)
      ], 64)) : createCommentVNode("", true)
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/ClientLibraries/ClientLibraries.vue.js
var a18 = s4(N4, [["__scopeId", "data-v-dbf83e74"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Lazy/Lazy.vue.js
var y8 = defineComponent({
  __name: "Lazy",
  props: {
    id: {},
    isLazy: { type: Boolean, default: true },
    lazyTimeout: { default: 0 }
  },
  setup(d17) {
    const e14 = d17, l14 = (t12 = () => {
    }) => {
      typeof window > "u" || ("requestIdleCallback" in window ? setTimeout(() => window.requestIdleCallback(t12), e14.lazyTimeout) : setTimeout(() => nextTick(t12), e14.lazyTimeout ?? 300));
    }, o11 = ref(!e14.isLazy);
    return e14.isLazy ? l14(() => {
      o11.value = true, e14.id && nextTick(() => e5.emit({ id: e14.id }));
    }) : e14.id && nextTick(() => e5.emit({ id: e14.id })), (t12, f18) => o11.value ? renderSlot(t12.$slots, "default", { key: 0 }) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Webhooks/Webhook.vue.js
var q8 = defineComponent({
  __name: "Webhook",
  props: {
    webhook: {}
  },
  setup(n15) {
    const a23 = n15, { responses: m29 } = i17(a23.webhook);
    return (e14, y9) => {
      var o11;
      return e14.webhook ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(p11, {
          requestBody: (o11 = e14.webhook.information) == null ? void 0 : o11.requestBody
        }, {
          title: withCtx(() => [
            createTextVNode("Payload")
          ]),
          _: 1
        }, 8, ["requestBody"]),
        createVNode(m16, { parameters: unref(m29) }, {
          title: withCtx(() => [
            createTextVNode("Responses")
          ]),
          _: 1
        }, 8, ["parameters"])
      ], 64)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Webhooks/Webhooks.vue2.js
var K8 = (l14) => (pushScopeId("data-v-38408a09"), l14 = l14(), popScopeId(), l14);
var L7 = K8(() => createBaseVNode("div", { id: "webhooks" }, null, -1));
var U3 = defineComponent({
  __name: "Webhooks",
  props: {
    webhooks: {}
  },
  setup(l14) {
    const _11 = l14, k10 = computed(() => Object.keys(_11.webhooks ?? {})), { getWebhookId: m29 } = $2();
    return (i24, M11) => k10.value.length ? (openBlock(), createBlock(unref(l8), { key: 0 }, {
      default: withCtx(() => [
        L7,
        (openBlock(true), createElementBlock(Fragment, null, renderList(k10.value, (e14) => {
          var p20;
          return openBlock(), createElementBlock(Fragment, { key: e14 }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(
              (p20 = i24.webhooks) == null ? void 0 : p20[e14]
            ), (t12) => (openBlock(), createBlock(unref(m10), {
              id: unref(m29)(e14, t12),
              key: t12,
              label: e14
            }, {
              default: withCtx(() => {
                var f18;
                return [
                  (f18 = i24.webhooks) != null && f18[e14] ? (openBlock(), createBlock(unref(p9), { key: 0 }, {
                    default: withCtx(() => {
                      var h10, w8;
                      return [
                        createVNode(unref(f3), { level: 2 }, {
                          default: withCtx(() => [
                            createVNode(unref(_), {
                              id: unref(m29)(e14, t12)
                            }, {
                              default: withCtx(() => {
                                var b14;
                                return [
                                  createTextVNode(toDisplayString((b14 = i24.webhooks[e14][t12]) == null ? void 0 : b14.name), 1)
                                ];
                              }),
                              _: 2
                            }, 1032, ["id"])
                          ]),
                          _: 2
                        }, 1024),
                        (h10 = i24.webhooks[e14][t12]) != null && h10.description ? (openBlock(), createBlock(unref(h), {
                          key: 0,
                          value: (w8 = i24.webhooks[e14][t12]) == null ? void 0 : w8.description,
                          withImages: ""
                        }, null, 8, ["value"])) : createCommentVNode("", true),
                        createVNode(q8, {
                          webhook: i24.webhooks[e14][t12]
                        }, null, 8, ["webhook"])
                      ];
                    }),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ];
              }),
              _: 2
            }, 1032, ["id", "label"]))), 128))
          ], 64);
        }), 128))
      ]),
      _: 1
    })) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Webhooks/Webhooks.vue.js
var p19 = s4(U3, [["__scopeId", "data-v-38408a09"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Models/ModelsAccordion.vue2.js
var H8 = {
  key: 0,
  class: "properties"
};
var O8 = { key: 1 };
var D8 = defineComponent({
  __name: "ModelsAccordion",
  props: {
    schemas: {}
  },
  setup(b14) {
    const d17 = b14, q9 = computed(() => d17.schemas ? Object.entries(d17.schemas).map(([a23, m29]) => ({
      name: a23,
      schema: m29
    })) : []), { getModelId: u12 } = $2();
    return (a23, m29) => d17.schemas ? (openBlock(), createBlock(unref(i12), {
      key: 0,
      class: "reference-models"
    }, {
      title: withCtx(() => [
        createVNode(unref(f3), { level: 2 }, {
          default: withCtx(() => [
            createTextVNode("Models")
          ]),
          _: 1
        })
      ]),
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(q9.value, ({ name: l14, schema: r16 }) => (openBlock(), createBlock(unref(i19), {
          id: unref(u12)(l14),
          key: l14,
          label: l14
        }, {
          title: withCtx(() => [
            createVNode(unref(_), {
              id: unref(u12)(l14),
              class: "reference-models-anchor"
            }, {
              default: withCtx(() => [
                createVNode(unref(c13), {
                  class: "reference-models-label",
                  name: l14,
                  value: r16
                }, null, 8, ["name", "value"])
              ]),
              _: 2
            }, 1032, ["id"])
          ]),
          default: withCtx(() => [
            r16 != null && r16.properties ? (openBlock(), createElementBlock("div", H8, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.entries(r16.properties), ([n15, x7]) => {
                var p20, f18, _11;
                return openBlock(), createBlock(unref(m12), {
                  key: n15,
                  name: n15,
                  required: ((p20 = r16.required) == null ? void 0 : p20.includes(n15)) || ((_11 = (f18 = r16.properties) == null ? void 0 : f18[n15]) == null ? void 0 : _11.required) === true,
                  value: x7
                }, null, 8, ["name", "required", "value"]);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", O8, [
              createVNode(unref(m12), { value: r16 }, null, 8, ["value"])
            ]))
          ]),
          _: 2
        }, 1032, ["id", "label"]))), 128))
      ]),
      _: 1
    })) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Models/ModelsAccordion.vue.js
var d15 = s4(D8, [["__scopeId", "data-v-304ad700"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Models/Models.vue2.js
var O9 = (r16) => (pushScopeId("data-v-f19478dd"), r16 = r16(), popScopeId(), r16);
var D9 = O9(() => createBaseVNode("div", { id: "models" }, null, -1));
var U4 = defineComponent({
  __name: "Models",
  props: {
    schemas: {}
  },
  setup(r16) {
    const m29 = r16, { collapsedSidebarItems: h10 } = Ie2(), { getModelId: s19 } = $2(), n15 = computed(
      () => Object.keys(m29.schemas ?? {}).length <= 3 || h10[s19()]
    ), u12 = computed(() => {
      const o11 = Object.keys(m29.schemas ?? {});
      return n15.value ? o11 : o11.slice(0, 3);
    });
    return (o11, F8) => o11.schemas ? (openBlock(), createBlock(unref(l8), { key: 0 }, {
      default: withCtx(() => [
        createVNode(unref(y8), {
          id: "models",
          isLazy: false
        }, {
          default: withCtx(() => [
            D9
          ]),
          _: 1
        }),
        (openBlock(true), createElementBlock(Fragment, null, renderList(u12.value, (t12, _11) => (openBlock(), createBlock(unref(y8), {
          id: unref(s19)(t12),
          key: t12,
          isLazy: ""
        }, {
          default: withCtx(() => [
            createVNode(unref(m10), {
              id: unref(s19)(t12),
              label: t12
            }, {
              default: withCtx(() => [
                o11.schemas[t12] ? (openBlock(), createBlock(unref(p9), { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(unref(f3), { level: 2 }, {
                      default: withCtx(() => [
                        createVNode(unref(_), {
                          id: unref(s19)(t12)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(o11.schemas[t12].title ?? t12), 1)
                          ]),
                          _: 2
                        }, 1032, ["id"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(c14), {
                      name: t12,
                      noncollapsible: "",
                      value: o11.schemas[t12]
                    }, null, 8, ["name", "value"]),
                    !n15.value && _11 === u12.value.length - 1 ? (openBlock(), createBlock(p8, {
                      key: 0,
                      id: unref(s19)(),
                      class: "something-special"
                    }, null, 8, ["id"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["id", "label"])
          ]),
          _: 2
        }, 1032, ["id"]))), 128))
      ]),
      _: 1
    })) : createCommentVNode("", true);
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Models/Models.vue.js
var m25 = s4(U4, [["__scopeId", "data-v-f19478dd"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Content.vue2.js
var _9 = createStaticVNode('<div class="section-flare" data-v-8d751fa0><div class="section-flare-item" data-v-8d751fa0></div><div class="section-flare-item" data-v-8d751fa0></div><div class="section-flare-item" data-v-8d751fa0></div><div class="section-flare-item" data-v-8d751fa0></div><div class="section-flare-item" data-v-8d751fa0></div><div class="section-flare-item" data-v-8d751fa0></div><div class="section-flare-item" data-v-8d751fa0></div><div class="section-flare-item" data-v-8d751fa0></div></div>', 1);
var x6 = { class: "narrow-references-container" };
var be = defineComponent({
  __name: "Content",
  props: {
    parsedSpec: {},
    layout: {},
    baseServerURL: {},
    servers: {},
    proxy: {}
  },
  setup(z9) {
    const i24 = z9, { getOperationId: u12, getTagId: d17, hash: I8 } = $2(), { hideModels: M11, collapsedSidebarItems: N6 } = Ie2(), V8 = computed(
      () => i24.layout === "accordion" ? e8 : p10
    ), A7 = computed(
      () => i24.layout === "accordion" ? a14 : a15
    ), U5 = computed(
      () => i24.layout === "accordion" ? "after" : "aside"
    ), g7 = i24.layout !== "accordion" && !I8.value.startsWith("model");
    return (e14, ee3) => {
      var v11, y9, S12, h10;
      return openBlock(), createElementBlock(Fragment, null, [
        _9,
        createBaseVNode("div", x6, [
          renderSlot(e14.$slots, "start", {}, void 0, true),
          createVNode(unref(fe), {
            layout: e14.layout,
            parsedSpec: e14.parsedSpec
          }, null, 8, ["layout", "parsedSpec"]),
          (y9 = (v11 = e14.parsedSpec) == null ? void 0 : v11.info) != null && y9.title || (h10 = (S12 = e14.parsedSpec) == null ? void 0 : S12.info) != null && h10.description ? (openBlock(), createBlock(unref(_7), {
            key: 0,
            info: e14.parsedSpec.info,
            parsedSpec: e14.parsedSpec
          }, {
            [U5.value]: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(["introduction-card", { "introduction-card-row": e14.layout === "accordion" }])
              }, [
                createVNode(unref(w7), {
                  class: "introduction-card-item",
                  defaultServerUrl: e14.baseServerURL,
                  servers: i24.servers,
                  specification: e14.parsedSpec
                }, null, 8, ["defaultServerUrl", "servers", "specification"]),
                createVNode(unref(c22), {
                  class: "introduction-card-item",
                  parsedSpec: e14.parsedSpec,
                  proxy: e14.proxy
                }, null, 8, ["parsedSpec", "proxy"]),
                createVNode(unref(a18), { class: "introduction-card-item" })
              ], 2)
            ]),
            _: 2
          }, 1032, ["info", "parsedSpec"])) : renderSlot(e14.$slots, "empty-state", { key: 1 }, void 0, true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(e14.parsedSpec.tags, (a23) => (openBlock(), createBlock(unref(y8), {
            id: unref(d17)(a23),
            key: unref(d17)(a23),
            isLazy: unref(g7) && !unref(N6)[unref(d17)(a23)]
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(V8.value), {
                id: unref(d17)(a23),
                spec: e14.parsedSpec,
                tag: a23
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(a23.operations, (t12, B12) => (openBlock(), createBlock(unref(y8), {
                    id: unref(u12)(t12, a23),
                    key: `${t12.httpVerb}-${t12.operationId}`,
                    isLazy: B12 > 0
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(A7.value), {
                        id: unref(u12)(t12, a23),
                        operation: t12,
                        tag: a23
                      }, null, 8, ["id", "operation", "tag"]))
                    ]),
                    _: 2
                  }, 1032, ["id", "isLazy"]))), 128))
                ]),
                _: 2
              }, 1032, ["id", "spec", "tag"]))
            ]),
            _: 2
          }, 1032, ["id", "isLazy"]))), 128)),
          e14.parsedSpec.webhooks ? (openBlock(), createBlock(unref(p19), {
            key: 2,
            webhooks: e14.parsedSpec.webhooks
          }, null, 8, ["webhooks"])) : createCommentVNode("", true),
          unref(o8)(e14.parsedSpec) && !unref(M11) ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
            e14.layout === "accordion" ? (openBlock(), createBlock(unref(d15), {
              key: 0,
              schemas: unref(l6)(e14.parsedSpec)
            }, null, 8, ["schemas"])) : (openBlock(), createBlock(unref(m25), {
              key: 1,
              schemas: unref(l6)(e14.parsedSpec)
            }, null, 8, ["schemas"]))
          ], 64)) : createCommentVNode("", true),
          renderSlot(e14.$slots, "end", {}, void 0, true)
        ])
      ], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Content.vue.js
var f12 = s4(be, [["__scopeId", "data-v-8d751fa0"]]);

// node_modules/@scalar/api-reference/dist/components/ApiReferenceLayout.vue2.js
var Ee = ["innerHTML"];
var Ie3 = { class: "references-header" };
var Oe = {
  key: 0,
  class: "references-navigation t-doc__sidebar"
};
var ke = { class: "references-navigation-list" };
var Be = { class: "references-editor" };
var De = { class: "references-editor-textarea" };
var Fe2 = { class: "references-rendered" };
var Me = {
  key: 0,
  class: "references-footer"
};
var xe2 = defineComponent({
  inheritAttrs: false,
  __name: "ApiReferenceLayout",
  props: {
    configuration: {},
    parsedSpec: {},
    rawSpec: {}
  },
  emits: ["changeTheme", "updateContent", "loadSwaggerFile", "linkSwaggerFile", "toggleDarkMode"],
  setup(U5) {
    const t12 = U5, { initializeToasts: A7, toast: H10 } = i2();
    A7((e14) => H10(e14));
    const N6 = useMediaQuery("(min-width: 1150px)"), z9 = ref("100dvh"), p20 = ref(null);
    useResizeObserver(p20, (e14) => {
      z9.value = e14[0].contentRect.height + "px";
    });
    const y9 = ref(0);
    onMounted(() => {
      var a23, r16, n15;
      const e14 = (r16 = (a23 = p20.value) == null ? void 0 : a23.parentElement) == null ? void 0 : r16.getBoundingClientRect(), o11 = (n15 = p20.value) == null ? void 0 : n15.getBoundingClientRect();
      if (e14 && o11) {
        const k10 = o11.top - e14.top;
        y9.value = k10 < 2 ? 0 : k10;
      }
    });
    const {
      breadcrumb: Y4,
      collapsedSidebarItems: m29,
      isSidebarOpen: V8,
      setCollapsedSidebarItem: T8,
      hideModels: G5,
      defaultOpenAllTags: W5,
      setParsedSpec: j8,
      scrollToOperation: K9
    } = Ie2(), {
      getPathRoutingId: R8,
      getSectionId: Q8,
      getTagId: q9,
      hash: $11,
      isIntersectionEnabled: C8,
      pathRouting: L8,
      updateHash: E8
    } = $2();
    L8.value = t12.configuration.pathRouting, onBeforeMount(() => E8());
    const I8 = async (e14) => {
      var o11;
      C8.value = false, E8(), e14 ? K9(e14) : (o11 = p20.value) == null || o11.scrollTo(0, 0), await s5(100), C8.value = true;
    };
    onBeforeMount(() => l()), onMounted(() => {
      u2.on(({ specTitle: e14 }) => {
        b2(t12.rawSpec, e14);
      }), window.onhashchange = () => I8(decodeURIComponent(window.location.hash.replace(/^#/, ""))), window.onpopstate = () => L8.value && I8(R8(window.location.pathname));
    });
    const J5 = computed(
      () => N6.value || !t12.configuration.isEditable
    ), O10 = useDebounceFn((e14) => {
      if ((e14.target.scrollTop ?? 0) < 50) {
        const a23 = t12.configuration.pathRouting ? t12.configuration.pathRouting.basePath : window.location.pathname;
        window.history.replaceState({}, "", a23 + window.location.search), $11.value = "";
      }
    }), s19 = computed(() => ({
      breadcrumb: Y4.value,
      spec: t12.parsedSpec
    }));
    watch(() => t12.parsedSpec, j8, { deep: true }), onServerPrefetch(() => {
      var o11, a23;
      const e14 = useSSRContext();
      if (e14 && (e14.payload || (e14.payload = { data: defaultStateFactory() }), (o11 = e14.payload).data || (o11.data = defaultStateFactory()), t12.configuration.pathRouting)) {
        const r16 = R8(e14.url);
        $11.value = r16, e14.payload.data.hash = r16;
        for (const n15 in m29)
          Object.hasOwn(m29, n15) && delete m29[n15];
        if (r16)
          T8(Q8(r16), true);
        else {
          const n15 = (a23 = t12.parsedSpec.tags) == null ? void 0 : a23[0];
          n15 && T8(q9(n15), true);
        }
        e14.payload.data["useSidebarContent-collapsedSidebarItems"] = m29;
      }
    }), s2(() => {
      var r16;
      const e14 = getCurrentInstance(), o11 = "scalar-instance-id";
      if (!e14) return o11;
      let a23 = e14.uid;
      return typeof window > "u" ? (e14.attrs || (e14.attrs = {}), e14.attrs[o11] = a23) : (r16 = e14.vnode.el) != null && r16.getAttribute && (a23 = e14.vnode.el.getAttribute(o11)), `${o11}-${a23}`;
    }), provide(O5, () => t12.parsedSpec.security), provide(
      o10,
      () => t12.configuration.hideDownloadButton
    ), G5.value = t12.configuration.hideModels ?? false, W5.value = t12.configuration.defaultOpenAllTags ?? false, n3(t12.configuration);
    const X5 = computed(
      () => `<style>
  ${L(t12.configuration.theme, {
        fonts: t12.configuration.withDefaultFonts
      })}</style>`
    );
    return (e14, o11) => {
      var a23;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", { innerHTML: X5.value }, null, 8, Ee),
        createBaseVNode("div", {
          ref_key: "documentEl",
          ref: p20,
          class: normalizeClass(["scalar-app scalar-api-reference references-layout", [
            {
              "references-editable": e14.configuration.isEditable,
              "references-sidebar": e14.configuration.showSidebar,
              "references-sidebar-mobile-open": unref(V8),
              "references-classic": e14.configuration.layout === "classic"
            },
            e14.$attrs.class
          ]]),
          style: normalizeStyle({
            "--scalar-y-offset": `var(--scalar-custom-header-height, ${y9.value}px)`
          }),
          onScrollPassive: o11[4] || (o11[4] = //@ts-ignore
          (...r16) => unref(O10) && unref(O10)(...r16))
        }, [
          createBaseVNode("div", Ie3, [
            renderSlot(e14.$slots, "header", normalizeProps(guardReactiveProps(s19.value)), void 0, true)
          ]),
          e14.configuration.showSidebar ? (openBlock(), createElementBlock("aside", Oe, [
            createBaseVNode("div", ke, [
              createVNode(unref(m7), {
                parsedSpec: e14.parsedSpec,
                tagsSorter: e14.configuration.tagsSorter
              }, {
                "sidebar-start": withCtx(() => [
                  renderSlot(e14.$slots, "sidebar-start", normalizeProps(guardReactiveProps(s19.value)), void 0, true)
                ]),
                "sidebar-end": withCtx(() => [
                  renderSlot(e14.$slots, "sidebar-end", normalizeProps(guardReactiveProps(s19.value)), void 0, true)
                ]),
                _: 3
              }, 8, ["parsedSpec", "tagsSorter"])
            ])
          ])) : createCommentVNode("", true),
          withDirectives(createBaseVNode("div", Be, [
            createBaseVNode("div", De, [
              renderSlot(e14.$slots, "editor", normalizeProps(guardReactiveProps(s19.value)), void 0, true)
            ])
          ], 512), [
            [vShow, e14.configuration.isEditable]
          ]),
          J5.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("div", Fe2, [
              createVNode(unref(f12), {
                baseServerURL: e14.configuration.baseServerURL,
                layout: e14.configuration.layout === "classic" ? "accordion" : "default",
                parsedSpec: e14.parsedSpec,
                proxy: e14.configuration.proxy,
                servers: e14.configuration.servers
              }, createSlots({
                start: withCtx(() => [
                  renderSlot(e14.$slots, "content-start", normalizeProps(guardReactiveProps(s19.value)), void 0, true)
                ]),
                end: withCtx(() => [
                  renderSlot(e14.$slots, "content-end", normalizeProps(guardReactiveProps(s19.value)), void 0, true)
                ]),
                _: 2
              }, [
                (a23 = e14.configuration) != null && a23.isEditable ? {
                  name: "empty-state",
                  fn: withCtx(() => {
                    var r16;
                    return [
                      createVNode(m3, {
                        theme: ((r16 = e14.configuration) == null ? void 0 : r16.theme) || "default",
                        onChangeTheme: o11[0] || (o11[0] = (n15) => e14.$emit("changeTheme", n15)),
                        onLinkSwaggerFile: o11[1] || (o11[1] = (n15) => e14.$emit("linkSwaggerFile")),
                        onLoadSwaggerFile: o11[2] || (o11[2] = (n15) => e14.$emit("loadSwaggerFile")),
                        onUpdateContent: o11[3] || (o11[3] = (n15) => e14.$emit("updateContent", n15))
                      }, null, 8, ["theme"])
                    ];
                  }),
                  key: "0"
                } : void 0
              ]), 1032, ["baseServerURL", "layout", "parsedSpec", "proxy", "servers"])
            ]),
            e14.$slots.footer ? (openBlock(), createElementBlock("div", Me, [
              renderSlot(e14.$slots, "footer", normalizeProps(guardReactiveProps(s19.value)), void 0, true)
            ])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true),
          createVNode(b, {
            proxyUrl: e14.configuration.proxy,
            servers: e14.configuration.servers,
            spec: e14.configuration.spec
          }, null, 8, ["proxyUrl", "servers", "spec"])
        ], 38),
        createVNode(unref(v))
      ], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/ApiReferenceLayout.vue.js
var m26 = s4(xe2, [["__scopeId", "data-v-f0ddfb95"]]);

// node_modules/@scalar/api-reference/dist/components/ClassicHeader.vue.js
var n13 = {};
var d16 = { class: "references-classic-header-container" };
var a19 = { class: "references-classic-header" };
function i23(e14, l14) {
  return openBlock(), createElementBlock("div", d16, [
    createBaseVNode("div", a19, [
      renderSlot(e14.$slots, "default", {}, void 0, true),
      renderSlot(e14.$slots, "dark-mode-toggle", {}, void 0, true)
    ])
  ]);
}
var u9 = s4(n13, [["render", i23], ["__scopeId", "data-v-a860f78f"]]);

// node_modules/@scalar/api-reference/dist/components/DarkModeToggle/DarkModeIconToggle.vue2.js
var M9 = defineComponent({
  __name: "DarkModeIconToggle",
  props: {
    isDarkMode: { type: Boolean }
  },
  emits: ["toggleDarkMode"],
  setup(k10) {
    return (e14, o11) => (openBlock(), createElementBlock("button", {
      class: "darklight",
      type: "button",
      onClick: o11[0] || (o11[0] = (m29) => e14.$emit("toggleDarkMode"))
    }, [
      createVNode(unref(m2), {
        icon: e14.isDarkMode ? "DarkMode" : "LightMode"
      }, null, 8, ["icon"]),
      createVNode(c9, null, {
        default: withCtx(() => [
          createTextVNode(" Switch to " + toDisplayString(e14.isDarkMode ? "Light" : "Dark") + " Mode ", 1)
        ]),
        _: 1
      })
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/components/DarkModeToggle/DarkModeIconToggle.vue.js
var e12 = s4(M9, [["__scopeId", "data-v-8f61ca56"]]);

// node_modules/@scalar/api-reference/dist/features/Search/useKeyboardNavigation.js
function l12({
  active: i24,
  selectedSearchResult: o11,
  searchResultsWithPlaceholderResults: e14,
  onSearchResultClick: t12
}) {
  const u12 = useMagicKeys(), r16 = computed(
    () => e14.value[o11.value]
  );
  whenever(u12.enter, () => {
    i24 && window && (t12(r16.value), window.location.hash = r16.value.item.href);
  }), whenever(u12.ArrowDown, () => {
    var n15;
    i24 && window && (o11.value < e14.value.length - 1 ? o11.value++ : o11.value = 0, (n15 = document.getElementById(r16.value.item.href)) == null || n15.scrollIntoView({
      behavior: "smooth",
      block: "center"
    }));
  }), whenever(u12.ArrowUp, () => {
    var n15;
    i24 && window && (o11.value > 0 ? o11.value-- : o11.value = e14.value.length - 1, (n15 = document.getElementById(r16.value.item.href)) == null || n15.scrollIntoView({
      behavior: "smooth",
      block: "center"
    }));
  });
}

// node_modules/@scalar/api-reference/dist/helpers/specHelpers.js
function u10(e14, r16) {
  let t12 = e14;
  const s19 = r16.required && r16.required.includes(e14);
  return t12 += s19 ? " REQUIRED " : " optional ", r16.properties[e14] && (t12 += r16.properties[e14].type, r16.properties[e14].description && (t12 += " " + r16.properties[e14].description)), t12;
}
function f13(e14) {
  var s19;
  const r16 = ["Body"], t12 = (s19 = e14 == null ? void 0 : e14.schema) == null ? void 0 : s19.properties;
  return t12 && Object.keys(t12).forEach((i24) => {
    if (!e14.schema)
      return;
    r16.push(u10(i24, e14.schema));
    const p20 = t12[i24];
    p20.type === "object" && !!p20.properties && p20.properties && Object.keys(p20.properties).forEach((c24) => {
      var o11, n15;
      r16.push(`${c24} ${(n15 = (o11 = p20.properties) == null ? void 0 : o11[c24]) == null ? void 0 : n15.type}`);
    });
  }), r16;
}
function a20(e14) {
  var r16, t12, s19;
  try {
    const i24 = (s19 = (t12 = (r16 = e14 == null ? void 0 : e14.information) == null ? void 0 : r16.requestBody) == null ? void 0 : t12.content) == null ? void 0 : s19["application/json"];
    if (!i24)
      throw new Error("Body not found");
    return f13(i24);
  } catch {
    return false;
  }
}

// node_modules/@scalar/api-reference/dist/features/Search/useSearchIndex.js
function ae3({
  specification: a23
}) {
  const { getHeadingId: R8, getWebhookId: T8, getModelId: j8, getOperationId: L8, getTagId: W5 } = $2(), { hideModels: q9 } = Ie2(), o11 = ref([]), u12 = ref([]), h10 = ref(0), s19 = ref(""), d17 = new Fuse(o11.value, {
    keys: ["title", "description", "body"]
  }), C8 = () => {
    h10.value = 0, u12.value = d17.search(s19.value);
  };
  function F8() {
    s19.value = "", h10.value = 0, u12.value = [];
  }
  const H10 = computed(
    () => s19.value.length === 0 ? o11.value.slice(0, 25).map((r16) => ({
      item: r16
    })) : u12.value.slice(0, 25)
  );
  return watch(
    a23.value,
    async () => {
      var y9, g7, I8, w8, M11, k10, $11, D11, x7;
      const f18 = performance.now();
      if (o11.value = [], !((g7 = (y9 = a23.value) == null ? void 0 : y9.tags) != null && g7.length) && !((w8 = (I8 = a23.value) == null ? void 0 : I8.webhooks) != null && w8.length)) {
        d17.setCollection([]);
        return;
      }
      const r16 = [], v11 = i11(
        ((k10 = (M11 = a23.value) == null ? void 0 : M11.info) == null ? void 0 : k10.description) ?? ""
      );
      v11.length && (v11.forEach((e14) => {
        r16.push({
          type: "heading",
          title: `Info > ${e14.value}`,
          description: "",
          href: `#${R8(e14)}`,
          tag: e14.slug,
          body: ""
        });
      }), o11.value = o11.value.concat(r16)), (D11 = ($11 = a23.value) == null ? void 0 : $11.tags) == null || D11.forEach((e14) => {
        const E8 = {
          title: e14["x-displayName"] ?? e14.name,
          href: `#${W5(e14)}`,
          description: e14.description,
          type: "tag",
          tag: e14.name,
          body: ""
        };
        o11.value.push(E8), e14.operations && e14.operations.forEach((t12) => {
          const { parameterMap: n15 } = t11({ operation: t12 }), S12 = a20(t12) || n15.value;
          let p20 = null;
          typeof S12 != "boolean" && (p20 = S12);
          const O10 = {
            type: "req",
            title: t12.name ?? t12.path,
            href: `#${L8(t12, e14)}`,
            operationId: t12.operationId,
            description: t12.description ?? "",
            httpVerb: t12.httpVerb,
            path: t12.path,
            tag: e14.name,
            operation: t12
          };
          p20 && (O10.body = p20), o11.value.push(O10);
        });
      });
      const l14 = (x7 = a23.value) == null ? void 0 : x7.webhooks, m29 = [];
      l14 && Object.keys(l14).forEach((e14) => {
        Object.keys(
          l14[e14]
        ).forEach((t12) => {
          var n15;
          m29.push({
            type: "webhook",
            title: `Webhook: ${(n15 = l14[e14][t12]) == null ? void 0 : n15.name}`,
            href: `#${T8(e14, t12)}`,
            description: e14,
            httpVerb: t12,
            tag: e14,
            body: ""
          });
        }), o11.value = o11.value.concat(m29);
      });
      const i24 = q9.value ? {} : l6(a23.value), b14 = [];
      i24 && (Object.keys(i24).forEach((e14) => {
        b14.push({
          type: "model",
          title: "Model",
          href: `#${j8(e14)}`,
          description: i24[e14].title ?? e14,
          tag: e14,
          body: ""
        });
      }), o11.value = o11.value.concat(b14)), d17.setCollection(o11.value);
      const N6 = performance.now();
      console.log(`create-search-index: ${Math.round(N6 - f18)} ms`);
    },
    { immediate: true }
  ), {
    resetSearch: F8,
    fuseSearch: C8,
    selectedSearchResult: h10,
    searchResultsWithPlaceholderResults: H10,
    searchText: s19
  };
}

// node_modules/@scalar/api-reference/dist/features/Search/SearchModal.vue2.js
var A6 = (r16) => (pushScopeId("data-v-6ee7fa31"), r16 = r16(), popScopeId(), r16);
var G4 = A6(() => createBaseVNode("div", { class: "ref-search-meta" }, [
  createBaseVNode("span", null, "↑↓ Navigate"),
  createBaseVNode("span", null, "⏎ Select")
], -1));
var te3 = defineComponent({
  __name: "SearchModal",
  props: {
    parsedSpec: {},
    modalState: {}
  },
  setup(r16) {
    const s19 = r16, R8 = toRef(s19, "parsedSpec"), k10 = toRef(s19.modalState.open), {
      resetSearch: I8,
      fuseSearch: _11,
      selectedSearchResult: m29,
      searchResultsWithPlaceholderResults: p20,
      searchText: c24
    } = ae3({
      specification: R8
    });
    l12({
      selectedSearchResult: m29,
      active: k10,
      searchResultsWithPlaceholderResults: p20,
      onSearchResultClick: f18
    });
    const w8 = {
      heading: "DocsPage",
      model: "Brackets",
      req: "Terminal",
      tag: "CodeFolder",
      webhook: "Terminal"
    }, C8 = ref(null);
    watch(
      () => s19.modalState.open,
      (o11) => {
        o11 && I8();
      }
    );
    const { setCollapsedSidebarItem: V8 } = Ie2(), b14 = /#(tag\/[^/]*)/;
    function f18(o11) {
      let a23 = "models";
      const e14 = o11.item.href.match(b14);
      e14 != null && e14.length && e14.length > 1 && (a23 = e14[1]), V8(a23, true), s19.modalState.hide();
    }
    function N6(o11) {
      const a23 = new URL(window.location.href);
      return a23.hash = o11, a23.toString();
    }
    return (o11, a23) => (openBlock(), createBlock(unref(m), {
      state: o11.modalState,
      variant: "search"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          ref_key: "searchModalRef",
          ref: C8,
          class: "ref-search-container"
        }, [
          createVNode(unref(I), {
            modelValue: unref(c24),
            "onUpdate:modelValue": a23[0] || (a23[0] = (e14) => isRef(c24) ? c24.value = e14 : null),
            onInput: unref(_11)
          }, null, 8, ["modelValue", "onInput"])
        ], 512),
        createVNode(unref(v2), {
          class: "ref-search-results custom-scroll",
          noResults: !unref(p20).length
        }, {
          query: withCtx(() => [
            createTextVNode(toDisplayString(unref(c24)), 1)
          ]),
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(p20), (e14, S12) => (openBlock(), createBlock(unref(C), {
              id: e14.item.href,
              key: e14.refIndex,
              active: unref(m29) === S12,
              href: N6(e14.item.href),
              icon: w8[e14.item.type],
              onClick: (x7) => f18(e14),
              onFocus: (x7) => m29.value = S12
            }, createSlots({
              default: withCtx(() => [
                createTextVNode(toDisplayString(e14.item.title) + " ", 1)
              ]),
              _: 2
            }, [
              (e14.item.httpVerb || e14.item.path) && e14.item.path !== e14.item.title ? {
                name: "description",
                fn: withCtx(() => [
                  createTextVNode(toDisplayString(e14.item.path), 1)
                ]),
                key: "0"
              } : e14.item.description ? {
                name: "description",
                fn: withCtx(() => [
                  createTextVNode(toDisplayString(e14.item.description), 1)
                ]),
                key: "1"
              } : void 0,
              e14.item.type === "req" ? {
                name: "addon",
                fn: withCtx(() => [
                  createVNode(p3, {
                    method: e14.item.httpVerb ?? "get"
                  }, null, 8, ["method"])
                ]),
                key: "2"
              } : void 0
            ]), 1032, ["id", "active", "href", "icon", "onClick", "onFocus"]))), 128))
          ]),
          _: 1
        }, 8, ["noResults"]),
        G4
      ]),
      _: 1
    }, 8, ["state"]));
  }
});

// node_modules/@scalar/api-reference/dist/features/Search/SearchModal.vue.js
var f14 = s4(te3, [["__scopeId", "data-v-6ee7fa31"]]);

// node_modules/@scalar/api-reference/dist/features/Search/Search.vue.js
var l13 = defineComponent({
  __name: "Search",
  props: {
    parsedSpec: {},
    modalState: {}
  },
  setup(t12) {
    return (e14, c24) => (openBlock(), createBlock(f14, {
      modalState: e14.modalState,
      parsedSpec: e14.parsedSpec
    }, null, 8, ["modalState", "parsedSpec"]));
  }
});

// node_modules/@scalar/api-reference/dist/features/Search/SearchButton.vue2.js
var H9 = (o11) => (pushScopeId("data-v-f812b614"), o11 = o11(), popScopeId(), o11);
var I7 = { class: "sidebar-search-input" };
var $10 = H9(() => createBaseVNode("span", { class: "sidebar-search-placeholder" }, "Search", -1));
var E7 = { class: "sidebar-search-shortcut" };
var z7 = { class: "sidebar-search-key" };
var j6 = defineComponent({
  __name: "SearchButton",
  props: {
    spec: {},
    searchHotKey: { default: "k" }
  },
  setup(o11) {
    const c24 = o11, s19 = B(), n15 = ref(null), d17 = useMagicKeys({
      passive: false,
      onEventFired(e14) {
        !t() && e14.ctrlKey && e14.key === c24.searchHotKey && (e14.preventDefault(), e14.stopPropagation());
      }
    });
    return onMounted(() => {
      a.on((e14) => {
        n15.value = e14;
      });
    }), whenever(
      d17[`${t() ? "meta" : "control"}_${c24.searchHotKey}`],
      () => {
        var e14;
        (e14 = n15.value) != null && e14.open || (s19.open ? s19.hide() : s19.show());
      }
    ), (e14, p20) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("button", {
        class: normalizeClass(["sidebar-search", e14.$attrs.class]),
        type: "button",
        onClick: p20[0] || (p20[0] = //@ts-ignore
        (...h10) => unref(s19).show && unref(s19).show(...h10))
      }, [
        createVNode(unref(m2), {
          class: "search-icon",
          icon: "Search",
          size: "sm",
          thickness: "2.5"
        }),
        createBaseVNode("div", I7, [
          $10,
          createBaseVNode("span", E7, [
            createBaseVNode("span", z7, toDisplayString(unref(t)() ? "⌘" : "⌃") + toDisplayString(e14.searchHotKey), 1)
          ])
        ])
      ], 2),
      createVNode(l13, {
        modalState: unref(s19),
        parsedSpec: e14.spec
      }, null, 8, ["modalState", "parsedSpec"])
    ], 64));
  }
});

// node_modules/@scalar/api-reference/dist/features/Search/SearchButton.vue.js
var m27 = s4(j6, [["__scopeId", "data-v-f812b614"]]);

// node_modules/@scalar/api-reference/dist/components/Layouts/ClassicLayout.vue.js
var N5 = defineComponent({
  __name: "ClassicLayout",
  props: {
    configuration: {},
    parsedSpec: {},
    rawSpec: {},
    isDark: { type: Boolean }
  },
  emits: ["toggleDarkMode", "updateContent"],
  setup(c24) {
    const n15 = c24, u12 = useSlots(), s19 = computed(() => ({ ...n15.configuration, showSidebar: false }));
    return (e14, o11) => (openBlock(), createBlock(m26, {
      configuration: s19.value,
      parsedSpec: e14.parsedSpec,
      rawSpec: e14.rawSpec,
      onUpdateContent: o11[1] || (o11[1] = (r16) => e14.$emit("updateContent", r16))
    }, createSlots({
      "content-start": withCtx(({ spec: r16 }) => [
        createVNode(u9, null, {
          "dark-mode-toggle": withCtx(() => [
            n15.configuration.hideDarkModeToggle ? createCommentVNode("", true) : (openBlock(), createBlock(unref(e12), {
              key: 0,
              isDarkMode: e14.isDark,
              onToggleDarkMode: o11[0] || (o11[0] = (a23) => e14.$emit("toggleDarkMode"))
            }, null, 8, ["isDarkMode"]))
          ]),
          default: withCtx(() => [
            createVNode(unref(m27), {
              class: "t-doc__sidebar",
              searchHotKey: s19.value.searchHotKey,
              spec: r16
            }, null, 8, ["searchHotKey", "spec"])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 2
    }, [
      renderList(u12, (r16, a23) => ({
        name: a23,
        fn: withCtx((m29) => [
          renderSlot(e14.$slots, a23, normalizeProps(guardReactiveProps(m29 || {})))
        ])
      }))
    ]), 1032, ["configuration", "parsedSpec", "rawSpec"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/MobileHeader.vue2.js
var u11 = { class: "references-mobile-header t-doc__header" };
var b13 = { class: "references-mobile-breadcrumbs" };
var f15 = { class: "references-mobile-header-actions" };
var M10 = defineComponent({
  __name: "MobileHeader",
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(_11) {
    const { breadcrumb: s19 } = Ie2();
    return (e14, o11) => (openBlock(), createElementBlock("div", u11, [
      createVNode(unref(D), {
        icon: e14.open ? "Close" : "Menu",
        label: e14.open ? "Close Menu" : "Open Menu",
        size: "md",
        onClick: o11[0] || (o11[0] = (h10) => e14.$emit("update:open", !e14.open))
      }, null, 8, ["icon", "label"]),
      createBaseVNode("span", b13, toDisplayString(unref(s19)), 1),
      createBaseVNode("div", f15, [
        renderSlot(e14.$slots, "actions", {}, void 0, true)
      ])
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/components/MobileHeader.vue.js
var f16 = s4(M10, [["__scopeId", "data-v-b5fb4b8b"]]);

// node_modules/@scalar/api-reference/dist/components/DarkModeToggle/DarkModeToggle.vue2.js
var k9 = (e14) => (pushScopeId("data-v-bfb18750"), e14 = e14(), popScopeId(), e14);
var m28 = { class: "darklight-reference" };
var g6 = { key: 0 };
var _10 = { key: 1 };
var h9 = k9(() => createBaseVNode("a", {
  class: "darklight-reference-promo",
  href: "https://www.scalar.com",
  target: "_blank"
}, " Powered by scalar.com ", -1));
var D10 = defineComponent({
  __name: "DarkModeToggle",
  props: {
    isDarkMode: { type: Boolean }
  },
  emits: ["toggleDarkMode"],
  setup(e14) {
    return (r16, a23) => (openBlock(), createElementBlock("div", m28, [
      createBaseVNode("button", {
        class: "darklight",
        type: "button",
        onClick: a23[0] || (a23[0] = (f18) => r16.$emit("toggleDarkMode"))
      }, [
        createVNode(unref(m2), {
          icon: "LightDarkModeToggle",
          size: "md"
        }),
        r16.isDarkMode ? (openBlock(), createElementBlock("span", g6, "Light Mode")) : (openBlock(), createElementBlock("span", _10, "Dark Mode"))
      ]),
      h9
    ]));
  }
});

// node_modules/@scalar/api-reference/dist/components/DarkModeToggle/DarkModeToggle.vue.js
var f17 = s4(D10, [["__scopeId", "data-v-bfb18750"]]);

// node_modules/@scalar/api-reference/dist/components/Layouts/ModernLayout.vue2.js
var z8 = { class: "scalar-api-references-standalone-search" };
var F7 = defineComponent({
  __name: "ModernLayout",
  props: {
    configuration: {},
    parsedSpec: {},
    rawSpec: {},
    isDark: { type: Boolean }
  },
  emits: ["toggleDarkMode", "updateContent"],
  setup(c24) {
    const s19 = c24, f18 = useSlots(), m29 = useMediaQuery("(max-width: 1000px)"), { isSidebarOpen: a23 } = Ie2();
    watch(m29, (e14, o11) => {
      e14 && !o11 && (a23.value = false);
    });
    const { hash: g7 } = $2();
    return watch(g7, (e14, o11) => {
      e14 && e14 !== o11 && (a23.value = false);
    }), (e14, o11) => (openBlock(), createBlock(m26, {
      class: normalizeClass({
        "scalar-api-references-standalone-mobile": e14.configuration.showSidebar
      }),
      configuration: e14.configuration,
      parsedSpec: e14.parsedSpec,
      rawSpec: e14.rawSpec,
      onUpdateContent: o11[2] || (o11[2] = (r16) => e14.$emit("updateContent", r16))
    }, createSlots({
      header: withCtx(() => [
        s19.configuration.showSidebar ? (openBlock(), createBlock(f16, {
          key: 0,
          open: unref(a23),
          "onUpdate:open": o11[0] || (o11[0] = (r16) => isRef(a23) ? a23.value = r16 : null)
        }, null, 8, ["open"])) : createCommentVNode("", true)
      ]),
      "sidebar-start": withCtx(({ spec: r16 }) => {
        var t12;
        return [
          createBaseVNode("div", z8, [
            createVNode(unref(m27), {
              searchHotKey: (t12 = s19.configuration) == null ? void 0 : t12.searchHotKey,
              spec: r16
            }, null, 8, ["searchHotKey", "spec"])
          ])
        ];
      }),
      "sidebar-end": withCtx(() => [
        s19.configuration.hideDarkModeToggle ? createCommentVNode("", true) : (openBlock(), createBlock(unref(f17), {
          key: 0,
          isDarkMode: e14.isDark,
          onToggleDarkMode: o11[1] || (o11[1] = (r16) => e14.$emit("toggleDarkMode"))
        }, null, 8, ["isDarkMode"]))
      ]),
      _: 2
    }, [
      renderList(f18, (r16, t12) => ({
        name: t12,
        fn: withCtx((S12) => [
          renderSlot(e14.$slots, t12, normalizeProps(guardReactiveProps(S12 || {})), void 0, true)
        ])
      }))
    ]), 1032, ["class", "configuration", "parsedSpec", "rawSpec"]));
  }
});

// node_modules/@scalar/api-reference/dist/components/Layouts/ModernLayout.vue.js
var a21 = s4(F7, [["__scopeId", "data-v-9fe2e3b4"]]);

// node_modules/@scalar/api-reference/dist/components/Layouts/Layouts.vue.js
var P10 = defineComponent({
  __name: "Layouts",
  props: {
    configuration: {},
    parsedSpec: {},
    rawSpec: {},
    isDark: { type: Boolean }
  },
  emits: ["toggleDarkMode", "updateContent"],
  setup(s19) {
    const a23 = s19, p20 = useSlots(), i24 = {
      modern: a21,
      classic: N5
    };
    return (o11, e14) => (openBlock(), createBlock(resolveDynamicComponent(i24[o11.configuration.layout ?? "modern"] ?? a21), mergeProps(a23, {
      onToggleDarkMode: e14[0] || (e14[0] = (t12) => o11.$emit("toggleDarkMode")),
      onUpdateContent: e14[1] || (e14[1] = (t12) => o11.$emit("updateContent", t12))
    }), createSlots({ _: 2 }, [
      renderList(p20, (t12, r16) => ({
        name: r16,
        fn: withCtx((m29) => [
          renderSlot(o11.$slots, r16, normalizeProps(guardReactiveProps(m29 || {})))
        ])
      }))
    ]), 1040));
  }
});

// node_modules/@scalar/api-reference/dist/components/ApiReference.vue.js
var W4 = defineComponent({
  __name: "ApiReference",
  props: {
    configuration: {}
  },
  emits: ["updateContent"],
  setup(k10) {
    var m29, l14, d17;
    const r16 = k10, { toggleDarkMode: p20, isDark: f18 } = c(
      (m29 = r16.configuration) == null ? void 0 : m29.darkMode,
      (l14 = r16.configuration) == null ? void 0 : l14.forceDarkModeState
    );
    watch(
      () => {
        var e14;
        return (e14 = r16.configuration) == null ? void 0 : e14.darkMode;
      },
      (e14) => {
        e14 !== f18.value && p20();
      }
    );
    const i24 = computed(() => {
      var e14, t12;
      if ((e14 = r16.configuration) != null && e14.customCss)
        return o((t12 = r16.configuration) == null ? void 0 : t12.customCss);
    });
    watch(i24, () => console.log(i24.value));
    const o11 = computed(() => {
      var e14;
      return {
        spec: {
          content: void 0,
          url: void 0,
          ...(e14 = r16.configuration) == null ? void 0 : e14.spec
        },
        proxy: void 0,
        theme: "default",
        showSidebar: true,
        isEditable: false,
        ...r16.configuration,
        customCss: i24.value
      };
    });
    (d17 = o11.value) != null && d17.metaData && useSeoMeta(o11.value.metaData);
    function s19(e14, t12) {
      watch(
        () => {
          var n15;
          return (n15 = o11.value) == null ? void 0 : n15[e14];
        },
        (n15) => {
          typeof n15 < "u" && t12(n15);
        },
        { immediate: true }
      );
    }
    const { setAuthentication: D11 } = i5();
    s19("authentication", D11);
    const { setExcludedClients: y9, setDefaultHttpClient: M11 } = _6();
    s19("defaultHttpClient", M11), s19("hiddenClients", y9);
    const { parsedSpec: h10, rawSpec: w8 } = C2({
      proxy: toRef(() => o11.value.proxy || ""),
      specConfig: toRef(() => o11.value.spec || {})
    });
    return (e14, t12) => {
      var n15;
      return openBlock(), createElementBlock(Fragment, null, [
        (n15 = o11.value) != null && n15.customCss ? (openBlock(), createBlock(resolveDynamicComponent("style"), { key: 0 }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(o11.value.customCss), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(unref(P10), {
          configuration: o11.value,
          isDark: unref(f18),
          parsedSpec: unref(h10),
          rawSpec: unref(w8),
          onToggleDarkMode: t12[0] || (t12[0] = () => unref(p20)()),
          onUpdateContent: t12[1] || (t12[1] = (x7) => e14.$emit("updateContent", x7))
        }, {
          footer: withCtx(() => [
            renderSlot(e14.$slots, "footer")
          ]),
          "content-end": withCtx(() => [
            renderSlot(e14.$slots, "footer")
          ]),
          _: 3
        }, 8, ["configuration", "isDark", "parsedSpec", "rawSpec"])
      ], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/esm.js
function j7(n15, c24, a23 = true) {
  const t12 = reactive(c24), r16 = createApp(W4, { configuration: t12 }), i24 = createHead2();
  r16.use(i24);
  function o11(e14 = n15) {
    if (!e14) {
      console.warn(
        "Invalid HTML element provided. Cannot mount Scalar References"
      );
      return;
    }
    r16.mount(e14);
  }
  return a23 && o11(), {
    /** Update the configuration for a mounted reference */
    updateConfig(e14, u12 = true) {
      u12 ? Object.assign(t12, e14) : objectMerge(t12, e14);
    },
    updateSpec(e14) {
      t12.spec = e14;
    },
    /** Mount the references to a given element */
    mount: o11,
    /** Unmount the app from an element */
    unmount: () => r16.unmount()
  };
}

// node_modules/@scalar/api-reference/dist/helpers/getVariableNames.js
function n14(r16) {
  const t12 = /{{?\s*([\w.-]+)\s*}}?/g, s19 = r16 == null ? void 0 : r16.matchAll(t12);
  return Array.from(s19 ?? [], (c24) => c24[1]);
}

// node_modules/@scalar/api-reference/dist/helpers/mapFromObject.js
var a22 = (t12, e14) => Object.keys(t12).map((r16) => ({
  [e14 ?? r16]: r16,
  value: t12[r16]
}));

// node_modules/@scalar/api-reference/dist/helpers/mergeAllObjects.js
var c23 = (e14) => e14.reduce((r16, t12) => ({
  ...r16,
  ...t12
}), {});

// node_modules/@scalar/api-reference/dist/hooks/useClientStore.js
var e13 = () => {
};

// node_modules/@scalar/api-reference/dist/hooks/useRefOnMount.js
function r15(e14) {
  const n15 = ref(null);
  return onMounted(() => {
    n15.value = e14();
  }), n15;
}

// node_modules/@scalar/api-reference/dist/index.js
(function() {
  try {
    if (typeof document === "undefined" || document.getElementById("scalar-style-api-reference"))
      return;
    setTimeout(() => {
      if (getComputedStyle(document.body).getPropertyValue("--scalar-loaded-api-reference") === "true")
        return;
      const elementStyle = document.createElement("style");
      elementStyle.setAttribute("id", "scalar-style-api-reference");
      elementStyle.appendChild(document.createTextNode(`.workspace-avatar{align-items:center;background:var(--scalar-background-1);border:1px solid var(--scalar-border-color);border-radius:8px;display:flex;justify-content:center;transition:border .2s;aspect-ratio:1;width:100%;min-height:37px;max-width:42px}.dark-mode .workspace-avatar{--gradient-color-1: color-mix( in srgb, var(--scalar-brand) 30%, var(--scalar-background-1) );--gradient-color-2: color-mix( in srgb, var(--scalar-brand) 20%, var(--scalar-background-1) )}.workspace-avatar:hover{border:1px solid #00000033}.workspace-avatar-image{top:0;right:0;bottom:0;left:0;position:absolute;aspect-ratio:1 / 1;background-size:cover;background-position:center;z-index:1}.shine-effect{overflow:hidden;position:relative}.shine-effect:before{background-color:#fff3;content:"";filter:blur(2px);height:150%;left:-100%;position:absolute;transform:rotate(30deg);width:16px}.dark-mode .shine-effect:before{background-color:#0003;content:"";filter:blur(2px);height:150%;left:-100%;position:absolute;transform:rotate(30deg);width:16px}.shine-effect:hover:before{left:100%;transition:left 1s ease}.scalar-sidenav[data-v-ed782b2b]{width:52px}.drag-region[data-v-ed782b2b]{-webkit-app-region:drag}.no-drag-region[data-v-ed782b2b]{-webkit-app-region:no-drag}.nav-item[data-v-ffc99777]{padding:0 1rem;cursor:pointer;flex:1;justify-content:center;align-items:center;display:flex;border-radius:var(--scalar-radius);background:var(--scalar-background-3);border:var(--scalar-border-width) solid var(--scalar-background-2);color:var(--scalar-color-3);padding:4.5px;min-width:0;overflow:hidden;position:relative}.dark-mode .nav-item[data-v-ffc99777]{background:color-mix(in srgb,var(--scalar-background-2),transparent)}.nav-item-icon-copy[data-v-ffc99777]{max-width:100%;white-space:nowrap;overflow:hidden;-webkit-mask-image:linear-gradient(to left,transparent 0,var(--scalar-background-2) 20px);mask-image:linear-gradient(to left,transparent 0,var(--scalar-background-2) 20px)}.nav-item:hover .nav-item-icon-copy[data-v-ffc99777]{-webkit-mask-image:linear-gradient(to left,transparent 20px,var(--scalar-background-2) 40px);mask-image:linear-gradient(to left,transparent 20px,var(--scalar-background-2) 40px)}.nav-item-copy[data-v-ffc99777]{max-width:calc(100% - 20px)}.nav-item[data-v-ffc99777]:hover{color:var(--scalar-color-1)}.nav-item__active[data-v-ffc99777]{background-color:var(--scalar-background-1);color:var(--scalar-color-1);border-color:var(--scalar-border-color)}.dark-mode .nav-item__active[data-v-ffc99777]{background-color:var(--scalar-background-2)}.nav-item-close[data-v-ffc99777]{position:absolute;right:3px;padding:2px;border-radius:var(--scalar-radius);background:transparent;max-width:20px;stroke-width:1.5px;color:var(--scalar-color-3);margin-left:-20px;opacity:0}.nav-item:hover .nav-item-close[data-v-ffc99777]{opacity:1}.nav-item-close[data-v-ffc99777]:hover{background-color:var(--scalar-background-4)}.nav-item__active .nav-item-close[data-v-ffc99777]:hover{background-color:var(--scalar-background-2)}.webkit-app-no-drag[data-v-ffc99777]{-webkit-app-region:no-drag}.t-app__top-nav[data-v-91b3e5a4]{padding-left:52px;padding-right:9px;position:relative}.t-app__top-nav-draggable[data-v-91b3e5a4]{-webkit-app-region:drag;position:absolute;top:0;left:0;width:100%;height:100%}.webkit-app-no-drag[data-v-91b3e5a4]{-webkit-app-region:no-drag}.http-bg-gradient[data-v-5fe98831]{background:linear-gradient(#ffffffbf,#00000009)}.http-bg-gradient[data-v-5fe98831]:hover{background:linear-gradient(#00000009,#ffffffbf)}.dark-mode .http-bg-gradient[data-v-5fe98831]{background:linear-gradient(#ffffff09,#00000026)}.dark-mode .http-bg-gradient[data-v-5fe98831]:hover{background:linear-gradient(#00000026,#ffffff09)}.commandmenu[data-v-3597a300]{box-shadow:var(--scalar-shadow-2);border-radius:var(--scalar-radius-lg);background-color:var(--scalar-background-1);width:100%;max-width:580px;padding:12px;margin:12px;position:fixed;left:50%;top:150px;opacity:0;transform:translate3d(-50%,10px,0);z-index:100;animation:fadeincommandmenu-3597a300 ease-in-out .3s forwards;animation-delay:.1s}.commandmenu-clickout[data-v-3597a300]{background:#0003;animation:fadeincommand-3597a300 ease-in-out .3s forwards;position:fixed;top:0;left:0;width:100%;height:100%;z-index:100;cursor:pointer}@keyframes fadeincommand-3597a300{0%{opacity:0}to{opacity:1}}@keyframes fadeincommandmenu-3597a300{0%{opacity:0;transform:translate3d(-50%,10px,0)}to{opacity:1;transform:translate3d(-50%,0,0)}}@layer scalar-base,scalar-theme;@layer scalar-base{body{margin:0;line-height:inherit}}@layer scalar-base{:root{--scalar-border-width: .5px;--scalar-radius: 3px;--scalar-radius-lg: 6px;--scalar-radius-xl: 8px;--scalar-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;--scalar-font-code: "JetBrains Mono", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;--scalar-heading-1: 40px;--scalar-page-description: 24px;--scalar-heading-2: 24px;--scalar-heading-3: 20px;--scalar-heading-4: 16px;--scalar-heading-5: 16px;--scalar-heading-6: 16px;--scalar-paragraph: 16px;--scalar-small: 14px;--scalar-mini: 13px;--scalar-micro: 12px;--scalar-bold: 600;--scalar-semibold: 500;--scalar-regular: 400;--scalar-font-size-1: 24px;--scalar-font-size-2: 16px;--scalar-font-size-3: 14px;--scalar-font-size-4: 13px;--scalar-font-size-5: 12px;--scalar-font-size-6: 12px;--scalar-font-size-7: 10px;--scalar-line-height-1: 32px;--scalar-line-height-2: 24px;--scalar-line-height-3: 20px;--scalar-line-height-4: 18px;--scalar-line-height-5: 16px;--scalar-font-medium: 500;--scalar-font-bold: 700;--scalar-text-decoration: none;--scalar-text-decoration-hover: underline}.dark-mode{color-scheme:dark;--scalar-scrollbar-color: rgba(255, 255, 255, .18);--scalar-scrollbar-color-active: rgba(255, 255, 255, .36);--scalar-button-1: rgba(255, 255, 255, 1);--scalar-button-1-hover: rgba(255, 255, 255, .9);--scalar-button-1-color: black;--scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, .1);--scalar-shadow-2: rgba(15, 15, 15, .2) 0px 3px 6px, rgba(15, 15, 15, .4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, .1);--scalar-lifted-brightness: 1.45;--scalar-backdrop-brightness: .5;--scalar-sidebar-indent-border: transparent;--scalar-sidebar-indent-border-hover: transparent;--scalar-sidebar-indent-border-active: transparent}.light-mode{color-scheme:light;--scalar-scrollbar-color-active: rgba(0, 0, 0, .36);--scalar-scrollbar-color: rgba(0, 0, 0, .18);--scalar-button-1: rgba(0, 0, 0, 1);--scalar-button-1-hover: rgba(0, 0, 0, .8);--scalar-button-1-color: rgba(255, 255, 255, .9);--scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, .11);--scalar-shadow-2: rgba(0, 0, 0, .08) 0px 13px 20px 0px, rgba(0, 0, 0, .08) 0px 3px 8px 0px, #eeeeed 0px 0 0 .5px;--scalar-lifted-brightness: 1;--scalar-backdrop-brightness: 1;--scalar-sidebar-indent-border: transparent;--scalar-sidebar-indent-border-hover: transparent;--scalar-sidebar-indent-border-active: transparent}.light-mode .dark-mode{color-scheme:dark!important}@media (max-width: 460px){:root{--scalar-font-size-1: 22px;--scalar-font-size-2: 14px;--scalar-font-size-3: 12px}}@media (max-width: 720px){:root{--scalar-heading-1: 24px;--scalar-page-description: 20px}}.light-mode{--scalar-background-1: #fff;--scalar-background-2: #f6f6f6;--scalar-background-3: #e7e7e7;--scalar-background-accent: #8ab4f81f;--scalar-color-1: #2a2f45;--scalar-color-2: #757575;--scalar-color-3: #8e8e8e;--scalar-color-accent: #0099ff;--scalar-border-color: rgba(0, 0, 0, .1)}.dark-mode{--scalar-background-1: #0f0f0f;--scalar-background-2: #1a1a1a;--scalar-background-3: #272727;--scalar-color-1: rgba(255, 255, 255, .9);--scalar-color-2: rgba(255, 255, 255, .62);--scalar-color-3: rgba(255, 255, 255, .44);--scalar-color-accent: #3ea6ff;--scalar-background-accent: #3ea6ff1f;--scalar-border-color: rgba(255, 255, 255, .1)}.light-mode .t-doc__sidebar,.dark-mode .t-doc__sidebar{--scalar-sidebar-background-1: var(--scalar-background-1);--scalar-sidebar-color-1: var(--scalar-color-1);--scalar-sidebar-color-2: var(--scalar-color-2);--scalar-sidebar-border-color: var(--scalar-border-color);--scalar-sidebar-item-hover-background: var(--scalar-background-2);--scalar-sidebar-item-hover-color: currentColor;--scalar-sidebar-item-active-background: var(--scalar-background-2);--scalar-sidebar-color-active: var(--scalar-color-1);--scalar-sidebar-search-background: transparent;--scalar-sidebar-search-color: var(--scalar-color-3);--scalar-sidebar-search-border-color: var(--scalar-border-color)}.light-mode{--scalar-color-green: #069061;--scalar-color-red: #ef0006;--scalar-color-yellow: #edbe20;--scalar-color-blue: #0082d0;--scalar-color-orange: #fb892c;--scalar-color-purple: #5203d1;--scalar-button-1: rgba(0, 0, 0, 1);--scalar-button-1-hover: rgba(0, 0, 0, .8);--scalar-button-1-color: rgba(255, 255, 255, .9)}.dark-mode{--scalar-color-green: #00b648;--scalar-color-red: #dc1b19;--scalar-color-yellow: #ffc90d;--scalar-color-blue: #4eb3ec;--scalar-color-orange: #ff8d4d;--scalar-color-purple: #b191f9;--scalar-button-1: rgba(255, 255, 255, 1);--scalar-button-1-hover: rgba(255, 255, 255, .9);--scalar-button-1-color: black}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }}.scalar-app .markdown summary:after{display:block;content:"";position:absolute;top:1px;left:1px;width:16px;height:16px;background-color:var(--scalar-color-3);-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 19.5L15.75 12L8.25 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 19.5L15.75 12L8.25 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')}@layer scalar-base,scalar-theme;@layer scalar-base{body{margin:0;line-height:inherit}}@layer scalar-base{:root{--scalar-border-width: .5px;--scalar-radius: 3px;--scalar-radius-lg: 6px;--scalar-radius-xl: 8px;--scalar-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;--scalar-font-code: "JetBrains Mono", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;--scalar-heading-1: 40px;--scalar-page-description: 24px;--scalar-heading-2: 24px;--scalar-heading-3: 20px;--scalar-heading-4: 16px;--scalar-heading-5: 16px;--scalar-heading-6: 16px;--scalar-paragraph: 16px;--scalar-small: 14px;--scalar-mini: 13px;--scalar-micro: 12px;--scalar-bold: 600;--scalar-semibold: 500;--scalar-regular: 400;--scalar-font-size-1: 24px;--scalar-font-size-2: 16px;--scalar-font-size-3: 14px;--scalar-font-size-4: 13px;--scalar-font-size-5: 12px;--scalar-font-size-6: 12px;--scalar-font-size-7: 10px;--scalar-line-height-1: 32px;--scalar-line-height-2: 24px;--scalar-line-height-3: 20px;--scalar-line-height-4: 18px;--scalar-line-height-5: 16px;--scalar-font-medium: 500;--scalar-font-bold: 700;--scalar-text-decoration: none;--scalar-text-decoration-hover: underline}.dark-mode{color-scheme:dark;--scalar-scrollbar-color: rgba(255, 255, 255, .18);--scalar-scrollbar-color-active: rgba(255, 255, 255, .36);--scalar-button-1: rgba(255, 255, 255, 1);--scalar-button-1-hover: rgba(255, 255, 255, .9);--scalar-button-1-color: black;--scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, .1);--scalar-shadow-2: rgba(15, 15, 15, .2) 0px 3px 6px, rgba(15, 15, 15, .4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, .1);--scalar-lifted-brightness: 1.45;--scalar-backdrop-brightness: .5;--scalar-sidebar-indent-border: transparent;--scalar-sidebar-indent-border-hover: transparent;--scalar-sidebar-indent-border-active: transparent}.light-mode{color-scheme:light;--scalar-scrollbar-color-active: rgba(0, 0, 0, .36);--scalar-scrollbar-color: rgba(0, 0, 0, .18);--scalar-button-1: rgba(0, 0, 0, 1);--scalar-button-1-hover: rgba(0, 0, 0, .8);--scalar-button-1-color: rgba(255, 255, 255, .9);--scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, .11);--scalar-shadow-2: rgba(0, 0, 0, .08) 0px 13px 20px 0px, rgba(0, 0, 0, .08) 0px 3px 8px 0px, #eeeeed 0px 0 0 .5px;--scalar-lifted-brightness: 1;--scalar-backdrop-brightness: 1;--scalar-sidebar-indent-border: transparent;--scalar-sidebar-indent-border-hover: transparent;--scalar-sidebar-indent-border-active: transparent}.light-mode .dark-mode{color-scheme:dark!important}@media (max-width: 460px){:root{--scalar-font-size-1: 22px;--scalar-font-size-2: 14px;--scalar-font-size-3: 12px}}@media (max-width: 720px){:root{--scalar-heading-1: 24px;--scalar-page-description: 20px}}.light-mode{--scalar-background-1: #fff;--scalar-background-2: #f6f6f6;--scalar-background-3: #e7e7e7;--scalar-background-accent: #8ab4f81f;--scalar-color-1: #2a2f45;--scalar-color-2: #757575;--scalar-color-3: #8e8e8e;--scalar-color-accent: #0099ff;--scalar-border-color: rgba(0, 0, 0, .1)}.dark-mode{--scalar-background-1: #0f0f0f;--scalar-background-2: #1a1a1a;--scalar-background-3: #272727;--scalar-color-1: rgba(255, 255, 255, .9);--scalar-color-2: rgba(255, 255, 255, .62);--scalar-color-3: rgba(255, 255, 255, .44);--scalar-color-accent: #3ea6ff;--scalar-background-accent: #3ea6ff1f;--scalar-border-color: rgba(255, 255, 255, .1)}.light-mode .t-doc__sidebar,.dark-mode .t-doc__sidebar{--scalar-sidebar-background-1: var(--scalar-background-1);--scalar-sidebar-color-1: var(--scalar-color-1);--scalar-sidebar-color-2: var(--scalar-color-2);--scalar-sidebar-border-color: var(--scalar-border-color);--scalar-sidebar-item-hover-background: var(--scalar-background-2);--scalar-sidebar-item-hover-color: currentColor;--scalar-sidebar-item-active-background: var(--scalar-background-2);--scalar-sidebar-color-active: var(--scalar-color-1);--scalar-sidebar-search-background: transparent;--scalar-sidebar-search-color: var(--scalar-color-3);--scalar-sidebar-search-border-color: var(--scalar-border-color)}.light-mode{--scalar-color-green: #069061;--scalar-color-red: #ef0006;--scalar-color-yellow: #edbe20;--scalar-color-blue: #0082d0;--scalar-color-orange: #fb892c;--scalar-color-purple: #5203d1;--scalar-button-1: rgba(0, 0, 0, 1);--scalar-button-1-hover: rgba(0, 0, 0, .8);--scalar-button-1-color: rgba(255, 255, 255, .9)}.dark-mode{--scalar-color-green: #00b648;--scalar-color-red: #dc1b19;--scalar-color-yellow: #ffc90d;--scalar-color-blue: #4eb3ec;--scalar-color-orange: #ff8d4d;--scalar-color-purple: #b191f9;--scalar-button-1: rgba(255, 255, 255, 1);--scalar-button-1-hover: rgba(255, 255, 255, .9);--scalar-button-1-color: black}*,:before,:after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }}#scalar-client{display:flex;flex-direction:column;height:100vh;width:100vw;position:relative;background-color:var(--scalar-background-2)}.dark-mode #scalar-client{background-color:color-mix(in srgb,var(--scalar-background-1) 30%,black)}@layer scalar-base,scalar-theme;@layer scalar-base{body{margin:0;line-height:inherit}}@layer scalar-base{:root{--scalar-border-width: .5px;--scalar-radius: 3px;--scalar-radius-lg: 6px;--scalar-radius-xl: 8px;--scalar-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;--scalar-font-code: "JetBrains Mono", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;--scalar-heading-1: 40px;--scalar-page-description: 24px;--scalar-heading-2: 24px;--scalar-heading-3: 20px;--scalar-heading-4: 16px;--scalar-heading-5: 16px;--scalar-heading-6: 16px;--scalar-paragraph: 16px;--scalar-small: 14px;--scalar-mini: 13px;--scalar-micro: 12px;--scalar-bold: 600;--scalar-semibold: 500;--scalar-regular: 400;--scalar-font-size-1: 24px;--scalar-font-size-2: 16px;--scalar-font-size-3: 14px;--scalar-font-size-4: 13px;--scalar-font-size-5: 12px;--scalar-font-size-6: 12px;--scalar-font-size-7: 10px;--scalar-line-height-1: 32px;--scalar-line-height-2: 24px;--scalar-line-height-3: 20px;--scalar-line-height-4: 18px;--scalar-line-height-5: 16px;--scalar-font-medium: 500;--scalar-font-bold: 700;--scalar-text-decoration: none;--scalar-text-decoration-hover: underline}.dark-mode{color-scheme:dark;--scalar-scrollbar-color: rgba(255, 255, 255, .18);--scalar-scrollbar-color-active: rgba(255, 255, 255, .36);--scalar-button-1: rgba(255, 255, 255, 1);--scalar-button-1-hover: rgba(255, 255, 255, .9);--scalar-button-1-color: black;--scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, .1);--scalar-shadow-2: rgba(15, 15, 15, .2) 0px 3px 6px, rgba(15, 15, 15, .4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, .1);--scalar-lifted-brightness: 1.45;--scalar-backdrop-brightness: .5;--scalar-sidebar-indent-border: transparent;--scalar-sidebar-indent-border-hover: transparent;--scalar-sidebar-indent-border-active: transparent}.light-mode{color-scheme:light;--scalar-scrollbar-color-active: rgba(0, 0, 0, .36);--scalar-scrollbar-color: rgba(0, 0, 0, .18);--scalar-button-1: rgba(0, 0, 0, 1);--scalar-button-1-hover: rgba(0, 0, 0, .8);--scalar-button-1-color: rgba(255, 255, 255, .9);--scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, .11);--scalar-shadow-2: rgba(0, 0, 0, .08) 0px 13px 20px 0px, rgba(0, 0, 0, .08) 0px 3px 8px 0px, #eeeeed 0px 0 0 .5px;--scalar-lifted-brightness: 1;--scalar-backdrop-brightness: 1;--scalar-sidebar-indent-border: transparent;--scalar-sidebar-indent-border-hover: transparent;--scalar-sidebar-indent-border-active: transparent}.light-mode .dark-mode{color-scheme:dark!important}@media (max-width: 460px){:root{--scalar-font-size-1: 22px;--scalar-font-size-2: 14px;--scalar-font-size-3: 12px}}@media (max-width: 720px){:root{--scalar-heading-1: 24px;--scalar-page-description: 20px}}.light-mode{--scalar-background-1: #fff;--scalar-background-2: #f6f6f6;--scalar-background-3: #e7e7e7;--scalar-background-accent: #8ab4f81f;--scalar-color-1: #2a2f45;--scalar-color-2: #757575;--scalar-color-3: #8e8e8e;--scalar-color-accent: #0099ff;--scalar-border-color: rgba(0, 0, 0, .1)}.dark-mode{--scalar-background-1: #0f0f0f;--scalar-background-2: #1a1a1a;--scalar-background-3: #272727;--scalar-color-1: rgba(255, 255, 255, .9);--scalar-color-2: rgba(255, 255, 255, .62);--scalar-color-3: rgba(255, 255, 255, .44);--scalar-color-accent: #3ea6ff;--scalar-background-accent: #3ea6ff1f;--scalar-border-color: rgba(255, 255, 255, .1)}.light-mode .t-doc__sidebar,.dark-mode .t-doc__sidebar{--scalar-sidebar-background-1: var(--scalar-background-1);--scalar-sidebar-color-1: var(--scalar-color-1);--scalar-sidebar-color-2: var(--scalar-color-2);--scalar-sidebar-border-color: var(--scalar-border-color);--scalar-sidebar-item-hover-background: var(--scalar-background-2);--scalar-sidebar-item-hover-color: currentColor;--scalar-sidebar-item-active-background: var(--scalar-background-2);--scalar-sidebar-color-active: var(--scalar-color-1);--scalar-sidebar-search-background: transparent;--scalar-sidebar-search-color: var(--scalar-color-3);--scalar-sidebar-search-border-color: var(--scalar-border-color)}.light-mode{--scalar-color-green: #069061;--scalar-color-red: #ef0006;--scalar-color-yellow: #edbe20;--scalar-color-blue: #0082d0;--scalar-color-orange: #fb892c;--scalar-color-purple: #5203d1;--scalar-button-1: rgba(0, 0, 0, 1);--scalar-button-1-hover: rgba(0, 0, 0, .8);--scalar-button-1-color: rgba(255, 255, 255, .9)}.dark-mode{--scalar-color-green: #00b648;--scalar-color-red: #dc1b19;--scalar-color-yellow: #ffc90d;--scalar-color-blue: #4eb3ec;--scalar-color-orange: #ff8d4d;--scalar-color-purple: #b191f9;--scalar-button-1: rgba(255, 255, 255, 1);--scalar-button-1-hover: rgba(255, 255, 255, .9);--scalar-button-1-color: black}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }}:where(.scalar-app) .group:hover .group-hover\\:shadow-border{--tw-shadow: inset 0 0 0 1px var(--scalar-border-color);--tw-shadow-colored: inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-shadow-color: var(--scalar-border-color);--tw-shadow: var(--tw-shadow-colored)}.scalar-app .markdown summary:after{display:block;content:"";position:absolute;top:1px;left:1px;width:16px;height:16px;background-color:var(--scalar-color-3);-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 19.5L15.75 12L8.25 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 19.5L15.75 12L8.25 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')}@layer scalar-base{*,:before,:after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }}.scalar-client{line-height:1.5;color:var(--scalar-color-1)}.scalar-client .row{display:flex;flex-direction:row}.scalar-client .row-1{display:flex;flex-direction:row;flex:1 1 0%}.scalar-client .col{display:flex;flex-direction:column}.scalar-client .col-1{display:flex;flex-direction:column;flex:1 1 0%}.scalar-client .flex-center{display:flex;justify-content:center;align-items:center}.scalar-client .centered-x{left:50%;--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .centered-y{top:50%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .centered{left:50%;--tw-translate-x: -50%;top:50%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.scalar-client .pointer-events-none{pointer-events:none}.scalar-client .pointer-events-auto{pointer-events:auto}.scalar-client .visible{visibility:visible}.scalar-client .\\!static{position:static!important}.scalar-client .static{position:static}.scalar-client .fixed{position:fixed}.scalar-client .absolute{position:absolute}.scalar-client .relative{position:relative}.scalar-client .sticky{position:sticky}.scalar-client .inset-0{top:0;right:0;bottom:0;left:0}.scalar-client .inset-y-2\\/4{top:50%;bottom:50%}.scalar-client .bottom-\\[42px\\]{bottom:42px}.scalar-client .left-0{left:0}.scalar-client .right-0{right:0}.scalar-client .right-1{right:4px}.scalar-client .right-2{right:8px}.scalar-client .right-4{right:16px}.scalar-client .right-7{right:28px}.scalar-client .top-0{top:0}.scalar-client .top-\\[0\\.5px\\]{top:.5px}.scalar-client .top-\\[33px\\]{top:33px}.scalar-client .z-0{z-index:0}.scalar-client .z-1{z-index:1}.scalar-client .z-10{z-index:10}.scalar-client .z-20{z-index:20}.scalar-client .z-50{z-index:50}.scalar-client .z-\\[1\\]{z-index:1}.scalar-client .order-last{order:9999}.scalar-client .col-span-full{grid-column:1 / -1}.scalar-client .\\!m-0{margin:0!important}.scalar-client .m-0{margin:0}.scalar-client .m-1{margin:4px}.scalar-client .m-1\\.5{margin:6px}.scalar-client .m-auto{margin:auto}.scalar-client .-my-1{margin-top:-4px;margin-bottom:-4px}.scalar-client .mx-0{margin-left:0;margin-right:0}.scalar-client .mx-1{margin-left:4px;margin-right:4px}.scalar-client .my-12{margin-top:48px;margin-bottom:48px}.scalar-client .\\!mb-0{margin-bottom:0!important}.scalar-client .\\!mr-0{margin-right:0!important}.scalar-client .mb-0{margin-bottom:0}.scalar-client .mb-0\\.5{margin-bottom:2px}.scalar-client .mb-1{margin-bottom:4px}.scalar-client .mb-1\\.5{margin-bottom:6px}.scalar-client .mb-2{margin-bottom:8px}.scalar-client .mb-2\\.5{margin-bottom:10px}.scalar-client .mb-\\[\\.5px\\]{margin-bottom:.5px}.scalar-client .ml-1{margin-left:4px}.scalar-client .ml-1\\.5{margin-left:6px}.scalar-client .ml-auto{margin-left:auto}.scalar-client .mr-1{margin-right:4px}.scalar-client .mr-1\\.5{margin-right:6px}.scalar-client .mr-2{margin-right:8px}.scalar-client .mr-2\\.5{margin-right:10px}.scalar-client .mt-1{margin-top:4px}.scalar-client .mt-2{margin-top:8px}.scalar-client .mt-3{margin-top:12px}.scalar-client .mt-3\\.5{margin-top:14px}.scalar-client .mt-auto{margin-top:auto}.scalar-client .block{display:block}.scalar-client .inline-block{display:inline-block}.scalar-client .flex{display:flex}.scalar-client .inline-flex{display:inline-flex}.scalar-client .table{display:table}.scalar-client .grid{display:grid}.scalar-client .contents{display:contents}.scalar-client .hidden{display:none}.scalar-client .aspect-\\[4\\/3\\]{aspect-ratio:4/3}.scalar-client .aspect-square{aspect-ratio:1 / 1}.scalar-client .size-2{width:8px;height:8px}.scalar-client .size-2\\.5{width:10px;height:10px}.scalar-client .size-3{width:12px;height:12px}.scalar-client .size-3\\.5{width:14px;height:14px}.scalar-client .size-4{width:16px;height:16px}.scalar-client .h-10{height:40px}.scalar-client .h-2{height:8px}.scalar-client .h-2\\.5{height:10px}.scalar-client .h-24{height:96px}.scalar-client .h-3{height:12px}.scalar-client .h-3\\.5{height:14px}.scalar-client .h-4{height:16px}.scalar-client .h-5{height:20px}.scalar-client .h-6{height:24px}.scalar-client .h-7{height:28px}.scalar-client .h-8{height:32px}.scalar-client .h-\\[calc\\(100\\%_-_50px\\)\\]{height:calc(100% - 50px)}.scalar-client .h-auto{height:auto}.scalar-client .h-fit{height:-moz-fit-content;height:fit-content}.scalar-client .h-full{height:100%}.scalar-client .max-h-40{max-height:160px}.scalar-client .max-h-8{max-height:32px}.scalar-client .max-h-\\[300px\\]{max-height:300px}.scalar-client .min-h-0{min-height:0px}.scalar-client .min-h-10{min-height:40px}.scalar-client .min-h-12{min-height:48px}.scalar-client .min-h-14{min-height:56px}.scalar-client .min-h-20{min-height:80px}.scalar-client .min-h-8{min-height:32px}.scalar-client .w-2{width:8px}.scalar-client .w-2\\.5{width:10px}.scalar-client .w-20{width:80px}.scalar-client .w-3{width:12px}.scalar-client .w-3\\.5{width:14px}.scalar-client .w-4{width:16px}.scalar-client .w-5{width:20px}.scalar-client .w-6{width:24px}.scalar-client .w-6\\/12{width:50%}.scalar-client .w-60{width:240px}.scalar-client .w-\\[15px\\]{width:15px}.scalar-client .w-\\[calc\\(100\\%_-_8px\\)\\]{width:calc(100% - 8px)}.scalar-client .w-fit{width:-moz-fit-content;width:fit-content}.scalar-client .w-full{width:100%}.scalar-client .w-max{width:-moz-max-content;width:max-content}.scalar-client .min-w-0{min-width:0px}.scalar-client .min-w-2{min-width:8px}.scalar-client .min-w-2\\.5{min-width:10px}.scalar-client .min-w-3{min-width:12px}.scalar-client .min-w-48{min-width:192px}.scalar-client .min-w-8{min-width:32px}.scalar-client .min-w-\\[120px\\]{min-width:120px}.scalar-client .min-w-\\[37px\\]{min-width:37px}.scalar-client .min-w-full{min-width:100%}.scalar-client .max-w-\\[100\\%\\]{max-width:100%}.scalar-client .max-w-\\[14px\\]{max-width:14px}.scalar-client .max-w-\\[150px\\]{max-width:150px}.scalar-client .max-w-\\[42px\\]{max-width:42px}.scalar-client .max-w-full{max-width:100%}.scalar-client .flex-1{flex:1 1 0%}.scalar-client .shrink-0{flex-shrink:0}.scalar-client .basis-1\\/2{flex-basis:50%}.scalar-client .-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .translate-x-0{--tw-translate-x:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .-rotate-90{--tw-rotate:-90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .rotate-90{--tw-rotate:90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .cursor-default{cursor:default}.scalar-client .cursor-help{cursor:help}.scalar-client .cursor-pointer{cursor:pointer}.scalar-client .cursor-text{cursor:text}.scalar-client .resize{resize:both}.scalar-client .auto-rows-auto{grid-auto-rows:auto}.scalar-client .grid-cols-\\[44px\\,1fr\\,repeat\\(3\\,auto\\)\\]{grid-template-columns:44px 1fr repeat(3,auto)}.scalar-client .flex-row{flex-direction:row}.scalar-client .flex-col{flex-direction:column}.scalar-client .flex-wrap{flex-wrap:wrap}.scalar-client .items-start{align-items:flex-start}.scalar-client .items-end{align-items:flex-end}.scalar-client .items-center{align-items:center}.scalar-client .items-stretch{align-items:stretch}.scalar-client .justify-start{justify-content:flex-start}.scalar-client .justify-end{justify-content:flex-end}.scalar-client .justify-center{justify-content:center}.scalar-client .justify-between{justify-content:space-between}.scalar-client .\\!gap-1{gap:4px!important}.scalar-client .\\!gap-1\\.5{gap:6px!important}.scalar-client .\\!gap-2{gap:8px!important}.scalar-client .gap-0{gap:0px}.scalar-client .gap-0\\.5{gap:2px}.scalar-client .gap-0\\.75{gap:3px}.scalar-client .gap-1{gap:4px}.scalar-client .gap-1\\.5{gap:6px}.scalar-client .gap-2{gap:8px}.scalar-client .gap-3{gap:12px}.scalar-client .gap-6{gap:24px}.scalar-client .gap-\\[\\.5px\\]{gap:.5px}.scalar-client .space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(4px * var(--tw-space-x-reverse));margin-left:calc(4px * calc(1 - var(--tw-space-x-reverse)))}.scalar-client .divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(var(--scalar-border-width) * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(var(--scalar-border-width) * var(--tw-divide-y-reverse))}.scalar-client .self-center{align-self:center}.scalar-client .justify-self-end{justify-self:end}.scalar-client .overflow-hidden{overflow:hidden}.scalar-client .overflow-visible{overflow:visible}.scalar-client .overflow-x-auto{overflow-x:auto}.scalar-client .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scalar-client .text-ellipsis{text-overflow:ellipsis}.scalar-client .whitespace-nowrap{white-space:nowrap}.scalar-client .whitespace-pre{white-space:pre}.scalar-client .text-pretty{text-wrap:pretty}.scalar-client .break-words{overflow-wrap:break-word}.scalar-client .rounded{border-radius:var(--scalar-radius)}.scalar-client .rounded-full{border-radius:9999px}.scalar-client .rounded-lg{border-radius:var(--scalar-radius-lg)}.scalar-client .rounded-md{border-radius:var(--scalar-radius)}.scalar-client .rounded-xl{border-radius:var(--scalar-radius-xl)}.scalar-client .rounded-b{border-bottom-right-radius:var(--scalar-radius);border-bottom-left-radius:var(--scalar-radius)}.scalar-client .rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.scalar-client .rounded-t{border-top-left-radius:var(--scalar-radius);border-top-right-radius:var(--scalar-radius)}.scalar-client .rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.scalar-client .\\!border-0{border-width:0!important}.scalar-client .border{border-width:var(--scalar-border-width)}.scalar-client .border-0{border-width:0}.scalar-client .border-1\\/2{border-width:calc(var(--scalar-border-width) / 2)}.scalar-client .border-b-0{border-bottom-width:0}.scalar-client .border-b-1\\/2{border-bottom-width:calc(var(--scalar-border-width) / 2)}.scalar-client .border-l-0{border-left-width:0}.scalar-client .border-r{border-right-width:var(--scalar-border-width)}.scalar-client .border-r-0{border-right-width:0}.scalar-client .border-r-1\\/2{border-right-width:calc(var(--scalar-border-width) / 2)}.scalar-client .border-t{border-top-width:var(--scalar-border-width)}.scalar-client .border-t-0{border-top-width:0}.scalar-client .border-t-1\\/2{border-top-width:calc(var(--scalar-border-width) / 2)}.scalar-client .border-solid{border-style:solid}.scalar-client .border-dashed{border-style:dashed}.scalar-client .border-none{border-style:none}.scalar-client .border-b-3{border-color:var(--scalar-background-3)}.scalar-client .border-transparent{border-color:transparent}.scalar-client .border-r-transparent{border-right-color:transparent}.scalar-client .bg-b-1{background-color:var(--scalar-background-1)}.scalar-client .bg-b-2{background-color:var(--scalar-background-2)}.scalar-client .bg-b-3{background-color:var(--scalar-background-3)}.scalar-client .bg-blue{background-color:var(--scalar-color-blue)}.scalar-client .bg-c-2{background-color:var(--scalar-color-2)}.scalar-client .bg-c-btn{background-color:var(--scalar-button-1-color)}.scalar-client .bg-green{background-color:var(--scalar-color-green)}.scalar-client .bg-grey{background-color:var(--scalar-color-3)}.scalar-client .bg-orange{background-color:var(--scalar-color-orange)}.scalar-client .bg-pink{background-color:var(--scalar-color-pink)}.scalar-client .bg-purple{background-color:var(--scalar-color-purple)}.scalar-client .bg-red{background-color:var(--scalar-color-red)}.scalar-client .bg-sidebar-active-b{background-color:var(--scalar-sidebar-item-active-background, var(--scalar-background-2))}.scalar-client .bg-yellow{background-color:var(--scalar-color-yellow)}.scalar-client .bg-none{background-image:none}.scalar-client .fill-current{fill:currentColor}.scalar-client .p-0{padding:0}.scalar-client .p-0\\.5{padding:2px}.scalar-client .p-0\\.75{padding:3px}.scalar-client .p-1{padding:4px}.scalar-client .p-1\\.5{padding:6px}.scalar-client .p-2{padding:8px}.scalar-client .p-4{padding:16px}.scalar-client .p-\\[2\\.25px\\]{padding:2.25px}.scalar-client .p-\\[3px\\]{padding:3px}.scalar-client .p-\\[5px\\]{padding:5px}.scalar-client .p-\\[7px\\]{padding:7px}.scalar-client .px-0{padding-left:0;padding-right:0}.scalar-client .px-0\\.5{padding-left:2px;padding-right:2px}.scalar-client .px-1{padding-left:4px;padding-right:4px}.scalar-client .px-1\\.5{padding-left:6px;padding-right:6px}.scalar-client .px-2{padding-left:8px;padding-right:8px}.scalar-client .px-2\\.5{padding-left:10px;padding-right:10px}.scalar-client .px-3{padding-left:12px;padding-right:12px}.scalar-client .px-4{padding-left:16px;padding-right:16px}.scalar-client .px-5{padding-left:20px;padding-right:20px}.scalar-client .px-\\[0px\\]{padding-left:0;padding-right:0}.scalar-client .px-\\[2\\.25px\\]{padding-left:2.25px;padding-right:2.25px}.scalar-client .py-0{padding-top:0;padding-bottom:0}.scalar-client .py-0\\.5{padding-top:2px;padding-bottom:2px}.scalar-client .py-1{padding-top:4px;padding-bottom:4px}.scalar-client .py-1\\.5{padding-top:6px;padding-bottom:6px}.scalar-client .py-2{padding-top:8px;padding-bottom:8px}.scalar-client .py-2\\.5{padding-top:10px;padding-bottom:10px}.scalar-client .py-3{padding-top:12px;padding-bottom:12px}.scalar-client .py-5{padding-top:20px;padding-bottom:20px}.scalar-client .py-\\[0px\\]{padding-top:0;padding-bottom:0}.scalar-client .py-\\[2\\.25px\\]{padding-top:2.25px;padding-bottom:2.25px}.scalar-client .py-\\[9px\\]{padding-top:9px;padding-bottom:9px}.scalar-client .py-px{padding-top:1px;padding-bottom:1px}.scalar-client .pb-14{padding-bottom:56px}.scalar-client .pb-2{padding-bottom:8px}.scalar-client .pb-2\\.5{padding-bottom:10px}.scalar-client .pb-3{padding-bottom:12px}.scalar-client .pl-1{padding-left:4px}.scalar-client .pl-2{padding-left:8px}.scalar-client .pl-5{padding-left:20px}.scalar-client .pl-8{padding-left:32px}.scalar-client .pr-0{padding-right:0}.scalar-client .pr-1{padding-right:4px}.scalar-client .pr-1\\.5{padding-right:6px}.scalar-client .pr-2{padding-right:8px}.scalar-client .pr-2\\.5{padding-right:10px}.scalar-client .pr-6{padding-right:24px}.scalar-client .pr-\\[26px\\]{padding-right:26px}.scalar-client .pt-0{padding-top:0}.scalar-client .pt-3{padding-top:12px}.scalar-client .pt-px{padding-top:1px}.scalar-client .text-left{text-align:left}.scalar-client .text-center{text-align:center}.scalar-client .text-right{text-align:right}.scalar-client .font-code{font-family:var(--scalar-font-code)}.scalar-client .text-3xs{font-size:var(--scalar-font-size-7)}.scalar-client .text-\\[11px\\]{font-size:11px}.scalar-client .text-\\[6px\\]{font-size:6px}.scalar-client .text-base{font-size:var(--scalar-font-size-3)}.scalar-client .text-sm{font-size:var(--scalar-font-size-4)}.scalar-client .text-xs{font-size:var(--scalar-font-size-5)}.scalar-client .text-xxs{font-size:var(--scalar-font-size-6)}.scalar-client .font-bold{font-weight:var(--scalar-bold)}.scalar-client .font-medium{font-weight:var(--scalar-semibold)}.scalar-client .font-normal{font-weight:var(--scalar-regular)}.scalar-client .uppercase{text-transform:uppercase}.scalar-client .capitalize{text-transform:capitalize}.scalar-client .leading-3{line-height:var(--scalar-line-height-3)}.scalar-client .leading-5{line-height:var(--scalar-line-height-5)}.scalar-client .leading-\\[1\\.44\\]{line-height:1.44}.scalar-client .leading-\\[7px\\]{line-height:7px}.scalar-client .leading-none{line-height:1}.scalar-client .leading-snug{line-height:1.375}.scalar-client .\\!text-c-1{color:var(--scalar-color-1)!important}.scalar-client .text-b-1{color:var(--scalar-background-1)}.scalar-client .text-blue{color:var(--scalar-color-blue)}.scalar-client .text-border{color:var(--scalar-border-color)}.scalar-client .text-c-1{color:var(--scalar-color-1)}.scalar-client .text-c-2{color:var(--scalar-color-2)}.scalar-client .text-c-3{color:var(--scalar-color-3)}.scalar-client .text-green{color:var(--scalar-color-green)}.scalar-client .text-grey{color:var(--scalar-color-3)}.scalar-client .text-orange{color:var(--scalar-color-orange)}.scalar-client .text-purple{color:var(--scalar-color-purple)}.scalar-client .text-red{color:var(--scalar-color-red)}.scalar-client .text-sidebar-active-c{color:var(--scalar-sidebar-color-active, currentColor)}.scalar-client .text-sidebar-c-2{color:var(--scalar-sidebar-color-2, var(--scalar-color-2))}.scalar-client .text-transparent{color:transparent}.scalar-client .text-yellow{color:var(--scalar-color-yellow)}.scalar-client .underline{text-decoration-line:underline}.scalar-client .no-underline{text-decoration-line:none}.scalar-client .decoration-c-3{text-decoration-color:var(--scalar-color-3)}.scalar-client .underline-offset-2{text-underline-offset:2px}.scalar-client .opacity-0{opacity:0}.scalar-client .opacity-100{opacity:1}.scalar-client .shadow{--tw-shadow:var(--scalar-shadow-1);--tw-shadow-colored:var(--scalar-shadow-1);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.scalar-client .shadow-\\[-8px_0_4px_var\\(--scalar-background-1\\)\\]{--tw-shadow:-8px 0 4px var(--scalar-background-1);--tw-shadow-colored:-8px 0 4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.scalar-client .shadow-lg{--tw-shadow:var(--scalar-shadow-2);--tw-shadow-colored:var(--scalar-shadow-2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.scalar-client .shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.scalar-client .outline-none{outline:2px solid transparent;outline-offset:2px}.scalar-client .outline{outline-style:solid}.scalar-client .ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.scalar-client .ring-offset-4{--tw-ring-offset-width:4px}.scalar-client .blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.scalar-client .filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.scalar-client .backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.scalar-client .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.scalar-client .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.scalar-client .transition-none{transition-property:none}.scalar-client .transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.scalar-client .transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.scalar-client .duration-150{transition-duration:.15s}.scalar-client .duration-300{transition-duration:.3s}.scalar-client .ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.scalar-client .bg-mix-transparent{background-color:color-mix(var(--tw-bg-mix-method, in srgb),transparent calc(var(--tw-bg-mix-amount, 0) * 1%),var(--tw-bg-base))}.scalar-client .bg-mix-amount-30{--tw-bg-mix-amount:30}.scalar-client .bg-mix-amount-90{--tw-bg-mix-amount:90}.scalar-client .bg-b-1{--tw-bg-base:var(--scalar-background-1)}.scalar-client .bg-b-2{--tw-bg-base:var(--scalar-background-2)}.scalar-client .bg-b-3{--tw-bg-base:var(--scalar-background-3)}.scalar-client .bg-blue{--tw-bg-base:var(--scalar-color-blue)}.scalar-client .bg-c-2{--tw-bg-base:var(--scalar-color-2)}.scalar-client .bg-c-btn{--tw-bg-base:var(--scalar-button-1-color)}.scalar-client .bg-green{--tw-bg-base:var(--scalar-color-green)}.scalar-client .bg-grey{--tw-bg-base:var(--scalar-color-3)}.scalar-client .bg-orange{--tw-bg-base:var(--scalar-color-orange)}.scalar-client .bg-pink{--tw-bg-base:var(--scalar-color-pink)}.scalar-client .bg-purple{--tw-bg-base:var(--scalar-color-purple)}.scalar-client .bg-red{--tw-bg-base:var(--scalar-color-red)}.scalar-client .bg-sidebar-active-b{--tw-bg-base:var(--scalar-sidebar-item-active-background, var(--scalar-background-2))}.scalar-client .bg-yellow{--tw-bg-base:var(--scalar-color-yellow)}.scalar-client .\\*\\:flex>*{display:flex}.scalar-client .\\*\\:h-8>*{height:32px}.scalar-client .\\*\\:cursor-pointer>*{cursor:pointer}.scalar-client .\\*\\:items-center>*{align-items:center}.scalar-client .\\*\\:rounded-none>*{border-radius:0}.scalar-client .\\*\\:px-1>*{padding-left:4px;padding-right:4px}.scalar-client .\\*\\:px-1\\.5>*{padding-left:6px;padding-right:6px}.scalar-client .before\\:pointer-events-none:before{content:var(--tw-content);pointer-events:none}.scalar-client .before\\:absolute:before{content:var(--tw-content);position:absolute}.scalar-client .before\\:left-0:before{content:var(--tw-content);left:0}.scalar-client .before\\:left-1\\/2:before{content:var(--tw-content);left:50%}.scalar-client .before\\:left-\\[calc\\(\\.75rem_\\+_\\.5px\\)\\]:before{content:var(--tw-content);left:calc(.75rem + .5px)}.scalar-client .before\\:left-\\[calc\\(1\\.75rem_-_1\\.5px\\)\\]:before{content:var(--tw-content);left:calc(1.75rem - 1.5px)}.scalar-client .before\\:left-\\[calc\\(1rem_-_1\\.5px\\)\\]:before{content:var(--tw-content);left:calc(1rem - 1.5px)}.scalar-client .before\\:right-\\[23px\\]:before{content:var(--tw-content);right:23px}.scalar-client .before\\:top-0:before{content:var(--tw-content);top:0}.scalar-client .before\\:top-1\\/2:before{content:var(--tw-content);top:50%}.scalar-client .before\\:top-\\[-33px\\]:before{content:var(--tw-content);top:-33px}.scalar-client .before\\:z-10:before{content:var(--tw-content);z-index:10}.scalar-client .before\\:mx-\\[0\\.5ch\\]:before{content:var(--tw-content);margin-left:.5ch;margin-right:.5ch}.scalar-client .before\\:block:before{content:var(--tw-content);display:block}.scalar-client .before\\:aspect-square:before{content:var(--tw-content);aspect-ratio:1 / 1}.scalar-client .before\\:h-\\[calc\\(100\\%\\+33px\\)\\]:before{content:var(--tw-content);height:calc(100% + 33px)}.scalar-client .before\\:h-\\[calc\\(100\\%_\\+_\\.5px\\)\\]:before{content:var(--tw-content);height:calc(100% + .5px)}.scalar-client .before\\:min-h-full:before{content:var(--tw-content);min-height:100%}.scalar-client .before\\:w-3:before{content:var(--tw-content);width:12px}.scalar-client .before\\:w-9\\/12:before{content:var(--tw-content);width:75%}.scalar-client .before\\:w-\\[\\.5px\\]:before{content:var(--tw-content);width:.5px}.scalar-client .before\\:w-full:before{content:var(--tw-content);width:100%}.scalar-client .before\\:-translate-x-1\\/2:before{content:var(--tw-content);--tw-translate-x:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .before\\:-translate-y-1\\/2:before{content:var(--tw-content);--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .before\\:transform:before{content:var(--tw-content);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .before\\:rounded:before{content:var(--tw-content);border-radius:var(--scalar-radius)}.scalar-client .before\\:border:before{content:var(--tw-content);border-width:var(--scalar-border-width)}.scalar-client .before\\:border-\\[1px\\]:before{content:var(--tw-content);border-width:1px}.scalar-client .before\\:bg-b-3:before{content:var(--tw-content);background-color:var(--scalar-background-3)}.scalar-client .before\\:bg-gradient-to-r:before{content:var(--tw-content);background-image:linear-gradient(to right,var(--tw-gradient-stops))}.scalar-client .before\\:from-transparent:before{content:var(--tw-content);--tw-gradient-from:transparent var(--tw-gradient-from-position);--tw-gradient-to:rgb(0 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.scalar-client .before\\:to-b-1:before{content:var(--tw-content);--tw-gradient-to:var(--scalar-background-1) var(--tw-gradient-to-position)}.scalar-client .before\\:opacity-0:before{content:var(--tw-content);opacity:0}.scalar-client .before\\:shadow-lg:before{content:var(--tw-content);--tw-shadow:var(--scalar-shadow-2);--tw-shadow-colored:var(--scalar-shadow-2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.scalar-client .before\\:content-\\[\\'\\'\\]:before{--tw-content:"";content:var(--tw-content)}.scalar-client .before\\:content-\\[\\'·\\'\\]:before{--tw-content:"·";content:var(--tw-content)}.scalar-client .before\\:bg-b-3:before{content:var(--tw-content);--tw-bg-base:var(--scalar-background-3)}.scalar-client .first\\:\\*\\:rounded-l>*:first-child{border-top-left-radius:var(--scalar-radius);border-bottom-left-radius:var(--scalar-radius)}.scalar-client .last\\:mb-0:last-child{margin-bottom:0}.scalar-client .last\\:border-r-0:last-child{border-right-width:0}.scalar-client .last\\:\\*\\:rounded-r>*:last-child{border-top-right-radius:var(--scalar-radius);border-bottom-right-radius:var(--scalar-radius)}.scalar-client .last\\:before\\:h-full:last-child:before{content:var(--tw-content);height:100%}.scalar-client .focus-within\\:bg-b-1:focus-within{background-color:var(--scalar-background-1)}.scalar-client .focus-within\\:bg-b-2:focus-within{background-color:var(--scalar-background-2)}.scalar-client .focus-within\\:text-c-1:focus-within{color:var(--scalar-color-1)}.scalar-client .focus-within\\:shadow-border:focus-within{--tw-shadow:inset 0 0 0 1px var(--scalar-border-color);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.scalar-client .focus-within\\:shadow-border:focus-within{--tw-shadow-color:var(--scalar-border-color);--tw-shadow:var(--tw-shadow-colored)}.scalar-client .focus-within\\:bg-b-1:focus-within{--tw-bg-base:var(--scalar-background-1)}.scalar-client .focus-within\\:bg-b-2:focus-within{--tw-bg-base:var(--scalar-background-2)}.scalar-client .hover\\:bg-b-2:hover{background-color:var(--scalar-background-2)}.scalar-client .hover\\:bg-b-3:hover{background-color:var(--scalar-background-3)}.scalar-client .hover\\:bg-sidebar-active-b:hover{background-color:var(--scalar-sidebar-item-active-background, var(--scalar-background-2))}.scalar-client .hover\\:text-c-1:hover{color:var(--scalar-color-1)}.scalar-client .hover\\:bg-b-2:hover{--tw-bg-base:var(--scalar-background-2)}.scalar-client .hover\\:bg-b-3:hover{--tw-bg-base:var(--scalar-background-3)}.scalar-client .hover\\:bg-sidebar-active-b:hover{--tw-bg-base:var(--scalar-sidebar-item-active-background, var(--scalar-background-2))}.scalar-client .\\*\\:hover\\:bg-b-2:hover>*{background-color:var(--scalar-background-2)}.scalar-client .\\*\\:hover\\:bg-b-2:hover>*{--tw-bg-base:var(--scalar-background-2)}.scalar-client .focus\\:bg-b-2:focus{background-color:var(--scalar-background-2)}.scalar-client .focus\\:text-c-1:focus{color:var(--scalar-color-1)}.scalar-client .focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.scalar-client .focus\\:bg-b-2:focus{--tw-bg-base:var(--scalar-background-2)}.scalar-client .active\\:text-c-1:active{color:var(--scalar-color-1)}.scalar-client .group:last-child .group-last\\:border-b-transparent{border-bottom-color:transparent}.scalar-client .group\\/upload:hover .group-hover\\/upload\\:block,.scalar-client .group:hover .group-hover\\:block{display:block}.scalar-client .group:hover .group-hover\\:flex{display:flex}.scalar-client .group:hover .group-hover\\:hidden{display:none}.scalar-client .group:hover .group-hover\\:cursor-auto{cursor:auto}.scalar-client .group:hover .group-hover\\:bg-b-3{background-color:var(--scalar-background-3)}.scalar-client .group\\/info:hover .group-hover\\/info\\:text-c-1{color:var(--scalar-color-1)}.scalar-client .group\\/scopes-accordion:hover .group-hover\\/scopes-accordion\\:text-c-2{color:var(--scalar-color-2)}.scalar-client .group:hover .group-hover\\:text-c-1{color:var(--scalar-color-1)}.scalar-client .group\\/params:hover .group-hover\\/params\\:opacity-100,.scalar-client .group:hover .group-hover\\:opacity-100{opacity:1}.scalar-client .group:hover .group-hover\\:opacity-80{opacity:.8}.scalar-client .group\\/item:hover .group-hover\\/item\\:shadow-border,.scalar-client .group:hover .group-hover\\:shadow-border{--tw-shadow:inset 0 0 0 1px var(--scalar-border-color);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.scalar-client .group\\/item:hover .group-hover\\/item\\:shadow-border,.scalar-client .group:hover .group-hover\\:shadow-border{--tw-shadow-color:var(--scalar-border-color);--tw-shadow:var(--tw-shadow-colored)}.scalar-client .group:hover .group-hover\\:bg-b-3{--tw-bg-base:var(--scalar-background-3)}.scalar-client .group\\/cell:hover .group-hover\\/cell\\:before\\:opacity-100:before{content:var(--tw-content);opacity:1}.scalar-client .peer:checked~.peer-checked\\:text-c-2{color:var(--scalar-color-2)}.scalar-client .peer:focus~.peer-focus\\:opacity-0{opacity:0}.scalar-client .peer:has(.cm-focused)~.peer-has-\\[\\.cm-focused\\]\\:opacity-0{opacity:0}.scalar-client .ui-open\\:mb-3[data-headlessui-state~=open]{margin-bottom:12px}.scalar-client .ui-open\\:flex[data-headlessui-state~=open]{display:flex}.scalar-client .ui-open\\:rotate-90[data-headlessui-state~=open]{--tw-rotate:90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .ui-open\\:pb-1[data-headlessui-state~=open]{padding-bottom:4px}.scalar-client :where([data-headlessui-state~=open]) .ui-open\\:mb-3{margin-bottom:12px}.scalar-client :where([data-headlessui-state~=open]) .ui-open\\:flex{display:flex}.scalar-client :where([data-headlessui-state~=open]) .ui-open\\:rotate-90{--tw-rotate:90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client :where([data-headlessui-state~=open]) .ui-open\\:pb-1{padding-bottom:4px}.scalar-client .ui-not-open\\:invisible[data-headlessui-state]:not([data-headlessui-state~=open]){visibility:hidden}.scalar-client .ui-not-open\\:mb-0[data-headlessui-state]:not([data-headlessui-state~=open]){margin-bottom:0}.scalar-client .ui-not-open\\:rotate-0[data-headlessui-state]:not([data-headlessui-state~=open]){--tw-rotate:0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client .ui-not-open\\:bg-transparent[data-headlessui-state]:not([data-headlessui-state~=open]){background-color:transparent}.scalar-client .ui-not-open\\:pb-0[data-headlessui-state]:not([data-headlessui-state~=open]){padding-bottom:0}.scalar-client .ui-not-open\\:bg-transparent[data-headlessui-state]:not([data-headlessui-state~=open]){--tw-bg-base:transparent}.scalar-client :where([data-headlessui-state]:not([data-headlessui-state~=open])) .ui-not-open\\:invisible:not([data-headlessui-state]){visibility:hidden}.scalar-client :where([data-headlessui-state]:not([data-headlessui-state~=open])) .ui-not-open\\:mb-0:not([data-headlessui-state]){margin-bottom:0}.scalar-client :where([data-headlessui-state]:not([data-headlessui-state~=open])) .ui-not-open\\:rotate-0:not([data-headlessui-state]){--tw-rotate:0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scalar-client :where([data-headlessui-state]:not([data-headlessui-state~=open])) .ui-not-open\\:bg-transparent:not([data-headlessui-state]){background-color:transparent}.scalar-client :where([data-headlessui-state]:not([data-headlessui-state~=open])) .ui-not-open\\:pb-0:not([data-headlessui-state]){padding-bottom:0}.scalar-client :where([data-headlessui-state]:not([data-headlessui-state~=open])) .ui-not-open\\:bg-transparent:not([data-headlessui-state]){--tw-bg-base:transparent}@media (min-width: 1000px){.scalar-client .lg\\:order-none{order:0}}@media (min-width: 1000px){.scalar-client .lg\\:mb-0{margin-bottom:0}}@media (min-width: 1000px){.scalar-client .lg\\:flex{display:flex}}@media (min-width: 1000px){.scalar-client .lg\\:min-h-header{min-height:var(--scalar-client-header-height)}}@media (min-width: 1000px){.scalar-client .lg\\:w-auto{width:auto}}@media (min-width: 1000px){.scalar-client .lg\\:min-w-\\[720px\\]{min-width:720px}}@media (min-width: 1000px){.scalar-client .lg\\:max-w-\\[720px\\]{max-width:720px}}@media (min-width: 1000px){.scalar-client .lg\\:flex-1{flex:1 1 0%}}@media (min-width: 1000px){.scalar-client .lg\\:px-1{padding-left:4px;padding-right:4px}}@media (min-width: 1000px){.scalar-client .lg\\:text-sm{font-size:var(--scalar-font-size-4)}}@media (min-width: 1200px){.scalar-client .xl\\:flex{display:flex}}@media (min-width: 1200px){.scalar-client .xl\\:min-h-header{min-height:var(--scalar-client-header-height)}}@media (min-width: 1200px){.scalar-client .xl\\:min-w-0{min-width:0px}}@media (min-width: 1200px){.scalar-client .xl\\:flex-1{flex:1 1 0%}}@media (min-width: 1200px){.scalar-client .xl\\:flex-row{flex-direction:row}}@media (min-width: 1200px){.scalar-client .xl\\:divide-x-1\\/2>:not([hidden])~:not([hidden]){--tw-divide-x-reverse:0;border-right-width:calc(calc(var(--scalar-border-width) / 2) * var(--tw-divide-x-reverse));border-left-width:calc(calc(var(--scalar-border-width) / 2) * calc(1 - var(--tw-divide-x-reverse)))}}@media (min-width: 1200px){.scalar-client .xl\\:divide-y-0>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(0px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(0px * var(--tw-divide-y-reverse))}}@media (min-width: 1200px){.scalar-client .xl\\:overflow-hidden{overflow:hidden}}@media (min-width: 1200px){.scalar-client .xl\\:rounded-none{border-radius:0}}@media (min-width: 1200px){.scalar-client .xl\\:px-5{padding-left:20px;padding-right:20px}}@media (min-width: 1200px){.scalar-client .xl\\:px-6{padding-left:24px;padding-right:24px}}@media (min-width: 1200px){.scalar-client .xl\\:py-2{padding-top:8px;padding-bottom:8px}}@media (min-width: 1200px){.scalar-client .xl\\:py-2\\.5{padding-top:10px;padding-bottom:10px}}.scalar-client .dark\\:hover\\:bg-b-2:hover:where(.dark-mode,.dark-mode *){background-color:var(--scalar-background-2)}.scalar-client .dark\\:hover\\:bg-b-2:hover:where(.dark-mode,.dark-mode *){--tw-bg-base:var(--scalar-background-2)}:root{--scalar-client-header-height: 50px;--scalar-sidebar-width: 280px;--scalar-toc-width: 280px}.scalar .scalar-api-client[data-v-fdd52d50]{max-height:calc(100% - calc(var(--scalar-app-header-height)));border-radius:8px}.scalar .scalar-app-layout[data-v-fdd52d50]{background:var(--scalar-background-1);height:calc(100% - 120px);max-width:1390px;width:100%;margin:auto;opacity:0;animation:scalarapiclientfadein-fdd52d50 .35s forwards;z-index:1002;position:relative;overflow:hidden;border-radius:8px}@keyframes scalarapiclientfadein-fdd52d50{0%{opacity:0}to{opacity:1}}.scalar .scalar-app-exit[data-v-fdd52d50]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#00000038;transition:all .3s ease-in-out;z-index:1000;cursor:pointer;animation:scalardrawerexitfadein-fdd52d50 .35s forwards}.scalar .scalar-app-exit[data-v-fdd52d50]:before{font-family:sans-serif;position:absolute;top:0;font-size:30px;font-weight:100;line-height:50px;right:12px;text-align:center;color:#fff;opacity:.6}.scalar .scalar-app-exit[data-v-fdd52d50]:hover:before{opacity:1}@keyframes scalardrawerexitfadein-fdd52d50{0%{opacity:0}to{opacity:1}}.scalar-container[data-v-fdd52d50]{overflow:hidden;visibility:visible;position:fixed;bottom:0;top:0;left:0;width:100%;height:100%;z-index:1001;display:flex;align-items:center;justify-content:center}.scalar .url-form-input[data-v-fdd52d50]{min-height:auto!important}.scalar .scalar-container[data-v-fdd52d50]{line-height:normal}.scalar .scalar-app-header span[data-v-fdd52d50]{color:var(--scalar-color-3)}.scalar .scalar-app-header a[data-v-fdd52d50]{color:var(--scalar-color-1)}.scalar .scalar-app-header a[data-v-fdd52d50]:hover{text-decoration:underline}.scalar-activate[data-v-fdd52d50]{width:-moz-fit-content;width:fit-content;margin:0px .75rem .75rem auto;line-height:24px;cursor:pointer;font-size:.875rem;font-weight:600;display:flex;align-items:center;gap:6px}.scalar-activate-button[data-v-fdd52d50]{display:flex;gap:6px;align-items:center;color:var(--scalar-color-blue);-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:none;background:transparent;padding:0 .5rem}.scalar-activate:hover .scalar-activate-button[data-v-fdd52d50]{background:var(--scalar-background-3);border-radius:3px}.required[data-v-e4703b01]:after{content:"Required"}input[data-v-e4703b01]::-moz-placeholder{color:var(--scalar-color-3)}input[data-v-e4703b01]::placeholder{color:var(--scalar-color-3)}.delete-warning-button[data-v-e58070fb]{color:var(--scalar-color-red)}.delete-warning-button[data-v-e58070fb]:hover,.delete-warning-button[data-v-e58070fb]:focus{background:color-mix(in srgb,var(--scalar-color-red),transparent 95%)}.sidebar-height{min-height:calc(100% - 50px)}.sidebar-mask{padding-bottom:42px;-webkit-mask-image:linear-gradient(0,transparent 0,transparent 40px,var(--scalar-background-2) 60px);mask-image:linear-gradient(0,transparent 0,transparent 40px,var(--scalar-background-2) 60px)}.resizer{width:5px;cursor:col-resize;position:absolute;top:0;right:0;bottom:0;border-right:2px solid transparent;transition:border-right-color .3s;z-index:100}.resizer:hover,.dragging .resizer{border-right-color:var(--scalar-background-3)}.dragging{cursor:col-resize}.dragging:before{content:"";display:block;position:absolute;width:100%;height:100%;z-index:99}[data-v-b044f01b] .cm-editor{height:100%;outline:none;padding:0;background:transparent}[data-v-b044f01b] .cm-content{font-family:var(--scalar-font-code);font-size:var(--scalar-mini)}[data-v-b044f01b] .cm-tooltip{background:transparent!important;filter:brightness(var(--scalar-lifted-brightness));border-radius:var(--scalar-radius);box-shadow:var(--scalar-shadow-2);border:none!important;outline:none!important;overflow:hidden!important}[data-v-b044f01b] .cm-tooltip-autocomplete ul li{padding:3px 6px!important}[data-v-b044f01b] .cm-completionIcon-type:after{color:var(--scalar-color-3)!important}[data-v-b044f01b] .cm-tooltip-autocomplete ul li[aria-selected]{background:var(--scalar-background-2)!important;color:var(--scalar-color-1)!important}[data-v-b044f01b] .cm-tooltip-autocomplete ul{padding:6px!important;z-index:10000;position:relative}[data-v-b044f01b] .cm-tooltip-autocomplete ul li:hover{border-radius:3px;color:var(--scalar-color-1)!important;background:var(--scalar-background-3)!important}[data-v-b044f01b] .cm-activeLine,[data-v-b044f01b] .cm-activeLineGutter{background-color:transparent}[data-v-b044f01b] .cm-selectionMatch,[data-v-b044f01b] .cm-matchingBracket{border-radius:var(--scalar-radius);background:var(--scalar-background-4)!important}[data-v-b044f01b] .cm-css-color-picker-wrapper{display:inline-flex;outline:1px solid var(--scalar-background-3);border-radius:3px;overflow:hidden}[data-v-b044f01b] .cm-gutters{background-color:transparent;border-right:none;color:var(--scalar-color-3);font-size:var(--scalar-mini);line-height:1.44}[data-v-b044f01b] .cm-gutterElement{font-family:var(--scalar-font-code)!important;padding:0 6px 0 8px!important;display:flex;align-items:center;justify-content:flex-end}[data-v-b044f01b] .cm-gutter+.cm-gutter .cm-gutterElement{padding-left:0!important}[data-v-b044f01b] .cm-scroller{scrollbar-width:none;-ms-overflow-style:none;overflow:auto}[data-v-b044f01b] .cm-scroller::-webkit-scrollbar{width:0;height:0;display:none}.cm-pill{--tw-bg-base: var(--scalar-color-1);color:var(--tw-bg-base);padding:0 6px;margin:0 6px;display:inline-block;border-radius:30px;font-size:var(--scalar-mini);background:color-mix(in srgb,var(--tw-bg-base),transparent 94%)!important}.cm-pill.bg-grey{background:var(--scalar-background-3)!important}.dark-mode .cm-pill{background:color-mix(in srgb,var(--tw-bg-base),transparent 80%)!important}.cm-pill:first-of-type{margin-left:0}.cm-editor .cm-widgetBuffer{display:none}[data-v-28ee5506] .cm-editor{background-color:var(--scalar-background-1);height:100%;outline:none;width:100%}[data-v-28ee5506] .cm-content{padding:0;display:flex;align-items:center}.scroll-timeline-x[data-v-28ee5506]{scroll-timeline:--scroll-timeline x;scroll-timeline:--scroll-timeline horizontal;-ms-overflow-style:none}.scroll-timeline-x-hidden[data-v-28ee5506]{overflow:hidden}.scroll-timeline-x-hidden[data-v-28ee5506] .cm-scroller{scrollbar-width:none;-ms-overflow-style:none;padding-right:20px;overflow:auto}.scroll-timeline-x-hidden[data-v-28ee5506]::-webkit-scrollbar{width:0;height:0;display:none}.scroll-timeline-x-hidden[data-v-28ee5506] .cm-scroller::-webkit-scrollbar{width:0;height:0;display:none}.scroll-timeline-x-address[data-v-28ee5506]{line-height:27px;scrollbar-width:none}.scroll-timeline-x-address[data-v-28ee5506]:after{content:"";position:absolute;height:100%;width:24px;right:0;cursor:text}.scroll-timeline-x-address[data-v-28ee5506]:empty:before{content:"Enter URL or cURL request";color:var(--scalar-color-3);pointer-events:none}.fade-left[data-v-28ee5506],.fade-right[data-v-28ee5506]{content:"";position:sticky;height:100%;animation-name:fadein-28ee5506;animation-duration:1ms;animation-direction:reverse;animation-timeline:--scroll-timeline;z-index:1;pointer-events:none}.fade-left[data-v-28ee5506]{background:linear-gradient(-90deg,color-mix(in srgb,var(--scalar-background-1),transparent 100%) 0%,color-mix(in srgb,var(--scalar-background-1),transparent 20%) 30%,var(--scalar-background-1) 100%);left:0;min-width:3px;animation-direction:normal}.fade-right[data-v-28ee5506]{background:linear-gradient(90deg,color-mix(in srgb,var(--scalar-background-1),transparent 100%) 0%,color-mix(in srgb,var(--scalar-background-1),transparent 20%) 30%,var(--scalar-background-1) 100%);right:0;min-width:24px}@keyframes fadein-28ee5506{0%{opacity:0}1%{opacity:1}}.codemirror-bg-switcher[data-v-28ee5506]{--scalar-background-1: var(--scalar-background-2)}.addressbar-bg-states[data-v-28ee5506] .adressbar-history-button:hover{background:var(--scalar-background-3)}.addressbar-bg-states[data-v-28ee5506]:focus-within .adressbar-history-button:hover{background:var(--scalar-background-2)}.addressbar-bg-states:focus-within .codemirror-bg-switcher[data-v-28ee5506]{--scalar-background-1: var(--scalar-background-1)}.addressbar-bg-states[data-v-28ee5506]{background:var(--scalar-background-2);border-color:transparent}.addressbar-bg-states[data-v-28ee5506]:focus-within{background:var(--scalar-background-1);border-color:var(--scalar-border-color)}a[data-v-905c8bd2]{text-decoration:none}.ref-search-container[data-v-905c8bd2]{display:flex;flex-direction:column;padding:12px 12px 0}.ref-search-results[data-v-905c8bd2]{padding:12px}.ref-search-meta[data-v-905c8bd2]{background:var(--scalar-background-3);padding:6px 12px;font-size:var(--scalar-font-size-4);color:var(--scalar-color-3);font-weight:var(--scalar-semibold);display:flex;gap:12px}.search-button-fade[data-v-2c26b5ad]{background:linear-gradient(var(--scalar-background-1) 44px,color-mix(in srgb,var(--scalar-background-1),transparent) 50px,transparent)}.fade-request-section-content[data-v-3656da18]{background:linear-gradient(var(--scalar-background-1) 31px,color-mix(in srgb,var(--scalar-background-1),transparent) 43px,transparent)}.auth-combobox-position[data-v-afbf407f]{margin-left:120px}.scroll-timeline-x[data-v-afbf407f]{overflow:auto;scroll-timeline:--scroll-timeline x;scroll-timeline:--scroll-timeline horizontal;scrollbar-width:none;-ms-overflow-style:none}.fade-left[data-v-afbf407f],.fade-right[data-v-afbf407f]{position:sticky;content:"";height:100%;animation-name:fadein-afbf407f;animation-duration:1ms;animation-direction:reverse;animation-timeline:--scroll-timeline;min-height:24px;pointer-events:none;z-index:1}.fade-left[data-v-afbf407f]{background:linear-gradient(-90deg,color-mix(in srgb,var(--scalar-background-1),transparent 100%) 0%,color-mix(in srgb,var(--scalar-background-1),transparent 20%) 60%,var(--scalar-background-1) 100%);min-width:3px;left:-1px;animation-direction:normal}.fade-right[data-v-afbf407f]{background:linear-gradient(90deg,color-mix(in srgb,var(--scalar-background-1),transparent 100%) 0%,color-mix(in srgb,var(--scalar-background-1),transparent 20%) 60%,var(--scalar-background-1) 100%);margin-left:-20px;min-width:24px;right:-1px;top:0}@keyframes fadein-afbf407f{0%{opacity:0}15%{opacity:1}}[data-v-0c169f89] .cm-editor{padding:0}[data-v-0c169f89] .cm-content{background-color:transparent;font-family:var(--scalar-font);font-size:var(--scalar-mini);padding:6px 8px}[data-v-0c169f89] .cm-content:has(.cm-pill){padding:4px 8px}[data-v-0c169f89] .cm-line{padding:0}.filemask[data-v-0c169f89]{-webkit-mask-image:linear-gradient(to right,transparent 0,var(--scalar-background-2) 20px);mask-image:linear-gradient(to right,transparent 0,var(--scalar-background-2) 20px)}.request-section-content{--scalar-border-width: .5px}.request-section-content-filter{box-shadow:0 -10px 0 10px var(--scalar-background-1)}.request-item:focus-within .request-meta-buttons{opacity:1}.light-mode .bg-preview[data-v-7fbe3767]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23000' fill-opacity='10%25'%3E%3Crect width='8' height='8' /%3E%3Crect x='8' y='8' width='8' height='8' /%3E%3C/svg%3E")}.dark-mode .bg-preview[data-v-7fbe3767]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23FFF' fill-opacity='10%25'%3E%3Crect width='8' height='8' /%3E%3Crect x='8' y='8' width='8' height='8' /%3E%3C/svg%3E")}[data-v-121b444b] .cm-editor{background-color:transparent;font-size:var(--scalar-mini);outline:none}[data-v-121b444b] .cm-gutters{background-color:var(--scalar-background-1);border-radius:var(--scalar-radius) 0 0 var(--scalar-radius)}.ascii-art-animate .ascii-art-line[data-v-80684d49]{border-right:1ch solid transparent;animation:typewriter-80684d49 4s steps(1) 1s 1 normal both,blinkTextCursor-80684d49 .5s steps(1) infinite normal}@keyframes typewriter-80684d49{0%{width:0}to{width:100%}}@keyframes blinkTextCursor-80684d49{0%{border-right-color:currentColor}50%{border-right-color:transparent}}.scalar-version-number[data-v-84b69d7e]{transform:skew(0,16deg);width:66px;height:66px;position:absolute;margin-left:-33px;font-size:8px;font-family:var(--scalar-font-code);line-height:11px;margin-top:-110px}.scalar-version-number b[data-v-84b69d7e]{font-weight:700}.ellipsis-position[data-v-5686fba5]{transform:translate3d(calc(-100% - 4.5px),0,0)}.dragover-asChild,.dragover-above,.dragover-below{position:relative}.dragover-above:after,.dragover-below:after{content:"";position:absolute;top:-1.5px;height:3px;width:100%;display:block;background:color-mix(in srgb,var(--scalar-color-blue),transparent 85%);pointer-events:none;border-radius:var(--scalar-radius)}.dragover-below:after{top:initial;bottom:-1.5px}.dragover-asChild:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;display:block;background:color-mix(in srgb,var(--scalar-color-blue),transparent 85%);pointer-events:none;border-radius:var(--scalar-radius)}.indent-border-line-offset[data-v-17dc8b59]:before{left:var(--4035a823)}.indent-padding-left[data-v-17dc8b59]{padding-left:calc(var(--d307928a) + 6px)}.editable-sidebar-hover:hover .editable-sidebar-hover-item[data-v-17dc8b59]{-webkit-mask-image:linear-gradient(to left,transparent 10px,var(--scalar-background-2) 30px);mask-image:linear-gradient(to left,transparent 10px,var(--scalar-background-2) 30px)}.sidebar-folderitem[data-v-17dc8b59] .ellipsis-position{right:6px;transform:none}.word-break-break-word[data-v-17dc8b59]{word-break:break-word}.request-text-color-text[data-v-b7bd40a0]{color:var(--scalar-color-1);background:linear-gradient(var(--scalar-background-1),var(--scalar-background-3));box-shadow:0 0 0 1px var(--scalar-border-color)}@media screen and (max-width: 780px){.sidebar-active-hide-layout[data-v-b7bd40a0]{display:none}.sidebar-active-width[data-v-b7bd40a0]{width:100%;border:1px solid var(--scalar-border-color);border-radius:var(--scalar-radius)}}.gitbook-show[data-v-b7bd40a0]{display:none}.empty-sidebar-item[data-v-b7bd40a0] .scalar-button{background:var(--scalar-button-1);color:var(--scalar-button-1-color)}.empty-sidebar-item[data-v-b7bd40a0] .scalar-button:hover{background:var(--scalar-button-1-hover)}.empty-sidebar-item[data-v-b7bd40a0] .add-item-hotkey{color:var(--scalar-button-1-color);background:color-mix(in srgb,var(--scalar-button-1),white 20%);border-color:transparent}.active-link[data-v-e9dbd857]{background-color:var(--scalar-background-2);color:var(--scalar-color-1);--tw-bg-base: var(--scalar-background-2)}.empty-variable-name[data-v-e9dbd857]:empty:before{content:"No Name";color:var(--scalar-color-3)}.cookie>a[data-v-e9dbd857]{padding-left:40px}.dark-mode .darkmode-subpage-wrapper[data-v-8a69ee40]{background-color:color-mix(in srgb,var(--scalar-background-1),black)}.start[data-v-391b4e37]{padding:24px;display:flex;flex-flow:wrap;justify-content:space-between;position:relative;z-index:0}.swagger-editor .start[data-v-391b4e37]{padding-top:24px}.start-h1[data-v-391b4e37]{font-size:var(--scalar-heading-2);margin-top:0;line-height:1.45;margin-bottom:0;font-weight:var(--scalar-bold);color:var(--scalar-color-1);width:100%;position:relative}.start-h3[data-v-391b4e37]{font-size:var(--scalar-paragraph);margin-top:0;margin-bottom:6px;display:block;line-height:1.45;font-weight:var(--scalar-bold);color:var(--scalar-color-1);width:100%}.start-h1[data-v-391b4e37]:not(:first-of-type){margin-top:24px}.start-p[data-v-391b4e37]{font-size:var(--scalar-paragraph);color:var(--scalar-color-2);line-height:1.5;width:100%;margin-top:12px}.start-ul[data-v-391b4e37]{margin-top:12px;font-size:var(--scalar-paragraph);line-height:1.5;padding-left:0;list-style:initial;display:flex;flex-flow:wrap;gap:24px}.start-ul li[data-v-391b4e37]{margin:0;padding:0;list-style:none;width:calc(50% - 24px);color:var(--scalar-color-2)}.start-ul li[data-v-391b4e37]:first-of-type{margin-top:0}.start-section[data-v-391b4e37]{width:100%;margin-bottom:12px;display:flex;flex-flow:wrap}.start-section[data-v-391b4e37]:last-of-type{margin-bottom:48px}.start-h2[data-v-391b4e37]{background:var(--scalar-background-2);border-top-left-radius:var(--scalar-radius-lg);border-top-right-radius:var(--scalar-radius-lg);border:1px solid var(--scalar-border-color);color:var(--scalar-color-3);font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);padding:9px;width:100%}.start-item[data-v-391b4e37]{align-items:center;background:var(--scalar-background-2);border-right:1px solid var(--scalar-border-color);border-bottom:1px solid var(--scalar-border-color);color:var(--scalar-color-1);cursor:pointer;display:flex;flex:1;font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);padding:9px;text-transform:capitalize;-webkit-user-select:none;user-select:none}.start-section-integrations .start-item[data-v-391b4e37]:first-of-type{border-bottom-left-radius:var(--scalar-radius-lg);border-left:1px solid var(--scalar-border-color)}.start-section-integrations .start-item[data-v-391b4e37]:last-of-type{border-bottom-right-radius:var(--scalar-radius-lg)}.start-section-colors .start-item[data-v-391b4e37]{min-width:33.33%}.start-section-colors .start-item[data-v-391b4e37]:nth-child(3n+2){border-left:1px solid var(--scalar-border-color)}.start-section-colors .start-item[data-v-391b4e37]:last-of-type,.start-section-colors .start-item-active[data-v-391b4e37]:last-of-type:before{border-radius:0 0 var(--scalar-radius-lg) var(--scalar-radius-lg)}.start-item[data-v-391b4e37]:empty{pointer-events:none}.start-item svg[data-v-391b4e37]{width:14px;height:14px;margin-right:6px}.start-item[data-v-391b4e37]:hover{background:var(--scalar-background-3)}.start-item-active[data-v-391b4e37]{z-index:10;position:relative;color:var(--scalar-color-1)}.start-item-active[data-v-391b4e37]:before{border:1px solid var(--scalar-color-1);content:"";top:-1px;right:-1px;bottom:-1px;left:-1px;pointer-events:none;position:absolute}.start-section-color .start-item[data-v-391b4e37]{text-transform:capitalize}.start-cta[data-v-391b4e37]{display:flex;gap:12px;width:100%;margin-top:24px;margin-bottom:0}.start-row[data-v-391b4e37]{width:100%;margin-top:12px;overflow:hidden}.start-hero-copy[data-v-391b4e37]{background:var(--scalar-background-2);padding:12px;border-radius:var(--scalar-radius-lg)}.start-p-small[data-v-391b4e37]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-2);margin-bottom:12px;line-height:1.4}.start-cta[data-v-391b4e37]{margin-bottom:12px;width:fit-content;white-space:nowrap}.start-copy[data-v-391b4e37]{padding:76px 48px 48px;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center}.start-logo[data-v-391b4e37]{color:var(--scalar-color-1);margin-bottom:24px;width:72px;aspect-ratio:1;position:relative;box-shadow:var(--scalar-shadow-2);border-radius:50%}.start-logo[data-v-391b4e37]:before{content:"";width:300%;aspect-ratio:1;left:-100%;top:-100%;position:absolute;z-index:-1;border-radius:50%;background-size:24px 24px;box-shadow:inset 0 0 50px var(--scalar-background-1),inset 0 0 50px var(--scalar-background-1);background-image:linear-gradient(to right,var(--scalar-border-color) 1px,transparent 1px),linear-gradient(to bottom,var(--scalar-border-color) 1px,transparent 1px)}.start-logo svg[data-v-391b4e37]{width:100%;height:auto;background:var(--scalar-background-1);padding:3px;border-radius:50%;position:relative}@media screen and (max-width: 600px){.start-section-colors .start-item[data-v-391b4e37],.start-item[data-v-391b4e37]{width:100%;border-radius:0;border-right:none;border-top:1px solid var(--scalar-border-color)}.start-item[data-v-391b4e37]:empty{display:none}.start-h2[data-v-391b4e37]{border-bottom:none}.start li[data-v-391b4e37]{width:100%}.start-copy[data-v-391b4e37]{padding:48px 0 24px}}@media screen and (max-width: 1000px){.start[data-v-391b4e37]{padding:0;overflow:auto}}.sidebar-heading-type[data-v-f51e2805]{display:block;min-width:3.9em;overflow:hidden;line-height:14px;flex-shrink:0;color:#fff;color:color-mix(in srgb,var(--method-color, var(--scalar-color-1)),transparent 0%);text-transform:uppercase;font-size:10px;font-weight:var(--scalar-bold);text-align:right;position:relative;font-family:var(--scalar-font-code);white-space:nowrap;margin-left:3px}.sidebar-heading[data-v-8f97b414]{display:flex;gap:6px;color:var(--scalar-sidebar-color-2, var(--scalar-color-2));font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);word-break:break-word;line-height:1.385;max-width:100%;position:relative;cursor:pointer;border-radius:var(--scalar-radius);flex:1;padding-right:9px;-webkit-user-select:none;user-select:none}.sidebar-heading-link-method[data-v-8f97b414]{margin:0}.sidebar-heading.deprecated .sidebar-heading-link-title[data-v-8f97b414]{text-decoration:line-through}.sidebar-heading-link-title[data-v-8f97b414]{margin:0}.sidebar-heading[data-v-8f97b414]:hover{background:var( --scalar-sidebar-item-hover-background, var(--scalar-background-2) )}.sidebar-heading:hover .sidebar-heading-link-title[data-v-8f97b414]{color:var(--scalar-sidebar-item-hover-color)}.active_page.sidebar-heading[data-v-8f97b414]:hover,.active_page.sidebar-heading[data-v-8f97b414]{color:var(--scalar-sidebar-color-active, var(--scalar-color-accent));background:var( --scalar-sidebar-item-active-background, var(--scalar-background-accent) )}.active_page.sidebar-heading:hover .sidebar-heading-link-title[data-v-8f97b414]{color:var(--scalar-sidebar-color-active, var(--scalar-color-accent))}.sidebar-indent-nested .sidebar-indent-nested .sidebar-heading[data-v-8f97b414]:before{content:"";position:absolute;top:0;left:calc((var(--scalar-sidebar-level) * 12px));width:1px;height:100%;background:var(--scalar-sidebar-indent-border)}.sidebar-indent-nested .sidebar-indent-nested .sidebar-heading[data-v-8f97b414]:hover:before{background:var(--scalar-sidebar-indent-border-hover)}.sidebar-indent-nested .sidebar-indent-nested .active_page.sidebar-heading[data-v-8f97b414]:before{background:var(--scalar-sidebar-indent-border-active)}.sidebar-heading-link[data-v-8f97b414]{text-decoration:none;color:inherit;padding:6px 0;display:flex;flex:1;justify-content:space-between;gap:2px}.sidebar-heading p[data-v-8f97b414]{height:fit-content;display:flex;align-items:center}.sidebar-heading p[data-v-8f97b414]:empty{display:none}.link-icon[data-v-8f97b414]{position:relative;left:4px}.sidebar-icon[data-v-8f97b414]{display:flex;align-items:center;justify-content:center;margin-right:6px;width:13px;height:13px}.sidebar-icon>svg[data-v-8f97b414]{width:13px;height:13px}.sidebar-group-item[data-v-8f97b414]{position:relative}.sidebar-heading-chevron[data-v-8f97b414]{margin:5px -5.5px 5px -9px}.toggle-nested-icon[data-v-8f97b414]{border:none;color:currentColor;padding:3px;color:var(--scalar-sidebar-color-2)}.active_page .toggle-nested-icon[data-v-8f97b414]{color:var(--scalar-sidebar-color-active, var(--scalar-color-accent))}.toggle-nested-icon[data-v-8f97b414]:hover,.toggle-nested-icon[data-v-8f97b414]:focus-visible{color:currentColor}.action-menu[data-v-8f97b414]{position:absolute;top:5px;right:5px;display:flex;gap:6px}.action-menu[data-v-8f97b414] .button-wrapper button{opacity:0;width:20px;height:20px;padding:4px}.action-menu[data-v-8f97b414]:hover .button-wrapper button,.action-menu[data-v-8f97b414] .button-wrapper button:hover,.sidebar-heading:hover~.action-menu[data-v-8f97b414] .button-wrapper button,.action-menu[data-v-8f97b414] .button-wrapper button[aria-expanded=true]{opacity:1}.sidebar-heading[data-v-8f97b414]:has(~.action-menu:hover){color:var(--scalar-sidebar-color-1, var(--scalar-color-1));background:var( --scalar-sidebar-item-hover-background, var(--scalar-background-2) )}.sidebar-group-item__folder[data-v-8f97b414]{color:var(--scalar-sidebar-color-1, var(--scalar-color-1));text-transform:var(--scalar-tag-text-transform, initial)}.sidebar-group[data-v-39c84840]{list-style:none;width:100%;margin:0;padding:0}.sidebar-indent-nested[data-v-39c84840] .sidebar-heading{padding-left:calc((var(--scalar-sidebar-level) * var(--scalar-sidebar-indent-base)) + 12px)!important}.sidebar-indent-nested[data-v-39c84840] .sidebar-heading .toggle-nested-icon{left:calc((var(--scalar-sidebar-level) * var(--scalar-sidebar-indent-base)) + 2px)!important}:where(.sidebar-indent-nested[data-v-39c84840]) .sidebar-heading{color:var(--scalar-sidebar-color-1, var(--scalar-color-1))}:where(.sidebar-indent-nested[data-v-39c84840]) :where(.sidebar-indent-nested) .sidebar-heading{color:var(--scalar-sidebar-color-2, var(--scalar-color-2))}.sidebar[data-v-66b58ff3]{--scalar-sidebar-indent-base: 12px}.sidebar[data-v-66b58ff3]{flex:1;height:100%;display:flex;flex-direction:column;border-right:var(--scalar-border-width) solid var(--scalar-sidebar-border-color, var(--scalar-border-color));background:var(--scalar-sidebar-background-1, var(--scalar-background-1));--scalar-sidebar-level: 0}.sidebar-pages[data-v-66b58ff3]{flex:1;padding:9px 12px}@media (max-width: 1000px){.sidebar[data-v-66b58ff3]{min-height:0;border-right:none}.sidebar-pages[data-v-66b58ff3]{padding-top:12px}}.sidebar-group-title[data-v-66b58ff3]{color:var(--scalar-sidebar-color-1);font-size:var(--scalar-mini);padding:12px 6px 6px;font-weight:var(--scalar-semibold);text-transform:uppercase;word-break:break-word;line-height:1.385}.sidebar-group-item+.sidebar-group-title[data-v-66b58ff3]{border-top:var(--scalar-border-width) solid var(--scalar-sidebar-border-color);margin-top:9px}.section-accordion-wrapper[data-v-2049975e]{padding:0 60px}.section-accordion[data-v-2049975e]{position:relative;width:100%;max-width:var(--refs-content-max-width);margin:auto}.section-accordion-content[data-v-2049975e]{display:flex;flex-direction:column;gap:12px;padding-top:12px}.section-accordion-button[data-v-2049975e]{width:100%;display:flex;cursor:pointer;padding:6px 0;margin:-6px 0;border-radius:var(--scalar-radius)}.section-accordion-chevron[data-v-2049975e]{width:24px;position:absolute;left:-24px;height:auto;top:10px;color:var(--scalar-color-3)}.section-accordion-button:hover .section-accordion-chevron[data-v-2049975e]{color:var(--scalar-color-1)}.section-accordion-title[data-v-2049975e]{display:flex;flex-direction:column;align-items:flex-start;flex:1;padding:0 6px}.section-accordion-title[data-v-2049975e] .section-header{margin-bottom:0}@container narrow-references-container (max-width: 900px){.section-accordion-chevron[data-v-2049975e]{width:16px;left:-16px;top:14px}.section-accordion-wrapper[data-v-2049975e]{padding:calc(var(--refs-header-height)) 24px 0 24px}}.loading[data-v-c90b2c46]{background:var(--scalar-background-3);animation:loading-skeleton-c90b2c46 1.5s infinite alternate;border-radius:var(--scalar-radius-lg);min-height:1.6em;margin:.6em 0;max-width:100%}.loading[data-v-c90b2c46]:first-of-type{min-height:3em;margin-bottom:24px;margin-top:0}.loading[data-v-c90b2c46]:last-of-type{width:60%}.loading.single-line[data-v-c90b2c46]{min-height:3em;margin:.6em 0;max-width:80%}@keyframes loading-skeleton-c90b2c46{0%{opacity:1}to{opacity:.33}}.section-header[data-v-3bd1b9f0]{font-size:var(--font-size, var(--scalar-heading-2));font-weight:var(--font-weight, var(--scalar-bold));color:var(--scalar-color-1);word-wrap:break-word;line-height:1.45;margin-top:0;margin-bottom:12px}.section-header.tight[data-v-3bd1b9f0]{margin-bottom:6px}.section-header.loading[data-v-3bd1b9f0]{width:80%}.screenreader-only[data-v-681ebf2c]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.label[data-v-d9801d4e]{position:relative;display:inline-block}.anchor[data-v-d9801d4e]{position:relative;display:inline-block;opacity:0}.anchor-copy[data-v-d9801d4e]{position:absolute;left:0;top:50%;transform:translateY(-50%);cursor:pointer;padding:0 6px;color:var(--scalar-color-3);font-weight:var(--scalar-semibold);font-size:.8em}.anchor-copy[data-v-d9801d4e]:hover,.anchor-copy[data-v-d9801d4e]:focus-visible{color:var(--scalar-color-2)}.label:hover .anchor[data-v-d9801d4e]{opacity:1}.tag-section[data-v-fe69da0e]{margin-bottom:48px}.tag-name[data-v-fe69da0e]{text-transform:capitalize}.tag-description[data-v-fe69da0e]{padding-bottom:4px}.show-more[data-v-b1ddf847]{background:var(--scalar-background-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;border:var(--scalar-border-width) solid var(--scalar-border-color);margin:auto;padding:8px 12px;border-radius:30px;color:var(--scalar-color-1);font-weight:var(--scalar-semibold);font-size:var(--scalar-small);display:flex;align-items:center;justify-content:center;position:relative;top:-48px}.show-more[data-v-b1ddf847]:hover{color:var(--scalar-color-2);cursor:pointer}.show-more-icon[data-v-b1ddf847]{width:14px!important;height:14px!important;margin-left:3px}.show-more[data-v-b1ddf847]:active{box-shadow:0 0 0 1px var(--scalar-border-color)}@container narrow-references-container (max-width: 900px){.show-more[data-v-b1ddf847]{top:-24px}}.section[data-v-fc324287]{position:relative;display:flex;flex-direction:column;max-width:var(--refs-content-max-width);margin:auto;padding:90px 0;scroll-margin-top:var(--refs-header-height)}.references-classic .section[data-v-fc324287]{padding:48px 0;gap:24px}@container narrow-references-container (max-width: 900px){.references-classic .section[data-v-fc324287],.section[data-v-fc324287]{padding:48px 24px}}.section[data-v-fc324287]:not(:last-of-type){border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}@container narrow-references-container (max-width: 900px){.section-content--with-columns[data-v-9735459e]{flex-direction:column;gap:24px}}.section-columns[data-v-8b9602bf]{display:flex;gap:48px}@container narrow-references-container (max-width: 900px){.section-columns[data-v-8b9602bf]{flex-direction:column;gap:24px}}.section-column[data-v-d64e7382]{flex:1;min-width:0}.section-column[data-v-d64e7382]:nth-of-type(2){padding-top:48px}@container narrow-references-container (max-width: 900px){.section-column[data-v-d64e7382]:nth-of-type(2){padding-top:0}}.scalar-card[data-v-38801681]{all:unset;font-family:var(--scalar-font);border-radius:var(--scalar-radius-lg);overflow:hidden;border:var(--scalar-border-width) solid var(--scalar-border-color);background:var(--scalar-background-2);display:flex;flex-direction:column;max-height:calc(((var(--full-height) - var(--refs-header-height)) - 60px) / 2);position:relative}.scalar-card-sticky[data-v-38801681]{position:sticky;top:calc(var(--refs-header-height) + 24px)}.scalar-card-content[data-v-dd83e46e]{overflow:auto;border-bottom:var(--scalar-border-width) solid var(--scalar-border-color);display:grid}.scalar-card-content[data-v-dd83e46e] .simple-table .simple-header{display:none}.scalar-card-content[data-v-dd83e46e]:last-of-type,.scalar-card-content.scalar-card--borderless[data-v-dd83e46e]{border-bottom:none}.scalar-card--muted[data-v-dd83e46e]{background:var(--scalar-background-2)}.scalar-card--contrast[data-v-dd83e46e]{background:var(--scalar-background-3)}.scalar-card--frameless[data-v-dd83e46e]{padding:0}.scalar-card--transparent[data-v-dd83e46e]{background:var(--scalar-background-1)}.scalar-card-header[data-v-ef7873bc]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-3);padding:9px 3px 9px 12px;flex-shrink:0}.scalar-card-header.scalar-card--borderless[data-v-ef7873bc]+.scalar-card-content{margin-top:-9px}.scalar-card-header-slots[data-v-ef7873bc]{display:flex;justify-content:space-between;line-height:1.35}.scalar-card-header-title[data-v-ef7873bc]{text-transform:uppercase;flex:1;min-width:0;text-overflow:ellipsis;overflow:hidden}.scalar-card-header-actions[data-v-ef7873bc]{display:flex}.endpoints[data-v-ccfa4910]{overflow:auto;background:var(--scalar-background-2);padding:10px 12px}@media (max-width: 580px){.endpoints[data-v-ccfa4910]{max-height:calc(100vh - 150px)}}.endpoints span+span[data-v-ccfa4910]{text-align:left;margin-left:12px;text-transform:initial}.endpoint[data-v-ccfa4910]{display:flex;white-space:nowrap;cursor:pointer}.endpoint span[data-v-ccfa4910]:first-of-type{text-transform:uppercase}.endpoint .post[data-v-ccfa4910],.endpoint .get[data-v-ccfa4910],.endpoint .delete[data-v-ccfa4910],.endpoint .put[data-v-ccfa4910]{white-space:nowrap}.endpoint span[data-v-ccfa4910]{color:var(--scalar-color-1);min-width:62px;display:inline-block;text-align:right;line-height:1.55;font-family:var(--scalar-font-code);font-size:var(--scalar-small);cursor:pointer}.deprecated[data-v-ccfa4910]{text-decoration:line-through}.section-container[data-v-823b8471]{position:relative;padding:0 60px;width:100%}.section-container[data-v-823b8471]:last-of-type{border-top:var(--scalar-border-width) solid var(--scalar-border-color)}@container narrow-references-container (max-width: 900px){.section-container[data-v-823b8471]{padding:0}}.section-container[data-v-ac369778]{border-top:var(--scalar-border-width) solid var(--scalar-border-color)}.section-container[data-v-ac369778]:has(.show-more){background-color:color-mix(in srgb,var(--scalar-background-2),transparent)}.content-type[data-v-19d1d4d0]{display:flex;align-items:center;font-size:var(--scalar-heading-4);font-weight:var(--scalar-semibold);color:var(--scalar-color-1);line-height:1.45;margin-top:24px;padding-bottom:12px;border-bottom:1px solid var(--scalar-border-color);flex-flow:wrap}.content-type-select[data-v-19d1d4d0]{position:relative;padding-left:9px;height:fit-content;color:var(--scalar-color-2);font-size:var(--scalar-font-size-3);display:flex;align-items:center}.content-type-no-select.content-type-select[data-v-19d1d4d0]{pointer-events:none}.content-type-no-select.content-type-select[data-v-19d1d4d0]:after{display:none}.content-type-select span[data-v-19d1d4d0]{display:flex;align-items:center}.content-type-select[data-v-19d1d4d0]:after{content:"";width:7px;height:7px;transform:rotate(45deg) translate3d(-2px,-4px,0);display:block;margin-left:7px;box-shadow:1px 1px 0 currentColor}.content-type-select select[data-v-19d1d4d0]{border:none;outline:none;cursor:pointer;background:var(--scalar-background-3);box-shadow:-2px 0 0 0 var(--scalar-background-3);position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.content-type-select[data-v-19d1d4d0]:hover{color:var(--scalar-color-1)}@media (max-width: 460px){.content-type-select[data-v-19d1d4d0]{margin-left:auto;padding-right:3px}}.schema-type-icon[data-v-c0a69ad0]{color:var(--scalar-color-1)}.schema-type[data-v-c0a69ad0]{font-family:var(--scalar-font-code)}.error[data-v-ab8ac369]{background-color:var(--scalar-color-red)}.schema-card[data-v-ab8ac369]{z-index:0;position:relative;font-size:var(--scalar-font-size-4);color:var(--scalar-color-1)}.schema-card-title[data-v-ab8ac369]{--schema-title-height: 38px;height:var(--schema-title-height);padding:10px 12px;display:flex;align-items:center;gap:4px;color:var(--scalar-color-2);font-weight:var(--scalar-semibold);font-size:var(--scalar-micro);background:var(--scalar-background-1);border-radius:var(--scalar-radius-lg);border-bottom:var(--scalar-border-width) solid transparent}button.schema-card-title[data-v-ab8ac369]{cursor:pointer}button.schema-card-title[data-v-ab8ac369]:hover{color:var(--scalar-color-1)}.schema-card-title-icon[data-v-ab8ac369]{margin-left:-4px}.schema-card-title-icon--open[data-v-ab8ac369]{transform:rotate(90deg)}.schema-properties-open>.schema-card-title[data-v-ab8ac369]{z-index:1;position:sticky;top:var(--refs-header-height);border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.schema-properties-open>.schema-properties[data-v-ab8ac369]{width:fit-content}.schema-card-description+.schema-properties[data-v-ab8ac369]{width:fit-content}.schema-properties-open.schema-properties[data-v-ab8ac369],.schema-properties-open>.schema-card--open[data-v-ab8ac369]{width:100%}.schema-card .property[data-v-ab8ac369]:last-of-type{padding-bottom:10px}.schema-properties[data-v-ab8ac369]{display:flex;flex-direction:column;border:var(--scalar-border-width) solid var(--scalar-border-color);border-radius:var(--scalar-radius-lg)}.schema-card--compact[data-v-ab8ac369]{align-self:start}.schema-card--compact.schema-card--open[data-v-ab8ac369]{align-self:initial}.schema-card-title--compact[data-v-ab8ac369]{color:var(--scalar-color-3);padding:6px 10px;height:auto;border-bottom:none}.schema-card--compact>.schema-properties[data-v-ab8ac369],.schema-card-title--compact[data-v-ab8ac369]{border-radius:13.5px}.schema-card-title--compact>.schema-card-title-icon[data-v-ab8ac369]{width:10px;height:10px;margin:0}.schema-card-title--compact>.schema-card-title-icon--open[data-v-ab8ac369]{transform:rotate(45deg)}.schema-properties-open>.schema-card-title--compact[data-v-ab8ac369]{position:static}.schema-card--compact.schema-card--level-0>.schema-properties[data-v-ab8ac369]{border:none}[data-v-ab8ac369] .schema-card-description p{font-size:var(--scalar-mini, var(--scalar-paragraph));color:var(--scalar-color-2);line-height:1.5;display:block;margin-bottom:6px}.schema-card-description[data-v-ab8ac369]:first-of-type{padding-top:10px}.children .schema-card-description[data-v-ab8ac369]:first-of-type{padding-top:0}.property-detail[data-v-16d94ef5]{display:inline-flex}.property-detail+.property-detail[data-v-16d94ef5]:before{display:block;content:"·";margin:0 .5ch}.property-detail-truncate[data-v-16d94ef5]{overflow:hidden}.property-detail-truncate>.property-detail-value[data-v-16d94ef5]{overflow:hidden;text-overflow:ellipsis}.property-detail-prefix[data-v-16d94ef5]{color:var(--scalar-color-3)}code.property-detail-value[data-v-16d94ef5]{font-family:var(--scalar-font-code);font-size:var(--scalar-font-size-3);color:var(--scalar-color-2);background:var(--scalar-background-3);padding:1px 3px;border-radius:var(--scalar-radius)}.badge[data-v-190574ac]{color:var(--scalar-color-2);font-size:var(--scalar-micro);background:var(--scalar-background-2);padding:2px 6px;border-radius:12px;font-weight:var(--scalar-semibold);display:inline-block;text-transform:uppercase}.property-heading[data-v-51fd8de8]{display:flex;align-items:baseline;gap:9px;white-space:nowrap}.property-name[data-v-51fd8de8],.property-additional[data-v-51fd8de8]{font-family:var(--scalar-font-code)}.property-required[data-v-51fd8de8],.property-optional[data-v-51fd8de8]{color:var(--scalar-color-2)}.property-required[data-v-51fd8de8]{text-transform:capitalize;color:var(--scalar-color-orange)}.property-read-only[data-v-51fd8de8],.property-write-only[data-v-51fd8de8]{font-size:var(--scalar-font-size-3);color:var(--scalar-color-blue)}.property-details[data-v-51fd8de8]{font-size:var(--scalar-font-size-3);color:var(--scalar-color-2);display:flex;align-items:center;min-width:0}.property-const[data-v-51fd8de8]{color:var(--scalar-color-1)}.property[data-v-d1d8e2ad]{color:var(--scalar-color-1);padding:10px;font-size:var(--scalar-mini)}.property[data-v-d1d8e2ad]:last-of-type{padding-bottom:0}.property--compact.property--level-0[data-v-d1d8e2ad]{padding:10px 0}.property--deprecated[data-v-d1d8e2ad]{background:repeating-linear-gradient(-45deg,var(--scalar-background-2) 0,var(--scalar-background-2) 2px,transparent 2px,transparent 5px);background-size:100%}.property--deprecated[data-v-d1d8e2ad]>*{opacity:.75}.property-description[data-v-d1d8e2ad]{margin-top:6px;line-height:1.4;font-size:var(--scalar-small)}[data-v-d1d8e2ad] .property-description *{color:var(--scalar-color-2)!important}.property[data-v-d1d8e2ad]:not(:last-of-type){border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.children[data-v-d1d8e2ad]{display:flex;flex-direction:column;padding-top:8px}.property-example[data-v-d1d8e2ad]{display:flex;flex-direction:column;gap:6px;margin-top:6px;padding:6px;max-height:calc(((var(--full-height) - var(--refs-header-height))) / 2);font-size:var(--scalar-micro);border:var(--scalar-border-width) solid var(--scalar-border-color);background:var(--scalar-background-2);border-radius:var(--scalar-radius-lg)}.property-example-label[data-v-d1d8e2ad]{font-weight:var(--scalar-semibold);color:var(--scalar-color-3)}.property-example-value[data-v-d1d8e2ad]{font-family:var(--scalar-font-code);white-space:pre}.property-rule[data-v-d1d8e2ad]{display:flex;flex-direction:column;gap:6px;margin-top:12px;border-radius:var(--scalar-radius-lg)}.property-enum-value[data-v-d1d8e2ad]{padding:3px 0;color:var(--scalar-color-2)}.property-enum-value[data-v-d1d8e2ad]:before{content:"◼";margin-right:6px;color:var(--scalar-color-3)}.property-enum-values[data-v-d1d8e2ad]{margin-top:8px;list-style:none}.property--compact .property-example[data-v-d1d8e2ad]{display:none}.property-list[data-v-d1d8e2ad]{border:var(--scalar-border-width) solid var(--scalar-border-color);border-radius:var(--scalar-radius);margin-top:10px}.property-list .property[data-v-d1d8e2ad]:last-of-type{padding-bottom:10px}.property-name[data-v-d1d8e2ad]{font-family:var(--scalar-font-code)}.parameter-item[data-v-41582b48]{border-top:var(--scalar-border-width) solid var(--scalar-border-color)}.parameter-item:last-of-type .parameter-schema[data-v-41582b48]{padding-bottom:0}.parameter-item-container[data-v-41582b48]{padding:0}.parameter-item-name[data-v-41582b48]{font-weight:500;margin-right:6px;font-family:var(--scalar-font-code);font-size:var(--scalar-mini);color:var(--scalar-color-1)}.parameter-item-type[data-v-41582b48]{font-size:var(--scalar-font-size-3);color:var(--scalar-color-2);margin-right:6px}.parameter-item-required-optional[data-v-41582b48]{color:var(--scalar-color-2);font-weight:var(--scalar-semibold);margin-right:6px;position:relative}.parameter-item--required[data-v-41582b48]{text-transform:uppercase;font-size:var(--scalar-micro);font-weight:var(--scalar-semibold);color:var(--scalar-color-orange)}.parameter-item-description[data-v-41582b48]{margin-top:3px!important;font-size:var(--scalar-small);color:var(--scalar-color-2);line-height:1.4}.parameter-item-description[data-v-41582b48] p{margin-top:4px;font-size:var(--scalar-small);color:var(--scalar-color-2);line-height:1.4}.parameter-schema[data-v-41582b48]{padding-bottom:9px;margin-top:3px}.parameter-item-trigger[data-v-41582b48]{padding:10px 0;cursor:pointer;position:relative;align-items:baseline}.parameter-item-trigger-open[data-v-41582b48]{padding-bottom:0}.parameter-item-trigger[data-v-41582b48]:after{content:"";position:absolute;height:10px;width:100%;bottom:0}.parameter-item-icon[data-v-41582b48]{color:var(--scalar-color-3);position:absolute;left:-18px}.parameter-item-trigger:hover .parameter-item-icon[data-v-41582b48]{color:var(--scalar-color-1)}.parameter-item-content-type[data-v-41582b48]{margin-left:auto;opacity:0}.parameter-item-trigger-open .parameter-item-content-type[data-v-41582b48],.parameter-item-trigger:hover .parameter-item-content-type[data-v-41582b48]{opacity:1}.parameter-item-container-markdown[data-v-41582b48] .property-description:last-of-type{margin-top:0}.parameters[data-v-eade05ab]{margin-top:24px}.parameters-title[data-v-eade05ab]{font-size:var(--scalar-font-size-3);font-weight:var(--scalar-semibold);color:var(--scalar-color-1);line-height:1.45;margin-top:12px;margin-bottom:12px}.parameter-list[data-v-eade05ab]{list-style:none;padding:0;margin:0 0 12px;font-size:var(--scalar-small)}.request-body-title[data-v-3b43342b]{display:flex;align-items:center;font-size:var(--scalar-font-size-3);font-weight:var(--scalar-semibold);color:var(--scalar-color-1);line-height:1.45;margin-top:24px;padding-bottom:12px;border-bottom:var(--scalar-border-width) solid var(--scalar-border-color);flex-flow:wrap}.request-body-title-select[data-v-3b43342b]{position:relative;padding-left:9px;height:fit-content;color:var(--scalar-color-2);font-weight:var(--scalar-regular);display:flex;align-items:center}.request-body-title-no-select.request-body-title-select[data-v-3b43342b]{pointer-events:none}.request-body-title-no-select.request-body-title-select[data-v-3b43342b]:after{display:none}.request-body-title-select span[data-v-3b43342b]{display:flex;align-items:center}.request-body-title-select[data-v-3b43342b]:after{content:"";width:7px;height:7px;transform:rotate(45deg) translate3d(-2px,-4px,0);display:block;margin-left:7px;box-shadow:1px 1px 0 currentColor}.request-body-title-select select[data-v-3b43342b]{border:none;outline:none;cursor:pointer;background:var(--scalar-background-3);box-shadow:-2px 0 0 0 var(--scalar-background-3);position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.request-body-title-select[data-v-3b43342b]:hover{color:var(--scalar-color-1)}.request-body-description[data-v-3b43342b]{margin-top:6px;font-size:var(--scalar-small);width:100%}.request-body-description[data-v-3b43342b] .markdown *{color:var(--scalar-color-2)!important}@media (max-width: 460px){.request-body-title-select[data-v-3b43342b]{margin-left:auto;padding-right:3px}}.endpoint-details-card[data-v-102733a0]{display:flex;flex-direction:column;gap:12px}.endpoint-details-card-item[data-v-102733a0]{border:1px solid var(--scalar-border-color);border-radius:var(--scalar-radius-lg);margin-top:0}.endpoint-details-card[data-v-102733a0] .parameter-list:first-of-type:last-of-type{margin:0}.endpoint-details-card[data-v-102733a0] .parameter-item:last-of-type .parameter-schema{padding-bottom:12px}.endpoint-details-card[data-v-102733a0] .parameter-list .parameter-list{margin-bottom:12px}.endpoint-details-card[data-v-102733a0] .parameter-list li{margin:0;padding:0 9px}.endpoint-details-card[data-v-102733a0] .property{padding:9px;margin:0}.endpoint-details-card[data-v-102733a0] .endpoint-title,.endpoint-details-card[data-v-102733a0] .parameters-title,.endpoint-details-card[data-v-102733a0] .request-body-title{text-transform:uppercase;font-weight:var(--scalar-bold);font-size:var(--scalar-mini);color:var(--scalar-color-2);line-height:1.33;padding:9px;margin:0}.endpoint-details-card[data-v-102733a0] .request-body-title-select{text-transform:initial;font-weight:initial;margin-left:auto}.endpoint-path[data-v-b5ffe25a]{overflow:hidden;word-wrap:break-word;font-weight:var(--scalar-semibold);line-break:anywhere}.deprecated[data-v-b5ffe25a]{text-decoration:line-through}.show-api-client-button[data-v-1dbecca0]{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:none;padding:4px 6px;white-space:nowrap;border-radius:var(--scalar-radius);display:flex;justify-content:center;align-items:center;font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-background-2);font-family:var(--scalar-font);background:var(--scalar-button-1);position:relative;cursor:pointer;box-sizing:border-box;box-shadow:inset 0 0 0 1px #0000001a}.show-api-client-button span[data-v-1dbecca0],.show-api-client-button svg[data-v-1dbecca0]{fill:currentColor;color:var(--scalar-button-1-color);z-index:1}.show-api-client-button[data-v-1dbecca0]:hover{background:var(--scalar-button-1-hover)}.show-api-client-button svg[data-v-1dbecca0]{margin-right:4px}.section-wrapper[data-v-07cabcb0]{color:var(--scalar-color-1);padding-top:12px;margin-top:-12px}.section-accordion[data-v-07cabcb0]{display:flex;flex-direction:column;border-radius:var(--scalar-radius-lg);background:var(--scalar-background-2)}.section-accordion-transparent[data-v-07cabcb0]{background:transparent;border:1px solid var(--scalar-border-color)}.section-accordion-button[data-v-07cabcb0]{padding:6px}.section-accordion-button[data-v-07cabcb0]{display:flex;align-items:center;gap:6px;cursor:pointer}.section-accordion-button-content[data-v-07cabcb0]{flex:1;min-width:0}.section-accordion-button-actions[data-v-07cabcb0]{display:flex;align-items:center;gap:6px;color:var(--scalar-color-3)}.section-accordion-chevron[data-v-07cabcb0]{margin-right:4px;width:20px;cursor:pointer;opacity:1;color:var(--scalar-color-3)}.section-accordion-button:hover .section-accordion-chevron[data-v-07cabcb0]{color:var(--scalar-color-1)}.section-accordion-content[data-v-07cabcb0]{border-top:1px solid var(--scalar-border-color);display:flex;flex-direction:column}.section-accordion-description[data-v-07cabcb0]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color--1);padding:10px 12px 0}.section-accordion-content-card[data-v-07cabcb0] .property:last-of-type{padding-bottom:9px}.empty-state[data-v-65d90380]{margin:10px 0 10px 12px;text-align:center;font-size:var(--scalar-micro);min-height:56px;display:flex;align-items:center;justify-content:center;border-radius:var(--scalar-radius-lg);color:var(--scalar-color-2)}.rule-title[data-v-65d90380]{font-family:var(--scalar-font-code);color:var(--scalar-color-1);display:inline-block;margin:12px 0 6px;border-radius:var(--scalar-radius)}.rule[data-v-65d90380]{margin:0 12px;border-radius:var(--scalar-radius-lg)}.rule-items[data-v-65d90380]{counter-reset:list-number;display:flex;flex-direction:column;gap:12px;border-left:1px solid var(--scalar-border-color);padding:12px 0}.rule-item[data-v-65d90380]{counter-increment:list-number;border:1px solid var(--scalar-border-color);border-radius:var(--scalar-radius-lg);overflow:hidden;margin-left:24px}.rule-item[data-v-65d90380]:before{border:1px solid var(--scalar-border-color);border-top:0;border-right:0;content:" ";display:block;width:24px;height:6px;border-radius:0 0 0 var(--scalar-radius-lg);margin-top:6px;color:var(--scalar-color-2);transform:translate(-25px);color:var(--scalar-color-1);position:absolute}.tab-list[data-v-03fdb072]{display:flex;gap:6px;position:relative;flex:1;padding:9px 12px;overflow:auto}.scalar-card-header.scalar-card-header-tabs[data-v-03fdb072]{padding:0}.tab[data-v-f373ecc2]{background:none;border:none;font-size:var(--scalar-mini);font-family:var(--scalar-font);color:var(--scalar-color-2);font-weight:var(--scalar-semibold);line-height:calc(var(--scalar-mini) + 2px);white-space:nowrap;cursor:pointer;padding:0;margin-right:3px;text-transform:uppercase;position:relative;line-height:1.35}.tab[data-v-f373ecc2]:before{content:"";position:absolute;z-index:0;left:-6px;top:-6px;width:calc(100% + 12px);height:calc(100% + 12px);border-radius:var(--scalar-radius);background:var(--scalar-background-3);opacity:0}.tab[data-v-f373ecc2]:hover:before{opacity:1}.tab span[data-v-f373ecc2]{z-index:1;position:relative}.tab-selected[data-v-f373ecc2]{color:var(--scalar-color-1);text-decoration:underline;text-underline-offset:var(--scalar-micro)}.scalar-card-footer[data-v-918ab8d6]{flex-shrink:0}.text-select{position:relative;height:fit-content}.text-select--single-option{pointer-events:none}.text-select select{border:none;outline:none;cursor:pointer;background:var(--scalar-background-3);box-shadow:-2px 0 0 0 var(--scalar-background-3);position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}.text-select span{font-size:var(--scalar-mini);color:var(--scalar-color-2);font-weight:var(--scalar-semibold);white-space:nowrap;display:flex;align-items:center;justify-content:center}.text-select:hover span{color:var(--scalar-color-1)}.text-select:not(.text-select--single-option) span:after{content:"";width:7px;height:7px;transform:rotate(45deg) translate3d(-2px,-2px,0);display:block;margin-left:6px;box-shadow:1px 1px 0 currentColor}.text-select span:hover{background:var(--scalar-background-2)}.example-selector[data-v-090632a2]{padding:4px}.markdown[data-v-f7baab98] *{margin:0}.code-copy[data-v-f7baab98]{display:flex;align-items:center;justify-content:center;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;background:transparent;cursor:pointer;color:var(--scalar-color-3);border:none;padding:0;margin-right:12px}.code-copy[data-v-f7baab98]:hover{color:var(--scalar-color-1)}.code-copy svg[data-v-f7baab98]{width:13px;height:13px}.response-card-footer[data-v-f7baab98]{display:flex;flex-direction:column;flex-shrink:0;padding:10px 12px;gap:8px;border-top:var(--scalar-border-width) solid var(--scalar-border-color)}.response-example-selector[data-v-f7baab98]{align-self:start;margin:-4px}.response-description[data-v-f7baab98]{font-weight:var(--scalar-semibold);font-size:var(--scalar-micro);color:var(--scalar-color--1);display:flex;align-items:center;box-sizing:border-box}.schema-type[data-v-f7baab98]{font-size:var(--scalar-micro);color:var(--scalar-color-2);font-weight:var(--scalar-semibold);background:var(--scalar-background-3);padding:2px 4px;border-radius:4px;margin-right:4px}.schema-example[data-v-f7baab98]{font-size:var(--scalar-micro);color:var(--scalar-color-2);font-weight:var(--scalar-semibold)}.example-response-tab[data-v-f7baab98]{display:block;margin:6px}.scalar-card-container[data-v-f7baab98]{flex:1;background:var(--scalar-background-2);display:grid}.scalar-card-container[data-v-f7baab98] .cm-scroller{overflow-y:hidden}.scalar-card-checkbox[data-v-f7baab98]{display:flex;align-items:center;justify-content:center;position:relative;min-height:17px;cursor:pointer;-webkit-user-select:none;user-select:none;font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-2);width:fit-content;white-space:nowrap;margin-right:9px;gap:6px}.scalar-card-checkbox[data-v-f7baab98]:hover{color:var(--scalar-color--1)}.scalar-card-checkbox .scalar-card-checkbox-input[data-v-f7baab98]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.scalar-card-checkbox-checkmark[data-v-f7baab98]{height:17px;width:17px;border-radius:var(--scalar-radius);background-color:transparent;background-color:var(--scalar-background-3);box-shadow:inset 0 0 0 1px var(--scalar-border-color)}.scalar-card-checkbox[data-v-f7baab98]:has(.scalar-card-checkbox-input:checked){color:var(--scalar-color-1)}.scalar-card-checkbox .scalar-card-checkbox-input:checked~.scalar-card-checkbox-checkmark[data-v-f7baab98]{background-color:var(--scalar-button-1);box-shadow:none}.scalar-card-checkbox-checkmark[data-v-f7baab98]:after{content:"";position:absolute;display:none}.scalar-card-checkbox .scalar-card-checkbox-input:checked~.scalar-card-checkbox-checkmark[data-v-f7baab98]:after{display:block}.scalar-card-checkbox .scalar-card-checkbox-checkmark[data-v-f7baab98]:after{right:6px;top:36.5%;width:5px;height:9px;border:solid 1px var(--scalar-button-1-color);border-width:0 1.5px 1.5px 0;transform:rotate(45deg)}.request[data-v-de3f5cc4]{display:flex;flex-wrap:nowrap}.request-header[data-v-de3f5cc4]{display:flex;gap:6px;text-transform:initial}.request-method[data-v-de3f5cc4]{font-family:var(--scalar-font-code);text-transform:uppercase}.request-client-picker[data-v-de3f5cc4]{padding-left:12px;padding-right:9px}.request-card-footer[data-v-de3f5cc4]{display:flex;justify-content:flex-end;padding:6px;flex-shrink:0}.request-card-footer-addon[data-v-de3f5cc4]{display:flex;align-items:center;flex:1;min-width:0}.request-editor-section[data-v-de3f5cc4]{display:flex;flex:1}.code-snippet[data-v-de3f5cc4]{display:flex;flex-direction:column;width:100%}.endpoint-header[data-v-912f50cc]{display:flex;justify-content:space-between}.endpoint-details[data-v-912f50cc]{display:flex;align-items:center;margin-top:0;gap:9px;min-width:0;flex-shrink:1}.endpoint-type[data-v-912f50cc]{display:flex;align-items:center;justify-content:center;gap:6px;position:relative;z-index:0;width:60px;padding:6px;flex-shrink:0;font-size:var(--scalar-small);text-transform:uppercase;font-weight:var(--scalar-bold);font-family:var(--scalar-font)}.endpoint-type[data-v-912f50cc]:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;background:currentColor;opacity:.15;border-radius:var(--scalar-radius-lg)}.endpoint-anchor[data-v-912f50cc]{display:flex;align-items:center;min-width:0;flex-shrink:1;font-size:20px}.endpoint-anchor.label[data-v-912f50cc]{display:flex}.endpoint-label[data-v-912f50cc]{display:flex;align-items:baseline;gap:9px;min-width:0;flex-shrink:1;color:var(--scalar-color-1)}.endpoint-label-path[data-v-912f50cc]{font-family:var(--scalar-font-code);font-size:var(--scalar-mini);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.endpoint-label-path[data-v-912f50cc] em{color:var(--scalar-color-2)}.endpoint-label-name[data-v-912f50cc]{color:var(--scalar-color-2);font-size:var(--scalar-small);flex-shrink:1000000000;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.endpoint-try-hint[data-v-912f50cc]{padding:2px;height:24px;width:24px;flex-shrink:0}.endpoint-copy[data-v-912f50cc]{color:currentColor;padding:2px}.endpoint-copy[data-v-912f50cc] svg{stroke-width:2px}.endpoint-content[data-v-912f50cc]{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;padding:9px}@container (max-width: 900px){.endpoint-content[data-v-912f50cc]{grid-template-columns:1fr}}.endpoint-content[data-v-912f50cc]>*{max-height:unset}.examples[data-v-d7704f5f]{position:sticky;top:calc(var(--refs-header-height) + 24px)}.deprecated[data-v-d7704f5f] *{text-decoration:line-through}.example-path[data-v-d7704f5f]{color:var(--scalar-color-2);font-family:var(--scalar-font-code)}.example-path[data-v-d7704f5f] em{color:var(--scalar-color-1)}.references-loading{position:absolute;top:0;left:0;right:0;z-index:1;grid-area:rendered;background:var(--scalar-background-1)}.references-loading-top-spacer{top:-1px}@media (min-width: 1001px){.references-loading-top-spacer{top:calc(var(--refs-header-height) - 1px)}}.references-loading-hidden-tag .section-container .section:first-child{display:none}.introduction-description-heading[data-v-15c890da]{scroll-margin-top:64px}.introduction-description-heading+.markdown[data-v-15c890da]{margin-top:-6px}.introduction-description[data-v-15c890da]{display:flex;flex-direction:column;gap:18px}.references-classic .introduction-description[data-v-15c890da] img{max-width:720px}.download-cta[data-v-810904a4]{margin-bottom:24px}.download-cta .download-button[data-v-810904a4]{color:var(--scalar-color-accent);text-decoration:var(--scalar-text-decoration)!important;font-size:var(--scalar-paragraph);cursor:pointer}.download-cta .download-button[data-v-810904a4]:hover{text-decoration:var(--scalar-text-decoration-hover)!important}.heading[data-v-0362b02e]{margin-top:0!important;word-wrap:break-word}.loading[data-v-0362b02e]{background:var(--scalar-background-3);animation:loading-skeleton 1.5s infinite alternate;border-radius:var(--scalar-radius-lg)}.badges[data-v-0362b02e]{display:flex;align-items:center;gap:4px;margin-bottom:3px}.heading.loading[data-v-0362b02e]{width:80%}.introduction-section[data-v-0362b02e]{gap:48px}.sticky-cards[data-v-0362b02e]{display:flex;flex-direction:column;position:sticky;top:calc(var(--refs-header-height) + 24px)}.base-url-variable{color:var(--scalar-color-1)}.base-url[data-v-41e1c30c]{color:var(--scalar-color-1);cursor:pointer;display:inline-block;font-size:var(--scalar-mini);min-width:0;white-space:nowrap;text-overflow:ellipsis}.url-select[data-v-a3e94a85]{padding:0;min-height:32px;color:var(--scalar-color-1);align-items:center;display:flex;font-size:var(--scalar-micro);font-weight:var(--scalar-regular);gap:3px;height:auto;outline:none;width:100%}.url-select span[data-v-a3e94a85]{display:flex;align-items:center;scrollbar-width:none;-ms-overflow-style:none}.url-select span[data-v-a3e94a85]::-webkit-scrollbar{width:0;height:0;display:none}.url-select svg[data-v-a3e94a85]{color:var(--scalar-color-2);stroke-width:1}.variable-select[data-v-4b092d90]{padding:9px 9px 9px 0;color:var(--scalar-color-1);align-items:center;border-color:transparent;border-radius:0;border-top:1px solid var(--scalar-border-color);display:flex;font-size:var(--scalar-micro);font-weight:var(--scalar-regular);gap:3px;height:auto;outline:none;width:100%}.variable-select svg[data-v-4b092d90]{color:var(--scalar-color-2);stroke-width:1}.variable-textbox[data-v-fbcac0a4]{padding:9px 9px 9px 0;color:var(--scalar-color-1);align-items:center;border-color:transparent;border-radius:0;border-top:1px solid var(--scalar-border-color);display:flex;font-size:var(--scalar-micro);font-weight:var(--scalar-regular);gap:3px;height:auto;outline:none;width:100%}.variable-container-item[data-v-d5675216]{display:flex;width:100%}.variable-label[data-v-d5675216]{padding:9px 0 9px 9px;color:var(--scalar-color-2);border-top:1px solid var(--scalar-border-color);font-size:var(--scalar-micro)}.variable-label[data-v-d5675216]:after{content:":";margin-right:6px}.server-form-title[data-v-da7210d5]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-3);text-transform:uppercase;display:block}.server-form[data-v-da7210d5]{margin-top:6px}.server-form-container[data-v-da7210d5]{border-radius:var(--scalar-radius);background:var(--scalar-background-2);border:var(--scalar-border-width) solid var(--scalar-border-color)}.server-item[data-v-da7210d5]{padding:0 9px}.description[data-v-da7210d5]{padding:6px 12px;font-size:var(--scalar-small)}.description[data-v-da7210d5] .markdown{font-size:var(--scalar-micro);font-weight:var(--scalar-semibold);color:var(--scalar-color--1);padding:4px 0;display:block}.description[data-v-da7210d5] .markdown>*:first-child{margin-top:0}.card-form[data-v-20e78fcd]{color:var(--scalar-color-1);width:100%;border:var(--scalar-border-width) solid var(--scalar-border-color);border-radius:var(--scalar-radius);background-color:var(--scalar-background-2)}.card-form[data-v-20e78fcd]:focus-within{background-color:var(--scalar-background-1)}.card-form-button[data-v-502d153b]{display:flex;align-items:center;position:relative;background:transparent;cursor:pointer;padding:9px;outline:none;white-space:nowrap;font-family:var(--scalar-font);font-size:var(--scalar-micro);font-weight:var(--scalar-semibold);color:var(--scalar-color-2)}.card-form-button[data-v-502d153b]:hover{color:var(--scalar-color-1)}.card-form-group[data-v-88abf5f7]{display:flex}:where(.card-form-rows[data-v-1611fc76]){display:flex;flex-direction:column;width:100%}:where(.card-form-rows[data-v-1611fc76])>*+*{border-top:1px solid var(--scalar-border-color)}.card-form-input[data-v-8e6b4182]{background:transparent;position:relative;width:100%;text-align:left;display:flex;align-items:baseline;border-color:inherit}.card-form-input label[data-v-8e6b4182],.card-form-input input[data-v-8e6b4182]{padding:9px;border:0;outline:none;font-size:var(--scalar-mini);color:var(--scalar-color-2);width:100%;background:transparent;-moz-appearance:none;appearance:none;-webkit-appearance:none;left:0}.card-form-input input[data-v-8e6b4182]:placeholder,.card-form-input input[data-v-8e6b4182]:-ms-input-placeholder,.card-form-input input[data-v-8e6b4182]::-webkit-input-placeholder{color:var(--scalar-color-3);font-family:var(--scalar-font)}.card-form-input label[data-v-8e6b4182]{width:fit-content;white-space:nowrap;cursor:text;padding:9px 0 9px 9px;border-radius:var(--scalar-radius);font-weight:var(--scalar-semibold)}.card-form-input input[data-v-8e6b4182]{position:relative;z-index:99;color:var(--scalar-color-1)}.card-form-input+.card-form-input[data-v-8e6b4182]{border-left:var(--scalar-border-width) solid var(--scalar-border-color)}.card-form-input input:not(:placeholder-shown)+label[data-v-8e6b4182]{color:var(--scalar-color-2)}.password-mask[data-v-8e6b4182]{padding:4px;margin-right:6px;height:24px;width:auto;align-self:center;stroke-width:.75}.card-form-input label[data-v-8e6b4182]{display:none}.card-form-input label[for="oAuth2.clientId"][data-v-8e6b4182]{display:flex}.wrapper[data-v-6d6455a4]{display:grid;border-color:inherit}.scopes-label[data-v-6d6455a4]{display:inline-flex;align-items:center;height:1em;line-height:1;gap:4px}.scopes-label-badge[data-v-6d6455a4]{display:inline-flex;align-items:center;gap:2px}.scopes-label-badge em[data-v-6d6455a4]{transform:rotate(10deg) translateY(-.9px)}.floating[data-v-6d6455a4]{position:relative;z-index:1010}.dropdown[data-v-6d6455a4]{background:var(--scalar-background-1);filter:brightness(var(--scalar-lifted-brightness));border-radius:var(--scalar-radius);box-shadow:var(--scalar-shadow-2);padding:4px;font-style:normal;display:flex;flex-direction:column;gap:10px}.dropdown-item[data-v-6d6455a4]{display:grid;grid-template-areas:"check title" "check description";grid-template-columns:auto 1fr;padding:6px 10px 8px 6px;row-gap:2px;column-gap:8px;border-radius:var(--scalar-radius);font-size:var(--scalar-mini);cursor:pointer}.dropdown-item[data-headlessui-state=active][data-v-6d6455a4],.dropdown-item[data-headlessui-state="active selected"][data-v-6d6455a4]{background:var(--scalar-background-2)}.dropdown-item-title[data-v-6d6455a4]{grid-area:title;color:var(--scalar-color-1);font-weight:var(--scalar-semibold)}.dropdown-item-description[data-v-6d6455a4]{grid-area:description;color:var(--scalar-color-2);line-height:initial}.dropdown-item-check[data-v-6d6455a4]{all:unset;position:relative;grid-area:check;width:20px;height:20px;color:var(--scalar-color-2);background:var(--scalar-background-1);border:1px solid var(--scalar-border-color);border-radius:var(--scalar-radius)}.dropdown-item-check[data-v-6d6455a4]:checked:after{content:"";position:absolute;border-bottom:1.5px solid currentColor;border-right:1.5px solid currentColor;width:6px;height:12px;top:calc(50% - 1.5px);left:50%;transform:translate(-50%,-50%) rotate(45deg)}.dropdown-item-check[data-v-6d6455a4]:checked{background:var(--scalar-color-accent);color:var(--scalar-background-1);border:1px solid currentColor}.description[data-v-3bdd11a8]{padding:12px 4px 4px;font-size:var(--scalar-mini)}.cardform-auth-button[data-v-3bdd11a8]{background:var(--scalar-button-1);color:var(--scalar-button-1-color);font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);border-radius:var(--scalar-radius);margin:3px;padding:0 9px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.cardform-auth-button[data-v-3bdd11a8]:hover{background:var(--scalar-button-1-hover)}.security-scheme-selector[data-v-630d0ab4]{position:relative;border-radius:var(--scalar-radius);color:var(--scalar-color-3);display:flex;align-items:center;gap:4px;cursor:pointer}.security-scheme-selector[data-v-630d0ab4]:hover{color:var(--scalar-color-1)}.security-scheme-label[data-v-630d0ab4]{color:var(--scalar-color-3);font-size:var(--scalar-mini)}.security-scheme-selector:hover .security-scheme-label[data-v-630d0ab4]{color:var(--scalar-color-1)}.security-scheme-selector select[data-v-630d0ab4]{position:absolute;cursor:pointer;opacity:0;right:0;-moz-appearance:none;-webkit-appearance:none;appearance:none;width:100%;margin-top:-5px;padding:10px 0}.security-scheme-selector svg[data-v-630d0ab4]{width:12px;stroke:currentColor}.authentication-header[data-v-cfd417f3]{white-space:nowrap}.authentication-content[data-v-cfd417f3]{margin-top:6px}.client-libraries-content[data-v-4951736c]{container:client-libraries-content / inline-size;display:flex;justify-content:center;overflow:hidden;background-color:var(--scalar-background-2);border-radius:var(--scalar-radius) var(--scalar-radius) 0 0;border:var(--scalar-border-width) solid var(--scalar-border-color);border-bottom:none}.client-libraries[data-v-4951736c]{display:flex;align-items:center;justify-content:center;width:100%;position:relative;cursor:pointer;white-space:nowrap;padding:8px 2px;gap:6px;color:var(--scalar-color-3);-webkit-user-select:none;user-select:none;border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.client-libraries[data-v-4951736c]:hover:before{content:"";position:absolute;width:calc(100% - 4px);height:calc(100% - 4px);background:var(--scalar-background-3);left:2px;top:2px;z-index:0;border-radius:var(--scalar-radius)}.client-libraries[data-v-4951736c]:active{color:var(--scalar-color-1)}@media screen and (max-width: 450px){.client-libraries[data-v-4951736c]:nth-of-type(4),.client-libraries[data-v-4951736c]:nth-of-type(5){display:none}}.client-libraries-icon[data-v-4951736c]{max-width:14px;max-height:14px;min-width:14px;width:100%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;color:currentColor}.client-libraries-icon__more svg[data-v-4951736c]{height:initial}@container client-libraries-content (width < 400px){.client-libraries__select[data-v-4951736c]{width:fit-content}.client-libraries__select .client-libraries-icon__more+span[data-v-4951736c]{display:none}}@container client-libraries-content (width < 380px){.client-libraries[data-v-4951736c]{width:100%}.client-libraries span[data-v-4951736c]{display:none}}.client-libraries__active[data-v-4951736c]{color:var(--scalar-color-1);border-bottom:var(--scalar-border-width) solid var(--scalar-color-1)}@keyframes codeloader-4951736c{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.client-libraries span[data-v-4951736c]{font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);position:relative}.client-libraries__active span[data-v-4951736c]{color:var(--scalar-color-1)}.client-libraries__select select[data-v-4951736c]{background:var(--scalar-background-3);color:var(--scalar-color-2);opacity:0;height:100%;width:100%;aspect-ratio:1;position:absolute;top:0;left:0;cursor:pointer;z-index:1;-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none}.client-libraries__select span[data-v-4951736c]{position:relative;display:flex;align-items:center}@media screen and (max-width: 600px){.references-classic .client-libraries[data-v-4951736c]{flex-direction:column}}.selected-client[data-v-dbf83e74]{color:var(--scalar-color-1);font-size:var(--scalar-mini);font-family:var(--scalar-font-code);padding:9px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:var(--scalar-background-2);border-radius:0 0 var(--scalar-radius) var(--scalar-radius);border:var(--scalar-border-width) solid var(--scalar-border-color);border-top:none}.client-libraries-heading[data-v-dbf83e74]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-3);text-transform:uppercase;margin-bottom:6px;display:block}.section-container[data-v-38408a09]{border-top:var(--scalar-border-width) solid var(--scalar-border-color)}.reference-models[data-v-304ad700]{margin-bottom:48px}.reference-models-anchor[data-v-304ad700]{display:flex;align-items:center;font-size:20px;padding-left:6px;color:var(--scalar-color-1)}.reference-models-label[data-v-304ad700]{font-size:var(--scalar-mini)}.reference-models-label[data-v-304ad700] em{font-weight:var(--scalar-bold)}.show-more[data-v-f19478dd]{margin-top:24px}.narrow-references-container{container-name:narrow-references-container;container-type:inline-size}.render-loading[data-v-8d751fa0]{height:calc(var(--full-height) - var(--refs-header-height));display:flex;align-items:center;justify-content:center}.introduction-card[data-v-8d751fa0]{display:flex;flex-direction:column;padding-top:3px;background:var(--scalar-background-1);border:var(--scalar-border-width) solid var(--scalar-border-color);border-radius:var(--scalar-radius-lg)}.introduction-card-item[data-v-8d751fa0]{padding:9px 12px;border-bottom:var(--scalar-border-width) solid var(--scalar-border-color);display:flex;flex-direction:column;justify-content:center}.introduction-card-item[data-v-8d751fa0]:last-of-type{border-bottom:none}.introduction-card[data-v-8d751fa0] .description{padding:0}.introduction-card-title[data-v-8d751fa0]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-3)}.introduction-card-row[data-v-8d751fa0]{flex-flow:row wrap;gap:24px}.introduction-card-row[data-v-8d751fa0]>*{flex:1}@media (min-width: 600px){.introduction-card-row[data-v-8d751fa0]>*{min-width:min-content}}@media (max-width: 600px){.introduction-card-row[data-v-8d751fa0]>*{max-width:100%}}@container (max-width: 900px){.introduction-card-row[data-v-8d751fa0]{flex-direction:column;align-items:stretch;gap:0px}}.introduction-card[data-v-8d751fa0] .security-scheme-label{text-transform:uppercase;font-weight:var(--scalar-semibold)}.references-classic .introduction-card-row[data-v-8d751fa0] .scalar-card:nth-of-type(2) .scalar-card-header{display:none}.references-classic .introduction-card-row[data-v-8d751fa0] .scalar-card:nth-of-type(2) .scalar-card-header.scalar-card--borderless+.scalar-card-content{margin-top:0}.section-flare[data-v-8d751fa0]{position:absolute;top:0;right:0;pointer-events:none}.scalar-modal-layout[data-v-af535929]{animation:modal-fade-af535929 .2s forwards}.scalar-modal[data-v-af535929]{animation:modal-pop-af535929 .15s .15s forwards;position:fixed;left:0;top:0;bottom:0;right:0;box-shadow:var(--scalar-shadow-2)}.dark-mode .scalar-modal[data-v-af535929]{background-color:color-mix(in srgb,var(--scalar-background-1),black)}.scalar-modal.scalar-modal-search[data-v-af535929]{max-width:540px;max-height:440px;background-color:transparent}.modal-content-search .modal-body[data-v-af535929]{padding:0;overflow:hidden;display:flex;flex-direction:column;max-height:440px}@media (max-width: 1280px){.scalar-modal[data-v-af535929]{max-height:calc(100% - 56px);top:28px}}@keyframes modal-fade-af535929{0%{opacity:0}to{opacity:1}}@keyframes modal-pop-af535929{0%{opacity:0}to{opacity:1}}@layer scalar-base,scalar-theme;@layer scalar-base{body{margin:0;line-height:inherit}}:where(.scalar-app){font-family:var(--scalar-font);line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4}@layer scalar-base{:root{--scalar-border-width: .5px;--scalar-radius: 3px;--scalar-radius-lg: 6px;--scalar-radius-xl: 8px;--scalar-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;--scalar-font-code: "JetBrains Mono", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;--scalar-heading-1: 40px;--scalar-page-description: 24px;--scalar-heading-2: 24px;--scalar-heading-3: 20px;--scalar-heading-4: 16px;--scalar-heading-5: 16px;--scalar-heading-6: 16px;--scalar-paragraph: 16px;--scalar-small: 14px;--scalar-mini: 13px;--scalar-micro: 12px;--scalar-bold: 600;--scalar-semibold: 500;--scalar-regular: 400;--scalar-font-size-1: 24px;--scalar-font-size-2: 16px;--scalar-font-size-3: 14px;--scalar-font-size-4: 13px;--scalar-font-size-5: 12px;--scalar-font-size-6: 12px;--scalar-font-size-7: 10px;--scalar-line-height-1: 32px;--scalar-line-height-2: 24px;--scalar-line-height-3: 20px;--scalar-line-height-4: 18px;--scalar-line-height-5: 16px;--scalar-font-medium: 500;--scalar-font-bold: 700;--scalar-text-decoration: none;--scalar-text-decoration-hover: underline}.dark-mode{color-scheme:dark;--scalar-scrollbar-color: rgba(255, 255, 255, .18);--scalar-scrollbar-color-active: rgba(255, 255, 255, .36);--scalar-button-1: rgba(255, 255, 255, 1);--scalar-button-1-hover: rgba(255, 255, 255, .9);--scalar-button-1-color: black;--scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, .1);--scalar-shadow-2: rgba(15, 15, 15, .2) 0px 3px 6px, rgba(15, 15, 15, .4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, .1);--scalar-lifted-brightness: 1.45;--scalar-backdrop-brightness: .5;--scalar-sidebar-indent-border: transparent;--scalar-sidebar-indent-border-hover: transparent;--scalar-sidebar-indent-border-active: transparent}.light-mode{color-scheme:light;--scalar-scrollbar-color-active: rgba(0, 0, 0, .36);--scalar-scrollbar-color: rgba(0, 0, 0, .18);--scalar-button-1: rgba(0, 0, 0, 1);--scalar-button-1-hover: rgba(0, 0, 0, .8);--scalar-button-1-color: rgba(255, 255, 255, .9);--scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, .11);--scalar-shadow-2: rgba(0, 0, 0, .08) 0px 13px 20px 0px, rgba(0, 0, 0, .08) 0px 3px 8px 0px, #eeeeed 0px 0 0 .5px;--scalar-lifted-brightness: 1;--scalar-backdrop-brightness: 1;--scalar-sidebar-indent-border: transparent;--scalar-sidebar-indent-border-hover: transparent;--scalar-sidebar-indent-border-active: transparent}.light-mode .dark-mode{color-scheme:dark!important}@media (max-width: 460px){:root{--scalar-font-size-1: 22px;--scalar-font-size-2: 14px;--scalar-font-size-3: 12px}}@media (max-width: 720px){:root{--scalar-heading-1: 24px;--scalar-page-description: 20px}}.light-mode{--scalar-background-1: #fff;--scalar-background-2: #f6f6f6;--scalar-background-3: #e7e7e7;--scalar-background-accent: #8ab4f81f;--scalar-color-1: #2a2f45;--scalar-color-2: #757575;--scalar-color-3: #8e8e8e;--scalar-color-accent: #0099ff;--scalar-border-color: rgba(0, 0, 0, .1)}.dark-mode{--scalar-background-1: #0f0f0f;--scalar-background-2: #1a1a1a;--scalar-background-3: #272727;--scalar-color-1: rgba(255, 255, 255, .9);--scalar-color-2: rgba(255, 255, 255, .62);--scalar-color-3: rgba(255, 255, 255, .44);--scalar-color-accent: #3ea6ff;--scalar-background-accent: #3ea6ff1f;--scalar-border-color: rgba(255, 255, 255, .1)}.light-mode .t-doc__sidebar,.dark-mode .t-doc__sidebar{--scalar-sidebar-background-1: var(--scalar-background-1);--scalar-sidebar-color-1: var(--scalar-color-1);--scalar-sidebar-color-2: var(--scalar-color-2);--scalar-sidebar-border-color: var(--scalar-border-color);--scalar-sidebar-item-hover-background: var(--scalar-background-2);--scalar-sidebar-item-hover-color: currentColor;--scalar-sidebar-item-active-background: var(--scalar-background-2);--scalar-sidebar-color-active: var(--scalar-color-1);--scalar-sidebar-search-background: transparent;--scalar-sidebar-search-color: var(--scalar-color-3);--scalar-sidebar-search-border-color: var(--scalar-border-color)}.light-mode{--scalar-color-green: #069061;--scalar-color-red: #ef0006;--scalar-color-yellow: #edbe20;--scalar-color-blue: #0082d0;--scalar-color-orange: #fb892c;--scalar-color-purple: #5203d1;--scalar-button-1: rgba(0, 0, 0, 1);--scalar-button-1-hover: rgba(0, 0, 0, .8);--scalar-button-1-color: rgba(255, 255, 255, .9)}.dark-mode{--scalar-color-green: #00b648;--scalar-color-red: #dc1b19;--scalar-color-yellow: #ffc90d;--scalar-color-blue: #4eb3ec;--scalar-color-orange: #ff8d4d;--scalar-color-purple: #b191f9;--scalar-button-1: rgba(255, 255, 255, 1);--scalar-button-1-hover: rgba(255, 255, 255, .9);--scalar-button-1-color: black}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }}:where(.scalar-app) .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:where(.scalar-app) .pointer-events-none{pointer-events:none}:where(.scalar-app) .visible{visibility:visible}:where(.scalar-app) .invisible{visibility:hidden}:where(.scalar-app) .\\!static{position:static!important}:where(.scalar-app) .static{position:static}:where(.scalar-app) .fixed{position:fixed}:where(.scalar-app) .absolute{position:absolute}:where(.scalar-app) .relative{position:relative}:where(.scalar-app) .sticky{position:sticky}:where(.scalar-app) .inset-0{top:0;right:0;bottom:0;left:0}:where(.scalar-app) .left-0{left:0}:where(.scalar-app) .left-3{left:12px}:where(.scalar-app) .top-0{top:0}:where(.scalar-app) .top-1\\/2{top:50%}:where(.scalar-app) .top-\\[0\\.5px\\]{top:.5px}:where(.scalar-app) .-z-1{z-index:-1}:where(.scalar-app) .z-\\[1001\\]{z-index:1001}:where(.scalar-app) .z-overlay{z-index:10000}:where(.scalar-app) .\\!m-0{margin:0!important}:where(.scalar-app) .m-0{margin:0}:where(.scalar-app) .m-1{margin:4px}:where(.scalar-app) .-mx-0{margin-left:-0px;margin-right:-0px}:where(.scalar-app) .-mx-0\\.75{margin-left:-3px;margin-right:-3px}:where(.scalar-app) .mx-2{margin-left:8px;margin-right:8px}:where(.scalar-app) .mx-auto{margin-left:auto;margin-right:auto}:where(.scalar-app) .my-0{margin-top:0;margin-bottom:0}:where(.scalar-app) .my-0\\.75{margin-top:3px;margin-bottom:3px}:where(.scalar-app) .my-3{margin-top:12px;margin-bottom:12px}:where(.scalar-app) .mb-0{margin-bottom:0}:where(.scalar-app) .ml-1{margin-left:4px}:where(.scalar-app) .mr-2{margin-right:8px}:where(.scalar-app) .mr-3{margin-right:12px}:where(.scalar-app) .mt-0{margin-top:0}:where(.scalar-app) .mt-1{margin-top:4px}:where(.scalar-app) .mt-1\\.5{margin-top:6px}:where(.scalar-app) .mt-20{margin-top:80px}:where(.scalar-app) .block{display:block}:where(.scalar-app) .inline-block{display:inline-block}:where(.scalar-app) .flex{display:flex}:where(.scalar-app) .grid{display:grid}:where(.scalar-app) .contents{display:contents}:where(.scalar-app) .hidden{display:none}:where(.scalar-app) .aspect-square{aspect-ratio:1 / 1}:where(.scalar-app) .size-10{width:40px;height:40px}:where(.scalar-app) .size-2{width:8px;height:8px}:where(.scalar-app) .size-2\\.5{width:10px;height:10px}:where(.scalar-app) .size-3{width:12px;height:12px}:where(.scalar-app) .size-3\\.5{width:14px;height:14px}:where(.scalar-app) .size-4{width:16px;height:16px}:where(.scalar-app) .size-5{width:20px;height:20px}:where(.scalar-app) .size-6{width:24px;height:24px}:where(.scalar-app) .size-8{width:32px;height:32px}:where(.scalar-app) .size-full{width:100%;height:100%}:where(.scalar-app) .h-10{height:40px}:where(.scalar-app) .h-4{height:16px}:where(.scalar-app) .h-72{height:288px}:where(.scalar-app) .h-8{height:32px}:where(.scalar-app) .h-\\[100dvh\\]{height:100dvh}:where(.scalar-app) .h-fit{height:-moz-fit-content;height:fit-content}:where(.scalar-app) .h-full{height:100%}:where(.scalar-app) .h-px{height:1px}:where(.scalar-app) .h-screen{height:100vh}:where(.scalar-app) .max-h-\\[440px\\]{max-height:440px}:where(.scalar-app) .max-h-\\[calc\\(100dvh-240px\\)\\]{max-height:calc(100dvh - 240px)}:where(.scalar-app) .min-h-\\[77px\\]{min-height:77px}:where(.scalar-app) .w-4{width:16px}:where(.scalar-app) .w-40{width:160px}:where(.scalar-app) .w-48{width:192px}:where(.scalar-app) .w-56{width:224px}:where(.scalar-app) .w-\\[100dvw\\]{width:100dvw}:where(.scalar-app) .w-full{width:100%}:where(.scalar-app) .min-w-0{min-width:0px}:where(.scalar-app) .max-w-screen-lg{max-width:800px}:where(.scalar-app) .max-w-screen-md{max-width:640px}:where(.scalar-app) .max-w-screen-sm{max-width:540px}:where(.scalar-app) .max-w-screen-xs{max-width:480px}:where(.scalar-app) .flex-1{flex:1 1 0%}:where(.scalar-app) .origin-top-left{transform-origin:top left}:where(.scalar-app) .-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:where(.scalar-app) .rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:where(.scalar-app) .transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:where(.scalar-app) .cursor-not-allowed{cursor:not-allowed}:where(.scalar-app) .cursor-pointer{cursor:pointer}:where(.scalar-app) .resize-none{resize:none}:where(.scalar-app) .resize{resize:both}:where(.scalar-app) .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}:where(.scalar-app) .flex-col{flex-direction:column}:where(.scalar-app) .flex-wrap{flex-wrap:wrap}:where(.scalar-app) .items-start{align-items:flex-start}:where(.scalar-app) .items-center{align-items:center}:where(.scalar-app) .justify-start{justify-content:flex-start}:where(.scalar-app) .justify-center{justify-content:center}:where(.scalar-app) .justify-between{justify-content:space-between}:where(.scalar-app) .gap-0{gap:0px}:where(.scalar-app) .gap-0\\.75{gap:3px}:where(.scalar-app) .gap-1{gap:4px}:where(.scalar-app) .gap-1\\.5{gap:6px}:where(.scalar-app) .gap-16{gap:64px}:where(.scalar-app) .gap-2{gap:8px}:where(.scalar-app) .gap-2\\.5{gap:10px}:where(.scalar-app) .gap-4{gap:16px}:where(.scalar-app) .divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(var(--scalar-border-width) * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(var(--scalar-border-width) * var(--tw-divide-y-reverse))}:where(.scalar-app) .self-center{align-self:center}:where(.scalar-app) .overflow-hidden{overflow:hidden}:where(.scalar-app) .overflow-y-auto{overflow-y:auto}:where(.scalar-app) .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(.scalar-app) .text-wrap{text-wrap:wrap}:where(.scalar-app) .rounded{border-radius:var(--scalar-radius)}:where(.scalar-app) .rounded-full{border-radius:9999px}:where(.scalar-app) .rounded-lg{border-radius:var(--scalar-radius-lg)}:where(.scalar-app) .rounded-none{border-radius:0}:where(.scalar-app) .border{border-width:var(--scalar-border-width)}:where(.scalar-app) .border-0{border-width:0}:where(.scalar-app) .border-t{border-top-width:var(--scalar-border-width)}:where(.scalar-app) .border-solid{border-style:solid}:where(.scalar-app) .border-dashed{border-style:dashed}:where(.scalar-app) .border-none{border-style:none}:where(.scalar-app) .border-border{border-color:var(--scalar-border-color)}:where(.scalar-app) .border-c-3{border-color:var(--scalar-color-3)}:where(.scalar-app) .bg-b-1{background-color:var(--scalar-background-1)}:where(.scalar-app) .bg-b-2{background-color:var(--scalar-background-2)}:where(.scalar-app) .bg-b-btn{background-color:var(--scalar-button-1)}:where(.scalar-app) .bg-backdrop{background-color:#00000038}:where(.scalar-app) .bg-blue{background-color:var(--scalar-color-blue)}:where(.scalar-app) .bg-border{background-color:var(--scalar-border-color)}:where(.scalar-app) .bg-red{background-color:var(--scalar-color-red)}:where(.scalar-app) .bg-transparent{background-color:transparent}:where(.scalar-app) .p-0{padding:0}:where(.scalar-app) .p-0\\.5{padding:2px}:where(.scalar-app) .p-0\\.75{padding:3px}:where(.scalar-app) .p-1{padding:4px}:where(.scalar-app) .p-2{padding:8px}:where(.scalar-app) .p-2\\.5{padding:10px}:where(.scalar-app) .p-3{padding:12px}:where(.scalar-app) .p-6{padding:24px}:where(.scalar-app) .p-\\[3px\\]{padding:3px}:where(.scalar-app) .px-1{padding-left:4px;padding-right:4px}:where(.scalar-app) .px-2{padding-left:8px;padding-right:8px}:where(.scalar-app) .px-2\\.5{padding-left:10px;padding-right:10px}:where(.scalar-app) .px-3{padding-left:12px;padding-right:12px}:where(.scalar-app) .px-4{padding-left:16px;padding-right:16px}:where(.scalar-app) .px-6{padding-left:24px;padding-right:24px}:where(.scalar-app) .px-9{padding-left:36px;padding-right:36px}:where(.scalar-app) .py-1{padding-top:4px;padding-bottom:4px}:where(.scalar-app) .py-1\\.5{padding-top:6px;padding-bottom:6px}:where(.scalar-app) .py-2{padding-top:8px;padding-bottom:8px}:where(.scalar-app) .py-2\\.5{padding-top:10px;padding-bottom:10px}:where(.scalar-app) .py-4{padding-top:16px;padding-bottom:16px}:where(.scalar-app) .pb-0{padding-bottom:0}:where(.scalar-app) .pl-8{padding-left:32px}:where(.scalar-app) .pr-3{padding-right:12px}:where(.scalar-app) .pt-3{padding-top:12px}:where(.scalar-app) .pt-6{padding-top:24px}:where(.scalar-app) .text-left{text-align:left}:where(.scalar-app) .font-code{font-family:var(--scalar-font-code)}:where(.scalar-app) .text-lg{font-size:var(--scalar-font-size-2)}:where(.scalar-app) .text-sm{font-size:var(--scalar-font-size-4)}:where(.scalar-app) .text-xs{font-size:var(--scalar-font-size-5)}:where(.scalar-app) .text-xxs{font-size:var(--scalar-font-size-6)}:where(.scalar-app) .font-bold{font-weight:var(--scalar-bold)}:where(.scalar-app) .font-medium{font-weight:var(--scalar-semibold)}:where(.scalar-app) .font-normal{font-weight:var(--scalar-regular)}:where(.scalar-app) .leading-none{line-height:1}:where(.scalar-app) .leading-snug{line-height:1.375}:where(.scalar-app) .text-b-1{color:var(--scalar-background-1)}:where(.scalar-app) .text-c-1{color:var(--scalar-color-1)}:where(.scalar-app) .text-c-2{color:var(--scalar-color-2)}:where(.scalar-app) .text-c-3{color:var(--scalar-color-3)}:where(.scalar-app) .text-c-btn{color:var(--scalar-button-1-color)}:where(.scalar-app) .text-c-ghost{color:var(--scalar-color-ghost)}:where(.scalar-app) .text-red{color:var(--scalar-color-red)}:where(.scalar-app) .text-transparent{color:transparent}:where(.scalar-app) .text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}:where(.scalar-app) .no-underline{text-decoration-line:none}:where(.scalar-app) .opacity-0{opacity:0}:where(.scalar-app) .opacity-50{opacity:.5}:where(.scalar-app) .shadow{--tw-shadow: var(--scalar-shadow-1);--tw-shadow-colored: var(--scalar-shadow-1);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:where(.scalar-app) .shadow-lg{--tw-shadow: var(--scalar-shadow-2);--tw-shadow-colored: var(--scalar-shadow-2);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:where(.scalar-app) .shadow-md{--tw-shadow: var(--scalar-shadow-1);--tw-shadow-colored: var(--scalar-shadow-1);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:where(.scalar-app) .shadow-none{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:where(.scalar-app) .shadow-sm{--tw-shadow: rgba(0, 0, 0, .09) 0px 1px 4px;--tw-shadow-colored: 0px 1px 4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:where(.scalar-app) .shadow-current{--tw-shadow-color: currentColor;--tw-shadow: var(--tw-shadow-colored)}:where(.scalar-app) .outline-none{outline:2px solid transparent;outline-offset:2px}:where(.scalar-app) .outline{outline-style:solid}:where(.scalar-app) .blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:where(.scalar-app) .brightness-lifted{--tw-brightness: brightness(var(--scalar-lifted-brightness));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:where(.scalar-app) .filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:where(.scalar-app) .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:where(.scalar-app) .transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:where(.scalar-app) .transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:where(.scalar-app) .ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}:where(.scalar-app) .bg-b-1{--tw-bg-base: var(--scalar-background-1)}:where(.scalar-app) .bg-b-2{--tw-bg-base: var(--scalar-background-2)}:where(.scalar-app) .bg-b-btn{--tw-bg-base: var(--scalar-button-1)}:where(.scalar-app) .bg-backdrop{--tw-bg-base: rgba(0, 0, 0, .22)}:where(.scalar-app) .bg-blue{--tw-bg-base: var(--scalar-color-blue)}:where(.scalar-app) .bg-border{--tw-bg-base: var(--scalar-border-color)}:where(.scalar-app) .bg-red{--tw-bg-base: var(--scalar-color-red)}:where(.scalar-app) .bg-transparent{--tw-bg-base: transparent}:where(.scalar-app) .row,:where(.scalar-app) .scalar-row{display:flex;flex-direction:row}:where(.scalar-app) .col{display:flex;flex-direction:column}:where(.scalar-app) .centered-x{left:50%;--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:where(.scalar-app) .centered{left:50%;--tw-translate-x: -50%;top:50%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:where(.scalar-app) .before\\:mr-1:before{content:var(--tw-content);margin-right:4px}:where(.scalar-app) .before\\:mr-1\\.5:before{content:var(--tw-content);margin-right:6px}:where(.scalar-app) .before\\:block:before{content:var(--tw-content);display:block}:where(.scalar-app) .before\\:h-4:before{content:var(--tw-content);height:16px}:where(.scalar-app) .before\\:w-4:before{content:var(--tw-content);width:16px}:where(.scalar-app) .before\\:rounded-full:before{content:var(--tw-content);border-radius:9999px}:where(.scalar-app) .before\\:text-center:before{content:var(--tw-content);text-align:center}:where(.scalar-app) .before\\:text-xxs:before{content:var(--tw-content);font-size:var(--scalar-font-size-6)}:where(.scalar-app) .before\\:leading-4:before{content:var(--tw-content);line-height:var(--scalar-line-height-4)}:where(.scalar-app) .before\\:text-white:before{content:var(--tw-content);--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}:where(.scalar-app) .first-of-type\\:mt-0:first-of-type{margin-top:0}:where(.scalar-app) .first-of-type\\:mt-0\\.75:first-of-type{margin-top:3px}:where(.scalar-app) .last-of-type\\:mb-0:last-of-type{margin-bottom:0}:where(.scalar-app) .last-of-type\\:mb-0\\.75:last-of-type{margin-bottom:3px}:where(.scalar-app) .empty\\:hidden:empty{display:none}:where(.scalar-app) .focus-within\\:border-c-1:focus-within{border-color:var(--scalar-color-1)}:where(.scalar-app) .hover\\:bg-b-2:hover{background-color:var(--scalar-background-2)}:where(.scalar-app) .hover\\:text-c-1:hover{color:var(--scalar-color-1)}:where(.scalar-app) .hover\\:bg-b-2:hover{--tw-bg-base: var(--scalar-background-2)}:where(.scalar-app) .active\\:bg-b-btn:active{background-color:var(--scalar-button-1)}:where(.scalar-app) .active\\:text-c-1:active{color:var(--scalar-color-1)}:where(.scalar-app) .active\\:shadow-none:active{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:where(.scalar-app) .active\\:brightness-90:active{--tw-brightness: brightness(.9);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:where(.scalar-app) .active\\:bg-b-btn:active{--tw-bg-base: var(--scalar-button-1)}:where(.scalar-app) .group:hover .group-hover\\:text-c-1{color:var(--scalar-color-1)}:where(.scalar-app) .group:hover .group-hover\\:shadow-border{--tw-shadow: inset 0 0 0 1px var(--scalar-border-color);--tw-shadow-colored: inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:where(.scalar-app) .group:hover .group-hover\\:shadow-border{--tw-shadow-color: var(--scalar-border-color);--tw-shadow: var(--tw-shadow-colored)}:where(.scalar-app) .ui-open\\:rotate-180[data-headlessui-state~=open]{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:where(.scalar-app) :where([data-headlessui-state~=open]) .ui-open\\:rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:where(.scalar-app) .has-actv-btn\\:border:has(button:active){border-width:var(--scalar-border-width)}:where(.scalar-app) .has-actv-btn\\:border-border:has(button:active){border-color:var(--scalar-border-color)}:where(.scalar-app) .\\!empty\\:flex:not(:empty){display:flex}:where(.scalar-app) .\\!empty\\:w-7:not(:empty){width:28px}:where(.scalar-app) .\\!empty\\:items-center:not(:empty){align-items:center}:where(.scalar-app) .\\!empty\\:pr-3:not(:empty){padding-right:12px}:where(.scalar-app) .hocus\\:bg-h-btn:hover{background-color:var(--scalar-button-1-hover)}:where(.scalar-app) .hocus\\:text-c-1:hover{color:var(--scalar-color-1)}:where(.scalar-app) .hocus\\:brightness-90:hover{--tw-brightness: brightness(.9);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:where(.scalar-app) .hocus\\:bg-h-btn:hover{--tw-bg-base: var(--scalar-button-1-hover)}:where(.scalar-app) .hocus\\:bg-h-btn:focus-visible{background-color:var(--scalar-button-1-hover)}:where(.scalar-app) .hocus\\:text-c-1:focus-visible{color:var(--scalar-color-1)}:where(.scalar-app) .hocus\\:brightness-90:focus-visible{--tw-brightness: brightness(.9);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:where(.scalar-app) .hocus\\:bg-h-btn:focus-visible{--tw-bg-base: var(--scalar-button-1-hover)}@media (min-width: 800px){:where(.scalar-app) .md\\:row{display:flex;flex-direction:row}}.loader-wrapper[data-v-ece8e3a4]{position:relative;height:var(--64dccfe9);width:var(--64dccfe9);display:flex;align-items:center;justify-content:center;--loader-size: 50%}.svg-loader[data-v-ece8e3a4]{width:var(--loader-size);height:var(--loader-size);top:1rem;right:.9rem;overflow:visible;fill:none;background-color:transparent;stroke:currentColor}.svg-path[data-v-ece8e3a4]{stroke-width:14;fill:none;transition:.3s}.svg-x-mark[data-v-ece8e3a4]{stroke-dasharray:57;stroke-dashoffset:57;transition-delay:0s}.svg-check-mark[data-v-ece8e3a4]{stroke-dasharray:149;stroke-dashoffset:149;transition-delay:0s}.icon-is-invalid .svg-x-mark[data-v-ece8e3a4],.icon-is-valid .svg-check-mark[data-v-ece8e3a4]{stroke-dashoffset:0;transition-delay:.3s}.circular-loader[data-v-ece8e3a4]{animation:rotate-ece8e3a4 .7s linear infinite,fade-in-ece8e3a4 .4s;transform-origin:center center;transform:scale(5);background:transparent}.loader-path[data-v-ece8e3a4]{stroke-dasharray:50,200;stroke-dashoffset:-100;stroke-linecap:round}.loader-path-off[data-v-ece8e3a4]{stroke-dasharray:50,200;stroke-dashoffset:-100;transition:opacity .3s;opacity:0}@keyframes fade-in-ece8e3a4{0%{opacity:0}70%{opacity:0}to{opacity:1}}@keyframes rotate-ece8e3a4{0%{transform:scale(5) rotate(0)}to{transform:scale(5) rotate(360deg)}}.scalar-icon[data-v-43d05207],.scalar-icon[data-v-43d05207] *{stroke-width:var(--5933775d)}.scalar-code-block{position:relative}.scalar-code-block:hover .copy-button{opacity:100;visibility:visible}.scalar-code-block .scalar-code-scroll.custom-scroll{padding:.5rem .5rem .5rem .75rem;overflow-x:auto;overflow-y:hidden}.scalar-codeblock-pre{margin:0;background:transparent;text-wrap:nowrap;white-space-collapse:preserve;border-radius:0}.scalar-code-copy{display:flex;align-items:start;justify-content:end;position:sticky;top:0;right:0;bottom:0;left:0}.copy-button{position:relative;top:8px;right:8px;display:flex;align-items:center;background-color:var(--scalar-background-2);border:1px solid var(--scalar-border-color);border-radius:3px;color:var(--scalar-color-3);cursor:pointer;height:30px;margin-bottom:-30px;opacity:0;padding:6px;transition:opacity .15s ease-in-out,color .15s ease-in-out;visibility:hidden}.scalar-code-copy,.copy-button{background:inherit}.copy-button:after{content:".";color:transparent;font-size:var(--scalar-mini);line-height:1.35;width:0px}.copy-button:hover{color:var(--scalar-color-1)}.copy-button svg{stroke-width:1.5}.scalar-app code.hljs *{font-size:var(--scalar-small);font-family:var(--scalar-font-code);text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.4;-moz-tab-size:4;-o-tab-size:4;tab-size:4}.scalar-app code.hljs{font-size:var(--scalar-small);font-family:var(--scalar-font-code);display:inline-block;counter-reset:linenumber}.scalar-app .hljs{background:transparent;color:var(--scalar-color-2)}.scalar-app .hljs .line:before{color:var(--scalar-color-3);display:inline-block;counter-increment:linenumber;content:counter(linenumber);margin-right:.7em;min-width:calc(var(--line-digits) * 1ch);text-align:right}.scalar-app .hljs-comment,.scalar-app .hljs-quote{color:var(--scalar-color-3);font-style:italic}.scalar-app .hljs-number{color:var(--scalar-color-orange)}.scalar-app .hljs-regexp,.scalar-app .hljs-string,.scalar-app .hljs-built_in{color:var(--scalar-color-blue)}.scalar-app .hljs-title.class_{color:var(--scalar-color-1)}.scalar-app .hljs-keyword{color:var(--scalar-color-purple)}.scalar-app .hljs-title.function_{color:var(--scalar-color-orange)}.scalar-app .hljs-subst,.scalar-app .hljs-name{color:var(--scalar-color-blue)}.scalar-app .hljs-attr,.scalar-app .hljs-attribute{color:var(--scalar-color-1)}.scalar-app .hljs-addition,.scalar-app .hljs-literal,.scalar-app .hljs-selector-tag,.scalar-app .hljs-type{color:var(--scalar-color-green)}.scalar-app .hljs-selector-attr,.scalar-app .hljs-selector-pseudo{color:var(--scalar-color-orange)}.scalar-app .hljs-doctag,.scalar-app .hljs-section,.scalar-app .hljs-title{color:var(--scalar-color-blue)}.scalar-app .hljs-selector-id,.scalar-app .hljs-template-variable,.scalar-app .hljs-variable{color:var(--scalar-color-1)}.scalar-app .hljs-name,.scalar-app .hljs-section,.scalar-app .hljs-strong{font-weight:var(--scalar-semibold)}.scalar-app .hljs-bullet,.scalar-app .hljs-link,.scalar-app .hljs-meta,.scalar-app .hljs-symbol{color:var(--scalar-color-blue)}.scalar-app .hljs-deletion{color:var(--scalar-color-red)}.scalar-app .hljs-formula{background:var(--scalar-color-1)}.scalar-app .hljs-emphasis{font-style:italic}.scalar-app .credentials{font-size:0!important;color:transparent}.scalar-app .credentials:after{content:"·····";font-size:var(--scalar-small);color:var(--scalar-color-3);-webkit-user-select:none;-moz-user-select:none;user-select:none}.hljs.language-html{color:var(--scalar-color-1)}.hljs.language-html .hljs-attr{color:var(--scalar-color-2)}.hljs.language-curl .hljs-keyword{color:var(--scalar-color-orange)}.hljs.language-curl .hljs-string{color:var(--scalar-color-1)}.hljs.language-curl .hljs-literal,.hljs.language-php .hljs-variable{color:var(--scalar-color-blue)}.hljs.language-objectivec .hljs-meta{color:var(--scalar-color-1)}.hljs.language-objectivec .hljs-built_in,.hljs-built_in{color:var(--scalar-color-orange)}.scalar-app .markdown{font-family:var(--scalar-font);color:var(--scalar-color-1);word-break:break-word}.scalar-app .markdown h1,.scalar-app .markdown h2,.scalar-app .markdown h3,.scalar-app .markdown h4,.scalar-app .markdown h5,.scalar-app .markdown h6,.scalar-app .markdown p,.scalar-app .markdown div,.scalar-app .markdown img,.scalar-app .markdown details,.scalar-app .markdown summary,.scalar-app .markdown ul,.scalar-app .markdown ol,.scalar-app .markdown table,.scalar-app .markdown blockquote,.scalar-app .markdown code{margin:12px 0}.scalar-app .markdown details{margin:12px 0;color:var(--scalar-color-1)}.scalar-app .markdown summary{display:block;margin:12px 0;padding-left:20px;position:relative;font-weight:var(--scalar-semibold);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.scalar-app .markdown summary:after{display:block;content:"";position:absolute;top:1px;left:1px;width:16px;height:16px;background-color:var(--scalar-color-3);-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 19.5L15.75 12L8.25 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 19.5L15.75 12L8.25 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')}.scalar-app .markdown summary:hover:after{background-color:var(--scalar-color-1)}.scalar-app .markdown details[open] summary:after{transform:rotate(90deg)}.scalar-app .markdown summary::-webkit-details-marker{display:none}.scalar-app .markdown img{overflow:hidden;border-radius:var(--scalar-radius);max-width:100%}.scalar-app .markdown>:first-child{margin-top:0;margin-bottom:0}.scalar-app .markdown h1{--font-size: 1.4em}.scalar-app .markdown h2{--font-size: 1.25em}.scalar-app .markdown h3{--font-size: 1.1em}.scalar-app .markdown h4,.scalar-app .markdown h6{--font-size: 1em}.scalar-app .markdown h1,.scalar-app .markdown h2,.scalar-app .markdown h3,.scalar-app .markdown h4,.scalar-app .markdown h5,.scalar-app .markdown h6{font-size:var(--font-size);margin:18px 0 6px;font-weight:var(--scalar-bold);display:block;line-height:1.45}.scalar-app .markdown b,.scalar-app .markdown strong{font-weight:var(--scalar-bold)}.scalar-app .markdown p{color:var(--scalar-color-1);font-weight:var(--font-weight, var(--scalar-regular));line-height:1.5;margin-bottom:0;display:block}.scalar-app .markdown ul,.scalar-app .markdown ol{padding-left:24px;line-height:1.5;margin:12px 0;display:block}.scalar-app .markdown ul{list-style:disc}.scalar-app .markdown ol{list-style:decimal}.scalar-app .markdown ul.contains-task-list{list-style:none;padding-left:0}.scalar-app .markdown li{margin:6px 0;display:list-item}.scalar-app .markdown ul:first-of-type li:first-of-type{margin-top:0}.scalar-app .markdown a{color:var(--scalar-color-accent);-webkit-text-decoration:var(--scalar-text-decoration);text-decoration:var(--scalar-text-decoration);cursor:pointer}.scalar-app .markdown a:hover{-webkit-text-decoration:var(--scalar-text-decoration-hover);text-decoration:var(--scalar-text-decoration-hover)}.scalar-app .markdown em{font-style:italic}.scalar-app .markdown sup{font-size:var(--scalar-micro);vertical-align:super;font-weight:450}.scalar-app .markdown sub{font-size:var(--scalar-micro);vertical-align:sub;font-weight:450}.scalar-app .markdown del{text-decoration:line-through}.scalar-app .markdown code{font-family:var(--scalar-font-code);background-color:var(--scalar-background-2);box-shadow:0 0 0 var(--scalar-border-width) var(--scalar-border-color);font-size:var(--scalar-micro);border-radius:2px;padding:0 3px}.scalar-app .markdown pre code{display:block;white-space:pre;padding:12px;line-height:1.5;margin:12px 0;-webkit-overflow-scrolling:touch;overflow-x:auto;max-width:100%;min-width:100px}.scalar-app .markdown hr{border:none;border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.scalar-app .markdown blockquote{border-left:3px solid var(--scalar-border-color);padding-left:12px;margin:0;display:block}.scalar-app .markdown table{display:block;overflow-x:auto;position:relative;border-collapse:collapse;width:-moz-max-content;width:max-content;max-width:100%;margin:1em 0;box-shadow:0 0 0 var(--scalar-border-width) var(--scalar-border-color);border-radius:var(--scalar-radius-lg)}.scalar-app .markdown tbody{display:table-row-group;vertical-align:middle}.scalar-app .markdown thead{display:table-header-group;vertical-align:middle}.scalar-app .markdown tr{display:table-row;border-color:inherit;vertical-align:inherit}.scalar-app .markdown td,.scalar-app .markdown th{display:table-cell;vertical-align:inherit;min-width:1em;padding:6px 9px;vertical-align:top;line-height:1.5;position:relative;word-break:initial;font-size:var(--scalar-small);color:var(--scalar-color-1);font-weight:var(--font-weight, var(--scalar-regular));border-right:var(--scalar-border-width) solid var(--scalar-border-color);border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.scalar-app .markdown td>*,.scalar-app .markdown th>*{margin-bottom:0}.scalar-app .markdown th:empty{display:none}.scalar-app .markdown td:first-of-type,.scalar-app .markdown th:first-of-type{border-left:none}.scalar-app .markdown td:last-of-type,.scalar-app .markdown th:last-of-type{border-right:none}.scalar-app .markdown tr:last-of-type td{border-bottom:none}.scalar-app .markdown th{font-weight:var(--scalar-semibold)!important;text-align:left;border-left-color:transparent;background:var(--scalar-background-2)}.scalar-app .markdown tr>[align=left]{text-align:left}.scalar-app .markdown tr>[align=right]{text-align:right}.scalar-app .markdown tr>[align=center]{text-align:center}.scalar-input-wrapper-focus .scalar-input-label[data-v-73231cf7]{color:var(--scalar-color-1)}.scalar-input-wrapper-error .scalar-input-label[data-v-73231cf7]{color:var(--scalar-color-error-color)}.scalar-input[data-v-73231cf7]::-moz-selection{color:var(--scalar-color-1);background:#ffa55859}.scalar-input[data-v-73231cf7]::selection{color:var(--scalar-color-1);background:#ffa55859}.scalar-input[data-v-73231cf7]:has(+.scalar-input-label){opacity:0}.scalar-input[data-v-73231cf7]:not(:-moz-placeholder-shown){opacity:1;-moz-transition:opacity .2s ease-in-out .15s;transition:opacity .2s ease-in-out .15s}.scalar-input[data-v-73231cf7]:not(:placeholder-shown),.scalar-input-wrapper-focus .scalar-input[data-v-73231cf7]{opacity:1;transition:opacity .2s ease-in-out .15s}.scalar-input[data-v-73231cf7]:-webkit-autofill,.scalar-input[data-v-73231cf7]:-webkit-autofill:hover,.scalar-input[data-v-73231cf7]:-webkit-autofill:focus,.scalar-input[data-v-73231cf7]:-webkit-autofill:active,.scalar-input[data-v-73231cf7]:focus-within:-webkit-autofill,.scalar-input[data-v-73231cf7]:focus-within:-webkit-autofill:hover,.scalar-input[data-v-73231cf7]:focus-within:-webkit-autofill:focus,.scalar-input[data-v-73231cf7]:focus-within:-webkit-autofill:active{-webkit-box-shadow:0 0 0px 1000px var(--scalar-background-1) inset!important;-webkit-text-fill-color:var(--scalar-color-1);color:var(--scalar-color-1);border-radius:var(--scalar-radius)}.scalar-input:not(:-moz-placeholder-shown)+.scalar-input-label[data-v-73231cf7]{transform:translate3d(0,-20px,0) scale(.8);transform-origin:top left}.scalar-input-wrapper-focus .scalar-input-label[data-v-73231cf7],.scalar-input:not(:placeholder-shown)+.scalar-input-label[data-v-73231cf7]{transform:translate3d(0,-20px,0) scale(.8);transform-origin:top left}.scalar-input-wrapper-focus:has(button:active) .scalar-input-label[data-v-73231cf7]{color:var(--scalar-color-3)!important}@layer scalar-base,scalar-theme;@layer scalar-base{body{margin:0;line-height:inherit}}:where(.scalar-app){font-family:var(--scalar-font);line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4}:where(.scalar-app) *,:where(.scalar-app) *:before,:where(.scalar-app) *:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--scalar-border-color);font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;color:inherit;margin:unset;padding:unset;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:where(.scalar-app) :before,:where(.scalar-app) :after{--tw-content: ""}:where(.scalar-app) button,:where(.scalar-app) input,:where(.scalar-app) optgroup,:where(.scalar-app) select,:where(.scalar-app) textarea,:where(.scalar-app) ::file-selector-button{background:transparent}:where(.scalar-app) ol,:where(.scalar-app) ul,:where(.scalar-app) menu{list-style:none}:where(.scalar-app) input:where(:not([type=button],[type=reset],[type=submit])),:where(.scalar-app) select,:where(.scalar-app) textarea{border-radius:var(--scalar-radius);border-width:1px}:where(.scalar-app) input::placeholder,:where(.scalar-app) input:-ms-input-placeholder,:where(.scalar-app) input::-webkit-input-placeholder{color:var(--scalar-color-3);font-family:var(--scalar-font)}:where(.scalar-app) input:-webkit-autofill{-webkit-background-clip:text!important;background-clip:text!important}:where(.scalar-app) :focus-visible{outline:1px solid var(--scalar-color-accent);outline-offset:1px}:where(.scalar-app) button,:where(.scalar-app) [role=button]{cursor:pointer}:where(.scalar-app) :disabled{cursor:default}:where(.scalar-app) img,:where(.scalar-app) svg,:where(.scalar-app) video,:where(.scalar-app) canvas,:where(.scalar-app) audio,:where(.scalar-app) iframe,:where(.scalar-app) embed,:where(.scalar-app) object{display:block;vertical-align:middle}:where(.scalar-app) [hidden]{display:none}.scalar-app .cm-scroller,.scalar-app .custom-scroll{overflow-y:auto;scrollbar-color:transparent transparent;scrollbar-width:thin;-webkit-overflow-scrolling:touch}.scalar-app .custom-scroll-self-contain-overflow{overscroll-behavior:contain}.scalar-app .cm-scroller:hover,.scalar-app .custom-scroll:hover{scrollbar-color:var(--scalar-scrollbar-color, transparent) transparent}.scalar-app .cm-scroller:hover::-webkit-scrollbar-thumb,.scalar-app .custom-scroll:hover::-webkit-scrollbar-thumb{background:var(--scalar-scrollbar-color);background-clip:content-box;border:3px solid transparent}.scalar-app .cm-scroller::-webkit-scrollbar-thumb:active,.scalar-app .custom-scroll::-webkit-scrollbar-thumb:active{background:var(--scalar-scrollbar-color-active);background-clip:content-box;border:3px solid transparent}.scalar-app .cm-scroller::-webkit-scrollbar-corner,.scalar-app .custom-scroll::-webkit-scrollbar-corner{background:transparent}.scalar-app .cm-scroller::-webkit-scrollbar,.scalar-app .custom-scroll::-webkit-scrollbar{height:12px;width:12px}.scalar-app .cm-scroller::-webkit-scrollbar-track,.scalar-app .custom-scroll::-webkit-scrollbar-track{background:transparent}.scalar-app .cm-scroller::-webkit-scrollbar-thumb,.scalar-app .custom-scroll::-webkit-scrollbar-thumb{border-radius:20px;background:transparent;background-clip:content-box;border:3px solid transparent}@media (pointer: coarse){.scalar-app .cm-scroller,.scalar-app .custom-scroll{padding-right:12px}}@layer scalar-base{:root{--scalar-border-width: .5px;--scalar-radius: 3px;--scalar-radius-lg: 6px;--scalar-radius-xl: 8px;--scalar-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;--scalar-font-code: "JetBrains Mono", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;--scalar-heading-1: 40px;--scalar-page-description: 24px;--scalar-heading-2: 24px;--scalar-heading-3: 20px;--scalar-heading-4: 16px;--scalar-heading-5: 16px;--scalar-heading-6: 16px;--scalar-paragraph: 16px;--scalar-small: 14px;--scalar-mini: 13px;--scalar-micro: 12px;--scalar-bold: 600;--scalar-semibold: 500;--scalar-regular: 400;--scalar-font-size-1: 24px;--scalar-font-size-2: 16px;--scalar-font-size-3: 14px;--scalar-font-size-4: 13px;--scalar-font-size-5: 12px;--scalar-font-size-6: 12px;--scalar-font-size-7: 10px;--scalar-line-height-1: 32px;--scalar-line-height-2: 24px;--scalar-line-height-3: 20px;--scalar-line-height-4: 18px;--scalar-line-height-5: 16px;--scalar-font-medium: 500;--scalar-font-bold: 700;--scalar-text-decoration: none;--scalar-text-decoration-hover: underline}.dark-mode{color-scheme:dark;--scalar-scrollbar-color: rgba(255, 255, 255, .18);--scalar-scrollbar-color-active: rgba(255, 255, 255, .36);--scalar-button-1: rgba(255, 255, 255, 1);--scalar-button-1-hover: rgba(255, 255, 255, .9);--scalar-button-1-color: black;--scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, .1);--scalar-shadow-2: rgba(15, 15, 15, .2) 0px 3px 6px, rgba(15, 15, 15, .4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, .1);--scalar-lifted-brightness: 1.45;--scalar-backdrop-brightness: .5;--scalar-sidebar-indent-border: transparent;--scalar-sidebar-indent-border-hover: transparent;--scalar-sidebar-indent-border-active: transparent}.light-mode{color-scheme:light;--scalar-scrollbar-color-active: rgba(0, 0, 0, .36);--scalar-scrollbar-color: rgba(0, 0, 0, .18);--scalar-button-1: rgba(0, 0, 0, 1);--scalar-button-1-hover: rgba(0, 0, 0, .8);--scalar-button-1-color: rgba(255, 255, 255, .9);--scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, .11);--scalar-shadow-2: rgba(0, 0, 0, .08) 0px 13px 20px 0px, rgba(0, 0, 0, .08) 0px 3px 8px 0px, #eeeeed 0px 0 0 .5px;--scalar-lifted-brightness: 1;--scalar-backdrop-brightness: 1;--scalar-sidebar-indent-border: transparent;--scalar-sidebar-indent-border-hover: transparent;--scalar-sidebar-indent-border-active: transparent}.light-mode .dark-mode{color-scheme:dark!important}@media (max-width: 460px){:root{--scalar-font-size-1: 22px;--scalar-font-size-2: 14px;--scalar-font-size-3: 12px}}@media (max-width: 720px){:root{--scalar-heading-1: 24px;--scalar-page-description: 20px}}}@layer scalar-base{.light-mode{--scalar-background-1: #fff;--scalar-background-2: #f6f6f6;--scalar-background-3: #e7e7e7;--scalar-background-accent: #8ab4f81f;--scalar-color-1: #2a2f45;--scalar-color-2: #757575;--scalar-color-3: #8e8e8e;--scalar-color-accent: #0099ff;--scalar-border-color: rgba(0, 0, 0, .1)}.dark-mode{--scalar-background-1: #0f0f0f;--scalar-background-2: #1a1a1a;--scalar-background-3: #272727;--scalar-color-1: rgba(255, 255, 255, .9);--scalar-color-2: rgba(255, 255, 255, .62);--scalar-color-3: rgba(255, 255, 255, .44);--scalar-color-accent: #3ea6ff;--scalar-background-accent: #3ea6ff1f;--scalar-border-color: rgba(255, 255, 255, .1)}.light-mode .t-doc__sidebar,.dark-mode .t-doc__sidebar{--scalar-sidebar-background-1: var(--scalar-background-1);--scalar-sidebar-color-1: var(--scalar-color-1);--scalar-sidebar-color-2: var(--scalar-color-2);--scalar-sidebar-border-color: var(--scalar-border-color);--scalar-sidebar-item-hover-background: var(--scalar-background-2);--scalar-sidebar-item-hover-color: currentColor;--scalar-sidebar-item-active-background: var(--scalar-background-2);--scalar-sidebar-color-active: var(--scalar-color-1);--scalar-sidebar-search-background: transparent;--scalar-sidebar-search-color: var(--scalar-color-3);--scalar-sidebar-search-border-color: var(--scalar-border-color)}.light-mode{--scalar-color-green: #069061;--scalar-color-red: #ef0006;--scalar-color-yellow: #edbe20;--scalar-color-blue: #0082d0;--scalar-color-orange: #fb892c;--scalar-color-purple: #5203d1;--scalar-button-1: rgba(0, 0, 0, 1);--scalar-button-1-hover: rgba(0, 0, 0, .8);--scalar-button-1-color: rgba(255, 255, 255, .9)}.dark-mode{--scalar-color-green: #00b648;--scalar-color-red: #dc1b19;--scalar-color-yellow: #ffc90d;--scalar-color-blue: #4eb3ec;--scalar-color-orange: #ff8d4d;--scalar-color-purple: #b191f9;--scalar-button-1: rgba(255, 255, 255, 1);--scalar-button-1-hover: rgba(255, 255, 255, .9);--scalar-button-1-color: black}}:root{--scalar-loaded-api-reference: true}@layer scalar-config{.scalar-api-reference[data-v-f0ddfb95]{--refs-sidebar-width: var(--scalar-sidebar-width, 0px);--refs-header-height: calc( var(--scalar-y-offset) + var(--scalar-header-height, 0px) );--refs-content-max-width: var(--scalar-content-max-width, 1540px)}.scalar-api-reference.references-classic[data-v-f0ddfb95]{--refs-content-max-width: var(--scalar-content-max-width, 1420px);min-height:100dvh;--refs-sidebar-width: 0}}.references-layout[data-v-f0ddfb95]{min-height:100dvh;min-width:100%;max-width:100%;flex:1;--full-height: 100dvh;display:grid;grid-template-rows:var(--scalar-header-height, 0px) repeat(2,auto);grid-template-columns:var(--refs-sidebar-width) 1fr;grid-template-areas:"header header" "navigation rendered" "footer footer";background:var(--scalar-background-1)}.references-header[data-v-f0ddfb95]{grid-area:header;position:sticky;top:var(--scalar-custom-header-height, 0px);z-index:10;height:var(--scalar-header-height, 0px)}.references-editor[data-v-f0ddfb95]{grid-area:editor;display:flex;min-width:0;background:var(--scalar-background-1);z-index:1}.references-navigation[data-v-f0ddfb95]{grid-area:navigation}.references-rendered[data-v-f0ddfb95]{position:relative;grid-area:rendered;min-width:0;background:var(--scalar-background-1)}.scalar-api-reference.references-classic[data-v-f0ddfb95],.references-classic .references-rendered[data-v-f0ddfb95]{--full-height: fit-content !important;height:initial!important;max-height:initial!important}.references-navigation-list[data-v-f0ddfb95]{position:sticky;top:var(--refs-header-height);height:calc(100dvh - var(--refs-header-height));background:var(--scalar-sidebar-background-1 var(--scalar-background-1));overflow-y:auto;display:flex;flex-direction:column}.references-editor-textarea[data-v-f0ddfb95]{position:sticky;top:var(--refs-header-height);height:calc(var(--full-height) - var(--refs-header-height));display:flex;min-width:0;flex:1}.references-editable[data-v-f0ddfb95]{grid-template-columns:var(--refs-sidebar-width) 1fr 1fr;grid-template-areas:"header header header" "navigation editor rendered" "footer footer footer"}@layer scalar-config{.references-sidebar[data-v-f0ddfb95]{--refs-sidebar-width: var(--scalar-sidebar-width, 280px)}}.references-footer[data-v-f0ddfb95]{grid-area:footer}@media (max-width: 1150px){.references-layout[data-v-f0ddfb95]{grid-template-columns:var(--refs-sidebar-width) 1fr 0px}}@media (max-width: 1000px){.references-layout[data-v-f0ddfb95]{grid-template-columns:auto;grid-template-rows:var(--scalar-header-height, 0px) 0px auto auto;grid-template-areas:"header" "navigation" "rendered" "footer"}.references-editable[data-v-f0ddfb95]{grid-template-areas:"header" "navigation" "editor"}.references-navigation[data-v-f0ddfb95],.references-rendered[data-v-f0ddfb95]{max-height:unset}.references-rendered[data-v-f0ddfb95]{position:static}.references-navigation[data-v-f0ddfb95]{display:none;z-index:10}.references-sidebar-mobile-open .references-navigation[data-v-f0ddfb95]{display:block;top:var(--refs-header-height);height:calc(100dvh - var(--refs-header-height));width:100%;position:sticky}.references-navigation-list[data-v-f0ddfb95]{position:absolute;top:-1px;height:calc(var(--full-height) - var(--refs-header-height) + 1px);width:100%;border-top:1px solid var(--scalar-border-color);display:flex;flex-direction:column}}.references-classic-header[data-v-a860f78f]{display:flex;align-items:center;justify-content:space-between;gap:12px;max-width:var(--refs-content-max-width);margin:auto;padding:12px 0}.references-classic-header-container[data-v-a860f78f]{padding:0 60px}@container narrow-references-container (max-width: 900px){.references-classic-header[data-v-a860f78f]{padding:12px 24px}.references-classic-header-container[data-v-a860f78f]{padding:0}}.references-classic-header-icon[data-v-a860f78f]{height:24px;color:var(--scalar-color-1)}.darklight[data-v-8f61ca56]{color:var(--scalar-sidebar-color-2, var(--scalar-color-2));display:flex;align-items:center;height:24px;width:24px;padding:4px}.darklight[data-v-8f61ca56]:hover{cursor:pointer;color:var(--scalar-sidebar-color-1, var(--scalar-color-1))}a[data-v-6ee7fa31]{text-decoration:none}.ref-search-container[data-v-6ee7fa31]{display:flex;flex-direction:column;padding:12px 12px 0}.ref-search-results[data-v-6ee7fa31]{padding:12px}.ref-search-meta[data-v-6ee7fa31]{background:var(--scalar-background-3);padding:6px 12px;font-size:var(--scalar-font-size-4);color:var(--scalar-color-3);font-weight:var(--scalar-semibold);display:flex;gap:12px}.sidebar-search[data-v-f812b614]{display:flex;align-items:center;position:relative;padding:0 3px 0 9px;min-width:254px;max-width:100%;font-family:var(--scalar-font);background:var( --scalar-sidebar-search-background, var(--scalar-background-1) );color:var(--scalar-sidebar-color-2, var(--scalar-color-2));outline:none;border-radius:var(--scalar-radius);box-shadow:0 0 0 .5px var(--scalar-sidebar-search-border-color, var(--scalar-border-color));cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none}.sidebar-search-input[data-v-f812b614]{font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);height:31px;-webkit-user-select:none;user-select:none;z-index:10;position:relative;display:flex;width:100%;justify-content:space-between;align-items:center}.sidebar-search-shortcut[data-v-f812b614]{text-transform:uppercase}.sidebar-search-key[data-v-f812b614]{background-color:var(--scalar-background-2);padding:3px 5px;margin:2px;border-radius:var(--scalar-radius);color:var(--scalar-sidebar-color-2, var(--scalar-color-2))}.search-icon[data-v-f812b614]{padding:0;margin-right:6px;width:12px}.references-mobile-header[data-v-b5fb4b8b]{display:none;align-items:center;height:100%;width:100%;padding:0 8px;background:var(--scalar-background-1);border-bottom:1px solid var(--scalar-border-color)}.references-mobile-breadcrumbs[data-v-b5fb4b8b]{flex:1;min-width:0;font-size:var(--scalar-small);font-weight:var(--scalar-semibold);color:var(--scalar-color-1);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.references-mobile-header-actions[data-v-b5fb4b8b]{display:flex;flex-direction:row;gap:4px;height:24px;align-items:center;padding-left:4px}@media (max-width: 1000px){.references-mobile-header[data-v-b5fb4b8b]{display:flex}}.darklight[data-v-bfb18750]{font-family:var(--scalar-font);border:none;border-top:var(--scalar-border-width) solid var(--scalar-sidebar-border-color, var(--scalar-border-color));color:var(--scalar-sidebar-color-2, var(--scalar-color-2));font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;outline:none;padding:18px 24px 0;display:flex;align-items:center;text-indent:9px;width:100%}.darklight svg[data-v-bfb18750]{stroke-width:1.5}.darklight-reference[data-v-bfb18750]{width:100%;margin-top:auto}.darklight[data-v-bfb18750]:hover{cursor:pointer;color:var(--scalar-sidebar-color-1, var(--scalar-color-1))}.darklight-reference-promo[data-v-bfb18750]{padding:6px 24px 12px;display:flex;align-items:center;font-size:var(--scalar-mini);text-decoration:none;color:var(--scalar-sidebar-color-2, var(--scalar-color-2))}.darklight-reference-promo[data-v-bfb18750]:hover{text-decoration:underline}@media (max-width: 1000px){.scalar-api-references-standalone-mobile{--scalar-header-height: 50px}}.scalar-api-references-standalone-search[data-v-9fe2e3b4]{display:flex;flex-direction:column;padding:12px 12px 6px}@layer scalar-base{body{margin:0;background-color:var(--scalar-background-1)}}
`));
      document.head.appendChild(elementStyle);
      console.warn("Auto-loading the references css through js has been deprecated. Please import the css directly. Visit https://github.com/scalar/scalar for more info.");
    }, 0);
  } catch (error) {
    console.error(error, "unable to concat style inside the bundled file");
  }
})();
export {
  W4 as ApiReference,
  m26 as ApiReferenceLayout,
  i13 as Card,
  d6 as CardContent,
  p12 as CardFooter,
  f6 as CardHeader,
  f9 as CardTab,
  e10 as CardTabHeader,
  e12 as DarkModeIconToggle,
  f17 as DarkModeToggle,
  O5 as GLOBAL_SECURITY_SYMBOL,
  m3 as GettingStarted,
  o10 as HIDE_DOWNLOAD_BUTTON_SYMBOL,
  P10 as Layouts,
  a21 as ModernLayout,
  f12 as RenderedReference,
  l13 as Search,
  m27 as SearchButton,
  f14 as SearchModal,
  m7 as Sidebar,
  a2 as createEmptyAuthenticationState,
  i3 as createEmptySpecification,
  j7 as createScalarReferences,
  c2 as deepMerge,
  u2 as downloadSpecBus,
  b2 as downloadSpecFile,
  h7 as filterHiddenClients,
  O2 as getApiClientRequest,
  c6 as getHarRequest,
  i11 as getHeadingsFromMarkdown,
  o5 as getLowestHeadingLevel,
  l6 as getModels,
  n14 as getVariableNames,
  o8 as hasModels,
  r14 as hasSecuritySchemes,
  t10 as hasWebhooks,
  c4 as joinWithSlash,
  a22 as mapFromObject,
  c23 as mergeAllObjects,
  C3 as openClientFor,
  D2 as parse,
  t7 as scrollToId,
  ce as scrollToOperation,
  s5 as sleep,
  i5 as useAuthenticationStore,
  e13 as useClientStore,
  a9 as useClipboard,
  c as useDarkModeState,
  n3 as useDeprecationWarnings,
  _6 as useHttpClientStore,
  $2 as useNavState,
  t11 as useOperation,
  C2 as useReactiveSpec,
  r15 as useRefOnMount,
  i17 as useResponses,
  Ie2 as useSidebar
};
/*! Bundled license information:

httpsnippet-lite/dist/esm/helpers/form-data.mjs:
  (**
   * @license https://raw.githubusercontent.com/node-fetch/node-fetch/master/LICENSE.md
   *
   * The MIT License (MIT)
   *
   * Copyright (c) 2016 - 2020 Node Fetch Team
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   * Extracted from https://github.com/node-fetch/node-fetch/blob/64c5c296a0250b852010746c76144cb9e14698d9/src/utils/form-data.js
   *)
*/
//# sourceMappingURL=@scalar_api-reference.js.map
