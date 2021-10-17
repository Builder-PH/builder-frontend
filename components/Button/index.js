import styled, { css } from "styled-components";

const Button = styled.button`
    flex-direction: row;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    margin: 5px;
    justify-content: center;
    background: transparent;
    color: white;
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
