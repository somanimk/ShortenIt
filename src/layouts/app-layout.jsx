import Header from "@/components/header";
import {Outlet} from "react-router-dom";
// Outlet Component: The Outlet component renders the appropriate child component based
//on the current route. This allows different pages to be displayed within the same layout.
const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by RoadsideCoder
      </div>
    </div>
  );
};

export default AppLayout;
