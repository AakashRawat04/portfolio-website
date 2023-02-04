import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const IntroText =  () => {
     //add scrub in timeline
     return(
          <div id="introtextcontainer">
          <h1 id="introtextHeythere">Hey There!</h1>
          </div>
     )
}

export default IntroText;