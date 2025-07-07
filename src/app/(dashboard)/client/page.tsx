import ClientSecurity from '@/components/clientSecurity/ClientSecurity'
import React from 'react'

const ClientPage = () => {
  return (
    <div className="">
      <p className="font-semibold text-2xl p-4">Client Name</p>
      <ClientSecurity />
    </div>
  )
}

export default ClientPage