import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #FFF;
`;