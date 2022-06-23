export default function CelebCrushDetails({ crush }) {
    return (
        <div>
            <h2>{crush.crushName}</h2>
            <h3>By: {crush.name}</h3>
            <p>Content: {crush.content}</p>
        </div>
    )
}
