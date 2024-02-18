import Barcode from "./assets/barcode";
import MenuDots from "./assets/menu-dots";
import SettingsSlider from "./assets/settings-sliders";

export const iconList = {
  barcode: Barcode,
  "menu-dots": MenuDots,
  "settings-sliders": SettingsSlider,
};

export type Icons = keyof typeof iconList;
