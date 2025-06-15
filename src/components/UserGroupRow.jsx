import { Stack } from "@mui/material";
import UserGroup from "./UserGroup";

function UserGroupRow({ groups }) {
    return (
        <Stack direction="row" spacing={4} sx={{ width: '100%', justifyContent: 'center' }}>
            {groups.map((group, index) => (
                <UserGroup key={index} users={group.users} />
            ))}
        </Stack>
    );
}

export default UserGroupRow; 