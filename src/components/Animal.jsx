import React,{useState} from "react";
import {Grid,Button,Card, CardContent} from "@mui/material";
export const Animal=()=>{
const[animal,setAnimal]=useState("Monkey");
return (
<div className="ssub">
    <h1>Animal Home</h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent className="txt ">{animal}</CardContent>
                    </Card>
                    </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setAnimal("CAT")}
                    fullWidth color="success">Cat</Button>
                    
                </Grid>
                <Grid item xs={4}>
                <Button variant="contained" 
                onClick={()=>setAnimal("TIGER")}
                fullWidth color="success">Tiger</Button>
                </Grid>
                
                    <Grid item xs={4}>
                        <Button variant="contained"
                        onClick={()=>setAnimal("Zebra")}
                         fullWidth color="success">ZEBRA</Button>
                    </Grid>
                    <Grid item xs={3}>
                    <Button variant="contained"
                        onClick={()=>setAnimal("Goat")}
                         fullWidth color="warning">COAT</Button>
                        </Grid>
                        <Grid item xs={3}>
                    <Button variant="contained"
                        onClick={()=>setAnimal("Cub")}
                         fullWidth color="warning">CUB</Button></Grid>
                         <Grid item xs={3}>
                         <Button variant="contained"
                        onClick={()=>setAnimal("Elephant")}
                         fullWidth color="warning">ELEPHANT</Button></Grid>
                         <Grid item xs={3}>
                         <Button variant="contained"
                        onClick={()=>setAnimal("Chetah")}
                         fullWidth color="warning">CHETAH</Button>

                         </Grid>
                         </Grid>

                         
            
         
                         

        </div>
    );
}