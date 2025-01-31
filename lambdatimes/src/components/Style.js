import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

export const Container = styled(Top)`
  justify-content: none;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

export const Left = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
    margin-right: 5%;
  }

  span:last-child {
    margin-right: 0;
  }

  span:hover {
    text-decoration: underline;
  }
`;

export const Right = styled(Center)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    width: 1280px;
  }

  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }

  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export const Date = styled.div`
  margin-left: 25px;
  flex: 1;
`;

export const Temp = styled(Date)`
  text-align: right;
  margin-right: 25px;
`;

export const FormStyle = styled.form`
  input,
  button {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    text-align: center;
    border:1px #ddd solid;
    border-radius: 0.2rem;
  }
    button {
      color: #fff;
      background-color: #333;
      border: none;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;
