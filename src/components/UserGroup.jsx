import { Paper, Stack, Typography } from "@mui/material";
import { useDrop } from 'react-dnd';
import UserItem from "./UserItem";

function UserGroup({ users, groupId, onMoveUser }) {
    const [{ isOver }, drop] = useDrop({
        accept: 'USER',
        drop: (item) => {
            onMoveUser(item.id, groupId);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <div ref={drop}>
            <Paper
                elevation={2}
                sx={{
                    p: 4,
                    width: '100%',
                    minHeight: '200px',
                    backgroundColor: isOver ? 'rgba(0, 0, 0, 0.04)' : 'inherit',
                    '&:hover': {
                        boxShadow: 4,
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out',
                    },
                }}
            >
                <Typography variant="h6" gutterBottom>
                    グループ {groupId}
                </Typography>
                <Stack direction="column" spacing={2}>
                    {users.map((user) => (
                        <UserItem
                            key={user.id}
                            id={user.id}
                            userName={user.name}
                        />
                    ))}
                </Stack>
            </Paper>
        </div>
    );
}

export default UserGroup; 