import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_FAIL,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_PENDING} from './constants';
const initialStateSearch ={
  searchField:'',
};
const initialState ={
    isPending: false,
    robots:[],
    error:''
};

export const searchRobots = (state=initialStateSearch,action={})=>{
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state , searchField:action.payload};
        default:
            return  state;

    }
};

export const requestRobotsReducer =(state=initialState, action={})=>{
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {...state,isPending:true};
        case REQUEST_ROBOTS_SUCCESS:
            return {...state,robots:action.payload,isPending: false};
        case REQUEST_ROBOTS_FAIL:
            return {...state,error:action.payload,isPending: false};
        default:
            return state;
    }
};