import React, { useContext,useRef,useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import ResidenceList from '../components/ResidenceList'
import '../style/Residences.css';

const Residences = () => {

  const { residences } = useContext(ResidenceContext);
  const [filteredList, setFilteredList] = useState([...residences]);
  const [searchCountry, setSearchCountry] = useState(null);
  const [searchCity, setSearchCity] = useState(null);


  const country = useRef();
  const city = useRef();


  const showAll = () => {
    setFilteredList([...residences]);
  }

  const searchFor = (e) => {
    e.preventDefault();
    if (city.current.value !== '' && country.current.value !== '') {
      const filter = residences.filter(r => r.country === country.current.value &&
      r.city === city.current.value);
      setFilteredList([...filter]);
      return;
    }
  }
 

  return (  
    <div className="residences">
      <form onSubmit={searchFor}>
        <input ref={country} type="text" placeholder="Search by country.." />
        <input ref={city} type="text" placeholder="Search by city.." />
        <button>Search</button>
      </form>
      <button onClick={showAll}>Show all</button>
      <ResidenceList residences={filteredList} />
    </div>
  );
}
 
export default Residences;