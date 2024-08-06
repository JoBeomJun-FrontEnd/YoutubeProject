import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export default function Navbar() {
  return (
    <header>
      <form>
        <input type="text" />
        <button>
          <IoSearchOutline />
        </button>
      </form>
    </header>
  );
}
