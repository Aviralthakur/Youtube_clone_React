import { useEffect,useState } from "react"
import { Link,useParams } from "react-router-dom"
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import {Video, Videos} from './'
import { fetchFromApi } from "../utils/fetchFromAPI"
const VideoDetails = () => {
  const{id}=useParams();
  const[videoDetails,setVideoDetails]=useState();
  const[video,setVideo]=useState();
  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=>{
   setVideoDetails(data.items[0])
    })

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setVideo(data.items))
    },[id]);
    if(!videoDetails?.snippet)return 'Loading...'
    if(!video)return 'Loading...'
  const{snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetails
  
  return (
   <Box minHeight="95vh">
    <Stack direction={{xs:'column',md:'row'}}>
     <Box flex={1}>
       <Box sx={{width:'100%',position:'static',top:'86px'}}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
        className="react-player" controls/>
        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
          {title}
        </Typography>
        <Stack direction="row" justifyContent="space-between" color="#fff" py={1} px={2}>
        <Link to={`/channel/${channelId}`}>
          <Typography variant={{sm:'subtitle1',md:'h6'}}
          color ='#fff'>
            {channelTitle}
            <CheckCircle sx={{fontSize:'12px',color:'grey',ml:'5px'}}/>
          </Typography>
        </Link>
        <Stack direction="row" gap="20px" alignItems="center">
          <Typography variant="body1" sx={{opacity:0.7}}>
          {parseInt(viewCount).toLocaleString()} views
          </Typography>
          <Typography variant="body1" sx={{opacity:0.7}}>
          {parseInt(likeCount).toLocaleString()} likeCount
          </Typography>
        </Stack>
        </Stack>
       </Box>
     </Box>
     <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems="center">
    <Videos videos={video} direction="column"/>
   </Box>
    </Stack>
   </Box>
  )
}

export default VideoDetails
