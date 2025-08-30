export type photoArrayTypes = {
    id:number,
    name:string,
    author:string,
    image:string,
    city:string,
    location:string,
 }
export const photosArray:photoArrayTypes[] = [
  {
    id: 1,
    name: "Sunset Boulevard",
    author: "Arjun Mehta",
    image: "/1.png",
    city: "Mumbai",
    location: "Marine Drive, Mumbai"
  },
  {
    id: 2,
    name: "Mountain Peaks",
    author: "Priya Sharma",
    image: "/2.png",
    city: "Manali",
    location: "Rohtang Pass, Himachal Pradesh"
  },
  {
    id: 3,
    name: "Historic Fort",
    author: "Rahul Verma",
    image: "/3.png",
    city: "Jaipur",
    location: "Amber Fort, Rajasthan"
  },
  {
    id: 4,
    name: "City Lights",
    author: "Neha Kapoor",
    image: "/4.png",
    city: "Delhi",
    location: "Connaught Place, Delhi"
  },
  {
    id: 5,
    name: "Backwaters",
    author: "Amit Nair",
    image: "/5.png",
    city: "Alleppey",
    location: "Kerala Backwaters, Kerala"
  },
];
