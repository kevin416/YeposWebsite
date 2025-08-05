'use client';

import { motion } from 'framer-motion';
import { FaEye, FaHeart, FaComment, FaClock, FaUser } from 'react-icons/fa';
import Link from 'next/link';

interface BlogPostCardProps {
  post: {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    featured_image?: string;
    view_count: number;
    like_count: number;
    comment_count: number;
    published_at: string;
    reading_time?: number;
    category?: {
      id: number;
      name: string;
      slug: string;
    };
    tags?: Array<{
      id: number;
      name: string;
      slug: string;
      color?: string;
    }>;
    author?: {
      id: number;
      name: string;
    };
  };
  index?: number;
}

const BlogPostCard = ({ post, index = 0 }: BlogPostCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {post.featured_image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {post.category && (
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category.name}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          {post.author && (
            <div className="flex items-center mr-4">
              <FaUser className="mr-1" />
              <span>{post.author.name}</span>
            </div>
          )}
          <div className="flex items-center mr-4">
            <FaClock className="mr-1" />
            <span>{formatDate(post.published_at)}</span>
          </div>
          {post.reading_time && (
            <div className="flex items-center">
              <span>{post.reading_time} min read</span>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link href={`/zh/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                style={tag.color ? { backgroundColor: `${tag.color}20`, color: tag.color } : {}}
              >
                #{tag.name}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <FaEye className="mr-1" />
              <span>{post.view_count}</span>
            </div>
            <div className="flex items-center">
              <FaHeart className="mr-1" />
              <span>{post.like_count}</span>
            </div>
            <div className="flex items-center">
              <FaComment className="mr-1" />
              <span>{post.comment_count}</span>
            </div>
          </div>

          <Link
            href={`/zh/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            阅读更多 →
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPostCard; 