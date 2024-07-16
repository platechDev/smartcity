'use client'
import React from "react"
import PageContent from "../components/PageContent"
export default function PageLayou({ children}){
    return(
        <PageContent>
            { children}
        </PageContent>
    )
}