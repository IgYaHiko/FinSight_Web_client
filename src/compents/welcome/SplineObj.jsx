import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineModel = ({ sceneUrl }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Spline scene={sceneUrl} />
    </div>
  );
};

export default SplineModel;
