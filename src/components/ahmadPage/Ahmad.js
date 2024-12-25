import React, { useState } from 'react'
import './ahmad.css'
import codingImg from './coding.png';
import moltaqaImg from './Preview.png'
import githubImg from './th.jpeg'
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn , FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Ahmad = () => {
    const Projects = [
        {
          id: 1,
          name: 'Moltaqa Application',
          href: 'https://moltaqajo.netlify.app',
          imageSrc: moltaqaImg,
          hoverName : 'Visit Website',
        },
        {
          id: 2,
          name: 'Solo Social Media Platform',
          href: 'https://github.com/C12-AhmadNazzall/MERAKI_Academy_Project_4',
          imageSrc: githubImg,
          hoverName : 'Visit Project Repository',

        },
       
      ]
      const [project1Name , setproject1Name] = useState(false)
      const [projectid , setprojectid] = useState(0)
    return (
        <div className='Main-Div'>
            
            <div className='Header-Con'>
        <h1 className='First-Title'>Full-Stack Developer, Frontend Developer, Backend Developer, Software Engineer</h1>
        <h2 className='Second-Title'>I craft intuitive and engaging digital experiences, combining creativity with functionality, and I’m passionate about turning ideas into reality</h2>
        </div>
        <a href='#About-Text'>
        <img src='https://static.vecteezy.com/system/resources/previews/011/490/381/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg' className='my-Avatar' alt='Avatar'/></a>
        <div>
           <img src={codingImg} alt=''/>
           <div className='About-Me'>
            <div className='About-Text' id='About-Text'>
            <h1 className='About-me-head'>Hi, I’m Ahmad. Nice To Meet You</h1>
            <br></br>
            <h2 className='About-me-paragraph'>As a Junior Full-Stack Developer, I thrive on creating impactful solutions through clean code and innovative designs. With experience in building and deploying scalable applications, I’ve led a team project as a Scrum Master and independently developed a full-stack platform within two weeks. My journey has been fueled by a passion for problem-solving and continuous learning, which drives me to embrace new technologies and deliver meaningful results.</h2>
            </div>
           <div className='Cards-Div'>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600"></h2>
        
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 ">
          <div className="relative lg:row-span-2" id='Cards'>
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]">
                <div className='Frontend-Developer'>
                    <img className='Frontend-img' src='https://ik.imagekit.io/6eslefmcf/flexiple-blog/frontend_QHZx39-uF.jpeg' />
                    <br></br>
                <h3 className='Frontend-des'>Frontend Developer</h3>
                <br></br>
                <h4 className='Frontend-Text'>In my experience with frontend development, I've worked on building the parts of websites that users interact with directly. I use HTML, CSS, and JavaScript to create and style web pages, and I make sure they work well on different devices. I’ve also used frameworks like React to make websites more interactive and user-friendly</h4>
                 </div>  </div>
           
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1" id='Cards'>
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
               
              
              </div>
              <div className='Backend-Developer'>
              <img src='https://static.vecteezy.com/system/resources/previews/008/907/125/original/backend-development-line-circle-background-icon-vector.jpg' className='Backend-img'/>  
                <br></br>
              <h3 className='Backend-des'>Backend Developer</h3>
              <br></br>

              <h4 className='Backend-Text'>For backend development, I've worked with Node.js and Express to build the server-side of websites. I write the code that processes user requests, handles data, and communicates with the database. These technologies help me create efficient and scalable backend systems that are easy to maintain</h4>
              </div>
              
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
       
          <div className="relative lg:row-span-2" id='Cards'>
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            
              <div className="relative min-h-[30rem] w-full grow">
              <div className='Data-Bases'>
              <img src='https://toppng.com/uploads/preview/database-database-icon-11563207079binxarjjyp.png' className='Data-Base-img'/>  
                <br></br>
              <h3 className='Data-Bases-des'>Data Base</h3>
              <br></br>

              <h4 className='Data-Base-Text'>When it comes to databases, I’ve worked on organizing and storing data for websites. I use databases like PostgreSQL and MongoDB to manage user information and other data. This ensures that data is stored properly and can be accessed quickly when needed</h4>
              </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
           </div>
        </div>
        <div className='Second-Half'>
        <div className='Projects'>
            <h1 className='Projects-title'>My Projects</h1>
            <br></br>
            <div className='project-Cards'>
                {Projects?.map((project)=>{
                   return (
                    <div className='Card-Con'>
                        <a href={project.href}>
                    <img src={project.imageSrc} className={project1Name && projectid == project.id? 'Project-Image-hover' :'Project-Image'} onMouseOver={(e)=>{
                        setproject1Name(true)
                        setprojectid(project.id)
                    }} onMouseLeave={()=>{
                        setprojectid(0)
                        setproject1Name(false)
                    }}/>
                    {project1Name && project.id == projectid ?  <h3 className='Project-title'>{project.hoverName}</h3>: <h3 className='Project-title'>{project.name}</h3>}
                    </a>
                    </div>
                   ) 
                })}
            </div>



            </div>
            <div className='Education'>
            <div className='About-Text'>
            <h1 className='About-me-head'>Education</h1>
            <br></br>
            <h2 className='Edu-Name'>Full-Stack Web development Bootcamp With Meraki Academy (Jul / 2024) - (Dec / 2024)</h2>
            <h2 className='About-me-paragraph'>Completed an intensive 22-week immersive bootcamp focused on modern Full-Stack Development. Gained hands-on
 experience in building dynamic, scalable web applications using HTML, CSS, JavaScript, ReactJS, Redux, Ant Design for the
 frontend, and Node.js with Express for the backend. Worked extensively with PostgreSQL and MongoDB for database
 management, along with Git and GitHub for version control. Additionally, developed skills in Agile methodologies, Scrum
 workflows, API testing with Postman, and deployment using platforms like Netlify.</h2>
            </div>
            <div class="hr-with-content">
            <hr></hr>
            <span>Contact With ME</span>
            </div>
            <div className='Contact-Me'>
                <a href='https://www.linkedin.com/in/ahmednazzall/' className='Contact-Anchor'>
            <FaLinkedinIn className='Email'/>
            </a>
            <a href='mailto:nazzall.ahmed@gmail.com' className='Contact-Anchor'>
            <IoMail className='Email'/>
            </a>
            <a href='tel:+962798546036' className='Contact-Anchor'>
            <FaPhone className='Email'/>
            </a>
            <a href='https://github.com/ahmednazzall' className='Contact-Anchor'>
            <FaGithub className='Email'/>
            </a>
            </div>
            </div>

        </div>
        
        </div>
      
    )
      

}

export default Ahmad