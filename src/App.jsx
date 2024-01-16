import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import toast, { resolveValue, Toaster } from 'react-hot-toast';
import { CSSTransition } from 'react-transition-group';
import { TbX } from 'react-icons/tb';
import AppLayout from './layout/AppLayout';
import Notes from './pages/Notes';
import ArchivedNotes from './pages/ArchivedNotes';
import TrashedNotes from './pages/TrashedNotes';
import Button from './ui/Button';
import { useEffect, useRef, useState } from 'react';
import DarkModeContextProvider from './context/DarkModeContextProvider';
import ErrorBoundaryLayout from './layout/ErrorBoundaryLayout';

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Notes />,
          },
          {
            path: 'notes',
            children: [
              {
                path: 'archived',
                element: <ArchivedNotes />,
              },
              {
                path: 'trashed',
                element: <TrashedNotes />,
              },
            ],
          }
        ],
      },
    ],
  },
]);


const queryClient = new QueryClient({
  logger: {
    // eslint-disable-next-line
    log: console.log,
    warn: console.warn,
    error: () => {},
  },
});

// const queryClient = new QueryClient();

function App() {
  const toastRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(() => window.matchMedia('(max-width: 640px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    mediaQuery.matches ? setIsSmallScreen(true) : setIsSmallScreen(false);

    const handleScreenSizeChange = e => {
      e.matches ? setIsSmallScreen(true) : setIsSmallScreen(false);
    };

    mediaQuery.addEventListener('change', handleScreenSizeChange);

    return () => mediaQuery.removeEventListener('change', handleScreenSizeChange);
  }, [isSmallScreen, setIsSmallScreen]);

  return (
    <DarkModeContextProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={router} />
          <Toaster
            position={isSmallScreen ? 'bottom-center' : 'bottom-right'}
            containerStyle={{
              top: 50,
              left: 50,
              bottom: 50,
              right: 50,
            }}
            toastOptions={{
              duration: 3000,
            }}
          >
            {t => (
              <CSSTransition
                in={t.visible}
                nodeRef={toastRef}
                appear={true}
                timeout={450}
                classNames="fade"
                unmountOnExit
              >
                <div
                  ref={toastRef}
                  className={`flex w-72 items-center justify-between justify-items-center gap-2 rounded border py-2 pl-4 pr-2 text-[15px] ${
                    t.type === 'success' &&
                    'border-primary-green-400 bg-primary-green-50 text-neutral-800 dark:border-primary-green-600 dark:bg-primary-green-950 dark:text-neutral-300'
                  } ${
                    t.type === 'error' &&
                    'border-cerise-red-400 bg-cerise-red-50 text-neutral-800 dark:border-cerise-red-600 dark:bg-cerise-red-950 dark:text-neutral-300'
                  }
                  `}
                >
                  {resolveValue(t.message, t)}
                  {t.type !== 'loading' && (
                    <Button btnType="icon-sm" tooltipText="Dismiss" onClick={() => toast.dismiss(t.id)}>
                      <TbX />
                    </Button>
                  )}
                </div>
              </CSSTransition>
            )}
          </Toaster>
        </QueryClientProvider>
    </DarkModeContextProvider>
  );
}

export default App;
