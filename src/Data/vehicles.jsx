// src/data/vehicles.js
import carImage1 from "../assets/image/car_image1.png";
import carImage2 from "../assets/image/car_image2.png";
import carImage3 from "../assets/image/car_image3.png";
import carImage4 from "../assets/image/car_image4.png";

export const vehicles = [
  {
    id: "bmw-x5",
    name: "BMW X5",
    type: "SUV - 2006",
    year: 2006,
    price: "$300/day",
    img: carImage1,
    location: "New York",
    seats: "4 Seats",
    fuel: "Hybrid",
    transmission: "Semi-Automatic",
    features: ["Leather Seats", "Panoramic Sunroof", "360 Camera"],
    description: "BMW X5 is a luxury SUV introduced in 1999...",
  },
  {
    id: "toyota-corolla",
    name: "Toyota Corolla",
    type: "Sedan - 2021",
    year: 2021,
    price: "$130/day",
    img: carImage2,
    location: "Los Angeles",
    seats: "4 Seats",
    fuel: "Diesel",
    transmission: "Automatic",
    features: ["Wireless Charging", "Leather Seats"],
    description: "Toyota Corolla is a compact car known for reliability...",
  },
  {
    id: "bmw-m4",
    name: "BMW M4 Competition",
    type: "SUV",
    year: 2022,
    price: "$299",
    img: carImage3,
    location: "Los Angeles",
    seats: "5 Seats",
    fuel: "Gasoline",
    transmission: "Automatic",
    features: ["Leather Seats", "Panoramic Sunroof", "Wireless Charging", "360 Camera"],
    description: "The BMW M4 Competition is a high-performance sports car...",
  },
];
