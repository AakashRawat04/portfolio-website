import { createRoot } from "react-dom/client";
import BlackCircle from "./BlackCircle";
import Demotext from "./Demotext";
import IntroText from "./IntroText";
import DownArrow from "./DownArrow";

const App = () => {
  return (
    <div>
      <BlackCircle/>
      <IntroText/>
      <Demotext/>
      <DownArrow/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
