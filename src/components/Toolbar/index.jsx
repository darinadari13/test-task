import { TOOLS_LIST } from '../../constants';
import { PageElement } from '../PageElement';

export function Toolbar() {
  return (
    <div className='w-full grid grid-cols-2 gap-4'>
      {TOOLS_LIST.map(tool => <PageElement type={tool.type} name={tool.name} IconComponent={tool.IconComponent} />)}
    </div>
  )
}