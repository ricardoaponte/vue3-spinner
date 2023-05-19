import * as components from "./components.js";
export default {
  install(Vue) {
    for (const prop in components) {
      const component = components[prop];
      Vue.component(component.name, component);
    }
  },
};

export * from "./components.js";
