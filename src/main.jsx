import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { root } from './root/index.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const queryClient =  new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={root}/>
  </QueryClientProvider>
  
)
