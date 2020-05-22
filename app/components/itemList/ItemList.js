import React from "react";
import { connect } from "react-redux";

export const ItemList = ({ children, state: { tests } }) => {
  return (
    <ul className='list-group list-group-horizontal'>
      {tests.map((item, idx) => {
        return React.Children.map(children, (child) => {
          return React.cloneElement(child, { item, idx });
        });
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(ItemList);
