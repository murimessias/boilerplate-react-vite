import { ReactComponent as Logo } from '@/assets/logo.svg'
import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <header className='flex flex-col items-center gap-4'>
        <Logo className='w-80 h-auto animate-spin' title='logo' />
        <div className='space-y-1 text-center'>
          <h1 className='text-2xl font-bold'>
            Hello Vite + React! + TailwindCSS
          </h1>
          <p>
            Edit <code className='font-mono text-sky-500'>app.tsx</code> and
            save to test HMR updates.
          </p>
        </div>
        <button
          className='h-10 w-fit py-2 px-4 bg-sky-400 rounded hover:bg-sky-500 transition-colors text-white'
          onClick={() => setCount((count) => count + 1)}
          type='button'
        >
          count is: {count}
        </button>
      </header>
    </div>
  )
}
