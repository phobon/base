import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      globals: {
        'react': 'React',
        'styled-components': 'Styled Components',
        'styled-system': 'Styled System',
      },
    },
    {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'Base',
      globals: {
        'react': 'React',
        'styled-components': 'Styled Components',
        'styled-system': 'Styled System',
      },
    },
  ],
  external: id => /^react|react-|styled-components|styled-system/.test(id),
  plugins: [
    babel({
      exclude: ['node_modules/**'],
    }),
    typescript({
      exclude: '*.test.ts',
    }),
    resolve(),
    commonjs(),
  ],
};