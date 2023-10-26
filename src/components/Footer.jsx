
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-rose-950 text-white text-center bottom-0 w-full p-3'>
      ©{year} Emmanuel Fernández. Todos los derechos reservados.
    </footer>
  )
}

export default Footer