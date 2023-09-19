'use client'

export interface CustomGridProps {
  containerStyles?: string;
  PgTitle: string;
  SQtitle1: string;
  SQtitle2: string;
  SQtitle3: string;
  SQtitle4: string;
  SQparagraph1: string;
  SQparagraph2: string;
  SQparagraph3: string;
  SQparagraph4: string;
}
 


const DynamicGridSqs = ({
  containerStyles,
  PgTitle,
  SQtitle1,
  SQtitle2,
  SQtitle3,
  SQtitle4,
  SQparagraph1,
  SQparagraph2,
  SQparagraph3,
  SQparagraph4
}: CustomGridProps) => {
  return (
    <div className={`w-full py-5 my-5 ${containerStyles}`}>
      <section className="py-3 px-5">
    <h3 className="font-bold text-2xl mb-3">{PgTitle}</h3>
    <div className="text-center grid grid-cols-4 gap-2 text-parchment">


      <div className="">
     <h4 className="bg-orange">{SQtitle1}</h4>
     <p className="text-teal">{SQparagraph1}</p>
     </div>
  
     <div className="">
     <h4 className="bg-teal">{SQtitle2}</h4>
     <p className="text-teal">{SQparagraph2}</p>
     </div>

  
     <div className="">
     <h4 className="bg-sienna">{SQtitle3}</h4>
     <p className="text-teal">{SQparagraph3}</p>
     </div>

  
     <div className="">
     <h4 className="bg-richBlack">{SQtitle4}</h4>
     <p className="text-teal">{SQparagraph4}</p>
     </div>




    </div>
    </section>
 </div>
  )
}

export default DynamicGridSqs