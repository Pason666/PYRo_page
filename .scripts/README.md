# 图床管理脚本

此目录包含图床迁移和管理的辅助脚本。

## 📁 文件说明

### IMAGE_MIGRATION_GUIDE.md
完整的图床迁移指南，包括：
- 新图床方案选择
- 迁移步骤详解
- 常见问题解决

### download_old_images.sh
下载旧图床所有图片的脚本。

**使用方法**：
```bash
bash .scripts/download_old_images.sh
```

### replace_image_urls.js
批量替换 markdown 文件中的图床链接。

**使用方法**：
```bash
node .scripts/replace_image_urls.js "旧域名" "新域名"
```

**示例**：
```bash
node .scripts/replace_image_urls.js \
  "peiyangrobot-doc-1405234710.cos.ap-beijing.myqcloud.com" \
  "your-new-bucket.cos.ap-beijing.myqcloud.com"
```

## 🚀 快速开始

1. 阅读 `IMAGE_MIGRATION_GUIDE.md` 选择图床方案
2. 配置新图床
3. 运行脚本迁移
