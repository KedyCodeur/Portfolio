
import './Education.css'
import {useRef,useEffect} from 'react'


function Education(){


    return(
       
        <div className="Education">
                <h2>My Education</h2>
                <div className="educationCarte">
                    <div className="educationName">Bachelor of Science in Computer Science</div>
                    <div className='sideName'>Since September 2025 – SUPINFO Paris</div>
                </div>
                <div className="educationCarte">
                    <div className="educationName">DELF B1 & DELF B2 Language Certificates</div>
                    <div className='sideName'>March 2025 – August 2025 – EF Paris, France</div>
                </div>
                <div className="educationCarte">
                    <div className="educationName">Bachelor’s Degree in Economics (English Track)</div>
                    <div className='sideName'>September 2024 – January 2025 – Marmara University, Istanbul</div>
                </div>
                <div className="educationCarte">
                    <div className="educationName">High School Diploma (Science Stream)</div>
                    <div className='sideName'>2020 – 2024 – Mehmet Pisak Anatolian High School, Istanbul, Turkey</div>
                </div>
        </div>  
    );

}

export default Education