export default function SignUp()
{
    return(
        <>
        <div className="">
          <form style={{backgroundColor:"#f2f2f2",width:"50%",margin:"20px auto"}}>
             <div className=" grid gap-4 mb-2 md:grid-cols-1">
                <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900"  htmlFor="Email">Email</label>
            <input  type="text" id="Email" name="Email" className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="sample@gmail.com"></input>

                </div>
                <div >
            <label className="block mb-2 text-sm font-medium text-gray-900"  htmlFor="Password">Password</label>
            <input type="text" id="Password" name="Password" className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" ></input>
                </div>
            </div>
            <div className="grid gap-4 mb-2 md:grid-cols-2" >
                <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="Fname" >FirstName</label>
            <input name="Fname" id="Fname" type="text" placeholder="FirstName" className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                </div>
                <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Lname">LastName</label>
            <input type="text" id="Lname" name="Lname" className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="LastName"></input>
                </div>
            </div>
           
            <div className="grid gap-4 mb-2 md:grid-cols-2">
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="BloodGroup">BloodGroup</label>
                <select className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="BloodGroup" id="BloodGroup" >
                    <option>A+</option>
                    <option>B+</option>
                    <option>O+</option>
                </select>
                </div>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Mobile">Mobile</label>
                <input  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" id="Mobile" name="Mobile" ></input>
                </div>
            </div>
            <div className="grid gap-4 mb-2 md:grid-cols-2" id="Address">
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="City">City</label>
            <input className=" g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="City" id="City" type="text" ></input>

                </div>
                <div>
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Street">Street</label>
            <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="Street" id="Street"></input>
                </div>
            </div>
            <div className=" grid gap-4 mb-2 md:grid-cols-2">
                <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="State">State</label>
            <input  name="State" id="State" type="text" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>

                </div>
                <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="PinCode">PinCode</label>
            <input className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="Pincode" id="PinCode"></input>
                </div>
            </div>
            <div>
            <button className="border rounded-md block mx-auto text-white border-gray-100 bg-red-500  p-2 hover:bg-red-800 transition-colors">
                SignUp
            </button>
            </div>
          </form>
            </div>
        </>
    )
}