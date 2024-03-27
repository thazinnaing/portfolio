"use client"

import React, { useState } from 'react'
import { tabData } from '../../public/data/tabData';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface tabMenu {
  id : number,
  title : string,
  url : string
}

const Nav = () => {
  const router = useRouter()
  const [clickData, setClickData]=useState(0)

  const onClickHandler = (tab:tabMenu) =>{
    console.log(tab.id)
    setClickData(tab.id)
    router.push(tab.url)
  }

  const content = tabData.map(tab=>{
    return(
      <div key={tab.id} className={cn("p-2", clickData === tab.id && "border-b border-b-black")} onClick={()=>onClickHandler(tab)}>
        {tab.title}
      </div>
    )
  })

  return (
    <div className='w-full bg-green-200 h-24 flex justify-end items-center px-3'>
      {content}
    </div>
  )
}

export default Nav;