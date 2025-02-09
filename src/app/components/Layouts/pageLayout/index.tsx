import { ReactNode } from "react";
import Header from "../../Header";

export default function PageLayout({ children }) {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <footer>Mon Footer</footer>
    </div>
  );
}
