import React from 'react';
import SharedTipCard from './SharedTipCard';

const TopTrendingTips = ({sharedTips}) => {
    return (
        <div className='space-y-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Top Trending Tips ({sharedTips?.length}):</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    sharedTips?.map(tip => <SharedTipCard key={tip._id} tip={tip}></SharedTipCard>)
                }
            </div>
        </div>
    );
};

export default TopTrendingTips;