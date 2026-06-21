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
    value: "9:00 AM",
    label: "9:00 AM",
  },
  {
    value: "10:00 AM",
    label: "10:00 AM",
  },
  {
    value: "11:00 AM",
    label: "11:00 AM",
  },
  {
    value: "12:00 PM",
    label: "12:00 PM",
  },
  {
    value: "1:00 PM",
    label: "1:00 PM",
  },
  {
    value: "2:00 PM",
    label: "2:00 PM",
  },
  {
    value: "3:00 PM",
    label: "3:00 PM",
  },
];

export const countries = [
  {
    value: "بلجيكا",
    label: "بلجيكا",
  },
  {
    value: "سلوفينيا",
    label: "سلوفينيا",
  },
  {
    value: "النمسا",
    label: "النمسا",
  },
  {
    value: "إيطاليا",
    label: "إيطاليا",
  },
];
