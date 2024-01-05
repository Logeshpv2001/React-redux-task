import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div>
        <div>
        <Carousel>
      <Carousel.Item style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/Jan/One/Unrec-PC-3000._CB585478602_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item  style={{height:"300px"}}>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/atf/janv7/Makeup-PC._CB585484428_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default UncontrolledExample;