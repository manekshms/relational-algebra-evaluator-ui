import { useRef } from "react";
import { Refresh } from "../../components/ui/icons/Refresh";
interface RelationsProps {
  relations: string[];
  onUploadRelations: Function;
  onRefreshRelations: Function;
}
export const Relations: React.FC<RelationsProps> = (props) => {
  const { relations, onUploadRelations, onRefreshRelations } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnClickUpload = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (inputRef.current && inputRef.current?.files?.length) {
      formData.append("relations", inputRef.current.files[0]);
      onUploadRelations(formData)
        .then(() => {
          (inputRef.current as HTMLInputElement).value = "";
          alert("Relations added successfully");
        })
        .catch((e: Error) => {
          alert(e.message);
        });
    }
  };

  const handleOnClickRefreshRelations = () => {
    onRefreshRelations();
  };

  return (
    <div>
      <div className="flex justify-between text-white bg-blue-600">
        <h3 className="text-xl p-4">Relations</h3>
        <span
          onClick={handleOnClickRefreshRelations}
          className="mt-4 mr-2 hover:text-blue-100 cursor-pointer"
        >
          <Refresh />
        </span>
      </div>
      <div className="p-4">
        <input type="file" ref={inputRef} />
        <button
          className="bg-blue-700 text-white px-2 py-1 hover:bg-blue-600 rounded text-xm cursor-pointer"
          type="button"
          value="Upload"
          onClick={handleOnClickUpload}
        >
          Upload
        </button>
      </div>
      <ul className="p-1">
        {relations.map((item) => (
          <li key={item} className="border-2 mb-1 text-base p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
