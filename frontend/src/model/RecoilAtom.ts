import {atom, selector} from "recoil";

export type ListState = {
    id: number
    text:string
    isComplete:boolean
}

export const todoListState = atom<ListState[]>({
    key: 'TodoList',
    default: [],
});

export enum SHOWSTATE {
    SHOWALL='SHOWALL',
    SHOWCOMPLETED='SHOWCOMPLETED',
    SHOWUNCOMPLETED= 'SHOWUNCOMPLETED'
}

export const todoListFilterState = atom<SHOWSTATE>({
    key: 'TodoListFilter',
    default: SHOWSTATE.SHOWALL,
});

export const filteredTodoListState = selector({
    key: 'FilteredTodoList',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case SHOWSTATE.SHOWCOMPLETED:
                return list.filter((item) => item.isComplete);
            case SHOWSTATE.SHOWUNCOMPLETED:
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});

export const todoListStatsState = selector({
    key: 'TodoListStats',
    get: ({get}) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});