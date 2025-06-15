import { Paper, Stack } from "@mui/material";
import UserItem from "./UserItem";

function UserGroup({ users }) {
    return (
        <Paper
            elevation={2}
            sx={{
                p: 4,
                width: '100%',
                minWidth: '300px',
                maxWidth: '30%',
                minHeight: '100px',
                '&:hover': {
                    boxShadow: 4,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out',
                },
            }}
        >
            <Stack direction="column" spacing={2}>
                {users.map((user, index) => (
                    <UserItem key={index} userName={user} />
                ))}
            </Stack>
        </Paper>
    );
}

export default UserGroup; 