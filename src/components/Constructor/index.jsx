import { useSelector } from "react-redux"
import { getCurrentPageSelector } from "../../redux/slices/app/selectors"
import { ConstructorElement } from "../ConstructorElement";

export function Constructor() {
  const page = useSelector(getCurrentPageSelector)

  return (
    <div className="flex flex-col gap-y-4 bg-slate-200 w-2/4 p-5">
      {page.map(element => <ConstructorElement element={element} />)}
    </div>
  )
}