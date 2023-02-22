import worklogo from "./pp_items/work/worklogo.svg"

const AboutMe = () => {
     

	return (
          
		<div className="section work_root">
               <div className="title_heading">
                    <img src={worklogo} alt="work_icon" id="work_icon"></img><span id="worktitle"> Work</span>
               </div>

               <div className="root_works">
                    <div className="work">
                         <div className="work_title">Top-Tenner</div>
                         <div className="work_desc">A web-seach website which gives <span className="highlited_features">top 10 results</span> for given keywords.</div>
                    </div>
                    <div className="work">
                         <div className="work_title">Adopt-Me</div>
                         <div className="work_desc">A pet adoption website. Built it when i was <span className="highlited_features">learning react js</span>. </div>
                    </div>
                    <div className="work">
                         <div className="work_title">Tshirt  store API</div>
                         <div className="work_desc">A fully fleged <span className="highlited_features">backend api for tshirt store</span>.</div>
                    </div>
                    <div className="work">
                         <div className="work_title">Discord Bots</div>
                         <div className="work_desc">some discord bots made with <span className="highlited_features">java</span> and <span className="highlited_features">js</span>.</div>
                    </div>

               </div>
               
		</div>
	);
};

export default AboutMe;
