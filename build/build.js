var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c, _d;
import { ref, defineComponent, useSlots, computed, watch, onMounted, createElementBlock, openBlock, createElementVNode, unref, renderSlot, normalizeProps, guardReactiveProps, toDisplayString, createCommentVNode, normalizeStyle, mergeDefaults, resolveComponent, normalizeClass, createBlock, mergeProps, createSlots, withCtx } from "vue";
import "lkt-i18n";
import "lkt-string-tools";
var Se = ((s) => (s.Button = "button", s.Submit = "submit", s.Reset = "reset", s.Anchor = "anchor", s.Content = "content", s.Switch = "switch", s.HiddenSwitch = "hidden-switch", s.Split = "split", s.SplitLazy = "split-lazy", s.SplitEver = "split-ever", s.Tooltip = "tooltip", s.TooltipLazy = "tooltip-lazy", s.TooltipEver = "tooltip-ever", s.FileUpload = "file-upload", s.ImageUpload = "image-upload", s.InvisibleWrapper = "invisible-wrapper", s.Menu = "menu", s.Tab = "tab", s))(Se || {});
var ve = ((f) => (f.Text = "text", f.Email = "email", f.Tel = "tel", f.Password = "password", f.Search = "search", f.Number = "number", f.Color = "color", f.Range = "range", f.Textarea = "textarea", f.Html = "html", f.Date = "date", f.Time = "time", f.DateTime = "datetime", f.File = "file", f.Image = "image", f.Select = "select", f.Check = "check", f.Switch = "switch", f.Calc = "calc", f.Card = "card", f.Table = "table", f.Radio = "radio", f.ToggleButtonGroup = "toggle-button-group", f.DayOfWeek = "day-of-week", f))(ve || {});
var Wt = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], a = (_a = class {
  constructor(e) {
  }
  feed(e = {}, o = this) {
    if (typeof e == "object") for (let [r, n] of Object.entries(e)) o.assignProp(r, n);
  }
  assignProp(e, o) {
    if (!(Wt.includes(e) || _a.lktExcludedProps.includes(e)) && true) {
      if (_a.lktDateProps.includes(e)) {
        this[e] = new Date(o);
        return;
      }
      this[e] = o;
    }
  }
}, __publicField(_a, "lktAllowUndefinedProps", []), __publicField(_a, "lktExcludedProps", []), __publicField(_a, "lktDateProps", []), __publicField(_a, "lktStrictItem", false), __publicField(_a, "lktDefaultValues", []), _a);
var F = ((n) => (n.Auto = "auto", n.Always = "always", n.Lazy = "lazy", n.Ever = "ever", n))(F || {});
var De = ((r) => (r.Transform = "transform", r.Height = "height", r.Display = "display", r))(De || {});
var Ve = ((m) => (m.Href = "href", m.RouterLink = "router-link", m.RouterLinkBack = "router-link-back", m.Mail = "mail", m.Tel = "tel", m.Tab = "tab", m.Download = "download", m.Action = "action", m.Legacy = "", m))(Ve || {});
var j = ((o) => (o.Static = "static", o.Parallax = "parallax", o))(j || {});
var Te = ((g) => (g.None = "", g.Field = "field", g.Button = "button", g.Anchor = "anchor", g.InlineDrop = "inline-drop", g.ColumnIndex = "column-index", g))(Te || {});
var Ae = ((n) => (n.Date = "date", n.Number = "number", n.Timer = "timer", n.Chrono = "chrono", n))(Ae || {});
var Fe = ((o) => (o.Auto = "auto", o.Progress = "progress", o))(Fe || {});
var we = ((u) => (u.A0 = "a0", u.A1 = "a1", u.A2 = "a2", u.A3 = "a3", u.A4 = "a4", u.A5 = "a5", u.A6 = "a6", u.A7 = "a7", u.A8 = "a8", u.A9 = "a9", u))(we || {});
var Pe = ((n) => (n.List = "list", n.Inline = "inline", n.Count = "count", n.Table = "table", n))(Pe || {});
var Oe = ((s) => (s.HTTPResponse = "http-response", s.MinStringLength = "min-str", s.MinNumber = "min-num", s.MaxStringLength = "max-str", s.MaxNumber = "max-num", s.Email = "email", s.Empty = "empty", s.EqualTo = "equal-to", s.MinNumbers = "min-numbers", s.MaxNumbers = "max-numbers", s.MinChars = "min-chars", s.MaxChars = "max-chars", s.MinUpperChars = "min-upper-chars", s.MaxUpperChars = "max-upper-chars", s.MinLowerChars = "min-lower-chars", s.MaxLowerChars = "max-lower-chars", s.MinSpecialChars = "min-special-chars", s.MaxSpecialChars = "max-special-chars", s))(Oe || {});
var je = ((r) => (r.Ok = "ok", r.Ko = "ko", r.Info = "info", r))(je || {});
var He = ((i) => (i.StorageUnit = "unit", i.Directory = "dir", i.Image = "img", i.Video = "vid", i.File = "file", i))(He || {});
var Ne = ((g) => (g.H1 = "h1", g.H2 = "h2", g.H3 = "h3", g.H4 = "h4", g.H5 = "h5", g.H6 = "h6", g))(Ne || {});
var We = ((o) => (o.NotDefined = "", o.Button = "button", o))(We || {});
var Re = ((o) => (o.Start = "start", o.End = "end", o))(Re || {});
var Ue = ((r) => (r.Create = "create", r.Update = "update", r.Read = "read", r))(Ue || {});
var Ke = ((o) => (o.Inline = "inline", o.Modal = "modal", o))(Ke || {});
var Ge = ((r) => (r.Top = "top", r.Bottom = "bottom", r.Hidden = "hidden", r))(Ge || {});
var ze = ((r) => (r.Changed = "changed", r.Always = "always", r.Never = "never", r))(ze || {});
var qe = ((r) => (r.Manual = "manual", r.Auto = "auto", r.Delay = "delay", r))(qe || {});
var Je = ((r) => (r.Toast = "toast", r.Inline = "inline", r.Silent = "silent", r))(Je || {});
var Xe = ((n) => (n.Current = "current", n.Modifications = "modifications", n.SplitView = "split-view", n.Differences = "differences", n))(Xe || {});
var $e = ((r) => (r.Hidden = "hidden", r.Always = "always", r.TabList = "tablist", r))($e || {});
var Ye = ((n) => (n.Anchor = "anchor", n.Button = "button", n.Header = "header", n.Entry = "entry", n))(Ye || {});
var Qe = ((o) => (o.Modal = "modal", o.Confirm = "confirm", o))(Qe || {});
var Ze = ((m) => (m.Pages = "pages", m.PrevNext = "prev-next", m.PagesPrevNext = "pages-prev-next", m.PagesPrevNextFirstLast = "pages-prev-next-first-last", m.LoadMore = "load-more", m.Infinite = "infinite", m.TimelineAsc = "timeline-asc", m.TimelineDesc = "timeline-desc", m.TimelineAscDesc = "timeline-asc-desc", m))(Ze || {});
var _e = ((r) => (r.None = "", r.Incremental = "incremental", r.Decremental = "decremental", r))(_e || {});
var et = ((i) => (i.NotDefined = "", i.Hidden = "hidden", i.Integer = "integer", i.Decimal = "decimal", i.Auto = "auto", i))(et || {});
var tt = ((o) => (o.Bar = "bar", o.Circle = "circle", o))(tt || {});
var ne = (_b = class extends a {
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
    __publicField(this, "events", {});
    this.feed(e);
  }
}, __publicField(_b, "lktAllowUndefinedProps", ["circle", "unit", "text"]), __publicField(_b, "lktDefaultValues", ["modelValue", "animation", "type", "duration", "pauseOnHover", "header", "valueFormat", "circle", "unit", "text", "events"]), _b);
var ot = ((l) => (l.Table = "table", l.Item = "item", l.Ul = "ul", l.Ol = "ol", l.Carousel = "carousel", l.Accordion = "accordion", l.Calendar = "calendar", l))(ot || {});
var rt = ((n) => (n[n.Auto = 0] = "Auto", n[n.PreferItem = 1] = "PreferItem", n[n.PreferCustomItem = 2] = "PreferCustomItem", n[n.PreferColumns = 3] = "PreferColumns", n))(rt || {});
var nt = ((o) => (o.NotDefined = "", o.ActionIcon = "action-icon", o))(nt || {});
var at = ((o) => (o.Message = "message", o.Button = "button", o))(at || {});
var it = ((r) => (r.Left = "left", r.Center = "center", r.Right = "right", r))(it || {});
var lt = ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(lt || {});
var st = ((n) => (n.Top = "top", n.Bottom = "bottom", n.Center = "center", n.ReferrerCenter = "referrer-center", n))(st || {});
var ft = ((i) => (i.Left = "left", i.Right = "right", i.Center = "center", i.LeftCorner = "left-corner", i.RightCorner = "right-corner", i))(ft || {});
var ut = ((p) => (p.LktAnchor = "lkt-anchor", p.LktLayoutAccordion = "lkt-layout-accordion", p.LktTextAccordion = "lkt-text-accordion", p.LktLayoutBox = "lkt-layout-box", p.LktTextBox = "lkt-text-box", p.LktLayoutBanner = "lkt-layout-banner", p.LktTextBanner = "lkt-text-banner", p.LktButton = "lkt-button", p.LktLayout = "lkt-layout", p.LktHeader = "lkt-header", p.LktIcon = "lkt-icon", p.LktIcons = "lkt-icons", p.LktImage = "lkt-image", p.LktText = "lkt-text", p))(ut || {});
var me = ((n) => (n.Grid = "grid", n.FlexRow = "flex-row", n.FlexRows = "flex-rows", n.FlexColumn = "flex-column", n))(me || {});
var dt = ((r) => (r.Draft = "draft", r.Public = "public", r.Scheduled = "scheduled", r))(dt || {});
var Ct = ((l) => (l[l.XXS = 1] = "XXS", l[l.XS = 2] = "XS", l[l.SM = 3] = "SM", l[l.MD = 4] = "MD", l[l.LG = 5] = "LG", l[l.XL = 6] = "XL", l[l.XXL = 7] = "XXL", l))(Ct || {});
var xt = ((n) => (n.PrevButton = "prev", n.NextButton = "next", n.DatePicker = "datePicker", n.GoToCurrent = "goToCurrent", n))(xt || {});
var bt = ((l) => (l[l.Sunday = 0] = "Sunday", l[l.Monday = 1] = "Monday", l[l.Tuesday = 2] = "Tuesday", l[l.Wednesday = 3] = "Wednesday", l[l.Thursday = 4] = "Thursday", l[l.Friday = 5] = "Friday", l[l.Saturday = 6] = "Saturday", l))(bt || {});
var ht = ((n) => (n.None = "", n.Focus = "focus", n.Blur = "blur", n.Always = "always", n))(ht || {});
var yt = ((r) => (r.Error = "error", r.Errors = "errors", r.All = "all", r))(yt || {});
var kt = ((o) => (o.Message = "message", o.Inline = "inline", o))(kt || {});
var Lt = ((r) => (r.Auto = "auto", r.Local = "local", r.Remote = "remote", r))(Lt || {});
var Et = ((i) => (i.Refresh = "refresh", i.Close = "close", i.ReOpen = "reOpen", i.Exec = "exec", i.Open = "open", i))(Et || {});
var Bt = ((o) => (o.Asc = "asc", o.Desc = "desc", o))(Bt || {});
var Mt = ((r) => (r.Always = "always", r.Lazy = "lazy", r.Ever = "ever", r))(Mt || {});
var It = ((u) => (u.Create = "create", u.Update = "update", u.Edit = "edit", u.Drop = "drop", u.Sort = "sort", u.SwitchEditMode = "switch-edit-mode", u.InlineEdit = "inline-edit", u.InlineCreate = "inline-create", u.ModalCreate = "modal-create", u.InlineCreateEver = "inline-create-ever", u))(It || {});
var St = ((o) => (o.Lazy = "lazy", o.Ever = "ever", o))(St || {});
var vt = ((o) => (o.Page = "page", o.Element = "element", o))(vt || {});
_c = class {
}, __publicField(_c, "lktAppSize", ref(4)), __publicField(_c, "lktAdminEnabled", ref(true)), __publicField(_c, "lktAppLoading", ref(true)), __publicField(_c, "lktAppReady", ref(false)), __publicField(_c, "lktAppSetup", ref({})), __publicField(_c, "lktMainMenu"), __publicField(_c, "lktBottomBar"), __publicField(_c, "hasMainHeader", true), __publicField(_c, "hasMainMenu", true), __publicField(_c, "hasBottomBar", true), __publicField(_c, "replaceMainMenuButtonWithBack", false), __publicField(_c, "setup"), __publicField(_c, "mainHeader", ref(void 0)), _c;
_d = class {
  static setup(e) {
    e.firstDayOfWeek && (_d.firstDayOfWeek.value = e.firstDayOfWeek), e.days && (_d.days = e.days), e.months && (_d.months = e.months), e.smDays && (_d.smDays = e.smDays), e.smMonths && (_d.smMonths = e.smMonths);
  }
  static getDaysAsOptions() {
    let e = [], o = _d.firstDayOfWeek.value;
    for (let r = o; r < 7; ++r) e.push({ value: r, label: _d.days[r] });
    --o;
    for (let r = o; r >= 0; --r) e.push({ value: r, label: _d.days[r] });
    return e;
  }
}, __publicField(_d, "firstDayOfWeek", ref(0)), __publicField(_d, "days", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]), __publicField(_d, "months", ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]), __publicField(_d, "smDays", ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"]), __publicField(_d, "smMonths", ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), _d;
var At = ((o) => (o.Quick = "quick", o.Full = "full", o))(At || {});
function qa(t) {
  let e = new t(), o = {};
  if (!Array.isArray(t.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of t.lktDefaultValues) r in e && (o[r] = e[r]);
  return o;
}
const getVisiblePercentage = (progress, format) => {
  let r = Number(progress).toFixed(2);
  if (format === et.Auto) {
    if (r.indexOf(".00") > -1) r = r.replace(".00", "");
  } else if (format === et.Integer) {
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
  if (typeof animation.type === "undefined") animation.type = _e.None;
  return animation;
};
const calcProgressAndLimits = (progress, animationConfig) => {
  let _progress = Number(progress);
  if (_progress > 100) _progress = 100;
  if (_progress < 0) _progress = 0;
  let highLimit = 100;
  if (animationConfig.value.type === _e.Incremental) {
    highLimit = _progress;
    _progress = 0;
  }
  let lowerLimit = 0;
  if (animationConfig.value.type === _e.Decremental) {
    lowerLimit = _progress;
    _progress = highLimit;
  }
  if (typeof animationConfig.value.to !== "undefined") {
    if (animationConfig.value.type === _e.Incremental) {
      highLimit = animationConfig.value.to;
    }
    if (animationConfig.value.type === _e.Decremental) {
      lowerLimit = animationConfig.value.to;
    }
  }
  if (typeof animationConfig.value.from !== "undefined") {
    _progress = animationConfig.value.from;
  }
  return [_progress, lowerLimit, highLimit];
};
const doProgressAnimation = (args) => {
  const animationId = ref(null);
  if (args.paused) return animationId;
  if (args.current.value === args.target && !args.animation.externalControl) return animationId;
  if (isNaN(args.target) || isNaN(args.current.value)) return animationId;
  let zero;
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
    let increment = getAnimationDistanceStep(distance, pendingTime);
    if (!isNaN(increment)) {
      if (args.animation.type === _e.Incremental) {
        args.current.value += increment;
        if (args.current.value > args.target) args.current.value = args.target;
      } else if (args.animation.type === _e.Decremental) {
        args.current.value -= increment;
        if (args.current.value < args.target) args.current.value = args.target;
      }
    }
    let keepAnimating = args.current.value !== args.target;
    if (typeof args.events.onAnimatedFrame === "function") args.events.onAnimatedFrame();
    if (keepAnimating) {
      animationId.value = requestAnimationFrame(animate);
    } else {
      doStopProgressAnimation(animationId);
      if (typeof args.events.onAnimationEnd === "function" && args.target === args.current.value && typeof args.animation.to !== "undefined") {
        args.events.onAnimationEnd();
      }
    }
  }
  animationId.value = requestAnimationFrame(animate);
  return animationId;
};
const doStopProgressAnimation = (animationId) => {
  if (animationId == null ? void 0 : animationId.value) {
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
    target: {},
    unit: {},
    size: { default: 120 },
    strokeWidth: { default: 12 },
    borderWidth: { default: 2 },
    duration: { default: 1e3 },
    ballRadius: {},
    direction: { default: "right" },
    valueFormat: {},
    pauseOnHover: { type: Boolean },
    hasHover: { type: Boolean },
    events: {}
  },
  emits: ["progress-updated"],
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a2, _b2, _c2;
    const props = __props;
    const currentProgress = ref(props.progress);
    const emit = __emit;
    const slots = useSlots();
    const size = ref((_a2 = props.size) != null ? _a2 : 120);
    const center = ref(size.value / 2);
    const strokeWidth = ref((_b2 = props.strokeWidth) != null ? _b2 : 12);
    const duration = ref((_c2 = props.duration) != null ? _c2 : 1e3);
    const radius = computed(() => (size.value - strokeWidth.value) / 2);
    const circumference = computed(() => 2 * Math.PI * radius.value);
    const offset = computed(() => circumference.value * (1 - currentProgress.value / 100));
    let animationId = ref(null);
    const paused = ref(false);
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
      paused.value = false;
      animationId = doProgressAnimation({
        duration: duration.value,
        animation: props.animation,
        paused: paused.value,
        current: currentProgress,
        target: props.target,
        events: {
          onAnimatedFrame: () => {
            emit("progress-updated", currentProgress.value);
          },
          onAnimationEnd: props.events.onEnd
        }
      });
    }
    function pauseAnimation() {
      paused.value = true;
      doStopProgressAnimation(animationId);
    }
    const computedDirectionStyles = computed(() => {
      if (props.direction === "left") return `rotate(-180 ${center.value} ${center.value}) scale(-1,1) translate(-${size.value} 0)`;
      return "";
    });
    watch(() => props.progress, (newVal) => {
      pauseAnimation();
      animateProgress();
    }, { immediate: true });
    watch(() => props.duration, (newVal) => {
      duration.value = newVal;
    }, { immediate: true });
    watch(() => props.hasHover, (hasHover) => {
      if (props.pauseOnHover) {
        if (hasHover) {
          pauseAnimation();
        } else if (currentProgress.value !== props.target) {
          paused.value = false;
          animateProgress();
        }
      }
    });
    __expose({
      pause: () => {
        pauseAnimation();
      },
      start: () => {
        animateProgress();
      }
    });
    onMounted(() => {
      if (props.animation.autoplay) {
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
            "stroke-width": strokeWidth.value - 2 * __props.borderWidth
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
            "stroke-width": strokeWidth.value - 2 * __props.borderWidth,
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
            text: __props.text,
            progress: currentProgress.value,
            unit: __props.unit
          })))
        ])) : (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(__props.text), 1))
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
    target: {},
    unit: {},
    duration: { default: 1e3 },
    direction: { default: "right" },
    valueFormat: {},
    pauseOnHover: { type: Boolean },
    hasHover: { type: Boolean },
    events: {}
  },
  emits: ["progress-updated"],
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a2;
    const props = __props;
    const currentProgress = ref(props.progress);
    const duration = ref((_a2 = props.duration) != null ? _a2 : 1e3);
    let animationId = ref(null);
    const paused = ref(false);
    const emit = __emit;
    const slots = useSlots();
    const progressBarStyles = computed(() => {
      let r = [];
      r.push(`transition: all linear ${duration.value}ms`);
      r.push(`width: ${currentProgress.value}%`);
      return r.join(";");
    });
    function animateProgress() {
      paused.value = false;
      animationId = doProgressAnimation({
        duration: duration.value,
        animation: props.animation,
        paused: paused.value,
        current: currentProgress,
        target: props.target,
        events: {
          onAnimatedFrame: () => {
            emit("progress-updated", currentProgress.value);
          },
          onAnimationEnd: props.events.onEnd
        }
      });
    }
    function pauseAnimation() {
      paused.value = true;
      doStopProgressAnimation(animationId);
    }
    watch(() => props.progress, (newVal) => {
      pauseAnimation();
      animateProgress();
    }, { immediate: true });
    watch(() => props.duration, (newVal) => {
      duration.value = newVal;
    }, { immediate: true });
    watch(() => props.hasHover, (hasHover) => {
      if (props.pauseOnHover) {
        if (hasHover) {
          pauseAnimation();
        } else if (currentProgress.value !== props.target) {
          paused.value = false;
          animateProgress();
        }
      }
    });
    __expose({
      pause: () => {
        pauseAnimation();
      },
      start: () => {
        animateProgress();
      }
    });
    onMounted(() => {
      if (props.animation.autoplay) {
        animateProgress();
        console.log(
          "mounted bar: ",
          {
            duration: duration.value,
            animation: props.animation,
            paused: paused.value,
            current: currentProgress.value,
            target: props.target
          }
        );
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", {
            class: "lkt-progress--bar-percentage",
            style: normalizeStyle(progressBarStyles.value),
            role: "progressbar",
            "aria-valuenow": __props.text,
            "aria-valuemin": 0,
            "aria-valuemax": 100
          }, null, 12, _hoisted_3)
        ]),
        unref(slots).text ? (openBlock(), createElementBlock("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps({
            text: __props.text,
            progress: currentProgress.value,
            unit: __props.unit
          })))
        ])) : __props.valueFormat !== "hidden" ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(__props.text), 1)) : createCommentVNode("", true)
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
    circle: {},
    events: {}
  }, qa(ne)),
  emits: [
    "update:modelValue",
    "mouseenter",
    "mouseleave",
    "end"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a2, _b2, _c2, _d2, _e2, _f, _g, _h;
    const emit = __emit;
    const slots = useSlots();
    const props = __props;
    const animationConfig = ref(parseAnimationConfig(props.animation));
    let parsedProgressData = calcProgressAndLimits(props.modelValue, animationConfig);
    const progress = ref(parsedProgressData[0]);
    const progressHigherLimit = ref(parsedProgressData[1]);
    const progressLowerLimit = ref(parsedProgressData[2]);
    const target = computed(() => {
      if (typeof animationConfig.value.to !== "undefined") return animationConfig.value.to;
      if (animationConfig.value.externalControl) {
        if (isNaN(progress.value)) return 100;
        return progress.value;
      }
      return animationConfig.value.type === _e.Incremental ? progressHigherLimit.value : progressLowerLimit.value;
    });
    const hasHover = ref(false);
    const progressRef = ref(null);
    watch(() => props.modelValue, (v) => {
      if (v > 100) v = 100;
      if (v < 0) v = 0;
      progress.value = v;
    });
    watch(progress, (v) => {
      emit("update:modelValue", v);
    });
    const calculatedProgress = ref(progress.value);
    const updateCalculatedProgress = (n) => calculatedProgress.value = n;
    const classes = computed(() => {
      let r = ["lkt-progress--fill-0"];
      if (props.type === tt.Circle) r.push("is-circle");
      if (props.type === tt.Bar) r.push("is-bar");
      const p = props.type === tt.Bar ? progress.value : calculatedProgress.value;
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
    const ballRadius = ref((_e2 = (_d2 = (_c2 = props.circle) == null ? void 0 : _c2.ball) == null ? void 0 : _d2.radius) != null ? _e2 : 50);
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
        ((_a3 = __props.header) == null ? void 0 : _a3.text) || unref(slots).header ? (openBlock(), createBlock(_component_lkt_header, mergeProps({ key: 0 }, __props.header, { class: "lkt-progress--header" }), createSlots({ _: 2 }, [
          unref(slots).header ? {
            name: "text",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "header")
            ]),
            key: "0"
          } : void 0
        ]), 1040)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_1, [
          __props.type === unref(tt).Circle ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
            key: 0,
            ref_key: "progressRef",
            ref: progressRef
          }, {
            progress: progress.value,
            target: target.value,
            unit: __props.unit,
            text: computedVisiblePercentage.value,
            animation: animationConfig.value,
            size: circleWidth.value,
            ballRadius: ballRadius.value,
            strokeWidth: strokeWidth.value,
            duration: __props.duration,
            direction: __props.direction,
            valueFormat: __props.valueFormat,
            pauseOnHover: __props.pauseOnHover,
            hasHover: hasHover.value,
            events: __props.events
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
          ]), 1040)) : __props.type === unref(tt).Bar ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
            key: 1,
            ref_key: "progressRef",
            ref: progressRef
          }, {
            progress: progress.value,
            target: target.value,
            text: computedVisiblePercentage.value,
            unit: __props.unit,
            animation: animationConfig.value,
            size: circleWidth.value,
            ballRadius: ballRadius.value,
            strokeWidth: strokeWidth.value,
            duration: __props.duration,
            direction: __props.direction,
            valueFormat: __props.valueFormat,
            pauseOnHover: __props.pauseOnHover,
            hasHover: hasHover.value,
            events: __props.events
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
