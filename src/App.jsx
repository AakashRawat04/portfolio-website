import { createRoot } from "react-dom/client";
import BlackCircle from "./BlackCircle";


const App = () => {
  return (
    <div>
      <BlackCircle/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
