import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import Slide from 'react-reveal/Slide';
import Shanto from 'D:/VS Code/Workspace/portfolio/src/assests/tata2.jpg';

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#0F3460]'>

    
      <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
      <Slide top>
      <div ><img src={require('D:/VS Code/Workspace/portfolio/src/assests/tata_2.jpg')} className='rounded-full shadow-lg shadow-[#19537a] mb-100 pb-100' height={500} width={500}/> </div>
      

      
      <p className='text-[#d7f3d2] text-4xl'>Hi, I'm</p>
      <h1 className='text-4xl sm:text-5xl font-bold text-[#c2f8f3]'>Shakib Sadat Shanto</h1>
      
      <h2 className='text-2xl sm:text-2xl font-semibold text-[#84f3e8]'> An AI, Data Science and Machine Learning enthusiast</h2>
      </Slide>
    <div>
    
    <a href='https://github.com/shakib-sadat' target="_blank">
    <Slide bottom>
    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1ea0f7] hover:border-[#1363DF]'> View Work <HiArrowNarrowRight className='ml-3'/></button>
</Slide>
    </a>
    
      
    </div>

      
    
    </div>
    
    </div>
  )
}

export default Home
