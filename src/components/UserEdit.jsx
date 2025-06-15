import { Stack } from "@mui/material";
import UserGroup from "./UserGroup";

function UserEdit({ groups, onMoveUser }) {
    return (
        <>
            <Stack direction="column" spacing={4} sx={{ width: '100%', justifyContent: 'center' }}>
                <Stack
                    direction="row"
                    spacing={10}
                    sx={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        flexWrap: 'wrap',
                        gap: 4
                    }}
                >
                    {groups.map((group, index) => (
                        <UserGroup
                            key={group.id}
                            users={group.users}
                            groupId={group.id}
                            onMoveUser={onMoveUser}
                        />
                    ))}
                </Stack>
            </Stack>
        </>
    );
}

export default UserEdit;