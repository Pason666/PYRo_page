#!/bin/bash
# 图床迁移脚本 - 第一步：下载旧图床的所有图片

# 创建临时目录
mkdir -p .temp_images

# 从 markdown 文件中提取所有图床链接
echo "正在提取图片链接..."
grep -roh "https://peiyangrobot-doc-[^)]*" **/*.md > .temp_images/image_urls.txt

# 下载所有图片
echo "开始下载图片..."
cd .temp_images
while IFS= read -r url; do
  # 提取文件名
  filename=$(basename "$url")
  echo "下载: $filename"
  curl -L -o "$filename" "$url"
done < image_urls.txt

echo "下载完成！图片保存在 .temp_images/ 目录"
echo "总共下载: $(ls -1 | wc -l) 张图片"
