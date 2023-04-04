import type { Tuple } from "@mantine/core"

const dark: Tuple<string, 10> = [
  "#FAFAFA",
  "#F5F5F5",
  "#EEEEEE",
  "#E0E0E0",
  "#BDBDBD",
  "#9E9E9E",
  "#757575",
  "#616161",
  "#424242",
  "#212121",
]

const red: Tuple<string, 10> = [
  "#FFDFD6",
  "#FFCFC2",
  "#FFBFAD",
  "#FFAF99",
  "#FF9F85",
  "#FF8F70",
  "#FF7F5C",
  "#FF5F33",
  "#FF4F1F",
  "#FB3700",
]

const green: Tuple<string, 10> = [
  "#E3EFE9",
  "#BBD7C7",
  "#93BFA5",
  "#71A585",
  "#5D9370",
  "#4F815F",
  "#487555",
  "#406649",
  "#38563E",
  "#293B2A",
]

const lime: Tuple<string, 10> = [
  "#F8FBE5",
  "#EEF3BE",
  "#E3ED93",
  "#D7E566",
  "#CDDF41",
  "#C5DA0A",
  "#B9C800",
  "#A8B200",
  "#989B00",
  "#7E7500",
]

const yellow: Tuple<string, 10> = [
  "#FFEEC2",
  "#FFE8AD",
  "#FFE299",
  "#FFDC85",
  "#FFD15C",
  "#FFCB47",
  "#FFC533",
  "#FFBF1F",
  "#FFBA0A",
  "#F3AD00",
]

const orange: Tuple<string, 10> = [
  "#FFF7E0",
  "#FFEAB1",
  "#FFDC7E",
  "#FFD04A",
  "#FFC41F",
  "#FFBA00",
  "#FFAC00",
  "#FF9900",
  "#FF8700",
  "#FF6600",
]

const brown: Tuple<string, 10> = [
  "#F4F1EF",
  "#E4DBD6",
  "#D2C3BB",
  "#C0A99D",
  "#B09384",
  "#A07E6B",
  "#937363",
  "#816557",
  "#72584E",
  "#614A42",
]

const olive: Tuple<string, 10> = [
  "#F4F6EC",
  "#E3E7D0",
  "#D1D7B3",
  "#BFC898",
  "#B2BD83",
  "#A6B271",
  "#97A368",
  "#838F5D",
  "#717B55",
  "#535947",
]

export const primary = {
  dark,
  red,
  green,
  lime,
  olive,
  yellow,
  orange,
  brown,
}

export type PrimaryColors = keyof typeof primary
