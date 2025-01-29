import Dog from "./dog";

export default function Page() {
  const dogs = [
    {
      name: "Bella",
      breed: "Corgi",
      age: 3,
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    },
    {
      name: "Max",
      breed: "Labrador",
      age: 5,
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    },
    {
      name: "Luna",
      breed: "German Shepherd",
      age: 4,
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    },
    {
      name: "Charlie",
      breed: "Poodle",
      age: 2,
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    },
  ];

  return (
    <main>
      <h1>Meet the dogs</h1>
      {dogs.map((dog, index) => (
        <Dog key={index} dog={dog} />
      ))}
    </main>
  );
}
