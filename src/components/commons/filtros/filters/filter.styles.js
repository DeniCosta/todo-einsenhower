import styled from 'styled-components';

const FilterStyled = styled.div`
  display:flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
  flex-wrap: nowrap;

  label{
    display:flex;
    flex-direction:column;
    align-items: center;
    font-size: 10px;
  }
`;

export default FilterStyled;