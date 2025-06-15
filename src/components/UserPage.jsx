import { Box } from "@mui/material";
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import UserEdit from "./UserEdit";

function UserPage() {
    const [groups, setGroups] = useState([
        {
            id: 1,
            users: [
                { id: 1, name: "User1" },
                { id: 2, name: "User2" },
                { id: 3, name: "User3" }
            ]
        },
        {
            id: 2,
            users: [
                { id: 4, name: "User4" },
                { id: 5, name: "User5" },
                { id: 6, name: "User6" }
            ]
        },
        {
            id: 3,
            users: [
                { id: 7, name: "User7" },
                { id: 8, name: "User8" },
                { id: 9, name: "User9" }
            ]
        },
        {
            id: 4,
            users: [
                { id: 10, name: "User10" },
                { id: 11, name: "User11" },
                { id: 12, name: "User12" }
            ]
        },
        {
            id: 5,
            users: [
                { id: 13, name: "User13" },
                { id: 14, name: "User14" },
                { id: 15, name: "User15" }
            ]
        },
        {
            id: 6,
            users: [
                { id: 16, name: "User16" },
                { id: 17, name: "User17" },
                { id: 18, name: "User18" }
            ]
        },
        {
            id: 7,
            users: [
                { id: 19, name: "User19" },
                { id: 20, name: "User20" },
                { id: 21, name: "User21" }
            ]
        },
        {
            id: 8,
            users: [
                { id: 22, name: "User22" },
                { id: 23, name: "User23" },
                { id: 24, name: "User24" }
            ]
        },
        {
            id: 9,
            users: [
                { id: 25, name: "User25" },
                { id: 26, name: "User26" },
                { id: 27, name: "User27" }
            ]
        },
        {
            id: 10,
            users: [
                { id: 28, name: "User28" },
                { id: 29, name: "User29" },
                { id: 30, name: "User30" }
            ]
        },
        {
            id: 11,
            users: [
                { id: 31, name: "User31" },
                { id: 32, name: "User32" },
                { id: 33, name: "User33" }
            ]
        },
        {
            id: 12,
            users: [
                { id: 34, name: "User34" },
                { id: 35, name: "User35" },
                { id: 36, name: "User36" }
            ]
        }
    ]);

    const handleMoveUser = (userId, targetGroupId) => {
        setGroups(prevGroups => {
            const newGroups = [...prevGroups];
            let sourceGroupId = null;
            let userToMove = null;

            // ユーザーを見つけて移動元のグループを特定
            newGroups.forEach((group, index) => {
                const userIndex = group.users.findIndex(user => user.id === userId);
                if (userIndex !== -1) {
                    sourceGroupId = index;
                    userToMove = group.users[userIndex];
                    newGroups[index].users = group.users.filter(user => user.id !== userId);
                }
            });

            // ユーザーを移動先のグループに追加
            if (sourceGroupId !== null && userToMove) {
                const targetGroupIndex = newGroups.findIndex(group => group.id === targetGroupId);
                if (targetGroupIndex !== -1) {
                    newGroups[targetGroupIndex].users = [...newGroups[targetGroupIndex].users, userToMove];
                }
            }

            return newGroups;
        });
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Box>
                <UserEdit groups={groups} onMoveUser={handleMoveUser} />
            </Box>
        </DndProvider>
    );
}

export default UserPage;