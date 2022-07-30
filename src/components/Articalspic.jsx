import {Card,Button, CardContent, Grid } from "@mui/material";
import React,{useState} from "react";
export const Articalpic=()=>{
    const[artical,setArtical]=useState("AC")
    return(
        <div className="ssub">
            <h1>Artical Gallery</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card className="content-card-desing">
                        <CardContent className="txt">{artical}</CardContent>
                    </Card>
                 </Grid>
                 <Grid item xs={6}>
                    <Card>
                    <CardContent className="txt">
                    <img src={`Artical/${artical}.jpg`} className="img" width={250} height={200}/>
                    </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setArtical("AC")}fullWidth color="success">AC</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setArtical("Chair")}fullWidth color="success">Chair</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" 
                    onClick={()=>setArtical("Cooler")}fullWidth color="success">Cooler</Button>

                </Grid>
                <Grid item xs={3}> <Button variant="contained" 
                onClick={()=>setArtical("Fan")} fullWidth color="success">Fan</Button></Grid>                    
    
                <Grid item xs={3}> <Button variant="contained" 
                onClick={()=>setArtical("Table")} fullWidth color="success">Table</Button></Grid>                    
          
                <Grid item xs={3}> <Button variant="contained" 
                onClick={()=>setArtical("Tv")} fullWidth color="success">Tv</Button></Grid>                    
           
                <Grid item xs={3}> <Button variant="contained" 
                onClick={()=>setArtical("Washing Machine")} fullWidth color="success">Washing Machine</Button></Grid>                    
              
        </Grid>
        </div>
    );
}
