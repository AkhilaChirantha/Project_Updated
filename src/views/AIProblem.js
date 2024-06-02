import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DashNav from '../component/DashNav';
import SideNav from '../component/SideNav';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AIProblem() {
  return (
    <Box sx={{ flexGrow: 1, padding:'100px',background:'gray'}}>
      <Grid container spacing={2}>


        <Grid item xs>
          <Item>
            <DashNav/>
          </Item>
        </Grid>


        <Grid item xs={6}>
          <Item>
            mekata mada kotasa thama daanawa oona
          </Item>
        </Grid>


        <Grid item xs>
          <Item>
            <SideNav/>
          </Item>
        </Grid>


      </Grid>
    </Box>
  );
}
