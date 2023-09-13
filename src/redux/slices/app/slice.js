import { createSlice } from '@reduxjs/toolkit';
import { HEADLINE_TYPE, PARAGRAPH_TYPE, BUTTON_TYPE, IMAGE_TYPE, DEFAULT_HEADLINE_DATA, DEFAULT_PARAGRAPH_DATA, DEFAULT_BUTTON_DATA, DEFAUL_IMAGE_DATA } from '../../../constants';
import { generateUniqueId } from '../../../utils/generateUniqueId';

const initialState = {
  selectedElementId: null,
  page: [
    { id: generateUniqueId(), type: HEADLINE_TYPE, data: DEFAULT_HEADLINE_DATA },
    { id: generateUniqueId(), type: PARAGRAPH_TYPE, data: DEFAULT_PARAGRAPH_DATA },
    { id: generateUniqueId(), type: BUTTON_TYPE, data: DEFAULT_BUTTON_DATA },
    { id: generateUniqueId(), type: IMAGE_TYPE, data: DEFAUL_IMAGE_DATA },
  ],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addElement(state, action) {
      const { index, item } = action.payload
      state.page.splice(index, 0, item);
    },
    selectElement(state, action) {
      state.selectedElementId = action.payload
    },
    updateElementData(state, action) {
      const { index, data } = action.payload
      state.page[index].data = data
    }
  },
});

const appReducer = appSlice.reducer

export const { addElement, selectElement, updateElementData } = appSlice.actions


export default appReducer;
