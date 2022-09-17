import Profile from "../components/Profile";
import Skill from "../components/Skill";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="squared rounded-3 p-5 mt-5 mx-5 mb-5">
      <Navbar />
      <Profile />
      <Skill />
    </div>
  );
}
