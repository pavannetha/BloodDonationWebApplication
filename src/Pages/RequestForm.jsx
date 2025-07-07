import styled from "styled-components";
export default function RequestForm() {
  return (
    <>
      <Form>
        <fieldset>
          <form
            style={{
              backgroundColor: "#f2f2f2",
              width: "50%",
              margin: "20px auto",
              borderRadius: "5px",
            }}
          >
            <div className="p-3">
              <legend>PatientDetails:</legend>

              <div
                id="patientDetails"
                className="border border-black rounded-lg p-4"
              >
                <div className=" grid gap-4 mb-2 md:grid-cols-2">
                  <div>
                    <lable className="block mb-2 text-sm font-medium text-gray-900">
                      PatientName
                    </lable>
                    <input
                      className="p-2.5 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <lable className="block mb-2 text-sm font-medium text-gray-900">
                      Age
                    </lable>
                    <input
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Gender
                    </label>
                    <select className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <lable className="block mb-2 text-sm font-medium text-gray-900">
                      Attender Mobile
                    </lable>
                    <input
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <lable className="block mb-2 text-sm font-medium text-gray-900">
                      AlternateMobile
                    </lable>
                    <input
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      RequiredBloodGroup
                    </label>
                    <select className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option>A+</option>
                      <option>B+</option>
                      <option>O+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      DiseaseSufferingFrom
                    </label>
                    <input
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <lable className="block mb-2 text-sm font-medium text-gray-900">
                      RequirementUrgency
                    </lable>
                    <select className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option>Emergency Needed</option>
                      <option>1 day</option>
                      <option>2 days</option>
                    </select>
                  </div>
                </div>
              </div>

              <legend>HospitalDetails:</legend>
              <div
                id="hospitalDetails"
                className="border border-black rounded-lg p-4 mt-6"
              >
                <div className="grid gap-4 mb-2 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      HospitalName
                    </label>
                    <input
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      HospitalCity
                    </label>
                    <input
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Landmard
                    </label>
                    <input
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      HospitalState
                    </label>
                    <input
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="text"
                    ></input>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Pincode
                    </label>
                    <input
                      className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      type="number"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <button className="border  rounded-md block mx-auto text-white border-gray-100 bg-red-500  p-2 hover:bg-red-800 transition-colors">
                  Request
                </button>
              </div>
            </div>
          </form>
        </fieldset>
      </Form>
    </>
  );
}
export const Form = styled.div``;
