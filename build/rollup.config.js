import path from 'path'
import license from 'rollup-plugin-license'

const version = require('../package.json').version
const banner =
`WebGLRipples.js  v${version} / https://github.com/mintymatt/webgl-ripples.js
MIT License
@author mintymatt / https://github.com/mintymatt`

export default {
    entry: path.join(__dirname, '../src/main.js'),
    dest: path.join(__dirname, '../dist/webgl-ripples.js'),
    format: 'umd',
    plugins: [
        license({
            banner
        })
    ]
}
