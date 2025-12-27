import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={event.image} className="w-full h-48 object-cover" alt="img" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p className="text-gray-500 text-sm">{event.location}</p>
        <div className="card-actions ">
          <Link
            to={`/events/${event._id}`}
            className="mt-3 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
