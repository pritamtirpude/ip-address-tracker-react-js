import InputComponent from "./components/InputComponent";
import MapComponent from "./components/MapComponent";
import DisplayComponent from "./components/DisplayComponent";
import { IPProvider } from "./context/IPContext";

function App() {
  return (
    <IPProvider>
      <InputComponent />
      <DisplayComponent />
      <MapComponent />
    </IPProvider>
  );
}

export default App;
