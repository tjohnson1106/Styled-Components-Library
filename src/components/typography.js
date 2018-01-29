import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 32;
  color: black;
  font-family: Helvetica, sans-serif;
`;

export const H2 = H1.withComponent("h2").extend`
font-size: 26
`;

export const H3 = H1.withComponent("h3").extend`
font-size: 20
`;

export const H4 = H1.withComponent("h4").extend`
font-size: 14
`;

export const H5 = H1.withComponent("h5").extend`
font-size: 8
`;

export const H6 = H1.withComponent("h6").extend`
font-size: 26
`;
