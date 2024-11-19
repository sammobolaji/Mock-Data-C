//Mock Dataset
const cars = [
    {
      id: 101,
      name: "Toyota Corolla",
      category: "Sedans",
      price: 8000000,
      description: "Reliable and fuel-efficient sedan with advanced safety features.",
      imageUrl: "path/to/toyota.jpeg",
      rating: 4.7,
      stock: 10,
      brand: "Toyota"
    },
    {
      id: 102,
      name: "Tesla Model 3",
      category: "Electric",
      price: 20000000,
      description: "Electric car with autopilot features and exceptional range.",
      imageUrl: "path/to/telsa.jpeg",
      rating: 4.9,
      stock: 5,
      brand: "Tesla"
    },
    {
      id: 103,
      name: "Ford Mustang",
      category: "Sports Cars",
      price: 5500000,
      description: "Iconic American muscle car with powerful performance.",
      imageUrl: "path/to/ford.jpg",
      rating: 4.8,
      stock: 3,
      brand: "Ford"
    },
    {
      id: 104,
      name: "Honda Civic",
      category: "Sedans",
      price: 9000000,
      description: "A stylish and reliable compact sedan with modern features.",
      imageUrl: "path/to/honda.jpg",
      rating: 4.6,
      stock: 12,
      brand: "Honda"
    },
    {
      id: 105,
      name: "BMW X5",
      category: "SUVs",
      price: 8500000,
      description: "Luxury SUV with a spacious interior and advanced technology.",
      imageUrl: "path/to/bmw.jpg",
      rating: 4.8,
      stock: 6,
      brand: "BMW"
    },
    {
      id: 106,
      name: "Audi Q7",
      category: "SUVs",
      price: 7500000,
      description: "Premium SUV with quattro all-wheel drive and a sleek design.",
      imageUrl: "path/to/audi.jpg",
      rating: 4.7,
      stock: 8,
      brand: "Audi"
    },
    {
      id: 107,
      name: "Mercedes-Benz C-Class",
      category: "Luxury Cars",
      price: 12000000,
      description: "Elegant luxury sedan with state-of-the-art features.",
      imageUrl: "path/to/mercedes.jpg",
      rating: 4.9,
      stock: 4,
      brand: "Mercedes-Benz"
    },
    {
      id: 108,
      name: "Chevrolet Silverado",
      category: "Trucks",
      price: 7000000,
      description: "Durable and powerful truck for tough jobs and everyday driving.",
      imageUrl: "path/to/chevrolet.jpg",
      rating: 4.6,
      stock: 7,
      brand: "Chevrolet"
    },
    {
      id: 109,
      name: "Jeep Wrangler",
      category: "SUVs",
      price: 6500000,
      description: "Rugged off-road SUV with a removable roof and iconic design.",
      imageUrl: "path/to/jeep.jpg",
      rating: 4.8,
      stock: 5,
      brand: "Jeep"
    },
    {
      id: 110,
      name: "Hyundai Kona Electric",
      category: "Electric",
      price: 16000000,
      description: "Compact electric SUV with impressive range and features.",
      imageUrl: "path/to/hyundai.jpg",
      rating: 4.7,
      stock: 8,
      brand: "Hyundai"
    },
    {
      id: 111,
      name: "Volvo XC90",
      category: "Luxury SUVs",
      price: 18000000,
      description: "Sophisticated luxury SUV with top-tier safety features.",
      imageUrl: "path/to/volvo.jpg",
      rating: 4.9,
      stock: 5,
      brand: "Volvo"
    },
    {
      id: 112,
      name: "Mazda MX-5 Miata",
      category: "Sports Cars",
      price: 3000000,
      description: "Lightweight roadster with exceptional handling.",
      imageUrl: "path/to/mazda.jpeg",
      rating: 4.7,
      stock: 10,
      brand: "Mazda"
    },
    {
      id: 113,
      name: "Lamborghini Huracan",
      category: "Supercars",
      price: 200000000,
      description: "Exotic supercar with jaw-dropping performance and design.",
      imageUrl: "path/to/lamborghini.jpeg",
      rating: 5.0,
      stock: 2,
      brand: "Lamborghini"
    },
    {
      id: 114,
      name: "Porsche Taycan",
      category: "Electric",
      price: 15000000,
      description: "High-performance electric sports sedan with cutting-edge design.",
      imageUrl: "path/to/porsche.jpeg",
      rating: 4.9,
      stock: 3,
      brand: "Porsche"
    },
    {
      id: 115,
      name: "Toyota Land Cruiser",
      category: "SUVs",
      price: 9500000,
      description: "Rugged SUV designed for both luxury and off-road adventures.",
      imageUrl: "path/to/toyLandC.jpeg",
      rating: 4.8,
      stock: 6,
      brand: "Toyota"
    },
    {
      id: 116,
      name: "Nissan Leaf",
      category: "Electric",
      price: 2200000,
      description: "Affordable electric car with excellent mileage.",
      imageUrl: "path/to/nissanL.jpg",
      rating: 4.6,
      stock: 15,
      brand: "Nissan"
    },
    {
      id: 117,
      name: "Range Rover Evoque",
      category: "Luxury SUVs",
      price: 12000000,
      description: "Compact luxury SUV with off-road capability.",
      imageUrl: "path/to/rangeR.jpeg",
      rating: 4.8,
      stock: 5,
      brand: "Land Rover"
    },
    {
      id: 118,
      name: "Volkswagen Golf",
      category: "Hatchbacks",
      price: 5500000,
      description: "Practical and fun-to-drive compact hatchback.",
      imageUrl: "path/to/volkswagen.jpeg",
      rating: 4.7,
      stock: 10,
      brand: "Volkswagen"
    },
    {
      id: 119,
      name: "Kia Seltos",
      category: "SUVs",
      price: 8000000,
      description: "Stylish SUV with modern features and great value.",
      imageUrl: "path/to/kiaS.jpeg",
      rating: 4.8,
      stock: 12,
      brand: "Kia"
    },
    {
      id: 120,
      name: "Chevrolet Camaro",
      category: "Sports Cars",
      price: 5000000,
      description: "Bold and aggressive muscle car with a roaring engine.",
      imageUrl: "path/to/chevroletS.jpeg",
      rating: 4.8,
      stock: 4,
      brand: "Chevrolet"
    }
  ];

//   const carDataContainer = document.getElementById("car-data");

//   cars.forEach(car => {
//     const carDiv = document.createElement("div");
//     carDiv.innerHTML = `
//         <p><strong>Brand:</strong> ${car.name}</p>
//         <p><strong>Model:</strong> ${car.category}</p>
//         <p><strong>Year:</strong> ${car.price}</p>
//         <p><strong>Price:</strong> ${car.description}</p>
//         <p><strong>Price:</strong> ${car.imageUrl}</p>
//         <p><strong>Price:</strong> ${car.rating}</p>
//         <p><strong>Price:</strong> ${car.stock}</p>
//         <p><strong>Price:</strong> ${car.brand}</p>

//         <hr>
//     `;
//     carDataContainer.appendChild(carDiv);
// });