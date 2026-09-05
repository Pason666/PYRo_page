const fs = require('fs');
const path = require('path');

/**
 * 图床迁移脚本 - 替换所有 markdown 文件中的图床链接
 *
 * 使用方法:
 * node .scripts/replace_image_urls.js <旧域名> <新域名>
 *
 * 例如:
 * node .scripts/replace_image_urls.js "peiyangrobot-doc-1405234710.cos.ap-beijing.myqcloud.com" "your-new-bucket.cos.ap-beijing.myqcloud.com"
 */

const oldDomain = process.argv[2];
const newDomain = process.argv[3];

if (!oldDomain || !newDomain) {
  console.error('❌ 请提供旧域名和新域名');
  console.log('使用方法: node replace_image_urls.js <旧域名> <新域名>');
  process.exit(1);
}

// 递归查找所有 markdown 文件
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 跳过 node_modules 等目录
      if (!['node_modules', '.git', '.vitepress/cache', '.temp_images'].includes(file)) {
        findMarkdownFiles(filePath, fileList);
      }
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// 替换文件中的链接
function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const oldContent = content;

  // 替换图床域名
  content = content.replace(new RegExp(oldDomain, 'g'), newDomain);

  if (content !== oldContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

// 主流程
console.log('🔍 开始扫描 markdown 文件...');
const markdownFiles = findMarkdownFiles('.');

console.log(`📝 找到 ${markdownFiles.length} 个 markdown 文件`);
console.log(`🔄 开始替换: ${oldDomain} → ${newDomain}`);

let changedCount = 0;
markdownFiles.forEach(file => {
  if (replaceInFile(file)) {
    changedCount++;
    console.log(`  ✅ ${file}`);
  }
});

console.log(`\n✨ 完成！共修改 ${changedCount} 个文件`);
console.log('⚠️  请务必检查修改后的文件，确认链接正确！');
