import { Groups } from '@screens/Groups/index';
import { ThemeProvider } from "styled-components";
import theme from 'src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
