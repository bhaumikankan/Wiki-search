import React,{useState,useEffect} from "react"
import Ul from "./listitem"
import Axios from "axios"

const List =()=>{
    const [search,setSearch]=useState("programming")
    const[items,setItem]=useState([])
    useEffect(() => {
        if(search!=""){
        Axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${search}`).then((result)=>{
             setItem(result.data.query.search) 
        })}
        
    }, [search])
    
    const list=items.map((item)=>{
        return (
            <li className="list-group-item mb-2 shadow-lg">
                <h1 className="display-4">{item.title}</h1>
                <p className="lead" dangerouslySetInnerHTML={{__html: item.snippet}}></p>
                <a className="btn btn-outline-primary" style={{borderRadius:"25px"}} href={`https://en.wikipedia.org/?curid=${item.pageid}`}>Read more</a>
            </li>
        );
    })
    return(
        <div>
        <h3 className="mt-5 display-3">Search on wiki</h3>
        <input className="form-control shadow" style={{padding:"10px", borderRadius:"5px"}} value={search} onChange={(e)=>{setSearch(e.target.value)}}  placeholder="Search here...."></input>
        <ul className="list-group mt-3 mb-5 ">{list}</ul>
        </div>
    );
}

export default List