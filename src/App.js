import { Route, Routes } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import "./App.css";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";
/* 
1. 전체상품페이지, 로그인 , 상품페이지
2, 전체 상품페이지에서는 전체상품을 볼 수 있다.
3 로그인 버튼을 누르면 로그인 페이지가 나온다
4. 상품디테일페이지를 눌렀을 때 로그인이 안되어있을 경우에는 로그인 페이지가 나온다.
5. 상품디테일페이지에서 로그아웃버튼을 누르면 로그인페이지가 뜬다
6. 로그인을 하면 로그아웃이 나오고 로그아웃을 하면 로그인이 보인다.
7. 상품을 검색 할 수 있따.
*/

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인이 됨 false면 로그인이 안됨

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
