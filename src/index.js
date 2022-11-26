import * as components from "./components.js";
export const vue3Spinner = {
  install(Vue) {
    for (const prop in components) {
      const component = components[prop];
      Vue.component(component.name, component);
    }
  },
};

export * from "./components.js";
