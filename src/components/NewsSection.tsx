import React from 'react';
import { Newspaper } from 'lucide-react';

const newsItems = [
  {
    title: 'Top 3 AI Tools for Business in 2024',
    source: 'TechCrunch',
    date: '2024-03-15',
    url: '#'
  },
  {
    title: 'The Rise of AI in Creative Industries',
    source: 'Wired',
    date: '2024-03-14',
    url: '#'
  },
  {
    title: 'How AI is Transforming Productivity Tools',
    source: 'Forbes',
    date: '2024-03-13',
    url: '#'
  }
];

export default function NewsSection() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Newspaper className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        <h2 className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Latest AI News</h2>
      </div>
      
      <div className="space-y-4">
        {newsItems.map((item) => (
          <a
            key={item.title}
            href={item.url}
            className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors"
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
            <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{item.source}</span>
              <span className="mx-2">•</span>
              <span>{item.date}</span>
            </div>
          </a>
        ))}
      </div>
      
      <button className="mt-4 w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
        View All News
      </button>
    </div>
  );
}