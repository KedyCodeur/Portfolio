import './Header.css'
import {useRef} from 'react'
function Header(){

    const headerSide = useRef(null);
    return(
        <>

        
        <div className="header">
            <h1><a href="#" className='titleHeader'>Kedy</a></h1>
            <div className="navs">
                
                <a href="#about">About me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <span className='containerSpan'  onClick={(e) =>{
                     e.currentTarget.classList.toggle("clicked");
                    headerSide.current.classList.toggle("showYourSelf")
                }}>
                    <span className="line"></span><span className="line"></span><span className="line"></span>

                </span>  
            </div>
         
        </div>       
           <div className="headerSide" ref={headerSide}>
                <a href="#about">About me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>   
       
        
        </>
        
        
    );
}

export default Header