import { useCallback } from "react"
import { ELEMENT_ICON_BY_TYPE, ELEMENT_NAME_BY_TYPE } from "../../constants"
import cn from 'classnames'
import { ReactComponent as DeleteButtonIcon } from '../../assets/icons/actionDelete.svg';
import { ReactComponent as CopyButtonIcon } from '../../assets/icons/actionCopy.svg';
import { ReactComponent as TopButtonIcon } from '../../assets/icons/actionTop.svg';
import { ReactComponent as DownButtonIcon } from '../../assets/icons/actionDown.svg';

const INPUT_CLASS = "w-full font-roboto text-xs rounded-sm border p-5"

export function ConstructorElement({
  index,
  element,
  isSelected,
  isLast,
  onClick,
  onChange,
  onMoveTop,
  onMoveBottom,
  onDelete,
  onClone
}) {
  const IconComponent = ELEMENT_ICON_BY_TYPE[element.type]
  const elementName = ELEMENT_NAME_BY_TYPE[element.type]

  const handleClick = useCallback(() => {
    onClick(element.id)
  }, [onClick, element.id])

  const handleChange = useCallback((e) => {
    onChange(index, e.target.value)
  }, [index, onChange])

  const handleMoveTop = useCallback(() => {
    onMoveTop(index)
  }, [index, onMoveTop])

  const handleMoveBottom = useCallback(() => {
    onMoveBottom(index)
  }, [index, onMoveBottom])

  const handleDeleteElement = useCallback(() => {
    onDelete(index)
  }, [index, onDelete])

  const handleCloneElement = useCallback(() => {
    onClone(index)
  }, [index, onClone])

  return (
    <div className={cn('flex', 'flex-col', 'items-center', 'rounded-lg', 'p-4','cursor-pointer', 'relative', {
      'bg-slate-100': !isSelected,
      'bg-custom-grey': isSelected,
    })} onClick={handleClick}>
      <IconComponent className="mb-2.5"/>
      <span className="font-roboto text-xs mb-5">{elementName}</span>

      {/* Input zone / can be moved to separate component */}
      { isSelected &&
        <div className="w-full p-5 bg-white flex rounded-sm border-custom-light-grey">
          <input type="text" className={INPUT_CLASS} defaultValue={element.data} onChange={handleChange} />
        </div>
      }

      {/* Toolbar zone / can be moved to separate component */}
      { isSelected && <div className="absolute top-[-19px] right-2 flex">
        <div className="flex gap-1 rounded-t bg-blue-200 mr-5 p-0.5">
          <button className="hover:opacity-50 disabled:cursor-not-allowed" disabled={index === 0} onClick={handleMoveTop}><TopButtonIcon /></button>
          <button className="hover:opacity-50 disabled:cursor-not-allowed" disabled={isLast} onClick={handleMoveBottom}><DownButtonIcon /></button>
        </div>
        <div className="flex gap-1 rounded-t bg-blue-300 p-0.5">
          <button className="hover:opacity-50" onClick={handleCloneElement}><CopyButtonIcon /></button>
          <button className="hover:opacity-50" onClick={handleDeleteElement}><DeleteButtonIcon /></button>
        </div>
      </div>}
    </div>
  )
}