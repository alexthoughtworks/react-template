import { useRoutes } from 'react-router-dom';
import routes from './router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';

const client = new ApolloClient({
  uri: "http://ec2-3-85-10-237.compute-1.amazonaws.com/graphql",
  cache: new InMemoryCache
})

const App = () => {

  const content = useRoutes(routes);

  return (
    <ApolloProvider client={client}>
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
    </ApolloProvider>
  );
}
export default App;
