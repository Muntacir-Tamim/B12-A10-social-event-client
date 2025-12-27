// import { useNavigate, useParams } from "react-router";
// import { AuthContext } from "../context/AuthContext";
// import { use, useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const EventDetails = () => {
//   const { id } = useParams();
//   const { user } = use(AuthContext);
//   const [event, setEvent] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://localhost:3000/events/${id}`)
//       .then((res) => res.json())
//       .then((data) => setEvent(data));
//   }, [id]);

//   const handleJoin = () => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     fetch("http://localhost:3000/join", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${user.accessToken}`,
//       },
//       body: JSON.stringify({
//         eventId: event._id,
//         image: event.image,
//         eventTitle: event.title,
//         eventDate: event.date,
//         userEmail: user.email,
//         joinedAt: new Date(),
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         data.success ? toast.success(data.message) : toast.error(data.message);
//       })
//       .catch(() => toast.error("Something went wrong!"));
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-5">
//       {/* Card */}
//       <h1 className="text-center text-blue-600 font-semibold text-3xl mb-7">
//         Event Details
//       </h1>
//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Image */}
//         <div className="relative">
//           <img
//             src={event.image}
//             alt={event.title}
//             className="w-full h-[380px] object-cover"
//           />
//           <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
//             {event.type}
//           </span>
//         </div>

//         {/* Content */}
//         <div className="p-8 space-y-4">
//           <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>

//           <div className="flex flex-wrap gap-6 text-gray-500 text-sm">
//             <p>
//               📍 <span className="font-medium">{event.location}</span>
//             </p>
//             <p>
//               📅{" "}
//               <span className="font-medium">
//                 {new Date(event.date).toDateString()}
//               </span>
//             </p>
//           </div>

//           <p className="text-gray-600 leading-relaxed">{event.description}</p>

//           <div className="pt-4">
//             <button
//               onClick={handleJoin}
//               className="btn btn-primary px-8 rounded-lg text-base"
//             >
//               Join Event
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;

import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";

const EventDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [id]);

  const handleJoin = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:3000/join", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify({
        eventId: event._id,
        image: event.image,
        eventTitle: event.title,
        eventDate: event.date,
        userEmail: user.email,
        joinedAt: new Date(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.success ? toast.success(data.message) : toast.error(data.message);
      })
      .catch(() => toast.error("Something went wrong!"));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
      <h1 className="text-center text-blue-600 font-semibold text-xl md:text-2xl lg:text-3xl mb-5 md:mb-7">
        Event Details
      </h1>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Image */}
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="
              w-full
              h-56
              md:h-72
              lg:h-[380px]
              object-cover
            "
          />
          <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-blue-600 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
            {event.type}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 lg:p-8 space-y-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            {event.title}
          </h1>

          <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-6 text-gray-500 text-sm">
            <p>
              📍 <span className="font-medium">{event.location}</span>
            </p>
            <p>
              📅{" "}
              <span className="font-medium">
                {new Date(event.date).toDateString()}
              </span>
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {event.description}
          </p>

          <div className="pt-4">
            <button
              onClick={handleJoin}
              className="
                btn
                btn-primary
                w-full
                md:w-auto
                px-6
                md:px-8
                rounded-lg
                text-sm
                md:text-base
              "
            >
              Join Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
