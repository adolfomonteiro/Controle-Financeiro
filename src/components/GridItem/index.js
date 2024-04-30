import React from "react";
import * as C from "./styles"

import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react";

const GridItem = ({item,onDelete})=>{
    return( 
      <>
      <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>  
      
    </C.Tr>
     </>
   /*
    */
    );
};
export default GridItem