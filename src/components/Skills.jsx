import React from 'react';
import HTML from 'D:/VS Code/Workspace/portfolio/src/assests/html.png';
import CSS from 'D:/VS Code/Workspace/portfolio/src/assests/css.png';
import JavaScript from 'D:/VS Code/Workspace/portfolio/src/assests/javascript.png';
import ReactImg from 'D:/VS Code/Workspace/portfolio/src/assests/react.png';
import GitHub from 'D:/VS Code/Workspace/portfolio/src/assests/github.png';
import Python from 'D:/VS Code/Workspace/portfolio/src/assests/python.png';
import Mysql from 'D:/VS Code/Workspace/portfolio/src/assests/mysql.png';
import C from 'D:/VS Code/Workspace/portfolio/src/assests/c.png';
import R from 'D:/VS Code/Workspace/portfolio/src/assests/r.png';
import Tensorflow from 'D:/VS Code/Workspace/portfolio/src/assests/tensorflow.png';
import tab from 'D:/VS Code/Workspace/portfolio/src/assests/tab.png';
import weka from 'D:/VS Code/Workspace/portfolio/src/assests/weka.png';
import Fade from 'react-reveal/Fade';

function Skills() {
  return (
    <div name="skills" className='w-full h-screen bg-[#0F3460] text-[#d7f3d2]'>
      <div className='max-w-[1000px] text-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
      
        <p className='text-4xl font-bold inline '>Skills</p>
        <Fade top>

        <p className='py-4 '>
            These are the technologies I've worked with
        </p>
        </Fade>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Python} alt="python icon" />
        <p className='my-4'>Python</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={R} alt="r icon" />
        <p className='my-4'>R</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={tab} alt="tab icon" />
        <p className='my-4'>Tableau</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Tensorflow} alt="tensorflow icon" />
        <p className='my-4'>Tensorflow</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={weka} alt="weka icon" />
        <p className='my-4'>Weka</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={HTML} alt="html icon" />
        <p className='my-4'>HTML</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={CSS} alt="css icon" />
        <p className='my-4'>CSS</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={JavaScript} alt="javasc icon" />
        <p className='my-4'>JavaScript</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={C} alt="C# icon" />
        <p className='my-4'>C#</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
        <p className='my-4'>React</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Mysql} alt="mysql icon" />
        <p className='my-4'>Mysql</p>
      </div>
      <div className='shadow-md shadow-[#1a4c6d] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={GitHub} alt="Git icon" />
        <p className='my-4'>GitHub</p>
      </div>
      </div>
        
      </div>
     
      
    </div>
  )
}

export default Skills
