import { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEvent = () => {
  const { user } = use(AuthContext);
  const [date, setDate] = useState(new Date());

  const handleCreate = (e) => {
    e.preventDefault();
    const form = e.target;

    const event = {
      title: form.title.value,
      location: form.location.value,
      type: form.type.value,
      image: form.image.value,
      description: form.description.value,
      date,
      creatorEmail: user?.email,
    };

    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        authorization: `Bearer ${user.accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Event Created Successfully");
        form.reset();
        setDate(new Date());
      });
  };

  return (
    <div
      className="
        px-4
        sm:px-6
        md:px-8
        lg:w-[1250px] lg:mx-auto
      "
    >
      <h1 className="text-center font-bold mt-6 md:mt-8 text-xl md:text-2xl text-blue-600">
        Create New Event
      </h1>

      <form
        onSubmit={handleCreate}
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
          mt-6
          md:mt-10
        "
      >
        <input
          name="title"
          placeholder="Title"
          className="input input-bordered w-full rounded-lg"
          required
        />

        <input
          name="location"
          placeholder="Location"
          className="input input-bordered w-full rounded-lg"
          required
        />

        <select
          name="type"
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
          required
          rows="3"
          className="textarea w-full h-[100px] rounded-lg"
          placeholder="Enter description"
        />

        <button className="btn btn-primary w-full">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
