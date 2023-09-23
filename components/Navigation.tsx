import styles from "./Navigation.module.css"
import Link from "next/link"
const links = [
    {
        label: "Home",
        route: "/"
    },
    {
        label: "About",
        route: "/about"
    },
    {
        label: "Info",
        route: "/info"
    },
    {
        label: "Post",
        route: "/post"
    }
]


export default function Navigation(){
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    {
                        links.map(({label, route}) => (
                            <li key={route}>
                                <Link href={route}>
                                    {label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}