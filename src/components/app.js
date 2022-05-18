import styled from 'styled-components/macro';

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background: pink;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.25));
`;

export default function App() {
  return <StyledDiv>kevin</StyledDiv>;
}
