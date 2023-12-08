import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes
} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import {
  Dashboard, Error,
  ForgotPassword,
  Home,
  Login,
  ProtectedRoute,
  Register,
  ResetPassword,
  Verify
} from "./pages/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/user/verify-email' element={<Verify />} />
      <Route path='/user/reset-password' element={<ResetPassword />} />
      <Route path='*' element={<Error />} />
    </Route>

  )
)

export default router