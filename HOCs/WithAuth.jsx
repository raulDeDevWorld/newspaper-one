import Loader from '../components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context.js'
import { onAuth, getData } from '../firebase/utils'

export function WithAuth(Component) {
    return () => {
        const { user, userDB, success, setUserProfile, setUserData, postsIMG, setUserPostsIMG, setUserDate, setUserMonthAndYear, setUserDayMonthYear, monthAndYear } = useUser()
        const router = useRouter()

        useEffect(() => {
            user == undefined && onAuth(setUserProfile, setUserDate, setUserMonthAndYear, setUserDayMonthYear)
            userDB == '' && getData(setUserData, monthAndYear)
        }, [userDB]);
        return (
            <>
                {userDB === undefined && <Loader />}
                {userDB && <Component {...arguments} />}
            </>
        )
    }
}
