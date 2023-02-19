import gsap from "gsap";
import Home from "./Home";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Overlay from "./overlay";

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
     }, [])
     
     return(
          <div className="allpagecontainer">
          <Home/>
          <AboutMe/>
          <Work/>
          <Overlay/>
          </div>
     )
}

export default AllPages;