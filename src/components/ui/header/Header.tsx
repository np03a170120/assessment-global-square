import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10 ">
        <div className="bg-primary p-2">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-white font-bold  pl-4">PRODUCT SHOWCASE</p>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
