import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import BuildInfo from './BuildInfo'

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-background pb-4 sm:pb-6">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        <Header />
        <main className="flex-1 overflow-auto px-4 sm:px-6 lg:px-8 pb-10 pt-6">
          <div className="max-w-screen-xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
        <div className="px-4 sm:px-6 lg:px-8 pb-2">
          <div className="max-w-screen-xl mx-auto w-full">
            <BuildInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
