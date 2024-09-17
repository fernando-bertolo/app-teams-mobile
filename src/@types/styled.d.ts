import "styled-components";
import theme from "src/theme";

declare module 'style-components'{
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}

}