import Review from '../review/review';

function ReviewList ({comments}: any): JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>

      <ul className="reviews__list">

        {comments.map( (comment: string[]) => <Review comment={comment}/> )}
      </ul>
    </>
  );
}

export default ReviewList;
