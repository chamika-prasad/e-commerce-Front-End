import 'bootstrap/dist/css/bootstrap.css';
import './PageName.css';

type PageNameProps = {
  title: string
}

export default function PageName(props : PageNameProps) {
  return (
    <div>
        <h2 className='py-2 name'>{props.title}</h2>
    </div>
    
  )
}
