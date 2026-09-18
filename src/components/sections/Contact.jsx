import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Semua field harus diisi!');
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      toast.error('Format email tidak valid!');
      setIsLoading(false);
      return;
    }

    toast.success(
      (t) => (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-semibold text-gray-800">Pesan Terkirim!</span>
          </div>
          <p className="text-sm text-gray-600">
            Terima kasih <span className="font-medium text-dustyRose">{formData.name}</span>, 
            pesan Anda telah berhasil dikirim.
          </p>
          <div className="mt-2 text-xs text-gray-400">
            Saya akan segera menghubungi Anda balik.
          </div>
        </div>
      ),
      {
        duration: 6000,
        style: {
          minWidth: '320px',
          padding: '20px 24px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(251, 175, 70, 0.2)',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)'
        }
      }
    );

    setFormData({ name: '', email: '', message: '' });
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Hubungi</span>
            <span className="text-dustyRose"> Saya</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Hubungi Saya</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dustyRose/20 rounded-full flex items-center justify-center">
                    <FiMail className="w-6 h-6 text-dustyRose" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-800">salwafakhirah@email.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dustyRose/20 rounded-full flex items-center justify-center">
                    <FiPhone className="w-6 h-6 text-dustyRose" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-800">+62 822 4563 8337</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dustyRose/20 rounded-full flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-dustyRose" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-gray-800">Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nama</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 bg-white/30 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-dustyRose"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 bg-white/30 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-dustyRose"
                  placeholder="Masukkan email Anda"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Pesan</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 bg-white/30 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-dustyRose h-32 resize-none"
                  placeholder="Tulis pesan Anda"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-dustyRose text-white rounded-lg hover:bg-coral transition-all duration-300 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;