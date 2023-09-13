import { createSlice } from '@reduxjs/toolkit';
import { generateUniqueId } from '../../utils';

const initialState = {
  blocks: [
    { id: generateUniqueId(), type: 'headline', text: 'A legendary cap set that feels like new' },
    { id: generateUniqueId(), type: 'paragraph', text: 'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal. Using the "Insert" panel on the right, drag and drop the Abandoned Cart element onto the page below.' },
    { id: generateUniqueId(), type: 'button', text: 'Register now' },
    { id: generateUniqueId(), type: 'image', text: '../../../public/images/defaultImg.png' },
  ],
};

const blocksSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
  },
});

export default blocksSlice.reducer;
