import { Paper, Typography } from "@mui/material";
import { useDrag } from 'react-dnd';

function UserItem({ id, userName }) {
    const [{ isDragging }, drag] = useDrag({
        type: 'USER',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <Paper
                elevation={2}
                sx={{
                    p: 2,
                    cursor: 'move',
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
        </div>
    );
}

export default UserItem; 