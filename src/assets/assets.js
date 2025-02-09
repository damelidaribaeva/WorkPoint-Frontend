import coworking_img from "./coworking_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./coworking_img.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import Private_office from "./Private_office.png";
import Shared_desk from "./Shared_desk.png";
import Meeting_room from "./Meeting_room.png";
import For_women from "./For_women.png";
import Open_lounge from "./Open_lounge.png";
import Podcast_studio from "./Podcast_studio.png";

import cowork1 from "./coworks/cowork1.png";
import cowork2 from "./coworks/cowork2.png";
import cowork3 from "./coworks/cowork3.png";
import cowork4 from "./coworks/cowork4.png";
import cowork5 from "./coworks/cowork5.png";
import cowork6 from "./coworks/cowork6.png";
import cowork7 from "./coworks/cowork7.png";
import cowork8 from "./coworks/cowork8.png";
import cowork9 from "./coworks/cowork9.png";
import cowork10 from "./coworks/cowork10.png";
import cowork11 from "./coworks/cowork11.png";
import cowork12 from "./coworks/cowork12.png";
import cowork13 from "./coworks/cowork13.png";
import cowork14 from "./coworks/cowork14.png";
import cowork15 from "./coworks/cowork15.png";

export const assets = {
  coworking_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "Private Office",
    image: Private_office,
  },
  {
    speciality: "Shared Desk",
    image: Shared_desk,
  },
  {
    speciality: "Meeting Room",
    image: Meeting_room,
  },
  {
    speciality: "For Women",
    image: For_women,
  },
  {
    speciality: "Open Lounge",
    image: Open_lounge,
  },
  {
    speciality: "Podcast/Recording Studio",
    image: Podcast_studio,
  },
];

