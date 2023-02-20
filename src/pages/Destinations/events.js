import React from "react";
import Navbar from "../../Components/Navbar";
import "./event.css";

export default function Events(props) {
  return (
      <div>
        <Navbar/>
      <div className="container">
        <div className="card">
          <h1>Perinthalmanna</h1>
          <img src="https://www.onmanorama.com/content/dam/mm/en/news/kerala/images/2020/1/8/Aerial-View-of-Malappuram-Town.jpg.transform/845x440/image.jpg"></img>
          <div className="text">
            A buzzling town, Perinthalmanna is a municipality in Malappuram
            district, Kerala, India. It serves as the headquarters of the
            Perinthalmanna Taluk. The town is located 23 kilometres southwest to
            the city of Malappuram at the centre of the
            Kozhikode–Malappuram–Perinthalmanna–Palakkad National Highway 966.
          </div>
        </div>

        <div className="card">
          <h1>Kottakal</h1>
          <img src="https://www.onmanorama.com/content/dam/mm/en/news/kerala/images/2020/1/8/Aerial-View-of-Malappuram-Town.jpg.transform/845x440/image.jpg"></img>
          <div className="text">
            A side stop on the way to Tirur, Kottakkal is a municipal town 12 km
            southwet of Malappuram.The town is best known for the Arya Vaidya
            Sala, one of the top Ayurvedic health centres of the world. It's
            just 4.5 km away from Tirur railway station.The National Highway 66
            separates the municipality from Edarikode grama panchayat on some
            parts to the west
          </div>
        </div>

        <div className="card">
          <h1>Manjeri</h1>
          <img src="https://www.onmanorama.com/content/dam/mm/en/news/kerala/images/2020/1/8/Aerial-View-of-Malappuram-Town.jpg.transform/845x440/image.jpg"></img>
          <div className="text">
            A brimming town, Manjeri is also a municipality in Malappuram
            district, Kerala, India. It is the fourth-most populous municipality
            in state. It is situated 23 kilometres southeast to Karipur
            International Airport and 13 kilometres northeast to Malappuram, the
            district headquarters, and forms a part of Malappuram metropolitan
            area
          </div>
        </div>

        <div className="card">
          <h1>Malappuram</h1>
          <img src="https://www.onmanorama.com/content/dam/mm/en/news/kerala/images/2020/1/8/Aerial-View-of-Malappuram-Town.jpg.transform/845x440/image.jpg"></img>
          <div className="text">
            The heart of the district, Malappuram, the fastest growing city in
            the world, is situated 54 km southeast of Calicut and 90 km
            northwest of Palakkad. The first municipality in the district formed
            in 1970, Malappuram serves as the administrative headquarters of
            Malappuram district.
          </div>
        </div>
      </div>
      </div>
  );
}
