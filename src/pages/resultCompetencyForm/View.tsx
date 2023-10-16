import SelectLocation from "@/components/select-location";
import "./resultCompetencyForm.css";
import locations from "@/assets/locations";
import { useContext, useState, useRef } from "react";
import { GlobalContext } from "@/contexts/global-context";
import { toast } from "react-toastify";
import AdmissionService from "@/services/admission";

const ResultCompetencyForm = () => {
  const { genders, areas, priorities } = useContext(GlobalContext);
  const [details, setDetails] = useState<Record<string, string | null>>({
    fullName: null,
    gender: null,
    birthday: null,
    placeOfBirth: null,
    nation: null,
    permanentResidence: null,
    cccd: null,
    phonenumber: null,
    email: null,
    area: null,
    priority: null,
    highschoolName: null,
    graduationYear: null,
  });
  const addressToReceiveAdmissionNoticeRef = useRef<{ value: () => string }>(
    null
  );
  const highschoolAddressRef = useRef<{ value: () => string }>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeHandler = (name: string, value: any) => {
    setDetails((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const submitHandler = async () => {
    try {
      await AdmissionService.applyApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult({
        body: {
          ...details,
          addressToReceiveAdmissionNotice:
            addressToReceiveAdmissionNoticeRef.current?.value(),
          highschoolAddress: highschoolAddressRef.current?.value(),
        },
      });
      toast.success(
        "Application code is send to your email or phone number, please check it"
      );
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col bg-[#f6f6f6] gap-2 pt-4 px-4">
      <h1 className="text-[#A62823] font-semibold text-3xl">
        ĐĂNG KÝ XÉT TUYỂN THEO KẾT QUẢ THI ĐÁNH GIÁ NĂNG LỰC
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
              Nơi sinh (<span className="text-[#A9161C]">*</span>)
            </label>
            <input
              type="text"
              value={details.placeOfBirth || ""}
              onChange={(e) => changeHandler("placeOfBirth", e.target.value)}
            />
            <span>(Ghi Tỉnh hoặc Thành phố)</span>
          </div>
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Dân tộc (<span className="text-[#A9161C]">*</span>)
          </label>
          <input
            type="text"
            value={details.nation || ""}
            onChange={(e) => changeHandler("nation", e.target.value)}
          />
          <label htmlFor="">
            Số CMND/CCCD (<span className="text-[#A9161C]">*</span>)
          </label>
          <input
            type="text"
            value={details.cccd || ""}
            onChange={(e) => changeHandler("cccd", e.target.value)}
          />
        </div>
        <div className="flex flex-1 gap-2">
          <label htmlFor="">
            Hộ khẩu thường trú (<span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              value={details.permanentResidence || ""}
              onChange={(e) =>
                changeHandler("permanentResidence", e.target.value)
              }
            />
            <div className="flex gap-2 w-full">
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
              <input
                type="text"
                value={details.highschoolName || ""}
                onChange={(e) =>
                  changeHandler("highschoolName", e.target.value)
                }
                className="w-full"
              />
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
        <div className="flex gap-2">
          <label htmlFor="">
            Năm tốt nghiệp (<span className="text-[#A9161C]">*</span>)
          </label>
          <input
            type="text"
            value={details.graduationYear || ""}
            onChange={(e) => changeHandler("graduationYear", e.target.value)}
            className="grow"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Địa chỉ nhận kết quả xét tuyển (
            <span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2 w-full">
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
            <div className="flex flex-col gap-2">
              <input type="text" />
              <span>(Nhập đầy đủ số nhà, tên đường, thôn/tổ)</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <label htmlFor="">
              Điện thoại (<span className="text-[#A9161C]">*</span>)
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
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <h2 className="bg-[#A62823] text-white font-semibold text-lg px-4">
          THÔNG TIN ĐĂNG KÝ
        </h2>
        <div className="flex gap-2">
          <label htmlFor="">
            Mã hồ sơ đăng ký dự thi (<span className="text-[#A9161C]">*</span>)
          </label>
          <input type="text" className="grow" />
          <span>(Nhập đầy đủ số nhà, tên đường, thôn/tổ)</span>
        </div>

        <div className="flex gap-2">
          <label htmlFor="">
            Trường tổ chức thi (<span className="text-[#A9161C]">*</span>)
          </label>
          <input type="text" className="grow" />
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Kết quả thi đánh giá năng lực(
            <span className="text-[#A9161C]">*</span>)
          </label>
          <input type="text" className="grow" />
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Ngành đăng ký (<span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col gap-2 w-full">
            <select name="" id="">
              <option value="">---Chọn Ngành</option>
            </select>
          </div>
          <span className="grow">(Nhập đầy đủ số nhà, tên đường, thôn/tổ)</span>
        </div>

        <div className="flex gap-7">
          <span className="w-1/4">
            Chứng nhận kết quả điểm thi (
            <span className="text-[#A9161C]">*</span>) (Bản photo giấy chứng
            nhận kết quả điểm thi ĐGNL)
          </span>
          <div className="">
            <input type="file" name="" id="" />
          </div>
        </div>
        <div className="flex gap-7">
          <span className="w-1/4">
            Hồ sơ đính kèm (<span className="text-[#A9161C]">*</span>) (Gồm hồ
            sơ ưu tiên, Hồ sơ khác theo yêu cầu ngành tuyển của cơ sở đào tạo)
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

      <button className="bg-[#A9161C] px-4 py-2 text-white w-1/5 my-4 mx-auto" onClick={submitHandler}>
        ĐĂNG KÝ XÉT TUYỂN
      </button>
    </div>
  );
};

export default ResultCompetencyForm;
