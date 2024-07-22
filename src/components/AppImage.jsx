import defaultProileImage from "../assets/profile.png";

export function AppImage(props) {
  const { image, fallback, ...attributes } = props;

  let imageSource = `/api/assets/${image}`;
  if (!image) {
    imageSource =
      fallback === "profile"
        ? defaultProileImage
        : "https://place-hold.it/600x300/666/fff/000?text=Article%20Image";
  }
  return <img src={imageSource} {...attributes} />;
}
