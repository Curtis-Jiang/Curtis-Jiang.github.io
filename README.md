# 个人网页项目

这是一个使用HTML、CSS和JavaScript创建的个人网页项目，可以通过GitHub Pages进行部署。

## 项目结构

- `index.html` - 网页的主要HTML文件
- `styles.css` - 网页的CSS样式文件
- `script.js` - 网页的JavaScript交互文件
- `README.md` - 项目说明文件

## 如何使用GitHub Pages部署

### 方法一：使用主分支（main/master）

1. 创建一个新的GitHub仓库
   - 登录您的GitHub账户
   - 点击右上角的"+"图标，选择"New repository"
   - 输入仓库名称（例如：`username.github.io`，其中`username`是您的GitHub用户名）
   - 选择公开（Public）
   - 点击"Create repository"

2. 将您的代码上传到GitHub仓库
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

3. 启用GitHub Pages
   - 进入您的仓库设置（Settings）
   - 滚动到"GitHub Pages"部分
   - 在"Source"下拉菜单中选择"main"分支
   - 点击"Save"

4. 访问您的网站
   - 您的网站将在几分钟内部署完成
   - 访问地址：`https://username.github.io`

### 方法二：使用gh-pages分支

1. 创建一个新的GitHub仓库（任意名称）

2. 将您的代码上传到GitHub仓库
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

3. 创建并推送gh-pages分支
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```

4. 启用GitHub Pages
   - 进入您的仓库设置（Settings）
   - 滚动到"GitHub Pages"部分
   - 在"Source"下拉菜单中选择"gh-pages"分支
   - 点击"Save"

5. 访问您的网站
   - 您的网站将在几分钟内部署完成
   - 访问地址：`https://username.github.io/repository-name`

## 自定义您的网站

1. 修改`index.html`中的个人信息
2. 更新项目部分以展示您的作品
3. 在联系部分添加您的真实联系方式
4. 根据需要调整`styles.css`中的样式

## 进阶功能

- 添加自定义域名
- 使用Jekyll或其他静态网站生成器
- 添加博客功能
- 集成评论系统

## 许可证

MIT 