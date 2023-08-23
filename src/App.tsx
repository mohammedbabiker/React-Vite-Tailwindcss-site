import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ProfilePic from "./components/ProfilePic";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">User Data</div>
        <div className="hidden md:block">
          <ProfilePic />
        </div>
      </div>
    </>
  );
}

export default App;
