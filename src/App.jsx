import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Preview } from "./components/Preview";
import { Constructor } from "./components/Constructor";
import { Header } from "./components/Header";
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from "react-redux";
import { addElementToIndex } from "./redux/slices/app/slice";
import { generateUniqueId } from "./utils/generateUniqueId";
import { DEFAUL_DATA_BY_TYPE } from "./constants";

function App() {
  const dispatch = useDispatch()

  const handleDragEnd = (result) => {
    const newItem = {
      id: generateUniqueId(),
      type: result.draggableId,
      data: DEFAUL_DATA_BY_TYPE[result.draggableId]
    }

    dispatch(addElementToIndex({ index: result.destination.index, item: newItem }))
  }
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <DragDropContext onDragEnd={handleDragEnd}>
        <main className="flex h-screen">
          <div className="p-5 w-1/4 border-r">
            <Sidebar />
          </div>
          <div className="flex w-3/4">
            <Content>
              <Constructor />
              <Preview />
            </Content>
          </div>
        </main>
      </DragDropContext>
    </div>
  );
}
export default App;


