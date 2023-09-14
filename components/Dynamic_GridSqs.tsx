'use client'

export interface CustomGrid {
  title: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
}




const DynamicGridSqs = ({
  title,
  item1,
  item2,
  item3,
  item4
}: CustomGrid) => {
  return (
    <div className="w-full py-5 bg-test2">
    <h3 className="">{title}</h3>
    <div className="grid grid-cols-4 gap-2">
     <span className="bg-parchment">{item1}</span>
     <span className="bg-parchment">{item2}</span>
     <span className="bg-parchment">{item3}</span>
     <span className="bg-parchment">{item4}</span>
    </div>
 </div>
  )
}

export default DynamicGridSqs