import { useEffect } from 'react';

import { filterDuplicateHotels, twoDecimals } from '../utils/helperFunctions';
import UseFetch from '../hooks/useFetch';
import './SideBar.css';

const SideBar = () => {
    const [hotelList, fetchHotelList] = UseFetch('http://localhost:8888/api/hotels');

    useEffect(() => {
        fetchHotelList();
    }, [fetchHotelList]);

    if (!hotelList) return (<p>Unable to load hotel list...</p>);
    
    // filter duplicated hotels and sort in alphabetical order
    const hotels = filterDuplicateHotels(hotelList.list, 'name');

    return (
        <div className="hotel-sidebar">
            {hotels.map(hotel => (
               <div className="hotel-sidebar__item" key={hotel.code}>
                    <span>{hotel.name}</span>
                    <span>${twoDecimals(hotel.price)}</span>
               </div>
            ))}
        </div>
    );
};

export default SideBar;