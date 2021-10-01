import './App.css';
import React,{useState,useEffect} from "react"
import  axios from 'axios';
import List from './Components/List';




function App() {

 async function fetchRandomUser() {
   await axios.get('https://randomuser.me/api/?results=5')
    .then(function ({data}) {
     
      setPeople(data.results)
    })
    .catch(function (error) {
      console.log(error);
    })
    }
 

 useEffect(() => {
   fetchRandomUser();
  
 }, [])


  const [people, setPeople] = useState([]);
  return (
    <main>
    <section className='container'>
      {/* {console.log("peepal",people )} */}
      <List people={people} />
      <button onClick={() => setPeople([])}>clear all</button>
      <button onClick={() => fetchRandomUser()}>Fetch Other Users</button>

    </section>
  </main>
  );
}


export default App;
