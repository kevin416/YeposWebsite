import { Suspense } from 'react';
import BlogContent from './BlogContent';

// 禁用静态生成，使用动态渲染
export const dynamic = 'force-dynamic';

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
} 