import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <body >
      <div className={styles.header}>
        <Navbar />
      </div>
      <div >
        <h1 className="text-7xl items-center">Pizza</h1>
      </div>


  <div className=" flex flex-row items-center left-5">
        <div className="relative m-4 border-2 border-dashed p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="pz2.jpg"

            alt="Sample image"

          />
          <br></br><br></br><br></br><br></br>
          <div className={styles.p}>
          
              <p className="text-xl items-center font-bold"> Pizza Hawaiian  </p>
          
            <h2>249 Baht</h2>
            <button  type="button"
            className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
            <a href="/Order" >Add</a>
          </button>
          </div>
        </div>

        
        <div className="relative m-4 border-2 border-dashed p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="pz3.jpg"

            alt="Sample image"

          />
        
          <div className={styles.p}>
            <a href="/k5" className={styles.card}>
              <p className="text-xl items-center font-bold"> Pizza Double Pepperoni </p>
            </a>
            <h2>249 Baht</h2>
            <button  type="button"
            className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
            <a href="/Order" >Add</a>
          </button>
          </div>
        </div>

       
        <div className="relative m-4 border-2 border-dashed p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="pz4.jpg"

            alt="Sample image"

          />
          <div className={styles.p}>
            <a href="/k5" className={styles.card}>
              <p className="text-xl items-center font-bold"> Pizza Double Cheese </p>
            </a>
            <h2>249 Baht</h2>
            <button  type="button"
            className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
            <a href="/Order" >Add</a>
          </button>
          </div>
      

      
      </div>
</div>
      
    </body>
  );
}
