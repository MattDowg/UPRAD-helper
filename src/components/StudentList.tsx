import { MouseEvent } from "react";

function StudentList() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const checkEmptyList = () => {
    return items.length === 0 && <p>No students in list</p>;
  };

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {checkEmptyList}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default StudentList;
