import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { HotelContext } from '../../context/hotelContext';
import { MapContext } from '../../context/mapContext';
import './Title.css';

const Title = () => {
    const { hotel } = useContext(HotelContext);
    const { toggleMap } = useContext(MapContext);
    const navigate = useNavigate();
    let { pathname } = useLocation();

    if (!hotel) return (<p>Server Error</p>);

    const mapCickHandler = () => {
        toggleMap();
        if (pathname !== '/location') navigate('/location');
    };

    // color the stars based on starRating
    const starRating = () => {
        const widthPercent = (Number(hotel.starRating) / 5) * 100;
        return (
            <span className="hotel-header__title--rating">
                <span className="hotel-header__title--star">
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                </span>
                <span 
                    className="hotel-header__title--starOverLay"
                    style={{ width: `${widthPercent}%` }}
                >
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                    <i className="icon-star"></i>
                </span>
            </span>
        );
    };

    return (
        <div className="hotel-header__title">
            <div className="hotel-header__title--name">
                <h1>{hotel.name}</h1>
                {starRating()}
                <p className="hotel-header__title--strip">
                    <span 
                        className="hotel-header__title-link" 
                        onClick={mapCickHandler}
                    >
                        <i className="icon-strip"></i> Strip
                    </span>
                    <span>
                        <i className="icon-phone"></i> {hotel.phoneNumber}
                        
                    </span>
                    <span>
                        <i className="icon-best"></i> Best Price Gaurantee
                    </span> 
                </p>
            </div>
            <p className="hotel-header__title--price">
                <span>${hotel.price}</span>
                <span>hotel rooms from</span>
            </p>
        </div>
    );
};

export default Title;