import React from "react";
import ItemList from "../components/itemList/ItemList";
import Card from "../components/card/Card";

const Homepage = a => {
  return (
    <ItemList>
      <Card name="name" img="urlImg" level="level" />
    </ItemList>
  );
};

export default Homepage;
