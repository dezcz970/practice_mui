import { Stack } from '@mui/material'
import UserGroupRow from './UserGroupRow'

function UserEdit({ groups }) {

    return (
        <>
            <Stack direction="column" spacing={4} sx={{ width: '100%', justifyContent: 'center' }}>
                <UserGroupRow groups={groups.slice(0, 2)} />
                <UserGroupRow groups={groups.slice(2, 4)} />
                <UserGroupRow groups={groups.slice(4, 6)} />
            </Stack>
        </>
    )
}

export default UserEdit