import React, { useEffect, useState } from "react"
import FeatsFilter from "./FeatsFilter";


export default function FeatsLibrary({feats, fetchFeats,selectedClass,selectedAncestry,characterLevel}){

const [selectedFeat,setSelected] = useState([]);
const [knownFeats,setKnownFeats] = useState([])

useEffect( () => {
    //We check to see if we have already loaded feats previous into store by checking length of feats prop.
    //This way if the page rerenders by exiting to overview and coming back it won't rerun the use-effect and call the API again
    if(!feats.length){
    fetchFeats()
    }
},[])


if(feats.length <= 0){
    return(<p>ITS LOADING OKAAAAY!?</p>)
} else {
return(
    <>
    <p>Feats have loaded?</p>
    <FeatsFilter featList={feats} selectedClass={selectedClass} selectedAncestry={selectedAncestry} characterLevel={characterLevel}/>
    </>
)
}}