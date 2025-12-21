import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <>

      {/* <h1 className="text-8xl text-Red-200"> hello vinay</h1> */}


      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Navbar could go here if global */}
            <AppRoutes />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
