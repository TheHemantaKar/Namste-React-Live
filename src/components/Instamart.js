import { useState } from "react";

const Section = ({ title, description, isVisable, setIsVisable }) => {
  return (
    <div className=" border-2 border-black p-2 m-2 rounded-md">
      {isVisable ? (
        <h3
          className="font-bold text-xl cursor-pointer"
          onClick={() => setIsVisable(false)}
        >
          {title}
        </h3>
      ) : (
        <h3
          className="font-bold text-xl cursor-pointer"
          onClick={() => setIsVisable(true)}
        >
          {title}
        </h3>
      )}
      {/* 
      // Using show hide button 
      
      {isVisable ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisable(true)})
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisable(true)}
        >
          Show
        </button>
      )} */}

      {isVisable && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visableSection, setVisableSection] = useState();

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title="About Instamart"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. "
        isVisable={visableSection === "about"}
        setIsVisable={() => setVisableSection("about")}
      />
      <Section
        title="Team Instamart"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. "
        isVisable={visableSection === "team"}
        setIsVisable={() => setVisableSection("team")}
      />
      <Section
        title="Suport Instamart"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. "
        isVisable={visableSection === "support"}
        setIsVisable={() => setVisableSection("support")}
      />
    </div>
  );
};

export default Instamart;
