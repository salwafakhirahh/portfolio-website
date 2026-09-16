import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiClock, FiShare2 } from 'react-icons/fi';
import { getArticleBySlug } from '../data/articles';

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = getArticleBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, url });
      } catch (e) {}
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link disalin!');
    }
  };

  if (!article) {
    return (
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-12 text-center">
          <p className="text-4xl mb-3">😕</p>
          <p className="text-gray-700 font-inter font-medium mb-4">
            Artikel tidak ditemukan
          </p>
          <Link
            to="/"
            className="inline-block bg-dustyRose text-white px-6 py-2 rounded-full hover:bg-coral transition-all font-inter"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 pb-12">
      <div className="max-w-3xl mx-auto">
        {/* Tombol Kembali */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-dustyRose transition-colors font-inter font-medium mb-6"
        >
          <FiArrowLeft className="w-5 h-5" />
          Kembali ke Beranda
        </Link>

        <article className="glass-card rounded-2xl overflow-hidden">
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          )}

          <div className="p-6 md:p-8">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-inter mb-4">
              <span className="flex items-center gap-1">
                <FiCalendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <FiClock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span className="px-3 py-1 rounded-full bg-dustyRose/20 text-dustyRose text-xs font-semibold">
                {article.category}
              </span>
            </div>

            {/* Judul — pakai font-times */}
            <h1 className="font-times text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Konten — pakai font-inter, styling manual */}
            <div
              className="article-content font-inter text-gray-700 leading-relaxed
                         [&_h2]:font-times [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800
                         [&_h2]:mt-8 [&_h2]:mb-3
                         [&_p]:mb-4 [&_p]:text-base
                         [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
                         [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
                         [&_li]:text-gray-700
                         [&_strong]:text-gray-900 [&_strong]:font-semibold
                         [&_code]:bg-dustyRose/10 [&_code]:text-dustyRose
                         [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
                         [&_code]:font-mono"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
              <span className="text-sm text-gray-500 font-inter">
                Bagikan artikel ini:
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-dustyRose text-white px-4 py-2 rounded-full hover:bg-coral transition-all font-inter text-sm font-medium"
              >
                <FiShare2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetailPage;