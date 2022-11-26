<template>
  <div class="">
    <div class="pacman-container" :style="container">
      <div class="pacman-body" :style="pacmanBody"></div>
      <div class="pacman-mouth" :style="pacmanMouth">
        <div class="pacman" :style="pacman"></div>
      </div>
    </div>

    <div class="dot" :style="dot"></div>
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
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
});

const dot = computed(() => {
  return {
    backgroundColor: props.color,
    marginLeft: "0px",
    top: `${props.height / 2.5}px`,
    width: `${props.width / 5}px`,
    height: `${props.height / 5}px`,
    "-moz-border-radius": `${props.height / 3 / 2}px`,
    "-webkit-border-radius": `${props.height / 3 / 2}px`,
    "-o-border-radius": `${props.height / 3 / 2}px`,
    "border-radius": `${props.height / 3 / 2}px`,
  };
});

const pacmanBody = computed(() => {
  return {
    backgroundColor: props.color,
    width: "50px",
    height: "50px",
    "-moz-border-radius": props.height / 2 + "px",
    "-webkit-border-radius": props.height / 2 + "px",
    "-o-border-radius": props.height / 2 + "px",
    "border-radius": (props.height / 2) + "px",
  };
});

const container = computed(() => {
  return {
    width: props.width + "px",
    height: props.height + "px",
  };
});

const pacman = computed(() => {
  return {
    width: `${props.width}px`,
    height: `${props.height}px`,
    "-moz-border-radius": `${props.height / 2}px`,
    "-webkit-border-radius": `${props.height / 2}px`,
    "-o-border-radius": `${props.height / 2}px`,
    "border-radius": `${props.height / 2}px`,
    clip: `rect(0px, ${props.height / 2}px, ${props.width}px, 0)`,
  };
});

const pacmanMouth = computed(() => {
  return {
    left: `${props.height / 60}px`,
    width: `${props.width + 2}px`,
    height: `${props.height + 2}px`,
    "-moz-border-radius": `${props.height / 2}px`,
    "-webkit-border-radius": `${props.height / 2}px`,
    "-o-border-radius": `${props.height / 2}px`,
    "border-radius": `${props.height / 2}px`,
    clip: `rect(0px, ${props.height}px, ${props.width}px, ${(props.height / 2) + 2}px)`,
  };
});
</script>
<script>
export default {
  name: "Pacman2Loader",
};
</script>

<style>
.pacman-container {
  display: block;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  -moz-animation: bite 0.5s linear infinite;
  -webkit-animation: bite 0.5s linear infinite;
  animation: bite 0.5s linear infinite;
}
.pacman-body {
  background-color: #ff0;
  position: absolute;
}
.dot {
  background-color: #318a47;
  position: absolute;
  z-index: 0;
  -moz-animation: movedot 0.5s linear infinite;
  -webkit-animation: movedot 0.5s linear infinite;
  animation: movedot 0.5s linear infinite;
  -moz-animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.pacman {
  position: absolute;
  z-index: 2;
}
.pacman-mouth {
  position: absolute;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  -o-border-radius: 50px;
  border-radius: 50px;
  clip: rect(0px, 100px, 100px, 52px);
}

.pacman-mouth .pacman {
  background-color: #ffffff;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
  -moz-animation: munch 0.5s linear infinite;
  -webkit-animation: munch 0.5s linear infinite;
  animation: munch 0.5s linear infinite;

  /* To fix a yellow border on pacman's mouth */
  border: 10px solid #ffffff;
}

.dot {
  -moz-animation: movedot 1s linear infinite;
  -webkit-animation: movedot 1s linear infinite;
  animation: movedot 1s linear infinite;
  -moz-animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

@-moz-keyframes munch {
  0% {
    -moz-transform: rotate(90deg);
  }
  50% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(90deg);
  }
}
@-webkit-keyframes munch {
  0% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
  }
}
@keyframes munch {
  0% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

@-moz-keyframes bite {
  0% {
    -moz-transform: rotate(45deg);
  }
  50% {
    -moz-transform: rotate(90deg);
  }
  100% {
    -moz-transform: rotate(45deg);
  }
}
@-webkit-keyframes bite {
  0% {
    -webkit-transform: rotate(45deg);
  }
  50% {
    -webkit-transform: rotate(90deg);
  }
  100% {
    -webkit-transform: rotate(45deg);
  }
}
@keyframes bite {
  0% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@-webkit-keyframes movedot {
  0% {
    left: 200px;
  }
  100% {
    left: 50px;
  }
}
@-moz-keyframes movedot {
  0% {
    left: 200px;
  }
  100% {
    left: 50px;
  }
}
@keyframes movedot {
  0% {
    left: 200px;
  }
  100% {
    left: 50px;
  }
}
</style>
