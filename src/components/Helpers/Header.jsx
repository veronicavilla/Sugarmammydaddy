const Header = () => {
  return (
    <header className="barraNavegacion">
      <nav class="navbar bg-light">
        <div class="container-fluid bg-success p-2 text-dark bg-opacity-25">
          <img
            class="imagen"
            src="../../../help2.png"
            alt="Sugar mommy/daddy"
          />
          <h3>Control empresa Sugar Mommy/Daddy</h3>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
