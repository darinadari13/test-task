import { useSelector } from "react-redux"
import { getCurrentPageSelector, getSelectedElementIDSelector } from "../../redux/slices/app/selectors"
import { ConstructorElement } from "../ConstructorElement";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { selectElement, updateElementData } from "../../redux/slices/app/slice";

export function Constructor() {
  const dispatch = useDispatch()
  const page = useSelector(getCurrentPageSelector)
  const selectedElementId = useSelector(getSelectedElementIDSelector)

  const handleElementClick = useCallback((elementId) => {
    dispatch(selectElement(elementId))
  }, [])

  const handleElementDataChange = useCallback((index, data) => {
    dispatch(updateElementData({ index, data }))
  }, [])

  return (
    <Droppable droppableId="constructor">
      {
        provider => (
          <div
            className="flex flex-col gap-y-4 bg-slate-200 w-2/4 p-25 pb-20 overflow-y-auto" ref={provider.innerRef}
            {...provider.droppableProps}
          >
            {page.map((element, index) => (
              <Draggable key={element.id} draggableId={element.id} index={index} isDragDisabled>
                {
                  provider => (
                    <div ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps}>
                      <ConstructorElement
                        key={element.id}
                        element={element}
                        index={index}
                        isSelected={selectedElementId === element.id}
                        onClick={handleElementClick}
                        onChange={handleElementDataChange}
                      />
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