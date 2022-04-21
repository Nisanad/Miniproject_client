import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import renderTask from "./Order"

export default function Menu() {


    return (
        <body >
            <div className={styles.header} >
                <Navbar />
            </div>
            <div className="h-screen bg-yellow-200 flex flex-col items-center">
                <h1 className="m-8 text-indigo-800 text-4xl drop-shadow-lg">
                    Total Order
                </h1>
                <div className="flex w-2/3 justify-center mb-8">
                </div>

            </div>

            




        </body >
    );

};