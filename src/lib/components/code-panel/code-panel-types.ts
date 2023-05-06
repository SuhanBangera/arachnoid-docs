import { StackProps } from "@mui/material/Stack/Stack";

export type LANGUAGE = 'javascript' | 'typescript' | 'bash';
export type Copy = 'Copy' | 'Copied!';

export interface CodePanelProps extends StackProps {
    code: string;
    language?: LANGUAGE;
    copy?: boolean;
};