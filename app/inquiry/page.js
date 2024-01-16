'use client'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React, { useState } from 'react';

export default function Inquiry() {
  const [language, setLanguage] = useState('한글');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === '한글' ? '영어' : '한글'));
  };

  const inquiryContent = language === '한글' ? (
    <>
      궁금하신 사항이나 문의사항이 있으시면 망설임 없이 연락 주시기 바랍니다. 저희는 저희 앞으로 발송되는 모든 문의 사항들을 하나하나 꼼꼼히 확인합니다. <br />
      당신의 소중한 의견 기다리고 있겠습니다. 현재 영어로 작성된 이메일에 한해서만 답변이 가능합니다. 이 점 많은 양해 부탁드려요.
    </>
  ) : (
    <>
      If you have any questions or inquiries, please feel free to contact us. We carefully review each and every inquiry that comes our way. <br />
      We look forward to hearing your valuable opinions. Currently, we can only respond to emails written in English. Thank you for your understanding.
    </>
  );

  return (
    <div className="bg-cyan-500 p-40">
      <div className="flex justify-end">
        <button 
            className="absolute right-20 top-10 w-28 p-3 ml-10 text-xl text-white hover:text-gray-300 bg-teal-500 hover:bg-teal-600 rounded-md transition duration-300 "
            onClick={toggleLanguage}>
          {language === '한글' ? 'English' : '한글'}
        </button>
      </div>
      <div className="font-bold text-white text-5xl">
        {language === '한글' ? '문의' : 'Inquiry'}
      </div>
      <div className="text-white pt-6 text-xl">{inquiryContent}</div>
      <button className="text-white pt-6 text-xl underline">
        jiwon88@githube.com
      </button>
      <div className="text-green-900 font-bold pt-6 text-2xl">NERIS Analytics Limited</div>
      <div className="text-green-900 text-lg pt-2 font-light">
        Nine Hills Road, Cambridge, CB2 1GE, United Kingdom<br />
        Registered in England and Wales, #1234567
      </div>
      <button className="flex gap-8 text-4xl pt-10 ">
        <FaFacebookF className="bg-blue-800 text-white rounded-full p-2 transform transition-transform hover:-translate-y-1" />
        <FaInstagram className="bg-rose-600 text-white rounded-full p-2 transform transition-transform hover:-translate-y-1" />
        <FaTwitter className="bg-sky-500 text-white rounded-full p-2 transform transition-transform hover:-translate-y-1" />
      </button>
    </div>
  );
}
