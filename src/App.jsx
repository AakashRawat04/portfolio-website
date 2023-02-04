import { createRoot } from "react-dom/client";
import BlackCircle from "./BlackCircle";
import IntroText from "./IntroText";
import Demotext from "./Demotext";

const App = () => {
  return (
    <div>
      <BlackCircle/>
      <IntroText/>
      <Demotext/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
