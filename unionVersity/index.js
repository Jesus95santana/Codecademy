"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
function searchEvents(options) {
    let events;
    switch (options.eventType) {
        case "courses":
            events = courses_1.default;
            break;
        case "groups":
            events = studyGroups_1.default;
            break;
    }
    return events.filter((event) => {
        if (typeof options.query === "number") {
            return event.id === options.query;
        }
        if (typeof options.query === "string") {
            return event.keywords.includes(options.query);
        }
    });
}
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
const searchResults = searchEvents({ query: 'art', eventType: "groups" });
enroll(searchResults[0]);
enroll(searchResults[1]);
console.log(enrolledEvents);
