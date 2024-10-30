import React from 'react';
import { Star, ExternalLink, Tag } from 'lucide-react';

interface ToolCardProps {
  name: string;
  description: string;
  rating: number;
  image: string;
  categories: string[];
  pricing: string;
  useCase: string;
  onClick: () => void;
}

export default function ToolCard({
  name,
  description,
  rating,
  image,
  categories,
  pricing,
  useCase,
  onClick
}: ToolCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="aspect-[1.5] relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
          {pricing}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
          <div className="flex items-center bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-yellow-700 dark:text-yellow-400">{rating.toFixed(1)}</span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <span
              key={category}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Best For</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{useCase}</p>
        </div>

        <button
          onClick={onClick}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-4 py-3 font-medium flex items-center justify-center gap-2 transition-all"
        >
          View Details
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}