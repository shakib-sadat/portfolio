import React from 'react'
import Flip from 'react-reveal/Flip';
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0F3460] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/c93ac3ca-7a0a-4116-87b7-1fde68d69d62" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-[#d2e7f3]'>Contact</p>
                <Flip bottom>
                <p className='text-[#d7f3d2] py-4'> Submit the form below to email me.</p>
                </Flip>
            </div>
            <input className='bg-[#4f5e8a] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#4f5e8a]'  type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#4f5e8a] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#1ea0f7] hover:border-[#1363DF] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact
