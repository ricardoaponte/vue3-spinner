import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        format: "esm",
        file: "./lib/vue3-spinner.mjs",
      },
      {
        format: "cjs",
        file: "./lib/vue3-spinner.js",
      },
    ],
    plugins: [vue(), peerDepsExternal(), nodeResolve(), postcss()],
  },
];
