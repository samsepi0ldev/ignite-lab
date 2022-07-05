import mockup from './assets/mockup.png'
import { Logo } from './components/Logo'
import rocketseatLogo from './assets/logo-rocketseat.svg'

export default function App() {
  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
        <div className='max-w-[624px]'>
          <Logo />
          <h1 className='text-[2.5rem] mt-8 leading-tight'>Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'>React JS</strong></h1>
          <p className='text-gray-200 mt-6 leading-relaxed'>Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>
        <div className='border border-gray-500 bg-gray-700 p-8 rounded'>
          <strong className='text-gray-100 text-2xl block'>Inscreva-se gratuitamente</strong>
          <form className='flex flex-col mt-6 gap-2'>
            <input
              className='h-14 bg-gray-800 rounded px-5 w-full'
              type="text"
              placeholder='Seu nome completo' />
            <input
              className='h-14 bg-gray-800 rounded px-5 w-full'
              type="email"
              placeholder='Digite seu email' />
            <button
              className='uppercase bg-green-500 hover:bg-green-700 rounded py-4 font-bold text-sm mt-4 transition-colors'>garantir minha vaga</button>
          </form>
        </div>
      </div>
      <img src={mockup} className='mt-10' alt="Mockup ignite lab" />
      <footer className='w-full h-20 bg-gray-800 flex justify-between items-center px-6'>
        <div className='flex items-center gap-6'>
          <img src={rocketseatLogo} alt="rocketseat logo" />
          <span className='text-gray-300'>Rocketseat - Todos os direitos reservados</span>
        </div>
        <a className='text-gray-300' href="#">Políticas de privacidade</a>
      </footer>
    </div>
  )
}
