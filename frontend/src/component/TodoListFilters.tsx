import {useRecoilState} from "recoil";
import {SHOWSTATE, todoListFilterState} from "../model/RecoilAtom.ts";

export const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = (e) => {
        setFilter(e.target.value);
    };

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value={SHOWSTATE.SHOWALL}>All</option>
                <option value={SHOWSTATE.SHOWCOMPLETED}>Completed</option>
                <option value={SHOWSTATE.SHOWUNCOMPLETED}>Uncompleted</option>
            </select>
        </>
    );
}

