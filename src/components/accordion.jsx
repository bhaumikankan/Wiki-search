import React ,{useState} from "react"

function Accordion(props){

  const [activeindex,setactiveindex]=useState(null)
  const[count,setCount]=useState(0)
  const handelclick=(index)=>{
    setactiveindex(index)
}
  const oncount=()=>{
      setCount(count+1)
    
  }
    
    const allitem=props.Items.map((item,index)=>{

      const active = index===activeindex?"active":""
          return <div key={item.titel}>
              <div className={"title "+active} onClick={()=>{handelclick(index)}}>
                <i className="dropdown icon"></i>
                {item.titel}
              </div>
              <div className={"content "+active}>
                <p>{item.content}</p>
              </div>
          </div>
      })
    
    return<div className="ui styled accordion ">{allitem}
      <button onClick={oncount} className="ui button">click me</button>
      <p>{count}</p>
    </div>  

}

export default Accordion;