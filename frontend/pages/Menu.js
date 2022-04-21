import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Menu() {
  const CodeName1 = "Pizza Hawaiian";
  const copyText1 = () => {
    navigator.clipboard.writeText(CodeName1);
  };
  const CodeName2 = "Pizza Double Pepperoni";
  const copyText2 = () => {
    navigator.clipboard.writeText(CodeName2);
  };
  const CodeName3 = "Pizza Double Chesse";
  const copyText3 = () => {
    navigator.clipboard.writeText(CodeName3);
  };
  const CodeName4 = "Pizza Chicken Bacon";
  const copyText4 = () => {
    navigator.clipboard.writeText(CodeName4);
  };
  const CodeName5 = "Pizza Bacon Pickle ";
  const copyText5 = () => {
    navigator.clipboard.writeText(CodeName5);
  };
  return (
    <body >
      <div className={styles.header} >
        <Navbar />
      </div>
      <div className="h-screen bg-yellow-200 flex flex-col items-center">
        <h1 className="m-8 text-black text-4xl drop-shadow-lg">
          Pizza
        </h1>


      <div className=" flex justify-center mb-8">
        <div className="relative m-4  p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="pz2.jpg"

            alt="Sample image"

          />
          <br></br><br></br><br></br><br></br>
          <div className={styles.p}>



            <h2>249 Baht</h2><a href="./Order">
              <button type="button" onClick={copyText1}
                className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
                <p className="text-xl items-center font-bold"> Pizza Hawaiian </p>

              </button></a>
          </div>
        </div>


        <div className="relative m-4  p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="pz3.jpg"

            alt="Sample image"

          />

          <div className={styles.p}>



            <h2>249 Baht</h2><a href="./Order">
              <button type="button" onClick={copyText2}
                className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
                <p className="text-xl items-center font-bold"> Pizza Double Pepperoni </p>
              </button></a>
          </div>
        </div>


        <div className="relative m-4  p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="pz4.jpg"

            alt="Sample image"

          />
          <div className={styles.p}>


            <h2>249 Baht</h2><a href="./Order">
              <button type="button" onClick={copyText3}
                className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
                <p className="text-xl items-center font-bold"> Pizza Double Cheese </p>

              </button></a>
          </div>

        </div>

        <div className="relative m-4  p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="pz5.jpg"

            alt="Sample image"

          />
          <div className={styles.p}>


            <h2>249 Baht</h2><a href="./Order">
              <button type="button" onClick={copyText4}
                className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
                <p className="text-xl items-center font-bold"> Pizza Chicken Bacon  </p>

              </button></a>
          </div>

        </div>


        <div className="relative m-4  p-4 flex flex-col sm:w-1/6 sm:h-1/6">
          <img
            src="pz6.jpg"

            alt="Sample image"

          />
          <div className={styles.p}>


            <h2>249 Baht</h2><a href="./Order">
              <button type="button" onClick={copyText5}
                className="bg-amber-600 mr-4 p-2 hover:text-[#EEEEEE] rounded-lg drop-shadow-lg font-bold font-display" >
                <p className="text-xl items-center font-bold"> Pizza Bacon Pickle  </p>

              </button></a>
          </div>

        </div>
      </div>

      </div>
     
    </body>
  );
}
