import { Paper, Typography } from "@mui/material";

function UserItem({ userName }) {
    return (
        <Paper
            elevation={2}
            sx={{
                p: 2,
                '&:hover': {
                    boxShadow: 4,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out',
                },
            }}
        >
            <Typography variant="h6" component="h2" gutterBottom>
                {userName}
            </Typography>
        </Paper>
    );
}

export default UserItem; 