import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Tickets.css";

const Tickets = ({ setProgressCount, setResolvedCount }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch("/assets/tickets.json");
      const data = await response.json();
      setTickets(data);
    };
    fetchTickets();
  }, []);

  //on ticket
  const [ongoingTickets, setOngoingTickets] = useState([]);
  const ticketClickHandler = (ticket) => {
    toast("Added to Ongoing Tickets!");
    if (!ongoingTickets.find((t) => t.id === ticket.id)) {
      setOngoingTickets([...ongoingTickets, ticket]);
    }
    setProgressCount((prev) => prev + 1);
    setTickets((prevTickets) =>
      prevTickets.map((t) =>
        t.id === ticket.id ? { ...t, status: "In Progress" } : t
      )
    );
  };

  //on complete
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const completedHandler = (ticket) => {
    if (!ticket) return;
    toast("Marked as Resolved!");
    setOngoingTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    setProgressCount((prev) => prev - 1);
    setResolvedCount((prev) => prev + 1);
    setResolvedTickets((prev) => [...prev, ticket]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
  };

  return (
    <div id="tickets-container">
      <div className="tickets-cards-parent">
        <p className="tickets-title">Customer Tickets</p>
        <div className="tickets-gallery">
          {tickets.map((ticket) => (
            <div
              className="ticket-card"
              onClick={() => ticketClickHandler(ticket)}
            >
              <div className="tickets-1st">
                <p className="ticket-title">{ticket.title}</p>
                <div
                  className="ticket-status"
                  style={{
                    backgroundColor:
                      ticket.status === "Open" ? "#B9F8CF" : "#F8F3B9",
                    color:
                      ticket.status === "Open"
                        ? "green"
                        : ticket.status === "In - Progress"
                        ? "#9C7700"
                        : "darkgoldenrod",
                  }}
                >
                  {ticket.status}
                </div>
              </div>
              <p className="ticket-desc">{ticket.description}</p>
              <div className="ticket-3rd">
                <div className="ticket-3rd-left">
                  <p className="ticket-id">{ticket.id}</p>
                  <p
                    className="ticket-priority"
                    style={{
                      color: ticket.priority === "High" ? "#F83044" : "#FEBB0C",
                    }}
                  >
                    {ticket.priority}
                  </p>
                </div>
                <p className="ticket-username">
                  <img className="user-svg" src="./assets/user.svg" alt="" />
                  {ticket.username}
                </p>
                <p className="ticket-date">
                  <img className="date-svg" src="./assets/date.svg" alt="" />
                  {ticket.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ongoing-tickets-abba">
        <p className="tickets-title">Ongoing Tickets</p>
        <div className="ongoing-cards">
          {ongoingTickets.length === 0 && <p>Click on a ticket to add</p>}
          {ongoingTickets.map((ticket) => (
            <div key={ticket.id} className="ongoing-card">
              <p className="ongoing-card-title">{ticket.title}</p>
              <button
                className="ongoing-card-btn"
                onClick={() => completedHandler(ticket)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>

        <div className="resolved-abba">
          <p className="resolved-title2">Resolved Tickets</p>
          {/* <p className="resolved-subtitle">No resolved tasks yet.</p> */}
          <div className="resolved-cards">
            {resolvedTickets.length === 0 && (
              <p className="resolve-before-title">Complete a ticket to add</p>
            )}
            {resolvedTickets.map((ticket) => (
              <p key={ticket.id} className="resolved-card-title">
                {ticket.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
