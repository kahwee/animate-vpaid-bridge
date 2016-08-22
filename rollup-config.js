import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  plugins: [ babel() ],
  moduleName: 'animate-vpaid-bridge',
  targets: [
    {
      dest: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      dest: 'dist/bundle.umd.js',
      format: 'umd'
    },
    {
      dest: 'dist/bundle.es.js',
      format: 'es'
    }

  ],
  format: 'umd'
}
