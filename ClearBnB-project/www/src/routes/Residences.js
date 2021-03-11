import React, { useContext,useEffect,useRef,useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import ResidenceList from '../components/ResidenceList'
import '../style/Residences.css';

const Residences = () => {

  const { residences } = useContext(ResidenceContext);
  const [filteredList, setFilteredList] = useState([...residences]);


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
    }
    else if (country.current.value !== '' && city.current.value === '') {
      const filter = residences.filter(r => r.country === country.current.value);
      setFilteredList([...filter]);
    }
    else if (country.current.value === '' && city.current.value !== '') {
      const filter = residences.filter(r => r.city === city.current.value);
      setFilteredList([...filter]);
    }
  }

  useEffect(() => {
    setFilteredList([...residences]);
  },[residences])
  
 

  return (  
    <div className="residences">
      <div className="searchFields">
      <form onSubmit={searchFor}>
        <input ref={country} type="text" placeholder="Search by country.." />
        <input ref={city} type="text" placeholder="Search by city.." />
        <button>Search</button>
      </form>
      <button onClick={showAll}>Show all</button>
      </div>
      <ResidenceList residences={filteredList} />
    </div>
  );
}
 
export default Residences;