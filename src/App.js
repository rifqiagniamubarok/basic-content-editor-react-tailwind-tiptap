import { Editor } from './components';

function App() {
  return (
    <div className="flex flex-col items-center gap-10 p-20">
      <div>
        <p className="text-2xl">Simple Content Editor</p>
      </div>
      <div className="container w-[50%] ">
        <Editor />
      </div>
    </div>
  );
}

export default App;
