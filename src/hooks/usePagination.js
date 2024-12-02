import { useState } from "react";

export const usePagination = (arr, num) =>{    
    const allPage = arr.length/num;
    
    const [thisPage, setThisPage] = useState(1);
    const clickNext = () =>{
        setThisPage(thisPage + 1);
    }
    const clickPrev = () =>{
        setThisPage(thisPage - 1);
    }

    return {allPage, thisPage, clickNext, clickPrev};

}