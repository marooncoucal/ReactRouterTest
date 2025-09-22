import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("root-layout.tsx", [
        index("routes/home.tsx"),
        route("about", "routes/about.tsx"),
        route("projects", "routes/projects.tsx"),
        route("projects/:projectName", "routes/project.tsx")
    ])
] satisfies RouteConfig;