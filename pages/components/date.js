import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const isoDateString = new Date(dateString).toISOString(); // Ensure dateString is a valid JavaScript Date object
  const date = parseISO(isoDateString);
  return <time dateTime={isoDateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
