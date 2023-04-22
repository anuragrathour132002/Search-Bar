import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const SearchPage = () => {
  const [ads, setAds] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function getAds() {
      try {
        const ads = await axios.get("http://localhost:4000/api/ads");
        // console.log(ads.data);
        setAds(ads.data);
      } catch (error) {
        // console.log(error);
      }
    }
    getAds();
  }, []);

  return (
    <div>
      <div className=" mt-10 flex justify-center">
        <input
          type="text"
          placeholder="Search Ads"
          onChange={(e) => setValue(e.target.value)}
          className="bg-white m-5 p-3 rounded-md text-cyan-50 text-center col-xl-12"
        />
      </div>
      {/* divider */}
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400"></span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* code to create ads in a grid */}
      <div className="grid md:grid-cols-2 p-10 sm:grid-cols-1 gap-y-10 content-center justify-items-center">
        {ads.map((adsToShow, index) => {
          if (
            adsToShow.primaryText
              .toLowerCase()
              .includes(value.toLocaleLowerCase())
          ) {
            return (
              <div
                className="overflow-hidden rounded shadow-lg w-96"
                key={index}
              >
                <img
                  className="w-full"
                  src={adsToShow.imageUrl}
                  alt="Ads Image"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    {adsToShow.primaryText} <br />
                    <p className="text-sm">{adsToShow.headline}</p>
                  </div>
                  <p className="text-base text-gray-700">
                    {adsToShow.description}
                  </p>
                </div>

                <div className="px-6 pt-8 text-base font-semibold leading-7">
                  <p className="text-gray-900">
                    {adsToShow.CTA} {adsToShow.matched[0].name}
                  </p>
                  <p>
                    <a
                      href={`https://www.${adsToShow.matched[0].url}`}
                      target="_black"
                      className="text-sky-500 hover:text-sky-600"
                    >
                      {adsToShow.CTA} {adsToShow.matched[0].url} &rarr;
                    </a>
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default SearchPage;