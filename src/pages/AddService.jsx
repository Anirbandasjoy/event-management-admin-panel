
import { AiOutlineDoubleLeft } from "react-icons/ai"
import { Link } from "react-router-dom";



const AddService = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()



    }
    return (
        <div className="mt-5">
            <div className="w-4/6 mx-auto  text-purple-500 font-semibold">
                <Link className="flex items-center gap-1" to="/services">
                    <AiOutlineDoubleLeft className="cursor-pointer" />
                    <h1 className="cursor-pointer">All Service</h1>
                </Link>
            </div>
            <div className="text-center space-y-1 ">
                <h1 className="text-2xl">New Service</h1>
                <p className="text-gray-400 text-sm">Use the below form to create a new Service</p>
            </div>
            <div className=" mt-10">
                <form className="mx-auto space-y-2" onSubmit={handleSubmit}>
                    <div className="w-4/6 mx-auto space-y-1 ">
                        <label className="text-gray-400" htmlFor="name">Name </label>
                        <input className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="name" id="name" placeholder="Enter Service name" required />
                    </div>
                    <div className="w-4/6 mx-auto space-y-1  ">
                        <label className="text-gray-400" htmlFor="price">Price </label>
                        <input className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="price" id="price" placeholder="Enter Service $price" required />
                    </div>
                    <div className="w-4/6 mx-auto space-y-1  ">
                        <label className="text-gray-400" htmlFor="image">Image </label>
                        <input className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="image" id="image" placeholder="Enter Service Image Url" required />
                    </div>

                    <div className="w-4/6 mx-auto space-y-1  flex flex-col">
                        <label className="text-gray-400" htmlFor="image">Description </label>
                        <textarea className="textarea textarea-bordered" placeholder="Type here.."></textarea>
                    </div>



                    <div className="w-4/6 mx-auto ">

                        <button className="btn w-full hover:text-gray-900 mt-5 capitalize text-gray-700 bg-green-300">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddService