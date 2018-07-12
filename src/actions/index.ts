import { ThunkAction } from 'redux-thunk';

import * as constants from '../constants';
import { Day } from '../types';
import { StoreState } from '../types';

export interface SetGoal {
    type: constants.SET_GOAL;
    payload: number;
}

export interface AddSkiDay {
    type: constants.ADD_DAY;
    payload: Day;
}

export interface ChangeSuggestions {
    type: constants.CHANGE_SUGGESTIONS;
    suggestions: string[];
}

export type ReducerAction = SetGoal |
    ChangeSuggestions |
    AddSkiDay;

export function setGoal(n: number): SetGoal {
    return { type: constants.SET_GOAL, payload: n };
}

export function addSkiDay(d: Day): AddSkiDay {
    return { type: constants.ADD_DAY, payload: d };
}


export function requestSuggestions(): ThunkAction<boolean, StoreState, void, ChangeSuggestions> {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({ type: constants.CHANGE_SUGGESTIONS, suggestions: ['A'] });
        }, 500);
        return true;
    }
}
