import { create } from "zustand";
import dayjs from "dayjs";

const useDatePickerStore = create((set, get) => ({
  selectedDates: [],
  generatedDates: [],
  recurrencePattern: "none",
  recurrenceInterval: 1,
  startDate: dayjs().format("YYYY-MM-DD"),
  endDate: null,

  addDate: (date) =>
    set((state) => ({ selectedDates: [...state.selectedDates, date] })),

  
  removeDate: (date) =>
    set((state) => ({
      generatedDates: state.generatedDates.filter((d) => d !== date),
    })),

  setRecurringPattern: (pattern) => set(() => ({ recurrencePattern: pattern })),
  setRecurrenceInterval: (interval) =>
    set(() => ({ recurrenceInterval: parseInt(interval, 10) || 1 })), 
  setStartDate: (startDate) => {
    const formattedDate = dayjs(startDate).format("YYYY-MM-DD");
    set(() => ({ startDate: formattedDate }));
  },
  setEndDate: (endDate) => {
    set(() => ({
      endDate: endDate ? dayjs(endDate).format("YYYY-MM-DD") : null,
    }));
  },
  generateRecurringDates: () => {
    const { startDate, endDate, recurrencePattern, recurrenceInterval } = get();

   
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Recurring Pattern:", recurrencePattern);
    console.log("Recurrence Interval:", recurrenceInterval);

    let dates = [];
    let currentDate = dayjs(startDate);

    if (!currentDate.isValid()) {
      console.error("Invalid start date");
      return;
    }

    while (!endDate || currentDate.isBefore(dayjs(endDate))) {
      dates.push(currentDate.format("YYYY-MM-DD"));

      
      switch (recurrencePattern) {
        case "daily":
          currentDate = currentDate.add(recurrenceInterval, "day");
          break;
        case "weekly":
          currentDate = currentDate.add(recurrenceInterval, "week");
          break;
        case "monthly":
          currentDate = currentDate.add(recurrenceInterval, "month");
          break;
        case "yearly":
          currentDate = currentDate.add(recurrenceInterval, "year");
          break;
        default:
          console.error("Invalid recurrence pattern");
          return;
      }
    }

    
    console.log("Generated Dates:", dates);
    set({ generatedDates: dates });
  },
}));

export default useDatePickerStore;






