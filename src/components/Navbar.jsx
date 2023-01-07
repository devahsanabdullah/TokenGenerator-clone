import React from 'react'

const Navbar = () => {
  return (
      <>
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-lg ">
  <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex">
        <div className="flex cursor-pointer">
          <a href="http://token.mcret.com/" className=" self-center">
            <div className="flex flex-shrink-0 items-center">
              <div className=" w-8 h-8">
                <div
                  style={{
                    display: "inline-block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box",
                    margin: 0
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      maxWidth: "100%"
                    }}
                  >
                    <img src='images\Logo (1).webp' alt='logo'/>
               
                  </div>
                 
                 
                  
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

      </>
  )
}

export default Navbar