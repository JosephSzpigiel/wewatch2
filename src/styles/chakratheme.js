//theme.ts
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('black','black')(props),
        color: "white"
      }
    })
  },
})