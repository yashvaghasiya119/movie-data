import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { moviecard } from "../../store/action/movieaction"
import { removemovie } from "../../store/redusers/movieslice"

export function Moviedetails() {
    let dispatch = useDispatch()
    let { id } = useParams()
    useEffect(() => {
        dispatch(moviecard(id))
        return () => {
            dispatch(removemovie())
        }
    }, [])
    return <>
        <div>
            <i className="ri-arrow-left-fill" onClick={() => navigate(-1)}></i>
        </div>
    </>
}