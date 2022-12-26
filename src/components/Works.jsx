import React from 'react'
import Breast from 'D:/VS Code/Workspace/portfolio/src/assests/breast.png';
import Car from 'D:/VS Code/Workspace/portfolio/src/assests/car.jpg';
import Student from 'D:/VS Code/Workspace/portfolio/src/assests/student.jpg';
import Bus from 'D:/VS Code/Workspace/portfolio/src/assests/bus.jpg';
import CG from 'D:/VS Code/Workspace/portfolio/src/assests/cg.png';
import Slide from 'react-reveal/Slide';
function Works() {
  return (
    <div name = 'works' className='w-full h-screen bg-[#0F3460]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline  text-[#d7f3d2]'>
            Projects
          </p>
          <Slide bottom>
          <p className='py-6 text-lg text-[#d7f3d2]'>Here's some of my recent Projects</p>
          </Slide>
        </div>
        <div 
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        {/*Grid*/}
        <div style={{backgroundImage:`url(${Bus})`}} className='shadow-lg shadow-[#19537a] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-1xl font-bold text-white tracking-wider' >
        Bus Rapid Transit (C#)

        </span>
        <div className='pt-8 text-center'>
        <a href='https://github.com/shakib-sadat/BusRapidTransitManagement' target="_blank">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#1c0455] font-bold text-large'> View On GitHub</button>
        </a>
        </div>

        </div>

        </div>

        <div style={{backgroundImage:`url(${CG})`}} className='shadow-lg shadow-[#22859e] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-1xl font-bold text-white tracking-wider' >
        Mountain Landscape Scenario (OpenGl)

        </span>
        <div className='pt-8 text-center'>
        <a href='https://github.com/shakib-sadat/Computer-Graphics-Project' target="_blank">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#1c0455] font-bold text-large'> View On GitHub</button>
        </a>
        </div>

        </div>

        </div>

        <div style={{backgroundImage:`url(${Student})`}} className='shadow-lg shadow-[#22859e] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-1xl font-bold text-white tracking-wider' >
        Student Grade Prediction (Python)

        </span>
        <div className='pt-8 text-center'>
        <a href='https://github.com/shakib-sadat/Mining-Student-Data-to-Predict-Result' target="_blank">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#1c0455] font-bold text-large'> View On GitHub</button>
        </a>
        </div>

        </div>

        </div>

        <div style={{backgroundImage:`url(${Breast})`}} className='shadow-lg shadow-[#19537a] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-1xl font-bold text-white tracking-wider' >
        Breast Cancer Prediction (Python)

        </span>
        <div className='pt-8 text-center'>
        <a href='https://github.com/shakib-sadat/Breast-Cancer-Prediction-with-Classification-Models' target="_blank">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#1c0455] font-bold text-large'> View On GitHub</button>
        </a>
        </div>

        </div>

        </div>

        <div style={{backgroundImage:`url(${Car})`}} className='shadow-lg shadow-[#19537a] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-1xl font-bold text-white tracking-wider' >
        Car Purchase Prediction (Weka)

        </span>
        <div className='pt-8 text-center'>
        <a href='https://github.com/shakib-sadat/Data-Mining-Project' target="_blank">
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#1c0455] font-bold text-large'> View On GitHub</button>
        </a>
        </div>

        </div>

        </div>



        </div>
    </div>
    </div>
  )
}

export default Works
