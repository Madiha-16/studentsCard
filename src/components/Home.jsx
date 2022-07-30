import React,{useState} from "react";
import{Tab,Tabs} from "@mui/material"
import{Animal} from "./Animal";
import{Fruits} from "./Fruits";
import {Article} from "./Article";
import {Animalpic} from "./Animalpic";
import{Fruitspic} from "./Fruitspic";
import { Articalpic } from "./Articalspic";
export const Home=()=>{
    const[val,setVal]=useState("animal");
    return(
        <div className="sub">
            <h1>Home</h1>
            <Tabs value={val} onChange={(e,value)=>setVal(value)}>
                <Tab label="Animal" value="animal"></Tab>
                <Tab label="Fruits" value="fruit"></Tab>
                <Tab label="Article" value="article"></Tab>
                <Tab label="Animal Gallery" value="animalpic"></Tab> 
                <Tab label="Fruits Gallery" value="fruitpic"></Tab>
                <Tab label="Articles Gallery" value="artpic"></Tab>
            </Tabs>
            {val==="animal" && <Animal/>}
            {val==="fruit" && <Fruits/>}
            {val==="article" && <Article/>   }
            {val==="animalpic" && <Animalpic/>}
            {val==="fruitpic" && <Fruitspic/>}
            {val==="artpic" && <Articalpic/>}



              
           
            
        </div>
    );
}