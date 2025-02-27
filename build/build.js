import { defineComponent, useSlots, ref, watch, computed, onMounted, createElementBlock, openBlock, normalizeClass, createElementVNode, renderSlot, unref, Fragment, createTextVNode, toDisplayString, createCommentVNode, normalizeStyle } from "vue";
const _hoisted_1 = { class: "lkt-progress-header" };
const _hoisted_2 = { class: "lkt-progress-content" };
const _hoisted_3 = { class: "lkt-progress-bar" };
const _hoisted_4 = {
  key: 0,
  class: "lkt-progress-indicator"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktProgress",
  props: {
    modelValue: { default: 0 },
    header: { default: "" },
    palette: { default: "" },
    type: { default: "" },
    valueFormat: { default: "" },
    duration: { default: 1e4 },
    pauseOnHover: { type: Boolean, default: false }
  },
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
    if (props.type === "incremental") {
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
      if (props.type === "decremental" && progress.value > 0) {
        progress.value -= animationStep.value;
      } else if (props.type === "incremental" && progress.value < progressHigherLimit.value) {
        progress.value += animationStep.value;
      } else {
        clearInterval(intervalId);
        isAnimating.value = false;
        emit("end");
      }
    }
    function startProgress() {
      if (props.type === "incremental" || props.type === "decremental") {
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
      if (props.valueFormat === "auto") {
        if (r.indexOf(".00") > -1) r = r.replace(".00", "");
      } else if (props.valueFormat === "integer") {
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
