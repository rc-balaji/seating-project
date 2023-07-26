import Axios from "axios";
import './Admin.css'
import { useState } from "react";
import React from "react";
import { utils, writeFile } from 'xlsx';


  

const Admin=()=>{
    const [date,setDate]=useState("")
    const [session,setSession]=useState("")

    const [data,setData]=useState([
            {
                depcode: 0, 
                dep: '', 
                strenth: 0, 
                startreg: '', 
                subcode: ''}
    ])
    var [lim,setLim]=useState(1)
    const get=()=>{
     
        
        setLim(lim+1)
        console.log(lim)
        if(lim>1){
            alert("Alredy Started")
        }else{
            alert("Started")
         Axios.get("http://localhost:3001/teacher").then((response) => {
            setData(response.data)
        });
    } }

    var sub=[]
    var start=[]
    var hall=[]
    var seatarr=[]
    var sam=[]
    for(let i=0;i<data.length;i++)
    {
        sub.push(data[i].subcode)
        start.push(parseInt(data[i].startreg))
    }
    var n=sub.length
    var ob=[]
  

function sethall() {
    if(hall.length!==n){
        alert("Insufficiant Halls")
    }
    else{
    console.log(hall)
    function spl(a){

        let l=a.length
        var h=Math.trunc(l/2)
        let i=0
        let t1=[]
        let t2=[]
        while(i<l)
        {
            if(i<h)
            {
            t1.push(a[i])   
            }       
            else{
            t2.push(a[i]) 
            }
                
            i++
        }
        return ([t1,t2])
    }


    function ar(ob)
    {
        let roll2=[]
        let lob=ob.length
        for(let i=0;i<lob;i++)
        {
            roll2.push(spl(ob[i].roll)) 
        }
        let s1=[]
        for(let i=0;i<lob;i++)
        {
            let a=[]
            for(let j=0;j<2;j++)
            {
                if(j===0)
                {
                    a.push(i)
                }
                else{
                    if(i===(lob-1))
                    {
                        a.push(0)
                    }
                    else{
                        a.push((i+1))
                    }
                }  
            }
            s1.push(a)
        }
        var s2=[]
        s2.push([0,0])
        for(let i=0;i<lob-2;i++)
        {
        s2.push([1,0]) 
        }
        s2.push([1,1])
        for(let i=0;i<lob;i++)
        {
            let b=[]
            for(let j=0;j<2;j++)
            {
                b.push(roll2[s1[i][j]][s2[i][j]])
            }
        seatarr.push(b)
        }
    }


    class arr
    {
        constructor()
        {
            this.sub=""
            this.roll=[]
            this.max=0
            this.sub=""
            this.start=0
        }
        inp()
        {
        this.max=30
        for(let i=0;i<this.max;i++)
        {
            this.roll.push({"Date/Session":'',"Hall No":0,"Seat NO":0, "Subject Code":this.sub , "Register No":""+(this.start+i)})
        }
        }
    }


    function a(s){

        let i=0
        let j=0
        let t=1
        let so=s[0]
        let st=s[1]
        let b=[]
        while(i!==15 && j!==15 && t!==30)
        {
            for(let k=0;k<6;k++)
            {
                for(let l=0;l<5;l++)
                {
                    if((k+l)%2===0)
                    {
                    so[i]["Seat NO"]=t
                        b.push(so[i])
                        i++
                        t++
                        }
                    else{

                        st[j]["Seat NO"]=t
                        b.push(st[j])
                        j++
                        t++  
                    }
                }
            }
        }
        sam.push(b)  
    }
    
    for(let i=0;i<n;i++)
    {
        ob.push(new arr())
        ob[i].sub=sub[i]
        ob[i].start=start[i]
        ob[i].inp()
    }
    ar(ob)
    for(let i=0;i<n;i++)
    {
        a(seatarr[i])
    }
        
    for(let i=0;i<sam.length;i++)
    {
        for(let j=0;j<sam[0].length;j++)
        {   
            sam[i][j]['Hall No']=hall[i]
            sam[i][j]['Date/Session']=`${date}/${session}`
        }         
    
    }
    alert("Seat Alerted") 
}}


var [limit,setLimit]=useState(1)
    var store=()=>{
        setLimit(limit+1)
        if(limit>1){
            alert("Alredy Stored")
        }else{
        if(hall.length!==n){
            alert("Insufficiant Seating")
        }
        else{
            
        console.log(sam[0][0]['Date/Session'])
        for(let i=0;i<sam.length;i++)
        {
            for(let j=0;j<sam[i].length;j++){

            Axios.post("http://localhost:3001/store", {
            hallno:sam[i][j]['Hall No'],
            regno:sam[i][j]['Register No'],
            seatno:sam[i][j]['Seat NO'],
            subcode:sam[i][j]['Subject Code'],
            datesession:sam[i][j]['Date/Session']
        }).then(()=>{
            console.log("Success")
            
      });
    }    
    };
    alert("Stored Successfully!!!")}
     }
    }
    
    function addItem(){
        if(data[0].depcode===0){
            alert("Click the Start Button!!!!")
        }
        //console.log(hall.includes(document.getElementById("candidate").value))
        //console.log(document.getElementById("candidate")).value)
    else if(document.getElementById("candidate").value===""){
        alert("Not to be Empty!!!")
    }
    else if(hall.length>=n || data[0].depcode===0){
        alert("Reached Maximum")
    }else if(hall.includes(document.getElementById("candidate").value)){
        alert("Alredy Exist!!!")
    }
    else{
        var ul = document.getElementById("dynamic-list");
        var candidate = document.getElementById("candidate");
        hall.push(candidate.value)
        
        var li = document.createElement("li");
        li.setAttribute('id',candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        ul.appendChild(li);}
    }

    function removeItem(){
        if(hall.includes(document.getElementById("candidate").value)){
            var ul = document.getElementById("dynamic-list");
            var candidate = document.getElementById("candidate");
            var item = document.getElementById(candidate.value);
            ul.removeChild(item);
            hall.pop(candidate.value)
        }else{
            alert("Not Found!!!")
        }
        
    }



 console.log(data)
 console.log(sam)
 console.log(date)
 console.log(session)

  
    function handleDownload() {
        console.log(sam)
        const workbook = utils.book_new();
        for(let i=0;i<sam.length;i++){
      const worksheet = utils.json_to_sheet(sam[i]);
      utils.book_append_sheet(workbook, worksheet, "Hall No "+(hall[i]));
      
    }
    let filename=`Seat_${date}_${session}.xlsx`
    writeFile(workbook, filename);}
    console.log()
  
  
      return(
        
      <div className="fun-list" >
        
        
        <div className="contain">
            <button className="start-button" onClick={get}>Start</button>
            <div className="date-com">
            <input className="date" type="date" id="date" onChange={(event)=>{
                setDate(event.target.value)
            }}  />
            <select className="com" name="session" id="session" onChange={(event)=>{
                setSession(event.target.value)
            }} >
                <option value="FN">FN</option>
                <option value="AN">AN</option>
            </select></div>
            <input className="item" type="text" id="candidate"/>
            <div className="ads">
            <button className="additem" onClick={addItem}>ADD</button>
            <button className="removeitem" onClick={removeItem}>REMOVE</button></div>
            {/* <button onClick={show}>show</button> */}
            
            <div className="ads">
            <button className="alert" onClick={sethall}>Alert</button>
            <button className="store" onClick={store}>Store</button>
            </div>
            <button className="download" onClick={handleDownload}>Download Excel Sheet</button>
            
            
        </div><div className="lisss"><h1 className="hn">HALL NUMBERS:-</h1>
            <ol className="o-list" id="dynamic-list">
            </ol></div> </div>   
      )


}
export default Admin

