import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";

const UpdateEvents = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetch(`https://social-event-server-peach.vercel.app/event/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setDate(new Date(data.date));
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const updateevent = {
      title: form.title.value,
      location: form.location.value,
      type: form.type.value,
      image: form.image.value,
      description: form.description.value,
      date,
      creatorEmail: user?.email,
    };

    fetch(`https://social-event-server-peach.vercel.app/update-event/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${user.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateevent),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully updated!");
      })
      .catch(console.log);
  };

  if (!event) {
    return <p className="text-center mt-10">Loading event...</p>;
  }

  return (
    <div className="px-4 sm:px-6">
      <h2 className="text-xl md:text-2xl text-center font-bold text-blue-600 mt-6">
        Update Event
      </h2>

      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-full
          md:max-w-2xl
          lg:max-w-xl
          mx-auto
          space-y-3
          p-4
          md:p-6
          bg-base-200
          rounded-xl
          mt-8
        "
      >
        <input
          name="title"
          defaultValue={event.title}
          placeholder="Title"
          className="input input-bordered w-full rounded-lg"
          required
        />

        <input
          name="location"
          defaultValue={event.location}
          placeholder="Location"
          className="input input-bordered w-full rounded-lg"
          required
        />

        <select
          name="type"
          defaultValue={event.type}
          className="select select-bordered w-full rounded-lg"
          required
        >
          <option value="">Select Type</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donation</option>
        </select>

        <input
          name="image"
          defaultValue={event.image}
          placeholder="Image URL"
          className="input input-bordered w-full rounded-lg"
        />

        <DatePicker
          selected={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          className="input input-bordered w-full rounded-lg"
          wrapperClassName="w-full"
          popperPlacement="middle"
          popperClassName="z-50"
          placeholderText="Select event date"
        />

        <textarea
          name="description"
          defaultValue={event.description}
          required
          rows="3"
          className="textarea w-full h-[100px] rounded-lg"
          placeholder="Enter description"
        />

        <button type="submit" className="btn btn-primary w-full">
          Update Event
        </button>
      </form>
    </div>
  );
};

export default UpdateEvents;
