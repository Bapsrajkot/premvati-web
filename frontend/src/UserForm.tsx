import * as React from 'react';
import { useState } from 'react';

type UserData = {
  age: string
  gender: string
  order: string
  qualityfood: string
  tasteoffood: string
  servingmethod: string
  staffbehave: string
  cleanliness: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  age,
  gender,
  order,
  qualityfood,
  tasteoffood,
  servingmethod,
  staffbehave,
  cleanliness,
  updateFields,
}: UserFormProps) {

  // const [selectedDrink, setSelectedDrink] = React.useState<String>();

  // This function will be triggered when a radio button is selected
  // const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // setSelectedDrink(event.target.value);
  //   updateFields({ order: event.target.value })
  // };

  // const [selectedFood, setSelectedFood] = React.useState<String>();

  // // This function will be triggered when a radio button is selected
  // const radioHandlerFood = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // setSelectedDrink(event.target.value);
  //   updateFields({ qualityfood: event.target.value })
  // };


  return (
    <div>
      <div className="flex flex-col items-left justify-center  my-4">
        <label className="text-xs font-bold mb-1 text-[#232323]">Age<span className="text-red-600">*</span></label>

        <select className="border rounded p-2 font-semibold text-[#232323] text-xs" value={age} onChange={e => updateFields({ age: e.target.value })}>
          <option hidden> Choose Your Age</option>
          <option value="under 18">under 18</option>
          <option value="18-20">18 to 20</option>
          <option value="20-25">20 to 25</option>
          <option value="25-30">25 to 30</option>
          <option value="30-35">30 to 35</option>
          <option value="35-40">35 to 40</option>
          <option value="above 40">Above 40</option>
        </select>
      </div>
      <div className="flex flex-col items-left justify-center my-4">
        <label className="text-xs font-bold mb-1 text-[#232323]">Gender<span className="text-red-600">*</span></label>
        <select className="border rounded p-2 font-semibold text-[#232323] text-xs" value={gender} onChange={e => updateFields({ gender: e.target.value })}  >
          <option hidden> Choose Your Gender</option>
          <option defaultValue="Male" value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="flex flex-col items-left justify-center my-4">
        <label className="text-xs font-bold mb-1 text-[#232323]">Please Pick Any Appropriate Option <span className="text-red-600">*</span></label>
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-1 font-semibold text-[#232323] text-xs text-left"
                  >
                    Services
                  </th>
                  <th
                    scope="col"
                    className="py-1 font-semibold text-[#232323] text-xs text-center"
                  >
                    Excellent
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1 font-semibold text-[#232323] text-xs text-center"
                  >
                    Good
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1 font-semibold text-[#232323] text-xs text-center"
                  >
                    Fair
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-1 font-semibold text-[#232323] text-xs text-center"
                  >
                    Poor
                  </th>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-xs font-semibold text-[#232323;] ">
                    Order Method
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="ordermethod" type="radio" value="Excellent" id="excellent1" className='selectImg' onChange={e => updateFields({ order: e.target.value })} />
                      <label htmlFor="excellent1" className="excellent selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="ordermethod" type="radio" id="good1" value="good" className='selectImg' onChange={e => updateFields({ order: e.target.value })} />
                      <label htmlFor="good1" className="good selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="ordermethod" type="radio" id="fair1" value="fair" className='selectImg' onChange={e => updateFields({ order: e.target.value })} />
                      <label htmlFor="fair1" className="fair selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="ordermethod" type="radio" id="poor1" value="poor" className='selectImg' onChange={e => updateFields({ order: e.target.value })} />
                      <label htmlFor="poor1" className="poor selectLable" />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-xs font-semibold text-[#232323;] ">
                    Food Quality
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="qualityfood" type="radio" value="Excellent" id="excellent2" className='selectImg' onChange={e => updateFields({ qualityfood: e.target.value })} />
                      <label htmlFor="excellent2" className="excellent selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="qualityfood" type="radio" id="good2" value="good" className='selectImg' onChange={e => updateFields({ qualityfood: e.target.value })} />
                      <label htmlFor="good2" className="good selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="qualityfood" type="radio" id="fair2" value="fair" className='selectImg' onChange={e => updateFields({ qualityfood: e.target.value })} />
                      <label htmlFor="fair2" className="fair selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="qualityfood" type="radio" id="poor2" value="poor" className='selectImg' onChange={e => updateFields({ qualityfood: e.target.value })} />
                      <label htmlFor="poor2" className="poor selectLable" />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-xs font-semibold text-[#232323;] ">
                    Taste of Food
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="tasteoffood" type="radio" value="Excellent" id="excellent3" className='selectImg' onChange={e => updateFields({ tasteoffood: e.target.value })} />
                      <label htmlFor="excellent3" className="excellent selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="tasteoffood" type="radio" id="good3" value="good" className='selectImg' onChange={e => updateFields({ tasteoffood: e.target.value })} />
                      <label htmlFor="good3" className="good selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="tasteoffood" type="radio" id="fair3" value="fair" className='selectImg' onChange={e => updateFields({ tasteoffood: e.target.value })} />
                      <label htmlFor="fair3" className="fair selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="tasteoffood" type="radio" id="poor3" value="poor" className='selectImg' onChange={e => updateFields({ tasteoffood: e.target.value })} />
                      <label htmlFor="poor3" className="poor selectLable" />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-xs font-semibold text-[#232323;] ">
                    Serving Method
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="servingmethod" type="radio" value="Excellent" id="excellent4" className='selectImg' onChange={e => updateFields({ servingmethod: e.target.value })} />
                      <label htmlFor="excellent4" className="excellent selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="servingmethod" type="radio" id="good4" value="good" className='selectImg' onChange={e => updateFields({ servingmethod: e.target.value })} />
                      <label htmlFor="good4" className="good selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="servingmethod" type="radio" id="fair4" value="fair" className='selectImg' onChange={e => updateFields({ servingmethod: e.target.value })} />
                      <label htmlFor="fair4" className="fair selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="servingmethod" type="radio" id="poor4" value="poor" className='selectImg' onChange={e => updateFields({ servingmethod: e.target.value })} />
                      <label htmlFor="poor4" className="poor selectLable" />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-xs font-semibold text-[#232323;] ">
                    Staff Behaviour
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="staffbehave" type="radio" value="Excellent" id="excellent5" className='selectImg' onChange={e => updateFields({ staffbehave: e.target.value })} />
                      <label htmlFor="excellent5" className="excellent selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="staffbehave" type="radio" id="good5" value="good" className='selectImg' onChange={e => updateFields({ staffbehave: e.target.value })} />
                      <label htmlFor="good5" className="good selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="staffbehave" type="radio" id="fair5" value="fair" className='selectImg' onChange={e => updateFields({ staffbehave: e.target.value })} />
                      <label htmlFor="fair5" className="fair selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="staffbehave" type="radio" id="poor5" value="poor" className='selectImg' onChange={e => updateFields({ staffbehave: e.target.value })} />
                      <label htmlFor="poor5" className="poor selectLable" />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-xs font-semibold text-[#232323;] ">
                    Cleanliness
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="cleanliness" type="radio" value="Excellent" id="excellent6" className='selectImg' onChange={e => updateFields({ cleanliness: e.target.value })} />
                      <label htmlFor="excellent6" className="excellent selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm text-gray-800 ">
                    <p className="flex items-center justify-center">
                      <input name="cleanliness" type="radio" id="good6" value="good" className='selectImg' onChange={e => updateFields({ cleanliness: e.target.value })} />
                      <label htmlFor="good6" className="good selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="cleanliness" type="radio" id="fair6" value="fair" className='selectImg' onChange={e => updateFields({ cleanliness: e.target.value })} />
                      <label htmlFor="fair6" className="fair selectLable" />
                    </p>
                  </td>
                  <td className="px-2 py-1 text-sm font-medium text-right ">
                    <p className="flex items-center justify-center">
                      <input name="cleanliness" type="radio" id="poor6" value="poor" className='selectImg' onChange={e => updateFields({ cleanliness: e.target.value })} />
                      <label htmlFor="poor6" className="poor selectLable" />
                    </p>
                  </td>
                </tr>
              </tbody>




            </table>
          </div>
        </div>
      </div>

      {/* <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl> */}
    </div>
  )
}
