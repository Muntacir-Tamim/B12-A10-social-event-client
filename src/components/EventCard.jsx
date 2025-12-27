import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <div
      className="
        card
        bg-base-100
        w-full
        lg:w-96
        shadow-sm
      "
    >
      <figure>
        <img
          src={event.image}
          className="w-full h-48 object-cover"
          alt={event.title || event.eventTitle}
        />
      </figure>

      <div className="card-body">
        <h3 className="font-bold">{event.title || event.eventTitle}</h3>

        {event.location && (
          <p className="text-gray-500 text-sm">{event.location}</p>
        )}

        {event.eventDate && (
          <p>Date: {new Date(event.eventDate).toDateString()}</p>
        )}

        <div className="card-actions">
          <Link
            to={`/events/${event._id}`}
            className=" mt-3
      block
      w-full
      text-center
      bg-blue-600
      text-white
      px-4
      py-2
      rounded-lg
      font-medium
      hover:bg-blue-700
      transition"
          >
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
