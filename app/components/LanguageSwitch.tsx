'use client';

import { usePathname, useRouter } from 'next/navigation';
import { languages } from '../i18n/settings';
import { GB, CN } from 'country-flag-icons/react/3x2';

const languageNames = {
  en: {
    name: 'English',
    flag: GB,
    label: 'English'
  },
  zh: {
    name: '中文',
    flag: CN,
    label: '中文'
  }
};

export default function LanguageSwitch() {
  const pathname = usePathname() || '';
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    // Get the current path segments
    const segments = pathname.split('/');
    // Replace the language segment (or add it if it doesn't exist)
    segments[1] = newLocale;
    // Join the segments back together
    const newPath = segments.join('/');
    // Navigate to the new path
    router.push(newPath);
  };

  // Extract current language from pathname with safety checks
  const currentLang = pathname ? pathname.split('/')[1] || 'en' : 'en';
  
  // Add safety check to ensure currentLang exists in languageNames
  const langKey = Object.keys(languageNames).includes(currentLang) ? 
    currentLang : 
    'en';
  
  // Add safety check to ensure languageNames[langKey] exists before accessing .flag
  const langData = languageNames[langKey as keyof typeof languageNames] || languageNames.en;
  const Flag = langData.flag;

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {Flag && <Flag className="w-5 h-5 rounded-sm" />}
          <span>{langData.name}</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 ${
                  langKey === lang ? 'bg-gray-50 text-blue-600' : 'text-gray-700'
                }`}
                role="menuitem"
              >
                {lang === 'en' ? (
                  <GB className="w-5 h-5 rounded-sm" />
                ) : (
                  <CN className="w-5 h-5 rounded-sm" />
                )}
                {languageNames[lang as keyof typeof languageNames].label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}