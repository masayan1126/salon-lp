import React, { useCallback, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import Modal from "../components/Modal";

const Calendar = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  const log = () => {
    setIsDisplay(true);
    console.log(isDisplay);
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialEvents={[{ title: "initial event", start: new Date() }]}
        height="100vh"
        dateClick={() => log()}
      />
      <Modal isDisplay={isDisplay} setIsDisplay={setIsDisplay} />
    </>
  );
};

export default Calendar;
