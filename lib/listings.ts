export type Listing = {
  id: string;
  type: "Villa" | "Apartment" | "Commercial";
  title: string;
  location: string;
  price: string;
  beds?: number;
  baths?: number;
  area: string;
  tag: "Featured" | "New" | "Hot";
  image: string;
};

export const listings: Listing[] = [
  {
    id: "p1",
    type: "Villa",
    title: "Skyline Glass Villa",
    location: "Sector 66, Mohali",
    price: "₹ 2.4 Cr",
    beds: 4,
    baths: 4,
    area: "3200 sq ft",
    tag: "Featured",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p2",
    type: "Apartment",
    title: "Lakeview Luxury Apartment",
    location: "Zirakpur",
    price: "₹ 98 Lakh",
    beds: 3,
    baths: 3,
    area: "1850 sq ft",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p3",
    type: "Apartment",
    title: "Modern Green Penthouse",
    location: "Chandigarh",
    price: "₹ 1.75 Cr",
    beds: 3,
    baths: 3,
    area: "2100 sq ft",
    tag: "Hot",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p4",
    type: "Commercial",
    title: "Prime Retail Corner Unit",
    location: "Airport Road",
    price: "₹ 1.1 Cr",
    area: "1100 sq ft",
    tag: "Featured",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p5",
    type: "Villa",
    title: "Garden Luxury Bungalow",
    location: "New Chandigarh",
    price: "₹ 3.2 Cr",
    beds: 5,
    baths: 5,
    area: "4100 sq ft",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p6",
    type: "Commercial",
    title: "Office Suite (Grade-A)",
    location: "IT Park, Chandigarh",
    price: "₹ 1.9 Cr",
    area: "2400 sq ft",
    tag: "Hot",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
];
