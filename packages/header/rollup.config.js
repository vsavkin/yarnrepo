import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-postcss';

export default {
    input: "./index.tsx",
    output: {
        format: "cjs",
        file: "../../dist/packages/header/index.js",
        name: "Header"
    },
    plugins: [
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        babel({
            babelHelpers: 'bundled', exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        css()
    ],
    external: ["react"]
}
