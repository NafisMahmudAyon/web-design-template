import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/homelyData';

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-24 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-syne tracking-tight">
            Meet Our Team Member
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mt-2.5">
            Stay ahead with up-to-date news that keeps you informed and engaged. Our commitment to excellence and deep knowledge of the local market enable us to match clients.
          </p>
        </div>

        {/* 4-Member Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Portrait Image */}
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-4 bg-neutral-100 shadow-md group-hover:shadow-xl transition-all duration-300 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 font-syne tracking-tight">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-[#C88C48] mt-0.5">
                {member.role}
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-3 mt-3 text-neutral-500">
                <a
                  href="#facebook"
                  aria-label={`${member.name} Facebook`}
                  className="hover:text-neutral-900 transition-colors"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#twitter"
                  aria-label={`${member.name} Twitter`}
                  className="hover:text-neutral-900 transition-colors"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#linkedin"
                  aria-label={`${member.name} LinkedIn`}
                  className="hover:text-neutral-900 transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
