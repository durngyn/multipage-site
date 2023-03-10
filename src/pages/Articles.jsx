import { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Articles() {
    const  {id } = useParams()
    const url = 'http://localhost:3000/articles/' + id
    const { data: article, isPending, error } = useFetch(url)
    const history = useHistory()

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push('/')
            }, 2000)
        }
    }, [error, history])

    return (
        <div>
            {isPending && <div>{error}</div>}
            {error && <div>{error}</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
  )
}
