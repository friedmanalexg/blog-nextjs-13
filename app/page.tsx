
import MyProfilePic from "./components/MyProfilePic"
import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <MyProfilePic/>
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello there! ✌🤓&nbsp;
        <span className="whitespace-nowrap">
          I&lsquo;m <span className="font-bold">Alex</span>.
        </span>&nbsp;
      </p>
      <p className="px-6 prose prose-xl prose-emerald dark:prose-invert mx-auto">
        This is my professional blog, where I write about technical writing, hardware, and coding. You can also find my portfolio and other relevant professional and social links above. Employment and business inquiries can be sent to alex-friedman-codes at protonmail dot com. Thanks for looking me up! 
      </p>
      
      <Posts />
    </main>
  )
}
