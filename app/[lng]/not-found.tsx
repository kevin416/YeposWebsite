import Link from 'next/link';

interface Props {
  params: {
    lng: string;
  };
}

export default function NotFound({ params }: Props) {
  const lng = params.lng || 'en';
  
  const texts = {
    en: {
      title: '404',
      subtitle: 'Page Not Found',
      description: 'The page you are looking for doesn\'t exist or has been removed.',
      button: 'Back to Home'
    },
    zh: {
      title: '404',
      subtitle: '页面未找到',
      description: '您访问的页面不存在或已被移除。',
      button: '返回首页'
    }
  };
  
  const content = texts[lng as keyof typeof texts] || texts.en;
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-bold text-gray-800">{content.title}</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-6">{content.subtitle}</h2>
        <p className="text-gray-600 mb-8">{content.description}</p>
        <Link 
          href={`/${lng}`}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          {content.button}
        </Link>
      </div>
    </div>
  );
} 