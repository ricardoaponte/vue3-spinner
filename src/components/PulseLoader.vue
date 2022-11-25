<template>
  <div class="v-spinner" v-show="loading">
    <div
      class="v-pulse v-pulse1"
      v-bind:style="[spinnerStyle, spinnerDelay1]"
    ></div>
    <div
      class="v-pulse v-pulse2"
      v-bind:style="[spinnerStyle, spinnerDelay2]"
    ></div>
    <div
      class="v-pulse v-pulse3"
      v-bind:style="[spinnerStyle, spinnerDelay3]"
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
</script>
<script>
export default {
  name: "PulseLoader",
};
</script>

<style>
/*.v-spinner
{
    margin: 100px auto;
    text-align: center;
}
*/

@-webkit-keyframes v-pulseStretchDelay {
  0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
}

@keyframes v-pulseStretchDelay {
  0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
}
</style>
