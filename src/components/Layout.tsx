import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import BuildInfo from './BuildInfo'

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-background pb-4 sm:pb-6">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 overflow-auto p-6 pb-10">
          <Outlet />
        </main>
        <div className="px-6 pb-2">
          <BuildInfo />
        </div>
      </div>
    </div>
  )
}
