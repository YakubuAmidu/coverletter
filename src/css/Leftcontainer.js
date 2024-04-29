import styled from "styled-components";

export const Leftcontainer = styled.div`
  flex: 1;
  border-right: 3px solid orangered;
`;

export const Leftcontaineritems = styled.div`
  border: 1px solid white;
  text-align: right;
  padding: 1rem 1rem;
`;

export const Leftcontainertitle = styled.h2`
  font-weight: bold;
  font-family: Helvetica;
`;

export const Leftcontainersection = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: right;
  margin-bottom: 0.5rem;
`;

export const Leftcontainersectionp = styled.p`
  margin-right: 1rem;
  font-family: Helvetica;
`;

export const Leftcontainersectionicon = styled.p`
  font-size: 1.2rem;
  color: #979797;
  opacity: 0.6;

  &:hover {
    color: #525252;
    opacity: 1;
    transition: all 0.5s ease-out;
  }
`;
