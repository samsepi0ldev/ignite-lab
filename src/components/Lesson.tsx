import classNames from 'classnames'
import { CheckCircle, Lock } from 'phosphor-react'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson (props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const isActiveLesson = 'slug' === props.slug
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })
  return (
    <div className='group'>
      <span className='mb-2 text-gray-300 leading-[1.6875rem] block'>{availableDateFormatted}</span>
      <div className={classNames('flex flex-col rounded border border-gray-500 group-hover:border-green-500 p-4 gap-4', {
        'bg-green-500': isActiveLesson,
        'border-green-500': isActiveLesson
      })}>
        <div className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <div className={classNames('flex items-center gap-2', {
              'text-white': isActiveLesson,
              'text-blue-500': !isActiveLesson
            })}>
              <CheckCircle size={20} />
              <span className='font-medium text-sm'>Conteúdo liberado</span>
            </div>
          ): (
            <div className='flex items-center gap-2 text-orange-500'>
              <Lock size={20} />
              <span className='font-medium text-sm'>Em breve</span>
            </div>
          )}
          <span className={classNames('text-xs font-medium rounded border uppercase px-2 py-1', {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson
          })}>
            {props.type === 'live' ? 'ao vivo': 'aula prática'}
          </span>
        </div>
        <strong className='block'>{props.title}</strong>
      </div>
    </div>
  )
}