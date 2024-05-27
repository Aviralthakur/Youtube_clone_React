import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material'
import {Navabar,Feed,VideoDetails,ChannelDetails,SearchFeed} from './components'

const App = () => 
  (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
        <Navabar/>
        <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path="/video/:id" element={<VideoDetails/>}/>
            <Route path="/channel/:id" element={<ChannelDetails/>}/>
            <Route path="/search/:searchTeam" element={<SearchFeed/>}/>
        </Routes>
    </Box>
    </BrowserRouter>
  )


export default App
