
// for image preview


import React from 'react'
import styled from 'styled-components';

const Modal = ({ slectedImg, setslectedImg }) => {


    const handleClick = (e) => {
        setslectedImg(null);
    }
    return (
        <Container className="backdrop" onClick={handleClick}>
            <img src={slectedImg} alt="preview img" />
        </Container>
    )
}

export default Modal



const Container = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  img{
  display: block;
  max-width: 60%;
  max-height: 80%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px solid white;
  border-radius: 10px;
  }
`