export const coworkingSpaces = [
  {
    _id: "cowork1",
    name: "WeWork Downtown",
    image: cowork1,
    speciality: "Private Office",
    capacity: "1-4 People",
    experience: "Established in 2018",
    about:
      "A modern private office in the heart of the city, equipped with high-speed Wi-Fi, ergonomic chairs, and 24/7 access.",
    fees: 150, // Price per day
    address: {
      line1: "17th Street, Downtown",
      line2: "New York, USA",
    },
  },
  {
    _id: "cowork2",
    name: "Cozy Shared Space",
    image: cowork2,
    speciality: "Shared Desk",
    capacity: "10-20 People",
    experience: "Established in 2020",
    about:
      "A vibrant shared workspace designed for collaboration. Enjoy a relaxed atmosphere with complimentary coffee and meeting rooms.",
    fees: 20,
    address: {
      line1: "Greenwood Avenue",
      line2: "Los Angeles, USA",
    },
  },
  {
    _id: "cowork3",
    name: "The Executive Suite",
    image: cowork3,
    speciality: "Private Office",
    capacity: "1-6 People",
    experience: "Established in 2015",
    about:
      "A premium private office featuring executive desks, high-security access, and a professional business lounge.",
    fees: 200,
    address: {
      line1: "Elite Business Tower",
      line2: "Chicago, USA",
    },
  },
  {
    _id: "cowork4",
    name: "Startup Hub",
    image: cowork4,
    speciality: "Hot Desk",
    capacity: "Flexible",
    experience: "Established in 2019",
    about:
      "Perfect for freelancers and startups, this space offers flexible seating, networking events, and brainstorming areas.",
    fees: 15,
    address: {
      line1: "Tech Park Street",
      line2: "San Francisco, USA",
    },
  },
  {
    _id: "cowork5",
    name: "Creative Loft",
    image: cowork5,
    speciality: "Event Space",
    capacity: "Up to 50 People",
    experience: "Established in 2017",
    about:
      "An open and creative coworking space with a large event hall, ideal for workshops, networking, and team-building activities.",
    fees: 500,
    address: {
      line1: "Art District Avenue",
      line2: "Berlin, Germany",
    },
  },
  {
    _id: "cowork6",
    name: "Freelancer's Den",
    image: cowork6,
    speciality: "Dedicated Desk",
    capacity: "1 Person",
    experience: "Established in 2021",
    about:
      "A dedicated desk with all amenities included, allowing you to work in a distraction-free environment.",
    fees: 100,
    address: {
      line1: "Main Street, Business Center",
      line2: "London, UK",
    },
  },
  {
    _id: "cowork7",
    name: "Collaboration Hub",
    image: cowork7,
    speciality: "Meeting Room",
    capacity: "Up to 10 People",
    experience: "Established in 2016",
    about:
      "Book a fully-equipped meeting room with high-definition video conferencing, whiteboards, and comfortable seating.",
    fees: 80,
    address: {
      line1: "Conference Avenue",
      line2: "Toronto, Canada",
    },
  },
  {
    _id: "cowork8",
    name: "Remote Work Haven",
    image: cowork8,
    speciality: "Virtual Office",
    capacity: "N/A",
    experience: "Established in 2022",
    about:
      "Get a professional business address, mail handling services, and occasional meeting room access.",
    fees: 50,
    address: {
      line1: "Virtual Street",
      line2: "Sydney, Australia",
    },
  },
  {
    _id: "cowork9",
    name: "Luxury Business Lounge",
    image: cowork9,
    speciality: "Private Office",
    capacity: "1-5 People",
    experience: "Established in 2014",
    about:
      "A high-end business lounge with private cabins, premium coffee, and concierge service.",
    fees: 250,
    address: {
      line1: "Skyline Tower",
      line2: "Dubai, UAE",
    },
  },
  {
    _id: "cowork10",
    name: "Nomad Hub",
    image: cowork10,
    speciality: "Hot Desk",
    capacity: "Unlimited",
    experience: "Established in 2023",
    about:
      "A travel-friendly coworking hub with flexible memberships, ideal for digital nomads.",
    fees: 10,
    address: {
      line1: "Remote Work Street",
      line2: "Bali, Indonesia",
    },
  },
  {
    _id: "cowork11",
    name: "Hacker House",
    image: cowork11,
    speciality: "Shared Desk",
    capacity: "Up to 30 People",
    experience: "Established in 2019",
    about:
      "A tech-focused coworking space with 24/7 access, coding bootcamps, and startup networking events.",
    fees: 50,
    address: {
      line1: "Innovation District",
      line2: "San Jose, USA",
    },
  },
  {
    _id: "cowork12",
    name: "CoWorking for Creatives",
    image: cowork12,
    speciality: "Open Lounge",
    capacity: "20-40 People",
    experience: "Established in 2021",
    about:
      "Designed for designers, artists, and writers, this space offers an inspiring and collaborative atmosphere.",
    fees: 70,
    address: {
      line1: "Creative Street",
      line2: "Amsterdam, Netherlands",
    },
  },
  {
    _id: "cowork13",
    name: "Green Space Coworking",
    image: cowork13,
    speciality: "Eco-Friendly Workspace",
    capacity: "Up to 50 People",
    experience: "Established in 2018",
    about:
      "An eco-conscious coworking space featuring sustainable furniture, natural lighting, and a green rooftop garden.",
    fees: 90,
    address: {
      line1: "Sustainability Avenue",
      line2: "Vancouver, Canada",
    },
  },
  {
    _id: "cowork14",
    name: "Quiet Focus Room",
    image: cowork14,
    speciality: "Focus Room",
    capacity: "1-2 People",
    experience: "Established in 2022",
    about:
      "Designed for deep work and maximum productivity, with soundproof walls and minimal distractions.",
    fees: 60,
    address: {
      line1: "Productivity Hub",
      line2: "Singapore",
    },
  },
  {
    _id: "cowork15",
    name: "Women-Led Coworking",
    image: cowork15,
    speciality: "Community Space",
    capacity: "Up to 30 People",
    experience: "Established in 2020",
    about:
      "A women-led coworking space focused on networking, mentorship, and business growth.",
    fees: 40,
    address: {
      line1: "Empowerment Center",
      line2: "Paris, France",
    },
  },
];
