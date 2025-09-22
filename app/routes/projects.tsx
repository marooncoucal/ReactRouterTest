import { Link } from "react-router";

export default function Projects(){
    return (
        <div>
            Проекты
            <div><Link to="/projects/first">Первый</Link></div>
            <div><Link to="/projects/second">Второй</Link></div>
            <div><Link to="/projects/third">Третий</Link></div>
        </div>
    )
}