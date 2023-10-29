import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import jsonData from "./data.json";
import Footer from "./components/Footer";
import About from "./components/About";
import BoycottProductList from "./components/Boycott-Product-List";
import BoycottTitle from "./components/Boycott-Title";
import SearchList from "./components/SearchList";

function App() {
  const [data, setData] = useState([]);
  const [map, setMap] = useState([]);

  //todo proxy
  const fetchData = async () => {
    try {
      const res = await fetch("/fetchall");
      return await res.json();
    } catch (e) {
      console.log("Error in getting data from backend....");
    }
  };

  useEffect(() => {
    // todo remove data on destroy todo
    const get = async () => {
      const mongoData = await fetchData();
      if (mongoData && Array.isArray(mongoData)) {
        setData(mongoData);
        localStorage.setItem("data", JSON.stringify(mongoData));
      }
    };

    //todo make data a constant
    var storedData = localStorage.getItem("data");
    if (storedData) {
      try {
        storedData = JSON.parse(storedData);
        if (storedData.length >= 0 && Array.isArray(storedData)) {
          console.log("Setting data from local storage....");
          setData(storedData);
        }
      } catch (e) {
        console.log("Error in getting data from localstorage....");
      }
    }

    try {
      console.log("Getting data from backend...");
      get();
    } catch (e) {
      console.log("Error in getting data from backend....");
    }
  }, []);

  useEffect(() => {
    const hashMap = {};
    data.forEach((categoryData) => {
      const categoryKeyName = categoryData[Object.keys(categoryData)[1]];
      hashMap[categoryKeyName] = categoryData;
      // Note
      // console.log(categoryData[Object.keys(categoryData)[1]]); //name value
      // console.log(categoryData[Object.keys(categoryData)[2]]); // display value
      // console.log(categoryData[Object.keys(categoryData)[0]]); // data value
    });
    setMap(hashMap);
  }, [data]);

  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1 className="main-header">
           قائمة منتجات المقاطعة
          </h1>
        </header>
        <SearchList map={map} />

        <Routes>
          <Route path="/" element={<BoycottTitle data={map} />} />

          <Route
            path="/boycott/:name"
            element={<BoycottProductList map={map} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
