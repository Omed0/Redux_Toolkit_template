
export default function Post({ id, post }) {

    return (
        <section className="p-6" key={id}>
            <h2 className="ml-6 font-semibold">{post.title}</h2>
            <article>
                <p className="mb-7">{post.body.substring(0, 100)}</p>
                <small>{post.since}</small>
            </article>
        </section>
    )
}
