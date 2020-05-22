import React from "react";
import Header from "./views/layouts/Header";
import { ProfileCard } from "./views/modules";
import { selectUserData } from "./_redux/slices/userSlice";
import { useSelector } from "react-redux";

function App() {
  const userData = useSelector(selectUserData);

  return (
    <div className="App">
      <Header />
      <ProfileCard mt="xl" mx="auto" userData={userData} />
    </div>
  );
}

export default App;
