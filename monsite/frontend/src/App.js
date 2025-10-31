
    import React from "react";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import Home from "./Pages/Home";
    import Catalogue from "./Pages/Catalogue";

    const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
        </Router>
    );
    };

    export default App;
