import React from 'react'

const BuilderTokn = () => {
  return (
    <>
    <div className="text-center mt-16">
  <h1 className="text-black text-3xl font-extrabold leading-5 sm:text-4xl lg:text-5xl lg:leading-none">
    <font style={{ verticalAlign: "inherit" }}>
      <font style={{ verticalAlign: "inherit" }}>Token Builder</font>
    </font>
  </h1>
  <p className="mt-3 mx-auto max-w-4xl text-gray-600 text-xl leading-7 sm:mt-5 sm:text-2xl sm:leading-8">
    <font style={{ verticalAlign: "inherit" }}>
      <font style={{ verticalAlign: "inherit" }}>
        Easily deploy Smart Contracts for any Token right from your browser.
      </font>
    </font>
  </p>
</div>

{/* connect */}

<div className="max-w-3xl mx-auto bg-white mt-10 shadow rounded-xl overflow-hidden">
  <div className="p-2 ">
    <div className="flex justify-center">
      <div className="iekbcc0 ju367va ju367v1n">
        <button
          className="connect_button mt-0"
          type="button"
          id="btn-connect"
          color="white"
        >
          <span className=" whitespace-nowrap  cursor-pointer focus:shadow-outline-blue inline-flex items-center justify-center px-3 py-2 w-full text-blue-700 text-sm font-medium leading-4 bg-blue-100 active:bg-blue-200 hover:bg-blue-50 border focus:border-blue-300 border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Wallet Connect</font>
            </font>
          </span>
        </button>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default BuilderTokn