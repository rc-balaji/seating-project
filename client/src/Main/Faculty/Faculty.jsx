
import {useState} from 'react'
import Axios from "axios";
import React from "react";
import "./Faculty.css"

const Faculty=()=>{
    const [dep,setDep]=useState('')
    const [depcode,setDepcode]=useState(0)
    const [strenth,setStrenth]=useState(0)
    const [startreg,setStartreg]=useState(0)
    const [subcode,setSubcode]=useState('')
    const [record,setRecord]=useState([])
var add=()=>{
    Axios.post("http://localhost:3001/create", {
        dep : dep,
        depcode:depcode,
        strenth:strenth,
        startreg:startreg,
        subcode:subcode
    }).then(()=>{
        setRecord([
            ...record,
            {
            dep : dep,
            depcode:depcode,
            strenth:strenth,
            startreg:startreg,
            subcode:subcode
        },
    ]);
  });
  console.log('Succees')
};

var show=()=>{
    
    Axios.get("http://localhost:3001/teacher").then((response) => {
      setRecord(response.data);
      //var data=response.data
      
    });
}

const del = (depcode) => {
    Axios.delete(`http://localhost:3001/delete/${depcode}`).then((response) => {
      setRecord(
        record.filter((val) => {
          return val.depcode !== depcode;
        })
      );
    });
  };
    
    return (
        
            <body className="Faculty">
            <Sp/>
            <div className="inp">
                <label>Department:</label>
                <input type="text" onChange={(event)=>{setDep(event.target.value)}}/>
                <label>Department Code:</label>
                <input type="number" onChange={(event)=>{setDepcode(event.target.value)}}/>
                <label>Student's Strenth:</label>
                <input type="number" onChange={(event)=>{setStrenth(event.target.value)}}/>
                <label>Starting Reg:</label>
                <input type="number" onChange={(event)=>{setStartreg(event.target.value)}}/>
                <label>Subject Code:</label>
                <input type="text" onChange={(event)=>{setSubcode(event.target.value)}}/>
                <button onClick={add}>Add</button>
                <br></br>
                <button onClick={show}>show</button>
                <br></br><br></br>
                {
                    record.map((val)=>{
                        return(
                            <div className='details'>
                                <div>
                                <h4>
                                    Department : {val.dep}<br/>
                                    Department Code:{val.depcode}<br/>
                                    Strenth:{val.strenth}<br/>
                                    Starting Reg:{val.startreg}<br/>
                                    Subject Code:{val.subcode}<br/>
                                </h4>
                                </div>
                                <div>
                                    <button id='btn'
                                    onClick={()=>{
                                        del(val.depcode)
                                    }}>
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
       

        </body>
        
    )
}










function Sp(){
    return (
        <div><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br><br></br></div>
    )
}
  
export default Faculty;