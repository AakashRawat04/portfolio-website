import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Overlay_right = () => {

	useLayoutEffect(()=>{
		gsap.from(".right_nav", {
			opacity: 0,
			scrollTrigger: {
				trigger: ".allpagecontainer",
				start: "top 40%",
				end: "top top",
				scrub: 0.7,
			}
		})

		gsap.to("#rns1", {
			backgroundColor: "white",
			scrollTrigger: {
				trigger: ".home_section_nav",
				start: "top 40%",
				scrub: 0.1,
			}
		})
		gsap.to("#rns2", {
			backgroundColor: "white",
			scrollTrigger: {
				trigger: ".root_aboutme_section",
				start: "top 40%",
				scrub: 0.1,
			}
		})
		gsap.to("#rns3", {
			backgroundColor: "white",
			scrollTrigger: {
				trigger: ".work_root",
				start: "top 40%",
				scrub: 0.1,
			}
		})
		

	}, [])

	return (
		<div className="overlay_right">
			<div className="right_nav">
				<div className="nav_square" id="rns1"></div>
				<div className="nav_square" id="rns2"></div>
				<div className="nav_square" id="rns3"></div>
			</div>
          </div>
	);
};

export default Overlay_right;
