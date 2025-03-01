var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { defineComponent, mergeDefaults, useSlots, ref, watch, computed, onMounted, createElementBlock, openBlock, normalizeClass, createElementVNode, renderSlot, unref, Fragment, createTextVNode, toDisplayString, createCommentVNode, normalizeStyle } from "vue";
import "lkt-string-tools";
import "lkt-i18n";
var A = ((f) => (f.Button = "button", f.Submit = "submit", f.Reset = "reset", f.Anchor = "anchor", f.Content = "content", f.Switch = "switch", f.HiddenSwitch = "hidden-switch", f.Split = "split", f.SplitLazy = "split-lazy", f.SplitEver = "split-ever", f.Tooltip = "tooltip", f.TooltipLazy = "tooltip-lazy", f.TooltipEver = "tooltip-ever", f))(A || {});
var N = ((a) => (a.Text = "text", a.Email = "email", a.Tel = "tel", a.Password = "password", a.Search = "search", a.Number = "number", a.Color = "color", a.Range = "range", a.Textarea = "textarea", a.Html = "html", a.Date = "date", a.File = "file", a.Image = "image", a.Select = "select", a.Check = "check", a.Switch = "switch", a.Calc = "calc", a.Card = "card", a.Elements = "elements", a))(N || {});
var kt = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], r = (_a = class {
  constructor(t) {
  }
  feed(t = {}, o = this) {
    if (typeof t == "object") for (let [n, i] of Object.entries(t)) o.assignProp(n, i);
  }
  assignProp(t, o) {
    if (!(kt.includes(t) || _a.lktExcludedProps.includes(t)) && true) {
      if (_a.lktDateProps.includes(t)) {
        this[t] = new Date(o);
        return;
      }
      this[t] = o;
    }
  }
}, __publicField(_a, "lktAllowUndefinedProps", []), __publicField(_a, "lktExcludedProps", []), __publicField(_a, "lktDateProps", []), __publicField(_a, "lktStrictItem", false), __publicField(_a, "lktDefaultValues", []), _a);
var U = ((i) => (i.Auto = "auto", i.Always = "always", i.Lazy = "lazy", i.Ever = "ever", i))(U || {});
var j = ((n) => (n.Transform = "transform", n.Height = "height", n.Display = "display", n))(j || {});
var K = ((m) => (m.Href = "href", m.RouterLink = "router-link", m.RouterLinkBack = "router-link-back", m.Mail = "mail", m.Tel = "tel", m.Tab = "tab", m.Download = "download", m.Action = "action", m.Legacy = "", m))(K || {});
var R = ((i) => (i.None = "", i.Field = "field", i.Button = "button", i.Anchor = "anchor", i))(R || {});
var H = ((n) => (n.List = "list", n.Inline = "inline", n.Count = "count", n))(H || {});
var z = ((i) => (i.None = "", i.Focus = "focus", i.Blur = "blur", i.Always = "always", i))(z || {});
var W = ((s) => (s.MinStringLength = "min-str", s.MinNumber = "min-num", s.MaxStringLength = "max-str", s.MaxNumber = "max-num", s.Email = "email", s.Empty = "empty", s.EqualTo = "equal-to", s.MinNumbers = "min-numbers", s.MaxNumbers = "max-numbers", s.MinChars = "min-chars", s.MaxChars = "max-chars", s.MinUpperChars = "min-upper-chars", s.MaxUpperChars = "max-upper-chars", s.MinLowerChars = "min-lower-chars", s.MaxLowerChars = "max-lower-chars", s.MinSpecialChars = "min-special-chars", s.MaxSpecialChars = "max-special-chars", s))(W || {});
var q = ((n) => (n.Ok = "ok", n.Ko = "ko", n.Info = "info", n))(q || {});
var $ = ((o) => (o.NotDefined = "", o.Button = "button", o))($ || {});
var G = ((n) => (n.Create = "create", n.Update = "update", n.Read = "read", n))(G || {});
var X = ((o) => (o.Inline = "inline", o.Modal = "modal", o))(X || {});
var Y = ((o) => (o.Top = "top", o.Bottom = "bottom", o))(Y || {});
var J = ((n) => (n.Changed = "changed", n.Always = "always", n.Never = "never", n))(J || {});
var Q = ((n) => (n.Manual = "manual", n.Auto = "auto", n.Delay = "delay", n))(Q || {});
var Z = ((o) => (o.Toast = "toast", o.Inline = "inline", o))(Z || {});
var _ = ((p) => (p.Pages = "pages", p.PrevNext = "prev-next", p.PagesPrevNext = "pages-prev-next", p.PagesPrevNextFirstLast = "pages-prev-next-first-last", p.LoadMore = "load-more", p.Infinite = "infinite", p))(_ || {});
var tt = ((n) => (n.None = "", n.Incremental = "incremental", n.Decremental = "decremental", n))(tt || {});
var et = ((l) => (l.NotDefined = "", l.Hidden = "hidden", l.Integer = "integer", l.Decimal = "decimal", l.Auto = "auto", l))(et || {});
var v = (_b = class extends r {
  constructor(t = {}) {
    super();
    __publicField(this, "modelValue", 0);
    __publicField(this, "type", "");
    __publicField(this, "duration", 4e3);
    __publicField(this, "pauseOnHover", false);
    __publicField(this, "header", "");
    __publicField(this, "valueFormat", "auto");
    __publicField(this, "palette", "");
    this.feed(t);
  }
}, __publicField(_b, "lktAllowUndefinedProps", []), __publicField(_b, "lktDefaultValues", ["modelValue", "type", "duration", "pauseOnHover", "header", "valueFormat", "palette"]), _b);
var ot = ((i) => (i.Table = "table", i.Item = "item", i.Ul = "ul", i.Ol = "ol", i))(ot || {});
var rt = ((i) => (i[i.Auto = 0] = "Auto", i[i.PreferItem = 1] = "PreferItem", i[i.PreferCustomItem = 2] = "PreferCustomItem", i[i.PreferColumns = 3] = "PreferColumns", i))(rt || {});
var nt = ((o) => (o.NotDefined = "", o.ActionIcon = "action-icon", o))(nt || {});
var it = ((o) => (o.Message = "message", o.Button = "button", o))(it || {});
var at = ((n) => (n.Left = "left", n.Center = "center", n.Right = "right", n))(at || {});
var lt = ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(lt || {});
var st = ((i) => (i.Top = "top", i.Bottom = "bottom", i.Center = "center", i.ReferrerCenter = "referrer-center", i))(st || {});
var ft = ((l) => (l.Left = "left", l.Right = "right", l.Center = "center", l.LeftCorner = "left-corner", l.RightCorner = "right-corner", l))(ft || {});
var ut = ((l) => (l.Refresh = "refresh", l.Close = "close", l.ReOpen = "reOpen", l.Exec = "exec", l.Open = "open", l))(ut || {});
var dt = ((o) => (o.Modal = "modal", o.Confirm = "confirm", o))(dt || {});
var mt = ((o) => (o.Asc = "asc", o.Desc = "desc", o))(mt || {});
var ct = ((d) => (d.Create = "create", d.Update = "update", d.Edit = "edit", d.Drop = "drop", d.Sort = "sort", d.SwitchEditMode = "switch-edit-mode", d.InlineEdit = "inline-edit", d.InlineCreate = "inline-create", d.ModalCreate = "modal-create", d.InlineCreateEver = "inline-create-ever", d))(ct || {});
var pt = ((o) => (o.Lazy = "lazy", o.Ever = "ever", o))(pt || {});
function go(e) {
  let t = new e(), o = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let n of e.lktDefaultValues) n in t && (o[n] = t[n]);
  return o;
}
const _hoisted_1 = { class: "lkt-progress-header" };
const _hoisted_2 = { class: "lkt-progress-content" };
const _hoisted_3 = { class: "lkt-progress-bar" };
const _hoisted_4 = {
  key: 0,
  class: "lkt-progress-indicator"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktProgress",
  props: /* @__PURE__ */ mergeDefaults({
    modelValue: {},
    type: {},
    duration: {},
    pauseOnHover: { type: Boolean },
    header: {},
    valueFormat: {},
    palette: {}
  }, go(v)),
  emits: [
    "update:modelValue",
    "mouseenter",
    "mouseleave",
    "end"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const slots = useSlots();
    const props = __props;
    const progress = ref(Number(props.modelValue));
    if (progress.value > 100) progress.value = 100;
    if (progress.value < 0) progress.value = 0;
    const progressHigherLimit = ref(100);
    if (props.type === tt.Incremental) {
      progressHigherLimit.value = progress.value;
      progress.value = 0;
    }
    watch(() => props.modelValue, (v2) => {
      if (v2 > 100) v2 = 100;
      if (v2 < 0) v2 = 0;
      progress.value = v2;
    });
    watch(progress, (v2) => {
      emit("update:modelValue", v2);
    });
    const isAnimating = ref(false);
    let intervalId;
    const progressDuration = ref(props.duration);
    const animationStep = ref(progressDuration.value === 0 ? 1 : 100 / (progressDuration.value / 100));
    function updateProgress() {
      if (props.type === tt.Decremental && progress.value > 0) {
        progress.value -= animationStep.value;
      } else if (props.type === tt.Incremental && progress.value < progressHigherLimit.value) {
        progress.value += animationStep.value;
      } else {
        clearInterval(intervalId);
        isAnimating.value = false;
        emit("end");
      }
    }
    function startProgress() {
      if (props.type === tt.Incremental || props.type === tt.Decremental) {
        if (isAnimating.value) return;
        intervalId = setInterval(updateProgress, 100);
        isAnimating.value = true;
      }
    }
    function pauseProgress() {
      clearInterval(intervalId);
      isAnimating.value = false;
    }
    const classes = computed(() => {
      let r2 = [];
      if (props.palette) r2.push(`lkt-progress--${props.palette}`);
      if (progress.value >= 10) r2.push("lkt-progress--fill-10");
      if (progress.value >= 20) r2.push("lkt-progress--fill-20");
      if (progress.value >= 30) r2.push("lkt-progress--fill-30");
      if (progress.value >= 40) r2.push("lkt-progress--fill-40");
      if (progress.value >= 50) r2.push("lkt-progress--fill-50");
      if (progress.value >= 60) r2.push("lkt-progress--fill-60");
      if (progress.value >= 70) r2.push("lkt-progress--fill-70");
      if (progress.value >= 80) r2.push("lkt-progress--fill-80");
      if (progress.value >= 90) r2.push("lkt-progress--fill-90");
      if (progress.value >= 100) r2.push("lkt-progress--fill-100");
      return r2.join(" ");
    }), computedVisiblePercentage = computed(() => {
      let r2 = Number(progress.value).toFixed(2);
      if (props.valueFormat === et.Auto) {
        if (r2.indexOf(".00") > -1) r2 = r2.replace(".00", "");
      } else if (props.valueFormat === et.Integer) {
        r2 = parseInt(r2);
      }
      return r2;
    }), progressBarStyles = computed(() => {
      return "width: calc(" + computedVisiblePercentage.value + "%)";
    });
    const onMouseEnter = (event) => {
      if (props.pauseOnHover) {
        pauseProgress();
      }
      emit("mouseenter", event);
    }, onMouseLeave = (event) => {
      if (props.pauseOnHover) {
        startProgress();
      }
      emit("mouseleave", event);
    };
    onMounted(() => {
      startProgress();
    });
    __expose({
      start: startProgress,
      pause: pauseProgress
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["lkt-progress", classes.value]),
        onMouseenter: onMouseEnter,
        onMouseleave: onMouseLeave
      }, [
        createElementVNode("header", _hoisted_1, [
          !!unref(slots).header ? renderSlot(_ctx.$slots, "header", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ], 64))
        ]),
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            createElementVNode("div", {
              class: "lkt-progress-bar-percentage",
              style: normalizeStyle(progressBarStyles.value)
            }, null, 4)
          ]),
          _ctx.valueFormat !== "hidden" ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(computedVisiblePercentage.value) + "%", 1)) : createCommentVNode("", true)
        ])
      ], 34);
    };
  }
});
const LktProgress = {
  install: (app, options) => {
    app.component("lkt-progress", _sfc_main);
  }
};
export {
  LktProgress as default
};
