import { Stack } from "@mui/material";
import UserGroup from "./UserGroup";

function UserGroupRow({ groups, onMoveUser }) {
    return (
        <Stack direction="row" spacing={4} sx={{ width: '100%', justifyContent: 'center' }}>
            {groups.map((group, index) => (
                <UserGroup
                    key={index}
                    users={group.users}
                    groupId={group.id}
                    onMoveUser={onMoveUser}
                />
            ))}
        </Stack>
    );
}

export default UserGroupRow; 