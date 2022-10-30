export const filterDuplicateHotels = (hotels, sortBy) => {
    const seenHotel = {};
    let filteredHotels = [];

    for (let i = 0; i < hotels.length; i++) {
        const hotel = hotels[i];
        if (!seenHotel[hotel.code]) {
            seenHotel[hotel.code] = true;
            filteredHotels.push(hotel);
        }
    }

    filteredHotels.sort((a, b) => {
        if (!a[sortBy]) throw new Error(`${sortBy} incorrect input`);
        
        return a[sortBy] > b[sortBy] ? 1: -1;
    });
        
    return filteredHotels;
};

export const twoDecimals = price => {
    return (Math.round(Number(price) * 100) / 100).toFixed(2);
};

export const paragraphsConverter = (description) => {
    return description.split('\r\n\r\n');
};