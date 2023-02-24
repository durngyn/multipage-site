import { useLocation } from "react-router-dom"

export default function Contact(){
    const queryString = useLocation().search
    console.log(queryString)

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")

    return (
        <div>
            <h2>Hey {name}, Contact us here...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium repudiandae molestiae, saepe unde fugit error vero aliquam nulla excepturi quis. Itaque dignissimos cumque ex totam mollitia, fugiat laboriosam fuga harum.</p>
        </div>
    )
}
