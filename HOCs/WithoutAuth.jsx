import Loader from '../components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context.js'
import { onAuth, getData } from '../firebase/utils'

export function WithoutAuth(Component) {
    return () => {
        const { userDB, setUserProfile, setUserData, postsIMG, setUserPostsIMG, setUserDate, setUserMonthAndYear, setUserDayMonthYear, monthAndYear} = useUser()

        useEffect(() => {
            userDB == '' && getData(setUserData, monthAndYear)
        }, [userDB]);

        return (
            <>
                {userDB == '' && <Loader />}
                {userDB !== '' && <Component {...arguments} />}
            </>
        )
    }
}
