import { NavigationBar } from "./components/NavigationBar";
import { Main } from "./pages/Main";

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-app bg-zinc-900 min-h-screen">
      <NavigationBar />
      <Main />
    </div>
  );
}

export default App;
