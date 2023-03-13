import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({rnum,rank,movieImg,movieNm,openDt,audiAcc}) {
    return (
        <div key={rnum}>
            <img src= {movieImg} width='250' height='300'/>
            <Link to="/movie"><h2>{rank}. {movieNm}</h2></Link>
            <p>개봉일 {openDt}</p>
            <p>누적 관객수 {audiAcc}명</p>
        </div>
    );
}

// eslint-disable-next-line react/no-typos
Movie.PropTypes = {
    rnum: PropTypes.number.isRequired,
    rank : PropTypes.number.isRequired,
    movieImg : PropTypes.string.isRequired,
    movieNm : PropTypes.string.isRequired,
    openDt : PropTypes.string.isRequired,
    audiAcc : PropTypes.number.isRequired,
}
export default Movie;