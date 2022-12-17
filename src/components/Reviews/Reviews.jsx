import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_GET_REVIEWS } from 'API/API';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    API_GET_REVIEWS(movieId).then(resp => {
      setReviews(resp.data.results);
    });
  }, []);

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <span>{author}</span>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
