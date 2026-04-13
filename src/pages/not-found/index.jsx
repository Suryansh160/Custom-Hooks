import { Link } from "react-router-dom"

function NotFoundPage(){
return <div>This page not Exists

    <Link to={'/recipe-list'}>Go to recipe List</Link>
</div>
}

export default NotFoundPage