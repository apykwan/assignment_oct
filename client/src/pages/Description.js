import { useContext } from 'react';

import ShowMoreOrLess from '../components/ShowMoreOrLess';
import { HotelContext } from '../context/hotelContext';
import useToggle from '../hooks/useToggle';
import { paragraphsConverter } from '../utils/helperFunctions';

const Description = () => {
    const { hotel } = useContext(HotelContext);
    const [showMore, toggleShowMore] = useToggle();

    if (!hotel) return;
    const { description } = hotel;
    
    const descriptionRender = () => {
        // split the description into pargraphs
        const paragraphs = showMore ? 
            paragraphsConverter(description) : 
            paragraphsConverter(description.substring(0, 201) + '...');

        return paragraphs.map((p, index) => (
            <p className="hotel-page__description--paragraph" key={index}>{p}</p>
        ));
    };

    return (
        <div className="hotel-page__description">
            {descriptionRender()}
            <ShowMoreOrLess 
                showMore={showMore} 
                toggleShowMore={toggleShowMore}
                color="purple"
                category="description" 
                style={{ fontWeight: 400 }}
            />
        </div>
    );
};

export default Description;