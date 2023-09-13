import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Preview } from "./components/Preview";
import { Constructor } from "./components/Constructor";
import { Header } from "./components/Header";
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const handleDragEnd = (result) => {
    console.log(result);
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


