import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Science from "../containers/Science";
import NotFound from "../containers/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Science" element={<Science/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;