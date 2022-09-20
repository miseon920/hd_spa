import { useState } from "react";
import styles from "./css/App.module.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NotFound from "./pages/NotFound";

function App() {
  const [on, setOn] = useState(false);
  //console.log(styles);

  return (
    // <div className={`${styles.App} ${on ? styles.on : null}`}>
    //   <strong className="inner" onClick={() => setOn(!on)}>
    //     sass test
    //   </strong>
    // </div>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        {/* 페이지오류 : 404  */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* <Main />
      <Sub01 />
      <Sub02 /> */}
    </>
  );
}

export default App;
/*
<Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />
<Link to="경로">링크 이름</Link>
https://velog.io/@velopert/react-router-v6-tutorial
#gh-pages
https://velog.io/@heony/gh-pages
*/
