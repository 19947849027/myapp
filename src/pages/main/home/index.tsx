import React from 'react';
import TableContent from "@/commponents/content/tableContent"
import SignFilter from "./commponents/filter"
import HomePage from "./table"


const Home =()=> {
  return(
    <TableContent titleName="第一頁" filter={(props: any) => <SignFilter {...props} />}>
         <HomePage />
    </TableContent>
  )
}
export default Home
