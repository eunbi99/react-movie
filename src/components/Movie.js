import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Movie({rnum,rank,movieNm,openDt,audiAcc,movieCd}) {
    return (
        <Grid
            item
            key={rnum}
            xs={12}
            sm={6}
            md={4}
        >
        <Link to={{ 
            pathname : `/movie/${movieNm}`, state: {
              rank:rank,
              movieCd:movieCd,
              openDt:openDt,
              audiAcc:audiAcc
            }
        }}>
        <Card>
          <CardHeader
            title={rank}
            subheader={movieNm}
            titleTypographyProps={{ align: 'left' }}
            subheaderTypographyProps={{
            align: 'center',
            }}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[700],
            }}
          />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                mb: 2,
              }}
            >
              <Typography variant="p" align="center" color="text.secondary" component="p">
                개봉일 : {openDt}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        </Link>
      </Grid>
    );
}

Movie.propTypes = {
    rnum: PropTypes.number.isRequired,
    rank : PropTypes.number.isRequired,
    movieNm : PropTypes.string.isRequired,
    movieCd : PropTypes.string.isRequired,
    openDt : PropTypes.string.isRequired,
    audiAcc : PropTypes.number.isRequired,
}
export default Movie;