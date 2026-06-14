import { Colors } from './Colors';
import { DarkTheme, Theme } from "expo-router/react-navigation";

export const MyDarkTheme: Theme = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        background: Colors.background,
        card: Colors.background,
        primary: Colors.primary,
        text: Colors.text,
        border: '#262626',
        notification: Colors.primary,
    },
};
