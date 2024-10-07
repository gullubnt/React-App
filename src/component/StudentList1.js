const Student = (props) => {
  return (
    <li>
      {props.detail.id} {props.detail.name} {props.detail.email}
    </li>
  );
};

const StudentList1 = () => {
  let students = [
    {
      id: 1,
      name: "Student1",
      email: "s1@gmail.com",
    },
    {
      id: 2,
      name: "Student2",
      email: "s2@gmail.com",
    },
    {
      id: 3,
      name: "Student3",
      email: "s3@gmail.com",
    },
  ];

  return (
    <div>
      <h1>Student List1</h1>
      <ul>
        {students.map((data) => (
          <Student key={data.id} detail={data} />
        ))}
      </ul>
    </div>
  );
};

export default StudentList1;
