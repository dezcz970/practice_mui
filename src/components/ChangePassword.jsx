import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const ChangePassword = ({ onChangePassword }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('すべての項目を入力してください');
            setSuccess('');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('新しいパスワードが一致しません');
            setSuccess('');
            return;
        }
        setError('');
        setSuccess('パスワードが変更されました');
        // パスワード変更処理（onChangePasswordコールバックなど）
        if (onChangePassword) onChangePassword(currentPassword, newPassword);
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    パスワード変更
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="現在のパスワード"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                    <TextField
                        label="新しいパスワード"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <TextField
                        label="新しいパスワード（再入力）"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {error && (
                        <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
                            {error}
                        </Typography>
                    )}
                    {success && (
                        <Typography color="primary" variant="body2" align="center" sx={{ mt: 1 }}>
                            {success}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 3 }}
                    >
                        パスワード変更
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default ChangePassword; 