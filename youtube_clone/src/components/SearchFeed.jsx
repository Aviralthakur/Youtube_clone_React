import { useState,useEffect } from 'react'
import {Box,Typography} from '@mui/material'
import {Videos} from './'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromAPI'
const SearchFeed = () => {
const[videos,setVideos]=useState([])
const{searchTeam}=useParams();
useEffect(()=>{
fetchFromApi(`search?part=snippet&q=${searchTeam}`).then((data)=>
setVideos(data.items)
)
},[searchTeam]);
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
    <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
     Search Results for :  <span style={{color:'#F31503'}}> {searchTeam}</span> Videos
    </Typography>
    <Videos  videos={videos}/>
   </Box>
  )
}

export default SearchFeed
