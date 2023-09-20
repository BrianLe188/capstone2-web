import { banner, menuIcon, plusIcon, sendIcon } from "@/assets";
import { optionChatBox } from "@/contains";

const ChatBox = () => {
  return (
    <div>
      <h1 className="text-[#A62823] text-center text-[40px] font-medium">
        GIẢI ĐÁP THẮC MẮC TUYỂN SINH CÙNG <br />{" "}
        <span className="font-bold text-[52px]">GPT-DTU</span>
      </h1>
      <div className="flex min-h-screen">
        <div className="bg-[#2C2B2D] w-1/5 text-[#cccccc] flex flex-col">
          <div className="p-[15px] border-solid border-[#cccccc] border-b-[1px]">
            <div className="flex justify-between">
              <h2>GPT - DTU</h2>
              <img src={menuIcon} className="cursor-pointer" />
            </div>
            <div className="flex justify-center py-[30px]">
              <div className="flex items-center justify-center py-[10px] rounded-full border-solid border-[#cccccc] border-[1px] gap-[8px] w-3/4 cursor-pointer">
                <img src={plusIcon} />
                <span>Trò chuyện mới</span>
              </div>
            </div>
          </div>
          <div className="p-[15px] flex-1">
            <h3>Lịch sử trò chuyện</h3>
          </div>
          <div className="flex flex-col gap-[10px] p-[15px] border-solid border-[#cccccc] border-t-[1px]">
            {optionChatBox.map((item, index) => (
              <div
                className="flex gap-[10px] items-center cursor-pointer"
                key={index}
              >
                <img src={item.icon} className="w-[16px] h-[16px]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1 text-white">
          <div className="bg-[#3d3d3d] flex justify-end p-[30px] pl-[150px] gap-[20px]">
            <span className="text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
            <img
              src={banner}
              className="w-[70px] h-[70px] rounded-full object-cover"
            />
          </div>
          <div className="bg-[#1B1B1B] flex flex-col justify-between flex-1 p-[30px]">
            <div className="flex pr-[150px] gap-[20px]">
              <div className="text-white bg-[#A62823] flex rounded-full w-[70px] h-[70px] items-center justify-center">
                GPT
              </div>
              <span className="flex-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </div>
            <div className="bg-[#cccccc] flex mx-[30px] items-center rounded-[6px] px-[15px] py-[10px] justify-between">
              <input
                type="text"
                className="bg-transparent outline-none text-black"
              />
              <img src={sendIcon} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
