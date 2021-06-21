import { combineReducers } from "redux";

import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionReducer from "./collection/collection.reducer";

import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:"root",
    storage,
    whitelist:['cart']
}

const rootReducer=combineReducers({
    user:userReducer,
    cart:CartReducer,
    directory:directoryReducer,
    collection:collectionReducer
});

export default persistReducer(persistConfig,rootReducer);