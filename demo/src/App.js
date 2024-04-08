
import './App.css';
import {Login} from "./pages/Login";
import {Route, Router, Routes} from "react-router-dom";
import {Register} from "./pages/Register";
import {Admin} from "./pages/Admin";
import {Home} from "./pages/Home";

function App() {
  return (
    <>
        <Routes>
            <Route path={''} element={<Login/>}></Route>
            <Route path={'/register'} element={<Register/>}></Route>
            <Route path={'/admin'} element={<Admin/>}>
                <Route path={"/admin/user"}></Route>
            </Route>
            <Route path={'/home'} element={<Home/>}>
                <Route path={"/home/orders"}></Route>
            </Route>
        </Routes>
    </>
  );
}

export default App;
