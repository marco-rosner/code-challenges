import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './CurrentTime/App';
// import { App } from './HOC/App';
// import { App } from './CodeChallenge/App';
// import { App } from './AudioVideo/AudioVideo';
import { App } from './SearchUsers/App';
// import { App } from './InfiniteGallery/App';
// import { App } from './Contacts/App';
// import { App } from './Context/App';
// import { App } from './Pagination/App';
// import { App } from './Typescript/App';
// import { App } from './ToDo/App';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)