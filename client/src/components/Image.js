import { useContext } from 'react';

import { HotelContext } from '../context/hotelContext';
import './Image.css';

const Image = () => {
    const { hotel } = useContext(HotelContext);

    return (
        <div className="hotel-image">
            <p>
                <span className="icon-shape">
                    <i className="icon-left">
                    </i>
                </span> 
                <span className="hotel-image__text"> see all las vegas hotels</span>
            </p>

            {!hotel ? (
                <p>Unable to load image</p>
            ) : (
                <img 
                    src={hotel.media[0].href} 
                    alt={hotel.name} 
                />
            )}
        </div>
    );
};

export default Image;