function ImageShow({ image }) {
  return (
    <div>
      <ImageShow
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageShow;
