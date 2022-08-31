import Review from '../review/review';

interface Props {
  comments: string[]
}

function ReviewList ({comments}: Props): JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>

      <ul className="reviews__list">
        {comments.map((comment, index) => <div key={index}><Review comment={comment} /></div>)}

      </ul>
    </>
  );
}

export default ReviewList;
