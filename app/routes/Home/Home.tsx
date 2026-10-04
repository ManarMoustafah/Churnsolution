import Footer from "../Footer";
import Sec1 from "./sec1";
import Sec2 from "./sec2";
import Sec3 from "./sec3";

export function meta() {
  return [
    { title: "Churn Solution" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="homePage">
      {/* sec1home-all */}
      <Sec1 />

      {/* sec2home-all */}
      <Sec2 />

      {/* sec3home-all */}
      <Sec3 />

    </div>
  );
}
