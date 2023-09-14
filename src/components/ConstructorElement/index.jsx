import { useCallback } from "react"
import { ELEMENT_ICON_BY_TYPE, ELEMENT_NAME_BY_TYPE } from "../../constants"
import cn from 'classnames'
import { ReactComponent as ImageButtonIcon } from '../../assets/icons/imageButton.svg';

const INPUT_CLASS = "w-full font-roboto text-xs rounded-sm border p-5"

export function ConstructorElement({ index, element, isSelected, onClick, onChange }) {
  const IconComponent = ELEMENT_ICON_BY_TYPE[element.type]
  const elementName = ELEMENT_NAME_BY_TYPE[element.type]

  const handleClick = useCallback(() => {
    onClick(element.id)
  }, [onClick, element.id])

  const handleChange = useCallback((e) => {
    onChange(index, e.target.value)
  }, [index, onChange])

  return (
    <div className={cn('flex', 'flex-col', 'items-center', 'rounded-lg', 'p-4','cursor-pointer', 'relative', {
      'bg-slate-100': !isSelected,
      'bg-custom-grey': isSelected,
    })} onClick={handleClick}>
      <IconComponent className="mb-2.5"/>
      <span className="font-roboto text-xs mb-5">{elementName}</span>

      { isSelected &&
        <div className="w-full p-5 bg-white flex rounded-sm border-custom-light-grey">
          <input type="text" className={INPUT_CLASS} defaultValue={element.data} onChange={handleChange} />
        </div>
      }
      <div className="absolute -top-6 right-2 flex">
        <div className="flex rounded-t bg-blue-200 mr-5">
          <button><ImageButtonIcon /></button>
          <button><ImageButtonIcon /></button>
        </div>
        <div className="flex rounded-t bg-blue-300">
          <button><ImageButtonIcon /></button>
          <button><ImageButtonIcon /></button>
        </div>
      </div>
    </div>
  )
}