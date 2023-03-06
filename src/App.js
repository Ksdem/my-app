import './App.scss';
import {NavBar} from "./Components/NavBar";
import {Component} from "./Components/Component";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Page} from "./Components/Page/Page";


function App(props) {

    return (<BrowserRouter>

        <div className="App">
            <NavBar/>
            <Component/>
            <Routes>
                <Route path='/' element={<NavBar/>}/>
                <Route path='/page' element={<Page store={props.store}/>}/>

            </Routes>
        </div>

    </BrowserRouter>)

}

export default App;
