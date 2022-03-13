import React from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import SLink from "./SLink";
import List from "./List";
function Category() {
  return (
    <List>
      <SLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

export default Category;
