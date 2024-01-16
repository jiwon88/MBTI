'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import useClient from './path/to/useClient';

export default function Home() {
  const isClient = useClient();
  const [language, setLanguage] = useState('한글');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === '한글' ? 'English' : '한글'));
  };

  useEffect(() => {
    if (isClient) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 500) {
          document.body.classList.add('page-transition');
          setTimeout(() => {
            window.location.href = '/category'; // 페이지 이동
          }, 200); // 페이지 이동 전에 0.5초간 대기
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isClient]);

  return (
    <div>
      <div className="bg-teal-500 p-40 text-white transition-transform">
        <div className="pt-10 ml-10 text-6xl font-bold">{language === '한글' ? 'MBTI' : 'MBTI'}</div>
        <div className="pt-6 text-3xl p-10">
          {language === '한글' ? '"드디어 제 성격을 이해받을 수 있어서 정말 기뻐요."' : '"Finally, I am happy to be understood for my personality."'}
        </div>
        <div className="pt-2 text-2xl p-10 mb-4">
          {language === '한글' ? 'mbti 성격 유형에 대해 분석을 확인해 보세요.' : 'Check the analysis of mbti personality types.'}
        </div>
        <Link
          href={'/category'}
          className="p-5 ml-10 mb-28 flex items-center justify-center h-full rounded-full w-1/4 bg-emerald-200 mr-2 text-2xl text-teal-600 font-bold text-center transition duration-300 transform hover:bg-emerald-300 hover:text-white"
        >
          {language === '한글' ? '확인 결과 ▶︎' : 'Check Results ▶︎'}
        </Link>
        <button 
          onClick={toggleLanguage} 
          className="absolute right-20 top-10 w-28 p-3 ml-10 text-xl text-white hover:text-gray-300 bg-teal-500 hover:bg-teal-600 rounded-md transition duration-300 ">
          {language === '한글' ? 'English' : '한글'}
        </button>
      </div>
    </div>
  );
}
