import React from "react";
import styled from "styled-components";

const CardImage = styled.img`
  transition: all ease-out 0.4s;
  max-width: 240px;
  min-height: 100%;
`;

const CardTitle = styled.div`
  max-width: 240px;
  padding: 0.5rem;
`;

const CardBody = styled.div`
  cursor: pointer;
  overflow: hidden;
  &:hover .card-image {
    transform: scale(1.1);
  }
`;

const CardWrapper = styled.div`
  overflow: hidden;
`;

const Card = ({ img, level, item, name }) => {
  return (
    <CardBody className="card border-primary mb-3 mt-5">
      <div className="card-body p-0">
        <CardWrapper className="card-wrapper__img">
          <CardImage className="card-image" src={item[img]} />
        </CardWrapper>
        <CardTitle>
          <h4 className="card-title text-center mt-2">{item[name]}</h4>
          <p className="card-text text-center">
            Желательный уровень:
            {item[level]}
          </p>
        </CardTitle>
      </div>
    </CardBody>
  );
};

export default Card;
