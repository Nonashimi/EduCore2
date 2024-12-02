import { useMemo } from "react";


export const useItems = function(thisPage, number, courses) {
    return useMemo(() =>{
        let data = [];
        for(let i =(thisPage - 1)* number; i < thisPage * number; i++){
          data.push(courses[i]);
        }
        return data;
      });
}