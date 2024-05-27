import { Box,CardContent,CardMedia,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

import { demoProfilePicture } from "../utils/constants"
import ChannelDetails from "./ChannelDetails"
const ChannelCard = ({channel,marginTop}) => {
    console.log(channel)
  return (
   <Box
   sx={{
    boxShadow:'none',
    borderRadius:'20px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:{ xs:'356px',md:'300px'},
    height:'326px',
    margin:'auto',
    marginTop:marginTop
   }}
   >
<Link to={`/channel/${channel?.id?.channelId}`}>
    <CardContent sx={{ display:'flex',flexDirection:"column",justifuContent:'center',textAlign:'center',color:'#fff'}}>
        <CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channel?.snippet?.title}
        sx={{borderRadius:"50%",height:'180px',width:'180px',mb:2}}
        />
        <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
        </Typography>
        <Typography variant="h6">
            {channel?.statistics?.subscriberCount}
        </Typography>
    </CardContent>

</Link>
   </Box>
  )
}

export default ChannelCard
