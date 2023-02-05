import { createRoot } from "react-dom/client";
import BlackCircle from "./BlackCircle";
import IntroText from "./IntroText";
import DownArrow from "./DownArrow";
import IntroText2 from "./IntroText2";
import AllPages from "./AllPages";

const App = () => {
  return (
    <div>
     <div className="container">
      <BlackCircle/>
      <IntroText/>
      <DownArrow/>
      <IntroText2/>
      <AllPages/>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
