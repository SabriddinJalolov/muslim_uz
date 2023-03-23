import React from "react";

const Card = ({ weekday, day, month, region, times }) => {
  return (
    <>
   
    <div className="container mb-5">
      <div className="card w-25 p-3">
      <p>Hafta: {weekday}</p>
      <p>Kun: {day}</p>
      <p>Oy: {month}</p>
      <p>Viloyat: {region}</p>
      

      <div className="iftorli">
        <p className="text-warning "><mark className="bg-warning rounded-1">tong saharlik: {times?.tong_saharlik}</mark></p>
        <p>Bomdod: {times.quyosh}</p>
        <p>Peshin: {times?.peshin}</p>
        <p>Asr: {times?.peshin}</p>
        <p className="text-warning"><mark className="bg-warning rounded-1">Iftorlik Shom:{times?.peshin}</mark></p>
        <p>Hufton: {times?.peshin}</p>

      </div>

      </div>

      



    </div>
    </>
  );
};

export default Card;
