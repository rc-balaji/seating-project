import Axios from "axios";
import './Students.css'
import { useState } from "react";
import React from "react";
import Table from "./Table"


const Student=()=>{
 
    const[t,setT]=useState([<div ></div>])
    
    const[p,setP]=useState(
       {
        hallno:'----',
        regno:'----', 
        seatno:'----',
        subcode:'----',
        datesession:'----'
        }
) 
    const [temp,setTemp]=useState(
        {
        hallno:"---",
        regno:'', 
        seatno:0,
        subcode:''
        })

    const [data,setData]=useState([
            {
            hallno:0,
            regno:'', 
            seatno:0,
            subcode:'',
            datesession:''
            }
    ])
    var [lim,setLim]=useState(1)
    const get=()=>{
     
        
        setLim(lim+1)
        console.log(lim)
        if(lim>1){
            alert("Alredy Started")
        }else{
            alert("Started")
            Axios.get("http://localhost:3001/seatdb").then((response) => {
                setData(response.data)
        });
    } } 
    const [reg,setReg]=useState('')
    function sub(){

        if(data[0].seatno===0){
            alert("Click the Start Button!!!!")
        }else{
        var t=""
        console.log(data)
        for(let i=0;i<data.length;i++)
        {
                if(data[i]['regno']===reg)
                {
                    t+=(`Date/Session : ${data[i].datesession}\nHall No      : ${data[i]['hallno']}\nSeat NO      : ${data[i]['seatno']}\nSub Code     : ${data[i]['subcode']}\nReg No       : ${data[i]['regno']}`)
                    
                   setP(
                    {
                    hallno:data[i]['hallno'],
                    regno:data[i]['regno'], 
                    seatno:data[i]['seatno'],
                    subcode:data[i]['subcode'],
                    datesession:data[i].datesession
                    }
            )
                    
                    setTemp(data[i])
                    break
                }  
        }
        if(t==="")
        {
            alert('Not Found')
        }
        else{
            alert(t)
        }
    }
      }
      function Detail(){
        return(<div class="detail">
            <div className="head"><p>SEATING ALLOTMENT  DETAILS</p></div>
                <p>DATE/SESSION :{p.datesession}</p>
                <p>HALL NO      :{p.hallno}</p>
                <p>SEAT NO      :{p.seatno}</p>
                <p>SUB CODE     :{p.subcode}</p>
                <p>REG NO       :{p.regno}</p>
                <p>HALL No:{temp.hallno}</p>
        </div>)
      }
    

    return(
        
      
            <body className="page">
                <div className="content">
                <button  id='get-btn' onClick={get}>Start</button>
                <div className="header-text"> Student's Seating </div>
                <h2>Enter register number  </h2>
                <input id='ip' placeholder='Eg.71072120000' 
                onChange={(event)=>{
                    setReg(event.target.value)
                }}
                ></input>
                <br></br>
                <button  id='sub-btn'onClick={sub}>Submit</button> 
                <button  id='sub-btn'onClick={()=>{
                    setT([<div className="visually">
                        <Detail/>
                        <Table value={temp}/>
                    </div>])

                }}>Show Visually</button> 
                {t.map((e)=>{
                    return(
                        <div>{e}</div>
                    )
                })}
            </div>
</body>

        
        
      )


}

export default Student


