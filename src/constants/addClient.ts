export const dates = Array.from({ length: 11 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index);

  return {
    value: date.toISOString(),
    label: date.toLocaleDateString("en-GB"),
  };
});

export const times = [
  {
    value: "09:00",
    label: "9:00 AM",
  },
  {
    value: "10:00",
    label: "10:00 AM",
  },
  {
    value: "11:00",
    label: "11:00 AM",
  },
  {
    value: "12:00",
    label: "12:00 PM",
  },
  {
    value: "13:00",
    label: "1:00 PM",
  },
  {
    value: "14:00",
    label: "2:00 PM",
  },
  {
    value: "15:00",
    label: "3:00 PM",
  },
];

export const countries = [
  {
    value: "belgium",
    label: "بلجيكا",
  },
  {
    value: "slovenia",
    label: "سلوفينيا",
  },
  {
    value: "austria",
    label: "النمسا",
  },
  {
    value: "italy",
    label: "إيطاليا",
  },
];
