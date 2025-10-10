import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./component/PublicLayout";
import PublicHome from "./component/PublicHome";
import AboutLux from "./component/AboutLux";
import WorkLux from "./component/WorkLux";
import AdminLogin from "./component/admin/AdminLogin";
import AdminLayout from "./component/admin/AdminLayout";
import AdminHome from "./component/admin/AdminHome";
import AdminMostre from "./component/admin/AdminMostre";
import AdminBio from "./component/admin/AdminBio";
import AwardsLux from "./component/AwarsLux";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
         <Route index element ={<PublicHome/>}/>
         <Route path="/about" element={<AboutLux/>}/>
         <Route path="/work" element={<WorkLux/>}/>
         <Route path="/awards" element={<AwardsLux/>}/>
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
