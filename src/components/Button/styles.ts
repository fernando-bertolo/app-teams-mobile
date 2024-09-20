import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = "Primary" | "Secondary";

type ContainerProps = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => (
    type === "Primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK
  )};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;