import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Boxes.css"
import Food1 from "../images/Food1.jpg"; 
import Food2 from "../images/Food2.jpg";
import Food3 from "../images/Food3.jpg";
import Food4 from "../images/Food4.jpg";
import Food5 from "../images/Food5.jpg";

const Pricing = () => {
    useEffect(() => {
        Aos.init({duratiom:7000});
    }, [])
  return (
    <div className="App">
    <h1>Food</h1>
    <div className="grids">
    <div className="boxes">
  <img src={Food1} alt="Food1" />
  </div>
  <div className="boxes">
    <img src={Food2} alt="Food2" />
  </div>
    <div data-aos="fade-up" className="boxes">
    <img src={Food3} alt="Food3" />
    </div> 
    <div data-aos="fade-right" className="boxes">
        <img src={Food4} alt="Food4" />
        </div> 
    <div data-aos="fade-left" className="boxes">
        <img src={Food5} alt="Food5" />
        </div> 
    <div data-aos="flip-left" className="boxes">6</div>  
    <div data-aos="flip-right" className="boxes">7</div>

    </div>
    </div>
  )
}

export default Pricing