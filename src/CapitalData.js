import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container} from "@mui/material";
import { useState, useEffect } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const api = 'https://restcountries.com/v3.1/all';
const capitalC = 'https://restcountries.com/v3.1/capital/';

const CapitalData = () => {
    const [data, setData] = useState([]);
    const [thirdData, setThirdData] = useState([]);
    const [change, setChange]  = useState("");
    const handleChange = (e) =>{
      setChange(e.target.value)
    }

    const changeoneData = async () => {
      const response = await fetch(api)
      const data = await response.json()
      setData(data) 
      console.log(data)
  }
    
    const changeData = async (capitalName) =>{
      const response = await fetch(`${capitalC}${capitalName}`)
      const data = await response.json()
      setThirdData(data)
      console.log(data)
    }
    const searchButton = () =>{
      changeData(change)
    }
    

    useEffect(() => {
      changeoneData()
  }, []);
    return (
        <div>
          <div className="">
            <input className="form-control"  onChange={handleChange} value={change}/>
            <button onClick={searchButton} className="btn btn-dark p-3 fw-v=bold">Find</button>
          </div>
            <Fet fet={thirdData} />
        </div>
    )
}

function Fet ({fet}) {
  return (
      <Container>
          {fet.map((item, index) => {
             return (
              <Card sx={{ maxWidth: 400 }} key={index}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="220"
                    image={ item.flags.png}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontWeight={'700'}>
                    NAME:{item.name.common}
                    </Typography>
                    <Typography variant="body1" color="text.primary" fontWeight={'540'} lineHeight={2}>
                      Capital:{item.capital}
                    </Typography>
                    <Typography variant="body2" color="text.primary" fontWeight={'530'} lineHeight={2}>
                       Population:{item.official} 
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" size="small" color="primary">
                    See More
                  </Button>
                </CardActions>
              </Card>
            ); 
        })}
      </Container>
  )
}


export default CapitalData;
