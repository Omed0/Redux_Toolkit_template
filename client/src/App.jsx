import PostsList from "./features/posts/postsList"
import AddPostForm from "./features/posts/addPostForm"

function App() {

  return (
    <main className="w-full">
      <AddPostForm />
      <section className="w-full p-3 flex bg-slate-400">
        <PostsList />
      </section>
    </main>
  )
}

export default App
