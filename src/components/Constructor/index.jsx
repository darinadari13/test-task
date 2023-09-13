import { useSelector } from "react-redux"
import { getCurrentPageSelector } from "../../redux/slices/app/selectors"
import { ConstructorElement } from "../ConstructorElement";
import { Droppable } from "react-beautiful-dnd";

export function Constructor() {
  const page = useSelector(getCurrentPageSelector)

  return (
    <Droppable droppableId="constructor">
      {
        provider => (
          <div
            className="flex flex-col gap-y-4 bg-slate-200 w-2/4 p-5" ref={provider.innerRef}
            {...provider.droppableProps}
          >
            {page.map(element => <ConstructorElement key={element.id} element={element} />)}
          </div>
        )
      }
    </Droppable>
  )
}