import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const UpcomingEvents = () => {
  const data = useLoaderData();
  const [events, setEvents] = useState(data);
  const [filteredEvents, setFilteredEvents] = useState(data);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  useEffect(() => {
    let result = events;

    if (search) {
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(search.toLowerCase()) ||
          event.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (type !== "All") {
      result = result.filter((event) => event.type === type);
    }

    setFilteredEvents(result);
  }, [search, type, events]);

  return (
    <div className="px-4 md:px-6 lg:px-0 mx-auto lg:w-[1250px]">
      <h2 className="text-xl md:text-2xl text-center font-bold text-blue-600 mb-6 md:mb-8   mt-4">
        Upcoming Events
      </h2>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 md:mb-8">
        <input
          type="text"
          placeholder="Search Events"
          className="input input-bordered rounded-lg w-full sm:w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered rounded-lg w-full sm:w-56"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>All</option>
          <option>Plantation</option>
          <option>Cleanup</option>
          <option>Donation</option>
          <option>Awareness</option>
        </select>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No events found.
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
