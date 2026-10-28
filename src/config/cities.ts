import type { City } from "@/lib/types";

export const cities: City[] = [
  { name: "Mumbai", state: "Maharashtra", region: "West", lat: 19.076, lng: 72.8777 },
  { name: "Pune", state: "Maharashtra", region: "West", lat: 18.5204, lng: 73.8567 },
  { name: "Ahmedabad", state: "Gujarat", region: "West", lat: 23.0225, lng: 72.5714 },
  { name: "Surat", state: "Gujarat", region: "West", lat: 21.1702, lng: 72.8311 },
  { name: "Nagpur", state: "Maharashtra", region: "West", lat: 21.1458, lng: 79.0882 },
  { name: "Panaji", state: "Goa", region: "West", lat: 15.4909, lng: 73.8278 },
  { name: "Delhi NCR", state: "Delhi", region: "North", lat: 28.6139, lng: 77.209 },
  { name: "Jaipur", state: "Rajasthan", region: "North", lat: 26.9124, lng: 75.7873 },
  { name: "Lucknow", state: "Uttar Pradesh", region: "North", lat: 26.8467, lng: 80.9462 },
  { name: "Chandigarh", state: "Punjab & Haryana", region: "North", lat: 30.7333, lng: 76.7794 },
  { name: "Dehradun", state: "Uttarakhand", region: "North", lat: 30.3165, lng: 78.0322 },
  { name: "Bengaluru", state: "Karnataka", region: "South", lat: 12.9716, lng: 77.5946 },
  { name: "Hyderabad", state: "Telangana", region: "South", lat: 17.385, lng: 78.4867 },
  { name: "Chennai", state: "Tamil Nadu", region: "South", lat: 13.0827, lng: 80.2707 },
  { name: "Kochi", state: "Kerala", region: "South", lat: 9.9312, lng: 76.2673 },
  { name: "Coimbatore", state: "Tamil Nadu", region: "South", lat: 11.0168, lng: 76.9558 },
  { name: "Visakhapatnam", state: "Andhra Pradesh", region: "South", lat: 17.6868, lng: 83.2185 },
  { name: "Kolkata", state: "West Bengal", region: "East", lat: 22.5726, lng: 88.3639 },
  { name: "Patna", state: "Bihar", region: "East", lat: 25.5941, lng: 85.1376 },
  { name: "Guwahati", state: "Assam", region: "East", lat: 26.1445, lng: 91.7362 },
  { name: "Bhubaneswar", state: "Odisha", region: "East", lat: 20.2961, lng: 85.8245 },
  { name: "Indore", state: "Madhya Pradesh", region: "Central", lat: 22.7196, lng: 75.8577 },
  { name: "Bhopal", state: "Madhya Pradesh", region: "Central", lat: 23.2599, lng: 77.4126 },
  { name: "Raipur", state: "Chhattisgarh", region: "Central", lat: 21.2514, lng: 81.6296 },
];

export const cityNames = cities.map((city) => city.name);

export const regions = ["All", "North", "South", "West", "East", "Central"] as const;

export function getCity(name: string): City | undefined {
  return cities.find((city) => city.name === name);
}
