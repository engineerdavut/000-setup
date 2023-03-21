import { createStore } from 'redux';

import { HolderReducer } from "./HolderReducer";

const store=createStore(HolderReducer)
export default store