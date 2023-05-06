import type { FC } from 'react';
import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CodePanelProps, Copy } from './code-panel-types';
import { LANGUAGES } from './code-panel-constants';

const CodePanel: FC<CodePanelProps> = ({ code, language, ...rest }) => {
    const [copyText, setCopyText] = useState<Copy>('Copy');

    const handleCopy = () => {
        setCopyText('Copied!');
        setTimeout(() => setCopyText('Copy'), 1500);
    };
    return (
        <Stack position={'relative'} {...rest}>
            <CopyToClipboard text={code} onCopy={handleCopy}>
                <Typography
                    color={'GrayText'}
                    variant={'caption'}
                    fontSize={'0.6rem'}
                    onClick={handleCopy}
                    position={'absolute'}
                    top={10}
                    right={10}
                    zIndex={1}
                    sx={{cursor: 'pointer'}}
                >
                    {copyText}
                </Typography>
            </CopyToClipboard>
            <SyntaxHighlighter language={language} style={dracula}>
                {code}
            </SyntaxHighlighter>
        </Stack >
    )
}

export default CodePanel;

CodePanel.defaultProps = {
    language: LANGUAGES.JAVASCRIPT,
    // copy: false,
}