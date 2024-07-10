import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './pages/routes.tsx'
import { GlobalProvider } from './context/context.tsx'
import { ModalProvider } from './context/modal/modal-context.tsx'
import Modal from './components/modal/modal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <GlobalProvider>
    <ModalProvider>
      <RouterProvider router={router} />
      <Modal />
    </ModalProvider>
  </GlobalProvider>
  // </React.StrictMode>
  ,
)
