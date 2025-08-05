'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTags, FaFolder, FaFire, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { getBlogCategories, getPopularTags, getFeaturedPosts } from '@/lib/api';

interface BlogSidebarProps {
  selectedCategory?: number;
  selectedTag?: number;
  onCategoryChange?: (categoryId: number | null) => void;
  onTagChange?: (tagId: number | null) => void;
  onSearch?: (query: string) => void;
}

const BlogSidebar = ({ 
  selectedCategory, 
  selectedTag, 
  onCategoryChange, 
  onTagChange, 
  onSearch 
}: BlogSidebarProps) => {
  const companyId = process.env.NEXT_PUBLIC_COMPANY_ID || '1';

  const [categories, setCategories] = useState([]);
  const [popularTags, setPopularTags] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        const [categoriesData, tagsData, postsData] = await Promise.all([
          getBlogCategories({ company_id: companyId, active: true }),
          getPopularTags(companyId, 15),
          getFeaturedPosts(companyId, 3)
        ]);

        setCategories(categoriesData.data || []);
        setPopularTags(tagsData.data || []);
        setFeaturedPosts(postsData.data || []);
      } catch (error) {
        console.error('Error fetching sidebar data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSidebarData();
  }, [companyId]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleCategoryClick = (categoryId: number) => {
    if (onCategoryChange) {
      onCategoryChange(selectedCategory === categoryId ? null : categoryId);
    }
  };

  const handleTagClick = (tagId: number) => {
    if (onTagChange) {
      onTagChange(selectedTag === tagId ? null : tagId);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 搜索框 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FaSearch className="mr-2 text-blue-600" />
          Search
        </h3>
        <form onSubmit={handleSearch} className="space-y-3">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </form>
      </motion.div>

      {/* 分类 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FaFolder className="mr-2 text-blue-600" />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category: any) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{category.name}</span>
                {category.posts_count && (
                  <span className="text-sm text-gray-500">({category.posts_count})</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* 热门标签 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FaTags className="mr-2 text-blue-600" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag: any) => (
            <button
              key={tag.id}
              onClick={() => handleTagClick(tag.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === tag.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={tag.color && selectedTag !== tag.id ? { backgroundColor: `${tag.color}20`, color: tag.color } : {}}
            >
              #{tag.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* 推荐文章 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FaStar className="mr-2 text-blue-600" />
          Featured Posts
        </h3>
        <div className="space-y-4">
          {featuredPosts.map((post: any) => (
                         <Link
               key={post.id}
                                 href={`/zh/blog/${post.slug}`}
               className="block group"
             >
              <div className="flex items-start space-x-3">
                {post.featured_image && (
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(post.published_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* 热门文章 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="card"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FaFire className="mr-2 text-orange-600" />
          Popular Posts
        </h3>
        <div className="space-y-3">
          {/* 这里可以添加热门文章列表 */}
          <p className="text-sm text-gray-500">
            Most viewed articles will appear here.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSidebar; 