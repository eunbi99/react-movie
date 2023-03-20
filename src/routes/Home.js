import * as React from 'react';
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [loaging, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate;

    const onSubmit = (e) => {
      e.preventDefault();
      if(search === '') {
        alert('검색어를 입력해주세요!')
        return;
      }
      navigate("/movie");
    }
    const onChangeSearch = (e) => { setSearch(e.target.value);
     console.log(e.target.value) }
    const getMovies = async() => {
        const response = await (
            await fetch(
            `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=%REACT_APP_MOVIE_API_ID%&targetDt=20230315`
            )
          ).json();
          setMovies(response.boxOfficeResult)
          setLoading(false);
        };
        useEffect(() => {
          getMovies();
        },[]);
    const getTopThreeMovies = (movies) => {
        return movies.dailyBoxOfficeList.filter((movie) => movie.rnum <= 6 );
    }
  return (
    <React.Fragment>
      {loaging ? 
      (
        <Typography variant="h5" align="center" color="text.secondary" component="p">
         영화를 불러오고 있습니다. 잠시만 기다려주세요 .. 🍿
        </Typography>
      ) : (
        <>
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 5, pb: 5 }}>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
            박스오피스
            </Typography>
        </Container>
        <Container maxWidth="md" component="main">
            <Grid justifyContent="flex-end">
            <Box 
                onSubmit={onSubmit}
                component="form"
                align="right"
                sx={{
                    '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="standard-basic"
                    label="영화명을 검색해주세요" 
                    variant="standard" 
                    value={search}
                    onChange={onChangeSearch}
                />
                </Box>
            </Grid>
            <Grid container spacing={5} alignItems="flex-end">
                { getTopThreeMovies(movies).map((movie) => 
                    <Movie 
                      key = {movie.rnum}
                      id = {movie.rnum}
                      movieCd = {movie.movieCd}
                      rank = {movie.rank}
                      // movieImg = {movieImg[movie.movieCd]}
                      movieNm= {movie.movieNm}
                      openDt = {movie.openDt}
                      audiAcc = {movie.audiAcc}
                />
            )}
            </Grid>
      </Container>
        </>
      )
    }
    </React.Fragment>
  );
}

export default function Pricing() {
  return <Home />;
}