// 为静态导出生成路由参数
export function generateStaticParams() {
  return [
    { lng: 'en' },
    { lng: 'zh' }
  ];
} 