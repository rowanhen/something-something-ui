export const colors = {
  white_smoke: {
    DEFAULT: "#f5f5f5",
    100: "#313131",
    200: "#626262",
    300: "#939393",
    400: "#c4c4c4",
    500: "#f5f5f5",
    600: "#f7f7f7",
    700: "#f9f9f9",
    800: "#fbfbfb",
    900: "#fdfdfd",
  },
  night: {
    DEFAULT: "#141414",
    100: "#040404",
    200: "#080808",
    300: "#0c0c0c",
    400: "#101010",
    500: "#141414",
    600: "#434343",
    700: "#727272",
    800: "#a1a1a1",
    900: "#d0d0d0",
  },
  red_pantone: {
    DEFAULT: "#f50031",
    100: "#31000a",
    200: "#620014",
    300: "#93001d",
    400: "#c40027",
    500: "#f50031",
    600: "#ff2b55",
    700: "#ff6080",
    800: "#ff95aa",
    900: "#ffcad5",
  },
  ut_orange: {
    DEFAULT: "#ff8200",
    100: "#331a00",
    200: "#663500",
    300: "#994f00",
    400: "#cc6900",
    500: "#ff8200",
    600: "#ff9c33",
    700: "#ffb566",
    800: "#ffce99",
    900: "#ffe6cc",
  },
  brandeis_blue: {
    DEFAULT: "#0e71fb",
    100: "#011634",
    200: "#022c68",
    300: "#02439d",
    400: "#0359d1",
    500: "#0e71fb",
    600: "#3e8dfc",
    700: "#6eaafd",
    800: "#9fc6fe",
    900: "#cfe3fe",
  },
  sgbus_green: {
    DEFAULT: "#28e425",
    100: "#072f06",
    200: "#0d5e0c",
    300: "#148e12",
    400: "#1abd17",
    500: "#28e425",
    600: "#53e951",
    700: "#7eef7c",
    800: "#a9f4a8",
    900: "#d4fad3",
  },
  transparent: {
    DEFAULT: "rgba(245, 245, 245, 0.0)",
    100: "rgba(245, 245, 245, 0.0)",
    200: "rgba(245, 245, 245, 0.0)",
    300: "rgba(245, 245, 245, 0.0)",
    400: "rgba(245, 245, 245, 0.0)",
    500: "rgba(245, 245, 245, 0.0)",
    600: "rgba(245, 245, 245, 0.0)",
    700: "rgba(245, 245, 245, 0.0)",
    800: "rgba(245, 245, 245, 0.0)",
    900: "rgba(245, 245, 245, 0.0)",
  },
};

type ColorShade =
  | "DEFAULT"
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;
type ColorName = keyof typeof colors;
export type Colors = keyof typeof colors;
export type ColorType = `${ColorName}.${ColorShade}`;

export const lightTheme = {
  background: colors.white_smoke.DEFAULT,
  invertedBackground: colors.night[600],
  surface: colors.white_smoke[400],
  primary: colors.brandeis_blue.DEFAULT,
  primaryVariant: colors.brandeis_blue.DEFAULT,
  secondaryVariant: colors.brandeis_blue[600],
  onPrimary: colors.night.DEFAULT,
  textPrimary: colors.night.DEFAULT,
  textSecondary: colors.night[600],
  borderPrimary: `1px solid  ${colors.night.DEFAULT}`,
  borderSecondary: `1px solid  ${colors.night[600]}`,
  borderRadius: "2px",
  error: colors.red_pantone.DEFAULT,
  onError: colors.white_smoke.DEFAULT,
  colors,
};

export const darkTheme = {
  background: colors.night[600],
  invertedBackground: colors.white_smoke.DEFAULT,
  surface: colors.night[700],
  primary: colors.brandeis_blue.DEFAULT,
  primaryVariant: colors.ut_orange.DEFAULT,
  secondaryVariant: colors.ut_orange[600],
  onPrimary: colors.white_smoke.DEFAULT,
  textPrimary: colors.white_smoke.DEFAULT,
  textSecondary: colors.white_smoke[600],
  borderPrimary: `1px solid  ${colors.white_smoke[300]}`,
  borderSecondary: `1px solid  ${colors.white_smoke[600]}`,
  borderRadius: "2px",
  error: colors.red_pantone.DEFAULT,
  onError: colors.white_smoke.DEFAULT,
  colors,
};
