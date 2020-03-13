import React, { useState, useEffect, useCallback } from 'react';
import './Contact.css';
import './App.css';
import { Contact } from './Contact';
export const App = () => {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [search, setSearch] = useState(false);
  console.log(data);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(responsedata => setFullData(responsedata));
  }, []);

  const onSearch = useCallback(e => {
    const { target: { value } } = e;
    const lowerCaseValue = value.toLowerCase();
    setSearch(!!lowerCaseValue);
    const arrayTmp = fullData.filter(element =>
      element.name.toLowerCase().includes(lowerCaseValue) ||
      element.username.toLowerCase().includes(lowerCaseValue) ||
      element.email.toLowerCase().includes(lowerCaseValue) ||
      element.phone.includes(value)
    );
    setData(arrayTmp);
  }, [fullData]);

  return <header className="App-header"> 
  <div className="contacts">
    <div className="bbbb">
      <h3>Search contact</h3>
      <input onChange={onSearch} />
    </div>
  <Contact data={search ? data : fullData} />
  </div>
  </header>

}
export default App;
