import { useState } from "react";
import Header from "./Components/Header/Header";
import BodyContainer from "./Components/BodyContainer/BodyContainer";
import "./Styles/App.css";

function App() {
  const [isNavBarLeftOpened, setIsNavBarLeftOpened] = useState(false);

  return (
    <>
      <Header
        isNavBarLeftOpened={isNavBarLeftOpened}
        setIsNavBarLeftOpened={setIsNavBarLeftOpened}
      />
      <BodyContainer isNavBarLeftOpened={isNavBarLeftOpened} />
    </>
  );
}

export default App;
