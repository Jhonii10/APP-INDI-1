import React from 'react';
import Breadcrumbs from '../components/BreadCrums';
import Error from '../components/Error';

const Jobs = () => {
    return (
        <div className='pt-24'>
        <Breadcrumbs/>
            <h1>Jobs</h1>
            <Error/>
        </div>
    );
}

export default Jobs;
