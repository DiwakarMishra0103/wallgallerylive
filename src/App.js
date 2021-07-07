import React, { useState, useEffect } from 'react';
import { Heading } from './components/Heading';
import { Home } from './components/Home';
import axios from 'axios';
import styled from 'styled-components';
import Modal from './components/Modal';



const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;





function App() {
  const [slectedImg, setslectedImg] = useState(null);
  const [images, setImage] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      axios
        .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
        .then(res => {
          setImage([...images, ...res.data]);
        })
    }
    fetchImages();
  }, [])


  return (
    <div>
      <Heading />
      <WrapperImages>
        {images.map(image => (
          <Home url={image.urls.regular} key={image.id} setslectedImg={setslectedImg} />
        ))}
      </WrapperImages>
      {slectedImg && <Modal slectedImg={slectedImg} setslectedImg={setslectedImg} />}

    </div>
  );
}

export default App;
