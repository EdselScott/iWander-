import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from "../../Assets/img (1).jpg";
import img2 from "../../Assets/img (2).jpg";
import img3 from "../../Assets/img (3).jpg";
import img4 from "../../Assets/img (4).jpg";
import img5 from "../../Assets/img (5).jpg";
import img6 from "../../Assets/img (6).jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Disneyland",
    location: "Hong Kong",
    grade: "THEME PARK ",
    fees: "₱4500",
    description: "Enjoy the world of Disney. ",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Universal Studio",
    location: "Singapore",
    grade: "THEME PARK ",
    fees: "₱2500",
    description: "Explore what Universal Studio has to offer. ",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Mt. Fuji",
    location: "Japan",
    grade: "TOUR AND ATTRACTION ",
    fees: "₱5000",
    description:
      "One of the sacred places to visit in Japan, the legendary Mt. Fuji. ",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Twin Towers",
    location: "South Korea",
    grade: "TOUR AND ATTRACTION ",
    fees: "₱4500",
    description:
      "The Twin Towers in South Korea where couples lock their love in the peak of the building. ",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Great Wall of China",
    location: "China",
    grade: "TOUR AND ATTRACTION ",
    fees: "₱3500",
    description:
      "The largest man-made monument in the world, The Great Wall of China. ",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Sacred Temple",
    location: "Thailand",
    grade: "CULTURAL RELAX ",
    fees: "₱1500",
    description:
      "Experience the culture in Thailand by visiting their sacred temples. ",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
