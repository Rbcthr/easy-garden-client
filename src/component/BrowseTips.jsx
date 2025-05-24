import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaEye } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const BrowseTips = () => {
  const [fetchTip, setFetchTip] = useState([]);
  console.log(fetchTip);

  const [item, setItem] = useState("Easy");
  console.log(item);
  // const tips = useLoaderData();

  useEffect(() => {
    fetch(
      `https://assignment-10-server-nu-murex.vercel.app/tip-info-publics?category=${item}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchTip(data);
      });
  }, [item]);

  return (
    <div className="w-11/12 mx-auto my-16 space-y-5">
      <h3 className="font-bold text-3xl">Public Tips ({fetchTip.length}):</h3>
      <div className="overflow-x-auto">
        <div className="flex justify-start">
          <fieldset className="fieldset">
            <p className="font-bold">Filter</p>
            <select
              onChange={(e) => setItem(e.target.value)}
              defaultValue="Select Difficulty"
              className="select dark:text-black"
            >
              <option disabled={true}>Select Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </fieldset>
        </div>
        <Fade delay={200} duration={1000} fraction={0.5} triggerOnce>
          <table className="table">
            {/* head */}
            <thead className="bg-[#00BF83] dark:text-white ">
              <tr className="">
                <th>No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Difficulty</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {fetchTip.map((tip, index) => (
                <tr
                  key={tip?._id}
                  className="hover:bg-base-300 hover:dark:text-black"
                >
                  <td>0{index + 1}</td>
                  <td>
                    <img className="w-12" src={tip?.image} alt="" />
                  </td>
                  <td>{tip?.title}</td>
                  <td>{tip?.difficulty}</td>
                  <td>{tip?.category}</td>
                  <td>
                    <Link to={`/tip-details/${tip?._id}`}>
                      <FaEye size={20}></FaEye>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fade>
      </div>
    </div>
  );
};

export default BrowseTips;
