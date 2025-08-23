import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicHome from "./component/PublicHome";
import PublicLayout from "./component/PublicLayout";
import AdminLayout from "./component/AdminLayout";
import AdminHome from "./component/AdminHome";
import AdminLogin from "./component/AdminLogin";
import AdminMostre from "./component/AdminMostre";
import AdminBio from "./component/AdminBio";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
         <Route index element ={<PublicHome/>}/>
        </Route>

        <Route path="/login" element={<AdminLogin/>}/>
        <Route path="/admin" element={<AdminLayout/>}>
        <Route index element ={<AdminHome/>}/>
        <Route path="/admin/mostre" element={<AdminMostre/>}/>
        <Route path="/admin/bio" element={<AdminBio/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
