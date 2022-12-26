import React,{useState} from 'react'
import Mycv from "D:/VS Code/Workspace/portfolio/src/assests/Shakib_Sadat_Shanto_CV.pdf"
import{FaGithub,
    FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from 'react-scroll'

const Navbar = () => {
    const[nav,setNav] = useState(false)
    
  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#263159] text-[#9bc8f8]'>
      
      
      <ul className='hidden md:flex '>
      
        <li className='transition-all hover:bg-[#2b3969]'>
        <Link  to="home"  smooth={true}  duration={500} >
        Home
        </Link>
        </li>

        <li className='transition-all hover:bg-[#2b3969]'>
        <Link  to="about"  smooth={true}  duration={500} >
        About
        </Link>
        </li>

        <li className='transition-all hover:bg-[#2b3969]'>
        <Link  to="skills"  smooth={true}  duration={500} >
        Skills
        </Link>
        </li>

        <li className='transition-all hover:bg-[#2b3969]'>
        <Link  to="works"  smooth={true}  duration={500} >
        Project
        </Link>
        </li>

        <li className='transition-all hover:bg-[#2b3969]'>
        <Link  to="contact"  smooth={true}  duration={500} >
        Contact
        </Link>
        </li>
        
      </ul>



     
   

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/shakib-sadat-shanto-22b982211/'
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-[#9bc8f8]'
              href='https://github.com/shakib-sadat'
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#34927e]'>
            <a
              className='flex justify-between items-center w-full text-[#9bc8f8]'
              href='mailto: shakibsss080@gmail.com'
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-[#9bc8f8]'
              href={Mycv} download="Shakib_Sadat_Cv"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>

    </div>
    </div>
  );
};

export default Navbar;
