import styled from "styled-components";

const ListStyled = styled.div`
  height:100%;

  .main {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

  .container {
    background-color: #fff8cc;
    padding: 1em;
    overflow: hidden;
    width:90%;
    height: 75%;
    margin: 0 auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width:90%;
    background-color: #fff8cc;
    padding: 15px;
    margin: 10px auto 15px auto;
  }

  .labelToDo img {
    position: absolute;
    top: 90px;
    left: -40px;
    width: 150px;
    height: auto;
  }

  .listContainer {
    border: 3px dashed #301141;
    border-radius: 10px;
    padding-top: 10px;
    height: 100%;
  }

  @media (max-width: 768px) {
    .main{
      width:80%;
    }
    .labelToDo img {
      width: 100px;
      top: 110px;
      left: -30px;
    }
    .container{
      height:70%;
    }
  }
`;

export default ListStyled;
