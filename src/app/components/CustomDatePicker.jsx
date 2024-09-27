"use client";
import React, { useEffect, useState } from "react";
import useDatePickerStore from "../useDatePickerStore";

const CustomDatePicker = () => {
  const {
    recurrencePattern,
    recurrenceInterval,
    startDate,
    endDate,
    removeDate,
    setRecurringPattern,
    setRecurrenceInterval,
    setStartDate,
    setEndDate,
    generateRecurringDates,
    loading,
    generatedDates,
    setGeneratedDates,
  } = useDatePickerStore();

  const [displayData, setDisplayData] = useState({
    startDate: "",
    endDate: "",
    recurrencePattern: "",
    recurrenceInterval: "",
    generatedDates: [],
  });

  const handleGenerateDates = () => {
    generateRecurringDates();
  };

  const handleRemoveDate = (dateToRemove) => {
    removeDate(dateToRemove); 
  };

  useEffect(() => {
    setDisplayData({
      startDate,
      endDate,
      recurrencePattern,
      recurrenceInterval,
      generatedDates: generatedDates || [],
    });
  }, [
    startDate,
    endDate,
    recurrencePattern,
    recurrenceInterval,
    generatedDates,
  ]);

  return (
    <div className="p-6 mt-[90px] w-[500px] h-auto bg-gradient-to-r from-[#4A154A] to-[#6B5B9A] shadow-2xl rounded-lg max-w-sm mx-auto transition-transform duration-300 ease-in-out transform hover:shadow-xl hover:scale-105 hover:translate-y-[-6px] hover:translate-x-[-6px] animate-fadeIn flex flex-col">
      <h2 className="mb-4 text-2xl font-bold text-[#e7b1e7]">Select Date</h2>

      {/* Start Date Input */}
      <label className="mb-2 text-xl font-bold text-[#e7b1e7]">
        Start Date
      </label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full p-2 mb-4 text-black border-gray-300 rounded-md"
      />

      {/* End Date Input */}
      <label className="mb-2 text-xl font-bold text-[#e7b1e7]">
        End Date (Optional)
      </label>
      <input
        type="date"
        value={endDate || ""}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full p-2 mb-4 text-black border-gray-300 rounded-md"
      />

      {/* Recurring Pattern Selection */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-xl font-bold text-[#e7b1e7]">
          Recurring Pattern:
        </span>
        <select
          value={recurrencePattern}
          onChange={(e) => setRecurringPattern(e.target.value)}
          className="w-1/2 p-2 text-black border-gray-300 rounded-md">
          <option value="none">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Recurrence Interval Input */}
      {recurrencePattern !== "none" && (
        <div className="mt-4">
          <label className="mb-2 text-xl font-bold text-[#e7b1e7]">
            Every X {recurrencePattern}:
          </label>
          <input
            type="number"
            min="1"
            value={recurrenceInterval}
            onChange={(e) => setRecurrenceInterval(e.target.value)}
            className="w-full p-2 mb-4 text-black border-gray-300 rounded-md"
          />
        </div>
      )}

      {/* Button to Generate Recurring Dates */}
      <button
        onClick={handleGenerateDates}
        className="
      mt-4 p-2 
      bg-gradient-to-r from-[#ac57ac] to-[#9f8ed1] 
      text-black text-base font-semibold rounded-md 
      shadow-lg transform transition-all duration-300 ease-in-out
      hover:shadow-2xl hover:scale-105 hover:translate-y-[-4px]
      active:scale-95 active:translate-y-[2px]">
        Generate Recurring Dates
      </button>

      {/* Loading State */}
      {loading && <p className="mt-4 text-white">Loading...</p>}

      {/* Generated Dates Container */}
      <div className="mt-2 h-auto max-h-[100px] overflow-y-auto">
        <h3 className="mb-4 text-2xl font-bold text-[#e7b1e7]">
          Generated Dates
        </h3>
        <ul>
          {displayData.generatedDates.length === 0 ? (
            <li className="text-sm text-black">No dates generated</li>
          ) : (
            displayData.generatedDates.map((date, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between mb-2 text-sm bg-gradient-to-r from-[#4A154A] to-[#6B5B9A] p-2 rounded-md">
                <span>{date}</span>
                <button
                  onClick={() => removeDate(date)}
                  className="text-xl font-bold text-red-500">
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default CustomDatePicker;
