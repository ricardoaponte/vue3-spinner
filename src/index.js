import * as components from "./components.js";
export const vue3Spinner = {
  install(Vue) {
    for (const prop in components) {
      const component = components[prop];
      Vue.component(component.name, component);
    }
  },
};

export { default as BeatLoader } from "./components/BeatLoader.vue";
export { default as BounceLoader } from "./components/BounceLoader.vue";
export { default as ClipLoader } from "./components/ClipLoader.vue";
export { default as DotLoader } from "./components/DotLoader.vue";
export { default as FadeLoader } from "./components/FadeLoader.vue";
export { default as GridLoader } from "./components/GridLoader.vue";
export { default as MoonLoader } from "./components/MoonLoader.vue";
export { default as PacmanLoader } from "./components/PacmanLoader.vue";
export { default as Pacman2Loader } from "./components/Pacman2Loader.vue";
export { default as PulseLoader } from "./components/PulseLoader.vue";
export { default as RingLoader } from "./components/RingLoader.vue";
export { default as RiseLoader } from "./components/RiseLoader.vue";
export { default as RotateLoader } from "./components/RotateLoader.vue";
export { default as ScaleLoader } from "./components/ScaleLoader.vue";
export { default as SkewLoader } from "./components/SkewLoader.vue";
export { default as SquareLoader } from "./components/SquareLoader.vue";
export { default as SyncLoader } from "./components/SyncLoader.vue";
