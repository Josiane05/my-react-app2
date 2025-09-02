import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'


function App() {

    return(
        <>
          <Header/>
          <Card/>
          <Food/>
          <Client name="spongebob" age={30} isClient={true}/>
          <Client name="Claude" age={24} isClient={true}/>
          <Client name="Damour" age={25} isClient={false}/>
          <Client name="Nijojo" age={20} isClient={true}/>
          <Button/>
          <Footer/>
        </>
    );
}

export default App;
