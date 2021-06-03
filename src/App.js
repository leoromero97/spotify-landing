import React, { useState } from "react";
import Hero from './sections/hero';
import Navbar from "./components/navbar";

import './styles/main.css';

function App() {
  const [visible, setVisible] = useState(false);

  const open = (visible) => {
    setVisible(true);
  }

  const close = (visible) => {
    setVisible(false);
  }

  return (
    <div className="App">
      <Navbar onOpen={open} visible={visible} onclose={close} />
      <Hero />
    </div>
  );
}

export default App;
