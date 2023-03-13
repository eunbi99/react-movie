import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loaging, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    const movieImg = {
      20225061 : "https://upload.wikimedia.org/wikipedia/ko/8/81/%EC%95%84%EB%B0%94%ED%83%80_%EB%AC%BC%EC%9D%98_%EA%B8%B8_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
      20196478 : "https://www.kobis.or.kr/common/mast/movie/2022/12/13760668f5644b739d29dd80d4b00ad8.jpg"
    }
    const getMovies = async() => {
      const response = await (
          await fetch(
          `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=%REACT_APP_API_KEY%&targetDt=20230101`
          )
        ).json();
        setMovies(response.boxOfficeResult)
        setLoading(false);
      };
      useEffect(() => {
        getMovies();
      },[]);
    console.log(movies);
    return (
      <div> 
        {loaging ? 
          (
          <strong>Loading...</strong> 
          ) : (
            <>
            <h1>무비 차트 {movies.showRange}</h1>
              {movies.dailyBoxOfficeList.map((movie) => 
               <Movie 
                    key = {movie.rnum}
                    movieCd = {movie.movieCd}
                    rank = {movie.rank}
                    movieImg = {movieImg[movie.movieCd]}
                    movieNm= {movie.movieNm}
                    openDt = {movie.openDt}
                    audiAcc = {movie.audiAcc}
                />
              )}
            </>
          )
        }
      </div>
      );
}

export default Home;