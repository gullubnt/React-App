// import NormalHtml from "./component/NormalHtml";
// import NormalCss from "./component/NormalCss";
// import NprmalBootstrap from "./component/NprmalBootstrap";
// import InternalCss from "./component/InternalCss";
// import Navbar from "./component/Navbar";
// import Product from "./component/Product";
// import Event from "./component/Event";
// import Condition from "./component/Condition";
// import StudentList1 from "./component/StudentList1";
// import StudentList2 from "./component/StudentList2";
import NewStudent from "./component/NewStudent";
import Home from "./component/Home";
import Student from "./component/Student";
import Error from "./component/Error";
import Heading from "./component/Heading";
import NevigationBar from "./component/NevigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=> {
  return (
    <div>
      {/*<NormalCss />
      <NormalHtml />
      <NprmalBootstrap />
      <InternalCss />
      <Navbar />
      <Product title="Laptop" price="70000/-" brand="Asus">
      <button> buy now </button>
      </Product>
      <Product title="Mobile" price="20000/-" brand="Vivo">
      <button> buy now </button>
      </Product>
      <Product title="Tab" price="25000/-" brand="Samsung">
      <button> buy now </button>
      </Product> 
      <Event />
      <Condition /> 
      <StudentList1 />
      <StudentList2 />
      <Heading />
      <NevigationBar />
      <Home />
      <Student /> 
      <NewStudent />
      <Error /> */}

      <BrowserRouter>
        <NevigationBar />
        <Routes>
          <Route path="/home" element={<Home />}>
            {" "}
          </Route>
          <Route path="/student-list" element={<Student />}>
            {" "}
          </Route>
          <Route path="/add-student" element={<NewStudent />}>
            {" "}
          </Route>
          <Route path="/home" element={<Home />}>
            {" "}
          </Route>
          <Route path="*" element={<Error />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
      <h5>This is footer</h5>
    </div>
  );
}

export default App;
