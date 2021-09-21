import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'
import { signOutSuccess } from '../AutoDismissAlert/messages'

function SignOut ({ setUser, setMsgAlerts, history, user }) {
    useEffect(() => {
        signOut(user)
            .finally(() =>
                setMsgAlerts(prev => [...prev, {
                    heading: 'Signed Out Successfully',
                    message: signOutSuccess,
                    variant: 'success'
                }])
            )
            .finally(() => setUser(null))
            .finally(() => history.push('/'))
    }, [])

    return ('')
}

export default withRouter(SignOut)
