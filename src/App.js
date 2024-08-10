import './App.css';
import Homepage from "./pages/Homepage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Education from "./pages/Education";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import ResponsiveNavBar from "./navbar/ResponsiveNavBar";

function App() {
    return (
        <div className="App">
            <Router>
                <ResponsiveNavBar/>
                <Routes>
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path={"/hakkimizda"} element={<AboutUs/>}/>
                    <Route path={"/egitim"} element={<Education/>}/>
                    <Route path={"/fotograflar"} element={<Photos/>}/>
                    <Route path={"/videolar"} element={<Videos/>}/>
                    <Route path={"/iletisim"} element={<Contact/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
