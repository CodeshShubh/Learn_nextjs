import Image from "next/image";
import { photosArray } from "../_photos/photo";

export default function PhotoDetails({ params }: { params: { photoId: string } }) {
  const photoId = params.photoId;
  const photoDetails = photosArray.find((itm) => String(itm.id) === photoId);

  if (!photoDetails) {
    return <div>Photo not found</div>;
  }

  return (
    <div>
      <h2>{photoDetails.name}</h2>
      <Image 
        src={photoDetails.image} 
        alt={photoDetails.name} 
        width={400} 
        height={300} 
      />
      <p>Author: {photoDetails.author}</p>
      <p>City: {photoDetails.city}</p>
      <p>Location: {photoDetails.location}</p>
    </div>
  );
}
