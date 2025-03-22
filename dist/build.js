var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { defineComponent, mergeDefaults, useSlots, ref, watch, computed, onMounted, createElementBlock, openBlock, normalizeClass, createElementVNode, renderSlot, unref, Fragment, createTextVNode, toDisplayString, createCommentVNode, normalizeStyle } from "vue";
import "lkt-string-tools";
import "lkt-i18n";
var H = ((f) => (f.Button = "button", f.Submit = "submit", f.Reset = "reset", f.Anchor = "anchor", f.Content = "content", f.Switch = "switch", f.HiddenSwitch = "hidden-switch", f.Split = "split", f.SplitLazy = "split-lazy", f.SplitEver = "split-ever", f.Tooltip = "tooltip", f.TooltipLazy = "tooltip-lazy", f.TooltipEver = "tooltip-ever", f.FileUpload = "file-upload", f.ImageUpload = "image-upload", f))(H || {});
var z = ((l) => (l.Text = "text", l.Email = "email", l.Tel = "tel", l.Password = "password", l.Search = "search", l.Number = "number", l.Color = "color", l.Range = "range", l.Textarea = "textarea", l.Html = "html", l.Date = "date", l.File = "file", l.Image = "image", l.Select = "select", l.Check = "check", l.Switch = "switch", l.Calc = "calc", l.Card = "card", l.Elements = "elements", l))(z || {});
var Ot = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], a = (_a = class {
  constructor(t) {
  }
  feed(t = {}, o = this) {
    if (typeof t == "object") for (let [r, i] of Object.entries(t)) o.assignProp(r, i);
  }
  assignProp(t, o) {
    if (!(Ot.includes(t) || _a.lktExcludedProps.includes(t)) && true) {
      if (_a.lktDateProps.includes(t)) {
        this[t] = new Date(o);
        return;
      }
      this[t] = o;
    }
  }
}, __publicField(_a, "lktAllowUndefinedProps", []), __publicField(_a, "lktExcludedProps", []), __publicField(_a, "lktDateProps", []), __publicField(_a, "lktStrictItem", false), __publicField(_a, "lktDefaultValues", []), _a);
var W = ((i) => (i.Auto = "auto", i.Always = "always", i.Lazy = "lazy", i.Ever = "ever", i))(W || {});
var q = ((r) => (r.Transform = "transform", r.Height = "height", r.Display = "display", r))(q || {});
var $ = ((m) => (m.Href = "href", m.RouterLink = "router-link", m.RouterLinkBack = "router-link-back", m.Mail = "mail", m.Tel = "tel", m.Tab = "tab", m.Download = "download", m.Action = "action", m.Legacy = "", m))($ || {});
var G = ((i) => (i.None = "", i.Field = "field", i.Button = "button", i.Anchor = "anchor", i))(G || {});
var X = ((r) => (r.List = "list", r.Inline = "inline", r.Count = "count", r))(X || {});
var Q = ((s) => (s.MinStringLength = "min-str", s.MinNumber = "min-num", s.MaxStringLength = "max-str", s.MaxNumber = "max-num", s.Email = "email", s.Empty = "empty", s.EqualTo = "equal-to", s.MinNumbers = "min-numbers", s.MaxNumbers = "max-numbers", s.MinChars = "min-chars", s.MaxChars = "max-chars", s.MinUpperChars = "min-upper-chars", s.MaxUpperChars = "max-upper-chars", s.MinLowerChars = "min-lower-chars", s.MaxLowerChars = "max-lower-chars", s.MinSpecialChars = "min-special-chars", s.MaxSpecialChars = "max-special-chars", s))(Q || {});
var Y = ((r) => (r.Ok = "ok", r.Ko = "ko", r.Info = "info", r))(Y || {});
var J = ((o) => (o.NotDefined = "", o.Button = "button", o))(J || {});
var Z = ((o) => (o.Start = "start", o.End = "end", o))(Z || {});
var _ = ((r) => (r.Create = "create", r.Update = "update", r.Read = "read", r))(_ || {});
var tt = ((o) => (o.Inline = "inline", o.Modal = "modal", o))(tt || {});
var et = ((o) => (o.Top = "top", o.Bottom = "bottom", o))(et || {});
var ot = ((r) => (r.Changed = "changed", r.Always = "always", r.Never = "never", r))(ot || {});
var rt = ((r) => (r.Manual = "manual", r.Auto = "auto", r.Delay = "delay", r))(rt || {});
var at = ((o) => (o.Toast = "toast", o.Inline = "inline", o))(at || {});
var it = ((r) => (r.Anchor = "anchor", r.Button = "button", r.Entry = "entry", r))(it || {});
var nt = ((o) => (o.Modal = "modal", o.Confirm = "confirm", o))(nt || {});
var lt = ((g) => (g.Pages = "pages", g.PrevNext = "prev-next", g.PagesPrevNext = "pages-prev-next", g.PagesPrevNextFirstLast = "pages-prev-next-first-last", g.LoadMore = "load-more", g.Infinite = "infinite", g))(lt || {});
var st = ((r) => (r.None = "", r.Incremental = "incremental", r.Decremental = "decremental", r))(st || {});
var ft = ((n) => (n.NotDefined = "", n.Hidden = "hidden", n.Integer = "integer", n.Decimal = "decimal", n.Auto = "auto", n))(ft || {});
var P = (_b = class extends a {
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
var dt = ((n) => (n.Table = "table", n.Item = "item", n.Ul = "ul", n.Ol = "ol", n.Carousel = "carousel", n))(dt || {});
var ut = ((i) => (i[i.Auto = 0] = "Auto", i[i.PreferItem = 1] = "PreferItem", i[i.PreferCustomItem = 2] = "PreferCustomItem", i[i.PreferColumns = 3] = "PreferColumns", i))(ut || {});
var mt = ((o) => (o.NotDefined = "", o.ActionIcon = "action-icon", o))(mt || {});
var ct = ((o) => (o.Message = "message", o.Button = "button", o))(ct || {});
var pt = ((r) => (r.Left = "left", r.Center = "center", r.Right = "right", r))(pt || {});
var gt = ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(gt || {});
var Ct = ((i) => (i.Top = "top", i.Bottom = "bottom", i.Center = "center", i.ReferrerCenter = "referrer-center", i))(Ct || {});
var xt = ((n) => (n.Left = "left", n.Right = "right", n.Center = "center", n.LeftCorner = "left-corner", n.RightCorner = "right-corner", n))(xt || {});
var bt = ((i) => (i.None = "", i.Focus = "focus", i.Blur = "blur", i.Always = "always", i))(bt || {});
var ht = ((r) => (r.Auto = "auto", r.Local = "local", r.Remote = "remote", r))(ht || {});
var kt = ((n) => (n.Refresh = "refresh", n.Close = "close", n.ReOpen = "reOpen", n.Exec = "exec", n.Open = "open", n))(kt || {});
var Mt = ((o) => (o.Asc = "asc", o.Desc = "desc", o))(Mt || {});
var Vt = ((u) => (u.Create = "create", u.Update = "update", u.Edit = "edit", u.Drop = "drop", u.Sort = "sort", u.SwitchEditMode = "switch-edit-mode", u.InlineEdit = "inline-edit", u.InlineCreate = "inline-create", u.ModalCreate = "modal-create", u.InlineCreateEver = "inline-create-ever", u))(Vt || {});
var Bt = ((o) => (o.Lazy = "lazy", o.Ever = "ever", o))(Bt || {});
var Dt = ((o) => (o.Quick = "quick", o.Full = "full", o))(Dt || {});
function Ko(e) {
  let t = new e(), o = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in t && (o[r] = t[r]);
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
  }, Ko(P)),
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
    if (props.type === st.Incremental) {
      progressHigherLimit.value = progress.value;
      progress.value = 0;
    }
    watch(() => props.modelValue, (v) => {
      if (v > 100) v = 100;
      if (v < 0) v = 0;
      progress.value = v;
    });
    watch(progress, (v) => {
      emit("update:modelValue", v);
    });
    const isAnimating = ref(false);
    let intervalId;
    const progressDuration = ref(props.duration);
    const animationStep = ref(progressDuration.value === 0 ? 1 : 100 / (progressDuration.value / 100));
    function updateProgress() {
      if (props.type === st.Decremental && progress.value > 0) {
        progress.value -= animationStep.value;
      } else if (props.type === st.Incremental && progress.value < progressHigherLimit.value) {
        progress.value += animationStep.value;
      } else {
        clearInterval(intervalId);
        isAnimating.value = false;
        emit("end");
      }
    }
    function startProgress() {
      if (props.type === st.Incremental || props.type === st.Decremental) {
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
      let r = [];
      if (props.palette) r.push(`lkt-progress--${props.palette}`);
      if (progress.value >= 10) r.push("lkt-progress--fill-10");
      if (progress.value >= 20) r.push("lkt-progress--fill-20");
      if (progress.value >= 30) r.push("lkt-progress--fill-30");
      if (progress.value >= 40) r.push("lkt-progress--fill-40");
      if (progress.value >= 50) r.push("lkt-progress--fill-50");
      if (progress.value >= 60) r.push("lkt-progress--fill-60");
      if (progress.value >= 70) r.push("lkt-progress--fill-70");
      if (progress.value >= 80) r.push("lkt-progress--fill-80");
      if (progress.value >= 90) r.push("lkt-progress--fill-90");
      if (progress.value >= 100) r.push("lkt-progress--fill-100");
      return r.join(" ");
    }), computedVisiblePercentage = computed(() => {
      let r = Number(progress.value).toFixed(2);
      if (props.valueFormat === ft.Auto) {
        if (r.indexOf(".00") > -1) r = r.replace(".00", "");
      } else if (props.valueFormat === ft.Integer) {
        r = parseInt(r);
      }
      return r;
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
