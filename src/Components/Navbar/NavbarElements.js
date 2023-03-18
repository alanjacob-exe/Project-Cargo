import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

import styled from "styled-components";

export const Nav = styled.nav`

  position: absolute;
  background-size: cover;
    
  height: 85px;
  width:100%;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-size:20px;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #fff;
    margin: 20px;
    text-decoration-line: underline;
    text-decoration-style: solid;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #afa3d5;
  }
`;
export const NavLink2 = styled.nav`
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-size:20px;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #fff;
    margin: 20px;
    text-decoration-line: underline;
    text-decoration-style: solid;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #afa3d5;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 3%;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0px
    /* Third Nav 
  /* justify-content: flex-end;
  width: 100vw; */ @media screen
    and (max-width: 600px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 12px;

  padding: 10px 22px;
  align-items: center;
  color: #fff;
  outline: none;
  margin-top:1%;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left:20px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #afa3d5;
    }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
