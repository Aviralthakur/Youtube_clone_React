import { useState,useEffect } from "react"
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos,ChannelCard} from './';
import { fetchFromApi } from "../utils/fetchFromAPI";
const ChannelDetails = () => {
  const {id}=useParams();
  const [channelDetail,setChannelDetail]=useState();
  const [videos,setVideos]=useState();
  console.log(videos)
  useEffect(()=>{
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>{setVideos(data?.items)});
      fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data)=>{
       setChannelDetail(data?.items[0]);
      });
     
  },[id]);

  if(!videos)return 'Loading...'
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,11,121,1) 0%, rgba(0,212,255,1) 100%)',
      zIndex:10,
      height:'300px'
      }}
      />
      <ChannelCard channel={channelDetail} marginTop="-93px"/>
      </Box>
      <Box display="flex" p='2'>
        <Box
        sx={{ mr:{sm:'100px'}}}
        />
         <Videos  videos={videos}/>
      </Box>
      </Box>
  )
}

export default ChannelDetails
