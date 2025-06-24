import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Header = ({ mustChangePassword }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    サンプルアプリ
                </Typography>
                <Box>
                    <Button color="inherit" component={RouterLink} to="/">Home</Button>
                    <Button color="inherit" component={RouterLink} to="/user">ユーザー</Button>
                    <Button color="inherit" component={RouterLink} to="/restaurants">レストラン</Button>
                    <Button color="inherit" component={RouterLink} to="/date-vote">日付投票</Button>
                    <Button color="inherit" component={RouterLink} to="/login" >ログイン</Button>
                    <Button color="inherit" component={RouterLink} to="/change-password">パスワード変更</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header; 