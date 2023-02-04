import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import NavBar from "./NavBar"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useForm } from "react-hook-form"

type FormData = {
  age: string
  gender: string
  order: string
  qualityfood: string
  tasteoffood: string
  servingmethod: string
  staffbehave: string
  cleanliness: string
  likedproduct: string
  suggestion: string
  contactnumber: string
  image: string
  cityId: string
  formDate: string
}

const INITIAL_DATA: FormData = {
  age: "",
  gender: "",
  order: "",
  qualityfood: "",
  tasteoffood: "",
  servingmethod: "",
  staffbehave: "",
  cleanliness: "",
  likedproduct: "",
  suggestion: "",
  contactnumber: "",
  image: "",
  cityId: "",
  formDate: ""
}



function FeedbackForm() {
  const [data, setData] = useState(INITIAL_DATA)


  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ])

  const navigate = useNavigate();


  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()

    const current = new Date();
    const todate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    updateFields({ cityId: window.location.hostname });
    updateFields({ formDate: todate });
    // console.log("date" , formDate);


    data.formDate = todate;
    data.cityId = window.location.hostname;

    console.log(data.cityId);

    axios
      .post("https://premvati-backend-production.up.railway.app/", data)
      .then((response) => {
        console.log(response);
        console.log(window.location);
        navigate('/thankyou');
      })
      .catch(() => {
        alert('Please Fill Valid Details')
      })

  }

  return (
    <>
      <NavBar />
      <div className="mt-2 mx-3 p-3 border rounded">
        <div className="mb-6">
          <p className="font-bold text-3xl">Feedback Form</p>
          <p className="mt-1 font-semibold text-[#AAA7BA;] text-sm">Please give us your valuable feedback so we can serve you better</p>
        </div>
        <form onSubmit={onSubmit}>
          {/* <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1} / {steps.length}
          </div> */}
          {step}
          <div className="flex justify-center items-center mt-8">
            {!isFirstStep && (
              <button type="button" className="w-full text-xs font-semibold border rounded py-2 mx-1" onClick={back}>
                Back
              </button>
            )}

            <button type="submit" className="w-full bg-[#242733] text-xs py-2 mx-1 font-semibold uppercase text-white border rounded">{isLastStep ? "Submit" : "Next"}</button>

          </div>
        </form>
      </div>
    </>
  )
}

export default FeedbackForm;
