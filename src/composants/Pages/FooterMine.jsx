
import './FooterMine.css'

function FooterMine(){


    return(
        <footer className="footer">

         
            <p className='footerText'>Feedback makes us better. Check out my work on GitHub and let me know what you think!</p>
   
              <div className="footerSocial">
                    <a href="https://www.linkedin.com/in/cemsahozdemirel/" target="_blank" rel="noopener noreferrer" ><img src="/photos/linkedin.png" alt="Linkedin icon" /></a>
                    <a href="https://github.com/KedyCodeur" target="_blank" rel="noopener noreferrer" ><img src="/photos/github.png" alt="Github icon" /></a>
                    <a href="https://cvdesignr.com/p/6910a7cf6ed5d" target="_blank" rel="noopener noreferrer"><img src="/photos/cv.png" alt="Cv icon" /></a>
              </div>
            <p>&copy;KedyCodeur</p>
        </footer>
    );

}

export default FooterMine