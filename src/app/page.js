import Head from "next/head";
import CustomDatePicker from "./components/CustomDatePicker";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#5B3F8C] to-[#6D2B8C] text-white animate-fadeIn">
      <Head>
        <title>Date Picker</title>
        <meta
          name="description"
          content="A reusable date picker with recurring dates"
        />
      </Head>
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <CustomDatePicker />
      </div>
    </div>
  );
}
