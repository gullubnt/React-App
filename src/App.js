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
// import NewStudent from "./component/NewStudent";
// import Home from "./component/Home";
// import Student from "./component/Student";
// import Error from "./component/Error";
// import Heading from "./component/Heading";
// import NevigationBar from "./component/NevigationBar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Heading from "./component/Heading";
import { useState } from "react";
const App = () => {
  // let data = "my 1st react app";
  // const [data, setData] = useState("my 1st react app");
  const [data, setData] = useState({
    name: "Name1",
    email: "n1@gmail.com",
    phn_no: "748951263",
  });

  const clickHandler = () => {
    setData((previousState) => {
      return { ...previousState, name: "Name2" };
    });
    // setData("MY 1ST REACT APP");
    // data = "MY 1ST REACT APP";
  };
  return (
    <div>
      <h1>
        Name:- {data.name},Email:- {data.email}, Phn_No:- {data.phn_no}
      </h1>
      <button onClick={clickHandler}>Dabao</button>
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
      <Error /> 
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
      <h5>This is footer</h5> */}
    </div>
  );
};
export default App;
