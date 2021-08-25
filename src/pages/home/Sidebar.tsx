import { useCallback } from "react";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useTypedSelector";
import { Examples } from "./Examples";
import { Relations } from "./Relations";

export const Sidebar = () => {
  const { data } = useSelector((state) => state.getAllRelations);
  const { data: sessionIdData } = useSelector((state) => state.getSessionId);
  const { getAllRelations, uploadRelations } = useActions();
  const memoizedGetAllRelations = useCallback(getAllRelations, []);
  const onUploadRelations = (formData: FormData) => {
    const res = uploadRelations(formData) as unknown as ReturnType<
      ReturnType<typeof uploadRelations>
    >;
    return res.then((data) => {
      memoizedGetAllRelations();
      return data;
    });
  };
  useEffect(() => {
    if (sessionIdData) {
      memoizedGetAllRelations();
    }
  }, [sessionIdData, memoizedGetAllRelations]);

  const onRefreshRelations = () => {
    return memoizedGetAllRelations();
  };

  return (
    <aside className="overflow-y-auto h-screen">
      <Relations
        relations={data}
        onUploadRelations={onUploadRelations}
        onRefreshRelations={onRefreshRelations}
      />
      <Examples />
    </aside>
  );
};
