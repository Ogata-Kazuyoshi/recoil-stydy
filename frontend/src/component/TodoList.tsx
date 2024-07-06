import {useRecoilValue} from "recoil";
import {filteredTodoListState} from "../model/RecoilAtom.ts";
import {TodoItem} from "./TodoItem.tsx";
import {TodoItemCreator} from "./TodoItemCreator.tsx";
import {TodoListFilters} from "./TodoListFilters.tsx";
import {TodoListStatus} from "./TodoListStatus.tsx";

export const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStatus/>
            <TodoListFilters/>
            <TodoItemCreator/>

            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem}/>
            ))}
        </>
    );
}

