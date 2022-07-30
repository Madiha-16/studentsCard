import React from "react";
import {useState} from "react";
import{Grid,Button,Card,CardContent} from "@mui/material";
export const Article=()=>{
    const[article,setArticle]=useState("Article Home")
    return(
        <div className="ssub">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent className="txt">{article}</CardContent>
                    </Card>
                    </Grid>
                

                    <Grid item xs={4}>
                    <Button variant="contained"
                    onClick={()=>setArticle("AC")} fullWidth color="success">AC</Button>
                    </Grid>

                <Grid item xs={4}>
                <Button variant="contained" 
                onClick={()=>setArticle("CHAIR")}fullWidth color="success">Chair</Button></Grid>

                <Grid item xs={4}> <Button variant="contained" onClick={()=>setArticle("COOLER")}fullWidth color="success">Cooler</Button></Grid>
                 {/* </Grid> */}
                 {/* <Grid container spacing={3}> */}
                <Grid item xs={3}> <Button variant="contained" onClick={()=>setArticle("FAN")} 
                 fullWidth color="warning">Fan</Button></Grid>
                <Grid item xs={3}> <Button variant="contained" onClick={()=>setArticle("Table")}
                  fullWidth color="warning">Table</Button></Grid>
                  <Grid item xs={3}> <Button variant="contained" onClick={()=>setArticle("Tv")}
                  fullWidth color="warning">Tv</Button></Grid>
                  <Grid item xs={3}> <Button variant="contained" onClick={()=>setArticle("Washing Machine")}
                 fullWidth color="warning">Washing Machine</Button></Grid>
                 <Grid/> 
                 </Grid>   
        </div>

    );
}