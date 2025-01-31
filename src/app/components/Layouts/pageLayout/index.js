export default function PageLayout({ children }) {
    return (
      <div>
        <header>Mon Header</header>
        <main>{children}</main>
        <footer>Mon Footer</footer>
      </div>
    );
  }
  