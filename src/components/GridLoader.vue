<template>
  <div class="v-spinner" v-bind:style="containerStyle" v-show="loading">
    <div
      class="v-grid v-grid1"
      v-bind:style="[spinnerStyle, animationStyle, animationStyle1]"
    ></div>
    <div
      class="v-grid v-grid2"
      v-bind:style="[spinnerStyle, animationStyle, animationStyle2]"
    ></div>
    <div
      class="v-grid v-grid3"
      v-bind:style="[spinnerStyle, animationStyle, animationStyle3]"
    ></div>
    <div
      class="v-grid v-grid4"
      v-bind:style="[spinnerStyle, animationStyle, animationStyle4]"
    ></div>
    <div
      class="v-grid v-grid5"
      v-bind:style="[spinnerStyle, animationStyle, animationStyle5]"
    ></div>
    <div
      class="v-grid v-grid6"
      v-bind:style="[spinnerStyle, animationStyle, animationStyle6]"
    ></div>
    <div
      class="v-grid v-grid7"
      v-bind:style="[spinnerStyle, animationStyle, animationStyle7]"
    ></div>
    <div
      class="v-grid v-grid8"
      v-bind:style="[spinnerStyle, animationStyle, animationStyle8]"
    ></div>
    <div
      class="v-grid v-grid9"
      v-bind:style="[spinnerStyle, animationStyle, animationStyle9]"
    ></div>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
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
});

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
</script>
<script>
export default {
  name: "GridLoader",
};
</script>

<style>
@-webkit-keyframes v-gridStretchDelay {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
}

@keyframes v-gridStretchDelay {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
}
</style>
