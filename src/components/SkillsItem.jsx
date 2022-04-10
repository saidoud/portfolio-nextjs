import React from 'react';
import { Stack, Typography } from '@mui/material';

function SkillsItem({ name, color, Icon }) {
    return (
        <Stack direction={'column'} spacing={1} alignItems="center">
            <Icon fontSize={50} color={color} />
            <Typography variant="p" fontWeight={600}>
                {name}
            </Typography>
        </Stack>
    );
}

export default SkillsItem;
