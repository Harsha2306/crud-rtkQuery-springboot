import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/users/new">Add User</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
