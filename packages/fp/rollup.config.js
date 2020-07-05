import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const config = {
    input: 'modules/index.js',
    output: [
        {
            file: pkg.main,
            sourceMaps: true,
            format: 'cjs'
        },
        {
            file: pkg.module,
            sourceMaps: true,
            format: 'esm'
        },
        {
            file: pkg.browser,
            sourceMaps: true,
            format: "umd",
            name: "JuanFP"
        }
    ],
    plugins: [
        resolve(),
        babel({
            exclude: ['node_modules/**'],
            sourceMaps: true
        })
    ]
}

export default config;