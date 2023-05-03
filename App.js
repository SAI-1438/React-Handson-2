import './App.css';
import React, { useState } from 'react';

function App() {

  const [allFormData, setAllFormData] = useState([]);

  const [formData, setFormData] = useState({
    Name : "",
    Department : "",
    Rating : "",
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value});
  };
  
  return (
    <div className="App">
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form>
        <label><b>Name : </b></label><input type="text" name="Name" value={formData.Name} onChange={handleChange}/><br/><br/>
        <label><b>Department : </b></label><input type="text" name="Department" value={formData.Department} onChange={handleChange}/><br/><br/>
        <label><b>Rating : </b></label><input type="number" name="Rating" value={formData.Rating} onChange={handleChange}/><br/><br/><br/>
        <input type="submit" value="submit" 
          onClick={(e)=>{e.preventDefault(); 
          const Obj = [...allFormData];
          Obj.push(formData);
          setAllFormData(Obj);
        }}
        /><br/>
      </form>
      <br/>
      <div className='mainbox'>
      {allFormData.map((value , index) => {
        return(
            <div className='box' key={index}>
              <b>Name :{value.Name} | Department :{value.Department} | Rating:{value.Rating}</b>
            </div>
        );  
      })}
      </div>
    </div>
  );
}

export default App;
