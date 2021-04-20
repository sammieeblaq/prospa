import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="landing__container">
        <Sidebar />
        <SignUpPage />
        {/* <LoginPage /> */}
    </div>
  );
}

export default App;
