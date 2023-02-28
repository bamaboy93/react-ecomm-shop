import styled from "@emotion/styled";

export const Price = styled.span`
  font-weight: bold;
  position: relative;
  z-index: 33;

  :before {
    width: calc(100%);
    background-color: ${(props) => props.theme.palette.secondary.extralight};
    -webkit-transform: skew(9deg, -9deg);
    transform: skew(9deg, -9deg);
    height: 16px;
    position: absolute;
    content: "";
    z-index: -1;
    top: 2px;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
