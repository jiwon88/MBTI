'use client'
import { useState } from 'react';

const personalityTypesData = [
    {
        category: {
          한글: '분석가형',
          English: 'Analyst',
        },
        color: 'gray',
        types: [
          { 
            name: { 한글: '전략가', English: 'Strategist' }, 
            subtype: 'INTJ -A / INTJ - T', 
            description: { 
              한글: '모든 일에 대해 계획을 세우며 상상력이 풍부한 전략가입니다.', 
              English: 'Plans everything and is an imaginative strategist.' 
            },
          },
          {
            name: { 한글: '논리술사', English: 'Logician' },
            subtype: 'INTP -A / INTP - T',
            description: {
              한글: '지식을 끝없이 갈망하는 혁신적인 발명가입니다.',
              English: 'Innovative inventor who thirsts for endless knowledge.',
            },
           },
           {
            name: { 한글: '통솔자', English: 'Commander' },
            subtype: 'ENTJ -A / ENTJ - T',
            description: {
              한글: '항상 문제 해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자입니다.',
              English: 'A personality that always finds solutions to problems, bold, imaginative, and a strong-willed leader.',
            },
          },
          {
            name: { 한글: '변론가', English: 'Debater' },
            subtype: 'ENTP -A / ENTP - T',
            description: {
              한글: '지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다.',
              English: 'An intelligent and curious explorer who enjoys intellectual challenges.',
            },
          },
    ],
  },

  {
    category: { 한글: '외교관형', English :'Diplomat'},
    color: 'sky',
    types: [
        {
            name: { 한글: '옹호자', English: 'Advocate' },
            subtype: 'INFJ -A / INFJ - T',
            description: {
              한글: '차분하고 신비한 분위기를 풍기는 성격으로, 다른 사람에게 의욕을 불어넣는 이상주의자입니다.' ,
              English: 'Radiating a calm and mysterious atmosphere, Advocates are idealists who inspire enthusiasm in others.',
            },
        },
        {
            name: { 한글: '중재자', English: 'Mediator'},
            subtype: 'INFJ -A / INFJ - T',
            description: {
              한글:  '항상 선을 행할 준비가 되어 잇는 부드럽고 친절한 이타주의자입니다.' ,
              English: 'Always ready to do good, Mediators are gentle and kind altruists.',
            },
        },
        {
            name: { 한글: '선도자', English: 'Leader'},
            subtype: 'ENFJ -A / ENFJ - T',
            description: {
              한글:  '청중을 사로잡고 의욕을 불어넣는 카리스마 넘치는 지도자입니다.',
              English: 'Captivating the audience, Leaders are charismatic individuals who inspire enthusiasm.',
            },
        },
        {
            name: { 한글: '활동가', English: 'Activist'},
            subtype: 'ENFP -A / ENFP - T',
            description: {
              한글:  '열정적이고 창의적인 성격으로, 긍정적으로 삶을 바라보는 사교적이면서도 자유로운 영혼입니다.',
              English:'Passionate and creative, Activists have a positive outlook on life, being sociable and free-spirited.',
            },
        },

    ],
  },
  {
    category: { 한글: '관리자형', English :'Administrator'},
    color: 'gray',
    types: [
        {
            name: { 한글: '현실주의자', English: 'Realist'},
            subtype: 'ISTJ -A / ISTJ - T',
            description: {
              한글:  '사실을 중시하는 믿음직한 현실주의자입니다.',
              English:'A dependable realist who values facts.' ,
            },
        },
        {
            name: { 한글: '수호자', English: 'Guardian'},
            subtype: 'ISFJ -A / ISFJ - T',
            description: {
              한글:  '주변 사람을 보호할 준비가 되어 있는 헌신적이고 따뜻한 수호자입니다.',
              English:'A dedicated and warm guardian ready to protect those around them.' ,
            },
        },
        {
            name: { 한글: '경영자', English: 'Executive'},
            subtype: 'ESTJ -A / ESTJ - T',
            description: {
              한글:  '사물과 사람을 관리하는 데 뛰어난 능력을 지닌 경영자입니다.',
              English:'A capable manager with excellent skills in handling things and people.' ,
            },
        },
        {
            name: { 한글: '집정관', English: 'Consul'},
            subtype: 'ESFJ -A / ESFJ - T',
            description: {
              한글:  '배려심이 넘치고 항상 다른 사람을 도울 준비가 되어 있는 성격으로, 인기가 많고 사교성 높은 마당발입니다.',
              English:'A caring individual always ready to help others, popular and sociable.' ,
            },
        }, 
       
    ],
  },
  {
    category: { 한글: '탐험가형', English :'Explorer'},
    color: 'sky',
    types: [
        {
            name: { 한글: '전략가', English: 'Craftsman'},
            subtype: 'ISTP -A / ISTP - T',
            description: {
              한글:  '대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인입니다.',
              English:'Bold and practical, adept at handling all kinds of tools.'  ,
            },
        }, 
        {
            name: { 한글: '논리술사', English: 'Composer'},
            subtype: 'ISFP -A / ISFP - T',
            description: {
              한글:  '대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인입니다.',
              English:'Always seeking new experiences, a flexible and charming artist.'   ,
            },
        }, 
        {
            name: { 한글: '통솔자', English: 'Entrepreneur'},
            subtype: 'ESTP -A / ESTP - T',
            description: {
              한글:  '대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인입니다.',
              English:'A personality willing to take risks, intelligent, energetic, and observant entrepreneur.'  ,
            },
        }, 
        {
            name: { 한글: '변론가', English: 'Entertainer'},
            subtype: 'ESFP -A / ESFP - T',
            description: {
              한글:  '대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인입니다.',
              English:'A spontaneous and energetic entertainer who brings joy to those around them.'  ,
            },
        }, 
    ],
  },
];


const PersonalityType = ({ name, subtype, description, color, language }) => (
    <div className={`text-gray-700 text-3xl`}>
      {name[language]}
      <div className="text-xl pt-4 font-semibold text-gray-700">{subtype}</div>
      <div className="text-lg pt-4 font-normal text-gray-500">{description[language]}</div>
    </div>
  );
  
  const PersonalityCategory = ({ category, color, types, language }) => (
    <div className="border-t-2 border-gray-300">
      <div className={`p-40 pt-20 bg-${color}-200`}>
        <div className="text-white tracking-wider text-9xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          {category[language]}
        </div>
        <div className="flex justify-center pt-32 gap-20">
          {types.map((type, index) => (
            <PersonalityType key={index} {...type} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
  
  export default function Category() {
    const [language, setLanguage] = useState('한글');
  
    const toggleLanguage = () => {
      setLanguage((prevLanguage) => (prevLanguage === '한글' ? 'English' : '한글'));
    };
  
    return (
      <div className="text-center font-black">
        <div className="text-5xl text-gray-800 font-extrabold pt-32 mb-32">
          {language === '한글' ? '성격 유형' : 'Personality Types'}
        </div>
        {personalityTypesData.map((data, index) => (
          <PersonalityCategory key={index} {...data} language={language} />
        ))}
        <button 
            onClick={toggleLanguage} 
            className="absolute right-20 top-10 w-28 p-3 ml-10 text-xl text-white hover:text-gray-300 bg-teal-500 hover:bg-teal-600 rounded-md transition duration-300 ">
                {language === '한글' ? 'English' : '한글'}
            </button>
      </div>
    );
  }
  