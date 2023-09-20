import { LogoDTU1, clockIcon, locationIcon, dotEmpty, dotRed } from "@/assets";
import { navbarItems, socialIcons } from "@/contains";
import { Link, useLocation } from "react-router-dom";

const View = () => {
  const pathName = useLocation().pathname;

  return (
    <div className="">
      <div className="h-[58px] flex place-content-around items-center bg-[#181818]">
        <div className="flex items-center text-white gap-2 text-sm">
          <img src={clockIcon} />
          Thứ hai - Thứ sáu 8h - 21h
        </div>
        <div className="flex items-center text-white gap-2 text-sm">
          <img src={locationIcon} />
          254 Nguyễn Văn Linh - TP Đà Nẵng
        </div>
        <div className="flex items-center gap-2">
          {socialIcons.map((item, index) => (
            <img src={item.icon} key={index} className="cursor-pointer" />
          ))}
        </div>
      </div>
      <div className="h-[138px] bg-[#303030] text-white flex place-content-end items-center gap-[90px]">
        <img src={LogoDTU1} className="cursor-pointer" />
        <div className="flex gap-[30px]">
          {navbarItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 cursor-pointer">
              {item.path === pathName ? (
                <img src={dotRed} />
              ) : (
                <img src={dotEmpty} />
              )}
              <Link
                to={item.path}
                className={`text-[16px] ${
                  item.path === pathName ? "text-[#A62823]" : ""
                }`}
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
        <div className="cursor-pointer">ENG / VIE</div>
        <div className="rounded-l-[16px] bg-[#A62823] h-[42px] flex items-center px-[10px] cursor-pointer">
          Đăng ký
        </div>
      </div>
    </div>
  );
};

export default View;
