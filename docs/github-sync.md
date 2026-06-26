# GitHub 同步说明

本地项目已经初始化为 Git 仓库，主分支为 `main`。

当前提交：

- `09be69f Migrate HTML prototype to Vue 3`
- `f7f15f3 Document offline AI roadmap`

拿到 GitHub 空仓库地址后，可执行：

```bash
git remote add origin https://github.com/<owner>/<repo>.git
git push -u origin main
```

如果远端已存在 `origin`，改用：

```bash
git remote set-url origin https://github.com/<owner>/<repo>.git
git push -u origin main
```

推送后 GitHub Actions 会自动运行 `npm test`，即 Vite 生产构建检查。
