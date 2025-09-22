import { Link } from "react-router";

export default function TopMenu(){
    return (
        <nav className="flex gap-[20px]">
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <Link to="/projects">Проекты</Link>
        </nav>
    )
}