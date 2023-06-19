import SearchTrivia from "../components/SearchTrivia";

const Header = () => {
  return (
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" class="nav-link px-2 text-secondary">
                Trivia Jokes
              </a>
            </li>
            <li>
              <a href="/trivia" class="nav-link px-2 text-secondary">
                Trivia Questions
              </a>
            </li>
          </ul>
         <SearchTrivia></SearchTrivia>
        </div>
      </div>
    </header>
  );
};

export default Header;
