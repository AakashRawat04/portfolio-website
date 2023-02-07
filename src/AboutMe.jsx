import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import aboutmepersonlogo from "./pp_items/aboutme/aboutmepersonlogo.svg"
import aboutmebackbox from "./pp_items/aboutme/grayrectanglebox.svg"

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
     
     useEffect(()=>{
               const techstacklist = ["React_JS","Tailwind_CSS","Node_js","Express_JS","Mongo_DB","GSAP","java","python" ]
               techstacklist.forEach((item)=>{
                    const span = document.createElement("span");
                    const skillbox = document.getElementById("skillbox");
                    span.className = "techstacklist";
                    span.innerText = `${item}`;
                    skillbox.appendChild(span);
               })
          },[])

	return (
          
		<div className="section root_aboutme_section">
               <div className="title_heading">
                         <img src={aboutmepersonlogo} alt="aboutme_icon" id="aboutme_icon"></img><span id="aboutmetitle"> About Me</span>
               </div>

               <div id="aboutmeleftside">
                    <img src={aboutmebackbox} alt="aboutmebackbox_icon" id="aboutmebackbox_icon"></img>
                    <div id="aboutme_desc">
                         I&apos;m a Full Stack Web Developer building Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Work section.
                    </div>                    
               </div>

               <div id="aboutmerightside">
                    <div id="aboutmeskillstitle">My Skills</div>
                    <div id="skillbox">
                         
                    </div>

               </div>
               
		</div>
	);
};

export default AboutMe;
