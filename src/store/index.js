import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const enhancer =
process.env.NODE_ENV == 'development' ? console.tron.createEnhancer(): null; //config o reactotron com o redux

const store = createStore(rootReducer,enhancer);

export default store;
