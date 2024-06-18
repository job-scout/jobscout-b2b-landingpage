import GetStartedForm from '@/components/GetStartedForm'
import React from 'react'

function Index() {
  return (
      <div className='container mx-auto w-full 2xl:w-[90%] lg:w-[90%]  mb-24 p-5 lg:space-x-10 lg:flex lg:flex-row flex flex-col lg:items-start justify-between'>
          
          <div className='lg:w-[60%]'> <GetStartedForm /></div>
          <div className='lg:w-[30%] flex flex-col space-y-8  mt-10'>
          
          <h2 className='font-medium text-gray-600 text-lg'>Need some immediate help ?</h2>
          
              <div className='flex flex-col space-y-1'>
                  <p className='font-medium text-gray-600 text-lg'>Email Support</p>
                  <a href="mailto:support@jobscout.co.in" className="underline  text-text font-medium">
                support@jobscout.co.in
              </a>
              </div>
               <div className='flex flex-col space-y-1'>
                  <p className='font-medium text-gray-600 text-lg'>Chat with us</p>
                  <div className='flex items-center space-x-5'>
                      <img src='/chat.png' className='w-16 h-16 ' /><p className='text-green-500 font-medium'>Support Agent Available</p>
                      </div>
              </div>
              <div className='flex flex-col space-y-5 text-gray-500'>
                 
                    <p>We are available Monday to Friday from 10 AM to 8 PM</p>
              </div>
          </div>
         </div>
  )
}

export default Index