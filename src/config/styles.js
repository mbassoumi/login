import {StyleSheet} from "react-native";
import colors from "./colors";

const configStyles = StyleSheet.create({
    header: {
        backgroundColor: colors.headerBackground
    },
    container: {
        backgroundColor: colors.containerBackground,
    },
    content: {
        backgroundColor: colors.contentBackground,
    },
    footer: {
       backgroundColor: colors.footerBackground
    },
});

export default configStyles;
