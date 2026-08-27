# 图床迁移指南

本指南帮助你从旧的图床迁移到新的图床服务。

## 📊 当前状态

- 旧图床：`peiyangrobot-doc-1405234710.cos.ap-beijing.myqcloud.com`
- 受影响文件：3 个
- 图片链接总数：64 处

## 🎯 迁移步骤

### 步骤 1：选择新图床方案

#### 方案 A：腾讯云 COS（推荐）

**优点**：
- 延续现有配置，PicGo 无需重新学习
- 国内访问速度快
- 稳定可靠

**成本**：
- 存储：~1 元/GB/月
- 流量：~0.5 元/GB
- 预估：10-20 元/月（根据使用量）

**操作**：
1. 登录 [腾讯云](https://cloud.tencent.com/)
2. 开通对象存储 COS
3. 创建存储桶（建议命名：`pyro-doc-XXXX`）
4. 获取 SecretId 和 SecretKey

#### 方案 B：GitHub 作为图床（免费）

**优点**：
- 完全免费
- 与代码仓库在一起，方便管理
- 可以通过 jsDelivr CDN 加速

**缺点**：
- 单仓库 1GB 限制
- 国内访问可能较慢
- 不适合大量图片

**操作**：
1. 在当前仓库创建 `public/images/` 目录
2. 图片放在这里，通过相对路径引用
3. 或创建独立的图床仓库

#### 方案 C：SM.MS 图床（免费）

**优点**：
- 免费 5GB 存储
- 无需实名认证
- 支持 PicGo

**缺点**：
- 稳定性一般
- 免费版有流量限制

**操作**：
1. 注册 [SM.MS](https://sm.ms/)
2. 获取 API Token
3. 在 PicGo 中配置 SM.MS

---

### 步骤 2：下载旧图床的图片

**在 Windows 上运行**：

```bash
# 方法 1：使用 PowerShell 下载
mkdir .temp_images
cd .temp_images

# 手动从浏览器下载（推荐）
# 打开每个图片链接，右键保存

# 方法 2：使用脚本（需要 Git Bash）
bash ../.scripts/download_old_images.sh
```

**注意**：
- 旧图床可能在队长离开后被关闭，请尽快下载
- 如果无法访问，需要联系旧队长临时开放权限

---

### 步骤 3：配置新图床

#### 如果选择腾讯云 COS：

1. 打开 PicGo 应用
2. 图床设置 → 腾讯云 COS
3. 填写新的配置：
   - 存储桶名：`你的新桶名`
   - 存储区域：`ap-beijing`（或其他区域）
   - SecretId：`你的新 SecretId`
   - SecretKey：`你的新 SecretKey`
   - 存储路径：按文档路径组织（如 `Course/others/`）

4. 在 VSCode 中同步配置：
   - 找到 PicGo 的 `data.json` 文件
   - 确认 VSCode 插件配置指向这个文件

#### 如果选择 GitHub：

1. 在 PicGo 中选择 GitHub 图床
2. 配置：
   - 仓库名：`你的用户名/仓库名`
   - 分支：`main`
   - Token：在 GitHub 生成 Personal Access Token
   - 存储路径：`public/images/`

---

### 步骤 4：上传图片到新图床

#### 方法 A：使用 PicGo 批量上传

1. 打开 PicGo 应用
2. 上传区 → 选择 `.temp_images/` 中的所有图片
3. 批量上传

**注意**：上传时需要保持原有的目录结构！

#### 方法 B：手动按需上传

如果图片不多，可以在编辑文档时重新上传：
1. 打开对应的 markdown 文件
2. 将图片复制到剪贴板
3. 按 `Ctrl+Alt+U` 重新上传

---

### 步骤 5：替换所有图床链接

使用提供的脚本自动替换：

```bash
# 替换链接
node .scripts/replace_image_urls.js "peiyangrobot-doc-1405234710.cos.ap-beijing.myqcloud.com" "你的新域名"

# 例如，新的腾讯云 COS：
node .scripts/replace_image_urls.js "peiyangrobot-doc-1405234710.cos.ap-beijing.myqcloud.com" "pyro-doc-2026.cos.ap-beijing.myqcloud.com"
```

**或者手动替换**：
- 使用 VSCode 全局搜索替换（Ctrl+Shift+H）
- 搜索：`peiyangrobot-doc-1405234710.cos.ap-beijing.myqcloud.com`
- 替换为：`你的新域名`

---

### 步骤 6：验证和测试

1. **启动开发服务器**：
   ```bash
   npm run docs:dev
   ```

2. **检查图片是否正常显示**：
   - Course/others/VSCode_imgbed_cfg.md（12 张图片）
   - Course/front-end/vitepress/markdown.md（3 张图片）
   - Course/front-end/vitepress/clone.md（49 张图片）

3. **检查控制台是否有 404 错误**

---

### 步骤 7：提交更改

```bash
git add .
git commit -m "迁移图床：从旧账号迁移到新的图床服务"
git push
```

---

## 🔧 后续维护

### 更新文档《VSCode图床配置》

在 `Course/others/VSCode_imgbed_cfg.md` 中更新：
1. 新的图床配置信息
2. 新的 SecretId/Key 获取方式（可以脱敏）
3. 新的联系人/管理员信息

### 设置定期清理

创建一个脚本定期检查未使用的图片：

```bash
# 扫描所有 markdown 文件中引用的图片
# 对比图床中的实际文件
# 列出未被引用的图片供清理
```

---

## ⚠️ 注意事项

1. **备份**：在删除旧图床前，确保所有图片都已下载并重新上传
2. **权限**：确保新图床的存储桶设置为**公共读**，否则图片无法访问
3. **成本**：定期检查图床使用量，避免超出预算
4. **文档更新**：更新团队文档，告知所有成员新的图床配置

---

## 🆘 遇到问题？

- **图片下载失败**：旧图床可能已关闭，联系旧队长或从网页缓存中获取
- **新图床上传失败**：检查权限配置和 API Key
- **图片显示 403**：检查存储桶的公共读权限
- **VSCode 插件不工作**：重启 VSCode，检查 data.json 路径

---

## 📞 联系方式

迁移过程中遇到问题，联系：
- 当前负责人：[你的联系方式]
