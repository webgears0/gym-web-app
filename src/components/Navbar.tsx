interface NavbarProps {
  links: {
    href: string;
    title: string;
  }[]
}

const Navbar = (props: NavbarProps) => {
  const { links } = props;

  return (
    <>
      <nav className='bg-gray-200 h-8'>
        <ul className='flex sm:justify-center space-x-3w'>
          {links.map((link) => (
            <li>
              <a href={link.href} className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar;