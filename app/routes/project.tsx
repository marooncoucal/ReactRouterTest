import { projects } from "~/content"
import type { Route } from "./+types/project"


export default function Project({params}: Route.ComponentProps){
    const {title, content} = projects[params.projectName]
    return (
        <div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    )
}