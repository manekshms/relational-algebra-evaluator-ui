import { useState } from "react";
import { ChevronDown } from "../../components/ui/icons/ChevronDown";
const exampleList = [
  {
    title: "Projection",
    content: (
      <>
        <p>P/column names/(relation name)</p>
        <p>P/name,age/(users)</p>
      </>
    ),
  },
  {
    title: "Selection",
    content: (
      <>
        <p>S/conditions/(relation name)</p>
        <p>S/name=Bob/(users)</p>
      </>
    ),
  },
  {
    title: "Cartesian Product",
    content: (
      <>
        <p>X(relation one,relation two)</p>
        <p>X(users,employees)</p>
      </>
    ),
  },
  {
    title: "Set Difference",
    content: (
      <>
        <p>SD(relation one, relation two)</p>
        <p>SD(Users, employees)</p>
      </>
    ),
  },
  {
    title: "Union",
    content: (
      <>
        <p>U(relation one, relation two)</p>
        <p>U(User, employees)</p>
      </>
    ),
  },
  {
    title: "Rename",
    content: (
      <>
        <p>R/Users/(UserData)</p>
        <p>R/Table name/(New Name)</p>
      </>
    ),
  },
];

export const Examples = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="" style={{ width: "400px" }}>
      <div className="bg-blue-600 text-white">
        <h3 className="text-xl p-4">Examples</h3>
      </div>
      <ul className="p-1">
        {exampleList.map((item, index) => (
          <li key={index} className="border-2 mb-1">
            <div
              onClick={() => setSelected(index)}
              className={`
              ${
                index === selected
                  ? "text-indigo-500"
                  : "hover:bg-gray-100 hover:text-indigo-500"
              }
               px-2 py-3 font-medium cursor-pointer flex justify-between
              `}
            >
              <h3>{item.title}</h3>
              {index !== selected && <ChevronDown />}
            </div>
            {index === selected && (
              <div className="px-2 py-1 text-gray-600 text-sm">
                {item.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
