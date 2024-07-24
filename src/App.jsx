import React from "react";
import { useState } from "react";
import List from "./Listing";
import data from "./data";
function App(){
  const[people, setPeople]= useState(data)
  return(
  <>
  <main>
    <div className="container">
      <h3>{people.length} birthday today</h3>
      <List people={people}/>
      <button onClick={()=>setPeople([])}>Clear all</button>
    </div>
  </main>
  </>
  )
}
export default App