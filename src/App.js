import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from './sections/hero';
import Benefits from './sections/benefits';
import Plains from './sections/plains';
import Footer from './sections/Footer';

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
      <Benefits />
      <Plains />
      <Footer />
    </div>
  );
}

export default App;
