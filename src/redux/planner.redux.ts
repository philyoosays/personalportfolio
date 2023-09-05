import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export namespace Type {
    export interface InitialState {
        user: any;
        token: string;
        selected: number[][];
    }
}

const initialState: Type.InitialState = { user: {}, token: '', selected: [] };

const plannerSlice = createSlice({
    name: 'planner',
    initialState,
    reducers: {
        rm_data: (state: Type.InitialState, action: PayloadAction<null>) => {
            state = { user: {}, token: '', selected: [] };
        },
        rm_selected: (state: Type.InitialState, action: PayloadAction<number>) => {
            state.selected = state.selected.splice(action.payload, 1);
        },
        set_selected: (state: Type.InitialState, action: PayloadAction<number[]>) => {
            state.selected.push(action.payload);
        },
        set_token: (state: Type.InitialState, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        set_user: (state: Type.InitialState, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
    }
})

export default plannerSlice.reducer;

const { rm_data, set_token, set_user } = plannerSlice.actions;

export const removeData = () => (dispatch: any) => dispatch(rm_data(null));
export const setToken = (token: string) => (dispatch: any) => dispatch(set_token(token));
export const setUser = (user: any) => (dispatch: any) => dispatch(set_user(user));

