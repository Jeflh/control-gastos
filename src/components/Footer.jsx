
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-emerald-900 text-white text-center absolute bottom-0 w-full p-3'>
      ©{year} Emmanuel Fernández. Todos los derechos reservados.
    </footer>
  )
}

export default Footer