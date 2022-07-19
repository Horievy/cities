interface HeaderNavProps {
  isLoggedIn: boolean
}

export default function HeaderNav({isLoggedIn}: HeaderNavProps) {

  return (
    <nav className="header__nav">
      {
        isLoggedIn
          ?
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#tbd">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">3</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#tbd">
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </ul>
          :
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#tbd">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </a>
            </li>
          </ul>
      }
    </nav>
  );
}
