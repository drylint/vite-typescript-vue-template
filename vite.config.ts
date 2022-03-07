import { join } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginCompression from 'vite-plugin-compression'
// import vitePluginImagemin from 'vite-plugin-imagemin'
import vitePluginLegacy from '@vitejs/plugin-legacy'
import getApps from './config/getApp'
// import { createStyleImportPlugin, VantResolve as vantResolve } from 'vite-plugin-style-import'

// 访问绝对路径
const pathJoin = (dir: string): string => join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  process.env = { ...process.env, ...loadEnv(mode, __dirname) }
  const { VITE_APP_RUN_APPS, VITE_APP_BASE_URL } = process.env
  const IS_PROD = mode === 'production'
  console.log(`当前运行模式: ${mode}`)

  return {
    // 指定项目根目录，默认为 process.cwd()
    root: pathJoin('src/apps'),
    // 指定 public 所在位置，若是相对路径，则默认相对于 root 值
    publicDir: pathJoin('public'),
    // 指定 env 文件所在位置
    envDir: process.cwd(),
    // 指定公共基础路径
    base: './',
    build: {
      // 编译目标，默认为 modules (支持 ES Module 的浏览器)
      target: 'es2015', // 'modules' | 'es2015' | ...
      // 指定打包输出目录，相对于 root 值
      outDir: pathJoin('dist'),
      minify: 'esbuild', // boolean | 'terser' | 'esbuild'(默认)
      // 清空输出目录
      emptyOutDir: true,
      // 指定打包静态资源输出目录名称，相对于 build.outDir 值
      assetsDir: 'assets',
      // 是否启用 gzip 报告
      reportCompressedSize: true,
      // 是否生成 sourcemap
      sourcemap: false,
      rollupOptions: {
        input: getApps(pathJoin('src/apps'), VITE_APP_RUN_APPS),
      },
    },
    esbuild: {
      pure: IS_PROD
        ? [
          // 'console.log',
          'debugger',
        ]
        : [],
    },
    plugins: [
      vue(),
      {
        apply: 'build',
        // enforce: 'post',
        ...vitePluginCompression({
          threshold: 4096,
        }),
      },
      vitePluginLegacy({
        // targets: ['chrome > 62'],
        polyfills: true,
        modernPolyfills: true,
      }),
    ],
    resolve: {
      alias: {
        '@': pathJoin('src'),
        '@TEMP': pathJoin('src/apps/TEMP'),
        '@index': pathJoin('src/apps/index'),
        '@admin': pathJoin('src/apps/admin'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '',
        },
      },
    },
    server: {
      host: true,
      port: 8080,
      proxy: {
        '^/api': {
          target: VITE_APP_BASE_URL,
          changeOrigin: true,
        },
      },
    },
  }
})
