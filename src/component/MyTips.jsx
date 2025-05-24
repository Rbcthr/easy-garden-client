import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyTips = () => {
  const initialMyTips = useLoaderData();
  const [myTips, setMyTips] = useState(initialMyTips);

  // delete a item
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-nu-murex.vercel.app/tip-info-public-and-private/${id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              // console.log("after delete", data);
              const remainingTips = myTips.filter((t) => t._id !== id);
              setMyTips(remainingTips);
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-16">
      <h3 className="font-bold text-3xl">
        Public & Private Tips ({myTips.length}):
      </h3>
      <Fade delay={200} duration={1000} fraction={0.5} triggerOnce>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#00BF83] dark:text-white">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Image</th>
                <th>Title</th>
                <th>Type</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {myTips.map((tip, index) => (
                <tr
                  key={tip?._id}
                  className="hover:bg-base-300 hover:dark:text-black"
                >
                  <td>{index + 1}</td>
                  <td>{tip?.name}</td>
                  <td>
                    <img className="w-12" src={tip?.image} alt="" />
                  </td>
                  <td>{tip?.title}</td>
                  <td>{tip?.category}</td>
                  <td>{tip?.type}</td>
                  <td>{tip?.difficulty}</td>
                  <td className="flex items-center gap-5">
                    <Link to={`/update-tip/${tip?._id}`}>
                      <FaPen size={20}></FaPen>
                    </Link>

                    <button
                      onClick={() => handleDelete(tip?._id)}
                      className="cursor-pointer"
                    >
                      <FaTrash size={20}></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fade>
    </div>
  );
};

export default MyTips;
