import React from 'react'
import { useState } from 'react'
import './App.css'


function Table() {

   const randomData = () =>[
    {id:1,name:"Mitul",course:"Fullstack developer"},
    {id:2,name:"Manoj",course:"Frontend developer"},
    {id:3,name:"Sachin",course:"designer"},
    {id:4,name:"Hiren",course:"graphics designer"},
    {id:5,name:"Sagar",course:"python developer"},
   ]

   const [data, setData] = useState(randomData);

   const[search, setSearch] = useState('');

   const handleSearch = (event) =>{
    setSearch(event.target.value);
   }

   const filterdata = data.filter((row)=>{
    return row.name.toLowerCase().includes(search.toLowerCase()) ||
         row.course.toLowerCase().includes(search.toLowerCase());

   })
  return (
    <div className='app'>
        <h2>Table-data</h2>

        <input 
        type="text" 
        placeholder="Search name or course..." 
        value={search}
        onChange={handleSearch}  
        />

        {/* tb */}
        <table border='1'>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>course</th>
                </tr>
            </thead>
            <tbody>
            {filterdata.map((person)=>(
                <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.course}</td>
                </tr> 
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table