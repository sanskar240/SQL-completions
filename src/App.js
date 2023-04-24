import CodeDisplay from "./components/CodeDisplay";
import MessagesDisplay from "./components/MessagesDisplay";
import './App.css';
import './backend.js';
const App = () =>{

  const getQuery = async() =>{
    try{

      const options = {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          message:"create a table"
        })
      }
      const response = await fetch("http://localhost:8000/completions",options)
     const data = await response.json
    }
    catch(error){
      console.error(error)
    }
  }
  return (
    <div className = "app">
      <MessagesDisplay/>
      
      <input/>
      <CodeDisplay/>
      <div className = "button-container">
        <button onClick={getQuery} id = "get-query">Get Query</button>
        <button id = "clear-query">Clear Query</button>
      </div>
    </div>
  );
}

export default App;
































