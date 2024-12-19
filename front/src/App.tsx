import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SingupPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/auth/signin">Signin</Link>
        <Link to="/auth/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signin" element={<SigninPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
