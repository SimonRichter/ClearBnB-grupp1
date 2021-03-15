import React, { useContext,useEffect,useRef,useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import ResidenceList from '../components/ResidenceList'
import '../style/Residences.css';

const Residences = (props) => {

  const category = props.location.country;
  const { residences,fetchResidences } = useContext(ResidenceContext);
  const [filteredList, setFilteredList] = useState(null);


  const country = useRef('');
  const city = useRef('');


  const showAll = () => {
    setFilteredList([...residences]);
  }

  const searchFor = (e) => {
    e.preventDefault();

    if (!city.current.value && !country.current.value) { 
      setFilteredList([...residences]);
      return;
    }

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

    console.log('here',country.current.value, city.current.value);
  }

  useEffect(() => {
    fetchResidences().then(r => {
    if (category) {
      const filter = residences.filter(r => r.country === category);
      setFilteredList([...filter]);
    } else {
      setFilteredList([...r]);
    }
    });
  },[])
  
 

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
      {filteredList && <ResidenceList residences={filteredList} />}
      {console.log('times')}
    </div>
  );
}
 
export default Residences;