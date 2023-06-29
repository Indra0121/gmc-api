import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';

// Import Google Maps library
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  mapContainer: {
    width: '80%',
    height: '500px',
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };
// google consiste a entrer les informations de ma carte bancaire, j'ai pas de carte bancaire 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <div className={classes.mapContainer}>
          <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={13} />
        </div>
      </LoadScript>
      <Typography variant="h4" align="center">
        Welcome to My Landing Page
      </Typography>
    </div>
  );
};

export default LandingPage;
