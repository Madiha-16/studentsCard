import React,{useState} from "react";
import {Card,Button,Grid, CardContent } from "@mui/material";
// import {Fruitspic} from "./Fruitspic";
export const Fruitspic=()=>{
    const[fruit,setFruit]=useState("Apple")
    return(
        <div className="ssub">
            <h1>Fruit Gallery</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card className="content-card-desing">
                        <CardContent className="txt">{fruit}</CardContent>
                        </Card>
                        </Grid>
               <Grid item xs={6}>
                <Card>
                    <CardContent className="txt">
                    <img src={`Fruite/${fruit}.jpg`} className="img" width={250} height={200}/>
                    </CardContent>
                </Card>
               </Grid>
               <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setFruit("Apple")}fullWidth color="success">Apple</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setFruit("Banana")}fullWidth color="success">Banana</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setFruit("Cherry")}fullWidth color="success">Cherry</Button>

                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setFruit("Kevi")}fullWidth color="warning">Mango</Button>

                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setFruit("Orange")}fullWidth color="warning">Orange</Button>
                
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setFruit("Watermelon")}fullWidth color="warning">Watermelon</Button>
                </Grid>
                </Grid>

        </div>
    )
}