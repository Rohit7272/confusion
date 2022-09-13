import {combineReducers, createStore} from 'redux';
//import {Dishes} from "./redux/dishes";

import {DISHES} from "./shared/dishes";
import {LEADERS} from "./shared/leaders";
import {COMMENTS} from "./shared/comments";
import {PROMOTIONS} from "./shared/promotions";

export const ConfigureStore = () => {
const store = createStore(
        combineReducers({
            dishes: DISHES,
            leaders: LEADERS,
            promotions:PROMOTIONS,
            comments:COMMENTS
        })


);
return store;
}