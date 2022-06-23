import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

import CelebCrushDetails from '../CelebCrushDetails'
import CelebCrushForm from "../CelebCrushForm"

export default function CelebCrush() {
    const [crush, setCrush] = useState({})
    const [showForm, setShowForm] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/celebCrushes/${id}`)
            .then(response => {
                setCrush(response.data)
            })
    }, [id])

    const handleSubmit = (e, form) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_SERVER_URL}/celebCrushes/${id}`, form)
            .then(response => {
                setCrush(response.data)
                setShowForm(false)
            })
            .catch(console.warn)
    }

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/celebCrushes/${id}`)
            .then(response => {
                navigate('/')
            })
            .catch(console.warn)
    }

    return (
        <>
            {
                showForm ?
                    <CelebCrushForm
                        initialForm={crush}
                        submitHandler={handleSubmit}
                    /> :
                    <CelebCrushDetails
                        crush={crush}
                    />
            }
            <button
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? 'Cancel' : 'Edit'}
            </button>
            {
                showForm ?
                    <button
                        onClick={handleDelete}
                    >
                        Delete
                    </button> :
                    ''
            }
        </>
    )
}
