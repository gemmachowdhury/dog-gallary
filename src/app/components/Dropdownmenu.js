import React from 'react';
import { useState, useEffect } from "react";
import styles from './styles.module.css'


const Dropdownmenu = () => {
  const [data, setData] = useState([]);


  const getDogbreads = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const json = await response.json();
      setData(Object.keys(json.message));
      console.log(Object.keys(json.message))
    } catch (error) {
      console.error(error);
    }
  };
  const [pic, setPic] = useState([]);
  const getDogbreadsPic = async (d) => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${d}/images`);
      const json = await response.json();
      setPic(json.message);
      console.log(json.message)
    } catch (error) {
      console.error(error);
    }
  };



  let [fruit, setFruit] = useState("Select a Dog Bread")

  let handleFruitChange = (e) => {
    setFruit(e.target.value)
    getDogbreadsPic(e.target.value);

  }
  useEffect(() => {
    getDogbreads();


  }, []);
  return (
    <div >
      <div>
        <select className='form-select' onChange={handleFruitChange}>
          <option value="Select a Dog Bread">Select a Dog Bread</option>
          {data.map((d) => <option key={d.id} value={d}>{d} </option>)}
        </select>
      </div>
      < div className={styles.row} >
        {pic.map((p) => (<div key={p.id} className={styles.column} >  <img className="img-thumbnail" src={p} width="200" height="200" /></div>))}
      </div>
    </div>


  );

}
export default Dropdownmenu;
