const checkEmptyFields = (fields: Record<string, string | number>) => {
  let valid = true;

  for (const field in fields) {
    if (!fields[field]) {
      valid = false;

      return valid;
    }
  }

  return valid;
};

// const clearFields = function <T>(fields: T) {

//   if(fields !== null && typeof fields === "object" && typeof fields !== "function" && !Array.isArray(fields) && Object.keys(fields).length) {
//     for(const field in fields) {
//       if(field in fields) {
//         fields[field] = ""
//       }
//     }

//     return fields
//   }
// }

export const createDateFormatOptions = (
  day?: "numeric" | "2-digit",
  month?: "numeric" | "2-digit" | "long" | "short",
  year?: "numeric" | "2-digit",
  //weekday?: 'long' | 'short' | 'narrow',
  minute?: "numeric" | "2-digit",
  hour?: "numeric" | "2-digit"
): Intl.DateTimeFormatOptions => {
  const format = { year, month, day } as Intl.DateTimeFormatOptions;

  if (hour) format.hour = hour;

  if (minute) format.minute = minute;

  return format;
};

const dateFormatOptions = () => {
  return {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  };
};

export const utils = {
  checkEmptyFields,
  // clearFields,
  createDateFormatOptions,
  dateFormatOptions
};
