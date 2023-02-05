import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

	return (
		<div className="section">
			<div className="home_section">
                    <div id="hmni">
                    <span id="hi">Hi</span><span>, my name is:</span>
                    </div>
                    <div id="myname">
                         <span id="firstname">Aakash</span><span id="lastname"> Rawat</span>.
                    </div>
                    <div id="lnted">
                    Learning new things everyday
                    </div>
                    
			</div>
		</div>
	);
};

export default Home;
