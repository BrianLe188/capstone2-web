import { useEffect, useState } from "react";

const View = ({
  data,
  values,
}: {
  data: Array<{
    code: string;
    parent_code: string | null;
    name: string;
    type: string;
  }>;
  values: {
    country: string;
    district: string;
    ward: string;
  };
}) => {
  const [locations, setLocations] = useState<{
    [key: string]: Array<{
      code: string;
      parent_code: string | null;
      name: string;
      type: string;
    }>;
  }>({
    countries: [],
    districts: [],
    wards: [],
  });
  const [target, setTarget] = useState(values);

  useEffect(() => {
    setLocations({
      countries: data.filter(
        (item) => item.type === "city" || item.type === "province"
      ),
      districts: data.filter((item) => item.type === "district"),
      wards: data.filter(
        (item) => item.type === "ward" || item.type === "commune"
      ),
    });
  }, [data]);

  const changeHandler = (key: keyof typeof target, value: string) => {
    setTarget((state) => ({
      ...state,
      [key]: value,
    }));
  };

  return (
    <div className="flex gap-2 w-full">
      <select
        value={target.country}
        name=""
        id=""
        className="w-1/3"
        onChange={(e) => changeHandler("country", e.target.value)}
      >
        {locations.countries?.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>
      <select
        value={target.district}
        name=""
        id=""
        className="w-1/3"
        onChange={(e) => changeHandler("district", e.target.value)}
      >
        {locations.districts?.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>
      <select
        value={target.ward}
        name=""
        id=""
        className="w-1/3"
        onChange={(e) => changeHandler("ward", e.target.value)}
      >
        {locations.wards?.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default View;
