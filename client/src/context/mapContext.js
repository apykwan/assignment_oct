import { createContext } from 'react';

import UseToggle from '../hooks/useToggle';

export const MapContext = createContext({
    showMap: false,
    toggleMap: () => {}
});

export const MapProvider = ({ children }) => {
    const [showMap, toggleMap] = UseToggle();

    return (
        <MapContext.Provider value={{ 
            showMap, 
            toggleMap
        }}>
            {children}
        </MapContext.Provider>
    );
};
