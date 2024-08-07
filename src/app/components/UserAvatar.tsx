import Image from 'next/image'
import { auth } from '../../../auth'

export default async function UserAvatar() {
    const session = await auth()

    if(!session?.user) return null

    return (
        <div>
            <Image src={session?.user.image || '/default_avatar.png'} width="500" height="500" alt={`${session.user.name} avatar image`}/>
        </div>
    )
}