import { Draggable, Droppable } from 'react-beautiful-dnd';
import { TOOLS_LIST } from '../../constants';
import { ToolbarElement } from '../ToolbarElement';

export function Toolbar() {
  return (
    <Droppable droppableId='tool'>
        {
          provider => (
            <div ref={provider.innerRef} className='w-full grid grid-cols-2 gap-4' {...provider.droppableProps}>
              {TOOLS_LIST.map((tool, index) => (
                <Draggable key={tool.type} draggableId={tool.type} index={index}>
                  {
                    provider => (
                      <div ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps}>
                        <ToolbarElement
                          type={tool.type}
                          name={tool.name}
                          IconComponent={tool.IconComponent}
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