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
const searchC = 'https://restcountries.com/v3.1/name/';
// const product = "https://dummyjson.com/products"
const FetchData = () => {
    const [data, setData] = useState([]);
    const [oneData, setOneData] = useState([]);
    const [search, setSearch]  = useState("");
    const handleSearch = (e) =>{
      setSearch(e.target.value)
    }

    const fetchsecondData = async () => {
        const response = await fetch(api)
        const data = await response.json()
        setData(data) // updated the array
        console.log(data)
    }
    
    const fetchOneData = async (countryName) =>{
      const response = await fetch(`${searchC}${countryName}`)
      const data = await response.json()
      setOneData(data)
      console.log(data)
    }
    const searchButton = () =>{
      fetchOneData(search)
    }
    useEffect(() => {
        fetchsecondData()
    }, []);
    return (
        <div>
          <div className="">
            {/* <h3>{search}</h3> */}
            <input className="form-control"  onChange={handleSearch} value={search}/>
            <button onClick={searchButton} className="btn btn-dark p-3 fw-v=bold">Find</button>
          </div>
            <div>
              <New news={oneData} />
              <List list={data} />
            </div>
        </div>
    )
} 

function New ({news}) {
  return (
      <Container>
          {news.map((item, index) => {
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
                       Population:{item.population} 
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

function List ({list}) {
    return (
        <Container style={{display:'grid', 
        gridTemplateColumns:'350px 350px 1fr', 
        gap:'30px'}}  >
            {list.map((item, index) => {
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
                         Population:{item.population} 
                      </Typography>
                      <Typography variant="body2" color="text.primary" fontWeight={'530'} lineHeight={2}>
                        CarSide:{item.car.side}
                      </Typography>
                      <Typography variant="body2" color="text.primary" fontWeight={'530'} lineHeight={2}>
                        Offical Name:{item.name.official}
                      </Typography>
                      <Typography variant="body2" color="text.primary" fontWeight={'530'} lineHeight={2}>
                        Region:{item.region} 
                      </Typography>
                      <Typography variant="body1" color="text.primary" fontWeight={'530'} lineHeight={2}>
                        Subregion:{item.subregion}
                      </Typography>
                      <Typography variant="body1" color="text.primary" fontWeight={'530'} lineHeight={2}>
                        Area:{item.area}
                      </Typography>
                      <Typography variant="body1" color="text.primary" fontWeight={'530'}>
                        StartOfWeek:{item.startOfWeek}
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
export default FetchData;







