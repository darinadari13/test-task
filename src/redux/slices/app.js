import { createSlice } from '@reduxjs/toolkit';
import { generateUniqueId } from '../../utils';
import { HEADLINE_TYPE, PARAGRAPH_TYPE, BUTTON_TYPE, IMAGE_TYPE, DEFAULT_HEADLINE_DATA, DEFAULT_PARAGRAPH_DATA, DEFAULT_BUTTON_DATA } from '../../constants';

const initialState = {
  blocks: [
    { id: generateUniqueId(), type: HEADLINE_TYPE, data: DEFAULT_HEADLINE_DATA },
    { id: generateUniqueId(), type: PARAGRAPH_TYPE, data: DEFAULT_PARAGRAPH_DATA },
    { id: generateUniqueId(), type: BUTTON_TYPE, data: DEFAULT_BUTTON_DATA },
    { id: generateUniqueId(), type: IMAGE_TYPE, data: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png' },
  ],
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
});

const appReducer = app.reducer

export default appReducer;
