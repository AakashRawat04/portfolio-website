import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const IntroText2 = () => {
	const introtext2 = useRef();

	useLayoutEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: introtext2.current,
				start: "top 40%",
                    end: "top 0.1%",
				// toggleActions: "restart pause reverse pause",
				scrub: 1.5,
				markers: false,
			},
		}).from(introtext2.current, {
               y: 300,
               scale: 0.5,
               opacity: 0
          }).to(introtext2.current, {
               scale: 2,
               opacity: 1,
          }).to(introtext2.current, {
               scale: 1.9,
               opacity: 0,
          })
	}, []);
	return (
		<div id="ptmy">
			<h1 id="introtext2" ref={introtext2}>
				Pleasure To <br/> &nbsp;Meet You
			</h1>
		</div>
	);
};

export default IntroText2;
