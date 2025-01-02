'use client';

import DogImageViewer from "./components/DogViewer";

export default function Home() {
    return (
      <div className="flex items-center justify-center h-screen">
        <main>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">HTTP Dog</h1>
            <img className="rounded-md" src="/dog.gif"></img>
            <h2 className="text-2xl font-bold mb-3 p-2">Coloque um status HTTP</h2>
            <DogImageViewer />
          </div>
        </main>
      </div>
    );
  }