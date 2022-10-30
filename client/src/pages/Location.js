import { useContext, useEffect, useState, useRef } from 'react';

import { HotelContext } from '../context/hotelContext';
import { MapContext } from '../context/mapContext';
import './page.css';

const Location = () => {
  const [ref, setRef] = useState();
  const { hotel } = useContext(HotelContext);
  const { showMap } = useContext(MapContext);
  const mapRef = useRef();
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop); 

  useEffect(() => {
    setRef(mapRef);
  }, [ref, mapRef]);

  if (!hotel || !ref) return; 
  
  const renderAddress = () => {
    const { location } = hotel;
    return (
      <p>
        <i className="icon-strip"></i> {" "}
        {location.address}, {location.city} {location.state} {location.postalCode}
      </p>
    );
  };    

  const renderMap = () => {
    ref.current && scrollToRef(ref);

    return <img src="/assets/images/map_venetian.png" alt={hotel && hotel.name} />;
  };

  return (
    <div className="hotel-page__location">
      {renderAddress()}
      
      {!showMap && <p className="hotel-page__location-note">****Please click the map marker or the text "Strip" to open the map!</p>}
      <span ref={mapRef}>
        {showMap && renderMap()}
      </span>
      
    </div>
  );
};

export default Location;