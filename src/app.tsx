import { ReactComponent as Logo } from '@/assets/logo.svg'
import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <header className='flex flex-col items-center gap-4'>
        <Logo className='h-auto w-80 animate-spin' title='logo' />
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
          className='h-10 w-fit rounded bg-sky-400 px-4 py-2 text-white transition-colors hover:bg-sky-500'
          onClick={() => setCount((count) => count + 1)}
          type='button'
        >
          count is: {count}
        </button>
      </header>
    </div>
  )
}
