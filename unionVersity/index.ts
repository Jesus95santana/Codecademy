import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
	id: number;
	studyGroupId: number;
	title: string;
	keywords: string[];
	eventType: string;
};
type StudyGroup = {
	id: number;
	courseId: number;
	title: string;
	keywords: string[];
	eventType: string;
};
type SearchEventsOptions = {
	query: string | number;
	eventType: "courses" | "groups";
};

function searchEvents(options: SearchEventsOptions) {
	let events: (Course | StudyGroup)[];
	// Sets events to a list of courses or study groups
	switch (options.eventType) {
		case "courses":
			events = courses;
			break;
		case "groups":
			events = studyGroups;
			break;
	}
	// filters events to the word or number within query
	return events.filter((event: Course | StudyGroup) => {
		if (typeof options.query === "number") {
			return event.id === options.query;
		}
		if (typeof options.query === "string") {
			return event.keywords.includes(options.query);
		}
	});
}
let enrolledEvents: (Course | StudyGroup)[] = [];
function enroll(event: Course | StudyGroup) {
	enrolledEvents = [...enrolledEvents, event];
}

const searchResults = searchEvents({ query: "art", eventType: "groups" });
enroll(searchResults[0]);
enroll(searchResults[1]);
console.log(enrolledEvents);
