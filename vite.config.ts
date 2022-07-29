import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-unused-modules
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/example-paybotic-storage/' : '/';

  return {
    base,
    build: {
      sourcemap: true,
    },
    envDir: './env',
    plugins: [react(), tsconfigPaths(), svgrPlugin()],
  };
});
