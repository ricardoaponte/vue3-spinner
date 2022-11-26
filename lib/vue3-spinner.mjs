import { computed, withDirectives, openBlock, createElementBlock, createElementVNode, normalizeStyle, unref, vShow } from 'vue';

const _hoisted_1$e = { class: "v-spinner" };


const __default__$f = {
  name: "BeatLoader",
};

var script$f = /*#__PURE__*/Object.assign(__default__$f, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$e, [
    createElementVNode("div", {
      class: "v-beat v-beat-odd",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-beat v-beat-even",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-beat v-beat-odd",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$f = "\n.v-spinner .v-beat {\n  -webkit-animation: v-beatStretchDelay 0.7s infinite linear;\n  animation: v-beatStretchDelay 0.7s infinite linear;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  display: inline-block;\n}\n.v-spinner .v-beat-odd {\n  animation-delay: 0s;\n}\n.v-spinner .v-beat-even {\n  animation-delay: 0.35s;\n}\n@-webkit-keyframes v-beatStretchDelay {\n50% {\n    -webkit-transform: scale(0.75);\n    transform: scale(0.75);\n    -webkit-opacity: 0.2;\n    opacity: 0.2;\n}\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n@keyframes v-beatStretchDelay {\n50% {\n    -webkit-transform: scale(0.75);\n    transform: scale(0.75);\n    -webkit-opacity: 0.2;\n    opacity: 0.2;\n}\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n";
styleInject(css_248z$f);

script$f.__file = "src/components/BeatLoader.vue";

const _hoisted_1$d = { class: "v-spinner" };


const __default__$e = {
  name: "BounceLoader",
};

var script$e = /*#__PURE__*/Object.assign(__default__$e, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "60px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    borderRadius: props.radius,
    opacity: 0.6,
    position: "absolute",
    top: 0,
    left: 0,
  };
});

const spinnerBasicStyle = computed(() => {
  return {
    height: props.size,
    width: props.size,
    position: "relative",
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$d, [
    createElementVNode("div", {
      class: "v-bounce v-bounce1",
      style: normalizeStyle(unref(spinnerBasicStyle))
    }, [
      createElementVNode("div", {
        class: "v-bounce v-bounce2",
        style: normalizeStyle(unref(spinnerStyle))
      }, null, 4 /* STYLE */),
      createElementVNode("div", {
        class: "v-bounce v-bounce3",
        style: normalizeStyle(unref(spinnerStyle))
      }, null, 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$e = "\n.v-spinner .v-bounce {\n}\n.v-spinner .v-bounce1 {\n}\n.v-spinner .v-bounce2 {\n  -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;\n  animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.v-spinner .v-bounce3 {\n  -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;\n  animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes v-bounceStretchDelay {\n0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n@keyframes v-bounceStretchDelay {\n0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n";
styleInject(css_248z$e);

script$e.__file = "src/components/BounceLoader.vue";

const _hoisted_1$c = { class: "v-spinner" };

const __default__$d = {
  name: "ClipLoader",
};

var script$d = /*#__PURE__*/Object.assign(__default__$d, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "35px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    height: props.size,
    width: props.size,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: props.color + " " + props.color + " transparent",
    borderRadius: props.radius,
    background: "transparent",
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$c, [
    createElementVNode("div", {
      class: "v-clip",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$d = "\n.v-spinner {\n  /*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n  /*margin: 25px auto;*/\n  text-align: center;\n}\n.v-spinner .v-clip {\n  -webkit-animation: v-clipDelay 0.75s 0s infinite linear;\n  animation: v-clipDelay 0.75s 0s infinite linear;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n\n  display: inline-block;\n}\n@-webkit-keyframes v-clipDelay {\n0% {\n    -webkit-transform: rotate(0deg) scale(1);\n    transform: rotate(0deg) scale(1);\n}\n50% {\n    -webkit-transform: rotate(180deg) scale(0.8);\n    transform: rotate(180deg) scale(0.8);\n}\n100% {\n    -webkit-transform: rotate(360deg) scale(1);\n    transform: rotate(360deg) scale(1);\n}\n}\n@keyframes v-clipDelay {\n0% {\n    -webkit-transform: rotate(0deg) scale(1);\n    transform: rotate(0deg) scale(1);\n}\n50% {\n    -webkit-transform: rotate(180deg) scale(0.8);\n    transform: rotate(180deg) scale(0.8);\n}\n100% {\n    -webkit-transform: rotate(360deg) scale(1);\n    transform: rotate(360deg) scale(1);\n}\n}\n";
styleInject(css_248z$d);

script$d.__file = "src/components/ClipLoader.vue";

const _hoisted_1$b = { class: "v-spinner" };


const __default__$c = {
  name: "DotLoader",
};


var script$c = /*#__PURE__*/Object.assign(__default__$c, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "60px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: parseFloat(props.size) / 2 + "px",
    width: parseFloat(props.size) / 2 + "px",
    borderRadius: props.radius,
  };
});

const spinnerBasicStyle = computed(() => {
  return {
    height: props.size,
    width: props.size,
    position: "relative",
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$b, [
    createElementVNode("div", {
      class: "v-dot v-dot1",
      style: normalizeStyle(unref(spinnerBasicStyle))
    }, [
      createElementVNode("div", {
        class: "v-dot v-dot2",
        style: normalizeStyle(unref(spinnerStyle))
      }, null, 4 /* STYLE */),
      createElementVNode("div", {
        class: "v-dot v-dot3",
        style: normalizeStyle(unref(spinnerStyle))
      }, null, 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$c = "\n.v-spinner .v-dot {\n}\n.v-spinner .v-dot1 {\n  -webkit-animation: v-dotRotate 2s 0s infinite linear;\n  animation: v-dotRotate 2s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n.v-spinner .v-dot2 {\n  -webkit-animation: v-dotBounce 2s 0s infinite linear;\n  animation: v-dotBounce 2s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  position: absolute;\n  top: 0;\n  bottom: auto;\n}\n.v-spinner .v-dot3 {\n  -webkit-animation: v-dotBounce 2s -1s infinite linear;\n  animation: v-dotBounce 2s -1s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  position: absolute;\n  top: auto;\n  bottom: 0;\n}\n@-webkit-keyframes v-dotRotate {\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@keyframes v-dotRotate {\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes v-dotBounce {\n0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n@keyframes v-dotBounce {\n0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n";
styleInject(css_248z$c);

script$c.__file = "src/components/DotLoader.vue";

const _hoisted_1$a = {
  class: "v-spinner",
  style: { position: 'relative', fontSize: 0 }
};


const __default__$b = {
  name: "FadeLoader",
};


var script$b = /*#__PURE__*/Object.assign(__default__$b, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  height: {
    type: String,
    default: "15px",
  },
  width: {
    type: String,
    default: "5px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "20px",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.height,
    width: props.width,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

const ngRadius = computed(() => {
  return "-" + props.radius;
});

const quarter = computed(() => {
  return parseFloat(props.radius) / 2 + parseFloat(props.radius) / 5.5 + "px";
});

const ngQuarter = computed(() => {
  return "-" + quarter.value;
});

const animationStyle1 = computed(() => {
  return {
    top: props.radius,
    left: 0,
    animationDelay: "0.12s",
  };
});

const animationStyle2 = computed(() => {
  return {
    top: quarter.value,
    left: quarter.value,
    animationDelay: "0.24s",
    transform: "rotate(-45deg)",
  };
});

const animationStyle3 = computed(() => {
  return {
    top: 0,
    left: props.radius,
    animationDelay: "0.36s",
    transform: "rotate(90deg)",
  };
});

const animationStyle4 = computed(() => {
  return {
    top: ngQuarter.value,
    left: quarter.value,
    animationDelay: "0.48s",
    transform: "rotate(45deg)",
  };
});

const animationStyle5 = computed(() => {
  return {
    top: ngRadius.value,
    left: 0,
    animationDelay: "0.60s",
  };
});

const animationStyle6 = computed(() => {
  return {
    top: ngQuarter.value,
    left: ngQuarter.value,
    animationDelay: "0.72s",
    transform: "rotate(-45deg)",
  };
});

const animationStyle7 = computed(() => {
  return {
    top: 0,
    left: ngRadius.value,
    animationDelay: "0.84s",
    transform: "rotate(90deg)",
  };
});
const animationStyle8 = computed(() => {
  return {
    top: quarter.value,
    left: ngQuarter.value,
    animationDelay: "0.96s",
    transform: "rotate(45deg)",
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$a, [
    createElementVNode("div", {
      class: "v-fade v-fade1",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle1)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-fade v-fade2",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle2)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-fade v-fade3",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle3)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-fade v-fade4",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle4)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-fade v-fade5",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle5)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-fade v-fade6",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle6)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-fade v-fade7",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle7)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-fade v-fade8",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle8)])
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$b = "\n.v-spinner .v-fade {\n  -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n  animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  position: absolute;\n}\n@-webkit-keyframes v-fadeStretchDelay {\n50% {\n    -webkit-opacity: 0.3;\n    opacity: 0.3;\n}\n100% {\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n@keyframes v-fadeStretchDelay {\n50% {\n    -webkit-opacity: 0.3;\n    opacity: 0.3;\n}\n100% {\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n";
styleInject(css_248z$b);

script$b.__file = "src/components/FadeLoader.vue";

const __default__$a = {
  name: "GridLoader",
};

var script$a = /*#__PURE__*/Object.assign(__default__$a, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    width: props.size,
    height: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

const animationStyle = computed(() => {
  return {
    animationName: "v-gridStretchDelay",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease",
    animationFillMode: "both",
    display: "inline-block",
  };
});

const animationStyle1 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle2 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle3 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle4 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle5 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle6 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle7 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle8 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});
const animationStyle9 = computed(() => {
  return {
    animationDelay: delay(),
    animationDuration: duration(),
  };
});

const containerStyle = computed(() => {
  return {
    width: parseFloat(props.size) * 3 + parseFloat(props.margin) * 6 + "px",
    fontSize: 0,
  };
});

const random = (value) => {
  return Math.random() * value;
};

const delay = () => {
  return random(100) / 100 - 0.2 + "s";
};

const duration = () => {
  return random(100) / 100 + 0.6 + "s";
};

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "v-spinner",
    style: normalizeStyle(unref(containerStyle))
  }, [
    createElementVNode("div", {
      class: "v-grid v-grid1",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(animationStyle1)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-grid v-grid2",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(animationStyle2)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-grid v-grid3",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(animationStyle3)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-grid v-grid4",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(animationStyle4)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-grid v-grid5",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(animationStyle5)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-grid v-grid6",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(animationStyle6)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-grid v-grid7",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(animationStyle7)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-grid v-grid8",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(animationStyle8)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-grid v-grid9",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(animationStyle9)])
    }, null, 4 /* STYLE */)
  ], 4 /* STYLE */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$a = "\n@-webkit-keyframes v-gridStretchDelay {\n0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n50% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n@keyframes v-gridStretchDelay {\n0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n50% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n}\n";
styleInject(css_248z$a);

script$a.__file = "src/components/GridLoader.vue";

const _hoisted_1$9 = { class: "v-spinner" };


const __default__$9 = {
  name: "MoonLoader",
};


var script$9 = /*#__PURE__*/Object.assign(__default__$9, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "60px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    height: props.size,
    width: props.size,
    borderRadius: props.radius,
  };
});

const moonSize = computed(() => {
  return parseFloat(props.size) / 7;
});

const spinnerMoonStyle = computed(() => {
  return {
    height: moonSize.value + "px",
    width: moonSize.value + "px",
    borderRadius: props.radius,
  };
});

const animationStyle2 = computed(() => {
  return {
    top: parseFloat(props.size) / 2 - moonSize.value / 2 + "px",
    backgroundColor: props.color,
  };
});

const animationStyle3 = computed(() => {
  return {
    border: moonSize.value + "px solid " + props.color,
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$9, [
    createElementVNode("div", {
      class: "v-moon v-moon1",
      style: normalizeStyle(unref(spinnerStyle))
    }, [
      createElementVNode("div", {
        class: "v-moon v-moon2",
        style: normalizeStyle([unref(spinnerMoonStyle), unref(animationStyle2)])
      }, null, 4 /* STYLE */),
      createElementVNode("div", {
        class: "v-moon v-moon3",
        style: normalizeStyle([unref(spinnerStyle), unref(animationStyle3)])
      }, null, 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$9 = "\n.v-spinner .v-moon1 {\n  -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;\n  animation: v-moonStretchDelay 0.6s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  position: relative;\n}\n.v-spinner .v-moon2 {\n  -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;\n  animation: v-moonStretchDelay 0.6s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  opacity: 0.8;\n  position: absolute;\n}\n.v-spinner .v-moon3 {\n  opacity: 0.1;\n}\n@-webkit-keyframes v-moonStretchDelay {\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@keyframes v-moonStretchDelay {\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n";
styleInject(css_248z$9);

script$9.__file = "src/components/MoonLoader.vue";

const _hoisted_1$8 = {
  class: "v-spinner",
  style: { position: 'relative', fontSize: 0 }
};


const __default__$8 = {
  name: "PacmanLoader",
};


var script$8 = /*#__PURE__*/Object.assign(__default__$8, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "25px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    width: props.size,
    height: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

const border1 = computed(() => {
  return props.size + " solid transparent";
});

const border2 = computed(() => {
  return props.size + " solid " + props.color;
});

const spinnerStyle1 = computed(() => {
  return {
    width: 0,
    height: 0,
    borderTop: border2.value,
    borderRight: border1.value,
    borderBottom: border2.value,
    borderLeft: border2.value,
    borderRadius: props.size,
  };
});

const animationStyle = computed(() => {
  return {
    width: "10px",
    height: "10px",
    transform: "translate(0, " + -parseFloat(props.size) / 4 + "px)",
    position: "absolute",
    top: "25px",
    left: "100px",
    animationName: "v-pacmanStretchDelay",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationFillMode: "both",
  };
});

const spinnerDelay2 = computed(() => {
  return {
    animationDelay: "0.25s",
  };
});

const spinnerDelay3 = computed(() => {
  return {
    animationDelay: "0.5s",
  };
});

const spinnerDelay4 = computed(() => {
  return {
    animationDelay: "0.75s",
  };
});

const spinnerDelay5 = computed(() => {
  return {
    animationDelay: "1s",
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$8, [
    createElementVNode("div", {
      class: "v-pacman v-pacman1",
      style: normalizeStyle(unref(spinnerStyle1))
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-pacman v-pacman2",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(spinnerDelay2)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-pacman v-pacman3",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(spinnerDelay3)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-pacman v-pacman4",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(spinnerDelay4)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-pacman v-pacman5",
      style: normalizeStyle([unref(spinnerStyle), unref(animationStyle), unref(spinnerDelay5)])
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$8 = "\n.v-spinner {\n  text-align: center;\n}\n\n/*TODO computed transform */\n@-webkit-keyframes v-pacmanStretchDelay {\n75% {\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n100% {\n    -webkit-transform: translate(-100px, -6.25px);\n    transform: translate(-100px, -6.25px);\n}\n}\n@keyframes v-pacmanStretchDelay {\n75% {\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n100% {\n    -webkit-transform: translate(-100px, -6.25px);\n    transform: translate(-100px, -6.25px);\n}\n}\n";
styleInject(css_248z$8);

script$8.__file = "src/components/PacmanLoader.vue";

const _hoisted_1$7 = { class: "v-spinner" };


const __default__$7 = {
  name: "PulseLoader",
};


var script$7 = /*#__PURE__*/Object.assign(__default__$7, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    width: props.size,
    height: props.size,
    margin: props.margin,
    borderRadius: props.radius,
    display: "inline-block",
    animationName: "v-pulseStretchDelay",
    animationDuration: "0.75s",
    animationIterationCount: "infinite",
    animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
    animationFillMode: "both",
  };
});

const spinnerDelay1 = computed(() => {
  return {
    animationDelay: "0.12s",
  };
});

const spinnerDelay2 = computed(() => {
  return {
    animationDelay: "0.24s",
  };
});

const spinnerDelay3 = computed(() => {
  return {
    animationDelay: "0.36s",
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$7, [
    createElementVNode("div", {
      class: "v-pulse v-pulse1",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay1)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-pulse v-pulse2",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay2)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-pulse v-pulse3",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay3)])
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$7 = "\n/*.v-spinner\n{\n    margin: 100px auto;\n    text-align: center;\n}\n*/\n@-webkit-keyframes v-pulseStretchDelay {\n0%,\n  80% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n45% {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n}\n@keyframes v-pulseStretchDelay {\n0%,\n  80% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n45% {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n}\n";
styleInject(css_248z$7);

script$7.__file = "src/components/PulseLoader.vue";

const _hoisted_1$6 = { class: "v-spinner" };


const __default__$6 = {
  name: "RingLoader",
};


var script$6 = /*#__PURE__*/Object.assign(__default__$6, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "60px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    height: props.size,
    width: props.size,
    border: parseFloat(props.size) / 10 + "px solid" + props.color,
    opacity: 0.4,
    borderRadius: props.radius,
  };
});

const spinnerBasicStyle = computed(() => {
  return {
    height: props.size,
    width: props.size,
    position: "relative",
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$6, [
    createElementVNode("div", {
      class: "v-ring v-ring1",
      style: normalizeStyle(unref(spinnerBasicStyle))
    }, [
      createElementVNode("div", {
        class: "v-ring v-ring2",
        style: normalizeStyle(unref(spinnerStyle))
      }, null, 4 /* STYLE */),
      createElementVNode("div", {
        class: "v-ring v-ring3",
        style: normalizeStyle(unref(spinnerStyle))
      }, null, 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$6 = "\n.v-spinner .v-ring {\n}\n.v-spinner .v-ring1 {\n}\n.v-spinner .v-ring2 {\n  -webkit-animation: v-ringRightRotate 2s 0s infinite linear;\n  animation: v-ringRightRotate 2s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  perspective: 800px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.v-spinner .v-ring3 {\n  -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;\n  animation: v-ringLeftRotate 2s 0s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  perspective: 800px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n@-webkit-keyframes v-ringRightRotate {\n0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100% {\n    -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n    transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n}\n}\n@keyframes v-ringRightRotate {\n0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100% {\n    -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n    transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n}\n}\n@-webkit-keyframes v-ringLeftRotate {\n0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100% {\n    -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n}\n}\n@keyframes v-ringLeftRotate {\n0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100% {\n    -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n}\n}\n";
styleInject(css_248z$6);

script$6.__file = "src/components/RingLoader.vue";

const _hoisted_1$5 = { class: "v-spinner" };


const __default__$5 = {
  name: "RiseLoader",
};


var script$5 = /*#__PURE__*/Object.assign(__default__$5, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$5, [
    createElementVNode("div", {
      class: "v-rise v-rise-odd",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-rise v-rise-even",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-rise v-rise-odd",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-rise v-rise-even",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-rise v-rise-odd",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$5 = "\n.v-spinner {\n  /*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n  /*margin: 25px auto;*/\n  text-align: center;\n}\n.v-spinner .v-rise-odd {\n  -webkit-animation: v-riseOddDelay 1s 0s infinite\n    cubic-bezier(0.15, 0.46, 0.9, 0.6);\n  animation: v-riseOddDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n\n  display: inline-block;\n}\n.v-spinner .v-rise-even {\n  -webkit-animation: v-riseEvenDelay 1s 0s infinite\n    cubic-bezier(0.15, 0.46, 0.9, 0.6);\n  animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n\n  display: inline-block;\n}\n@-webkit-keyframes v-riseOddDelay {\n0% {\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4);\n}\n25% {\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n}\n50% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n75% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n}\n100% {\n    -webkit-transform: translateY(0) scale(0.75);\n    transform: translateY(0) scale(0.75);\n}\n}\n@keyframes v-riseOddDelay {\n0% {\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4);\n}\n25% {\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n}\n50% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n75% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n}\n100% {\n    -webkit-transform: translateY(0) scale(0.75);\n    transform: translateY(0) scale(0.75);\n}\n}\n@-webkit-keyframes v-riseEvenDelay {\n0% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n25% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n}\n50% {\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4);\n}\n75% {\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n}\n100% {\n    -webkit-transform: translateY(0) scale(1);\n    transform: translateY(0) scale(1);\n}\n}\n@keyframes v-riseEvenDelay {\n0% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n25% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n}\n50% {\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4);\n}\n75% {\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n}\n100% {\n    -webkit-transform: translateY(0) scale(1);\n    transform: translateY(0) scale(1);\n}\n}\n";
styleInject(css_248z$5);

script$5.__file = "src/components/RiseLoader.vue";

const _hoisted_1$4 = { class: "v-spinner" };


const __default__$4 = {
  name: "RotateLoader",
};


var script$4 = /*#__PURE__*/Object.assign(__default__$4, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    margin: props.margin,
    borderRadius: props.radius,
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", {
      class: "v-rotate v-rotate1",
      style: normalizeStyle(unref(spinnerStyle))
    }, [
      createElementVNode("div", {
        class: "v-rotate v-rotate2",
        style: normalizeStyle(unref(spinnerStyle))
      }, null, 4 /* STYLE */),
      createElementVNode("div", {
        class: "v-rotate v-rotate3",
        style: normalizeStyle(unref(spinnerStyle))
      }, null, 4 /* STYLE */)
    ], 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$4 = "\n.v-spinner .v-rotate1 {\n  -webkit-animation: v-rotateStretchDelay 1s 0s infinite\n    cubic-bezier(0.7, -0.13, 0.22, 0.86);\n  animation: v-rotateStretchDelay 1s 0s infinite\n    cubic-bezier(0.7, -0.13, 0.22, 0.86);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  display: inline-block;\n  position: relative;\n}\n.v-spinner .v-rotate2 {\n  opacity: 0.8;\n  position: absolute;\n  top: 0;\n  left: -28px;\n}\n.v-spinner .v-rotate3 {\n  opacity: 0.8;\n  position: absolute;\n  top: 0;\n  left: 25px;\n}\n@-webkit-keyframes v-rotateStretchDelay {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n@keyframes v-rotateStretchDelay {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n";
styleInject(css_248z$4);

script$4.__file = "src/components/RotateLoader.vue";

const _hoisted_1$3 = { class: "v-spinner" };


const __default__$3 = {
  name: "ScaleLoader",
};


var script$3 = /*#__PURE__*/Object.assign(__default__$3, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  height: {
    type: String,
    default: "35px",
  },
  width: {
    type: String,
    default: "4px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "2px",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.height,
    width: props.width,
    margin: props.margin,
    borderRadius: props.radius,
    display: "inline-block",
    animationName: "v-scaleStretchDelay",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
    animationFillMode: "both",
    // TODO
    // animation: ['sk-waveStretchDelay', '1s', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' '),
    // animationFillMode: "both"
  };
});

const spinnerDelay1 = computed(() => {
  return {
    animationDelay: "0.1s",
  };
});

const spinnerDelay2 = computed(() => {
  return {
    animationDelay: "0.2s",
  };
});

const spinnerDelay3 = computed(() => {
  return {
    animationDelay: "0.3s",
  };
});

const spinnerDelay4 = computed(() => {
  return {
    animationDelay: "0.4s",
  };
});

const spinnerDelay5 = computed(() => {
  return {
    animationDelay: "0.5s",
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", {
      class: "v-scale v-scale1",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay1)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-scale v-scale2",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay2)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-scale v-scale3",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay3)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-scale v-scale4",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay4)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-scale v-scale5",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay5)])
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$3 = "\n.v-spinner {\n  /*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n  /*margin: 25px auto;*/\n  text-align: center;\n}\n@-webkit-keyframes v-scaleStretchDelay {\n0% {\n    -webkit-animation-name: inherit;\n    -webkit-animation-duration: inherit;\n    -webkit-animation-iteration-count: inherit;\n    -webkit-animation-direction: inherit;\n}\n50% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4);\n}\n100% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n}\n}\n@keyframes v-scaleStretchDelay {\n0% {\n    -webkit-animation-name: inherit;\n    -webkit-animation-duration: inherit;\n    -webkit-animation-iteration-count: inherit;\n    -webkit-animation-direction: inherit;\n}\n50% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4);\n}\n100% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n}\n}\n";
styleInject(css_248z$3);

script$3.__file = "src/components/ScaleLoader.vue";

const _hoisted_1$2 = { class: "v-spinner" };


const __default__$2 = {
  name: "SkewLoader",
};


var script$2 = /*#__PURE__*/Object.assign(__default__$2, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "20px",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    height: 0,
    width: 0,
    borderLeft: props.size + " solid transparent",
    borderRight: props.size + " solid transparent",
    borderBottom: props.size + " solid " + props.color,
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("div", {
      class: "v-skew",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$2 = "\n.v-spinner {\n  text-align: center;\n}\n.v-spinner .v-skew {\n  -webkit-animation: v-skewDelay 3s 0s infinite\n    cubic-bezier(0.09, 0.57, 0.49, 0.9);\n  animation: v-skewDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  display: inline-block;\n}\n@-webkit-keyframes v-skewDelay {\n25% {\n    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);\n    transform: perspective(100px) rotateX(180deg) rotateY(0);\n}\n50% {\n    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n}\n75% {\n    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);\n    transform: perspective(100px) rotateX(0) rotateY(180deg);\n}\n100% {\n    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);\n    transform: perspective(100px) rotateX(0) rotateY(0);\n}\n}\n@keyframes v-skewDelay {\n25% {\n    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);\n    transform: perspective(100px) rotateX(180deg) rotateY(0);\n}\n50% {\n    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n}\n75% {\n    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);\n    transform: perspective(100px) rotateX(0) rotateY(180deg);\n}\n100% {\n    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);\n    transform: perspective(100px) rotateX(0) rotateY(0);\n}\n}\n";
styleInject(css_248z$2);

script$2.__file = "src/components/SkewLoader.vue";

const _hoisted_1$1 = { class: "v-spinner" };


const __default__$1 = {
  name: "SquareLoader",
};


var script$1 = /*#__PURE__*/Object.assign(__default__$1, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "50px",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("div", {
      class: "v-square",
      style: normalizeStyle(unref(spinnerStyle))
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z$1 = "\n.v-spinner {\n  text-align: center;\n}\n.v-spinner .v-square {\n  -webkit-animation: v-squareDelay 3s 0s infinite\n    cubic-bezier(0.09, 0.57, 0.49, 0.9);\n  animation: v-squareDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  perspective: 100px;\n  display: inline-block;\n}\n@-webkit-keyframes v-squareDelay {\n25% {\n    -webkit-transform: rotateX(180deg) rotateY(0);\n    transform: rotateX(180deg) rotateY(0);\n}\n50% {\n    -webkit-transform: rotateX(180deg) rotateY(180deg);\n    transform: rotateX(180deg) rotateY(180deg);\n}\n75% {\n    -webkit-transform: rotateX(0) rotateY(180deg);\n    transform: rotateX(0) rotateY(180deg);\n}\n100% {\n    -webkit-transform: rotateX(0) rotateY(0);\n    transform: rotateX(0) rotateY(0);\n}\n}\n@keyframes v-squareDelay {\n25% {\n    -webkit-transform: rotateX(180deg) rotateY(0);\n    transform: rotateX(180deg) rotateY(0);\n}\n50% {\n    -webkit-transform: rotateX(180deg) rotateY(180deg);\n    transform: rotateX(180deg) rotateY(180deg);\n}\n75% {\n    -webkit-transform: rotateX(0) rotateY(180deg);\n    transform: rotateX(0) rotateY(180deg);\n}\n100% {\n    -webkit-transform: rotateX(0) rotateY(0);\n    transform: rotateX(0) rotateY(0);\n}\n}\n";
styleInject(css_248z$1);

script$1.__file = "src/components/SquareLoader.vue";

const _hoisted_1 = { class: "v-spinner" };


const __default__ = {
  name: "SyncLoader",
};


var script = /*#__PURE__*/Object.assign(__default__, {
  props: {
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "#5dc596",
  },
  size: {
    type: String,
    default: "15px",
  },
  margin: {
    type: String,
    default: "2px",
  },
  radius: {
    type: String,
    default: "100%",
  },
},
  setup(__props) {

const props = __props;



const spinnerStyle = computed(() => {
  return {
    backgroundColor: props.color,
    height: props.size,
    width: props.size,
    margin: props.margin,
    borderRadius: props.radius,
    display: "inline-block",
    animationName: "v-syncStretchDelay",
    animationDuration: "0.6s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "both",
  };
});

const spinnerDelay1 = computed(() => {
  return {
    animationDelay: "0.07s",
  };
});

const spinnerDelay2 = computed(() => {
  return {
    animationDelay: "0.14s",
  };
});

const spinnerDelay3 = computed(() => {
  return {
    animationDelay: "0.21s",
  };
});

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: "v-sync v-sync1",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay1)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-sync v-sync2",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay2)])
    }, null, 4 /* STYLE */),
    createElementVNode("div", {
      class: "v-sync v-sync3",
      style: normalizeStyle([unref(spinnerStyle), unref(spinnerDelay3)])
    }, null, 4 /* STYLE */)
  ], 512 /* NEED_PATCH */)), [
    [vShow, __props.loading]
  ])
}
}

});

var css_248z = "\n@-webkit-keyframes v-syncStretchDelay {\n33% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n}\n66% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px);\n}\n100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n}\n}\n@keyframes v-syncStretchDelay {\n33% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n}\n66% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px);\n}\n100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n}\n}\n";
styleInject(css_248z);

script.__file = "src/components/SyncLoader.vue";

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BeatLoader: script$f,
  BounceLoader: script$e,
  ClipLoader: script$d,
  DotLoader: script$c,
  FadeLoader: script$b,
  GridLoader: script$a,
  MoonLoader: script$9,
  PacmanLoader: script$8,
  PulseLoader: script$7,
  RingLoader: script$6,
  RiseLoader: script$5,
  RotateLoader: script$4,
  ScaleLoader: script$3,
  SkewLoader: script$2,
  SquareLoader: script$1,
  SyncLoader: script
});

const plugin = {
  install(Vue) {
    for (const prop in components) {
      const component = components[prop];
      Vue.component(component.name, component);
    }
  },
};

export { plugin as default };
