import { useState } from 'react';
import './Projects.css'

function Projects(){

    const [projects,setProjects] = useState([
        
    {img:"/photos/sqlProject.png",name :"MySQL-SupSimulation",tech : "MySQL, Python", desc : "SQL database project for a geopolitical simulation game. Includes data modifications (annexations, mergers, independence events) on MySQL's World DB, Merise-based data modeling (MCD/MLD/MPD), and a new 'NewWorld' schema with military/alliance entities. Bonus: World → NewWorld data migration.",link:"https://github.com/KedyCodeur/MySQL-SupSimulation" },
    {img:"/photos/livcen.png",name :"OmdbApiProjectJs",tech : "HTML, CSS, JavaScript.", desc : "Developed a responsive movie application using HTML, CSS, and JavaScript. Integrated with the OMDb API to display trending movies, perform real-time searches without page reloads, and show detailed movie information including posters, summaries, genres, and cast. Used modular JS files and followed best practices for clean, maintainable code.",link:"https://github.com/KedyCodeur/OmdbApiProjectJs" },
    {img:"/photos/yearbook.png",name :"YearBookCreator",tech : "Python", desc : "Developed a Python tool to generate yearbooks with a cover page, class photo, and individual student pages showing names, surnames, and quotes. Uses Pillow for image resizing, blurring, color or B/W display, and badges for class reps. Modular code with no globals, focused on quality and maintainability.",link:"https://github.com/KedyCodeur/pillowYearbook_Creator" },
    {img:"/photos/flowy.png",name :"Flowy",tech : "React,JavaScript,HTML,CSS,Strapi", desc : " SupTaskFlow : Application Kanban Full-Stack développée avec React et Strapi. Gestion dynamique des tâches via Drag & Drop (dnd-kit), authentification sécurisée JWT et API REST optimisée. Focus sur la propreté du code, l'UX réactive et la robustesse technique.",link:"https://github.com/KedyCodeur/Flowy" },
    {img:"/photos/cookeur.png",name :"Cookeur",tech : "Python,HTML,Ubuntu", desc : "Development of a Linux system monitoring application in Python 3, generating a static HTML5 report and a near real-time graphical interface using tkinter, relying exclusively on the Python standard library and the /proc and /sys filesystems.",link:"https://github.com/KedyCodeur/Cookeur-System-Monitoring-Application" },
    {img:"/photos/felin.png",name :"L-Assosiation-F-lin",tech : "HTML,CSS", desc : "A simple, responsive website for a cat-help organization, built only with HTML and CSS.",link:"https://github.com/KedyCodeur/L-Assosiation-F-lin" },

]);
function handleChange(indexClicked) {
  
  const copyProjects = [...projects];


  const [clickedItem] = copyProjects.splice(indexClicked, 1);

  copyProjects.splice(3, 0, clickedItem);


  setProjects(copyProjects);
}
    return(
        <div className="project">

            {projects.map((project,i) => {
                return(

                    <div className="projectCarte" key={i} onClick={()=>{handleChange(i)}}>
                        <img src={project.img} alt="Project Image" className="projectImg" />

                        <div className='projectText' >

                                <p className='projectName'>{project.name}</p>
                                <p className='projectTech'>{project.tech}</p>

                        </div>
                        <div className="backside">
                            <p className='projectDescription'>{project.desc}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='checkButton'>Check it out</a>
                        </div>

                    </div>                    
                );
            })}

        


        </div>
    );

}

export default Projects