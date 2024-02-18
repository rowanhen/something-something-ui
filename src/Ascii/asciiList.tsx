import { Boat } from "./asciiComponents/Boat";
import { BorderCat } from "./asciiComponents/BorderCat";
import { Car } from "./asciiComponents/Car";
import { CatFace } from "./asciiComponents/CatFace";
import { Cloud } from "./asciiComponents/Cloud";
import { FatCat } from "./asciiComponents/FatCat";
import { Penguin } from "./asciiComponents/Penguin";

export const asciiList = {
  boat: <Boat />,
  car: <Car />,
  cloud: <Cloud />,
  "fat-cat": <FatCat />,
  "border-cat": <BorderCat />,
  "cat-face": <CatFace />,
  penguin: <Penguin />,
};

export type Asciis = keyof typeof asciiList;
