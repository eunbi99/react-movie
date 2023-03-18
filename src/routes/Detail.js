import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

function Detail() {
    const [movie,setMovie] = useState({});
    const {id} = useParams();
    const getMovie = async () => {
        const {data} = await axios.get(
            `/v1/search/movie.json?query=${id}&display=1`,{
            headers: {
            'X-Naver-Client-Id': "%REACT_APP_NAVER_MOVIE_CLIENT_ID%",
            'X-Naver-Client-Secret': "%REACT_APP_NAVER_MOVIE_SECRET_KEY%"
            }   
        }); 
        console.log(data.items[0]);
        setMovie(data.items[0]);
    };
    useEffect(() => {
        getMovie();
    },[]);


    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
          >
        </Grid>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                sx={{
                height: 300,
                width: 200,
                }}
                alt={movie.title}
                src={movie.image}
            />
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Grid container>
                  <Grid item xs>
                  <Stack spacing={2} direction="row">
                    <Button variant="contained">예매</Button>
                </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
}

Detail.propTypes = {
    rank : PropTypes.number.isRequired,
    moveCd : PropTypes.number.isRequired,
    openDt : PropTypes.string.isRequired,
    audiAcc : PropTypes.number.isRequired,
}

export default Detail;