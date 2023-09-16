'use client'

export interface CustomGridProps {
  containerStyles?: string;
  title: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
}
 


const DynamicGridSqs = ({
  containerStyles,
  title,
  item1,
  item2,
  item3,
  item4
}: CustomGridProps) => {
  return (
    <div className={`w-full py-5 my-5 ${containerStyles}`}>
      <section className="py-3 px-5">
    <h3 className="font-bold text-2xl mb-3">{title}</h3>
    <div className="text-center grid grid-cols-4 gap-2">
     <span className="bg-orange">{item1}</span>
     <span className="bg-teal">{item2}</span>
     <span className="bg-sienna">{item3}</span>
     <span className="bg-richBlack">{item4}</span>
    </div>
    </section>
 </div>
  )
}

export default DynamicGridSqs