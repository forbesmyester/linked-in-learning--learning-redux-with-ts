import * as React from 'react';
import { connect } from 'react-redux';

import { ThunkDispatch } from 'redux-thunk';
import { requestSuggestions, setGoal, ReducerAction } from '../actions';
import { StoreState } from '../types';

export interface Props {
  goal: number;
  suggestions: string[];
  onSetGoal?: () => void;
  onRequestSuggestions: () => void;
}

function printSuggestion(suggestion: string) {
    return <li>{ suggestion }</li>;
}

export function Hello({ goal, suggestions, onSetGoal, onRequestSuggestions }: Props) {
    return (
        <>
            <div className="Hello">
                <p>Goal: { goal }</p>
            </div>
            <div>
                <p>Suggestions:</p>
                <ul>
                    { suggestions.map(printSuggestion) }
                </ul>
            </div>
            <div>
                <button onClick={ onSetGoal }>Set goal to 10!</button>
                <button onClick={ onRequestSuggestions }>Fetch Suggestions</button>
            </div>
        </>
    );
}


export function mapStateToProps({ goal, resortNames: { suggestions } }: StoreState) {
  return { goal, suggestions};
}


export function mapDispatchToProps(dispatch: ThunkDispatch<StoreState, void, ReducerAction>) {
  return {
    onRequestSuggestions: () => {
        dispatch(requestSuggestions())
    },
    onSetGoal: () => dispatch(setGoal(10)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
