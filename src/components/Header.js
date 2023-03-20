import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Header() {
    return (
    <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
    <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            메가빡스🎬
    </Typography>
    <nav>
        <Link
        variant="button"
        color="text.primary"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        >
        영화
        </Link>
        <Link
        variant="button"
        color="text.primary"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        >
        예매
        </Link>
        <Link
        variant="button"
        color="text.primary"
        href="#"
        sx={{ my: 1, mx: 1.5 }}
        >
        이벤트
        </Link>
    </nav>
    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        Login
    </Button>
    </Toolbar>
    </AppBar>
    )
}

export default Header;