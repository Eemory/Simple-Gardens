import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CalendarFeature.css';
import { Card, Form } from 'react-bootstrap';
import { useEffect } from "react";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [];

const CalendarFeature = () => {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    const saveLocalEvents = () => {
        localStorage.setItem('events', JSON.stringify(allEvents))
    }

    const getLocalEvents = () => {
        if (localStorage.getItem('events') === null) {
            localStorage.setItem('events', JSON.stringify([]));
        } else {
           let eventsLocal = JSON.parse(localStorage.getItem('events'));
           setAllEvents(eventsLocal);
        }
    }

    useEffect(() => {
        getLocalEvents();
    }, []);
    
    useEffect(() => {
        saveLocalEvents();
    }, [allEvents])

    return (
        <Card className="calendar-card">
            <h1 className='card-header'>Calendar</h1>
            <Card.Subtitle className='subtitle'> Add New Event</Card.Subtitle>
            <Form>
                <input type="text" placeholder="Add Title" className='calendar-input' value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" className='calendar-start' selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button className='add-event' onClick={handleAddEvent}>
                    Add Event
                </button>
            </Form>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" className='big-calendar' />
        </Card>
    );
}

export default CalendarFeature;