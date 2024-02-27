import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const addPipeBetweenWords = (text) => {
    // Split the text by spaces
    const words = text.split(/\s+/);
    // Join words with "|" symbols, treating words concatenated by "&" as single words
    const result = [];
    let tempWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].endsWith("&")) {
        tempWord += words[i] + " "; // Add space after word ending with "&"
      } else {
        tempWord += words[i];
        if (!words[i + 1] || !words[i + 1].endsWith("&")) {
          // Add "|" only if there is a word after this and it doesn't end with "&"
          result.push(tempWord);
          tempWord = ""; // Reset tempWord
          if (i !== words.length - 1) {
            // Avoid adding pipe after the last word
            result.push(<span className="pipe">|</span>);
          }
        } else {
          tempWord += " "; // Add space between word and "&"
        }
      }
    }
    return result;
  };

  return (
    <div className="container">
      <img src="../logo.png" alt="logo" className="logo" />
      <div className="text-container">
        <img src="../1.png" alt="1" className="image1" />
        <div className="content">
          <h5>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h5>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src="../2.png" alt="2" className="image2"></img>
          <p>
            Government of India has awarded the "
            <strong>National Energy Conservation Award 2018</strong>". Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src="../3.png" alt="3" className="image3"></img>
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
        <hr className="hr-line"></hr>
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p>
          {addPipeBetweenWords(
            "CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL"
          )}
        </p>
        <div className="footer">
          <div className="icon-content">
            <div className="phone-icon">
              <FontAwesomeIcon icon={faPhone} className="icon" />
            </div>
            <p>Toll free 1800 200 1234</p>
          </div>

          <div className="icon-content">
            <div className="facebook-icon">
              <FontAwesomeIcon icon={faFacebookF} className="icon" />
            </div>
            <a
              href="https://www.facebook.com/cripumps"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.facebook.com/cripumps
            </a>
          </div>

          <div className="icon-content">
            <div className="globe-icon">
              <FontAwesomeIcon icon={faGlobe} className="icon" />
            </div>
            <a
              href="https://www.crigroups.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.crigoups.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
