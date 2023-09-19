import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

const View = () => {
  return (
    <div>
      <Navbar />
      <section className="w-3/4 m-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default View;
