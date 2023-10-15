import SelectLocation from "@/components/select-location";
import "./resultHighschoolForm.css";
import locations from "@/assets/locations";
import { useContext, useEffect, useMemo, useState } from "react";
import { GlobalContext } from "@/contexts/global-context";

const ResultHighschoolForm = () => {
  const { genders, areas, priorities, subjectBlocks } =
    useContext(GlobalContext);
  const [details, setDetails] = useState<Record<string, string | null>>({
    fullName: null,
    gender: null,
    birthday: null,
    cccd: null,
    phonenumber: null,
    email: null,
    addressToReceiveAdmissionNotice: null,
    area: null,
    priority: null,
    highschoolAddress: null,
    majorId: null,
    subjectOne: null,
    subjectOneScore: null,
    subjectTwo: null,
    subjectTwoScore: null,
    subjectThree: null,
    subjectThreeScore: null,
  });
  const [targetSubjectBlock, setTargetSubjectBlock] = useState<string | null>(
    null
  );

  const subjectInBlock: { id: string; name: string }[] = useMemo(
    () =>
      subjectBlocks.find((item) => item.id === (targetSubjectBlock as string))
        ?.subjects || [],
    [targetSubjectBlock]
  );

  useEffect(() => {
    if (subjectInBlock) {
      setDetails((state) => ({
        ...state,
        subjectOne: subjectInBlock[0]?.id,
        subjectTwo: subjectInBlock[1]?.id,
        subjectThree: subjectInBlock[2]?.id,
      }));
    }
  }, [targetSubjectBlock]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeHandler = (name: string, value: any) => {
    setDetails((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col bg-[#f6f6f6] gap-2 pt-4 px-4">
      <h1 className="text-[#A62823] font-semibold text-3xl">
        ĐĂNG KÝ XÉT TUYỂN BẰNG KẾT QUẢ THI THPT
      </h1>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h2 className="bg-[#A62823] text-white font-semibold text-lg px-4">
          THÔNG TIN HỒ SƠ
        </h2>
        <div className="flex gap-2">
          <label htmlFor="">
            Họ và tên (<span className="text-[#A9161C]">*</span>)
          </label>
          <input
            value={details.fullName || ""}
            type="text"
            onChange={(e) => changeHandler("fullName", e.target.value)}
          />
          {genders.map((item) => (
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="gender"
                value={item.id}
                onChange={(e) => changeHandler("gender", e.target.value)}
              />
              <label htmlFor="">{item.name}</label>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <label htmlFor="">
              Ngày sinh (<span className="text-[#A9161C]">*</span>)
            </label>
            <input
              type="date"
              value={details.birthday || ""}
              onChange={(e) => changeHandler("birthday", e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="">
              Số CMND/CCCD (<span className="text-[#A9161C]">*</span>)
            </label>
            <input
              type="text"
              value={details.cccd || ""}
              onChange={(e) => changeHandler("cccd", e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Số điện thoại (<span className="text-[#A9161C]">*</span>)
          </label>
          <input
            type="text"
            value={details.phonenumber || ""}
            onChange={(e) => changeHandler("phonenumber", e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Email (<span className="text-[#A9161C]">*</span>)
          </label>
          <input
            type="email"
            value={details.email || ""}
            onChange={(e) => changeHandler("email", e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Địa chỉ nhận giấy báo (<span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col gap-2 w-full">
            <SelectLocation
              data={
                locations as {
                  code: string;
                  parent_code: string | null;
                  name: string;
                  type: string;
                }[]
              }
              values={{
                city: "",
                district: "",
                ward: "",
              }}
            />
            <div className="flex flex-col gap-2">
              <input type="text" />
              <span>(Nhập đầy đủ số nhà, tên đường, thôn/tổ)</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <label htmlFor="">
            Nơi học THPT (<span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-1 gap-2">
              <SelectLocation
                data={
                  locations as {
                    code: string;
                    parent_code: string | null;
                    name: string;
                    type: string;
                  }[]
                }
                values={{
                  city: "",
                  district: "",
                  ward: "",
                }}
              />
            </div>
            <div className="flex flex-1 gap-2">
              <label htmlFor="">
                Trường THPT (<span className="text-[#A9161C]">*</span>)
              </label>
              <input type="text" name="" id="" className="w-full" />
            </div>
            <span>
              (Ghi chú: nếu là thí sinh tự do thì bạn chọn trường thpt đã tốt
              nghiệp trước đó.)
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-1 gap-2">
            <label htmlFor="">
              Khu vực (<span className="text-[#A9161C]">*</span>)
            </label>
            <select
              value={details.area || ""}
              className="flex-1"
              onChange={(e) => changeHandler("area", e.target.value)}
            >
              {areas.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-1 gap-2">
            <label htmlFor="">
              Đối tượng (<span className="text-[#A9161C]">*</span>)
            </label>
            <select
              value={details.priority || ""}
              className="flex-1"
              onChange={(e) => changeHandler("priority", e.target.value)}
            >
              {priorities.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h2 className="bg-[#A62823] text-white font-semibold text-lg px-4">
          THÔNG TIN ĐĂNG KÝ
        </h2>
        <div className="flex">
          <label htmlFor="">
            Bậc học (<span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-1 gap-2">
              <select name="" id="" className="flex-1">
                <option value=""></option>
              </select>
              <div className="flex flex-1 gap-2">
                <label htmlFor="">
                  Ngành (<span className="text-[#A9161C]">*</span>)
                </label>
                <select name="" id="" className="flex-1">
                  <option value=""></option>
                </select>
              </div>
            </div>
            <span>
              (Ghi chú: Thí sinh được phép chuyển đổi ngành phù hợp sau 1 Học kỳ
              đến 1 Năm học theo quy chế của Bộ giáo dục và Đào tạo..)
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Môn học (<span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col gap-2">
            <select
              value={targetSubjectBlock || ""}
              onChange={(e) => setTargetSubjectBlock(e.target.value)}
            >
              {subjectBlocks.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <span>
              Bạn vui lòng nhập kết quả học tập các môn tương ứng bên dưới:
            </span>
          </div>
        </div>
        <table>
          <tr>
            <td>Tổ hợp môn xét tuyển</td>
            <td>Điểm trung bình cả năm lớp 12</td>
          </tr>
          {subjectInBlock?.map((item, index) => (
            <tr>
              <td>
                <input type="text" value={item.name || ""} disabled />
              </td>
              <td>
                <input
                  type="number"
                  onChange={(e) => {
                    switch (index) {
                      case 0:
                        changeHandler("subjectOneScore", e.target.value);
                        break;
                      case 1:
                        changeHandler("subjectTwoScore", e.target.value);
                        break;
                      case 2:
                        changeHandler("subjectThreeScore", e.target.value);
                        break;
                    }
                  }}
                />
              </td>
            </tr>
          ))}
        </table>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Đã tốt nghiệp THPT</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">
            Bạn cũng có mong muốn Du học Nước ngoài hoặc Du học tại chỗ.
          </label>
        </div>
        <div className="flex gap-7">
          <span className="w-1/4">
            Tập tin đính kèm (<span className="text-[#A9161C]">*</span>) (Ảnh
            kết quả thi THPT (Chứng nhận TN tạm thời/ Phiếu điểm))
          </span>
          <div className="">
            <input type="file" name="" id="" />
          </div>
          <div className="flex gap-2">
            <span>
              Mã bảo vệ (<span className="text-[#A9161C]">*</span>)
            </span>
            <div className="flex flex-col gap-2">
              <textarea name="" id=""></textarea>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>

      <button className="bg-[#A9161C] px-4 py-2 text-white w-1/5 my-4 mx-auto">
        ĐĂNG KÝ XÉT TUYỂN
      </button>
    </div>
  );
};

export default ResultHighschoolForm;
