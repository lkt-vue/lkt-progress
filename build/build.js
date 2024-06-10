import { defineComponent, useSlots, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, unref, renderSlot, Fragment, createTextVNode, toDisplayString, normalizeStyle } from "vue";
const _hoisted_1 = { class: "lkt-progress-header" };
const _hoisted_2 = { class: "lkt-progress-content" };
const _hoisted_3 = { class: "lkt-progress-bar" };
const _hoisted_4 = { class: "lkt-progress-indicator" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktProgress",
  props: {
    modelValue: { default: 0 },
    header: { default: "" },
    palette: { default: "" }
  },
  setup(__props) {
    const slots = useSlots();
    const props = __props;
    const classes = computed(() => {
      let r = [];
      if (props.palette)
        r.push(`lkt-progress--${props.palette}`);
      if (computedPercentage.value >= 10)
        r.push("lkt-progress--fill-10");
      if (computedPercentage.value >= 20)
        r.push("lkt-progress--fill-20");
      if (computedPercentage.value >= 30)
        r.push("lkt-progress--fill-30");
      if (computedPercentage.value >= 40)
        r.push("lkt-progress--fill-40");
      if (computedPercentage.value >= 50)
        r.push("lkt-progress--fill-50");
      if (computedPercentage.value >= 60)
        r.push("lkt-progress--fill-60");
      if (computedPercentage.value >= 70)
        r.push("lkt-progress--fill-70");
      if (computedPercentage.value >= 80)
        r.push("lkt-progress--fill-80");
      if (computedPercentage.value >= 90)
        r.push("lkt-progress--fill-90");
      if (computedPercentage.value >= 100)
        r.push("lkt-progress--fill-100");
      return r.join(" ");
    }), computedPercentage = computed(() => {
      if (props.modelValue > 100)
        return 100;
      if (props.modelValue < 0)
        return 0;
      return Number(Number(props.modelValue).toFixed(2));
    }), computedVisiblePercentage = computed(() => {
      return Number(props.modelValue).toFixed(2);
    }), progressBarStyles = computed(() => {
      return "width: calc(" + computedPercentage.value + "%)";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["lkt-progress", classes.value])
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
          createElementVNode("div", _hoisted_4, toDisplayString(computedVisiblePercentage.value) + "%", 1)
        ])
      ], 2);
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
