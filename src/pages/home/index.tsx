import { useEffect, useState } from "react";
import { HomeLayout } from "../../components/layouts/home/HomeLayout";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useTypedSelector";
import { Sidebar } from "./Sidebar";
import { Terminal } from "./Terminal";

export const Home = () => {
  const { data } = useSelector((state) => state.getSessionId);
  const [checkedSession, setCheckedSession] = useState(false);
  const { getSessionId } = useActions();
  useEffect(() => {
    if (!checkedSession && !data) {
      getSessionId();
      setCheckedSession(true);
    }
  }, [checkedSession, setCheckedSession, getSessionId, data]);
  return (
    <HomeLayout>
      <div className="flex h-full">
        <div className="flex-1">
          <Terminal />
        </div>
        <div className="flex-none">
          <Sidebar />
        </div>
      </div>
    </HomeLayout>
  );
};
