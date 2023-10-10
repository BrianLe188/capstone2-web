import "./resultCompetencyForm.css";

const ResultCompetencyForm = () => {
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
          <input type="text" />
          <div className="flex gap-2 items-center">
            <input type="radio" name="gender" id="" />
            <label htmlFor="">Nam</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" name="gender" id="" />
            <label htmlFor="">Nữ</label>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <label htmlFor="">
              Ngày sinh (<span className="text-[#A9161C]">*</span>)
            </label>
            <input type="text" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="">
              Nơi sinh (<span className="text-[#A9161C]">*</span>)
            </label>
            <input type="text" />
            <span>(Ghi Tỉnh hoặc Thành phố)</span>
          </div>
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Dân tộc (<span className="text-[#A9161C]">*</span>)
          </label>
          <input type="text" />
          <label htmlFor="">
            Số CMND/CCCD (<span className="text-[#A9161C]">*</span>)
          </label>
          <input type="text" />
        </div>
        <div className="flex flex-1 gap-2">
          <label htmlFor="">
            Hộ khẩu thường trú (<span className="text-[#A9161C]">*</span>)
          </label>
          <input type="text" className="grow" />
          <span>(Ghi rõ tên tỉnh (thành phố), huyện (quận), xã (phường))</span>
        </div>
        <div className="flex">
          <label htmlFor="">
            Nơi học THPT (<span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-1 gap-2">
              <select name="" id="" className="flex-1">
                <option value=""></option>
              </select>
              <div className="flex flex-1 gap-2">
                <label htmlFor="">
                  Trường THPT hoặc
                  <br /> tương đương (<span className="text-[#A9161C]">*</span>)
                </label>
                <select name="" id="" className="flex-1">
                  <option value=""></option>
                </select>
              </div>
            </div>
            <span>
              (Ghi chú: nếu là thí sinh tự do thì bạn chọn trường THPT đã tốt
              nghiệp trước đó.)
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-1 gap-2">
            <label htmlFor="">
              Khu vực (<span className="text-[#A9161C]">*</span>)
            </label>
            <select name="" id="" className="flex-1">
              <option value=""></option>
            </select>
          </div>
          <div className="flex flex-1 gap-2">
            <label htmlFor="">
              Đối tượng (<span className="text-[#A9161C]">*</span>)
            </label>
            <select name="" id="" className="flex-1">
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Năm tốt nghiệp (<span className="text-[#A9161C]">*</span>)
          </label>
          <input type="text" className="grow" />
        </div>
        <div className="flex gap-2">
          <label htmlFor="">
            Địa chỉ nhận kết quả xét tuyển (
            <span className="text-[#A9161C]">*</span>)
          </label>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2 w-full">
              <select name="" id="" className="w-1/3">
                <option value=""></option>
              </select>
              <select name="" id="" className="w-1/3">
                <option value=""></option>
              </select>
              <select name="" id="" className="w-1/3">
                <option value=""></option>
              </select>
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
            <input type="text" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="">
              Email (<span className="text-[#A9161C]">*</span>)
            </label>
            <input type="text" />
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
          <span className="label">
            (Nhập đầy đủ số nhà, tên đường, thôn/tổ)
          </span>
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
              <option value=""></option>
            </select>
          </div>
          <span className="label">
            (Nhập đầy đủ số nhà, tên đường, thôn/tổ)
          </span>
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

      <button className="bg-[#A9161C] px-4 py-2 text-white w-1/5 my-4 mx-auto">
        ĐĂNG KÝ XÉT TUYỂN
      </button>
    </div>
  );
};

export default ResultCompetencyForm;
