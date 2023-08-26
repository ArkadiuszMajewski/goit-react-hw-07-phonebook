import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducers } from './reducer';

// const enhancer = devToolsEnhancer();
export const store = createStore(rootReducers);
