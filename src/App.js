import React from 'react';
import { themeClass, exampleStyle } from './styles.css.ts';

function App() {
  return (
    <section className={`${themeClass}`}>
      <h1 className={`${exampleStyle}`}>Hello world!</h1>
    </section>
  );
}

export default App;
