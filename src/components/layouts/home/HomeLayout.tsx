import { Footer } from "./Footer";
import { Header } from "./Header";

export const HomeLayout: React.FC = (props) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="">
        <Header />
      </div>
      <div className="h-full">{props.children}</div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
