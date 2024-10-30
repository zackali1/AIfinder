import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ToolCard from './components/ToolCard';
import NewsSection from './components/NewsSection';
import ChatWidget from './components/ChatWidget';

const tools = [
  {
    name: 'ChatGPT',
    description: 'Advanced language model for natural conversations and content generation. Perfect for writing, analysis, and creative tasks.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    categories: ['Chatbot', 'Writing', 'Productivity'],
    pricing: 'Freemium',
    useCase: 'Content creation, coding assistance, and creative writing'
  },
  {
    name: 'Midjourney',
    description: 'Revolutionary AI art generator that creates stunning, high-quality images from text descriptions.',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1686191128892-3e67f2a4b10b?auto=format&fit=crop&q=80&w=800',
    categories: ['Design', 'Art', 'Creative'],
    pricing: 'Paid',
    useCase: 'Digital art, concept design, and visual content creation'
  },
  {
    name: 'GitHub Copilot',
    description: 'AI-powered coding assistant that helps developers write better code faster with smart suggestions.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1687186735445-df877226fae9?auto=format&fit=crop&q=80&w=800',
    categories: ['Development', 'Productivity', 'Coding'],
    pricing: 'Paid',
    useCase: 'Software development, code automation, and programming assistance'
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = selectedCategory
    ? tools.filter(tool => tool.categories.includes(selectedCategory))
    : tools;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover the Perfect AI Tool
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the best AI tools for your needs from our curated collection of cutting-edge solutions.
          </p>
        </div>

        {/* Popular Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular Categories</h2>
          <div className="flex flex-wrap gap-3">
            {['Chatbot', 'Design', 'Writing', 'Development', 'Marketing', 'Productivity'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  category === selectedCategory
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <Sidebar onCategorySelect={setSelectedCategory} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredTools.map((tool) => (
                <ToolCard
                  key={tool.name}
                  {...tool}
                  onClick={() => console.log(`View details for ${tool.name}`)}
                />
              ))}
            </div>

            {/* News Section */}
            <div className="mt-12">
              <NewsSection />
            </div>
          </div>
        </div>
      </main>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;