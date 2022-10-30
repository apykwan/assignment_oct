import { useContext, Fragment } from 'react';

import ShowMoreOrLess from '../components/ShowMoreOrLess';
import { HotelContext } from '../context/hotelContext';
import useToggle from '../hooks/useToggle';

const Details = () => {
  const { hotel } = useContext(HotelContext);
  const [showMore, toggleShowMore] = useToggle();

  if (!hotel) return;
  
  const detailsRender = () => {
    const { details } = hotel;
    // Only show 2 details when showMore is false
    let renderList = !showMore ? details.slice(0, 2) : details;

    return (
      <Fragment>
        {renderList.map((detail, index) => (
          <div className="hotel-page__details--box" key={`${hotel.code}-${index}`}>
            <h4>{detail.label}</h4>
            <p>{detail.value}</p>
          </div>
        ))}
      </Fragment>
    );
  };

  return (
    <div className="hotel-page__details">
      {detailsRender()}
      <ShowMoreOrLess 
        showMore={showMore} 
        toggleShowMore={toggleShowMore}
        color="purple" 
        category="details"
        style={{ fontWeight: 400 }}
      />
    </div>
  )
}

export default Details;