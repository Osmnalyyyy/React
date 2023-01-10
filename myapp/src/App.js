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
import Gallery from "./components/09-image/Gallery";
import Image from "./components/09-image/Image";
import ProfileCard from "./components/10-profile-card/ProfileCard";
import BootstrapDinamic from "./components/11-bootstrap/BootstrapDinamic";
import BootstrapStatic from "./components/11-bootstrap/BootstrapStatic";
import Icon from "./components/12-icons/Icon";
import Events from "./components/13-events/Events";
import Shop from "./components/14-products/Shop";

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
      <Products />
      <Clock2 textColor="red" bgColor="yellow" />
      <Image />
      <Gallery />
      <ProfileCard
        avatar="profile.jpg"
        name="Natasha Yulichenco"
        location="Türkiye, Isparta"
        shot="1"
        followers="2"
        following="4"
      />
      <BootstrapStatic />
      <BootstrapDinamic />
      <Icon />
      <Events />*/}
      <Shop />
    </div>
  );
};

export default App;
