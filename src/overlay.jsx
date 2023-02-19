import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import  hexalogo  from "./pp_items/hexalogo.svg"

gsap.registerPlugin(ScrollTrigger);

const Overlay = () => {

     useLayoutEffect(()=>{
          gsap.from(".overlay", {
               // y: 50,
               x: -100,
               opacity: 0,
               scrollTrigger: {
                    trigger: ".overlay",
                    start: "top center",
                    end: "top top",
                    scrub: 1,
               }
          })
     }, [])
     
     return(
          <div className="overlay">
               <img src={hexalogo} alt="hexalogo" id="hexalogo"></img>

               <div className="lefticons">
                    <img src="./pp_items/lefticons/githublogo.svg" alt="lefticons"></img>
                    <img src="./pp_items/lefticons/linkedinlogo.svg" alt="lefticons"></img>
                    <img src="./pp_items/lefticons/twitterlogo.svg" alt="lefticons"></img>
                    <img src="./pp_items/lefticons/instagramlogo.svg" alt="lefticons"></img>
               </div>
               <div id="lefticonbar"></div>
          </div>
     )
}

export default Overlay;