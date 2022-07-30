import React,{useState} from "react";
import {Grid,Card,CardContent,Button} from "@mui/material";
import { Animal } from "./Animal";
export const Animalpic=()=>{
    const[animal,setAnimal]=useState("Elephant")
    return(
        <div className="ssub">
            <h1>Animal Gallery</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <Card className="content-card-desing">
                <CardContent className="txt">{animal}</CardContent>
                </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent className="txt ">
                            <img alt="" src={`images/${animal}.jpg`}className="img" width={250} height={200}/>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setAnimal("CAT")}fullWidth color="success">Cat</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setAnimal("Cheetah")}fullWidth color="success">Cheetah</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setAnimal("Tiger")}fullWidth color="success">Tiger</Button>

                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setAnimal("Zebra")}fullWidth color="warning">Zebra</Button>

                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setAnimal("Elephant")}fullWidth color="warning">Elephant</Button>
                
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setAnimal("Cub")}fullWidth color="warning">Cub</Button>
                </Grid>
                </Grid>

        


        </div>
    )
}