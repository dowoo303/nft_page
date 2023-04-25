import { RiAncientGateFill } from "react-icons/ri";
import { CONTRACT_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 1000) + 1; // 1~1000 사이 랜덤 숫자 발생
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-red-400 pt-10 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="relative">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={imgSrc}
            alt="NFT"
          />
          <div className="w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Joseon Dynasty
          <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-4 text-gray-950">
            <RiAncientGateFill size={24} />
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-300">
          by
          <div className="text-main ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-gray-300">
          The Great Joseon Dynasty, or Joseon Dynasty, is a dynasty that ruled
          the Korean Peninsula for 518 years with Confucianism as its governing
          ideology. Joseon was founded on July 17, 1392, by King Taejo Lee
          Seong-gye, a military official of Goryeo, and was succeeded by the
          Korean Empire, which was founded by King Gojong in October 1897.
        </div>
      </div>
    </div>
  );
};

export default Intro;
