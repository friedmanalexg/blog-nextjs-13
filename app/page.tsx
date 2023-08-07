
import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello there! ✌🤓&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Alex</span>.
        </span>&nbsp;
      </p>
      <p className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        This is my professional blog, where I write about coding. You can also find my portfolio and other relevant professional and social links above. Thanks for looking me up! 
      </p>
      
      <Posts />
    </main>
  )
}
