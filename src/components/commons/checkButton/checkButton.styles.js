import styled from "styled-components";

export const CheckButtonStyled = styled.button`
  background: ${(props) => (props.isCompleted ? "#4BD296" : "#E0E4E2")};
  border: 1px solid ${(props) => (props.isCompleted ? "#C4F2DE" : "#fff")};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
