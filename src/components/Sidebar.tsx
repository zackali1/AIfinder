import React from 'react';
import { Star, Filter, DollarSign, Briefcase } from 'lucide-react';

interface SidebarProps {
  onCategorySelect: (category: string) => void;
}

const categories = [
  'Chatbots',
  'Design',
  'Writing',
  'Development',
  'Marketing',
  'Productivity',
  'Education',
  'Research',
  'Analytics'
];

const pricing = ['Free', 'Freemium', 'Paid'];
const useCases = ['Personal', 'Business', 'Education', 'Enterprise'];

export default function Sidebar({ onCategorySelect }: SidebarProps) {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      <div className="space-y-6">
        <div className="flex items-center text-gray-900 dark:text-white mb-4">
          <Filter className="h-5 w-5 mr-2" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategorySelect(category)}
                className="w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            Pricing
          </h3>
          <div className="space-y-2">
            {pricing.map((price) => (
              <label key={price} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Minimum Rating</h3>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Star className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>

        {/* Use Case */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <Briefcase className="h-4 w-4 mr-1" />
            Use Case
          </h3>
          <div className="space-y-2">
            {useCases.map((useCase) => (
              <label key={useCase} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{useCase}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}