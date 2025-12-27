import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

const ManageEvents = () => {
  const { user } = use(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-events/${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [user.email]);

  return (
    <div
      className="
        px-4 py-6
        sm:px-6
        md:px-8
        lg:w-[1250px] lg:mx-auto
      "
    >
      <h2 className="text-xl md:text-2xl text-center font-bold text-blue-600 mb-6">
        Manage My Events
      </h2>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
        "
      >
        {events.map((event) => (
          <div
            key={event._id}
            className="
              card
              bg-base-100
              w-full
              lg:w-96
              shadow-sm
              mx-auto
            "
          >
            <figure>
              <img
                src={event.image}
                className="w-full h-48 object-cover"
                alt={event.title}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{event.title}</h2>
              <p>Date: {new Date(event.date).toDateString()}</p>

              <div className="card-actions">
                <Link
                  className="
                    block
                    w-full
                    text-center
                    bg-blue-600
                    text-white
                    py-2
                    rounded-sm
                    hover:bg-blue-700
                    transition
                    mt-2
                  "
                  to={`/update-event/${event._id}`}
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
