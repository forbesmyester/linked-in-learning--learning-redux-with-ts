
export interface Day {
    resort: string;
    date: Date;
    powder: boolean;
    backcountry: boolean;
}

export interface StoreState {
    allSkiDays: Day[];
    goal: number;
    errors: Error[];
    resortNames: {
        fetching: boolean;
        suggestions: string[];
    }
}


