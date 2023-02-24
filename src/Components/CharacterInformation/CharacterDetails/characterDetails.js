import { Container } from 'react-bootstrap'
import './characterDetails.css'

export default function CharacterDetails({hp,ancestry}){


    /**
     * 
     * @param {*} type - text result from AP typically shorthand
     * @returns Returns full verision of the shorthand to be displayed on the sheet
     */
    const renameSize = (type) => { 
        switch(type){
            case 'tiny':
                 return 'Tiny'
            case 'med':
                    return 'Medium'
            case 'sm':
                    return 'Small'     
             default:
                 return null;           
        }
     
    }
     /**
     * 
     * @param {*} type - text result from AP typically shorthand
     * @returns Returns full verision of the shorthand to be displayed on the sheet
     */
    const renameVision = (type) => { 
       switch(type){
            case 'lowLightVision':
                return 'Low Light'
            case 'darkvision':
                return 'Darkvision'
            case 'normal':
                return 'Normal'
            default:
                return null;           
       }
    
    }
    return(
        <>
        <Container>
        <div className="character-details-area">
            
            <div className="character-defensive-ind-box">
                <h5>    <i className="fa-solid fa-heart"></i>  Hit Points</h5>
                <p>{hp}</p>
            </div>

            <div className="character-defensive-ind-box"> 
            <h5>  <i className="fa-solid fa-shoe-prints"></i>  Speed</h5>
                <div>
                    <p className='character-details-speed-ft'>{ancestry.system.speed} ft. </p>
                    <p className='character-details-speed-sq'>( {ancestry.system.speed/5} squares )</p>
                </div>
            </div>

            <div className="character-defensive-ind-box">
                <h5> <i className="fa-solid fa-ruler-combined"></i> Size</h5>
                <p>{renameSize(ancestry.system.size)}</p>
            </div>

            <div className="character-defensive-ind-box">
                <h5>  <i className="fa-solid fa-eye-low-vision"></i> Vision</h5>
                <p>{renameVision(ancestry.system.vision)}</p>
            </div>

            <div className="character-defensive-ind-box">
                <h5> <i className="fa-solid fa-people-pulling"></i> Reach</h5>
                <p>{ancestry.system.reach} ft.</p>
            </div>  
        </div>
        </Container>
        </>
    )
}