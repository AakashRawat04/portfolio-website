import gsap from "gsap";
import Home from "./Home";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import AboutMe from "./AboutMe";
import Work from "./Work";
import  hexalogo  from "./pp_items/hexalogo.svg"

gsap.registerPlugin(ScrollTrigger);


const AllPages = () => {

     useLayoutEffect(()=>{
          gsap.utils.toArray(".section").forEach((container) => {
               ScrollTrigger.create({
                 trigger: container,
                 start: "top top",
                 pin: true,
                 pinSpacing: false,
                 scrub: true
               });
               gsap.from(container.children, {
                    y: 50,
                    opacity: 0,
                    scrollTrigger: {
                      trigger: container,
                      start: "top center",
                      end: "top top",
                      scrub: 1,
                    },
               });
             });

          gsap.from("#hexalogo", {
               opacity: 0,
               scrollTrigger: {
                    trigger: ".overlay_left",
                    start: "top 40%",
                    end: "top top",
                    scrub: 0.7,
               }
          })

          gsap.from([".lefticons", "#lefticonbar"], {
               opacity: 0,
               scrollTrigger: {
                    trigger: ".overlay_left",
                    start: "top 10%",
                    end: "top top",
                    scrub: 0.5,
               }
          })
     }, [])

     const githublink = "https://github.com/tripsterxx"
     const linkedinlink = "https://www.linkedin.com/in/aakash-rawat-a1a528236/"
     const twitterlink = "https://twitter.com/rawatAsh2004"
     const instagramlink = "https://www.instagram.com/rawatash04/"
     
     return(
          <div className="allpagecontainer">
               <Home/>
               <AboutMe/>
               <Work/>

               <div className="overlay_left">
                    <img src={hexalogo} alt="hexalogo" id="hexalogo"></img>

                    <div className="lefticons">
                         <a href={githublink} target="_blank" rel="noreferrer">
                              <img src="./pp_items/lefticons/githublogo.svg" alt="lefticons"></img>
                         </a>
                         <a href={linkedinlink} target="_blank" rel="noreferrer">
                              <img src="./pp_items/lefticons/linkedinlogo.svg" alt="lefticons"></img>
                         </a>
                         <a href={twitterlink} target="_blank" rel="noreferrer">
                              <img src="./pp_items/lefticons/twitterlogo.svg" alt="lefticons"></img>
                         </a>
                         <a href={instagramlink} target="_blank" rel="noreferrer">
                              <img src="./pp_items/lefticons/instagramlogo.svg" alt="lefticons"></img>
                         </a>
                    </div>

                    <div id="lefticonbar"></div>
               </div>
          </div>
     )
}

export default AllPages;