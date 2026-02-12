interface WorkoutDateProps {
    date: Date,
}

function isToday(date: Date): boolean {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

function isYesterday(date: Date): boolean {
    const yesterday = new Date();

    // Subtract one day from the current date to get yesterday's date.
    // JavaScript's Date object automatically handles month and year changes.
    yesterday.setDate(yesterday.getDate() - 1);

    // Compare the date portions (year, month, day) by converting both 
    // dates to a human-readable date string, which ignores the time.
    return date.toDateString() === yesterday.toDateString();
}

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

    if (isYesterday(date)) {
        return "Yesterday";
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
    // yesterday: yesterday
    // within 6 days: day name only
    // everything after: full date

    return (
        <>{formatDate(date)}</>
    );
}