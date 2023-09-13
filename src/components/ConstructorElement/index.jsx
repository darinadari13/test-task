import { useCallback } from "react"
import { ELEMENT_ICON_BY_TYPE } from "../../constants"
import cn from 'classnames'

const INPUT_CLASS = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

export function ConstructorElement({ index, element, isSelected, onClick, onChange }) {
  const IconComponent = ELEMENT_ICON_BY_TYPE[element.type]

  const handleClick = useCallback(() => {
    onClick(element.id)
  }, [onClick, element.id])

  const handleChange = useCallback((e) => {
    onChange(index, e.target.value)
  }, [index, onChange])

  return (
    <div className={cn('flex', 'flex-col', 'items-center', 'bg-slate-100', 'rounded-lg', 'py-4', {
      'bg-blue-200': isSelected,
    })} onClick={handleClick}>
      <IconComponent />
      {element.type}
      {isSelected && <input type="text" className={INPUT_CLASS} defaultValue={element.data} onChange={handleChange} />}
    </div>
  )
}