
import './Education.css'
import {useRef,useEffect} from 'react'


function Education(){


    return(
       
        <div className="Education">
                <h2>My Education</h2>
                <div className="educationCarte">
                    <div className="educationName">Bachelor en Informatique</div>
                    <div className='sideName'>depuis septrembre 2025 SUPINFO Paris</div>
                </div>
                <div className="educationCarte">
                    <div className="educationName">Certificats du DELF B1 et du DELF B2</div>
                    <div className='sideName'>De mars 2025 à août 2025 EF Paris Paris</div>
                </div>
                <div className="educationCarte">
                    <div className="educationName">Licence d'Économie - Parcours en anglais</div>
                    <div className='sideName'>De septembre 2024 à janvier 2025 Université de MARMARA Istanbul</div>
                </div>
                <div className="educationCarte">
                    <div className="educationName">Baccalauréat Scientifique</div>
                    <div className='sideName'>De 2020 à 2024 Mehmet PISAK Lycée Anatolien Istanbul, IB, Turkey</div>
                </div>
        </div>  
    );

}

export default Education