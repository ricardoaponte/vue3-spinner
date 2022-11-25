<template>
  <div
    class="v-spinner"
    v-bind:style="{ position: 'relative', fontSize: 0 }"
    v-show="loading"
  >
    <div class="v-pacman v-pacman1" v-bind:style="spinnerStyle1"></div>
    <div
      class="v-pacman v-pacman2"
      v-bind:style="[spinnerStyle, animationStyle, spinnerDelay2]"
    ></div>
    <div
      class="v-pacman v-pacman3"
      v-bind:style="[spinnerStyle, animationStyle, spinnerDelay3]"
    ></div>
    <div
      class="v-pacman v-pacman4"
      v-bind:style="[spinnerStyle, animationStyle, spinnerDelay4]"
    ></div>
    <div
      class="v-pacman v-pacman5"
      v-bind:style="[spinnerStyle, animationStyle, spinnerDelay5]"
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
</script>
<script>
export default {
  name: "PacmanLoader",
};
</script>

<style>
.v-spinner {
  text-align: center;
}

/*TODO computed transform */
@-webkit-keyframes v-pacmanStretchDelay {
  75% {
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}

@keyframes v-pacmanStretchDelay {
  75% {
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}
</style>
