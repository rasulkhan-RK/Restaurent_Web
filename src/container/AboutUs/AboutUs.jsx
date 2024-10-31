/* eslint-disable react/no-unescaped-entities */
import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g latter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spaoon" className="spoon__img" />
        <p className="p__opensans">
          we believe that food is more than just a meal it's an experience. Our
          talented chefs use only the freshest ingredients, sourced locally
          whenever possible.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knief flex__center">
        <img src={images.knife} alt="abou_knief" />
      </div>

      <div className="app__aboutus-content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spaoon" className="spoon__img" />
        <p className="p__opensans">
          Over the years GERICHT has evolved while staying true to its roots.
          We've welcomed countless guests who have become part of our story,
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
