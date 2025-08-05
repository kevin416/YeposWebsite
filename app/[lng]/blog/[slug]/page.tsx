'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart, FaComment, FaClock, FaUser, FaShare, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getBlogPost, likeBlogPost } from '@/lib/api';
import BlogComments from '../../../components/BlogComments';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const companyId = process.env.NEXT_PUBLIC_COMPANY_ID || '1';
  
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetchPost();
  }, [slug, companyId]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const response = await getBlogPost(slug, companyId);
      setPost(response.data);
      setLikeCount(response.data.like_count);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    if (!post || liked) return;
    
    try {
      await likeBlogPost(post.id, companyId);
      setLiked(true);
      setLikeCount(prev => prev + 1);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="../"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="../"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category */}
          {post.category && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <Link
                href={`../?category=${post.category.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {post.category.name}
              </Link>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center text-gray-600 mb-8 space-x-6"
          >
            {post.author && (
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <span>{post.author.name}</span>
              </div>
            )}
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>{formatDate(post.published_at)}</span>
            </div>
            {post.reading_time && (
              <div className="flex items-center">
                <span>{post.reading_time} min read</span>
              </div>
            )}
          </motion.div>

          {/* Featured Image */}
          {post.featured_image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </motion.div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {post.tags.map((tag: any) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  style={tag.color ? { backgroundColor: `${tag.color}20`, color: tag.color } : {}}
                >
                  #{tag.name}
                </span>
              ))}
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Engagement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-between pt-8 border-t border-gray-200"
          >
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <FaEye className="mr-2" />
                <span>{post.view_count} views</span>
              </div>
              <button
                onClick={handleLike}
                disabled={liked}
                className={`flex items-center transition-colors ${
                  liked ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <FaHeart className="mr-2" />
                <span>{likeCount} likes</span>
              </button>
              <div className="flex items-center">
                <FaComment className="mr-2" />
                <span>{post.comment_count} comments</span>
              </div>
            </div>

            <button
              onClick={sharePost}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <FaShare className="mr-2" />
              Share
            </button>
          </motion.div>
        </div>
      </article>

      {/* Comments Section */}
      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BlogComments
            postId={post.id}
            companyId={companyId}
            allowComments={post.allow_comments}
          />
        </div>
      </div>
    </div>
  );
} 