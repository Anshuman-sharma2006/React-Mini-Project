import React, { useEffect, useState } from "react";
import axios from "axios";
const app = () => {
  const [data, setdata] = useState([]);
  const [Index, setIndex] = useState(2);
  // const [Load, setLoad] = useState(false)

  const DataInfo = async () => {
    // setLoad(true)
    const respon = await axios.get(
      `https://picsum.photos/v2/list?page=${Index}&limit=18`,
    );
    console.log(respon.data);
    setdata(respon.data);
    // setLoad(false)
  };
  useEffect(() => {
    DataInfo();
  }, [Index]);
  return (
    <div className="h-screen flex flex-col justify-start overflow-auto bg-[#232323]">
      <div className=" h-50% p-5  ">
        {/* Now Using the  useffect */}
        {/* <button onClick={DataInfo} className=" bg-[#323232] active:scale-95 p-2 font-semibold text-3xl  rounded-2xl">GetData</button> */}
        {/*first logic(LoadingLogic) part then(Here The Element (LoadingScreen) )  */}
        {/* {Load && (  (only coomented out one below line u will understand what u wanted too do )*/}
        {data.length === 0 && (
          <p className="p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-bold text-3xl">
            Loading...
          </p>
        )}
        <div className="flex flex-wrap p-5  ">
          {data.map((elem, idx) => {
            return (
              <div className="p-1  sm:basis-1/3 lg:basis-[15%]  basis-[15%] border-2 border-[#323232]">
                <img
                  loading="lazy"
                  key={idx}
                  className=" p-5 object-cover overflow-auto w-48 h-32 "
                  src={elem.download_url}
                  alt="ImageNotFound"
                />
                <h3 className="font-bold text-2xl gap-2">{elem.author}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <section className="mb-12 mt-auto flex self-center  justify-center  text-white gap-2 text-2xl font-semibold ">
        <button onClick={()=>{
          if(Index>1)
          {setIndex(Index-1)}
        }}
         className="bg-[#323232] p-2 rounded-md  active:text-gray-950 active:scale-95 ">Prev</button>
        <p className="text-md mt-2">Page:{Index}</p>
        <button onClick={()=>{
          setIndex(Index+1)
        }}
         className="bg-[#323232] p-2 rounded-md  active:text-gray-950 active:scale-95 ">Next</button>
      </section>
    </div>
  );
};

export default app;
