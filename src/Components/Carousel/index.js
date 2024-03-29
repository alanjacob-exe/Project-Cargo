import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Picture1 from "../../Photos/landscape1.jpg";
import Picture2 from "../../Photos/landscape2.jpg";
import Picture3 from "../../Photos/landscape3.jpg";
import { Link } from '@mui/material';


const pictureList = [
  { picture: Picture1, alt: "First slide" },
  { picture: Picture2, alt: "Second slide" },
  { picture: Picture3, alt: "Third slide" },
];

function DarkVariantExample() {
  
  return (
    <div>
      <div className="text">
        <div >
          <h2 > Your Next Destination Awaits You!</h2>
        </div>
        <div className="explore">
        <Link href="/track" sx={{color:"#fff",textDecoration:"none",fontWeight:"regular"}} underline="hover">Explore!</Link>
        </div>
      </div>

      <Carousel
        variant="dark"
        controls={false}
        indicators={false}
        fade={true}
        interval={6000}
      >
        {pictureList.map((each) => (
          <Carousel.Item key={each.alt}>
            <img className="img" src={each.picture} alt={each.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
