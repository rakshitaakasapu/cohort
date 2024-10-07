import {atom, selector} from "recoil";

export const countAtom= atom({
    key: "countAtom",
    default: 0
});

//no need for this to be jsx file, it can be jsx

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get})=>{
        const count = get(countAtom);
        return count % 2;
    }
})