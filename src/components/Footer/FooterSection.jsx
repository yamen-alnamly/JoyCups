import React from "react";
import { Link } from "react-router-dom";
import Icon_1 from "../../Images/Icon1.png";
import Icon_2 from "../../Images/Icon2.png";
import Icon_3 from "../../Images/Icon3.png";
import Icon_4 from "../../Images/Icon4.png";
import "./FooterSection.css"
export const FooterSection = () => {
  return (
    <div className="Footer">
      <div className="FooterItems">
        <div className="FooterTags">
          <p>
              <Link to="/shop">#SHOP</Link>
          </p>
          <p>
              <Link to="/cart">#YOUR ORDER</Link>
          </p>
          <p>
              <Link to="/faq">#FAQ</Link>
          </p>
          <p>#Coffee</p>
          <p>#CoffeeShop</p>
          <p>#CoffeeLover</p>
          <p>#JoyCups</p>
        </div>
        <div className="FooterLinks">
          <a href="https://www.linkedin.com/in/yamen-alnamly-420411265/">
           <p>LinkedIN</p> <img src={Icon_1} alt="linkedin" width="42" height="42" />
          </a>
          <a href="https://t.co/qxfkU29Gxn">
            <p>Instagram</p> <img src={Icon_2} alt="Instagram" width="42" height="42" />
          </a>
          <a href="https://github.com/yamen-alnamly">
            <p>GitHub</p> <img src={Icon_3} alt="Github" width="42" height="42" />
          </a>
          <a href="https://t.co/3vOa7rduSP">
            <p>Facebook </p> <img src={Icon_4} alt="Facebook" width="42" height="42" />
          </a>
        </div>
        <div className="FooterCprt">
          Photo by{" "}
          <a href="https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Nathan Dumlao
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/flat-lay-photography-of-eight-coffee-latte-in-mugs-on-round-table-pMW4jzELQCw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          <p>Website design and code by <a href="https://www.linkedin.com/in/yamen-alnamly-420411265/">Yamen Alnamly©</a></p>
        </div>
      </div>
    </div>
  );
};
