import React from "react";
import { Button, DatePicker, Form, Select } from "antd";
import { Option } from "antd/es/mentions";

const Inputs = ({ prayTime, setPrayTime }) => {
  let a = "";
  const onChangeFunc = (e) => {
    a += e?.$d;
    let day = a.slice(7, 10);
    let month = e?.$M + 1;
    setPrayTime((p) => ({ ...p, day: day.trim() }));
    setPrayTime((p) => ({ ...p, month: month }));
  };

  const onChangeRegion = (e) => {
    setPrayTime((p) => ({ ...p, region: e.trim() }));
  };
  return (
    <div>
      
      <br />
      <Form.Item label="Kunlik namoz vaqti" className="d-flex align-items-center justify-content-center">
        <DatePicker onChange={(e) => onChangeFunc(e)} />
      </Form.Item>
      <Form.Item  className="d-flex align-items-center justify-content-center" label="Viloyatni tanlang">
        <Select
          className="region "
          onChange={(e) => onChangeRegion(e)}
          value={prayTime.region.length < 1 ? "Toshkent" : prayTime.region}
          defaultValue="Toshkent"
          //   onChange={(e) => onChangeFunc(e)}
        >
          <Option value="Toshkent">Toshkent</Option>
          <Option value="Samarqand">Samarqand</Option>
          <Option value="Nukus">Nukus</Option>
          <Option value="Buxoro">Buxoro</Option>
          <Option value="Farg'ona">Farg'ona</Option>
          <Option value="Andijon">Andijon</Option>
          <Option value="Namangan">Namangan</Option>
          <Option value="Sirdaryo">Sirdaryo</Option>
          <Option value="Surxandaryo">Surxandaryo</Option>
          <Option value="Qashqadaryo">Qashqadaryo</Option>
          <Option value="Xorazm">Xorazm</Option>
          <Option value="Jizzax">Jizzax</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default Inputs;
