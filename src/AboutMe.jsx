import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutmepersonlogo from "./pp_items/aboutme/aboutmepersonlogo.svg"
import aboutmebackbox from "./pp_items/aboutme/aboutmebackbox.svg"

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {

	return (
		<div className="section root_aboutme_section">
               <div className="title_heading">
                         <img src={aboutmepersonlogo} alt="aboutme_icon" id="aboutme_icon"></img><span id="aboutmetitle"> About Me</span>
                    </div>
			<div className="aboutme_section">
                    
               <img src={aboutmebackbox} alt="aboutmebackbox_icon" id="aboutmebackbox_icon"></img>
                    <div id="aboutme_desc">
                    I&apos;m a Full Stack Web Developer building Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Work section.
                    </div>                    
			</div>
		</div>
	);
};

export default AboutMe;
