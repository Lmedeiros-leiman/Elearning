import { StrictMode,  useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css"
import { AuthProvider } from "../hooks/AuthHook";


const HomePage = () => {

  const [_data, _setData] = useState({})

  


  const onSubmit = (e : React.FormEvent) => {
    e.preventDefault()


  }

  return (
    <AuthProvider>
      <section className="flex flex-wrap h-screen">


        <header className=" w-full h-12 border-b shadow-md sticky bg-[#E9FFF9]">
          <nav className="flex items-center justify-between ps-4 pe-1 py-2">
            <a className="text-2xl text-[#1D3354] font-bold" href="/">Jokerist!</a>

            <span>
              <a href="/auth" className="bg-[#D64045] py-1 px-4 rounded-full text-white font-bold">
                Log in
              </a>
            </span>
          </nav>
        </header>

        <main className="w-full h-full bg-[#9ED8DB] flex-grow">

          <form onSubmit={onSubmit} className=" w-[500px] flex flex-col gap-2 mx-auto bg-slate-50 p-3 rounded mt-4">
              <input type="text" placeholder="Search" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <textarea className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>

              <button type="submit" className="w-full py-2 px-4 bg-[#D64045] text-white font-semibold rounded-md hover:bg-[#D64045] focus:outline-none focus:ring-2 focus:ring-[#D64045]">Post</button>
          </form>

          <ul className="pt-4 flex flex-col w-full flex-grow gap-4 ">
            {_data && JSON.stringify(_data) || "No data"}
          </ul>
        </main>
        
      </section>
    </AuthProvider>
  )
}



//
createRoot(document.getElementById('root')!).render(<StrictMode><HomePage /></StrictMode>,)