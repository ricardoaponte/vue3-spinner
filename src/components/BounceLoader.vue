<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-bounce v-bounce1" v-bind:style="spinnerBasicStyle">
      <div class="v-bounce v-bounce2" v-bind:style="spinnerStyle"></div>
      <div class="v-bounce v-bounce3" v-bind:style="spinnerStyle"></div>
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
</script>
<script>
export default {
  name: "BounceLoader",
};
</script>

<style>
.v-spinner .v-bounce {
}

.v-spinner .v-bounce1 {
}

.v-spinner .v-bounce2 {
  -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
  animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.v-spinner .v-bounce3 {
  -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
  animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes v-bounceStretchDelay {
  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes v-bounceStretchDelay {
  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
