import { Link } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"
export const PageNotFound = () => {
  const PageTitle = useTitle('Page Not Found')
  return (
    <main className="flex justify-center pt-28	 h-screen">
      <div className="bg-gray-300 dark:bg-slate-600 w-5/6 h-min text-center rounded shadow-xl p-10 md:w-3/6		">
        <h1 className="font-sans text-7xl  text-gray-500 dark:text-white  ">404</h1>
        <h1 className="font-sans text-4xl text text-gray-500 dark:text-white">Page Not Found</h1>
        <Link to="/" className="bg-blue-700 rounded p-2 text-white font-bold  mt-5 inline-block" >Back To Home</Link>
      </div>
    </main>
  )
}
