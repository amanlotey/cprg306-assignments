import Image from "next/image";

export default function Dog(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>Breed: {props.breed}</p>
      <p>Age: {props.age}</p>
      {props.image ? (
        <Image
          src={props.image}
          alt={props.name}
          width={300} // Set the desired width
          height={300} // Set the desired height
          style={{ borderRadius: "10px" }} // Optional styling
        />
      ) : (
        <p>No image available</p> // Placeholder message
      )}
    </>
  );
}
