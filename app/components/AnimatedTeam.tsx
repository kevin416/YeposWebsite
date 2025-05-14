'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const team = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    bio: "Visionary leader with 15+ years of experience in technology and innovation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Jane Smith",
    position: "CTO",
    bio: "Tech enthusiast and software architect with a passion for cutting-edge solutions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Mike Johnson",
    position: "Lead Designer",
    bio: "Creative mind behind our stunning designs and exceptional user experiences.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function AnimatedTeam() {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
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
            Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto"
          >
            Meet the experts behind our success. Our talented team brings together years of experience 
            and passion for innovation.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl" />
              </div>
              
              <div className="p-8 relative">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex space-x-4 text-gray-400">
                  <a href={member.social.linkedin} className="hover:text-blue-600 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="hover:text-blue-400 transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="hover:text-gray-900 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center group"
          >
            Join Our Team
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 