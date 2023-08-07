import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'services/styles/theme';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/MoneyGuard">
                <App />
                <ToastContainer autoClose={1000} theme="dark" />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    </ThemeProvider>
    // </React.StrictMode>
);
