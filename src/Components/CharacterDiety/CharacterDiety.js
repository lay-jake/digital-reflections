import React,{useRef, useState,useEffect} from "react";
import { Container, Row,Col } from "react-bootstrap";
import './CharacterDiety.css'



export default function CharacterDiety({characterDieties,selectDiety,selectedDiety}){

  /**
   * Use states to track a few things
   * 
   * Searchfield will be updated as user types into the input box it's used to then filter results
   * SearchShow is a toggle that will display a windowed search box only when user is typing.
   * Focused is a toggle that is checked to display a selectedDiety or allow user to type if changing dieties/searching again
   * dieties is an array of dieties passed by props
   * dimensions  is size of the input field so we can match size with the search field
   * 
   */
    const refContainer = useRef();
    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false); 
    const [focused,setFocus] = useState(false);
    const dieties = characterDieties.dieties;

    const [dimensions, setDimensions] = useState({ width: 0});


  // Check on load to verify comp loaded, if it did we set the width dimension for use later
  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth
      });
    }
  }, []);

    /**
     * Search filters list of gods checking to see if the input box @searchField is contain within the
     * dieties primary, alternate domains, or if it is a partial name match.
     * 
     * @returns Array of Dieties.
     */
    const search = () => {
        const filteredDieties = dieties.results.filter(
          diety => {
            return (
              diety.name.toLowerCase()
              .includes(searchField.toLowerCase()) ||
              diety.system.domains.primary
              .includes(searchField.toLowerCase()) ||
              diety.system.domains.alternate
              .includes(searchField.toLowerCase())
            )
            }
         );
         return filteredDieties
        }

    /**
     * 
     * On selection of input box toggles state
     * 
     */    
    const handleFocus = () => {
      setFocus(true);
    }

        /**
     * 
     * On deselect of input box toggles state
     * 
     */    
    const handleBlur = () => {
      setFocus(false);
    }        

    
    /**
     * 
     * As user types will update State to match input and toggle search results field
     * 
     */    

    const handleChange = e => {
        setSearchField(e.target.value);
        if(e.target.value===""){
            setSearchShow(false);
          }
          else {
            setSearchShow(true);
          }
        };  

    /**
    *    Updates state to name, sends to Redux Store and closes results
    * 
    * @param {*} value - Diety Object that was selected from search results.
    */ 

    const handleClick = (value) =>{
        setSearchField(value.name);
        selectDiety(value);
        setSearchShow(false);
    }    
    
        return(
          <>
          <Container>
            <Row>
               <h2 className="text-center subtitle-text"> Diety </h2>
            </Row>
            <Row>
              <Col xs={2}>
                <h1><i className="fa-solid fa-place-of-worship"></i></h1>
              </Col>
              <Col xs={10} md={{span:8,offset:2}} lg={{span:10,offset:0}}>
            <input className="character-diety-searchbar" 
                   placeholder='Search Dieties or Domains'
                   //value is checked to see if we have a selected diety, if we do and are not typing the field is set to that name, otherwise we clear and use state instead. 
                   value={ (selectedDiety && !focused) ? selectedDiety.name: searchField} 
                   onChange = {handleChange}
                   onFocus={handleFocus}
                   onBlur={handleBlur}
                   ref={refContainer}/>
                   
            {/** the style option here with scroll/height allows for us to create a small viewport for the search results. */}                    
            {searchShow && <div className="character-diet-totalsearchResults" style={{overflowY: 'scroll', height:'50vh'}}>
                {search().map( (diety) =>{
                    

                    //We set the dimenision of the drop down width equal to the refContainer(input fields) width so that they line up
                    document.documentElement.style.setProperty('--my-variable-name',dimensions.width+'px');


                     //we replace the HTML markup in the Diety description because it is just a tooltip
                    const description = diety.system.description.value.replace( /(<([^>]+)>)/ig, '')
                    return(
                    <p className="character-diet-searchResults" title={description} key={diety.name} onClick={ () => handleClick(diety)}>{diety.name}</p>
                    )
                })}
                </div>}	
                </Col>
                </Row>
            </Container>
          </> 
        )
    }
