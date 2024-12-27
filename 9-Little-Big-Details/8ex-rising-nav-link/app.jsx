import styled from 'styled-components';

function NavLink({ href, children }) {
  return (
    <NavLinkAnchor href={href}>
      {children}
    </NavLinkAnchor>
  );
}

const NavLinkAnchor = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 1.25rem;
`;

const App = () => (
  <header>
    <a class="logo" href="/">
      Logo
    </a>
    <nav>
      <ul>
        <li>
          <NavLink href="/">
            One
          </NavLink>
        </li>
        <li>
          <NavLink href="/">
            Two
          </NavLink>
        </li>
        <li>
          <NavLink href="/">
            Three
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default App;