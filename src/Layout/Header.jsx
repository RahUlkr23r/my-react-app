import { Link } from "react-router-dom";

function Header() {
  return (
    <>
 




 <header id="header" className="p-3 text-bg-dark">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a
        href="/"
        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <svg
          className="bi me-2"
          width={40}
          height={32}
          role="img"
          aria-label="Bootstrap"
        >
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
        <Link    to="/"className="nav-link px-2 text-secondary">Home</Link>
        
          </li>
        
        
        <li>
        <Link    to="/about"className="nav-link px-2 text-white">About</Link>
        </li>
        <li>
        <Link    to="/contact"className="nav-link px-2 text-white">Contact</Link>
        </li>
        <li>
        <Link    to="/blog"className="nav-link px-2 text-white">Blog</Link>
        </li>
        <li>
        <Link    to="/navigation"className="nav-link px-2 text-white">Navigation</Link>
        </li>

        <li>
        <Link    to="/context"className="nav-link px-2 text-white">Context</Link>
        </li>

        <li>
        <Link    to="/callback"className="nav-link px-2 text-white">Callback</Link>
        </li>
        <li>
        <Link    to="/usememo"className="nav-link px-2 text-white">USeMemo</Link>
        </li>
        <li>
        <Link    to="/converter"className="nav-link px-2 text-white">WeightConversion</Link>
        </li>
        <li>
        <Link    to="/economic "className="nav-link px-2 text-white">economic Calculator</Link>
        </li>
        <li>
        <Link    to="/api "className="nav-link px-2 text-white">Api</Link>
        </li>
        <li>
        <Link    to="/lc "className="nav-link px-2 text-white">LCMethod</Link>
        </li>

      </ul>
      {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          type="search"
          className="form-control form-control-dark text-bg-dark"
          placeholder="Search..."
          aria-label="Search"
        />
      </form> */}
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2">
      
        <Link    to="/login "className="nav-link px-2 text-white">Login</Link>
        
        </button>
        <button type="button" className="btn btn-warning">
          Sign-up
        </button>
      </div>
    </div>
  </div>
</header>

    </>
  );
}

export default Header;
