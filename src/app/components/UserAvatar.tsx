import Image from 'next/image'
import { Session } from 'next-auth'

interface UserAvatarProps {
    session: Session | null
}

export default function UserAvatar({ session }: UserAvatarProps) {
    return (
        <div>
            <Image src={session?.user?.image || '/default_avatar.png'} width="50" height="50" alt={`${session?.user?.name} avatar image`}/>
        </div>
    )
}