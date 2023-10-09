import { menuIcon, plusIcon, sendIcon } from "@/assets";
import { optionChatBox } from "@/contains";
import { useEffect, useState } from "react";
import { EMessageType } from "@/utils/enums";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addMessage } from "@/redux/chat/chat.slice";
import { chatSelector } from "@/redux/selectors";
import Message from "@/components/message";
import ScrollToBottom from "react-scroll-to-bottom";
import { useSearchParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import FileService from "@/services/files";
import type { FileType } from "@/utils/types";
import FileButton from "./components/file";

const chatTabs = [
  {
    id: 1,
    key: "advice",
    name: "Tư vấn",
  },
  {
    id: 2,
    key: "existing_document",
    name: "Tài liệu có sẵn",
  },
];

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const [search, setSearch] = useSearchParams();
  const { advises: messages } = useAppSelector(chatSelector);
  const queryTab = search.get("tab");
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [files, setFiles] = useState<Array<FileType>>([]);
  const [targetFile, setTargetFile] = useState<number | null>(null);

  useEffect(() => {
    if (queryTab) {
      setActiveTab(queryTab);
    } else {
      setSearch({
        tab: chatTabs[0].key,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryTab]);

  useEffect(() => {
    if (queryTab === "existing_document") {
      loadFiles();
    }
  }, [queryTab]);

  const loadFiles = async () => {
    try {
      const res = await FileService.files();
      if (res) {
        setFiles(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    dispatch(
      addMessage({
        type: EMessageType.USER,
        content: message,
        file: targetFile,
      })
    );
    setMessage("");
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && message) {
      handleSubmit();
    }
  };

  return (
    <div>
      <div className="flex h-screen relative">
        <div className="bg-[#2C2B2D] w-1/5 text-[#cccccc] flex flex-col">
          <div className="p-[15px] border-solid border-[#cccccc] border-b-[1px]">
            <div className="flex justify-between">
              <h2>GPT - DTU</h2>
              <img src={menuIcon} className="cursor-pointer" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {chatTabs.map((item) => (
                <button
                  key={item.id}
                  className={twMerge(
                    "border p-2 rounded-md",
                    item.key === activeTab
                      ? "border-[#A62823] bg-[#A62823]"
                      : ""
                  )}
                  onClick={() =>
                    setSearch({
                      tab: item.key,
                    })
                  }
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="flex justify-center py-[30px]">
              <div className="flex items-center justify-center py-[10px] rounded-full border-solid border-[#cccccc] border-[1px] gap-[8px] w-3/4 cursor-pointer">
                <img src={plusIcon} />
                <span>Trò chuyện mới</span>
              </div>
            </div>
          </div>
          <div className="p-[15px] flex-1 h-[45%]">
            <h3>Lịch sử trò chuyện</h3>
            <ul className="h-[90%] overflow-auto">
              {files.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    if (item.id === targetFile) {
                      setTargetFile(null);
                    } else {
                      setTargetFile(item.id);
                    }
                  }}
                  className="mt-2"
                >
                  <FileButton data={item} active={item.id === targetFile} />
                </li>
              ))}
            </ul>
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
        <ScrollToBottom className="relative flex-1 h-full text-white bg-[#1B1B1B] overflow-y-auto p-4 pb-20 overflow-auto">
          <h1 className="text-[#A62823] text-center text-[40px] font-medium">
            GIẢI ĐÁP THẮC MẮC TUYỂN SINH CÙNG <br />{" "}
            <span className="font-bold text-[52px]">GPT-DTU</span>
          </h1>
          {messages.map((item) => (
            <Message message={item} />
          ))}
          <div className="absolute bottom-0 p-5 w-full right-0 px-[30px] bg-[#1b1b1b]">
            <div className="bg-[#cccccc] flex items-center rounded-[6px] px-[15px] py-[10px]">
              <input
                type="text"
                className="bg-transparent outline-none text-black flex-1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => handleEnterPress(e)}
              />
              <img
                src={sendIcon}
                className="cursor-pointer"
                onClick={() => handleSubmit()}
              />
            </div>
          </div>
        </ScrollToBottom>
      </div>
    </div>
  );
};

export default ChatBox;
