
import React from 'react'

const OneProject = ({ project, i, click ,}) => {

  return (
        <div className="projectCarte"  onClick={() => click(i)} >
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
  )
}

export default OneProject