import "./Images.css";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import Image from "../Image/Image";

const Images = (props) => {
  const { counter } = props;
  const isEven = counter % 2 == 0;
  console.log(isEven);
  return isEven ? (
    <Image
      linkTo="https://vitejs.dev"
      imageSrc={viteLogo}
      altText="Vite logo"
    />
  ) : (
    <Image
      linkTo="https://react.dev"
      imageSrc={reactLogo}
      altText="React logo"
    />
  );
};

export default Images;
