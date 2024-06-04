import React from "react";
import * as C from "./styles"

const GridItem = ({item,onDelete})=>{
    return( 
      <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td> 
      <C.Td alignCenter>
  <C.Button onClick={()=>onDelete(item.id)}>Eliminar</C.Button>
        </C.Td>        
    </C.Tr>
   /*
    */
    );
};
export default GridItem