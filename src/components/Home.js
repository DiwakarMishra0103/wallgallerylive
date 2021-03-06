// for Image Gallery


import React from 'react';
import styled from 'styled-components';


const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  transition: opacity 500ms ease-in-out 0s;
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  
 &:hover{
    transform: scale(1.05);
    transition-duration: 0.5s;
    
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      border: 3px solid rgba(249, 249, 249, 0.1);
  }
`




export const Home = ({ url, id, setslectedImg }) => {
    return (
        <>
            <div style={{ margin: "10px 10px ", }} onClick={() => setslectedImg(url)}>
                <Img key={id} src={url} alt="images" />
            </div>
        </>
    )
}
