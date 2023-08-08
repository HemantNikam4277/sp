import NextImage from "next/image";

const ImageNext = ({ imageData, style }) => {
  const { url, alternativeText, width, height } = imageData;

  return (
    <NextImage
      style={style}
      layout="responsive"
      width={width || "100%"}
      height={height || "100%"}
      src={url}
      alt={alternativeText || ""}
    />
  );
};

export default ImageNext;
