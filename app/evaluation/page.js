'use client';
import { BsCheck } from 'react-icons/bs';

const communicationContents = [
  'Improve communication across your team',
  'Get to know your team members better',
  'Help team members develop their individual strengths',
  'Works for teams of all sizes'
];

export default function Evaluation() {
  return (
    <div>
      <div className='bg-gray-100'>
        <div className='text-4xl ml-10 font-bold pt-20 text-gray-600'>Understand your team better with</div>
        <div className='text-4xl ml-10 font-bold pt-2 text-cyan-600 py-6'>Team Assessments</div>
            {communicationContents.map((content, index) => (
            <div key={index} className="flex items-center ml-6">
                <span className="text-green-600 text-4xl pt-4">
                <BsCheck />
                </span>
                <span className="text-xl text-gray-700">{content}</span>
            </div>
            ))}
        <div className='pt-8'>
            <div className='p-8 text-white font-semibold rounded-full text-2xl bg-fuchsia-800 w-52 ml-10'>
                Get Started
            </div>

        </div>
        
        <div className='py-14'></div>
      </div>
      <div className='bg-sky-100'>
            <div className='flex flex-cols justify-center '>
                <div className='flex flex-col text-center bg-sky-200 rounded-lg border-t-4 border-sky-600'>
                    <span className='text-center text-xl font-semibold text-sky-600 pt-8'>Step 1</span>
                    <span className='text-center text-lg font-semibold text-gray-600 pt-2'>Understand Yourself</span>
                    <span className='flex pt-8 p-4 text-sm text-center text-gray-600'>
                        First, you'll bulid your team in our portal. Each <br />
                        team member is then invited to complete our <br />
                        personality test, sit team assessments, and <br />
                        seventeen individual career assessments.
                    </span>
                </div>
                <div className='flex flex-col bg-green-100 rounded-lg border-t-4 border-green-600'>
                    <span className='text-center text-xl font-semibold text-green-600 pt-8'>Step 2</span>
                    <span className='text-center text-lg font-semibold text-gray-600 pt-2'>Understand Your Team</span>
                    <div className='flex pt-8 text-sm p-4 text-center text-gray-600'>
                        Next, you'll get team and personal reports for <br />
                        every assessment, highlighting your team's <br />
                        strengths and weaknesses. Learn why your team <br />
                        operates te way it does and how to work best <br />
                        together.
                    </div>
                </div>
                <div className='flex flex-col bg-purple-100 rounded-lg border-t-4 border-purple-600'>
                    <span className='text-center text-xl font-semibold text-purple-600 pt-8'>Step 3</span>
                    <span className='text-center text-lg font-semibold text-gray-600 pt-2'>Turn Insights into Action</span>
                    <span className='flex pt-8 p-4 text-sm text-gray-600 text-center'>
                        First, you'll bulid your team in our portal. Each <br />
                        reflect on your team's results - turning insights <br />
                        into action and cultivating deeper, more effective<br />
                        working relationships.
                    </span>
                </div>
            </div>
      </div>
      <div className='bg-gray-200'>
        <div className='text-center pt-20 text-4xl font-bold text-gray-700'>What can Team Assessments do for your company?</div>
        <div className='text-center pt-4 text-xl text-gray-600'>Use our self-guided tools to help your team work better together.</div>
        <div className='flex flex-row gap-10 py-20'>
            <span className='flex flex-col flex-grow mr-10 ml-20'>
                <span className='font-semibold text-lg text-gray-700'>Enhance Communication</span>
                <span className='mt-2 text-gray-700'>Improve connections between team<br /> members, boosting productivity.</span>
            </span>
            <span className='flex flex-col flex-grow mr-10'>
                <span className='font-semibold text-lg text-gray-700'>Improve Performance</span>
                <span className='mt-2 text-gray-700'>Measure current team effectiveness and<br /> take it to the next level.</span>
            </span>
            <span className='flex flex-col flex-grow'>
                <span className='font-semibold text-lg text-gray-700'>Boost Teamwork</span>
                <span className='mt-2 text-gray-700'>Collaborate better together and achieve<br /> more success as a team.</span>
            </span>
            
            
        </div>
      </div>
    </div>
  );
}
