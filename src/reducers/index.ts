import { array } from 'fp-ts';

import { AddSkiDay, ChangeSuggestions, ReducerAction, SetGoal } from '../actions';
import * as constants from '../constants';
import { StoreState } from '../types';

export function goal(state: StoreState, action: SetGoal): StoreState {
    if (action.type === constants.SET_GOAL) {
        return { ...state, goal: action.payload };
    }
    return state;
}

export function addSkiDay(state: StoreState, action: AddSkiDay): StoreState {
    if (action.type === constants.ADD_DAY) {
        return {
            ...state,
            allSkiDays: array.cons(action.payload, state.allSkiDays)
        };
    }
    return state;
}

function changeSuggestions(state: StoreState, action: ChangeSuggestions): StoreState {
    return {...state,
        resortNames: { fetching: false, suggestions: action.suggestions }
    };
}

export function reducer(state: StoreState, action: ReducerAction) {
    switch (action.type) {
        case constants.ADD_DAY: return addSkiDay(state, action);
        case constants.SET_GOAL: return goal(state, action);
        case constants.CHANGE_SUGGESTIONS: return changeSuggestions(state, action);
    }
    return state;
}
