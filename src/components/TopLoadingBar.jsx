import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const TopLoadingBar = () => {
    const [progress, setProgress] = useState(100);

    return (
        <div className='h-[100vh] w-full flex justify-center items-center py-[20px]'>
      <LoadingBar
        color="#7000FF"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
    );
};

export default TopLoadingBar;