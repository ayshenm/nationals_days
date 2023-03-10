
import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
   const[holidays,setHolidays] = useState(data);

   const deleteDate = (id) =>{
    let newDate = holidays.filter((holiday) => holiday.id !== id);
  
   };
  return (
    <main>
      <section className='container'>
        <h3>National Holidays Dates</h3>
        {
          holidays.map((holiday) =>{
            return(
              <div className='holiday' key={holiday.id}>
                <img src={holiday.img} alt = "#"/>

                <div>
                <p>{holiday.title}</p>
                <p>{holiday.date}</p>
                <button onClick={deleteDate}  className='btn'>sil</button>
                </div>
                

              </div>
            )
          })
        }
        <button className='btn2' onClick={() => setHolidays([])}>Clear All</button>

      </section>
      </main>
      
    
  );
}

export default App;
