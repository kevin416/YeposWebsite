import Link from 'next/link';
import { getTranslation } from '../i18n/server';

interface Props {
  params?: Promise<{
    lng: string;
  }>;
}

export default async function NotFound({ params }: Props) {
  const resolvedParams = params || Promise.resolve({ lng: 'zh' });
  const { lng } = await resolvedParams;
  
  const { t } = await getTranslation(lng);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-bold text-gray-800">{t('notFound.title')}</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-6">{t('notFound.subtitle')}</h2>
        <p className="text-gray-600 mb-8">{t('notFound.description')}</p>
        <Link 
          href={`/${lng}`}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          {t('notFound.button')}
        </Link>
      </div>
    </div>
  );
} 