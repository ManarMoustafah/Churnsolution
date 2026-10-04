import "./App.css";
import { Outlet } from "react-router";
import Header from "./routes/Header";
import Footer from "./routes/Footer";
function app() {
  return (
    <div className="churnSolution">
      <Header />
      <main className="pageContent">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default app;
