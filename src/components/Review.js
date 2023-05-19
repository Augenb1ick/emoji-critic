import React from 'react';
import './Review.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Review (props) {
  let { reviews } = props;
  let { id } = useParams();
  // the object keys start with 0, but the IDs in the API begin at 1
  id = id - 1;

  const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }


  return (
    <div className="review">
      {
        reviews &&
          <div className="review__item">
            <h3>{reviews[id].title}</h3>
            <p>{reviews[id].text}</p>
            <p className="review__rating">Рейтинг:{reviews[id].rating}/5</p>
            <button className='review__back-btn' onClick={goBack}>Назад</button>
          </div>
      }

    </div>
  );
}

export default Review;