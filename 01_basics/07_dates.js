// Creating Dates
const now = new Date(); // Current date and time
const specificDate = new Date('2025-01-06'); // Specific date
const detailedDate = new Date(2025, 0, 6, 10, 30, 15); // Year, Month (0-indexed), Day, Hour, Minute, Second

console.log('Now:', now); // Now: Current date and time (e.g., "2025-01-06T14:15:30.000Z")
console.log('Specific Date:', specificDate); // Specific Date: Mon Jan 06 2025
console.log('Detailed Date:', detailedDate); // Detailed Date: Mon Jan 06 2025 10:30:15

// Getting Date Components
console.log('Year:', now.getFullYear()); // Year: 2025
console.log('Month (0-indexed):', now.getMonth()); // Month (0-indexed): 0
console.log('Day of Month:', now.getDate()); // Day of Month: 6
console.log('Day of Week (0=Sun):', now.getDay()); // Day of Week (0=Sun): 1
console.log('Hours:', now.getHours()); // Hours: 14 (depends on your current time)
console.log('Minutes:', now.getMinutes()); // Minutes: 15 (depends on your current time)
console.log('Seconds:', now.getSeconds()); // Seconds: 30 (depends on your current time)

// Setting Date Components
now.setFullYear(2030);
now.setMonth(11); // December
now.setDate(25);
now.setHours(15, 30); // 3:30 PM
console.log('Updated Date:', now); // Updated Date: Tue Dec 25 2030 15:30:00

// Formatting Dates
console.log('Date String:', now.toDateString()); // Date String: Tue Dec 25 2030
console.log('Time String:', now.toTimeString()); // Time String: 15:30:00 GMT+0000 (your timezone)
console.log('Locale Date:', now.toLocaleDateString()); // Locale Date: 12/25/2030 (format varies by locale)
console.log('ISO String:', now.toISOString()); // ISO String: 2030-12-25T15:30:00.000Z

// Calculations with Dates
const startDate = new Date('2025-01-01');
const endDate = new Date('2025-01-10');
const diffTime = endDate - startDate; // Difference in milliseconds
const diffDays = diffTime / (1000 * 60 * 60 * 24); // Convert to days
console.log('Difference in Days:', diffDays); // Difference in Days: 9

// Current Timestamp
console.log('Current Timestamp:', Date.now()); // Current Timestamp: Milliseconds since Jan 1, 1970 (e.g., 1736526400000)