import { createContext, useEffect } from 'react';

import useFetch from '../hooks/useFetch';

export const HotelContext = createContext({
    hotel: {}
});

export const HotelProvider = ({ children }) => {
    const [hotel, fetchData] = useFetch('/api/hotels/venetian');

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <HotelContext.Provider value={{ hotel }}>
            {children}
        </HotelContext.Provider>
    );
};