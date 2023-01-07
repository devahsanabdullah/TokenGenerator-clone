import React,{useState} from 'react'
import {Field, Formik,Form,FieldArray,useField, ErrorMessage,getIn} from 'formik'

import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'

import BuilderTokn from './BuilderTokn';

import {ValdationComp} from './ValidationComp'
import moment from 'moment-timezone';



const TokenInfo = () => {
 
  const [decimal, setDecimal] = useState(false);
  const [lockVest, setLockvest] = useState(false);
  const [value, setValue] = React.useState(dayjs());


  function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return {
        border: '1px solid red'
      }
    }
  }


 
  const stylePara="text-[#7e88c3] pt-4 font-medium text-base leading-6 font-sans";
   
  return (
    <>
    
 <BuilderTokn />
 

 <Formik
       initialValues={{tokenName:"",
       tokenSymbol:"",
       maximumSupply:0,
       initialSupply:0,
       initialVesting:0,
       decimal:0,
       unlimitedSupply:false,
       mintingSupport:false,
        tge: [
        {
        
          date:Date,
          vesting: 0,
        },
      ],
   }}

   validationSchema={ValdationComp}
       onSubmit={(values, actions) => {
        
           alert(JSON.stringify(values, null, 2));
          
           
       }}
     >
       {({values,handleSubmit,setFieldValue,handleBlur,handleChange,errors}) => (
          <Form onSubmit={handleSubmit}>

<div className="max-w-3xl mx-auto mt-12 bg-white  shadow rounded-xl overflow-hidden">
  <div className="p-4 border-b border-gray-200">
    <div className="flex justify-between align-middle">
      <div>
        <h3 className="text-gray-900 text-lg font-medium leading-6">
          
           Token Information
          
        </h3>
        <p className="text-gray-500 text-sm">
         
              Basic details about your token.
           
        </p>
      </div>
      <div className="flex justify-center align-middle" />
    </div>
  </div>
  <div className="p-4">
    <div className="grid gap-4 grid-cols-2">
      <div className="col-span-2 md:col-span-1">
        <div>
          <label
            htmlFor="token_name"
            className="block text-gray-700 text-sm font-medium"
          >
           Token Name
            
          </label>
          <Field
            type="text"
            name="tokenName"
            placeholder=""
            className="text-black block mt-3 w-full p-3  border-[#dfe3fa] border-solid border-2 focus:border-blue-500  outline-none rounded-md shadow-sm focus:ring-blue-500 sm:text-sm"
         
        
          />
          <p className="mt-3 text-gray-500 text-sm">
           
                A name for your token.
             
          </p>
         
          <div>
          <ErrorMessage
                          name="tokenName"
                          component="div"
                          className="text-red-400"
                        />
          
              
             
          </div>
          <p />
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <div>
          <label
            htmlFor="token_symbol"
            className="block text-gray-700 text-sm font-medium"
          >
         Token Symbol
            
          </label>
          <Field
            type="text"
            name="tokenSymbol"
            placeholder=""
            className="text-black block mt-3  border-[#dfe3fa] border-solid border-2 w-full p-3 focus:border-blue-500  outline-none rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
         
            minLength={3}
            maxLength={9}
            defaultValue=""
          />
          
          <p className="mt-3 text-gray-500 text-sm">
            
                Symbol for your token, alphanumeric only.
              
          </p>
          
          <div>
          <ErrorMessage
                          name="tokenSymbol"
                          component="div"
                          className="text-red-400"
                        />
             
             
          </div>
          <p />
        </div>
      </div>
    </div>
  </div>
</div>
{/* token supply button show this this field all mentory  */}
<div className="max-w-3xl mx-auto mt-12 bg-white  shadow rounded-xl overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between align-middle">
            <div>
              <h3 className="text-gray-900 text-lg font-medium leading-6">
                Token Features
              </h3>
              <p className="text-gray-500 text-sm" />
            </div>
            <div className="flex justify-center align-middle" />
          </div>
        </div>
        <div className="p-4">
          <div className="grid gap-4 grid-cols-1">
            <div className="flex justify-between">
              <div>
                <label
                  htmlFor="token_symbol"
                  className="text-md block text-gray-700 font-medium"
                >
                  All Functionality (BEP-20 / ERC-20 Standard)
                </label>
              </div>
              <div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    name="allFunctionality"
                    type="checkbox"
                    id="checked-toggle"
                    className="sr-only peer"
                    defaultValue=""
                   checked={true}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                </label>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <label
                  htmlFor="token_symbol"
                  className="text-md block text-gray-700 font-medium"
                >
                  Minting &amp; Burning Support
                </label>
              </div>
              <div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    name="mintingSupport"
                    type="checkbox"
                    id="checked-toggle"
                    className="sr-only peer"
                    defaultValue=""
                    onBlur={handleBlur}
                    onChange={handleChange}
                    checked={values.unlimitedSupply?true:values.mintingSupport}
                    // onChange={changeMiningBtn}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                </label>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <label
                  htmlFor="token_symbol"
                  className="text-md block text-gray-700 font-medium"
                />
                Customize Decimals
              </div>
              <div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    name="decimals"
                    type="checkbox"
                    id="checked-toggle"
                    className="sr-only peer"
                    defaultValue=""
                   
                     onClick={() => setDecimal((current) => !current)}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                </label>
              </div>
            </div>
            <div className="flex justify-between border border-gray-100" />
            <div className="flex justify-between">
              <div>
                <label
                  htmlFor="token_symbol"
                  className="text-md block text-gray-700 font-medium"
                >
                  Unlimited Supply
                </label>
              </div>
              <div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    name="unlimitedSupply"
                    type="checkbox"
                    id="checked-toggle"
                    className="sr-only peer"
                    defaultValue=""
                    onBlur={handleBlur}
                    onChange={handleChange}
                    checked={values.unlimitedSupply}
                    // onChange={changeSupply}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                </label>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <label
                  htmlFor="token_symbol"
                  className="text-md block text-gray-700 font-medium"
                >
                  Vesting Lock
                </label>
              </div>
              <div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    name="vestingLock"
                    type="checkbox"
                    id="checked-toggle"
                    className="sr-only peer"
                    onClick={() => setLockvest((current) => !current)}
                    defaultValue=""
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Token supply card  */}
<div className="max-w-3xl mx-auto bg-white mt-10 shadow rounded-xl overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between align-middle">
            <div>
              <h3 className="text-gray-900 text-lg font-medium leading-6">
                Token Supply
              </h3>
              <p className="text-gray-500 text-sm">
                Let's set the supply options for your token.
              </p>
            </div>
            <div className="flex justify-center align-middle" />
          </div>
        </div>
        <div className="p-4">
          <div className="grid gap-4 grid-cols-2">
            <div className="col-span-2">
              <div>
                <label
                  htmlFor="supply_initial"
                  className="block text-gray-700 text-sm font-medium"
                >
                  Initial Supply
                </label>
                <Field
                  type="number"
                  name="initialSupply"
                  className="text-black block mt-3  border-[#dfe3fa] border-solid border-2 w-full p-3 focus:border-blue-500  outline-none rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                  defaultValue={0}
                  min="0"
                    step="1"
                />
                <p className="mt-1 text-gray-500 text-sm">
                  Starting number of supply of your token, will be placed in
                  your wallet.
                </p>
                 <ErrorMessage
                          name={`initialSupply`}
                          component="div"
                          className="text-red-400"
                        />
              </div>
             
             {values.mintingSupport? <div className="pt-3">
                  <label
                    htmlFor="supply_initial"
                    className="block text-gray-700 text-sm font-medium"
                  >
                    Maximum Supply
                  </label>
                  <Field
                    type="number"
                    className="text-black block mt-3  border-[#dfe3fa] border-solid border-2 w-full p-3 focus:border-blue-500  outline-none rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                    name="maximumSupply"
                    defaultValue={0}
                    min="0"
                    step="1"
                 
                  />
                  <p className="mt-1 text-gray-500 text-sm">
                    Maximum number of supply of your token, will be placed in
                    your wallet.
                  </p>
                  <ErrorMessage
                          name={`maximumSupply`}
                          component="div"
                          className="text-red-400"
                        />
                </div>:null}
             
            </div>
          </div>
        </div>
      </div>

      {/* field Array in token */}
      {lockVest?<div className="max-w-3xl w-full mx-auto bg-white mt-10 shadow rounded-xl overflow-hidden p-3">
  <div>
    <label
      htmlFor="supply_initial"
      className="block text-gray-700 text-sm font-medium"
    >
      TGE
    </label>
    <div className="relative">
      <Field
        type="number"
        name="initialVesting"
        className="text-black block mt-3  border-[#dfe3fa] border-solid border-2 w-full p-3 focus:border-blue-500  outline-none rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
        max={100}
        defaultValue={0}
      />
      <p className="text-black font-bold  absolute left-12 top-[20%]">%</p>
    </div>
    <p className="mt-1 text-gray-500 text-sm">
      Percentage of tokens which will be unlocked by the time of creation.
    </p>
    <p className="text-red-500 text-xs" />
 </div>
<FieldArray name="tge">
              {({ insert, remove, push }) => (
                <div>
                  {values.tge.length > 0 &&
                    values.tge.map((friend, index) => (
                      <div
                      className="grid grid-cols-5 mt-2  gap-3 "
                      key={index}
                    >
                     
                      <div className="flex flex-col col-span-2 justify-start " >
                      <p className={`${stylePara}  p-0`}>Unlock Time</p>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
     
        value={value}
        minDateTime={dayjs()}
      
        type="date"
        
        onChange={(newValue) => {
          setValue(newValue);
        
          setFieldValue(`tge.${index}.date`,newValue)
        }}
      />
    </LocalizationProvider>
                
                     
                       
                      </div>
                       <div className='col-span-2'>
                                           <p className={`${stylePara}  ml-4 w-12`}>Vesting</p>
                                              <Field
                                                name={`tge.${index}.vesting`}
                                                className="text-black block  h-14 border-[#dfe3fa] border-solid border-2 w-full p-3 focus:border-blue-500  outline-none rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                                              
                                                min="1"
                                                step="1"
                                              
                                                style={getStyles(errors, `tge.${index}.vesting`)}
                                    
                                                type="number"
                                              /> 
                                            
                                              </div>





                      <div className="flex justify-center items-cente pt-12">
                    
                        <button
                          type="button"
                          className="secondary text-red-600"
                          onClick={() => remove(index)}
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div >
                    ))}
                    <div className='flex flex-col'>
                      
                    
                      { (values.initialVesting)+(values.tge.reduce((accumulator, object,index) => {
     return accumulator +  object.vesting      }, 0))===100?"":<div className='py-5 text-red-500 flex justify-start w-80'>The Sum of tge and Vestings should be equal to 100%
     Currently it is exceding 100%</div>
     }
     <div className='flex justify-center'>
                  <button
                    type="button"
                    className="bg-blue-500 text-white text-center border rounded-md p-2 font-bold mt-4 hover:scale-105"
                  
                    
                    onClick={() => push({ date:"", vesting:0 })}
                  >
                     Add Vesting
                  </button>
                  </div>
                  </div>
                </div>
              )}
            </FieldArray>
</div>:null}
{/* decimal data show  */}
{decimal?<div>
          <div className="max-w-3xl mx-auto bg-white mt-10 shadow rounded-xl overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between align-middle">
                <div>
                  <h3 className="text-gray-900 text-lg font-medium leading-6">
                    Decimals
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Configure the decimals in your token
                  </p>
                </div>
                <div className="flex justify-center align-middle" />
              </div>
            </div>
            <div className="p-4">
              <div className="grid gap-4 grid-cols-2">
                <div className="col-span-2">
                  <div>
                    <label
                      htmlFor="liq_p"
                      className="block text-gray-700 text-sm font-medium"
                    >
                      Decimals
                    </label>
                    <div className="flex gap-2 mt-1">
                      <div className="flex-grow flex-shrink-0">
                        {/* slider */}
                        <Box >
                          <Slider
                            aria-label="Temperature"
                            defaultValue={18}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={6}
                            max={18}
                            onChange={(newValue) => {
                             
                             
                              setFieldValue(`decimal`,newValue.target.value)
                            }}
                          />
                        </Box>
                      </div>
                      <div className="grid items-center justify-center w-8 h-8">
                        
                      </div>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm">
                      The decimal units for your token. If you are not sure, use
                      18.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>:null}
          
      {/* deplopy token */}

      <div>
  <div className="max-w-3xl mx-auto bg-white mt-10 shadow rounded-xl overflow-hidden">
    <div className="p-4 border-b border-gray-200">
      <div className="flex justify-between align-middle">
        <div>
          <h3 className="text-gray-900 text-lg font-medium leading-6">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                🚀 Ready to deploy?
              </font>
            </font>
          </h3>
          <p className="text-gray-500 text-sm" />
        </div>
        <div className="flex justify-center align-middle" />
      </div>
    </div>
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2">
        <div className="flex flex-col col-span-2 justify-center text-center">
          <span className="text-red-500 font-bold">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Connect Metamask to show pricing.
              </font>
            </font>
          </span>
        </div>
        <div className="flex col-span-2">
          <div className="flex-grow flex-shrink-0">
            <button
              className="focus:shadow-outline-blue inline-flex items-center justify-center px-3 py-2 w-full text-blue-700 text-sm cursor-pointer font-medium leading-4 bg-blue-100 active:bg-blue-200 hover:bg-blue-50 border focus:border-blue-300 border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out disabled:opacity-50"
              aria-label="Login"
              type='submit'
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="mr-2 w-6 h-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.491 1c-3.598.004-6.654 1.983-8.835 4H1.5l-.5.5v3l.147.354.991.991.001.009 4 4 .009.001.999.999L7.5 15h3l.5-.5v-4.154c2.019-2.178 3.996-5.233 3.992-8.846l-.501-.5zM2 6h2.643a23.828 23.828 0 0 0-2.225 2.71L2 8.294V6zm5.7 8l-.42-.423a23.59 23.59 0 0 0 2.715-2.216V14H7.7zm-1.143-1.144L3.136 9.437C4.128 8 8.379 2.355 13.978 2.016c-.326 5.612-5.987 9.853-7.421 10.84zM4 15v-1H2v-2H1v3h3zm6.748-7.667a1.5 1.5 0 1 0-2.496-1.666 1.5 1.5 0 0 0 2.495 1.666z"
                />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


          </Form>
       )}
     </Formik>
 



















           
      

   </>

  )


}

export default TokenInfo