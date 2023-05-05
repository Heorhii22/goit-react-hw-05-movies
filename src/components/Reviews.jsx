import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieReviews } from 'service/API';

export function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    MovieReviews(id).then(({ results }) => {
      console.log(results);
      const filteredReview = results.map(({ author_details, content }) => ({
        author_details,
        content,
      }));
      setReviews(filteredReview);
    });
  }, [id]);

  if (reviews.length === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <ul>
      {reviews.map(({ author_details, content }, index) => {
        const avatar_path = author_details.avatar_path;
        const has_https = avatar_path.startsWith('/https');

        return (
          <li key={index}>
            <p>{author_details.username}</p>
            {!author_details.avatar_path || !has_https ? (
              <img
                src="https://t3.ftcdn.net/jpg/05/26/72/48/360_F_526724825_fEKkOFrsAnTBW3G5Qc9VCZxArl3zWEdT.jpg"
                alt="default_avatar"
                width={80}
              />
            ) : (
              <img src={author_details.avatar_path.substring(1)} alt="avatar" />
            )}
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
