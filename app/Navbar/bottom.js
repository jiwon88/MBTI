import { FaFacebook, FaInstagram , FaTwitter } from "react-icons/fa";

export default function Bottom(){
    return(
        <div>
            <div className='text-gray-400 font-semibold text-center pt-20'>
              2011-2020 Mbti
          </div>
          <div className='pt-20 grid grid-cols-6 font-medium text-teal-500 text-center'>
              <span>
                  Contact
              </span>
              <span>
                  Testimonials
              </span>
              <span>
                  Terms & Conditions
              </span>
              <span>
                  Privact Policy
              </span>
              <span>
                  For Teams
              </span>
              <span>
                  Join Us!
              </span>
          </div>
          <div className='flex items-center justify-center space-x-4 p-6 text-xl text-gray-500'>

          <div className='flex'>
            <span className='border rounded-full p-6'>
              <FaFacebook />
            </span>
            <span className='border rounded-full p-6 ml-4'>
              <FaInstagram />
            </span>
            <span className='border rounded-full p-6 ml-4'>
              <FaTwitter />
            </span>
          </div>


            
          </div>

          <div className='text-center text-gray-400 font-light p-14'>
            <span>Disclaimer:</span>All non-English versions of the website contain automated translations or translations submitted by our users. 
            They are not binding in any way, are not guaranteed to be accurate, and have no legal effect. The official text is the 
            <span className='text-teal-400'>English version</span> of the website. Please consider reporting translation issues to <span className='text-teal-400'>support@16personalities.com!</span>
          </div>
        </div>
    )
}