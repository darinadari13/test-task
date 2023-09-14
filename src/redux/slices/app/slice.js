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
    addElementToIndex(state, action) {
      const { index, item } = action.payload
      state.page.splice(index, 0, item);
    },
    addElementToEnd(state, action) {
      const { item } = action.payload
      state.page.push(item)
    },
    selectElement(state, action) {
      state.selectedElementId = action.payload
    },
    updateElementData(state, action) {
      const { index, data } = action.payload
      state.page[index].data = data
    },
    moveElementTop(state, action) {
      [state.page[action.payload], state.page[action.payload - 1]] = [state.page[action.payload - 1], state.page[action.payload]];
    },
    moveElementBottom(state, action) {
      [state.page[action.payload], state.page[action.payload + 1]] = [state.page[action.payload + 1], state.page[action.payload]];
    },
    deleteElement(state, action) {
      const elementIndex = action.payload
      state.page.splice(elementIndex, 1)
    },
    cloneElement(state, action) {
      const elementIndex = action.payload
      const element = state.page[elementIndex]
      const newElement = { ...element, id: generateUniqueId() }

      state.page.splice(elementIndex + 1, 0, newElement)
    }
  },
});

const appReducer = appSlice.reducer

export const {
  addElementToIndex,
  addElementToEnd,
  selectElement,
  updateElementData,
  moveElementTop,
  moveElementBottom,
  deleteElement,
  cloneElement
} = appSlice.actions


export default appReducer;
