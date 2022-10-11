import { Facebook, Instagram, Send, Twitter } from '@mui/icons-material';
import { Box, Button, Grid, List, ListItemText, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { AboutTitle, Subscribe } from '../../styles/About/Index';
import { Colors } from "../../styles/theme";

function About() {
  return (
    <Box
    sx ={{
      p: {xs: 4, md: 10},
      // p: {xs: 10, md: 16},

      //doing mediaquery within the xs prop

      fontSize: {xs: "20px", md: "24px"},
    }}
    >
    <Grid container spacing={2} justifyContent="center">
      <Grid 
      // item md={6} lg={4}
      >
        <AboutTitle variant = "body1" fontSize={"24px"}>About us</AboutTitle>
        <Typography variant="caption2">
        It is famously said that it takes a community to make a change. 
        I hope that it takes an app to empower the community.
        Crisis Relief is an app that allows people from all over the world to actively participate in abating the effects of disaster stricken areas. 
        This project proposal is prompted by the ongoing hunger crisis in the ASAL regions of Kenya (2022). 
        The app allows people from any part of the world to donate food, clothes and shelter to the communities adversely affected. 
        It also allows them to offer support to ongoing research and experiments on disaster management i.e. drought-resistant crops, emergency architecture, sustainability among others.
        </Typography>
        <Box sx={{
          mt: 4,
          color: Colors.dove_grey
        }}>
          <Facebook sx={{mr: 1}} />
          <Twitter sx={{ mr: 1 }} />
          <Instagram />
        </Box>
        </Grid>
    </Grid>
    <Grid item md ={6} lg={2} >
      <AboutTitle variant='body1' fontSize={"24px"}>information</AboutTitle>
      <List>
        <ListItemText>
          <Typography lineHeight={2} variant="caption2">
            About Us
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography lineHeight={2} variant="caption2">
            Where your donation will go
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography lineHeight={2} variant="caption2">
            Privacy &amp; Policy
            {/* &amp; is an entity Interpreted as the beginning of an entity or character reference. */}
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography lineHeight={2} variant="caption2">
            Terms &amp; Conditions
          </Typography>
        </ListItemText>
      </List>
    </Grid>
    <Grid item md ={6} lg={2}>
      <AboutTitle variant="body1" fontSize={"24px"}>signup</AboutTitle>
      <List>
        <ListItemText>
          <Typography lineHeight={2} variant="caption2">
            Log in
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography lineHeight={2} variant="caption2">
            My Donations
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography lineHeight={2} variant="caption2">
            Giving LogBook
          </Typography>
        </ListItemText>
        <ListItemText>
          <Typography lineHeight={2} variant="caption2">
            Donation Plan
          </Typography>
        </ListItemText>
      </List>
    </Grid>
    <Grid item md={6} lg={4}>
      <AboutTitle variant="body1">Sign Up</AboutTitle>
      <Stack>
        <Subscribe
        color="primary"
        label="Email address"
        variant="standard" />
        <Button startIcon={<Send sx={{color: Colors.white}} />}
        sx = {{ mt: 4, mb:4}}
        variant="contained">
          Sign Up
        </Button>
      </Stack>
    </Grid>
    </Box>
  )
}

export default About;