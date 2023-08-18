import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';



function Carrossel() {

    return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
          <h4>React-Bootstrap Carousel Component</h4>
          <Carousel>
            <Carousel.Item interval={2500}>
              <img
                className="w-100"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                alt="Image One"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="w-100"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                alt="Image Two"
              />
            </Carousel.Item>
          </Carousel>
          
        </div>
      );

}

export default Carrossel