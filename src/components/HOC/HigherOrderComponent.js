import React from 'react';
import Loader from './../Loader';

const withLoader = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    return isLoading ? <Loader /> : <WrappedComponent {...props} />;
  };
};

export default withLoader;
