
import './Skills.css'
import { useEffect } from 'react';

function Skills(){

useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });


    const allEffects = document.querySelectorAll('.efect');
    allEffects.forEach(effect => observer.observe(effect));

    return () => observer.disconnect();
}, []);

    return(
       
        <div className="skillsPage" >
            <div className="idk">
                <div className="slider1">
                    <div className="box"><img src="./photos/csharp.png" alt="C# Icon"/></div>
                    <div className="box"><img src="./photos/html.png" alt="HTML Icon"/></div>
                    <div className="box"><img src="./photos/css.png" alt="CSS Icon"/></div>
                    <div className="box"><img src="./photos/js.png" alt="JavaScript Icon"/></div>
                    <div className="box"><img src="./photos/react.png" alt="React Icon"/></div>
                    <div className="box"><img src="./photos/python.png" alt="Python Icon"/></div>
                    <div className="box"><img src="./photos/php.png" alt="Php Icon"/></div>
                    <div className="box"><img src="./photos/mysql.png" alt="MySQL Icon"/></div>
                    <div className="box"><img src="./photos/git.png" alt="git Icon"/></div>
                    <div className="box"><img src="./photos/githubC.png" alt="github Icon"/></div>
                    <div className="box"><img src="./photos/vscode.png" alt="Vs Code Icon"/></div>
                    <div className="box"><img src="./photos/vsstudio.png" alt="Vs Studio Icon"/></div>
                    <div className="box"><img src="./photos/ubuntu.png" alt="Ubuntu  Icon"/></div>
                    <div className="box"><img src="./photos/strapi.png" alt="Strapi Icon"/></div>
                    <div className="box"><img src="./photos/java.png" alt="Java Icon"/></div>
                    <div className="box"><img src="./photos/node.png" alt="Node Icon"/></div>
                    <div className="box"><img src="./photos/reactNative.png" alt="reactNative Icon"/></div>
                    <div className="box"><img src="./photos/expressJS.png" alt="expressJS Icon"/></div>
             


                    <div className="box"><img src="./photos/csharp.png" alt="C# Icon"/></div>
                    <div className="box"><img src="./photos/html.png" alt="HTML Icon"/></div>
                    <div className="box"><img src="./photos/css.png" alt="CSS Icon"/></div>
                    <div className="box"><img src="./photos/js.png" alt="JavaScript Icon"/></div>
                    <div className="box"><img src="./photos/react.png" alt="React Icon"/></div>
                    <div className="box"><img src="./photos/python.png" alt="Python Icon"/></div>
                    <div className="box"><img src="./photos/php.png" alt="Php Icon"/></div>
                    <div className="box"><img src="./photos/mysql.png" alt="MySQL Icon"/></div>
                    <div className="box"><img src="./photos/git.png" alt="git Icon"/></div>
                    <div className="box"><img src="./photos/githubC.png" alt="github Icon"/></div>
                    <div className="box"><img src="./photos/vscode.png" alt="Vs Code Icon"/></div>
                    <div className="box"><img src="./photos/vsstudio.png" alt="Vs Studio Icon"/></div>
                    <div className="box"><img src="./photos/ubuntu.png" alt="Ubuntu  Icon"/></div>
                    <div className="box"><img src="./photos/strapi.png" alt="Strapi Icon"/></div>
                    <div className="box"><img src="./photos/java.png" alt="Java Icon"/></div>
                    <div className="box"><img src="./photos/node.png" alt="Node Icon"/></div>
                    <div className="box"><img src="./photos/reactNative.png" alt="reactNative Icon"/></div>
                    <div className="box"><img src="./photos/expressJS.png" alt="expressJS Icon"/></div>


                </div>
            </div>

            <h2 className='skillTitle'>My Skills</h2>
            
            <div className="allSkills">

                <div className="skillContainer">
                    <p className='skillname'>JavaScript</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"85%"}}>
                            <div className="efect" ></div>
                        </div>
                    </div>
                </div>
    
                <div className="skillContainer">
                    <p className='skillname'>C#</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"40%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>VMware</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"65%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>React / Vite</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"75%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>HTML</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"80%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>VS code</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"85%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>React Native / Expo</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"45%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>CSS</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"85%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>


                <div className="skillContainer">
                    <p className='skillname'>PhpMyAdmin</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"55%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>
        
                <div className="skillContainer">
                    <p className='skillname'>Node Js / Express.js</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"75%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

      
                <div className="skillContainer">
                    <p className='skillname'>REST API</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"70%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>Kanban</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"55%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>Java</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"60%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>


                <div className="skillContainer">
                    <p className='skillname'>JWT</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"70%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>


                <div className="skillContainer">
                    <p className='skillname'>Unity</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"40%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>Python</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"75%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>Axios</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"60%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>Linux / Ubuntu</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"80%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>


                <div className="skillContainer">
                    <p className='skillname'>Php</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"65%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>Three.js</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"45%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

                <div className="skillContainer">
                    <p className='skillname'>Github</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"55%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>


                <div className="skillContainer">
                    <p className='skillname'>SQL (MySQL)</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"70%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>
                <div className="skillContainer">
                    <p className='skillname'>Git</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"65%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>


                <div className="skillContainer">
                    <p className='skillname'>Merise</p>
                    <div className="bars">
                        <div className="barWhite"></div>
                        <div className="barMastery" style={{width:"50%"}}>
                             <div className="efect" ></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>  
    );

}

export default Skills