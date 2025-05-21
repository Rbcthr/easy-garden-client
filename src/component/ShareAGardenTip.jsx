import React, { useState } from "react";
import Swal from "sweetalert2";

const ShareAGardenTip = () => {
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");

  const handleAddTip = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newForm = Object.fromEntries(formData.entries());
    const tipInfo = {
      ...newForm,
      difficulty,
      category,
      availability,
    };
    console.log(tipInfo);

    if (!difficulty || !category || !availability) {
      Swal.fire({
        icon: "error",
        title: "All fields are required",
        text: "Please make sure no field is left empty including difficulty, category, availability",
      });
      return
    }

    // add tip info in the DB

    fetch("http://localhost:3000/tip-info", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tipInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('after inserting tip info', data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully tip saved",
            showConfirmButton: false,
            timer: 1000,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto my-16 space-y-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Share a Garden Tip
      </h1>
      <form onSubmit={handleAddTip} className="w-1/2 mx-auto space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset">
            <label className="font-bold">Name</label>
            <input
              required
              name="name"
              type="text"
              className="input w-full focus:outline-0"
              placeholder="Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input w-full focus:outline-0"
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Title</label>
            <input
              required
              name="title"
              type="text"
              className="input w-full focus:outline-0"
              placeholder="e.g., “How I Grow Tomatoes Indoors"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Plant Type</label>
            <input
              required
              name="type"
              type="text"
              className="input w-full focus:outline-0"
              placeholder="Plant Type/Topic"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Difficulty Level</label>
            <select
              required
              defaultValue="Select Difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
              className="select w-full focus:outline-0"
            >
              <option disabled={true}>Select Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Images url</label>
            <input
              required
              name="image"
              type="text"
              className="input w-full focus:outline-0"
              placeholder="Images url"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Category</label>
            <select
              required
              defaultValue="Select Category"
              onChange={(e) => setCategory(e.target.value)}
              className="select w-full focus:outline-0"
            >
              <option disabled={true}>Select Category</option>
              <option>Composting</option>
              <option>Plant Care</option>
              <option>Vertical Gardening</option>
            </select>
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold">Availability</label>
            <select
              required
              defaultValue="Select Availability"
              onChange={(e) => setAvailability(e.target.value)}
              className="select w-full focus:outline-0"
            >
              <option disabled={true}>Select Availability</option>
              <option>Public</option>
              <option>Hidden</option>
            </select>
          </fieldset>
        </div>
        <fieldset className="fieldset">
          <label className="font-bold">Description</label>
          <textarea
            required
            name="description"
            rows={5}
            className="textarea focus:outline-0 w-full"
            placeholder="Description"
          ></textarea>
        </fieldset>
        <input
          className="btn btn-success text-white w-full"
          type="submit"
          value="Add Tips"
        />
      </form>
    </div>
  );
};

export default ShareAGardenTip;
