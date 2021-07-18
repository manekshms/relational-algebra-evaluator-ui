import { HomeLayout } from "../../components/layouts/home/HomeLayout";
import { Examples } from "./Examples";
import { Terminal } from "./Terminal";

export const Home = () => {
  return (
    <HomeLayout>
      <div className="flex h-full">
        <div className="flex-1 border-r-2">
          <Terminal />
        </div>
        <div className="flex-none">
          <Examples />
        </div>
      </div>
    </HomeLayout>
  );
};
