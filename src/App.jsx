import { createRoot } from "react-dom/client";
import BlackCircle from "./BlackCircle";
import Demotext from "./Demotext";
import IntroText from "./IntroText";

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
