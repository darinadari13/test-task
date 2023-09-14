import { useCallback } from "react"
import { ELEMENT_ICON_BY_TYPE, ELEMENT_NAME_BY_TYPE } from "../../constants"
import cn from 'classnames'

const INPUT_CLASS = "bg-white border rounded-sm w-custom border-4 border-solid border-transparent box-shadow-inset mt-2.5 p-5 shadow-custom font-roboto text-xs"

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
    <div className={cn('flex', 'flex-col', 'items-center', 'rounded-lg', 'py-4', {
      'bg-slate-100': !isSelected,
      'bg-custom-grey': isSelected,
    })} onClick={handleClick}>
      <IconComponent  className="mb-2.5"/>
      <span className="font-roboto text-xs">{elementName}</span>
      {isSelected && <input type="text" className={INPUT_CLASS} defaultValue={element.data} onChange={handleChange} />}
    </div>
  )
}