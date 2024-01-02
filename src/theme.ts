import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
    },
    textStyles: {
        p: {
            textTransform: 'capitalize',
        },
        span: {
            textTransform: 'capitalize',
        }
    },
});

export default theme;
