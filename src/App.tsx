import LoginForm from "./pages/LoginForm"
import Dashboard from "./pages/Dashboard"
import { createBrowserRouter, createRoutesFromElements,  Route,  RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginForm/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Route>
  )
)

function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
