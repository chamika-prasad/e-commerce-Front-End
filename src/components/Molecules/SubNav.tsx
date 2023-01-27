import PageName from './../Atoms/PageName'
import SearchBar from './../Atoms/SearchBar'

type SubNavProps = {
    pageName: string
}

export default function SubNav(props : SubNavProps) {
  return (
    <div className="d-flex justify-content-between align-items-baseline mb-4">
    <span className="fs-2">
        <PageName title ={props.pageName}/>
    </span>
    <span className="ms-2 text-muted">
        <SearchBar/>
    </span>
</div>
  )
}
