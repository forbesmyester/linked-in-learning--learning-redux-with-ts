import * as React from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { addSkiDay, AddSkiDay } from '../actions';
import { StoreState } from '../types';

export interface Props {
  str: string;
  onAddSkiDay: (v: string) => void;
  onChangeInput?: () => void;
}

class Days extends React.Component {

    public props: Props;
    private inputValue: string = '';

    constructor (props: Props) {
        super(props);
    }

    public render() {
        this.onChange = this.onChange.bind(this);
        this.onAddSkiDay = this.onAddSkiDay.bind(this);
        return (
            <div className="Hello">
                <p>{this.props.str}</p>
                <form>
                <input type="text" defaultValue="Your Value" onChange={ this.onChange }/>
                <button onClick={ this.onAddSkiDay }>Add Day</button>
                </form>
            </div>
        );
    }

    private onChange({target: { value }}: React.ChangeEvent<HTMLInputElement>) {
        this.inputValue = value;
    }

    private onAddSkiDay(evt: React.MouseEvent<HTMLButtonElement>) {
        evt.preventDefault();
        this.props.onAddSkiDay(this.inputValue);
    }
}


export function mapStateToProps(allSkiDays: StoreState) {
  return { str: JSON.stringify(allSkiDays)  };
}

export function mapDispatchToProps(dispatch: Dispatch<AddSkiDay>) {
    return {
        onAddSkiDay: (val: string) => {
            dispatch(addSkiDay({
                backcountry: true,
                date: new Date(),
                powder: true,
                resort: val,
            }))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Days);
