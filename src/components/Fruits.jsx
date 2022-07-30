import React from "react";
import {useState} from "react";
import{Grid,Button,Card,CardContent} from "@mui/material";
export const Fruits=()=>{
    const[fruit,setFruit]=useState("Dragon Fruit");
    return(
        <div className="ssub">
            <h1>Fruits Home</h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent className="txt">{fruit}</CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}> <Button variant="contained" 
                onClick={()=>setFruit("ORANGE")} fullWidth color="success">Orange</Button></Grid>
                <Grid item xs={4}> <Button variant="contained" 
                onClick={()=>setFruit("PINEAPPLE")} fullWidth color="success">Pineapple</Button></Grid>
                <Grid item xs={4}> <Button variant="contained" 
                  onClick={()=>setFruit("GRAPES")}fullWidth color="success">Grapes</Button></Grid>
                   <Grid item xs={2}> <Button variant="contained" 
                  onClick={()=>setFruit("MANGO")}fullWidth color="warning">Mango</Button></Grid>
                   <Grid item xs={2}> <Button variant="contained" 
                  onClick={()=>setFruit("KEVI")}fullWidth color="warning">Kevi</Button></Grid>
                  <Grid item xs={2}> <Button variant="contained" 
                  onClick={()=>setFruit("WATERMELON")}fullWidth color="warning">Watermelon</Button></Grid>
                  <Grid item xs={2}> <Button variant="contained" 
                  onClick={()=>setFruit("POMEGRANATE")}fullWidth color="warning">Pomegranate</Button></Grid>
                  <Grid item xs={2}> <Button variant="contained" 
                  onClick={()=>setFruit("PEARS")}fullWidth color="warning">Pears</Button></Grid>
                  <Grid item xs={2}> <Button variant="contained" 
                  onClick={()=>setFruit("BANANA")}fullWidth color="warning">Banana</Button></Grid>
                 </Grid>
                </div>
    );
}
