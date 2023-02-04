import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import camera from './assets/camera.svg';


type AccountData = {
  likedproduct: string
  suggestion: string
  contactnumber: string
  image: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({
  likedproduct,
  suggestion,
  contactnumber,
  image,
  updateFields,
}: AccountFormProps) {

  const [img, setImg] = useState(null);
  const [openCamera, setCamera] = useState(false);
  const webcamRef: any = useRef<HTMLLinkElement>(null);


  const videoConstraints = {
    width: 180,
    height: 320,

    // FRONT CAMERA
    // facingMode: "user",

    // BACK CAMERA
    facingMode: { exact: "environment" },
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    console.log(image);
    updateFields({ image: imageSrc })
    
  }, [webcamRef, setImg]);



  return (
    <div>
      <div className="flex flex-col items-left justify-center  my-2">
        <label className="text-xs font-bold mb-1 text-[#232323]">Any Food Product Of Premvati Which You Like Most?</label>
        <input className="border rounded p-2 text-xs"
          type="text"
          value={likedproduct}
          onChange={e => updateFields({ likedproduct: e.target.value })}
        />
      </div>
      <div className="flex flex-col items-left justify-center  my-2">
        <label className="text-xs font-bold mb-1 text-[#232323]">Any Suggestion/Comment For Us?</label>
        <input className="border rounded p-2 text-xs"
          type="text"
          value={suggestion}
          onChange={e => updateFields({ suggestion: e.target.value })}
        />
      </div>
      <div className="flex flex-col items-left justify-center  my-2">
        <label className="text-xs font-bold mb-1 text-[#232323]">Contact Number (Not Mandatory)</label>
        <input className="border rounded p-2 text-xs"
          type="string"
          value={contactnumber}
          onChange={e => updateFields({ contactnumber: e.target.value })}
          placeholder="9099990666"
          maxLength={10}
          pattern="[0-9]+"
        />
      </div>
      <div className="flex flex-col items-left justify-center  my-2">
        <label className="text-xs font-bold mb-1 text-[#232323]">Upload Image</label>
        {openCamera ? (
          <div className="Container">
            {img === null ? (
              <>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  width="100%"
                  height={180}
                  mirrored={false}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />               
                <div className="bg-blue-600 text-white font-semibold rounded py-2 px-4"  onClick={capture} >Capture photo</div>
              </>
            ) : (
              <>
                <img src={img} alt="screenshot" />
                <div className="bg-blue-600 text-white font-semibold rounded py-2 px-4" onClick={() => setImg(null)}>Retake</div>
              </>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center border rounded p-2 py-8 cursor-pointer my-2" onClick={() => setCamera(true)}>
            <img src={camera} alt="00" />
            <div className='text-[#AAA7BA] text-xs pt-2 font-semibold'>
              Click Image
            </div>
          </div>
        )
      }
      </div>

      {/* {img && (
        <img
          src={img} />
      )} */}

    </div>
  )
}
