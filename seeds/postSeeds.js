// Import the Post model from the specified path
const { Post } = require("../models");

// Define an array of post data, each object representing a post with a title, content, and user ID
const postData = [
  {
    title: "The Future of Artificial Intelligence: Trends and Predictions",
    content:
      "The future of artificial intelligence (AI) holds immense promise and potential. This post delves into the emerging trends and predictions in AI technology, from advanced machine learning algorithms to autonomous systems revolutionizing industries.",
    user_id: 1,
  },
  {
    title: "Web Development Best Practices",
    content:
      "Dive into web development and discover essential best practices for clean, maintainable, and efficient code. This exploration guides you through key principles, from code structuring and version control to responsive design and optimizing performance. Covering a spectrum of best practices for beginners and seasoned developers alike, learn to leverage modern development tools, adopt coding standards, and implement testing strategies. Enhance code quality, streamline collaboration, and elevate your web development skills.",
    user_id: 3,
  },
  {
    title: "Getting Started with React.js",
    content:
      "Embark on your React.js journey, exploring the JavaScript library revolutionizing user interface development. This beginner-friendly guide covers React.js fundamentals and guides you in building your first React application. Understand core concepts like components, props, and state, delving into the virtual DOM, JSX syntax, and component lifecycle. Whether you're a novice or experienced developer, this guide equips you with the knowledge to kickstart your React.js journey, creating powerful, modular, and efficient web applications.",
    user_id: 1,
  },
  {
    title: "The Rise of Quantum Computing: What You Need to Know",
    content:
      "Quantum computing represents a paradigm shift in computing power, offering unparalleled speed and processing capabilities. Explore the fundamentals of quantum computing and its potential applications across various fields.",
    user_id: 2,
  },
  {
    title: "The Future of Work: Remote Collaboration Tools and Trends",
    content:
    "The future of work is remote, collaborative, and powered by innovative tools and technologies. This post explores the rise of remote collaboration tools, virtual workspaces, and digital communication platforms reshaping the modern workplace.",
    user_id: 4,
  },
];

// Define a function called seedPosts, which uses the bulkCreate method of the Post model to insert multiple posts into the database
const seedPosts = () => Post.bulkCreate(postData);

// Export the seedPosts function to be used in the database seed script: 'seed.js'
module.exports = seedPosts;