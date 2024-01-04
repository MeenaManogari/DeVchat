const DUMMY_MESSAGES = [
  {
    _id: 1,
    content: "hello",
    sameAuthor: false,
    author: { username: "Mano" },
    date: "28/12/2023",
    day: false,
  },
  {
    _id: 2,
    content: "how r u?",
    sameAuthor: true,
    author: { username: "Mano" },
    date: "28/12/2023",
    day: true,
  },
  {
    _id: 3,
    content: "How is the day?",
    sameAuthor: true,
    author: { username: "Mano" },
    date: "28/12/2023",
    day: true,
  },
  {
    _id: 4,
    content: "Glad to chat with you",
    sameAuthor: true,
    author: { username: "Mano" },
    date: "28/12/2023",
    day: false,
  },
  {
    _id: 5,
    content: "bye",
    sameAuthor: "false",
    author: { username: "Rebi" },
    date: "28/12/2023",
    day: false,
  },
];

export default DUMMY_MESSAGES;
