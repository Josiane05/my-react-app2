import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Client from './Client.jsx'


function App() {

    return(
        <>
          <Header/>
          <Card/>
          <Food/>
          <Client name="spongebob" age={30} isStudent={true}/>
          <Footer/>
          <Button/>
        </>
    );
}

export default App;
