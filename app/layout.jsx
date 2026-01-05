'use client'

import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'react-toastify/dist/ReactToastify.css'
import '../src/index.css'
import TokenContextProvider from '../src/Context/TokenContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import CartContextProvider from '../src/Context/CartContext'
import WishlistContextProvider from '../src/Context/WishlistContext'
import OrderContextProvider from '../src/Context/OrderContext'
import { ToastContainer } from 'react-toastify'
import { Offline } from 'react-detect-offline'

export const dynamic = 'force-dynamic'

let query = new QueryClient()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="FreshCart Ecommerce App" />
        <title>FreshCart App | Ecommerce</title>
      </head>
      <body>
        <TokenContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <OrderContextProvider>
                <QueryClientProvider client={query}>
                  {children}
                  <ToastContainer theme="colored" autoClose="1000" />
                  <Offline>
                    <div className="offline bg-danger">
                      <p className="mb-0">You're offline now!</p>
                    </div>
                  </Offline>
                </QueryClientProvider>
              </OrderContextProvider>
            </WishlistContextProvider>
          </CartContextProvider>
        </TokenContextProvider>
      </body>
    </html>
  )
}
