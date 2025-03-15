import React, { useState } from "react";
import { IonIcon } from '@ionic/react';
import { lockClosed, person, mail, close } from 'ionicons/icons';

function App() {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const togglePopup = () => {
    setIsPopupActive(!isPopupActive);
  };

  const toggleForm = () => {
    setIsRegisterActive(!isRegisterActive);
  };

  return (
    <div className="App">
      <header className="absolute top-0 left-0 w-full p-4 px-24 flex justify-between items-center z-10">
        <h2 className="text-2xl font-extrabold text-white">Logo</h2>
        <nav className="flex items-center ml-auto">
          <a href="#" className="text-white text-lg font-medium mx-10">Home</a>
          <a href="#" className="text-white text-lg font-medium mx-10">About</a>
          <a href="#" className="text-white text-lg font-medium mx-10">Services</a>
          <a href="#" className="text-white text-lg font-medium mx-10">Contact</a>
        </nav>
        <button className="w-32 h-12 border-2 border-white rounded-lg text-white font-medium hover:bg-white hover:text-gray-800 transition duration-500" onClick={togglePopup}>
          Login
        </button>
      </header>

      <div className={`relative w-96 h-[440px] bg-transparent border-2 border-white/50 rounded-2xl backdrop-blur-xl shadow-xl flex justify-center items-center overflow-hidden transform transition-all duration-500 ${isPopupActive ? 'scale-100' : 'scale-0'} ${isRegisterActive ? 'h-[520px]' : ''}`}>
        <span className="absolute top-0 right-0 w-12 h-12 bg-gray-800 text-white flex justify-center items-center text-2xl rounded-bl-2xl cursor-pointer z-10" onClick={togglePopup}>
          <IonIcon icon={close} />
        </span>

        {/* Login Form */}
        <div className={`w-full p-10 transition-all ${isRegisterActive ? 'transform translate-x-full' : 'transform translate-x-0'}`}>
          <h2 className="text-2xl text-gray-800 text-center">Login</h2>
          <form>
            <div className="relative w-full h-12 border-b-2 border-gray-800 mt-8">
              <IonIcon icon={mail} className="absolute right-2 top-2 text-gray-800 text-lg" />
              <input type="text" required className="w-full h-full bg-transparent border-none outline-none text-gray-800 font-semibold pl-4" />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 font-medium">Email</label>
            </div>
            <div className="relative w-full h-12 border-b-2 border-gray-800 mt-8">
              <IonIcon icon={lockClosed} className="absolute right-2 top-2 text-gray-800 text-lg" />
              <input type="password" required className="w-full h-full bg-transparent border-none outline-none text-gray-800 font-semibold pl-4" />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 font-medium">Password</label>
            </div>
            <div className="flex justify-between items-center mt-4">
              <label className="text-sm font-medium text-gray-800"><input type="checkbox" /> Remember me</label>
              <a href="#" className="text-gray-800">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full h-12 bg-gray-800 text-white font-medium rounded-lg mt-6">Login</button>
            <div className="text-center text-sm text-gray-800 mt-4">
              <p>Don't have an account? <a href="#" onClick={toggleForm} className="font-semibold">Register</a></p>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className={`absolute w-full p-10 transition-all ${!isRegisterActive ? 'transform translate-x-full' : 'transform translate-x-0'}`}>
          <h2 className="text-2xl text-gray-800 text-center">Registration</h2>
          <form>
            <div className="relative w-full h-12 border-b-2 border-gray-800 mt-8">
              <IonIcon icon={person} className="absolute right-2 top-2 text-gray-800 text-lg" />
              <input type="text" required className="w-full h-full bg-transparent border-none outline-none text-gray-800 font-semibold pl-4" />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 font-medium">Username</label>
            </div>
            <div className="relative w-full h-12 border-b-2 border-gray-800 mt-8">
              <IonIcon icon={mail} className="absolute right-2 top-2 text-gray-800 text-lg" />
              <input type="text" required className="w-full h-full bg-transparent border-none outline-none text-gray-800 font-semibold pl-4" />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 font-medium">Email</label>
            </div>
            <div className="relative w-full h-12 border-b-2 border-gray-800 mt-8">
              <IonIcon icon={lockClosed} className="absolute right-2 top-2 text-gray-800 text-lg" />
              <input type="password" required className="w-full h-full bg-transparent border-none outline-none text-gray-800 font-semibold pl-4" />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 font-medium">Password</label>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-800 font-medium">
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="w-full h-12 bg-gray-800 text-white font-medium rounded-lg mt-6">Register</button>
            <div className="text-center text-sm text-gray-800 mt-4">
              <p>Already have an account? <a href="#" onClick={toggleForm} className="font-semibold">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
