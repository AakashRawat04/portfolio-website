import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useLayoutEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

const BlackCircle = () => {
	const blackcircle = useRef();
     
	useLayoutEffect(() => {

          gsap.to(blackcircle.current, {scrollTrigger: {
               trigger: blackcircle.current,
               start: "center 49%",
               end: "+=1000",
               scrub: 0.8,
               markers: true
          }, scale: 10} )

	}, []); 

	return(
          <div className="blackcircle" ref={blackcircle}></div>
     )
};

export default BlackCircle;