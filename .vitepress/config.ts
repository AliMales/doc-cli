import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import banner from 'vite-plugin-banner'
import { head } from './head'
import { nav } from './nav'
import { sidebar } from './sidebar'
import pkg from '../package.json'

export default defineConfig({
  appearance: undefined,
  srcDir: 'docs',
  outDir: 'dist',
  lang: 'zh-CN',
  title: '标题',
  description:
    '描述',
  head,
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    // logo: '/logo.svg',
    nav,
    sidebar,
    outline: 'deep',
    outlineTitle: '目录',
    socialLinks: [

    ],
    docFooter: {
      prev: '上一章',
      next: '下一章',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT YOU NAME',
    },
  },
  vite: {
    server: {
      port: 5179,
    },
    plugins: [
      banner({
        content: [
          `/**`,
          ` * name: ${pkg.name}`,
          ` * version: v${pkg.version}`,
          ` * description: ${pkg.description}`,
          ` * author: ${pkg.author}`,
          ` * homepage: ${pkg.homepage}`,
          ` */`,
        ].join('\n'),
        outDir: resolve(__dirname, '../dist'),
        debug: false,
      }),
    ],
  },
})
