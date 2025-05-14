'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from '../i18n/client';
import { useParams } from 'next/navigation';
import { createContactMessage } from '@/lib/api';

// Default company ID - replace with your actual company ID
const DEFAULT_COMPANY_ID = '17';

const ContactForm = () => {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);
  
  // 使用refs跟踪表单元素
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const subjectInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    type: 'contact',
    company: process.env.NEXT_PUBLIC_COMPANY_ID || DEFAULT_COMPANY_ID
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data for API
      const messageData = {
        ...formData,
        subject: formData.subject || t('contact.form.defaultSubject') || 'Website Contact Form',
        company: process.env.NEXT_PUBLIC_COMPANY_ID || DEFAULT_COMPANY_ID
      };
      // Send data to API using createContactMessage
      await createContactMessage(messageData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        message: '', 
        subject: '', 
        type: 'contact',
        company: process.env.NEXT_PUBLIC_COMPANY_ID || DEFAULT_COMPANY_ID
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* 添加全局样式 */}
      <style jsx global>{`
        .custom-input {
          text-align: left !important;
          direction: ltr !important;
          padding-left: 12px !important;
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        
        .custom-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }
      `}</style>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 opacity-50" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title inline-block"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto"
          >
            {t('contact.description')}
          </motion.p>
        </div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-center"
          >
            <FaCheckCircle className="text-green-500 mr-3 text-xl flex-shrink-0" />
            <p className="text-green-700">{t('contact.form.success')}</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="card">
              <form className="p-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      ref={nameInputRef}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="custom-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      ref={emailInputRef}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="custom-input"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    ref={subjectInputRef}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="custom-input"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    ref={messageInputRef}
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="custom-input"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  </button>
                  {submitStatus === 'error' && (
                    <span className="text-red-600">{t('contact.form.error')}</span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.a
              href={`mailto:${t('contact.info.email')}`}
              className="card p-6 flex items-start space-x-4 hover:bg-gray-50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">{t('contact.info.email')}</p>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${t('contact.info.phone')}`}
              className="card p-6 flex items-start space-x-4 hover:bg-gray-50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <FaPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">{t('contact.info.phone')}</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 