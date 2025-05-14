'use client';

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const features = [
  "Industry-leading innovation and technology",
  "Dedicated team of expert professionals",
  "Proven track record of successful projects",
  "Customer-centric approach to solutions"
];

export default function AnimatedAbout() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-50" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="section-title !text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                About YEPOS
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-blue-600 rounded-full mt-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                At YEPOS, we believe in transforming ideas into reality. With years of experience and a passionate team,
                we deliver innovative solutions that help businesses thrive in the digital age.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence and customer satisfaction drives everything we do. We work closely with our
                clients to understand their unique challenges and deliver tailored solutions that exceed expectations.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3 text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <FaCheck className="w-3 h-3 text-white" />
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="#contact"
                className="btn-primary inline-flex items-center group"
              >
                Get in Touch
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-white text-center"
                >
                  <div className="text-8xl font-bold mb-6 gradient-text">YEPOS</div>
                  <div className="text-2xl font-light text-white/90">Innovation & Excellence</div>
                </motion.div>
                
                {/* Floating elements */}
                <div className="absolute inset-0">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-20 h-20 bg-white/10 rounded-lg"
                      initial={{ x: 0, y: 0 }}
                      animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                      }}
                      transition={{
                        duration: 4,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 