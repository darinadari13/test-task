import { ReactComponent as HeadlineIcon } from './assets/icons/headline.svg';
import { ReactComponent as ImageButtonIcon } from './assets/icons/imageButton.svg';
import { ReactComponent as ParagraphIcon } from './assets/icons/paragraph.svg';

export const HEADLINE_TYPE = 'h1';
export const PARAGRAPH_TYPE = 'p';
export const BUTTON_TYPE = 'button';
export const IMAGE_TYPE = 'img';

export const HEADLINE_NAME = 'Headline';
export const PARAGRAPH_NAME = 'Paragraph';
export const BUTTON_NAME = 'Button';
export const IMAGE_NAME = 'Image';

export const DEFAULT_HEADLINE_DATA = 'A legendary cap set that feels like new';
export const DEFAULT_PARAGRAPH_DATA = 'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal. Using the "Insert" panel on the right, drag and drop the Abandoned Cart element onto the page below.';
export const DEFAULT_BUTTON_DATA = 'Register now'
export const DEFAUL_IMAGE_DATA = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png'

export const ELEMENT_ICON_BY_TYPE = {
  [HEADLINE_TYPE]: HeadlineIcon,
  [PARAGRAPH_TYPE]: ParagraphIcon,
  [BUTTON_TYPE]: ImageButtonIcon,
  [IMAGE_TYPE]: ImageButtonIcon,
}

export const ELEMENT_NAME_BY_TYPE = {
  [HEADLINE_TYPE]: HEADLINE_NAME,
  [PARAGRAPH_TYPE]: PARAGRAPH_NAME,
  [BUTTON_TYPE]: BUTTON_NAME,
  [IMAGE_TYPE]: IMAGE_NAME,
}

export const DEFAUL_DATA_BY_TYPE = {
  [HEADLINE_TYPE]: DEFAULT_HEADLINE_DATA,
  [PARAGRAPH_TYPE]: DEFAULT_PARAGRAPH_DATA,
  [BUTTON_TYPE]: DEFAULT_BUTTON_DATA,
  [IMAGE_TYPE]: DEFAUL_IMAGE_DATA,
}

export const TOOLS_LIST = [
  { name: ELEMENT_NAME_BY_TYPE[HEADLINE_TYPE], IconComponent: ELEMENT_ICON_BY_TYPE[HEADLINE_TYPE], type: HEADLINE_TYPE },
  { name: ELEMENT_NAME_BY_TYPE[PARAGRAPH_TYPE], IconComponent: ELEMENT_ICON_BY_TYPE[PARAGRAPH_TYPE], type: PARAGRAPH_TYPE },
  { name: ELEMENT_NAME_BY_TYPE[BUTTON_TYPE], IconComponent: ELEMENT_ICON_BY_TYPE[BUTTON_TYPE], type: BUTTON_TYPE },
  { name: ELEMENT_NAME_BY_TYPE[IMAGE_TYPE], IconComponent: ELEMENT_ICON_BY_TYPE[IMAGE_TYPE], type: IMAGE_TYPE },
]