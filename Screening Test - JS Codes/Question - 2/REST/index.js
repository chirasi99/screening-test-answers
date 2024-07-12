import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

async function getFreeBusyIntervals(calendarId, timeMin, timeMax) {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  oAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
    access_token: process.env.ACCESS_TOKEN,
  });

  const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

  const requestBody = {
    timeMin: new Date(timeMin).toISOString(),
    timeMax: new Date(timeMax).toISOString(),
    items: [{ id: calendarId }],
  };

  try {
    const response = await calendar.freebusy.query({ requestBody });
    const busyIntervals = response.data.calendars[calendarId].busy;

    return busyIntervals;
  } catch (error) {
    console.error("Error fetching free/busy intervals:", error);
    throw error;
  }
}

const calendarId = "chirasiamaya99@gmail.com";
const timeMin = "2024-07-05T00:00:00Z";
const timeMax = "2024-07-15T23:59:59Z";

getFreeBusyIntervals(calendarId, timeMin, timeMax)
  .then((busyIntervals) => {
    console.log("Busy Intervals:", busyIntervals);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
