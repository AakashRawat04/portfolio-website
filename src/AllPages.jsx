import gsap from "gsap";
import Home from "./Home";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import AboutMe from "./AboutMe";
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
                      toggleActions: "play pause reverse reset",
                    },
                  });
             });
     }, [])
     
     return(
          <div className="allpagecontainer">
          <Home/>
          <AboutMe/>
          <Home/>
          </div>
     )
}

export default AllPages;