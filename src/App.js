import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "./components/Step1";
import Welcome from "./components/Welcome";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";
import Step8 from "./components/Step8";
import Step9 from "./components/Step9";
import Step10 from "./components/Step10";
import Final from "./components/Final";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Notestate from "./contextApi/Notestate";
import TeacherSignUp from "./components/TeacherSignUp";
import TeacherDetail from "./components/TeacherDetail";
import AboutMain from "./components/AboutMain";
import TermsOfUse from "./components/Termsofuse";
import Termsfortutors from "./components/Termsfortutors";
import Privacypolicies from "./components/Privacypolicies";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Notestate>
          <Navbar />
          <Routes>
            <Route>
              <Route index element={<Welcome />}></Route>
              <Route path="/step1" element={<Step1 />}></Route>
              <Route path="/step2" element={<Step2 />}></Route>
              <Route path="/step3" element={<Step3 />}></Route>
              <Route path="/step4" element={<Step4 />}></Route>
              <Route path="/step5" element={<Step5 />}></Route>
              <Route path="/step6" element={<Step6 />}></Route>
              <Route path="/step7" element={<Step7 />}></Route>
              <Route path="/step8" element={<Step8 />}></Route>
              <Route path="/step9" element={<Step9 />}></Route>
              <Route path="/step10" element={<Step10 />}></Route>
              <Route path="/final" element={<Final />}></Route>
              <Route path="/aboutUs" element={<AboutMain />}></Route>
              <Route path="/TeacherSignUp" element={<TeacherSignUp />}></Route>
              <Route path="/TeacherDetails" element={<TeacherDetail />}></Route>
              <Route path="/Termsofuse" element={<TermsOfUse />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
              <Route
                path="/Privacypolicies"
                element={<Privacypolicies />}
              ></Route>
              <Route
                path="/Termsfortutors"
                element={<Termsfortutors />}
              ></Route>
            </Route>
          </Routes>
        </Notestate>
      </BrowserRouter>
    </>
  );
}

export default App;
