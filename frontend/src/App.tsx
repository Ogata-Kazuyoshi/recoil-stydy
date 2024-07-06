import './App.css'
import {RecoilRoot,} from 'recoil';
import {TodoList} from "./component/TodoList.tsx";


function App() {

  return (
    <>
        <RecoilRoot>
            <TodoList />
        </RecoilRoot>
    </>
  )
}

export default App
