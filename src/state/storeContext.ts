import React, { useContext } from 'react';

import authStore from './authStore';
import popupsStore from './popupStore';

const contextValue = {
  authStore: new authStore(),
  popupsStore: new popupsStore(),
};

export const AppContext = React.createContext(contextValue);

export const useStores = () => {
  return useContext(AppContext);
};
