import { Header } from '../components/Header'
import { Lesson } from '../components/Lesson'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Event () {
  const lessons: LessonProps[] = [
    {
      availableAt: new Date(2022, 6, 5),
      slug: 'decolando',
      title: 'Abertura do evento',
      type: 'live'
    },
    {
      availableAt: new Date(2022, 6, 6),
      slug: 'css',
      title: 'Aprendendo css',
      type: 'class'
    },
    {
      availableAt: new Date(2022, 6, 8),
      slug: 'create-web-application',
      title: 'Construindo sua primeira aplicação web',
      type: 'class'
    },
    {
      availableAt: new Date(2022, 6, 9),
      slug: 'end-class',
      title: 'Final do evento bate-papo',
      type: 'live'
    },
    {
      availableAt: new Date(2022, 6, 8),
      slug: 'create-web-application',
      title: 'Construindo sua primeira aplicação web',
      type: 'class'
    },
    {
      availableAt: new Date(2022, 6, 9),
      slug: 'end-class',
      title: 'Final do evento bate-papo',
      type: 'live'
    }
  ]
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <div className='flex-1' />
        <aside className='w-[348px] h-[calc(100%-72px)] p-6 bg-gray-700 border-l border-l-gray-500 fixed right-0 top-[72px] overflow-y-scroll'>
          <span className='font-bold text-2xl mb-6 pb-6 border-b border-b-gray-500 block'>Cronograma das aulas</span>
          <div className='flex flex-col gap-8'>
            {lessons.map(lesson => (
              <Lesson
                availableAt={new Date(lesson.availableAt)}
                slug={lesson.slug}
                title={lesson.title}
                type={lesson.type} />
              ))
            }
          </div>
        </aside>
      </main>
    </div>
  )
}