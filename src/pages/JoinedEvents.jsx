import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const JoinedEvents = () => {
  const { user } = use(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `https://social-event-server-peach.vercel.app/joined?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [user?.email]);

  return (
    <div
      className="
        px-4 py-6
        sm:px-6
        md:px-8
        lg:w-[1250px] lg:mx-auto
      "
    >
      <h2 className="text-xl md:text-2xl text-blue-600 text-center font-bold mb-5">
        My Joined Events
      </h2>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4
        "
      >
        {events.map((ev) => (
          <div
            key={ev._id}
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
                src={ev.image}
                className="w-full h-48 object-cover"
                alt={ev.eventTitle}
              />
            </figure>

            <div className="card-body">
              <h3 className="font-bold">{ev.eventTitle}</h3>
              <p>Date: {new Date(ev.eventDate).toDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinedEvents;
