var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { ref, defineComponent, useSlots, computed, watch, createElementBlock, openBlock, createElementVNode, unref, renderSlot, normalizeProps, guardReactiveProps, toDisplayString, createCommentVNode, normalizeStyle, mergeDefaults, resolveComponent, normalizeClass, createBlock, mergeProps, createSlots, withCtx } from "vue";
import "lkt-i18n";
import "lkt-string-tools";
var Ee = ((l) => (l.Button = "button", l.Submit = "submit", l.Reset = "reset", l.Anchor = "anchor", l.Content = "content", l.Switch = "switch", l.HiddenSwitch = "hidden-switch", l.Split = "split", l.SplitLazy = "split-lazy", l.SplitEver = "split-ever", l.Tooltip = "tooltip", l.TooltipLazy = "tooltip-lazy", l.TooltipEver = "tooltip-ever", l.FileUpload = "file-upload", l.ImageUpload = "image-upload", l.InvisibleWrapper = "invisible-wrapper", l.Menu = "menu", l.Tab = "tab", l))(Ee || {});
var Ie = ((s) => (s.Text = "text", s.Email = "email", s.Tel = "tel", s.Password = "password", s.Search = "search", s.Number = "number", s.Color = "color", s.Range = "range", s.Textarea = "textarea", s.Html = "html", s.Date = "date", s.Time = "time", s.DateTime = "datetime", s.File = "file", s.Image = "image", s.Select = "select", s.Check = "check", s.Switch = "switch", s.Calc = "calc", s.Card = "card", s.Table = "table", s.Radio = "radio", s.ToggleButtonGroup = "toggle-button-group", s))(Ie || {});
var Pt = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], a = (_a = class {
  constructor(e) {
  }
  feed(e = {}, o = this) {
    if (typeof e == "object") for (let [r, n] of Object.entries(e)) o.assignProp(r, n);
  }
  assignProp(e, o) {
    if (!(Pt.includes(e) || _a.lktExcludedProps.includes(e)) && true) {
      if (_a.lktDateProps.includes(e)) {
        this[e] = new Date(o);
        return;
      }
      this[e] = o;
    }
  }
}, __publicField(_a, "lktAllowUndefinedProps", []), __publicField(_a, "lktExcludedProps", []), __publicField(_a, "lktDateProps", []), __publicField(_a, "lktStrictItem", false), __publicField(_a, "lktDefaultValues", []), _a);
var v = ((n) => (n.Auto = "auto", n.Always = "always", n.Lazy = "lazy", n.Ever = "ever", n))(v || {});
var Me = ((r) => (r.Transform = "transform", r.Height = "height", r.Display = "display", r))(Me || {});
var Se = ((m) => (m.Href = "href", m.RouterLink = "router-link", m.RouterLinkBack = "router-link-back", m.Mail = "mail", m.Tel = "tel", m.Tab = "tab", m.Download = "download", m.Action = "action", m.Legacy = "", m))(Se || {});
var w = ((o) => (o.Static = "static", o.Parallax = "parallax", o))(w || {});
var De = ((g) => (g.None = "", g.Field = "field", g.Button = "button", g.Anchor = "anchor", g.InlineDrop = "inline-drop", g.ColumnIndex = "column-index", g))(De || {});
var Ve = ((r) => (r.Date = "date", r.Number = "number", r.Timer = "timer", r))(Ve || {});
var ve = ((u) => (u.A0 = "a0", u.A1 = "a1", u.A2 = "a2", u.A3 = "a3", u.A4 = "a4", u.A5 = "a5", u.A6 = "a6", u.A7 = "a7", u.A8 = "a8", u.A9 = "a9", u))(ve || {});
var Te = ((n) => (n.List = "list", n.Inline = "inline", n.Count = "count", n.Table = "table", n))(Te || {});
var Fe = ((l) => (l.HTTPResponse = "http-response", l.MinStringLength = "min-str", l.MinNumber = "min-num", l.MaxStringLength = "max-str", l.MaxNumber = "max-num", l.Email = "email", l.Empty = "empty", l.EqualTo = "equal-to", l.MinNumbers = "min-numbers", l.MaxNumbers = "max-numbers", l.MinChars = "min-chars", l.MaxChars = "max-chars", l.MinUpperChars = "min-upper-chars", l.MaxUpperChars = "max-upper-chars", l.MinLowerChars = "min-lower-chars", l.MaxLowerChars = "max-lower-chars", l.MinSpecialChars = "min-special-chars", l.MaxSpecialChars = "max-special-chars", l))(Fe || {});
var Ae = ((r) => (r.Ok = "ok", r.Ko = "ko", r.Info = "info", r))(Ae || {});
var we = ((i) => (i.StorageUnit = "unit", i.Directory = "dir", i.Image = "img", i.Video = "vid", i.File = "file", i))(we || {});
var Oe = ((g) => (g.H1 = "h1", g.H2 = "h2", g.H3 = "h3", g.H4 = "h4", g.H5 = "h5", g.H6 = "h6", g))(Oe || {});
var Pe = ((o) => (o.NotDefined = "", o.Button = "button", o))(Pe || {});
var je = ((o) => (o.Start = "start", o.End = "end", o))(je || {});
var We = ((r) => (r.Create = "create", r.Update = "update", r.Read = "read", r))(We || {});
var Ne = ((o) => (o.Inline = "inline", o.Modal = "modal", o))(Ne || {});
var He = ((o) => (o.Top = "top", o.Bottom = "bottom", o))(He || {});
var Ue = ((r) => (r.Changed = "changed", r.Always = "always", r.Never = "never", r))(Ue || {});
var Ke = ((r) => (r.Manual = "manual", r.Auto = "auto", r.Delay = "delay", r))(Ke || {});
var Re = ((o) => (o.Toast = "toast", o.Inline = "inline", o))(Re || {});
var Ge = ((n) => (n.Current = "current", n.Modifications = "modifications", n.SplitView = "split-view", n.Differences = "differences", n))(Ge || {});
var qe = ((r) => (r.Hidden = "hidden", r.Always = "always", r.TabList = "tablist", r))(qe || {});
var Xe = ((n) => (n.Anchor = "anchor", n.Button = "button", n.Header = "header", n.Entry = "entry", n))(Xe || {});
var ze = ((o) => (o.Modal = "modal", o.Confirm = "confirm", o))(ze || {});
var $e = ((m) => (m.Pages = "pages", m.PrevNext = "prev-next", m.PagesPrevNext = "pages-prev-next", m.PagesPrevNextFirstLast = "pages-prev-next-first-last", m.LoadMore = "load-more", m.Infinite = "infinite", m.TimelineAsc = "timeline-asc", m.TimelineDesc = "timeline-desc", m.TimelineAscDesc = "timeline-asc-desc", m))($e || {});
var Je = ((r) => (r.None = "", r.Incremental = "incremental", r.Decremental = "decremental", r))(Je || {});
var Ye = ((i) => (i.NotDefined = "", i.Hidden = "hidden", i.Integer = "integer", i.Decimal = "decimal", i.Auto = "auto", i))(Ye || {});
var Qe = ((o) => (o.Bar = "bar", o.Circle = "circle", o))(Qe || {});
var te = (_b = class extends a {
  constructor(e = {}) {
    super();
    __publicField(this, "modelValue", 0);
    __publicField(this, "animation", "");
    __publicField(this, "type", "bar");
    __publicField(this, "duration", 4e3);
    __publicField(this, "pauseOnHover", false);
    __publicField(this, "unit");
    __publicField(this, "header", {});
    __publicField(this, "valueFormat", "auto");
    __publicField(this, "text");
    __publicField(this, "circle");
    this.feed(e);
  }
}, __publicField(_b, "lktAllowUndefinedProps", ["circle", "unit", "text"]), __publicField(_b, "lktDefaultValues", ["modelValue", "animation", "type", "duration", "pauseOnHover", "header", "valueFormat", "circle", "unit", "text"]), _b);
var Ze = ((f) => (f.Table = "table", f.Item = "item", f.Ul = "ul", f.Ol = "ol", f.Carousel = "carousel", f.Accordion = "accordion", f.Calendar = "calendar", f))(Ze || {});
var _e = ((n) => (n[n.Auto = 0] = "Auto", n[n.PreferItem = 1] = "PreferItem", n[n.PreferCustomItem = 2] = "PreferCustomItem", n[n.PreferColumns = 3] = "PreferColumns", n))(_e || {});
var et = ((o) => (o.NotDefined = "", o.ActionIcon = "action-icon", o))(et || {});
var tt = ((o) => (o.Message = "message", o.Button = "button", o))(tt || {});
var ot = ((r) => (r.Left = "left", r.Center = "center", r.Right = "right", r))(ot || {});
var rt = ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(rt || {});
var nt = ((n) => (n.Top = "top", n.Bottom = "bottom", n.Center = "center", n.ReferrerCenter = "referrer-center", n))(nt || {});
var at = ((i) => (i.Left = "left", i.Right = "right", i.Center = "center", i.LeftCorner = "left-corner", i.RightCorner = "right-corner", i))(at || {});
var it = ((p) => (p.LktAnchor = "lkt-anchor", p.LktLayoutAccordion = "lkt-layout-accordion", p.LktTextAccordion = "lkt-text-accordion", p.LktLayoutBox = "lkt-layout-box", p.LktTextBox = "lkt-text-box", p.LktLayoutBanner = "lkt-layout-banner", p.LktTextBanner = "lkt-text-banner", p.LktButton = "lkt-button", p.LktLayout = "lkt-layout", p.LktHeader = "lkt-header", p.LktIcon = "lkt-icon", p.LktIcons = "lkt-icons", p.LktImage = "lkt-image", p.LktText = "lkt-text", p))(it || {});
var se = ((n) => (n.Grid = "grid", n.FlexRow = "flex-row", n.FlexRows = "flex-rows", n.FlexColumn = "flex-column", n))(se || {});
var st = ((r) => (r.Draft = "draft", r.Public = "public", r.Scheduled = "scheduled", r))(st || {});
var dt = ((f) => (f[f.XXS = 1] = "XXS", f[f.XS = 2] = "XS", f[f.SM = 3] = "SM", f[f.MD = 4] = "MD", f[f.LG = 5] = "LG", f[f.XL = 6] = "XL", f[f.XXL = 7] = "XXL", f))(dt || {});
var ct = ((n) => (n.PrevButton = "prev", n.NextButton = "next", n.DatePicker = "datePicker", n.GoToCurrent = "goToCurrent", n))(ct || {});
var pt = ((o) => (o.Auto = "auto", o.Progress = "progress", o))(pt || {});
var gt = ((n) => (n.None = "", n.Focus = "focus", n.Blur = "blur", n.Always = "always", n))(gt || {});
var Ct = ((r) => (r.Error = "error", r.Errors = "errors", r.All = "all", r))(Ct || {});
var xt = ((o) => (o.Message = "message", o.Inline = "inline", o))(xt || {});
var bt = ((r) => (r.Auto = "auto", r.Local = "local", r.Remote = "remote", r))(bt || {});
var ht = ((i) => (i.Refresh = "refresh", i.Close = "close", i.ReOpen = "reOpen", i.Exec = "exec", i.Open = "open", i))(ht || {});
var kt = ((o) => (o.Asc = "asc", o.Desc = "desc", o))(kt || {});
var yt = ((r) => (r.Always = "always", r.Lazy = "lazy", r.Ever = "ever", r))(yt || {});
var Lt = ((u) => (u.Create = "create", u.Update = "update", u.Edit = "edit", u.Drop = "drop", u.Sort = "sort", u.SwitchEditMode = "switch-edit-mode", u.InlineEdit = "inline-edit", u.InlineCreate = "inline-create", u.ModalCreate = "modal-create", u.InlineCreateEver = "inline-create-ever", u))(Lt || {});
var Bt = ((o) => (o.Lazy = "lazy", o.Ever = "ever", o))(Bt || {});
var Et = ((o) => (o.Page = "page", o.Element = "element", o))(Et || {});
var Dt = ((o) => (o.Quick = "quick", o.Full = "full", o))(Dt || {});
function La(t) {
  let e = new t(), o = {};
  if (!Array.isArray(t.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of t.lktDefaultValues) r in e && (o[r] = e[r]);
  return o;
}
const getVisiblePercentage = (progress, format) => {
  let r = Number(progress).toFixed(2);
  if (format === Ye.Auto) {
    if (r.indexOf(".00") > -1) r = r.replace(".00", "");
  } else if (format === Ye.Integer) {
    r = parseInt(r);
  }
  return r;
};
const getFinalText = (visiblePercentage, unit) => {
  if (!unit || typeof unit === "object" && Object.keys(unit).length === 0) return String(visiblePercentage);
  if (typeof unit === "string") return `${visiblePercentage}${unit}`;
  switch (unit.position) {
    case "end":
      return `${visiblePercentage}${unit.text}`;
    case "start":
      return `${unit.text}${visiblePercentage}`;
    default:
      return `${visiblePercentage}${unit.text}`;
  }
};
const getAnimationDistanceStep = (distance, duration) => {
  return distance / duration * (duration / 100);
};
const parseAnimationConfig = (animation) => {
  if (typeof animation === "string") return {
    type: animation,
    autoplay: true
  };
  if (typeof animation.autoplay === "undefined") animation.autoplay = true;
  if (typeof animation.externalControl === "undefined") animation.externalControl = false;
  if (typeof animation.type === "undefined") animation.type = Je.None;
  return animation;
};
const doProgressAnimation = (args) => {
  if (args.paused) return;
  if (args.current.value === args.target && !args.animation.externalControl) return;
  if (isNaN(args.target) || isNaN(args.current.value)) return;
  let zero;
  const animationId = ref(null);
  const distance = Math.abs(args.target - args.current.value);
  function animate(timestamp) {
    if (args.paused || args.current.value === args.target) {
      doStopProgressAnimation(animationId);
      return;
    }
    if (isNaN(args.target) || isNaN(args.current.value)) {
      doStopProgressAnimation(animationId);
      return;
    }
    if (!zero) zero = timestamp;
    let elapsed = timestamp - zero;
    let pendingTime = args.duration - elapsed;
    let progress = getAnimationDistanceStep(distance, pendingTime);
    if (!isNaN(progress)) {
      if (args.animation.type === Je.Incremental) {
        args.current.value = Math.min(args.current.value + progress, args.target);
      } else if (args.animation.type === Je.Decremental) {
        args.current.value = Math.max(args.current.value - progress, args.target);
      }
    }
    let keepAnimating = args.current.value !== args.target;
    if (typeof args.events.onAnimatedFrame === "function") args.events.onAnimatedFrame();
    if (keepAnimating) {
      animationId.value = requestAnimationFrame(animate);
    } else {
      doStopProgressAnimation(animationId);
    }
  }
  animationId.value = requestAnimationFrame(animate);
  return animationId;
};
const doStopProgressAnimation = (animationId) => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value);
    animationId.value = null;
  }
};
const _hoisted_1$2 = { class: "progress-circle" };
const _hoisted_2$1 = ["width", "height", "viewBox"];
const _hoisted_3$1 = ["cx", "cy", "r", "stroke-width"];
const _hoisted_4$1 = ["cx", "cy", "r", "stroke-width"];
const _hoisted_5$1 = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset", "stroke-width", "transform"];
const _hoisted_6 = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset", "stroke-width", "transform"];
const _hoisted_7 = ["cx", "cy", "r", "stroke-dasharray", "transform"];
const _hoisted_8 = {
  key: 0,
  class: "lkt-progress--indicator"
};
const _hoisted_9 = {
  key: 1,
  class: "lkt-progress--indicator"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProgressCircle",
  props: {
    animation: {},
    progress: {},
    text: {},
    progressHigherLimit: {},
    progressLowerLimit: {},
    unit: {},
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
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a2, _b2, _c;
    const props = __props;
    const currentProgress = ref(props.progress);
    const emit = __emit;
    const slots = useSlots();
    const size = ref((_a2 = props.size) != null ? _a2 : 120);
    const center = ref(size.value / 2);
    const strokeWidth = ref((_b2 = props.strokeWidth) != null ? _b2 : 12);
    const duration = ref((_c = props.duration) != null ? _c : 1e3);
    const radius = computed(() => (size.value - strokeWidth.value) / 2);
    const circumference = computed(() => 2 * Math.PI * radius.value);
    const offset = computed(() => circumference.value * (1 - currentProgress.value / 100));
    let animationId = ref(null);
    const paused = ref(false);
    const animationLimit = computed(() => {
      if (props.animation.externalControl) return props.progress;
      return props.animation.type === Je.Incremental ? props.progressHigherLimit : props.progressLowerLimit;
    });
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
    function animateProgress() {
      animationId = doProgressAnimation({
        duration: duration.value,
        animation: props.animation,
        paused: paused.value,
        current: currentProgress,
        target: animationLimit.value,
        events: {
          onAnimatedFrame: () => {
            emit("progress-updated", currentProgress.value);
          }
        }
      });
    }
    function pauseAnimation() {
      doStopProgressAnimation(animationId);
    }
    const computedDirectionStyles = computed(() => {
      if (props.direction === "left") return `rotate(-180 ${center.value} ${center.value}) scale(-1,1) translate(-${size.value} 0)`;
      return "";
    });
    watch(() => props.progress, (newVal) => {
      animateProgress();
    }, { immediate: true });
    watch(() => props.duration, (newVal) => {
      duration.value = newVal;
    }, { immediate: true });
    watch(() => props.hasHover, (hasHover) => {
      if (props.pauseOnHover) {
        if (hasHover) {
          pauseAnimation();
        } else if (currentProgress.value !== animationLimit.value) {
          paused.value = false;
          animateProgress();
        }
      }
    });
    __expose({
      pause: () => {
        paused.value = true;
      },
      start: () => {
        paused.value = false;
        animateProgress();
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
          }, null, 8, _hoisted_3$1),
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
          }, null, 8, _hoisted_5$1),
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
        ], 8, _hoisted_2$1)),
        unref(slots).text ? (openBlock(), createElementBlock("div", _hoisted_8, [
          renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps({
            text: _ctx.text,
            progress: currentProgress.value,
            unit: _ctx.unit
          })))
        ])) : (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(_ctx.text), 1))
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "lkt-progress--content" };
const _hoisted_2 = { class: "lkt-progress--bar" };
const _hoisted_3 = ["aria-valuenow"];
const _hoisted_4 = {
  key: 0,
  class: "lkt-progress--indicator"
};
const _hoisted_5 = {
  key: 1,
  class: "lkt-progress--indicator"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProgressBar",
  props: {
    animation: {},
    progress: {},
    text: {},
    progressHigherLimit: {},
    progressLowerLimit: {},
    unit: {},
    duration: { default: 1e3 },
    direction: { default: "right" },
    valueFormat: {},
    pauseOnHover: { type: Boolean },
    hasHover: { type: Boolean }
  },
  emits: ["progress-updated"],
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a2;
    const props = __props;
    const currentProgress = ref(props.progress);
    const duration = ref((_a2 = props.duration) != null ? _a2 : 1e3);
    let animationId = ref(null);
    const paused = ref(false);
    const animationLimit = computed(() => {
      if (props.animation.externalControl) {
        if (isNaN(props.progress)) return 100;
        return props.progress;
      }
      return props.animation.type === Je.Incremental ? props.progressHigherLimit : props.progressLowerLimit;
    });
    const emit = __emit;
    const slots = useSlots();
    const progressBarStyles = computed(() => {
      let r = [];
      r.push(`transition: all linear ${duration.value}ms`);
      r.push(`width: ${currentProgress.value}%`);
      return r.join(";");
    });
    function animateProgress() {
      animationId = doProgressAnimation({
        duration: duration.value,
        animation: props.animation,
        paused: paused.value,
        current: currentProgress,
        target: animationLimit.value,
        events: {
          onAnimatedFrame: () => {
            emit("progress-updated", currentProgress.value);
          }
        }
      });
    }
    function pauseAnimation() {
      doStopProgressAnimation(animationId);
    }
    watch(() => props.progress, (newVal) => {
      animateProgress();
    }, { immediate: true });
    watch(() => props.duration, (newVal) => {
      duration.value = newVal;
    }, { immediate: true });
    watch(() => props.hasHover, (hasHover) => {
      if (props.pauseOnHover) {
        if (hasHover) {
          pauseAnimation();
        } else if (currentProgress.value !== animationLimit.value) {
          paused.value = false;
          animateProgress();
        }
      }
    });
    __expose({
      pause: () => {
        paused.value = true;
      },
      start: () => {
        paused.value = false;
        animateProgress();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", {
            class: "lkt-progress--bar-percentage",
            style: normalizeStyle(progressBarStyles.value),
            role: "progressbar",
            "aria-valuenow": _ctx.text,
            "aria-valuemin": 0,
            "aria-valuemax": 100
          }, null, 12, _hoisted_3)
        ]),
        unref(slots).text ? (openBlock(), createElementBlock("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps({
            text: _ctx.text,
            progress: currentProgress.value,
            unit: _ctx.unit
          })))
        ])) : _ctx.valueFormat !== "hidden" ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(_ctx.text), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1 = { class: "lkt-progress--content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktProgress",
  props: /* @__PURE__ */ mergeDefaults({
    modelValue: {},
    type: {},
    animation: {},
    duration: {},
    direction: {},
    pauseOnHover: { type: Boolean },
    unit: {},
    header: {},
    valueFormat: {},
    text: { type: [String, Function] },
    circle: {}
  }, La(te)),
  emits: [
    "update:modelValue",
    "mouseenter",
    "mouseleave",
    "end"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a2, _b2, _c, _d, _e2, _f, _g, _h;
    const emit = __emit;
    const slots = useSlots();
    const props = __props;
    const animationConfig = ref(parseAnimationConfig(props.animation));
    const progress = ref(Number(props.modelValue));
    if (progress.value > 100) progress.value = 100;
    if (progress.value < 0) progress.value = 0;
    const progressHigherLimit = ref(100);
    if (animationConfig.value.type === Je.Incremental) {
      progressHigherLimit.value = progress.value;
      progress.value = 0;
    }
    const progressLowerLimit = ref(0);
    if (animationConfig.value.type === Je.Decremental) {
      progressLowerLimit.value = progress.value;
      progress.value = progressHigherLimit.value;
    }
    const hasHover = ref(false);
    const progressRef = ref(null);
    watch(() => props.modelValue, (v2) => {
      if (v2 > 100) v2 = 100;
      if (v2 < 0) v2 = 0;
      progress.value = v2;
    });
    watch(progress, (v2) => {
      emit("update:modelValue", v2);
    });
    const calculatedProgress = ref(progress.value);
    const updateCalculatedProgress = (n) => calculatedProgress.value = n;
    const classes = computed(() => {
      let r = ["lkt-progress--fill-0"];
      if (props.type === Qe.Circle) r.push("is-circle");
      if (props.type === Qe.Bar) r.push("is-bar");
      const p = props.type === Qe.Bar ? progress.value : calculatedProgress.value;
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
    const ballRadius = ref((_e2 = (_d = (_c = props.circle) == null ? void 0 : _c.ball) == null ? void 0 : _d.radius) != null ? _e2 : 50);
    const strokeWidth = ref((_h = (_g = (_f = props.circle) == null ? void 0 : _f.track) == null ? void 0 : _g.width) != null ? _h : 10);
    const circleWidth = ref(circleRadius.value * 2);
    const computedVisiblePercentage = computed(() => {
      const r = getFinalText(getVisiblePercentage(calculatedProgress.value, props.valueFormat), props.unit);
      switch (typeof props.text) {
        case "undefined":
          return r;
        case "function":
          return props.text(r);
        default:
          return props.text;
      }
    });
    __expose({
      pause: () => {
        if (progressRef.value) progressRef.value.pause();
      },
      start: () => {
        if (progressRef.value) progressRef.value.start();
      }
    });
    return (_ctx, _cache) => {
      var _a3;
      const _component_lkt_header = resolveComponent("lkt-header");
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["lkt-progress", classes.value]),
        onMouseenter: onMouseEnter,
        onMouseleave: onMouseLeave
      }, [
        ((_a3 = _ctx.header) == null ? void 0 : _a3.text) || unref(slots).header ? (openBlock(), createBlock(_component_lkt_header, mergeProps({ key: 0 }, _ctx.header, { class: "lkt-progress--header" }), createSlots({ _: 2 }, [
          unref(slots).header ? {
            name: "text",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "header")
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_1, [
          _ctx.type === unref(Qe).Circle ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
            key: 0,
            ref_key: "progressRef",
            ref: progressRef
          }, {
            progress: progress.value,
            progressHigherLimit: progressHigherLimit.value,
            progressLowerLimit: progressLowerLimit.value,
            unit: _ctx.unit,
            text: computedVisiblePercentage.value,
            animation: animationConfig.value,
            size: circleWidth.value,
            ballRadius: ballRadius.value,
            strokeWidth: strokeWidth.value,
            duration: _ctx.duration,
            direction: _ctx.direction,
            valueFormat: _ctx.valueFormat,
            pauseOnHover: _ctx.pauseOnHover,
            hasHover: hasHover.value
          }, { onProgressUpdated: updateCalculatedProgress }), createSlots({ _: 2 }, [
            unref(slots).text ? {
              name: "text",
              fn: withCtx(({ text, progress: progress2, unit }) => [
                renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps({
                  text,
                  progress: progress2,
                  unit
                })))
              ]),
              key: "0"
            } : void 0
          ]), 1040)) : _ctx.type === unref(Qe).Bar ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
            key: 1,
            ref_key: "progressRef",
            ref: progressRef
          }, {
            progress: progress.value,
            progressHigherLimit: progressHigherLimit.value,
            progressLowerLimit: progressLowerLimit.value,
            text: computedVisiblePercentage.value,
            unit: _ctx.unit,
            animation: animationConfig.value,
            size: circleWidth.value,
            ballRadius: ballRadius.value,
            strokeWidth: strokeWidth.value,
            duration: _ctx.duration,
            direction: _ctx.direction,
            valueFormat: _ctx.valueFormat,
            pauseOnHover: _ctx.pauseOnHover,
            hasHover: hasHover.value
          }, { onProgressUpdated: updateCalculatedProgress }), createSlots({ _: 2 }, [
            unref(slots).text ? {
              name: "text",
              fn: withCtx(({ text, progress: progress2, unit }) => [
                renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps({
                  text,
                  progress: progress2,
                  unit
                })))
              ]),
              key: "0"
            } : void 0
          ]), 1040)) : createCommentVNode("", true)
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
