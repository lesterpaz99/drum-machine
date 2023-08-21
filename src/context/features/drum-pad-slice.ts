import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type BankT = 'Heater Kit' | 'Smooth Piano Kit';

export interface DrumPadStateI {
  power: boolean;
  display: string;
  volume: number;
  bank: BankT;
}

const initialState: DrumPadStateI = {
  power: true,
  display: '',
  volume: 30,
  bank: 'Heater Kit'
}

export const drumPadSlice = createSlice({
  name: 'drumPad',
  initialState,
  reducers: {
    togglePower: (state) => {
      state.power = !state.power
      state.display = '';
    },
    updateDisplay: (state, action: PayloadAction<string>) => {
      state.display = action.payload;
    },
    updateVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    toggleBank: (state, action: PayloadAction<BankT>) => {
      state.bank = action.payload;
      state.display = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { togglePower, updateDisplay, updateVolume, toggleBank } = drumPadSlice.actions

export default drumPadSlice.reducer