import React from 'react'
import MainAppBar from '../component/MainAppBar'
import BottomNavBar from '../component/BottomNavBar'
import { Box, ButtonGroup, Divider } from '@mui/material'

function SelectTutors() {
  return (
    <>
    <MainAppBar/>


    <div style={{ fontSize:'40px', fontFamily:'Papyrus', textAlign:'center', paddingTop:'100px'}}>Welcome to our Community.<br/>
        Find a tution.
    </div>

    <div style={{display:'flex', gap :'10px',justifyContent:'space-evenly' , paddingTop:'70px'}}>


        <Box sx={{border:'2px dashed green', width :'300px', height:'800px'}}>

            <div style={{fontFamily:'Papyrus', margin:'30px', fontSize:'25px'}}>

                <div>Filters</div>
                <div>Categories<hr style={{}}/>
                <div>Anj</div>
                </div>

                <div>Location <hr style={{}}/></div>
                <div>Subject <hr style={{}}/></div>
                <div>Grade<hr style={{}}/></div>

            </div>

        </Box>


        <Box sx={{border:'2px dashed green', width :'1200px', height:'800px', justifyContent:'center'}}>

            <div style={{display:'inline', }}>

            <Box sx={{width:'1000px', height:'200px', border:'2px solid red', alignContent:'center', paddingLeft:'20px'}}> 
            <img src="ys.jpeg" style={{width:'100px', height:'100px'}}/>
            <div>Yasith Kulathunga <br/> Math</div>

            
     
            
            </Box>
            

            </div>
        </Box>

        
    </div>

  <BottomNavBar/>
      
    </>
  )
}

export default SelectTutors
