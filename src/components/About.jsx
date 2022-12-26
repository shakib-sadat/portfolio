import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0F3460] text-[#d7f3d2]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline '>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px]  grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
            <Fade left>
              <p>Hi. I'm Shakib Sadat Shanto, nice to meet you. Please take a look around.</p>
              </Fade>
            </div>
            <div>
            <Fade right>
            <p className='text-[#84f3e8] py-4 max-w-[800px]'> In final year studying BSC in CSE at AIUB. Currently I am seeking for opportunities in my interested fields to get a taste of professional environment to grow as a better engineer. </p>
            </Fade>
            <h1 className='text-3xl sm:text-2xl font-semibold inline  text-[#d7f3d2]'> Education </h1>
            <div className='flex flex-col'>
            <img src={require('D:/VS Code/Workspace/portfolio/src/assests/aiub.png')} height={80} width={80}/> 
            <h3 className='text-1xl sm:text-1xl font-semibold inline  text-[#84f3e8]' > American International University-Bangladesh </h3>
            <p className='text-1xl sm:text-1xl font-semibold inline  text-[#84f3e8]'> BSC in CSE (2020-On going)</p>
            <p className='text-1xl sm:text-1xl font-semibold inline  text-[#84f3e8]'> CGPA- 3.85 </p>

            <img src={require('D:/VS Code/Workspace/portfolio/src/assests/dhaka_college.png')} height={80} width={80}/> 
            <h3 className='text-1xl sm:text-1xl font-semibold inline  text-[#84f3e8]' > Dhaka College </h3>
            <p className='text-1xl sm:text-1xl font-semibold inline  text-[#84f3e8]'> HSC (2017-2019)</p>
            <p className='text-1xl sm:text-1xl font-semibold inline  text-[#84f3e8]'> GPA- 4.67 </p>
            <p> </p>

            <img src={require('D:/VS Code/Workspace/portfolio/src/assests/rideal.png')} className='rounded-full'  height={80} width={80} /> 
            <h3 className='text-1xl sm:text-1xl font-semibold inline  text-[#84f3e8]' > Ideal School and College </h3>
            <p className='text-1xl sm:text-1xl font-semibold inline  text-[#84f3e8]'> SSC (2009-2017)</p>
            <p className='text-1xl sm:text-1xl font-semibold inline  text-[#84f3e8]'> GPA- 5 </p>
            </div>

  
            </div>
          </div>
          <div>
            
          </div>
      </div>
    </div>
  );
};

export default About;