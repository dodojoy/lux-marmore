import headerlogomobile from "./../assets/headerlogomobile.svg";
import headerlogodesktop from "./../assets/headerlogodesktop.svg";
import useWindowDimensions from "../hooks/useWindowDimension";

export default function Hero(): JSX.Element {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024 ? true : false;

  return (
    <div style={{ marginTop: "4.8%" }}>
      <img
        className="h-full w-full"
        w-full
        h-full
        src={isMobile ? headerlogomobile : headerlogodesktop}
        alt="bancada de cozinha com a logo da lux marmore centralizada"
      />
    </div>
  );
}
