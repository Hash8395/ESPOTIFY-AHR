import React from "react";

const EventsSection = () => {
  const events = [
    {
      title: "TEC Community Clash",
      prize: "3,000,000 INR",
      platform: "PC",
      status: "Ongoing",
      date: "8 Jan 2025",
    },
    {
      title: "Alienware Gaming Saturdays",
      prize: "40,000 INR",
      platform: "PC",
      status: "Upcoming",
      date: "25 Jan 2025",
    },
  ];

  return (
    <section id="events" className="events-section">
      <h2>Tournois</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>Prix : {event.prize}</p>
            <p>Plateforme : {event.platform}</p>
            <p>Statut : {event.status}</p>
            <p>Date : {event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;