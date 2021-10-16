import styled, { css } from "styled-components";

const Button = styled.button`
    flex-direction: row;
    border-radius: 3px;
    padding: 10px;
    margin: 5px;
    justify-content: center;
    background: transparent;
    ${(props) =>
      props.primary &&
      css`
        background: blue;
      `}
    }
    ${(props) =>
      props.secondary &&
      css`
        background: #27ae60;
      `}
`;

export default Button;
