import { useCallback } from "react"
import { generateUniqueId } from "../../utils/generateUniqueId"
import { useDispatch } from "react-redux"
import { addElementToEnd } from "../../redux/slices/app/slice"
import { DEFAUL_DATA_BY_TYPE } from "../../constants"

export function ToolbarElement({ type, IconComponent, name }) {
  const dispatch = useDispatch()

  const handleAddNewItem = useCallback(() => {
    const newItem = {
      id: generateUniqueId(),
      type,
      data: DEFAUL_DATA_BY_TYPE[type]
    }

    dispatch(addElementToEnd({ item: newItem }))
  }, [type, dispatch])

  return (
    <div className="flex flex-col items-center rounded-lg bg-slate-200 py-6" onClick={handleAddNewItem}>
      <IconComponent className="mb-2.5"/>
      <span className="font-roboto text-xs">{name}</span>
    </div>
  )
}