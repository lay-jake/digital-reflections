import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {availableImages,loadingQoutes} from '../../Shared/loadingImages';
import './Loading.css'


export const Loading = () => {

    const [image,setImage] = useState('');
    const [qoute,setQoute] = useState('');

    useEffect(() => {
      setImage(availableImages[getRandomValue(availableImages)].image)
      setQoute(loadingQoutes[getRandomValue(loadingQoutes)])
    }, [])
    

    const getRandomValue = (array) => {
        return Math.floor(Math.random() * (array.length))
    }

  return (
    <Container className='loading-area'>
        <Row>
            <Col>
                {/** Add and remove the line: ( "process.env.PUBLIC_URL" + ) as prefix to image load based on deploying to git (known issue) or if running on localhost */}
                <img className= 'img-fluid' src={process.env.PUBLIC_URL + image} alt='loading screen'/>
            </Col>
        </Row>
        <Row xs={1}>
            <Col>
                <h1>{qoute}</h1>
            </Col>
        </Row>
    </Container>
  )
}
