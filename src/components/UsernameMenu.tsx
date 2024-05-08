import { useAuth0 } from '@auth0/auth0-react'
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Separator } from '@radix-ui/react-separator';
import { CircleUserRound } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function UsernameMenu() {
    const {user,logout}=useAuth0();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center px-3 font-bold hover:text-orange-500 gap-2'>
            <CircleUserRound className='text-orange-500'/>
            {user?.email}
            {user?.name}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
            <Link to='/user-profile' className='font-bold hover:text-orange-500'>User Profile</Link>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem>
                <Button onClick={()=>logout()} className='flex flex-1 font-bold bg-orange-500'>LogOut</Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
