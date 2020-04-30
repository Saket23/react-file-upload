import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 20px;
  size: 60;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;

export const FileName = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  span {
    font-size: 18px;
    font-weight: 600;
    margin-right: 10px;
  }
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1px;

  div {
    padding: 15px;
    text-align: center;
    border: 1px solid black;
  }
`;
