import { combineReducers } from "redux";
import { slideReducer } from "./reducer/slideChange"
import { videoReducer } from "./reducer/videoToggle";
import { teamReducer } from "./reducer/buildingTeam";
import { floorReducer } from "./reducer/floorNav";
const createStore = require('redux').createStore;
const reducers = combineReducers({
    slideReducer,
    videoReducer,
    teamReducer,
    floorReducer
})

export const store = createStore(reducers)