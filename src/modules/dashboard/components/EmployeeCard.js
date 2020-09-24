import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:2
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minWidth: 300,
  },
  imageContainer:{
    display:'flex',
    justifyContent:'left',
    [theme.breakpoints.down('xs')]: {
      justifyContent:'center'
    }
  },
  image: {
    width: 80,
    height: 80,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function EmployeeCard(props) {
  const classes = useStyles();
  let{name,id,age,gender,email,phoneNo}=props!==undefined?props.emp:{}
  return (
    <div className={classes.root} key={id}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid lg={1} xs={12} item className={classes.imageContainer}>
            <Avatar className={classes.image}>
              {name.toUpperCase()}
            </Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <b>Name: {name}</b> 
                </Typography>
                <Typography variant="body2" gutterBottom>
                <b>Id: {id} </b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <b>Age: {age} years</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <b>Gender: {gender} </b>
                </Typography>
              </Grid>
              <Grid  md={4} xs={12} item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <b>Email: </b><br/>
                {email}
                </Typography>
              </Grid>
            </Grid>
            <Grid  md={4} xs={12} item>
            <Typography variant="body2" style={{ cursor: 'pointer' }}>
              <b>Phone No: </b><br/>
              {phoneNo}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
