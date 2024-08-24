
import Nav from "./Nav/Nav";
import Sidebar from "@/components/sidebar/sidebar";
import Avatar from "../assets/img/profile.jpg"


export default function Home() {
  return (
    <main className="pt-4">
      <div className="flex flex-row flex-wrap">
      <Sidebar 
      avatar={Avatar}
      heading="Richard Ronalds"
      address="Preston Inglewood Maine 98380"
      />
      </div>
     
    </main>
  );
}
