import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useLayoutEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	const container = useRef();
     
	useLayoutEffect(() => {

	}, []); 

	return(
          <div className="container" ref={container}>

          </div>
     )
};

export default Home;