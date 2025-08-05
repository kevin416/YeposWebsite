# Yepos Website Blog System Setup Guide

## 概述

这个博客系统为Yepos网站提供了完整的前端博客功能，包括文章列表、文章详情、评论系统、分类和标签等功能。

## 功能特性

### 🎯 核心功能
- **博客文章列表** - 支持分页、搜索、分类和标签筛选
- **文章详情页** - 完整的文章展示，包括点赞、分享功能
- **评论系统** - 支持嵌套评论和回复功能
- **侧边栏** - 搜索、分类、标签、推荐文章
- **首页展示** - 在首页展示最新推荐文章

### 🎨 设计特性
- **响应式设计** - 完美适配桌面、平板和手机
- **动画效果** - 使用Framer Motion提供流畅的动画
- **现代化UI** - 基于Tailwind CSS的现代设计
- **SEO友好** - 优化的URL结构和元数据

## 文件结构

```
app/
├── components/
│   ├── BlogPostCard.tsx      # 博客文章卡片组件
│   ├── BlogSidebar.tsx       # 博客侧边栏组件
│   ├── BlogComments.tsx      # 博客评论组件
│   └── BlogFeatured.tsx      # 首页博客展示组件
├── blog/
│   ├── page.tsx              # 博客列表页面
│   └── [slug]/
│       └── page.tsx          # 博客文章详情页面
├── [lng]/
│   └── page.tsx              # 首页（已集成博客展示）
├── layout.tsx                # 布局文件（已添加博客导航）
├── globals.css               # 全局样式（已添加博客样式）
└── lib/
    └── api.js                # API工具函数（已扩展博客API）
```

## 环境配置

### 必需的环境变量

在 `.env.local` 文件中添加：

```env
# API配置
NEXT_PUBLIC_API_URL=http://your-api-domain.com/api
NEXT_PUBLIC_API_TOKEN=your-api-token
NEXT_PUBLIC_COMPANY_ID=1
```

### 配置说明

- `NEXT_PUBLIC_API_URL`: 后端API的基础URL
- `NEXT_PUBLIC_API_TOKEN`: API认证令牌
- `NEXT_PUBLIC_COMPANY_ID`: 公司ID，用于多租户支持

## API集成

### 后端API要求

博客系统需要以下API端点：

#### 文章相关
- `POST /blog/posts` - 获取文章列表
- `POST /blog/posts/{slug}` - 获取单篇文章
- `POST /blog/posts/featured` - 获取推荐文章
- `POST /blog/posts/popular` - 获取热门文章
- `POST /blog/posts/{id}/like` - 点赞文章

#### 分类相关
- `POST /blog/categories` - 获取分类列表
- `POST /blog/categories/tree` - 获取分类树
- `POST /blog/categories/stats` - 获取分类统计

#### 标签相关
- `POST /blog/tags` - 获取标签列表
- `POST /blog/tags/popular` - 获取热门标签
- `POST /blog/tags/search` - 搜索标签

#### 评论相关
- `POST /blog/comments` - 获取评论列表
- `POST /blog/comments/submit` - 提交评论
- `POST /blog/comments/stats` - 获取评论统计

## 使用方法

### 1. 启动开发服务器

```bash
npm run dev
```

### 2. 访问博客页面

- 博客列表页: `http://localhost:3000/en/blog`
- 文章详情页: `http://localhost:3000/en/blog/{slug}`

### 3. 导航

博客链接已添加到：
- 主导航栏
- 页脚快速链接
- 首页特色展示区域

## 自定义配置

### 修改样式

博客相关的样式在 `app/globals.css` 中定义：

```css
/* 博客卡片样式 */
.line-clamp-2, .line-clamp-3 { /* 文本截断 */ }
.prose { /* 文章内容样式 */ }
```

### 修改组件

主要组件都可以独立修改：

- `BlogPostCard.tsx` - 文章卡片样式和布局
- `BlogSidebar.tsx` - 侧边栏内容和功能
- `BlogComments.tsx` - 评论系统样式和功能
- `BlogFeatured.tsx` - 首页展示样式

### 多语言支持

系统支持多语言，通过 `useParams()` 获取当前语言：

```typescript
const params = useParams();
const lng = params.lng as string;
```

## 性能优化

### 已实现的优化

1. **懒加载** - 使用 `whileInView` 实现组件懒加载
2. **分页** - 文章列表支持分页加载
3. **缓存** - API响应缓存
4. **图片优化** - 响应式图片加载

### 进一步优化建议

1. **图片CDN** - 使用CDN加速图片加载
2. **预加载** - 预加载关键资源
3. **代码分割** - 按路由分割代码
4. **缓存策略** - 实现更复杂的缓存策略

## 故障排除

### 常见问题

1. **API连接失败**
   - 检查 `NEXT_PUBLIC_API_URL` 配置
   - 确认API服务器运行正常

2. **样式不显示**
   - 确认Tailwind CSS正确安装
   - 检查 `globals.css` 是否正确导入

3. **评论不显示**
   - 检查评论API端点
   - 确认评论状态为 'approved'

4. **图片不显示**
   - 检查图片URL是否正确
   - 确认图片服务器可访问

### 调试模式

在开发环境中，API错误会输出到控制台：

```javascript
console.error('API Error:', error.response?.data || error.message);
```

## 部署

### 生产环境配置

1. 更新环境变量为生产环境值
2. 构建项目：`npm run build`
3. 启动生产服务器：`npm start`

### 部署检查清单

- [ ] 环境变量配置正确
- [ ] API端点可访问
- [ ] 图片资源可访问
- [ ] 评论功能正常
- [ ] 搜索功能正常
- [ ] 分页功能正常

## 扩展功能

### 可能的扩展

1. **搜索功能增强** - 全文搜索、搜索建议
2. **用户系统** - 用户注册、登录、个人资料
3. **订阅功能** - 邮件订阅、RSS订阅
4. **社交分享** - 更多社交平台分享
5. **相关文章** - 基于标签和分类的相关文章推荐
6. **阅读进度** - 文章阅读进度条
7. **暗色模式** - 支持暗色主题

### 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 创建Pull Request

## 技术支持

如有问题，请检查：
1. 控制台错误信息
2. 网络请求状态
3. API文档
4. 环境配置

---

**注意**: 确保后端API系统已经正确设置并运行，前端博客系统才能正常工作。 