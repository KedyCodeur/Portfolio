
import './HireMe.css'

function HireMe(){


    return(
        <div className="hireMe">
            
            <div className="center">
            
            <div className="contactText">
                <h2>Contact me</h2>
                <p>Open for internships and collaborations! If you're looking for a dedicated developer to join your project, I’m just one message away.</p>
            </div>
       
            <form action="https://formspree.io/f/mqerapba" method="POST">
                
               
            <div className="double">
                <span className="columner">
                 <label htmlFor="firstName">First name</label>
                 <input type="text" name="firstName" required />
               </span>

               <span className="columner">
                 <label htmlFor="lastName">Last name</label>
                 <input type="text" name="lastName"  required />
               </span>
            </div>

              <span className="columner">
                <label htmlFor="email">Mail</label>
                <input  className='mailInput' type="email" name="email"  required />
               </span>          
            
            <span className="columner">
                <label htmlFor="message">Message</label>
                <textarea name="message"  required></textarea>
            </span>

                <button type="submit">Send</button>
           -
            </form>
            </div>
   
            
        </div>
    );

}

export default HireMe
