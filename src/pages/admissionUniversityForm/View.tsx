import SelectLocation from "@/components/select-location";
import "./admissionUniversityForm.css";
import locations from "@/assets/locations";
import { useContext, useState } from "react";
import { GlobalContext } from "@/contexts/global-context";

const factorArray = [
  {
    text: "Tham dự đội tuyển thi Olympic quốc tế, cuộc thi KHKT quốc tế. Xét giải các năm 2021, 2022, 2023",
    value: 1,
  },
  {
    text: "Giải học sinh giỏi Nhất, Nhỉ, Ba, Khuyến khích cấp Quốc gia; cấp tỉnh, thành phố trực thuộc Trung ương.",
    value: 2,
  },
  {
    text: "Giải Nhất, Nhì, Ba, Khuyến khích trong Cuộc thì Khoa học Kỹ thuật cấp quốc gia: cấp tỉnh, thành phố trực thuộc Trung ương.",
    value: 3,
  },
  {
    text: "Giải Nhất, Nhì, Ba, khuyến khích tại các kỷ thi tay nghề khu vực ASEAN, thi tay nghề quốc tể.",
    value: 4,
  },
  {
    text: 'Tham gia Vòng thi tuần trong cuộc thi "Đường lên đỉnh 0lympia" trên Đài truyền hình Việt Nam.',
    value: 5,
  },
  {
    text: "Xét tuyển thẳng đối với các học sinh tốt nghiệp các trưởng THPT Chuyên của tỉnh, thành phố trực thuộc Trung ương (trừ khối ngành Khoa học Sức khỏe).",
    value: 6,
  },
  {
    text: "Xét tuyển thẳng Thí sinh là thành viên đội tuyển quốc gia,",
    value: 7,
  },
  {
    text: "Xết tuyển thẳng Thí sinh là người nước ngoài tốt nghiệp THPT hoặc tương đương THPT của Việt Nam (trừ khối ngành Khoa học Sức khỏe).",
    value: 8,
  },
];

const AdmissionUniversityForm = () => {
  const { genders, areas, priorities } = useContext(GlobalContext);
  const [details, setDetails] = useState<Record<string, string | null>>({
    fullName: null,
    gender: null,
    birthday: null,
    cccd: null,
    phonenumber: null,
    email: null,
    area: null,
    priority: null,
    factor: null,
  });

  console.log(details);

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
        ĐĂNG KÝ XÉT TUYỂN THẲNG VÀO ĐẠI HỌC
      </h1>
      <span className="text-[#A9161C]">
        Dưới đây là những thông tin xét tuyển thẳng Đại Học vào trường Đại Học
        Duy Tân. Bạn vui lòng điền đầy đủ thông tin bên dưới để nhận được kết
        quả mong đợi.
      </span>

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
        <div className="flex gap-2">
          <label htmlFor="">
            Nơi học THPT (<span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
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
            <div className="flex gap-2">
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
          <div className="flex gap-2">
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
          <div className="flex gap-2">
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
            Đối tượng xét tuyển (<span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col gap-4">
            {factorArray.map((item, index) => (
              <div className="flex gap-2 items-center" key={index}>
                <input
                  type="radio"
                  name="factor"
                  id=""
                  value={item.value}
                  onChange={(e) => changeHandler("factor", e.target.value)}
                />
                <label htmlFor="">{item.text}</label>
              </div>
            ))}
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
            Ngành đăng ký(<span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col">
            <select name="" id="">
              <option value=""></option>
            </select>
            <span>
              (Ghi chú: thí sinh được phép chuyển đổi ngành phù hợp sau 1 Học kỳ
              đến 1 Năm học theo quy chế của Bộ Giáo Dục và Đào Tạo.)
            </span>
          </div>
        </div>

        <div className="flex gap-7">
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

export default AdmissionUniversityForm;
