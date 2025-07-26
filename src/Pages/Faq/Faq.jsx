import React, {useState} from "react";
import Fade from "react-reveal/Fade";

import './Faq.css'
function Faq() {
  const [Selected,setSelected] = useState(null)
  const toggle = (i) => {
    if(Selected === i) {
      return setSelected(null)
    } 
    setSelected(i)
  }
  const FaqData = [
    {
      Question: "Why should i choose JoyCups",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nobis, omnis doloremque qui blanditiis eveniet minus enim? Cum atque fugit beatae repellat deserunt soluta, quae facilis odit veniam neque!",
    },
    {
      Question: "What are you selling? ",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nobis, omnis doloremque qui blanditiis eveniet minus enim? Cum atque fugit beatae repellat deserunt soluta, quae facilis odit veniam neque!",
    },
    {
      Question: "What does the guarantee cover?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nobis, omnis doloremque qui blanditiis eveniet minus enim? Cum atque fugit beatae repellat deserunt soluta, quae facilis odit veniam neque!",
    },
    {
      Question: "Where can I find you?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nobis, omnis doloremque qui blanditiis eveniet minus enim? Cum atque fugit beatae repellat deserunt soluta, quae facilis odit veniam neque!",
    },
    {
      Question: "How might I get in touch with you?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nobis, omnis doloremque qui blanditiis eveniet minus enim? Cum atque fugit beatae repellat deserunt soluta, quae facilis odit veniam neque!",
    },
    {
      Question: "How do i make purchases",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nobis, omnis doloremque qui blanditiis eveniet minus enim? Cum atque fugit beatae repellat deserunt soluta, quae facilis odit veniam neque!",
    },
    {
      Question: "How do i add my payment methods",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nobis, omnis doloremque qui blanditiis eveniet minus enim? Cum atque fugit beatae repellat deserunt soluta, quae facilis odit veniam neque!",
    },
    {
      Question: "Why is my credit card not working for purchases",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nobis, omnis doloremque qui blanditiis eveniet minus enim? Cum atque fugit beatae repellat deserunt soluta, quae facilis odit veniam neque!",
    },
    {
      Question: "How can i file a complaint",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nobis, omnis doloremque qui blanditiis eveniet minus enim? Cum atque fugit beatae repellat deserunt soluta, quae facilis odit veniam neque!",
    },
    {
      Question: "How long does it take for a refund to be issued",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab nobis, omnis doloremque qui blanditiis eveniet minus enim? Cum atque fugit beatae repellat deserunt soluta, quae facilis odit veniam neque!",
    },
  ];
  return <div className="FaqSection">
    <Fade>
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      
        <div className="Accordion">
          {FaqData.map((item,i) => (
            <Fade bottom>
              <div className="item ">
                 <div className="title" onClick={() => toggle(i)}>{item.Question}<span className="title span">{Selected === i ? "-" : '+'}</span></div>
                 <div className={Selected === i ? "content open" : "content"}>{item.Answer}</div>
              </div>
            </Fade>
          ))}
        </div>
      
    </Fade>
    </div>;
}

export default Faq;
