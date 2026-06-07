import { useState } from 'react';
import './Projects.css'
import OneProject from './OneProject';

function Projects(){

const [projects, setProjects] = useState([
    { id: 1, img: "/photos/flowy.png", name: "Flowy", tech: "React,JavaScript,HTML,CSS,Strapi", desc: " SupTaskFlow : Application Kanban Full-Stack développée avec React et Strapi. Gestion dynamique des tâches via Drag & Drop (dnd-kit), authentification sécurisée JWT et API REST optimisée. Focus sur la propreté du code, l'UX réactive et la robustesse technique.", link: "https://github.com/KedyCodeur/Flowy" },
    { id: 2, img: "/photos/cookeur.png", name: "Cookeur", tech: "Python,HTML,Ubuntu", desc: "Development of a Linux system monitoring application in Python 3, generating a static HTML5 report and a near real-time graphical interface using tkinter, relying exclusively on the Python standard library and the /proc and /sys filesystems.", link: "https://github.com/KedyCodeur/Cookeur-System-Monitoring-Application" },
    { id: 3, img: "/photos/sqlProject.png", name: "MySQL-SupSimulation", tech: "MySQL, Python", desc: "SQL database project for a geopolitical simulation game. Includes data modifications (annexations, mergers, independence events) on MySQL's World DB, Merise-based data modeling (MCD/MLD/MPD), and a new 'NewWorld' schema with military/alliance entities. Bonus: World → NewWorld data migration.", link: "https://github.com/KedyCodeur/MySQL-SupSimulation" },
    { id: 4, img: "/photos/lolo.png", name: "Ciné Lolo", tech: "PHP, MySQL, SQL", desc: "Full-stack PHP/SQL movie browsing & purchasing solution. Developed under strict 'JavaScript Prohibited' constraint. Features secure login, persistent cart logic, and advanced relational modeling. SUPINFO 2026.", link: "https://github.com/KedyCodeur/Cine--Lolo-fullstack" },
    { id: 5, img: "/photos/yearbook.png", name: "YearBookCreator", tech: "Python", desc: "Developed a Python tool to generate yearbooks with a cover page, class photo, and individual student pages showing names, surnames, and quotes. Uses Pillow for image resizing, blurring, color or B/W display, and badges for class reps. Modular code with no globals, focused on quality and maintainability.", link: "https://github.com/KedyCodeur/pillowYearbook_Creator" },
    { id: 6, img: "/photos/glpi.png", name: "Cyber-GLPI (PoC)", tech: "GLPI, Windows Server, AD CS, IIS", desc: "School project (SUPINFO Paris): GLPI helpdesk PoC on Windows Server — IIS, HTTPS (AD CS), DNS, GLPI agent auto-deploy on domain join, automated inventory, disk alert tickets & AD domain authentication.", link: "https://github.com/KedyCodeur/Project-Cyber-Glpi" },
    { id: 7, img: "/photos/livcen.png", name: "OmdbApiProjectJs", tech: "HTML, CSS, JavaScript.", desc: "Developed a responsive movie application using HTML, CSS, and JavaScript. Integrated with the OMDb API to display trending movies, perform real-time searches without page reloads, and show detailed movie information including posters, summaries, genres, and cast. Used modular JS files and followed best practices for clean, maintainable code.", link: "https://github.com/KedyCodeur/OmdbApiProjectJs" },
    { id: 8, img: "/photos/felin.png", name: "L-Assosiation-F-lin", tech: "HTML,CSS", desc: "A simple, responsive website for a cat-help organization, built only with HTML and CSS.", link: "https://github.com/KedyCodeur/L-Assosiation-F-lin" },
    { id: 9, img: "/photos/kedybot.png", name: "KedyBot", tech: "Discord.js, Node.js", desc: "Multilingual (TR/FR) Discord bot featuring interactive games like Snake/Duel, robust music playback, and personalized favorite song management for enhanced server engagement.", link: "https://github.com/KedyCodeur/KedyBot" }
]);

function handleChange(indexClicked) {
  const clickedItem = projects[indexClicked];
  const remainingItems = projects.filter((_, idx) => idx !== indexClicked);
  
 
  const newProjects = [
    ...remainingItems.slice(0, 3),
    clickedItem,
    ...remainingItems.slice(3)
  ];
  
  setProjects(newProjects);
}

    return(
        <div className="project">

        {projects.map((project, index) => {
            if (!project) return null; 
            return (
                <OneProject 
                    key={project.id} 
                    project={project} 
                    i={index} 
                    click={handleChange} 
                />
            );
        })}

        


        </div>
    );

}

export default Projects