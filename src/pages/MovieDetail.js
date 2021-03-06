import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Gallery from "../components/Gallery";
import Github from "../components/ui/icons/Github";
import CheckLink from "../components/ui/icons/CheckLink";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <div className="movie__header">
              <h2>{movie.title}</h2>
              <div classname="movie__links">
                {movie.links.map((link) => {
                  console.log(link.type);
                  return link.type === "sourceCode" ? (
                    <a href={link.link}>
                      <Github />
                    </a>
                  ) : (
                    <a href={link.link}>
                      <CheckLink />
                    </a>
                  );
                })}
              </div>
            </div>
            <img className="headLine__img" src={movie.mainImg} alt="movie" />
            <Test className="test">
              <Gallery images={movie.images} />
            </Test>
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
  padding: 2rem 2rem;
  @media (min-width: 1300px) {
    padding: 2.5rem 5.5rem;
  }
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 5vh;
  position: relative;
  .movie__header {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem 2rem 2rem;

    a {
      text-decoration: none;
      font-size: 2.8rem;
      color: ${(props) => props.theme.lightTheme.clr__secondary};
      padding-left: 0.5em;
    }
  }
  .test,
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  .headLine__img {
    @media (min-width: 1300px) {
      display: none;
    }
  }
`;
const Awards = styled.div`
  display: block;
  margin: 2rem 0rem;
  @media (min-width: 1500px) {
    /* min-height: 80vh; */
    display: flex;
    /* margin: 5rem 10rem; */
    /* align-items: center; */
    justify-content: space-around;
  }
`;
const AwardStyle = styled.div`
  padding: 0;
  @media (min-width: 1500px) {
    padding: 5rem 0 5rem 0;
    width: 30%;
    margin: 0 auto;
  }
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
// const ImageDisplay = styled.div`
//   min-height: 50vh;
//   img {
//     width: 100%;
//     height: 100vh;
//     object-fit: cover;
//   }
// `;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const Test = styled.div`
  width: 100%;
  height: 70vh;
  display: none;
  @media (min-width: 1300px) {
    display: block;
  }
`;

export default MovieDetail;
