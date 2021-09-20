/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import CreateBlob from './components/blob/CreateBlob'
import IndexBlob from './components/blob/IndexBlob'
import ShowBlob from './components/blob/ShowBlob'
import { indexBlob } from './api/blob'

export default function App (props) {
    const [user, setUser] = useState(null)
    const [msgAlerts, setMsgAlerts] = useState([])

    const [uploads, setUploads] = useState([])

    useEffect(() => {
        if (!user) return
        console.log(user)
        indexBlob(user)
            .then(res => { setUploads(res.data.blobs); console.log(res) })
            .catch(console.error)
    }, [user])

    useEffect(() => {
        console.log('App loaded')
    }, [])

    const deleteAlert = (id) => {
        setMsgAlerts((prevValue) => {
            return prevValue.filter((msg) => msg.id !== id)
        })
    }

    return (
        <>
            <Header user={user} />
            {msgAlerts.map((msgAlert, i) => (
                <AutoDismissAlert
                    key={i}
                    heading={msgAlert.heading}
                    variant={msgAlert.variant}
                    message={msgAlert.message}
                    id={msgAlert.id}
                    deleteAlert={deleteAlert}
                />
            ))}

            <main className='container'>
                {user != null && <Route
                    path='/'
                    exact
                    render={() => (
                        <>
                            <CreateBlob msgAlert={msgAlerts} setUploads={setUploads} user={user} />
                            <IndexBlob msgAlert={msgAlerts} uploads={uploads} setUploads={setUploads} user={user} />
                        </>
                    )}
                />}
                <Route
                    path='/u/:id'
                    exact
                    render={() => (
                        <ShowBlob msgAlert={msgAlerts} setMsgAlerts={setMsgAlerts} user={user} />
                    )}
                />
                <Route
                    path='/sign-up'
                    render={() => (
                        <SignUp msgAlert={msgAlerts} setMsgAlerts={setMsgAlerts} setUser={setUser} />
                    )}
                />
                <Route
                    path='/sign-in'
                    render={() => (
                        <SignIn msgAlert={msgAlerts} setMsgAlerts={setMsgAlerts} setUser={setUser} />
                    )}
                />
                <AuthenticatedRoute
                    user={user}
                    path='/sign-out'
                    render={() => (
                        <SignOut
                            msgAlert={msgAlerts}
                            setMsgAlerts={setMsgAlerts}
                            setUser={setUser}
                            user={user}
                        />
                    )}
                />
                <AuthenticatedRoute
                    user={user}
                    path='/change-password'
                    render={() => (
                        <ChangePassword msgAlert={msgAlerts} setMsgAlerts={setMsgAlerts} user={user} />
                    )}
                />
            </main>
        </>
    )
}

// class App extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             user: null,
//             msgAlerts: []
//         }
//     }

//     setUser = (user) => this.setState({ user })

//     clearUser = () => this.setState({ user: null })

//     deleteAlert = (id) => {
//         this.setState((state) => {
//             return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
//         })
//     }

//     msgAlert = ({ heading, message, variant }) => {
//         const id = uuid()
//         this.setState((state) => {
//             return {
//                 msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
//             }
//         })
//     }

//     render () {
//         const { msgAlerts, user } = this.state

//         return (
//             <>
//                 <Header user={user} />
//                 {msgAlerts.map((msgAlert) => (
//                     <AutoDismissAlert
//                         key={msgAlert.id}
//                         heading={msgAlert.heading}
//                         variant={msgAlert.variant}
//                         message={msgAlert.message}
//                         id={msgAlert.id}
//                         deleteAlert={this.deleteAlert}
//                     />
//                 ))}
//                 <main className='container'>
//                     {user != null && <Route
//                         path='/'
//                         exact
//                         render={() => (
//                             <>
//                                 <CreateBlob msgAlert={msgAlerts} user={user} />
//                                 <IndexBlob msgAlert={msgAlerts} user={user} />
//                             </>
//                         )}
//                     />}
//                     <Route
//                         path='/u/:id'
//                         exact
//                         render={() => (
//                             <ShowBlob msgAlert={msgAlerts} user={user} />
//                         )}
//                     />
//                     <Route
//                         path='/sign-up'
//                         render={() => (
//                             <SignUp msgAlert={msgAlerts} setUser={setUser} />
//                         )}
//                     />
//                     <Route
//                         path='/sign-in'
//                         render={() => (
//                             <SignIn msgAlert={msgAlerts} setUser={setUser} />
//                         )}
//                     />
//                     <AuthenticatedRoute
//                         user={user}
//                         path='/sign-out'
//                         render={() => (
//                             <SignOut
//                                 msgAlert={msgAlerts}
//                                 clearUser={this.clearUser}
//                                 user={user}
//                             />
//                         )}
//                     />
//                     <AuthenticatedRoute
//                         user={user}
//                         path='/change-password'
//                         render={() => (
//                             <ChangePassword msgAlert={msgAlerts} user={user} />
//                         )}
//                     />
//                 </main>
//             </>
//         )
//     }
// }

// export default App
