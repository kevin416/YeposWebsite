'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaClock, FaReply, FaThumbsUp } from 'react-icons/fa';
import { getBlogComments, submitBlogComment } from '@/lib/api';

interface Comment {
  id: number;
  author_name: string;
  content: string;
  created_at: string;
  parent_id?: number;
  children?: Comment[];
  user?: {
    id: number;
    name: string;
  };
}

interface BlogCommentsProps {
  postId: number;
  companyId: string;
  allowComments: boolean;
}

const BlogComments = ({ postId, companyId, allowComments }: BlogCommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    author_name: '',
    author_email: '',
    content: ''
  });

  useEffect(() => {
    fetchComments();
  }, [postId, companyId]);

  const fetchComments = async () => {
    try {
      const response = await getBlogComments({
        post_id: postId,
        company_id: companyId,
        status: 'approved'
      });
      setComments(response.data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.content.trim() || !formData.author_name.trim()) return;

    setSubmitting(true);
    try {
      await submitBlogComment({
        post_id: postId,
        company_id: companyId,
        parent_id: replyTo,
        author_name: formData.author_name,
        author_email: formData.author_email,
        content: formData.content
      });

      // 重置表单
      setFormData({ author_name: '', author_email: '', content: '' });
      setReplyTo(null);
      
      // 重新获取评论
      await fetchComments();
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderComment = (comment: Comment, depth = 0) => (
    <motion.div
      key={comment.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${depth > 0 ? 'ml-8 border-l-2 border-gray-200 pl-4' : ''}`}
    >
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
              {comment.author_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="font-medium text-gray-900">
                {comment.user?.name || comment.author_name}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <FaClock className="mr-1" />
                {formatDate(comment.created_at)}
              </div>
            </div>
          </div>
          {depth < 2 && (
            <button
              onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
              className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
            >
              <FaReply className="mr-1" />
              Reply
            </button>
          )}
        </div>
        
        <div className="text-gray-700 leading-relaxed">
          {comment.content}
        </div>

        {replyTo === comment.id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4"
          >
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your name *"
                  value={formData.author_name}
                  onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.author_email}
                  onChange={(e) => setFormData({ ...formData, author_email: e.target.value })}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                placeholder="Your reply *"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="flex items-center space-x-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {submitting ? 'Posting...' : 'Post Reply'}
                </button>
                <button
                  type="button"
                  onClick={() => setReplyTo(null)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>

      {comment.children && comment.children.length > 0 && (
        <div className="space-y-4">
          {comment.children.map((child) => renderComment(child, depth + 1))}
        </div>
      )}
    </motion.div>
  );

  if (!allowComments) {
    return (
      <div className="text-center py-8 text-gray-500">
        Comments are disabled for this post.
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Comments</h3>

      {/* 评论表单 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card mb-8"
      >
        <h4 className="text-lg font-semibold mb-4">Leave a Comment</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name *"
              value={formData.author_name}
              onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.author_email}
              onChange={(e) => setFormData({ ...formData, author_email: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Your comment *"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? 'Posting Comment...' : 'Post Comment'}
          </button>
        </form>
      </motion.div>

      {/* 评论列表 */}
      <div className="space-y-6">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-20 rounded-lg"></div>
              </div>
            ))}
          </div>
        ) : comments.length > 0 ? (
          comments.map((comment) => renderComment(comment))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No comments yet. Be the first to comment!
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogComments; 