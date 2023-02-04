import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const IntroText = () => {
	const introtext1 = useRef();
	const introtextcontainer = useRef();
	// const introtext2 = useRef()
	// const introtext3 = useRef()
	//add scrub in timeline
	//use ref
	//use layout effect

	useLayoutEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: introtext1.current,
				start: "top 40%",
                    end: "top 2%",
				// toggleActions: "restart pause reverse pause",
				scrub: 0.7,
				markers: false,
			},
		}).to(introtext1.current, {
               y: -300,
               scale: 1.7,
          }).to(introtext1.current, {
               opacity: 0,
               delay: 2,
               display:"none"
          }).to(introtextcontainer.current, {
               display:"none"
          })
	}, []);
	return (
		<div id="introtextcontainer" ref={introtextcontainer}>
			<h1 id="introtext1" ref={introtext1}>
				Hey There!
			</h1>
		</div>
	);
};

export default IntroText;
