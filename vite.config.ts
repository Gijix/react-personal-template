import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    Pages({
      dirs: ['src/pages']
    }),
    AutoImport({
      dirs: ['src/components', 'src/types'],
      include: [/\.[tj]sx?$/],
      defaultExportByFilename: true, 
      imports: [
        'react'
      ],
      dts: './src/auto-imports.d.ts'
    })
],
})
