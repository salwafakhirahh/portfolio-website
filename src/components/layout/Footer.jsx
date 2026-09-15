import React from 'react';
import {
  FiInstagram, FiMail, FiPhone, FiMapPin,
  FiHome, FiUser, FiBookOpen, FiCode,
  FiBriefcase, FiFolder, FiSend
} from 'react-icons/fi';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { profile } from '../../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '#home', icon: <FiHome className="w-4 h-4" /> },
    { name: 'Profil', href: '#professional', icon: <FiUser className="w-4 h-4" /> },
    { name: 'Pendidikan', href: '#education', icon: <FiBookOpen className="w-4 h-4" /> },
    { name: 'Keahlian', href: '#skills', icon: <FiCode className="w-4 h-4" /> },
    { name: 'Pengalaman', href: '#experience', icon: <FiBriefcase className="w-4 h-4" /> },
    { name: 'Karya', href: '#projects', icon: <FiFolder className="w-4 h-4" /> },
    { name: 'Kontak', href: '#contact', icon: <FiSend className="w-4 h-4" /> },
  ];

  const socials = [
    {
      name: 'Instagram',
      href: profile.socials.instagram,
      icon: <FiInstagram />,
      color: 'hover:bg-pink-500',
    },
    {
      name: 'GitHub',
      href: profile.socials.github,
      icon: <FaGithub />,
      color: 'hover:bg-gray-800',
    },
    {
      name: 'WhatsApp',
      href: profile.whatsappLink,
      icon: <FaWhatsapp />,
      color: 'hover:bg-green-500',
    },
  ];

  return (
    <footer className="bg-white/20 backdrop-blur-xl border-t border-white/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-dustyRose mb-2 font-times">
              {profile.fullName}
            </h3>
            <p className="text-sm text-gray-600 mb-4 font-poppins">
              {profile.field}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 font-inter">
              "{profile.vision}"
            </p>
            <div className="flex gap-3 text-xl">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className={`w-10 h-10 rounded-full bg-white/40 flex items-center justify-center text-gray-600 hover:text-white transition-all ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4 font-poppins">Navigasi Singkat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-dustyRose transition-colors font-inter"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4 font-poppins">Hubungi Saya</h4>
            <div className="space-y-3 text-sm text-gray-600 font-inter">
              <div className="flex items-start gap-3">
                <FiMail className="w-5 h-5 text-dustyRose mt-0.5 flex-shrink-0" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="w-5 h-5 text-dustyRose mt-0.5 flex-shrink-0" />
                <span>{profile.whatsapp}</span>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-dustyRose mt-0.5 flex-shrink-0" />
                <span>{profile.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/40 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 font-inter">
            <p>
              &copy; {currentYear}{' '}
              <span className="font-bold text-dustyRose">{profile.fullName}</span>.
              Hak cipta dilindungi.
            </p>
            <p className="text-xs">
              Dibuat dengan <span className="text-red-500">♥</span> di Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;