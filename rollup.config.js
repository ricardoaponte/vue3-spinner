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
        file: "./dist/library.mjs",
      },
      {
        format: "cjs",
        file: "./dist/library.js",
      },
    ],
    plugins: [
      vue(),
      peerDepsExternal(),
      nodeResolve(),
      postcss({ extensions: [".css"] }),
    ],
  },
];
