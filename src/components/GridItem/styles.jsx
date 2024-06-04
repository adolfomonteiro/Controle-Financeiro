import styled from "styled-components"

export const Tr = styled.tr``;
export const Td = styled.td`
    padding-top:15px;
    text-align:${(props)=>(props.alignCenter ? "justify" : "center")}
    word-break:break-all;

    svg{
        width:18px;
        height:18px;
    }
`;
export const Button = styled.button`
  padding:5px 10px;
  border:none;
  border-radius:5px;
  cursor:pointer;
  color:white;
  background-color:blueviolet;
 `;

