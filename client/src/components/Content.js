import { Routes, Route, Navigate } from 'react-router-dom';

import Description from '../pages/Description';
import Details from '../pages/Details';
import Location from '../pages/Location';
import './Content.css';

const Content = () => {
    return (
        <div className="hotel-content">
            <Routes>
                <Route path='/description' element={<Description />} />
                <Route path='/details' element={<Details />} />
                <Route path='/location' element={<Location />} />
                <Route path='*' element={<Navigate to="/description" replace />} />
            </Routes>
        </div>
    );
};

export default Content;