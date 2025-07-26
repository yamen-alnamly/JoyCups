import React , {useState} from "react";
import Fade from "react-reveal/Fade";
import MainPageImg_1 from "../../Images/MainPageImg1.webp";
import MainPageImg_2 from "../../Images/MainPageImg2.jpg";
import MainPageImg_6 from "../../Images/MainPageImg6.jpg";
import MainPageImg_7 from "../../Images/MainPageImg7.jpg";
import "./MainPage.css";
import { Link, useNavigate } from "react-router-dom";
function MainPage() {
 const [name,setName] = useState({userName : ''})
 const [Email,setEmail] = useState({userEmail : ''})
 const submitHandler = e => {
  e.preventDefault()
  alert(`User ${name.userName} , ${Email.userEmail} your message was sent! we'll reply back soon`)
  
}
const navigate = useNavigate()
  return (
    <div className="mainPageBody">
      <div className="heroPage">
        <div className="heroImage">
          <div className="circleImage">
            <div className="CoffeeImage">
              <img
                src={MainPageImg_1}
                alt="coffemug"
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
        <div className="heroText">
          <div>
            <h1>The BEST coffee you've ever had</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              placeat corporis ut nihil cupiditate. Aliquid hic atque,
              laboriosam repellendus alias nulla! Itaque impedit excepturi ut
              eveniet cumque illo quis culpa.
            </p>
          </div>
        </div>
      </div>
      <div className="AboutPage">
        <div className="AboutPageTLine">WHAT WE OFFER ! ?</div>
        <div className="AboutPageFlex">
          <Fade bottom>
            <div className="AboutPageText">
              <h1>About our brand</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, quia necessitatibus amet ab commodi sed facilis
                recusandae rerum dicta autem ducimus nihil, voluptatum minima
                cumque harum accusantium hic excepturi iure, ex est? Assumenda
                illum, eligendi deleniti animi aliquid fugit aperiam sapiente
                perspiciatis quaerat culpa molestiae, consequuntur beatae velit?
                Error, repe Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Perspiciatis, error. Vitae est cumque voluptatum
                necessitatibus tenetur amet quidem earum veritatis nihil,
                praesentium assumenda temporibus reprehenderit blanditiis,
                facilis perspiciatis cupiditate culpa!
              </p>
            </div>
          </Fade>
          <div className="AboutPageImg">
            <img src={MainPageImg_2} alt="coffe" width="350" height="500" />
          </div>
        </div>
      </div>
      <div className="TrendingPage">
        <Fade bottom>
          <div className="TrendingPageTitle">
            <h1>OUR MOST POPULAR ITEMS</h1>
          </div>
          <div className="TrendingPageItems">
            <div className="TrendingItem">
              <div className="TrendingItemImg">
                <img src={MainPageImg_6} alt="Item" width="250" height="350" />
              </div>
              <div className="TrendingItemText">
                <h1 className="TrendingTitle">Latte Coffee</h1>
                <h5>Ingredients:</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  animi architecto numquam repellendus pariatur unde dolore
                  incidunt non.
                </p>
                <h3 className="TrendingPrice">$79.99</h3>
                <button className="TrendingButton">
                  <Link onClick={()=> navigate('/shop')}>GET IT HERE</Link>
                </button>
              </div>
            </div>
            <div className="TrendingItem">
              <div className="TrendingItemImg">
                <img src={MainPageImg_7} alt="Item" width="250" height="350" />
              </div>
              <div className="TrendingItemText">
                <h1 className="TrendingTitle">Black Coffee</h1>
                <h5>Ingredients:</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  animi architecto numquam repellendus pariatur unde dolore
                  incidunt non.
                </p>
                <h3 className="TrendingPrice">$39.99</h3>
                <button className="TrendingButton">
                  <Link onClick={()=> navigate('/shop')}>GET IT HERE</Link>
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="MemberShipPage">
        <Fade bottom>
          <div className="MemberShipPlans">
            <div className="MebmberShipPlan Monthly">
              <h4>Monthly</h4>
              <div className="MemberShipPrice">
                <h1>$1.99</h1>
              </div>
              <h5>benifits:</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                culpa ratione voluptate, optio qui fugiat.
              </p>
              <button className="MemberShipButton">JOIN</button>
            </div>
            <div className="MebmberShipPlan Yearly">
              <h4>YEARLY</h4>
              <div className="MemberShipPrice">
                <h1>$19.99</h1>
              </div>
              <h5>benifits:</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                culpa ratione voluptate, optio qui fugiat.
              </p>
              <button className="MemberShipButton">JOIN</button>
            </div>
            <div className="MebmberShipPlan Premium">
              <h4>PREMIUM</h4>
              <div className="MemberShipPrice">
                <h1>$29.99</h1>
              </div>
              <h5>benifits:</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                culpa ratione voluptate, optio qui fugiat.
              </p>
              <button className="MemberShipButton">JOIN</button>
            </div>
          </div>
        </Fade>
      </div>
      <div className="ContactPage">
        <h1 className="ContactPageTitle">CONTACT US HERE!!!</h1>
        <div className="ContactForm">
          <Fade bottom>
            <form onSubmit={submitHandler}>
              <div className="ContactFormName">
                <label>Your Name : </label>
                <input type="text" placeholder="Enter your name" value={name.userName} onChange={(e)=> setName({...name, userName : e.target.value})}/>
              </div>
              <div className="ContactFormEmail">
                <label>Your Email : </label>
                <input type="email" placeholder="Enter your email" value={Email.userEmail}  onChange={(e)=> setEmail({...Email, userEmail : e.target.value})} />
              </div>
              <textarea cols="30" rows="10" placeholder="Your input"></textarea>
              <input type="submit" className="ContactSubmit"/>
            </form>
          </Fade>
        </div>
      </div>
      <div className="mainShopLink">
        <div className="ShopLink">
          <Fade bottom>
            <div className="ShoplinkFlex">
              <div className="shopLinkText">WANNA TRY OUR COFFEE???</div>
              <div className="shopLinkButton">
                <button>
                  <Link to="/shop">SHOP HERE</Link>
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
