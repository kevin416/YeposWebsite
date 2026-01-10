"use client";

import { ReactNode } from 'react';

type Props = {
  title: string;
  description: string;
  icon?: ReactNode;
  highlight?: string;
};

export default function FeatureCard({ title, description, icon, highlight }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
          {highlight && <div className="mt-3 inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{highlight}</div>}
        </div>
      </div>
    </div>
  );
}
