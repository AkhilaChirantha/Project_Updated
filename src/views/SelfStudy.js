import React from 'react'
import MainAppBar from '../component/MainAppBar'
import BottomNavBar from '../component/BottomNavBar'
import { Button } from '@mui/material'

function SelfStudy() {
  return (
    <>

    <MainAppBar/>

    <div style={{ fontSize:'40px', fontFamily:'Papyrus', textAlign:'center', paddingTop:'100px'}}>Welcome to our Community
    <br/>
        Self Study
    </div>

    <div style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
            
            <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#C1F5A7',
                justifyContent:'center', width:'360px', height:'40px'}} >
                <a href='/selfstudyselection' style={{textDecoration:'none', paddingTop:'4px'}}>Get Start</a> 
            </Button>
        </div>

    <BottomNavBar/>
      
    </>
  )
}

export default SelfStudy
