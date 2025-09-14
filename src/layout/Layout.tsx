import Navigation from "../components/v2/navigation/Navigation";

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <div className="overflow-x-hidden select-none w-[100vw] h-[100vh] bg-[#202224] font-figtree">
      <Navigation/>
      {children}
    </div>
  );
};

export default Layout;
