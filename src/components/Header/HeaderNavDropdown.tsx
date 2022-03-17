import React, { useRef, useState } from 'react';
import { ClickAwayListener, IconButton, Box, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';

import MenuButton from 'components/ui-components/MenuButton';

const Anchor = styled('a')<{ component?: React.ElementType; noLinkStyle?: boolean }>(({ theme }) => ({
    ...theme.typography.body2,
    fontWeight: 700,
    textDecoration: 'none',
    border: 'none',
    width: '100%',
    backgroundColor: 'transparent',
    color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.secondary,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    borderRadius: 4,
    transition: theme.transitions.create('background'),
    '&:hover, &:focus': {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.grey[100],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
            backgroundColor: 'transparent'
        }
    }
}));

const UList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
    margin: 0
});

function HeaderNavDropdown() {
    const [isOpen, setOpen] = useState(false);
    const hambugerRef = useRef<HTMLButtonElement | null>(null);

    return (
        <React.Fragment>
            <IconButton onClick={() => setOpen(!isOpen)} disableRipple ref={hambugerRef}>
                <MenuButton
                    isOpen={isOpen}
                    strokeWidth="3"
                    color="#fff"
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    width={26}
                    height={13}
                />
            </IconButton>
            <ClickAwayListener
                onClickAway={(event) => {
                    if (hambugerRef.current && !hambugerRef.current.contains(event.target as Node)) {
                        setOpen(true);
                    }
                }}
            >
                <Collapse
                    in={isOpen}
                    sx={{
                        position: 'fixed',
                        top: 56,
                        left: 0,
                        right: 0,
                        boxShadow: (theme) =>
                            `0px 4px 20px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(170, 180, 190, 0.3)'}`,
                        bgcolor: 'background.paper'
                    }}
                >
                    <Box
                        sx={{
                            p: 2,
                            bgcolor: 'background.paper',
                            maxHeight: 'calc(100vh - 56px)',
                            overflow: 'auto'
                        }}
                    >
                        <UList>
                            <li>
                                <Anchor href={'#home'} noLinkStyle>
                                    Home
                                </Anchor>
                            </li>
                            <li>
                                <Anchor href={'#about'} noLinkStyle>
                                    About
                                </Anchor>
                            </li>
                            <li>
                                <Anchor href={'#about'} noLinkStyle>
                                    Service
                                </Anchor>
                            </li>
                            <li>
                                <Anchor href={'#about'} noLinkStyle>
                                    Portfolio
                                </Anchor>
                            </li>
                            <li>
                                <Anchor href={'#about'} noLinkStyle>
                                    Contact
                                </Anchor>
                            </li>
                        </UList>
                    </Box>
                </Collapse>
            </ClickAwayListener>
        </React.Fragment>
    );
}

export default HeaderNavDropdown;
