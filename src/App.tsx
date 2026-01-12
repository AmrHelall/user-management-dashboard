import { BrowserRouter } from "react-router-dom";
import { UserManagement } from "./layers/UserManagement";
function App() {
  return (
    <BrowserRouter>
      <UserManagement />
    </BrowserRouter>
  );
}

export default App;
