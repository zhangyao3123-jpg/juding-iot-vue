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

## 后续离线 AI 方向

建议优先采用轻量的浏览器本地推理方案：

- `Transformers.js`：适合故障文本分类、回访情绪判断、工单紧急程度判断、语义搜索等小模型能力。
- `ONNX Runtime Web`：适合后续部署自有 ONNX 模型，控制加载和推理流程。
- `WebLLM`：适合做高级本地 AI 助手，但模型体积和设备要求更高，建议作为可选能力按需加载。

推荐路线：先做 PWA/IndexedDB 缓存，再接入 Transformers.js 小模型，最后再评估 WebLLM。
