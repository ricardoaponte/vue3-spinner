<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-moon v-moon1" v-bind:style="spinnerStyle">
      <div
        class="v-moon v-moon2"
        v-bind:style="[spinnerMoonStyle, animationStyle2]"
      ></div>
      <div
        class="v-moon v-moon3"
        v-bind:style="[spinnerStyle, animationStyle3]"
      ></div>
    </div>
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
});

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
</script>
<script>
export default {
  name: "MoonLoader",
};
</script>

<style>
.v-spinner .v-moon1 {
  -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;
  animation: v-moonStretchDelay 0.6s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  position: relative;
}

.v-spinner .v-moon2 {
  -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;
  animation: v-moonStretchDelay 0.6s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  opacity: 0.8;
  position: absolute;
}

.v-spinner .v-moon3 {
  opacity: 0.1;
}

@-webkit-keyframes v-moonStretchDelay {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes v-moonStretchDelay {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
