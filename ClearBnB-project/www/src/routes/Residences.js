import React, { useContext,useRef,useState } from 'react';
import { ResidenceContext } from '../contexts/ResidenceContextProvider';
import ResidenceList from '../components/ResidenceList'

const Residences = () => {

  const { residences } = useContext(ResidenceContext);
  const [filteredList, setFilteredList] = useState([...residences]);
  const [search, setSearch] = useState(null);

  const test = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      setFilteredList([...residences]);
      return;
    }
    const filter = residences.filter(r => r.country.includes(search));
    console.log(filter);
    setFilteredList([...filter]);
  }

  return (  
    <div className="residences">
      <input onChange={test} type="text" placeholder="Search by country.." />
      <ResidenceList residences={filteredList} />
    </div>
  );
}
 
export default Residences;