import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <nav>
        <ul>          
          <li>
            <Link to="/counter">Counter</Link>
          </li>         
          <li>
            <Link to="/simpletimer">Simple Timer</Link>
          </li>
          <li>
            <Link to="/hover">Hover Element</Link>
          </li>            
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
