import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Picture1 from "../../Photos/landscape1.jpg";
import Picture2 from "../../Photos/landscape2.jpg";
import Picture3 from "../../Photos/landscape3.jpg";

function DarkVariantExample() {
  return (
    <div>
      <div className="text">
        <h2> Your Next Destination Awaits You!</h2>
      </div>

      <Carousel
        variant="dark"
        controls={false}
        indicators={false}
        fade={true}
        interval={4000}
      >
        <Carousel.Item>
          <img className="img" src={Picture1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={Picture2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={Picture3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
