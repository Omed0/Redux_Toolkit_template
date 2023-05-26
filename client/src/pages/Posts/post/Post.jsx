
export default function Post({ id, post }) {

    return (
        <section className="p-6" key={id}>
            <h2 className="ml-6 font-semibold">{post.title}</h2>
            <small className="ml-6">{post.since}</small>
            <article>
                <p>{post.body.substring(0, 100)}</p>
                <small>{post.date}</small>
            </article>
        </section>
    )
}
