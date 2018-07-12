import * as React from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { ReducerAction } from '../actions';
import { StoreState } from '../types';

export interface Props { str: string; }

export function Hello({ str }: Props) {
    return (
        <div>
            <code>{str}</code>
        </div>
    );
}


export function mapStateToProps(state: StoreState) {
  return { str: JSON.stringify(state) };
}


export function mapDispatchToProps(dispatch: Dispatch<ReducerAction>) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

