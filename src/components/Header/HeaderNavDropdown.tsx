import React, { useRef, useState } from 'react';
import { ClickAwayListener, IconButton, Box, Collapse } from '@mui/material';
import MenuButton from 'components/ui-components/MenuButton';

function HeaderNavDropdown() {
    const [isOpen, setOpen] = useState(false);
    const hambugerRef = useRef<HTMLButtonElement | null>(null);

    return (
        <React.Fragment>
            <IconButton onClick={() => setOpen(!isOpen)} disableRipple>
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
                        Hello
                    </Box>
                </Collapse>
            </ClickAwayListener>
        </React.Fragment>
    );
}

export default HeaderNavDropdown;
