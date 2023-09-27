import { banner, menuIcon, plusIcon, sendIcon } from "@/assets";
import { optionChatBox } from "@/contains";
import { useState } from "react";

interface IMessage {
  type: "ai" | "user";
  content: string;
}

const ChatBox = () => {
  const [message, setMessage] = useState<IMessage>({
    type: "user",
    content: "",
  });
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handleSubmit = () => {
    setMessages([...messages, message]);
    setMessage({ type: "user", content: "" });
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <h1 className="text-[#A62823] text-center text-[40px] font-medium">
        GIẢI ĐÁP THẮC MẮC TUYỂN SINH CÙNG <br />{" "}
        <span className="font-bold text-[52px]">GPT-DTU</span>
      </h1>
      <div className="flex h-screen relative">
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
        <div className="flex flex-col flex-1 h-full text-white bg-[#1B1B1B] overflow-y-auto">
          {messages.map((item, index) => (
            <>
              <div
                className={
                  "flex gap-[20px] p-[30px]" +
                  (index % 2 === 0
                    ? " pl-[150px] bg-[#3d3d3d] justify-end"
                    : " pr-[150px]")
                }
              >
                {index % 2 === 0 ? (
                  <>
                    <span className="text-right">{item.content}</span>
                    <img
                      src={banner}
                      className="w-[70px] h-[70px] rounded-full object-cover"
                    />
                  </>
                ) : (
                  <>
                    <div className="text-white bg-[#A62823] flex rounded-full w-[70px] h-[70px] items-center justify-center">
                      GPT
                    </div>
                    <span className="flex-1">{item.content}</span>
                  </>
                )}
              </div>
            </>
          ))}

          {/* chat input */}
          <div className="absolute w-4/5 bottom-6 right-0 px-[30px]">
            <div className="bg-[#cccccc] flex items-center rounded-[6px] px-[15px] py-[10px]">
              <input
                type="text"
                className="bg-transparent outline-none text-black flex-1"
                value={message.content}
                onChange={(e) =>
                  setMessage({ type: "user", content: e.target.value })
                }
                onKeyDown={(e) => handleEnterPress(e)}
              />
              <img
                src={sendIcon}
                className="cursor-pointer"
                onClick={() => handleSubmit()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
