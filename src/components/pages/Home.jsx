import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import CelebCrushForm from "../CelebCrushForm"

export default function Home() {
    const [crushes, setCrushes] = useState([])
    const [err, setErr] = useState('')

    useEffect(() => {
        const fetchCrushes = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/celebCrushes`)
                setCrushes(response.data)
            } catch (err) {
                console.log('FIRE', err)
            }
        }
        fetchCrushes()
    }, [])

    const handleSubmit = async (e, form, setForm) => {
        e.preventDefault()
        console.log(form)
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/celebCrushes`, form)
            setCrushes([...crushes, response.data])
            setForm({
                name: '',
                crushName: '',
                content: ''
            })
        } catch (err) {
            if (err.response) {
                if (err.response.status === 400) {
                    setErr(err.response.data.msg)
                }
            }
        }
    }

    const crushList = crushes.map((crush, idx) => {
        return (
            <div key={`crush-${idx}`}>
                <Link to={`/celebCrushes/${crush._id}`}>{crush.crushName}</Link>
            </div>
        )
    })

    return (
        <>
            <h1>Add YOUR Celeb Crush!</h1>
            <CelebCrushForm
                submitHandler={handleSubmit}
                initialForm={{
                    name: '',
                    crushName: '',
                    content: ''
                }}
            />
            <h1>Other Celeb Crushes:</h1>
            {crushList}
        </>
    )
}
