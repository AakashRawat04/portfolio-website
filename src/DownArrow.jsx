import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const DownArrow = () => {
     const downarrow = useRef();
     
	useLayoutEffect(() => {
          
          // const blackcircle = document.getElementsByClassName(".blackcircle")
          gsap.to(downarrow.current, {scrollTrigger: {
               trigger: downarrow.current,
               start: "top 90%",
               toggleActions:"restart pause reverse pause",
               scrub: true,
               markers: true
          }, opacity: 0, duration: 5} )

	}, []); 

	return (
		<div id="downarrow" ref={downarrow}>
			
			<lottie-player
				src="https://assets7.lottiefiles.com/packages/lf20_vfmyxu76.json"
				background="transparent"
				speed="0.7"
				loop
				autoplay
			></lottie-player>
		</div>
	);
};

export default DownArrow;
