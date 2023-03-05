import { useState } from "react"
import { Container,Col,Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import './NavigationTabs.css'








export default function NavigationTabs(){
    const [currentPage,setCurrentPage] = useState('')

    const handleClick = (clicked) =>{
        setCurrentPage(clicked);
    }

return(
    <>
    <Container  className="nav-link-group">
        <Row xs={5} className='text-center'>
            <Col className={`nav-link-tab  ${currentPage === '/overview'? "active" : ''}`}>
                <Link className={`nav-link-text`} to='/overview' onClick={(e)=> handleClick(e.target.attributes.href.value)}> Character Overview</Link>
            </Col>
            <Col className={`nav-link-tab  ${currentPage === '/feats'? "active" : ''}`}>
                <Link className={`nav-link-text`} onClick={(e)=> handleClick(e.target.attributes.href.value)} to='/feats'> Edit Feats </Link>
            </Col>
            <Col className={`nav-link-tab  ${currentPage === '/spells'? "active" : ''}`}>
                <Link className={`nav-link-text`} onClick={(e)=> handleClick(e.target.attributes.href.value)} to='/spells'> Edit Spells </Link>
            </Col>
            <Col className={`nav-link-tab  ${currentPage === '/equipment'? "active" : ''}`}>
                <Link className={`nav-link-text`} onClick={(e)=> handleClick(e.target.attributes.href.value)} to='/equipment'> Edit Equipment </Link>
            </Col>
            <Col className={`nav-link-tab  ${currentPage === '/notes'? "active" : ''}`}>
                <Link  className={`nav-link-text`} onClick={(e)=> handleClick(e.target.attributes.href.value)} to='/notes'> Edit Notes </Link>
            </Col>
        </Row>
    </Container>    
    </>
)
}