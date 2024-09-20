import { Groups } from '@screens/Groups';
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from '@components/loading';
import { StatusBar } from 'react-native';
import theme from 'src/theme';
import { NewGroup } from '@screens/NewGroup';


export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });


  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      {/* {fontsLoaded ? <Groups /> : <Loading />} */}
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
