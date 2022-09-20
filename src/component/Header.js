import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/">main</Link> */}
          <NavLink to="/">main</NavLink>
        </li>
        <li>
          <NavLink to="/sub01">Sub01</NavLink>
        </li>
        <li>
          <NavLink to="/sub02">Sub02</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
/*
NavLink 컴포넌트는 링크에서 사용하는 경로가 
현재 라우트의 경로와 일치하는 경우 
특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트입니다.
active가 붙음
*/
