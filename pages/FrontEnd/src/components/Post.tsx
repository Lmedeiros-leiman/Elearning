import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

type PostProps = {
    message: string
    embbeded?: string[]
    author: string
}

export const Post : React.FC<PostProps> = ({message, embbeded = ["",""], author}) => {


    return (<>
        <div className="p-4 w-full flex-grow bg-white shadow-md rounded-lg max-w-lg mx-auto space-y-4">
            <header className=" flex gap-2 border-b pb-1">
                
                <img className="w-12 h-12 rounded-full" src="https://placehold.co/48" alt="avatar" />
                
                <div className="flex flex-col align-middle">
                    <p className="text-sm text-gray-600">{author}</p>
                    <p className="text-sm text-gray-600">{author}</p>
                </div>
                
                
            </header>
            <div className="text-lg">{message}</div>
            
            <Carousel showThumbs={false} >
            {
                embbeded && embbeded.map((_) => {
                    return (<img className="rounded" src="https://placehold.co/600x400" alt="post" />)
                })
            }
            </Carousel>
            

            <footer className="w-full flex gap-4 border-t pt-2">
                <button className="rounded-full bg-[#D64045] shadow px-2 py-0.5">/\</button>
                <button className="rounded-full bg-[#5884C6] shadow px-2 py-0.5">\/</button>
                <button className="rounded-full bg-[#E9FFF9] shadow px-2 py-0.5">150</button>
            </footer>
        </div>
    </>)
}