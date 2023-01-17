import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-home/header/Header";
import Menu from "./components/00-home/menu/Menu";
import HelloWorld from "./components/01-hello-world/hello-world";
import HelloReact from "./components/02-hello-react/hello-react";
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
import State from "./components/15-useState/State";
import Stateless from "./components/15-useState/Stateless";
import Counter from "./components/16-counter/Counter";
import Birthday from "./components/17-birthday/Birthday";
import UseEffect from "./components/18-useEffect/UseEffect";
import UseEffect1 from "./components/18-useEffect/UseEffect1";
import Clock3 from "./components/19-clock-3/Clock3";
import CountryFilter from "./components/20-country-filter/CountryFilter";
import Scroll from "./components/21-useRef/Scroll";
import UseRef from "./components/21-useRef/UseRef";
import ClassComp from "./components/22-class-type-components/ClassTypeComponent";
import UserCards from "./components/23-fetch-users/UserCards";
import Countries from "./components/24-axios-countries/Countries";
import ParentComp from "./components/25-child-to-parent/ParentComp";
import Form1 from "./components/26-forms/Form1";
import Form2 from "./components/26-forms/Form2";
import Form3 from "./components/26-forms/Form3";
import Form4 from "./components/26-forms/Form4";
import Form5 from "./components/26-forms/Form5";
import Form6 from "./components/26-forms/Form6";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Menu />
          </Col>
          <Col sm={10}>
            <Routes>
              <Route path="/hello-world" element={<HelloWorld />} />
              <Route path="/hello-react" element={<HelloReact />} />
              <Route path="/jsx1" element={<Jsx1 />} />
              <Route path="/jsx2" element={<Jsx2 />} />
              <Route path="/jsx3" element={<Jsx3 />} />
              <Route path="/jsx4" element={<Jsx4 />} />
              <Route path="/jsx5" element={<Jsx5 />} />
            </Routes>
          </Col>
        </Row>
      </Container>
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
      <Events /> 
      <Shop />
      <Stateless />
      <State />
      <Counter />
      <Birthday />
      <UseEffect />
      <Clock3 />
      <UseEffect1 />
      <CountryFilter />
      <UseRef />
      <Scroll />
      <ClassComp />
      <UserCards />
      <Countries />
      <ParentComp />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
      <Form6 />*/}
    </BrowserRouter>
  );
};

export default App;
