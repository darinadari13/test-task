import { ELEMENT_ICON_BY_TYPE } from "../../constants"


export function ConstructorElement({ element }) {
  const IconComponent = ELEMENT_ICON_BY_TYPE[element.type]

  return (
    <div className="flex flex-col items-center bg-slate-100 rounded-lg py-4">
      <IconComponent />
      {element.type}
    </div>
  )
}