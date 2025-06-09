// SlotList.js
import React from 'react';

const SlotList = ({ slots, onSlotSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {slots.map((slot) => (
        <button
          key={slot.id}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => onSlotSelect(slot)}
        >
          {slot.time}
        </button>
      ))}
    </div>
  );
};

export default SlotList;
