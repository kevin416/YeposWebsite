"use client";

import Link from 'next/link';

type Props = {
  title: string;
  excerpt: string;
  image?: string;
  href?: string;
};

export default function CaseCard({ title, excerpt, image, href = '#' }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
      <div className="h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : <div className="text-gray-400">图片占位</div>}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
      <div className="mt-4">
        <Link href={href} className="text-blue-600 text-sm font-medium">查看详情 →</Link>
      </div>
    </article>
  );
}
