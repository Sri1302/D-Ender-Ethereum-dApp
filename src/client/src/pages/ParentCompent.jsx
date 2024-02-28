// ParentComponent.js
import React, { useState } from 'react';
import Admin from './Admin';
import OpenTender from './OpenTender';

const ParentComponent = () => {
    const [tenderData, setTenderData] = useState([]);

    const handleCreateTender = (newTender) => {
        setTenderData([...tenderData, newTender]);
    };

    return (
        <div>
            <Admin onCreateTender={handleCreateTender} />
            <OpenTender tenderData={tenderData} />
        </div>
    );
};

export default ParentComponent;
