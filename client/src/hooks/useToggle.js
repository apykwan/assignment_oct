import { useState } from 'react';

const useToggle = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore(!showMore);

    return [showMore, toggleShowMore];
};

export default useToggle;