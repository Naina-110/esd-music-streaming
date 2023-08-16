import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PerSong from "./pages/PerSong";

function App() {
  return (
    <div className='App'>
      <div className='flex items-start gap-4 h-screen'>
        <Sidebar />
        <div className='flex flex-col gap-4 w-full'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/song/:index' element={<PerSong />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
