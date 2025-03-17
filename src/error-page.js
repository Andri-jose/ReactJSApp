import React from "react";
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function ErrorPage() {
  const [selectedMenu, setSelectedMenu] = useOutletContext();
  const navigate = useNavigate();

  return (
    <div style={style.container}>
      <div class="text-center">
        <p class="text-base font-semibold text-sky-600">404</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
        <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            class="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer"
            onClick={() => {
              setSelectedMenu(0);
              navigate('/');
            }}
          >
            Go back home
          </a>
          <a
            class="text-sm font-semibold text-gray-900 cursor-pointer"
            onClick={() => {
              setSelectedMenu(2);
              navigate('/contact');
            }}
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const style = {
  container: {
    height: 'calc(100vh - 56px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
};