import data from "../../utils/data-member.json";
import imgB from "../../assets/banner2.png";
import { useState } from "react";

const Training = () => {
  const [activeNav, setActiveNav] = useState("");
  const [activeTable, setActiveTable] = useState("");

  const handleClick = (table: string, item: string) => {
    setActiveTable(table);
    setActiveNav(item);
    if (activeTable === table && activeNav === item) {
      setActiveTable("");
      setActiveNav("");
    }
  };
  return (
    <div className="px-20 py-4 bg-[#f6f6f6]">
      <h1 className="font-medium text-[#A62823]">NGÀNH NGHỀ ĐÀO TẠO</h1>
      <div className="flex gap-2">
        <div className="flex flex-wrap gap-3">
          {data.data.map((item, index) => (
            <div key={index} className="bg-white w-2/5">
              <div className="p-2 text-right">
                <h2 className="text-[#A62823]">{item.name}</h2>
                <a href={item.link} className="text-[#A62823] underline">
                  {item.link}
                </a>
              </div>
              <img src={imgB} className="h-[200px] w-full object-cover" />
              <div className="flex flex-col bg-[#A62823] overflow-hidden">
                {item.university && (
                  <div className="border-b-[1px] border-solid border-black">
                    <div
                      className="flex justify-between items-center p-2 cursor-pointer"
                      onClick={() => handleClick(item.name, "university")}
                    >
                      <span className="text-white">ĐẠI HỌC</span>
                      {activeNav === "university" &&
                      activeTable === item.name ? (
                        <span className="text-white cursor-pointer">-</span>
                      ) : (
                        <span className="text-white cursor-pointer">+</span>
                      )}
                    </div>
                    {activeNav === "university" &&
                      activeTable === item.name && (
                        <div className="flex flex-col bg-white transition ease-in duration-300">
                          {item.majors
                            .filter(
                              (item) => item.educationalLevel === "university"
                            )
                            .map((item, index) => (
                              <div
                                key={index}
                                className="border-b-[1px] border-solid border-black last:border-b-0 p-2 cursor-pointer hover:bg-[#A62823] hover:text-[white]"
                              >
                                <span>{item.name}</span>
                              </div>
                            ))}
                        </div>
                      )}
                  </div>
                )}
                {item.afterUniversity && (
                  <div className="border-b-[1px] border-solid border-black">
                    <div
                      className="flex justify-between items-center p-2 cursor-pointer"
                      onClick={() => handleClick(item.name, "afterUniversity")}
                    >
                      <span className="text-white">SAU ĐẠI HỌC</span>
                      {activeNav === "afterUniversity" &&
                      activeTable === item.name ? (
                        <span className="text-white cursor-pointer">-</span>
                      ) : (
                        <span className="text-white cursor-pointer">+</span>
                      )}
                    </div>
                    {activeNav === "afterUniversity" &&
                      activeTable === item.name && (
                        <div className="flex flex-col bg-white duration-2000">
                          {item.majors
                            .filter(
                              (item) =>
                                item.educationalLevel === "after_university"
                            )
                            .map((item, index) => (
                              <div
                                key={index}
                                className="border-b-[1px] border-solid border-black last:border-b-0 p-2 cursor-pointer hover:bg-[#A62823] hover:text-[white]"
                              >
                                <span>{item.name}</span>
                              </div>
                            ))}
                        </div>
                      )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <img className="w-full object-cover" src={imgB} alt="" />
          <img className="w-full object-cover" src={imgB} alt="" />
          <img className="w-full object-cover" src={imgB} alt="" />
          <img className="w-full object-cover" src={imgB} alt="" />
          <img className="w-full object-cover" src={imgB} alt="" />
          <img className="w-full object-cover" src={imgB} alt="" />
          <img className="w-full object-cover" src={imgB} alt="" />
          <img className="w-full object-cover" src={imgB} alt="" />
          <img className="w-full object-cover" src={imgB} alt="" />
          <img className="w-full object-cover" src={imgB} alt="" />
          <img className="w-full object-cover" src={imgB} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Training;
