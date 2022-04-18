//หากเข้าที่ /foo โดยที่ยังไม่ Login จะ Redirect ไปให้ Login ก่อน แต่ถ้า Login แล้ว ก็จะแสดงข้อความคำว่า  Foo 

import Link from 'next/link'

const Navbar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-yellow-600 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
   
    <span className="font-semibold text-xl tracking-tight">Pizza</span>
    <img class="sm:w-1/3 sm:h-1/3 "blur-sm src="https://cdn-icons-png.flaticon.com/128/3595/3595455.png" />
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
     
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      Home
      </a>
      <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        SignIn
      </a>
      <a href="/register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        SignUp
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Menu
      </a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Order
      </a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/logout" classNameName="block py-2 pr-4 pl-3 text-gray-700 mt-4
               hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 
                 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
    </div>
    
  </div>
</nav>
    
         
        //       <nav classNameName="bg-white w-full border-gray-200 px-2 m:px-4 py-2.5 rounded  dark:bg-gray-800 top-0 fixed" >
         
        //  <div classNameName="container flex flex-wrap justify-between items-center mx-auto">
        //     <p classNameName="text-white text-lg">
        //         Pizza
        //     </p>
            
        //     <div classNameName="hidden w-full md:block md:w-auto" id="mobile-menu">
        //       <ul classNameName="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        //         <li>
        //           <a href="/" classNameName="block py-2 pr-4 pl-3 text-yellow  rounded md:bg-transparent 
        //           md:text-fuchsia-600 first-letter:md:p-0 dark:text-white" aria-current="page">Home</a>
        //         </li>
        //         <li>
        //           <a href="/login" classNameName="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent 
        //           md:text-fuchsia-600 first-letter:md:p-0 dark:text-white">Sign In</a>
        //         </li>
        //         <li>
        //           <a href="/register" classNameName="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent 
        //           md:text-fuchsia-600 first-letter:md:p-0 dark:text-white">Sign Up</a>
        //         </li>
        //         <li>
        //           <a href="/Menu" classNameName="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent 
        //           md:text-fuchsia-600 first-letter:md:p-0 dark:text-white">Menu</a>
        //         </li>
        //         <li>
        //           <a href="/Order" classNameName="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent 
        //           md:text-fuchsia-600 first-letter:md:p-0 dark:text-white">Order</a>
        //         </li>
        //         <li>
        //           <a href="/logout" classNameName="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent 
        //           md:text-fuchsia-600 first-letter:md:p-0 dark:text-white">Logout</a>
        //         </li>
        //         {/* <li>
        //           <a href="/logout" classNameName="block py-2 pr-4 pl-3 text-gray-700 
        //           hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 
        //           md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
        //         </li> */}
                
        //       </ul>
        //     </div>
        //  </div>
        // </nav>
               
          
        )
        
    
       
    export default Navbar


