
import { Navbar } from "./components/navbar/navbar";
import { Intro } from "./components/intro/intro";
import { Services } from "./components/service/services";
import { Education } from "./components/Education/Education";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/footer";
import { ThemeContext } from "./Context";
import { useContext } from "react";
import "./App.css"






function App() {
  const theme = useContext(ThemeContext);
  const darkmode =theme.state.darkmode
  return (
    <div className="App" style={{background: darkmode?'#191919': "",
    color:darkmode?'white':''
    
    
    }}>
      <Navbar/>
      <Intro/>
      <Services/>
<Education/>
<Portfolio/>
<Contact/>
<Footer/>

    </div>
  );
}

export default App;
