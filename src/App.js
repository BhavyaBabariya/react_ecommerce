import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create context
export const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  // Fetch countries from API
  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      const countryData = res.data.data;

      // Format to extract only country name and cities (optional)
      const formattedCountries = countryData.map(item => ({
        name: item.country,
        cities: item.cities
      }));

      setCountryList(formattedCountries);
      // console.log("Fetched countries:", formattedCountries);
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    }
  };

  // Context value
  const values = {
    countryList
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
