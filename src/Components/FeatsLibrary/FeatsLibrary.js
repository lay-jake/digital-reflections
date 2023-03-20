import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { Loading } from "../Loading/Loading";
import FeatsFilter from "./FeatsFilter";
import './FeatsLibrary.css'
import FeatsModal from "./FeatsModal";


export default function FeatsLibrary({feats, fetchFeats,selectedClass,selectedAncestry,characterLevel,characterStats,selectFeat}){

const [selectedFeat,setSelected] = useState([]);
const [isModalOpen, setIsOpen] = useState(false);

useEffect( () => {
    //We check to see if we have already loaded feats previous into store by checking length of feats prop.
    //This way if the page rerenders by exiting to overview and coming back it won't rerun the use-effect and call the API again
    if(!feats.length){
    fetchFeats()
    }
},[feats.length,fetchFeats])

const handleSelection = (feat) =>{
    setSelected(feat);
    setIsOpen(true)
}

const closeModal = () => {
    setIsOpen(false);
  }


if(feats.length <= 0){
    return(
    <div className={'feats-list-main'}>
        <Loading selectedClass={selectedClass}/>
    </div>
   )
} else {
return(
    <div className={'feats-list-main'}>
    <Row>
        <Col>
           <FeatsFilter featList={feats} 
                        selectedClass={selectedClass} selectedAncestry={selectedAncestry} characterLevel={characterLevel}
                        setSelected={handleSelection} characterStats={characterStats}/>
         </Col>
    </Row>
    {selectedFeat && <FeatsModal selectedFeat={selectedFeat} isOpen={isModalOpen} closeModal={closeModal} selectFeat={selectFeat}/>}
    </div>
)}
}