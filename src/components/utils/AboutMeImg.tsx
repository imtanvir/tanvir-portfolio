import { Image } from "@nextui-org/image";
const AboutMeImg = () => {
  return (
    <div className="me-photo">
      <Image
        isBlurred
        width={240}
        src="https://res.cloudinary.com/dbqe3efk1/image/upload/v1732310957/profile1_xdm9id.png"
        alt="NextUI Album Cover"
        className="m-5"
      />
    </div>
  );
};

export default AboutMeImg;
