import { TypographyProps } from "@mui/material";

export interface TypewriterEffectProps extends TypographyProps {
    text: string;
    delay?: number; 
    loop?: boolean;
}