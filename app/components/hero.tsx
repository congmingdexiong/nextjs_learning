import Image, { StaticImageData } from "next/image";

interface IProps {
  imageUrl: StaticImageData;
  altTxt: string;
  content: string;
}

export default function Hero(props: IProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imageUrl}
          alt={props.altTxt}
          fill
          style={{ objectFit: "cover" }}
        ></Image>
        <div className="bg-gradient-to-r absolute inset-0 from-gray-10"></div>
      </div>
      <div className="flex pt-48 justify-center">
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </div>
  );
}
