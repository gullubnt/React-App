const Student = (props)=>{
  return <li>{props.detail.name}</li>;
}

const StudentList = ()=>{ 
    let students = [
      {
        id:1,
        name:"Abhishek",
        Email:"g14@gmail.com"
      },
      {
        id:1,
        name:"Akhilesh",
        Email:"m04@gmail.com"
      },
      {
        id:1,
        name:"Anushka",
        Email:"d25@gmail.com"
      }
    ];
  return (
    <div>
        <h1>Student List</h1>
        <ul>
          {/* {students.map((data) => <Student key={data.id}detail={data}/>)} */}
          {students.map((data) => <Student detail={data}/>)}
        </ul>

    </div>
  );
  

}

export default StudentList;
