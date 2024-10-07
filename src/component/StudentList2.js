const Student = (props) => {
  return (
    <tr>
      <td>{props.detail.id}</td>
      <td>{props.detail.name}</td>
      <td>{props.detail.email}</td>
    </tr>
  );
};

const StudentList = () => {
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
      <h1>Student List2</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>email</th>
        </tr>
        {students.map((data) => (
          <Student key={data.id} detail={data} />
        ))}
      </table>
    </div>
  );
};

export default StudentList;
