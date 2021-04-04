import React from "react"
import Accordion from "./components/accordion"
import List from "./components/list"

const Items=[
    {
        titel:"What is React",
        content:"React is a frontend javascript framwork"
    },
    {
        titel:"ankan",
        content:"i am a web developer"
    },
    {
        titel:"rik",
        content:"she is my gf"
    }

]

function App(){
   /* return(
        <div className="ui container">
           <Accordion Items={Items}></Accordion>
        </div>
    );*/
    return(
        <div className="container">
             <List/>
        </div>
    )
}

export default App;