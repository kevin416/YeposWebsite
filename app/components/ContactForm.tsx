'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from '../i18n/client';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { createContactMessage } from '@/lib/api';

// Default company ID - replace with your actual company ID
const DEFAULT_COMPANY_ID = '17';

// 定义输入框样式类名
const inputClassName = "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-left";

const ContactForm = () => {
  const params = useParams();
  const { t } = useTranslation(params.lng as string);
  const searchParams = useSearchParams();
  const [prefillNotice, setPrefillNotice] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    product: 'yepos-manager',
    preferredTime: '',
    type: 'contact',
    company: process.env.NEXT_PUBLIC_COMPANY_ID || DEFAULT_COMPANY_ID
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // 处理输入变化（支持 input / textarea / select）
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 如果 URL 中带有 product 或 preferredTime 参数，预填表单
  useEffect(() => {
    if (!searchParams) return;
    const product = searchParams.get('product');
    const preferredTime = searchParams.get('preferredTime') || searchParams.get('preferred_time');
    const scroll = typeof window !== 'undefined' && window.location.hash.includes('#contact');

    setFormData(prev => ({
      ...prev,
      ...(product ? { product } : {}),
      ...(preferredTime ? { preferredTime } : {})
    }));

    if (scroll) {
      // small timeout to allow page layout
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
    // Show a small toast/notice when product prefill occurs
    if (product) {
      const labels: Record<string, string> = {
        'yepos-manager': t('contact.form.products.yeposManager'),
        'manager-next': t('contact.form.products.managerNext'),
        'print-proxy': t('contact.form.products.printProxy'),
        'yepos-online': t('contact.form.products.yeposOnline'),
        'other': t('contact.form.products.other')
      };
      const label = labels[product] || product;
      setPrefillNotice(`${t('contact.form.prefillNotice')} - ${label}`);
      setTimeout(() => setPrefillNotice(null), 4000);
    }
  }, [searchParams]);

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
        product: 'yepos-manager',
        preferredTime: '',
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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 opacity-50" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prefill toast */}
        {prefillNotice && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed top-24 right-6 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            {prefillNotice}
          </motion.div>
        )}
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
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputClassName}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClassName}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.product')}
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className={inputClassName}
                    >
                      <option value="yepos-manager">{t('contact.form.products.yeposManager')}</option>
                      <option value="manager-next">{t('contact.form.products.managerNext')}</option>
                      <option value="print-proxy">{t('contact.form.products.printProxy')}</option>
                      <option value="yepos-online">{t('contact.form.products.yeposOnline')}</option>
                      <option value="other">{t('contact.form.products.other')}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={inputClassName}
                    required
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.preferredTime')}
                  </label>
                  {/* If the preferredTime can be parsed as a date, show datetime-local input for better UX; otherwise keep a free text input */}
                  {(() => {
                    const val = formData.preferredTime;
                    const parsed = val ? new Date(val) : null;
                    const isValidDate = parsed && !isNaN(parsed.getTime());

                    if (isValidDate) {
                      const pad = (n: number) => String(n).padStart(2, '0');
                      const y = parsed.getFullYear();
                      const m = pad(parsed.getMonth() + 1);
                      const d = pad(parsed.getDate());
                      const hh = pad(parsed.getHours());
                      const mm = pad(parsed.getMinutes());
                      const formatted = `${y}-${m}-${d}T${hh}:${mm}`;

                      return (
                        <input
                          type="datetime-local"
                          id="preferredTime"
                          name="preferredTime"
                          value={formatted}
                          onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                          className={inputClassName}
                        />
                      );
                    }

                    return (
                      <input
                        type="text"
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className={inputClassName}
                        placeholder={t('contact.form.preferredTimePlaceholder')}
                      />
                    );
                  })()}
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
                <h3 className="text-lg font-medium text-gray-900">{t('contact.info.emailTitle')}</h3>
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
                <h3 className="text-lg font-medium text-gray-900">{t('contact.info.phoneTitle')}</h3>
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