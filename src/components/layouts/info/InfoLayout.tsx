import { Header } from "./Header";
import { Footer } from "./Footer";

export const InfoLayout: React.FC = (props) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="">
        <Header />
      </div>
      <div className="h-full container">{props.children}</div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
