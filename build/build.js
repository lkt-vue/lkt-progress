var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { defineComponent, ref, computed, watch, createElementBlock, openBlock, createElementVNode, toDisplayString, createCommentVNode, normalizeStyle, mergeDefaults, useSlots, normalizeClass, renderSlot, unref, Fragment, createTextVNode, createVNode, mergeProps } from "vue";
import "lkt-i18n";
import "lkt-string-tools";
var It = ((c) => (c.Button = "button", c.Submit = "submit", c.Reset = "reset", c.Anchor = "anchor", c.Content = "content", c.Switch = "switch", c.HiddenSwitch = "hidden-switch", c.Split = "split", c.SplitLazy = "split-lazy", c.SplitEver = "split-ever", c.Tooltip = "tooltip", c.TooltipLazy = "tooltip-lazy", c.TooltipEver = "tooltip-ever", c.FileUpload = "file-upload", c.ImageUpload = "image-upload", c))(It || {});
var Et = ((s) => (s.Text = "text", s.Email = "email", s.Tel = "tel", s.Password = "password", s.Search = "search", s.Number = "number", s.Color = "color", s.Range = "range", s.Textarea = "textarea", s.Html = "html", s.Date = "date", s.Time = "time", s.DateTime = "datetime", s.File = "file", s.Image = "image", s.Select = "select", s.Check = "check", s.Switch = "switch", s.Calc = "calc", s.Card = "card", s.Table = "table", s.Radio = "radio", s.ToggleButtonGroup = "toggle-button-group", s))(Et || {});
var Te = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], a = (_a = class {
  constructor(t) {
  }
  feed(t = {}, o = this) {
    if (typeof t == "object") for (let [r, n] of Object.entries(t)) o.assignProp(r, n);
  }
  assignProp(t, o) {
    if (!(Te.includes(t) || _a.lktExcludedProps.includes(t)) && true) {
      if (_a.lktDateProps.includes(t)) {
        this[t] = new Date(o);
        return;
      }
      this[t] = o;
    }
  }
}, __publicField(_a, "lktAllowUndefinedProps", []), __publicField(_a, "lktExcludedProps", []), __publicField(_a, "lktDateProps", []), __publicField(_a, "lktStrictItem", false), __publicField(_a, "lktDefaultValues", []), _a);
var T = ((n) => (n.Auto = "auto", n.Always = "always", n.Lazy = "lazy", n.Ever = "ever", n))(T || {});
var Mt = ((r) => (r.Transform = "transform", r.Height = "height", r.Display = "display", r))(Mt || {});
var St = ((b) => (b.Href = "href", b.RouterLink = "router-link", b.RouterLinkBack = "router-link-back", b.Mail = "mail", b.Tel = "tel", b.Tab = "tab", b.Download = "download", b.Action = "action", b.Legacy = "", b))(St || {});
var w = ((o) => (o.Static = "static", o.Parallax = "parallax", o))(w || {});
var Dt = ((l) => (l.None = "", l.Field = "field", l.Button = "button", l.Anchor = "anchor", l.InlineDrop = "inline-drop", l.ColumnIndex = "column-index", l))(Dt || {});
var Vt = ((r) => (r.Date = "date", r.Number = "number", r.Timer = "timer", r))(Vt || {});
var vt = ((f) => (f.A0 = "a0", f.A1 = "a1", f.A2 = "a2", f.A3 = "a3", f.A4 = "a4", f.A5 = "a5", f.A6 = "a6", f.A7 = "a7", f.A8 = "a8", f.A9 = "a9", f))(vt || {});
var Tt = ((n) => (n.List = "list", n.Inline = "inline", n.Count = "count", n.Table = "table", n))(Tt || {});
var Ft = ((u) => (u.HTTPResponse = "http-response", u.MinStringLength = "min-str", u.MinNumber = "min-num", u.MaxStringLength = "max-str", u.MaxNumber = "max-num", u.Email = "email", u.Empty = "empty", u.EqualTo = "equal-to", u.MinNumbers = "min-numbers", u.MaxNumbers = "max-numbers", u.MinChars = "min-chars", u.MaxChars = "max-chars", u.MinUpperChars = "min-upper-chars", u.MaxUpperChars = "max-upper-chars", u.MinLowerChars = "min-lower-chars", u.MaxLowerChars = "max-lower-chars", u.MinSpecialChars = "min-special-chars", u.MaxSpecialChars = "max-special-chars", u))(Ft || {});
var Ot = ((r) => (r.Ok = "ok", r.Ko = "ko", r.Info = "info", r))(Ot || {});
var At = ((i) => (i.StorageUnit = "unit", i.Directory = "dir", i.Image = "img", i.Video = "vid", i.File = "file", i))(At || {});
var wt = ((l) => (l.H1 = "h1", l.H2 = "h2", l.H3 = "h3", l.H4 = "h4", l.H5 = "h5", l.H6 = "h6", l))(wt || {});
var Pt = ((o) => (o.NotDefined = "", o.Button = "button", o))(Pt || {});
var jt = ((o) => (o.Start = "start", o.End = "end", o))(jt || {});
var Wt = ((r) => (r.Create = "create", r.Update = "update", r.Read = "read", r))(Wt || {});
var Nt = ((o) => (o.Inline = "inline", o.Modal = "modal", o))(Nt || {});
var Ht = ((o) => (o.Top = "top", o.Bottom = "bottom", o))(Ht || {});
var Ut = ((r) => (r.Changed = "changed", r.Always = "always", r.Never = "never", r))(Ut || {});
var Rt = ((r) => (r.Manual = "manual", r.Auto = "auto", r.Delay = "delay", r))(Rt || {});
var Kt = ((o) => (o.Toast = "toast", o.Inline = "inline", o))(Kt || {});
var Gt = ((n) => (n.Current = "current", n.Modifications = "modifications", n.SplitView = "split-view", n.Differences = "differences", n))(Gt || {});
var qt = ((n) => (n.Anchor = "anchor", n.Button = "button", n.Header = "header", n.Entry = "entry", n))(qt || {});
var Xt = ((o) => (o.Modal = "modal", o.Confirm = "confirm", o))(Xt || {});
var $t = ((l) => (l.Pages = "pages", l.PrevNext = "prev-next", l.PagesPrevNext = "pages-prev-next", l.PagesPrevNextFirstLast = "pages-prev-next-first-last", l.LoadMore = "load-more", l.Infinite = "infinite", l))($t || {});
var zt = ((r) => (r.None = "", r.Incremental = "incremental", r.Decremental = "decremental", r))(zt || {});
var Jt = ((i) => (i.NotDefined = "", i.Hidden = "hidden", i.Integer = "integer", i.Decimal = "decimal", i.Auto = "auto", i))(Jt || {});
var Yt = ((o) => (o.Bar = "bar", o.Circle = "circle", o))(Yt || {});
var ot = (_b = class extends a {
  constructor(t = {}) {
    super();
    __publicField(this, "modelValue", 0);
    __publicField(this, "animation", "");
    __publicField(this, "type", "bar");
    __publicField(this, "duration", 4e3);
    __publicField(this, "pauseOnHover", false);
    __publicField(this, "header", "");
    __publicField(this, "valueFormat", "auto");
    __publicField(this, "circle");
    this.feed(t);
  }
}, __publicField(_b, "lktAllowUndefinedProps", ["circle"]), __publicField(_b, "lktDefaultValues", ["modelValue", "animation", "type", "duration", "pauseOnHover", "header", "valueFormat", "circle"]), _b);
var Qt = ((l) => (l.Table = "table", l.Item = "item", l.Ul = "ul", l.Ol = "ol", l.Carousel = "carousel", l.Accordion = "accordion", l))(Qt || {});
var Zt = ((n) => (n[n.Auto = 0] = "Auto", n[n.PreferItem = 1] = "PreferItem", n[n.PreferCustomItem = 2] = "PreferCustomItem", n[n.PreferColumns = 3] = "PreferColumns", n))(Zt || {});
var _t = ((o) => (o.NotDefined = "", o.ActionIcon = "action-icon", o))(_t || {});
var te = ((o) => (o.Message = "message", o.Button = "button", o))(te || {});
var ee = ((r) => (r.Left = "left", r.Center = "center", r.Right = "right", r))(ee || {});
var oe = ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(oe || {});
var re = ((n) => (n.Top = "top", n.Bottom = "bottom", n.Center = "center", n.ReferrerCenter = "referrer-center", n))(re || {});
var ne = ((i) => (i.Left = "left", i.Right = "right", i.Center = "center", i.LeftCorner = "left-corner", i.RightCorner = "right-corner", i))(ne || {});
var ae = ((g) => (g.LktAnchor = "lkt-anchor", g.LktLayoutAccordion = "lkt-layout-accordion", g.LktTextAccordion = "lkt-text-accordion", g.LktLayoutBox = "lkt-layout-box", g.LktTextBox = "lkt-text-box", g.LktLayoutBanner = "lkt-layout-banner", g.LktTextBanner = "lkt-text-banner", g.LktButton = "lkt-button", g.LktLayout = "lkt-layout", g.LktHeader = "lkt-header", g.LktIcon = "lkt-icon", g.LktIcons = "lkt-icons", g.LktImage = "lkt-image", g.LktText = "lkt-text", g))(ae || {});
var ft = ((n) => (n.Grid = "grid", n.FlexRow = "flex-row", n.FlexRows = "flex-rows", n.FlexColumn = "flex-column", n))(ft || {});
var le = ((r) => (r.Draft = "draft", r.Public = "public", r.Scheduled = "scheduled", r))(le || {});
var me = ((p) => (p[p.XXS = 1] = "XXS", p[p.XS = 2] = "XS", p[p.SM = 3] = "SM", p[p.MD = 4] = "MD", p[p.LG = 5] = "LG", p[p.XL = 6] = "XL", p[p.XXL = 7] = "XXL", p))(me || {});
var de = ((n) => (n.None = "", n.Focus = "focus", n.Blur = "blur", n.Always = "always", n))(de || {});
var ce = ((o) => (o.Message = "message", o.Inline = "inline", o))(ce || {});
var pe = ((r) => (r.Auto = "auto", r.Local = "local", r.Remote = "remote", r))(pe || {});
var ge = ((i) => (i.Refresh = "refresh", i.Close = "close", i.ReOpen = "reOpen", i.Exec = "exec", i.Open = "open", i))(ge || {});
var Ce = ((o) => (o.Asc = "asc", o.Desc = "desc", o))(Ce || {});
var xe = ((f) => (f.Create = "create", f.Update = "update", f.Edit = "edit", f.Drop = "drop", f.Sort = "sort", f.SwitchEditMode = "switch-edit-mode", f.InlineEdit = "inline-edit", f.InlineCreate = "inline-create", f.ModalCreate = "modal-create", f.InlineCreateEver = "inline-create-ever", f))(xe || {});
var be = ((o) => (o.Lazy = "lazy", o.Ever = "ever", o))(be || {});
var he = ((o) => (o.Page = "page", o.Element = "element", o))(he || {});
var Be = ((o) => (o.Quick = "quick", o.Full = "full", o))(Be || {});
function la(e) {
  let t = new e(), o = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in t && (o[r] = t[r]);
  return o;
}
const getVisiblePercentage = (progress, format) => {
  let r = Number(progress).toFixed(2);
  if (format === Jt.Auto) {
    if (r.indexOf(".00") > -1) r = r.replace(".00", "");
  } else if (format === Jt.Integer) {
    r = parseInt(r);
  }
  return r;
};
const _hoisted_1$2 = { class: "progress-circle" };
const _hoisted_2$2 = ["width", "height", "viewBox"];
const _hoisted_3$2 = ["cx", "cy", "r", "stroke-width"];
const _hoisted_4$1 = ["cx", "cy", "r", "stroke-width"];
const _hoisted_5 = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset", "stroke-width", "transform"];
const _hoisted_6 = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset", "stroke-width", "transform"];
const _hoisted_7 = ["cx", "cy", "r", "stroke-dasharray", "transform"];
const _hoisted_8 = { class: "progress-ring__text" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProgressCircle",
  props: {
    animation: {},
    progress: {},
    progressHigherLimit: {},
    progressLowerLimit: {},
    size: { default: 120 },
    strokeWidth: { default: 12 },
    borderWidth: { default: 2 },
    duration: { default: 1e3 },
    ballRadius: {},
    direction: { default: "right" },
    valueFormat: {},
    pauseOnHover: { type: Boolean },
    hasHover: { type: Boolean }
  },
  emits: ["progress-updated"],
  setup(__props, { emit: __emit }) {
    var _a2, _b2, _c;
    const props = __props;
    const currentProgress = ref(props.progress);
    const emit = __emit;
    const size = ref((_a2 = props.size) != null ? _a2 : 120);
    const center = ref(size.value / 2);
    const strokeWidth = ref((_b2 = props.strokeWidth) != null ? _b2 : 12);
    const duration = ref((_c = props.duration) != null ? _c : 1e3);
    const radius = computed(() => (size.value - strokeWidth.value) / 2);
    const circumference = computed(() => 2 * Math.PI * radius.value);
    const offset = computed(() => circumference.value * (1 - currentProgress.value / 100));
    let animationId = null;
    const ballPos = computed(() => {
      const angle = 2 * Math.PI * (currentProgress.value / 100);
      const cx = size.value / 2;
      const cy = size.value / 2;
      const r = radius.value;
      return {
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle)
      };
    });
    const ballRadius = computed(() => {
      if (props.ballRadius) return props.ballRadius;
      return (size.value / 2 - strokeWidth.value) / 8;
    });
    const ballCircumference = computed(() => 2 * Math.PI * ballRadius.value);
    function animateProgress(target) {
      const start = currentProgress.value;
      const change = props.animation === zt.Incremental ? props.progressHigherLimit - start : start - props.progressLowerLimit;
      const startTime = performance.now();
      function animate(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration.value, 1);
        if (props.animation === zt.Incremental) {
          currentProgress.value = start + change * progress;
        } else if (props.animation === zt.Decremental) {
          currentProgress.value = start - change * progress;
        }
        emit("progress-updated", currentProgress.value);
        if (progress < 1) animationId = requestAnimationFrame(animate);
      }
      animationId = requestAnimationFrame(animate);
    }
    function pauseAnimation() {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
    const computedVisiblePercentage = computed(() => {
      return getVisiblePercentage(currentProgress.value, props.valueFormat);
    });
    const computedDirectionStyles = computed(() => {
      if (props.direction === "left") return `rotate(-180 ${center.value} ${center.value}) scale(-1,1) translate(-${size.value} 0)`;
      return "";
    });
    watch(() => props.progress, (newVal) => {
      animateProgress();
    }, { immediate: true });
    watch(() => props.hasHover, (hasHover) => {
      if (props.pauseOnHover) {
        if (hasHover) {
          pauseAnimation();
        } else {
          animateProgress(props.progress);
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(), createElementBlock("svg", {
          class: "progress-ring",
          width: size.value,
          height: size.value,
          viewBox: `0 0 ${size.value} ${size.value}`
        }, [
          createElementVNode("circle", {
            class: "progress-ring--background-border",
            cx: center.value,
            cy: center.value,
            r: radius.value,
            stroke: "transparent",
            fill: "transparent",
            "stroke-width": strokeWidth.value
          }, null, 8, _hoisted_3$2),
          createElementVNode("circle", {
            class: "progress-ring--background",
            cx: center.value,
            cy: center.value,
            r: radius.value,
            stroke: "transparent",
            fill: "transparent",
            "stroke-width": strokeWidth.value - 2 * _ctx.borderWidth
          }, null, 8, _hoisted_4$1),
          createElementVNode("circle", {
            class: "progress-ring--circle-border",
            cx: center.value,
            cy: center.value,
            r: radius.value,
            "stroke-dasharray": circumference.value,
            "stroke-dashoffset": offset.value,
            stroke: "transparent",
            fill: "transparent",
            "stroke-width": strokeWidth.value,
            "stroke-linecap": "round",
            transform: computedDirectionStyles.value
          }, null, 8, _hoisted_5),
          createElementVNode("circle", {
            class: "progress-ring--circle",
            cx: center.value,
            cy: center.value,
            r: radius.value,
            "stroke-dasharray": circumference.value,
            "stroke-dashoffset": offset.value,
            stroke: "transparent",
            fill: "transparent",
            "stroke-width": strokeWidth.value - 2 * _ctx.borderWidth,
            "stroke-linecap": "round",
            transform: computedDirectionStyles.value
          }, null, 8, _hoisted_6),
          createElementVNode("circle", {
            class: "progress-ring--ball",
            cx: ballPos.value.x,
            cy: ballPos.value.y,
            r: ballRadius.value,
            "stroke-dasharray": ballCircumference.value,
            "stroke-width": 2,
            transform: computedDirectionStyles.value
          }, null, 8, _hoisted_7)
        ], 8, _hoisted_2$2)),
        createElementVNode("div", _hoisted_8, toDisplayString(computedVisiblePercentage.value) + "%", 1)
      ]);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const ProgressCircle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-306f08c7"]]);
const _hoisted_1$1 = { class: "lkt-progress-content" };
const _hoisted_2$1 = { class: "lkt-progress-bar" };
const _hoisted_3$1 = ["aria-valuenow"];
const _hoisted_4 = {
  key: 0,
  class: "lkt-progress-indicator"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProgressBar",
  props: {
    animation: {},
    progress: {},
    progressHigherLimit: {},
    progressLowerLimit: {},
    duration: { default: 1e3 },
    direction: { default: "right" },
    valueFormat: {},
    pauseOnHover: { type: Boolean },
    hasHover: { type: Boolean }
  },
  emits: ["progress-updated"],
  setup(__props, { emit: __emit }) {
    var _a2;
    const props = __props;
    const currentProgress = ref(props.progress);
    const duration = ref((_a2 = props.duration) != null ? _a2 : 1e3);
    let animationId = null;
    const emit = __emit;
    const computedVisiblePercentage = computed(() => {
      return getVisiblePercentage(currentProgress.value, props.valueFormat);
    }), progressBarStyles = computed(() => {
      return "width: calc(" + computedVisiblePercentage.value + "%)";
    });
    function animateProgress(target) {
      const start = currentProgress.value;
      const change = props.animation === zt.Incremental ? props.progressHigherLimit - start : start - props.progressLowerLimit;
      const startTime = performance.now();
      function animate(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration.value, 1);
        if (props.animation === zt.Incremental) {
          currentProgress.value = start + change * progress;
        } else if (props.animation === zt.Decremental) {
          currentProgress.value = start - change * progress;
        }
        emit("progress-updated", currentProgress.value);
        if (progress < 1) animationId = requestAnimationFrame(animate);
      }
      animationId = requestAnimationFrame(animate);
    }
    function pauseAnimation() {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
    watch(() => props.progress, (newVal) => {
      animateProgress();
    }, { immediate: true });
    watch(() => props.hasHover, (hasHover) => {
      if (props.pauseOnHover) {
        if (hasHover) {
          pauseAnimation();
        } else {
          animateProgress(props.progress);
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2$1, [
          createElementVNode("div", {
            class: "lkt-progress-bar-percentage",
            style: normalizeStyle(progressBarStyles.value),
            role: "progressbar",
            "aria-valuenow": computedVisiblePercentage.value,
            "aria-valuemin": 0,
            "aria-valuemax": 100
          }, null, 12, _hoisted_3$1)
        ]),
        _ctx.valueFormat !== "hidden" ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(computedVisiblePercentage.value) + "%", 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1 = { class: "lkt-progress-header" };
const _hoisted_2 = {
  key: 0,
  class: "lkt-progress-content"
};
const _hoisted_3 = {
  key: 1,
  class: "lkt-progress-content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktProgress",
  props: /* @__PURE__ */ mergeDefaults({
    modelValue: {},
    type: {},
    animation: {},
    duration: {},
    direction: {},
    pauseOnHover: { type: Boolean },
    header: {},
    valueFormat: {},
    circle: {}
  }, la(ot)),
  emits: [
    "update:modelValue",
    "mouseenter",
    "mouseleave",
    "end"
  ],
  setup(__props, { emit: __emit }) {
    var _a2, _b2, _c, _d, _e, _f, _g, _h;
    const emit = __emit;
    const slots = useSlots();
    const props = __props;
    const progress = ref(Number(props.modelValue));
    if (progress.value > 100) progress.value = 100;
    if (progress.value < 0) progress.value = 0;
    const progressHigherLimit = ref(100);
    if (props.animation === zt.Incremental) {
      progressHigherLimit.value = progress.value;
      progress.value = 0;
    }
    const progressLowerLimit = ref(0);
    if (props.animation === zt.Decremental) {
      progressLowerLimit.value = progress.value;
      progress.value = progressHigherLimit.value;
    }
    const hasHover = ref(false);
    watch(() => props.modelValue, (v) => {
      if (v > 100) v = 100;
      if (v < 0) v = 0;
      progress.value = v;
    });
    watch(progress, (v) => {
      emit("update:modelValue", v);
    });
    const circleProgress = ref(progress.value);
    const updateCircleProgress = (n) => circleProgress.value = n;
    const classes = computed(() => {
      let r = ["lkt-progress--fill-0"];
      if (props.type === Yt.Circle) r.push("is-circle");
      if (props.type === Yt.Bar) r.push("is-bar");
      const p = props.type === Yt.Bar ? progress.value : circleProgress.value;
      if (p >= 10) r.push("lkt-progress--fill-10");
      if (p >= 20) r.push("lkt-progress--fill-20");
      if (p >= 30) r.push("lkt-progress--fill-30");
      if (p >= 40) r.push("lkt-progress--fill-40");
      if (p >= 50) r.push("lkt-progress--fill-50");
      if (p >= 60) r.push("lkt-progress--fill-60");
      if (p >= 70) r.push("lkt-progress--fill-70");
      if (p >= 80) r.push("lkt-progress--fill-80");
      if (p >= 90) r.push("lkt-progress--fill-90");
      if (p >= 100) r.push("lkt-progress--fill-100");
      return r.join(" ");
    });
    const onMouseEnter = (event) => {
      hasHover.value = true;
      emit("mouseenter", event);
    }, onMouseLeave = (event) => {
      hasHover.value = false;
      emit("mouseleave", event);
    };
    const circleRadius = ref((_b2 = (_a2 = props.circle) == null ? void 0 : _a2.radius) != null ? _b2 : 50);
    const ballRadius = ref((_e = (_d = (_c = props.circle) == null ? void 0 : _c.ball) == null ? void 0 : _d.radius) != null ? _e : 50);
    const strokeWidth = ref((_h = (_g = (_f = props.circle) == null ? void 0 : _f.track) == null ? void 0 : _g.width) != null ? _h : 10);
    const circleWidth = ref(circleRadius.value * 2);
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
        _ctx.type === unref(Yt).Circle ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(ProgressCircle, mergeProps({
            progress: progress.value,
            progressHigherLimit: progressHigherLimit.value,
            progressLowerLimit: progressLowerLimit.value,
            animation: _ctx.animation,
            size: circleWidth.value,
            ballRadius: ballRadius.value,
            strokeWidth: strokeWidth.value,
            duration: _ctx.duration,
            direction: _ctx.direction,
            valueFormat: _ctx.valueFormat,
            pauseOnHover: _ctx.pauseOnHover,
            hasHover: hasHover.value
          }, { onProgressUpdated: updateCircleProgress }), null, 16)
        ])) : _ctx.type === unref(Yt).Bar ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createVNode(_sfc_main$1, mergeProps({
            progress: progress.value,
            progressHigherLimit: progressHigherLimit.value,
            progressLowerLimit: progressLowerLimit.value,
            animation: _ctx.animation,
            size: circleWidth.value,
            ballRadius: ballRadius.value,
            strokeWidth: strokeWidth.value,
            duration: _ctx.duration,
            direction: _ctx.direction,
            valueFormat: _ctx.valueFormat,
            pauseOnHover: _ctx.pauseOnHover,
            hasHover: hasHover.value
          }, { onProgressUpdated: updateCircleProgress }), null, 16)
        ])) : createCommentVNode("", true)
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
