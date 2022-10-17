import "./styles.css";
import { addDays, addHours, addMonths, subMinutes, subMonths } from "date-fns";

const now = new Date("2020-03-31");
const prevMonth = subMonths(now, 1);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<h2>${now}</h2>
<h2>${prevMonth}</h2>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
