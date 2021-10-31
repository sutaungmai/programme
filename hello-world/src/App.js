import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'

function App() {
  return (
    <div className="App">


      <NameList />
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent /> */}

      {/* <EventBind />  */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter></Counter> */}
      {/* <Greet name = "Bruce" heroName = "Batman" >
        <p>This is children props</p>
      </Greet>
      <Greet name = "Clark" heroName = "Superman">
        <button>Action</button>
        <input type="text" />
      </Greet> */}
      {/* <Greet name = "Diana" heroName = "Wonder Women" />

      <Welcome name = "Bruce" heroName = "Batman" >
        <input type="text" />
      </Welcome> */}
      {/* <Welcome name = "Clark" heroName = "Superman" ></Welcome>
      <Welcome name = "Diana" heroName = "Wonder Women" ></Welcome>
      <Message></Message> */}
      {/* <Hello></Hello> */}
      
    </div>
  );
}

export default App;
