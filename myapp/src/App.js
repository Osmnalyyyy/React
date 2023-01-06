import HelloWorld from "./components/01-hello-world/hello-world";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/Jsx6";
import Style1 from "./components/04-styles/Style1";
import Style2 from "./components/04-styles/Style2";
import Style3 from "./components/04-styles/Style3";
import Style4 from "./components/04-styles/Style4";
import Clock1 from "./components/05-clock-1/Clock1";
import Greetings from "./components/06-props/Greetings";
import Products from "./components/07-props/Products";
import Clock2 from "./components/08-clock-2/Clock2";

const App = () => {
  return (
    <div>
      {/*  
      <HelloWorld />
      <Jsx1 />
      <Jsx2 />       
      <Jsx3 />
      <Jsx4 />
      <Jsx5 />
      <Jsx6 />
      <Style1 />
      <Style2 />
      <Style3 />
      <Style4 />
      <Clock1 />
      <Greetings />
      <Products />*/}
      <Clock2 textColor="red" bgColor="yellow" />
    </div>
  );
};

export default App;
