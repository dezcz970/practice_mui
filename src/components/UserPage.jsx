import { Box } from "@mui/material";
import UserEdit from "./UserEdit";

function UserPage() {
    // サンプルデータ
    const groups = [
        {
            users: ["User1", "User2"]
        },
        {
            users: ["User3", "User4"]
        },
        {
            users: ["User5", "User6"]
        },
        {
            users: ["User7", "User8"]
        },
        {
            users: ["User9", "User10"]
        },
        {
            users: ["User11", "User12"]
        }
    ];

    return (
        <Box>
            <UserEdit groups={groups} />
        </Box>
    );
}

export default UserPage;