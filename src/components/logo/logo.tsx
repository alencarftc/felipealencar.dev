import Image from 'next/image'
import LogoImage from '../../../assets/logo.svg'

export const Logo = () => {
  return <Image src={LogoImage} alt='Logo site' width={116} height={32} />
}
