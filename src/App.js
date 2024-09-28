import { RouterProvider} from 'react-router-dom';
import './App.css';
import router from './routes/router';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';

function App() {
  console.log("test")
  return (
    <>
   
    <ThemeProvider theme={theme}>
      
      <RouterProvider router={router} />
    
      <GlobalStyle /> 
        
    </ThemeProvider> 
  
    </>

  );
}

export default App;
