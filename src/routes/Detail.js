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
    const movieLink = movie.link;
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
    },id);

    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
          item
          xs={12}
          sm={6}
          md={7}
          >
             <Box noValidate sx={{ mt: 10 }}>
                <Typography variant="h3" align="center" color="text.secondary">
                 { movie.title?.replace(/<b>/gi,"").replace(/<\/b>/gi,"") }
                </Typography>
                <Typography variant="h5" align="center">{ movie.subtitle }</Typography>
              </Box>
              <Box noValidate sx={{ mt: 8 }}>
                <Typography variant="h6" align="center">감독 : { movie.director?.replaceAll("|", "") }</Typography>
                <Typography variant="h6" align="center">배우 : { movie.actor ? movie.actor?.replaceAll("|", " ") : "없음" }</Typography>
                <Typography variant="h6" align="center"> 실관람 평점 : { movie.userRating }</Typography>
              </Box>
        </Grid>
          <Grid item xs={12} sm={8} md={5} elevation={6} square>
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
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <Grid container>
                  <Grid item xs>
                  <Stack spacing={2} direction="row">
                    <Button onClick={ () => window.open(movieLink)} variant="contained">더 알아보기..</Button>
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