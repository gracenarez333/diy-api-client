import { useState } from 'react'

export default function CelebCrushForm({ submitHandler, initialForm }) {
    const [form, setForm] = useState(initialForm)
    return (
        <div>
            <form onSubmit={e => submitHandler(e, form, setForm)}>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    id='name'
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <label htmlFor='crushName'>Celeb Crush:</label>
                <input
                    type='text'
                    id='crushName'
                    value={form.crushName}
                    onChange={e => setForm({ ...form, crushName: e.target.value })}
                />
                <label htmlFor='content'>Content:</label>
                <input
                    type='text'
                    id='content'
                    value={form.content}
                    onChange={e => setForm({ ...form, content: e.target.value })}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
