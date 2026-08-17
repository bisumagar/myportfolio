// Run with: npm run seed
import 'dotenv/config.js';
import mongoose from 'mongoose';
import Project from './models/Project.js';

const sampleProjects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with secure JWT-based authentication, product catalog, cart, and checkout flow. Built RESTful APIs for user management, order processing, and role-based access (customer vs admin), backed by MongoDB for product and order data.',

    tags: ['React', 'Tailwind CSS', 'Node', 'MongoDB', 'JWT auth'],
    liveUrl: 'https://project-ii-yyqg.onrender.com',
    codeUrl: 'https://github.com/bisumagar/Project-II',
    order: 1,
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A real-time messaging app supporting instant one-on-one and group conversations, built with Socket.io for live message delivery and typing indicators. Includes JWT-authenticated user sessions and MongoDB-backed message history so conversations persist across sessions.',

    tags: ['Express', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://imessage-0xwv.onrender.com',
    codeUrl: 'https://github.com/bisumagar/Imessage',
    order: 2,
  },
  {
    title: 'Church Management System',
    description: 'A management system for churches to organize members, track attendance, and manage events and donations from one dashboard. Includes role-based access for admins vs. staff, member profiles with contact/family info, and reporting on attendance and giving trends over time.',

    tags: ['React', 'Stripe API', 'mongoose'],
    liveUrl: '',
    codeUrl: 'https://github.com/bisumagar/churchWebsite',
    order: 3,
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Project.deleteMany();
    await Project.insertMany(sampleProjects);
    console.log('Sample projects seeded');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
