# 久鼎物联网售后管理系统 Vue3 版

这是从原 HTML5 静态原型迁移来的 Vue3 前端项目，使用 Vite、Vue Router 和 pnpm。

## 开发

```bash
corepack pnpm install
corepack pnpm dev
```

## 验证

```bash
npm test
```

当前阶段保留了原型页面作为 `legacy-pages` 迁移源，并通过 Vue Router 统一接入。后续可按页面逐步拆成纯 Vue 组件和数据驱动组件。
