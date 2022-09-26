import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";



export const NavLink = styled(Link)`
  color: #fff;
  margin-top:20px;
  font-size: 22px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-family: "Kanit", sans-serif;
  
  position:absolute;

  cursor: pointer;

  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
    background-color:#000;
  }
`;