import { useSelector } from "react-redux"
import { getCurrentPageSelector } from "../../redux/slices/app/selectors"
import { ConstructorElement } from "../ConstructorElement";
import { Droppable, Draggable } from "react-beautiful-dnd";

export function Constructor() {
  const page = useSelector(getCurrentPageSelector)

  return (
    <Droppable droppableId="constructor">
      {
        provider => (
          <div
            className="flex flex-col gap-y-4 bg-slate-200 w-2/4 p-5 overflow-y-auto" ref={provider.innerRef}
            {...provider.droppableProps}
          >
            {page.map((element, index) => (
              <Draggable key={element.id} draggableId={element.id} index={index}>
                {
                  provider => (
                    <div ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps}>
                      <ConstructorElement key={element.id} element={element} />
                    </div>
                  )
                }
              </Draggable>
            ))}
          </div>
        )
      }
    </Droppable>
  )
}