import { cn } from '@/lib/utils'

const getTitleStyle = (section: string) => {
  switch (section) {
    case 'hero':
      return 'text-[70px] leading-[80px]'
    case 'indicator':
      return 'text-2xl leading-8'
    default:
      return 'text-2xl leading-8'
  }
}

const getSubstitleStyle = (section: string) => {
  switch (section) {
    case 'hero':
      return 'text-lg leading-8 font-light'
    case 'indicator':
      return 'text-sm leading-6 font-extralight'
    default:
      return 'leading-6'
  }
}

function Title({
  title,
  subtitle,
  section,
  className
} : {
  title: string
  subtitle: string
  section: 'hero' | 'indicator' | '',
  className: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1',
        className
      )}
    >
      <h1 className={`font-bold ${getTitleStyle(section)}`}>
        { title }
      </h1>
      <h2 className={`max-w-[597px] ${getSubstitleStyle(section)}`}>
        { subtitle }
      </h2>
    </div>
  )
}

Title.defaultProps = {
  section: '',
  className: ''
}
export default Title
