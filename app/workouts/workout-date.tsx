interface WorkoutDateProps {
    date: Date,
}

function isToday(date: Date) {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

function isDateWithinSixDays(dateToCheck: Date): boolean {
  const now = new Date();
  const sevenDaysInMilliseconds = 6 * 24 * 60 * 60 * 1000; // 604800000 milliseconds

  // Calculate the time difference in milliseconds
  // Math.abs() handles both future and past dates within the range
  const timeDifference = Math.abs(dateToCheck.getTime() - now.getTime());

  return timeDifference <= sevenDaysInMilliseconds;
}

function formatDate(date: Date): string {
    if (isToday(date)) {
        return "Today";
    }

    if (isDateWithinSixDays(date)) {
        return date.toLocaleString('en-US', { weekday: 'long' });
    }

    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
}


export default function WorkoutDate({ date }: WorkoutDateProps) {
    // today: today
    // within 6 days: day name only
    // everything after: full date

    return (
        <>{formatDate(date)}</>
    );
}