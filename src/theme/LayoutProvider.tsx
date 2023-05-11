import { DefaultMantineColor, Global, MantineProvider, Tuple } from "@mantine/core"
import type { ReactNode } from "react"
import NunitoSansExtraLight from "../assets/fonts/NunitoSans-ExtraLight.ttf"
import NunitoSanRegular from '../assets/fonts/NunitoSans-Regular.ttf'
import RobotoCondensedBold from "../assets/fonts/RobotoCondensed-Bold.ttf"
import Roboto from "../assets/fonts/Roboto-Regular.ttf"
import PressStart2PRegular from "../assets/fonts/PressStart2P-Regular.ttf"
import RobotoMono from '../assets/fonts/RobotoMono.ttf'
import type { PrimaryColors } from "./color"


import theme from './defaultTheme'

type ExtendedColors = DefaultMantineColor | PrimaryColors


declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColors, Tuple<string, 10>>
  }
}

function CustomFonts() {
  return (
    <Global 
      styles={[
        {
          '@font-face': {
            fontFamily: 'Nunito Sans',
            src: `url('${NunitoSansExtraLight}')`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Nunito Sans',
            src: `url('${NunitoSanRegular}')`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Roboto Condensed Bold',
            src: `url('${RobotoCondensedBold}')`,
            fontWeight: 700,
            fontStyle: 'bold',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Roboto Mono',
            src: `url('${RobotoMono}')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Roboto',
            src: `url('${Roboto}')`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'PS2P',
            src: `url('${PressStart2PRegular}')`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        // {
        //   '@font-face': {
        //     fontFamily: 'Open Sans Bold',
        //     src: `url('${OpenSansBold}')`,
        //     fontWeight: 900,
        //     fontStyle: 'normal',
        //   },
        // },
      ]}
    />
  )
}

type LayoutProviderProps = {
  children: ReactNode
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <MantineProvider
      theme={theme as any}
      withNormalizeCSS
    >
      <CustomFonts />
      {children}
    </MantineProvider>
  )
}

export default LayoutProvider
