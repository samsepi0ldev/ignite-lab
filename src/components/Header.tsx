import { Logo } from '../components/Logo'

export function Header () {
  return (
    <header className='bg-gray-700 w-full h-[72px] flex items-center justify-center border-b border-gray-500 fixed'>
      <Logo />
    </header>
  )
}