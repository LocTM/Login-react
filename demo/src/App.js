
import './App.css';
import {Login} from "./components/Login";

function App() {
  return (
    <>
        <Login>Login</Login>
        <span>User</span>
        <input type="text" placeholder="user"/>
         <br/>
        <span>Password</span>
        <input type="text" placeholder="password"/>
    </>
  );
}

export default App;
