import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Client from './Client.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import MyCompon from './MyCompon.jsx'
import ColorPicker from './ColorPicker.jsx'
import MyComponent2 from './MyComponent2.jsx'
import MyComponent3 from './MyComponent3.jsx'


function App() {

    return(
        <>
          <Header/>
          <UserGreeting isLoggedIn={true} username="Josiane"/>
          <MyComponent2/>
          <Card/>
          <MyComponent/>
          <Counter/>
          <MyCompon/>
          <ColorPicker/>
          <Food/>
          <List/>
          <MyComponent3/>
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
