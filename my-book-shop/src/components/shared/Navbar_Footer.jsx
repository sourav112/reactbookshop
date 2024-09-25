import React from 'react'
import { Routes } from '../../routes';
import { Link } from 'react-router-dom';
import logo from '../../assets/book_logo.png'

export default function Navbar_Footer() {
  return (
    <div>
    <footer class="w-full bg-white p-8">
  <div class="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
  <Link to={Routes.Home}><img src={logo} alt="keep" width="40" height="20" /></Link>
 
    <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          License
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Contribute
        </a>
      </li>
      <li>
        <a
          href="#"
          class="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Contact Us
        </a>
      </li>
    </ul>
  </div>
  <p class="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
    Copyright © 2024&nbsp; 
    <a href={Routes.Home} target="_blank" rel="noreferrer">Sourav Chakraborty,DoICT</a>.
  </p>
  </footer>
    </div>
  )
}
