'use client'


export interface CustomGridProps {
  containerStyles?: string;
  Headline: string;
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
  Headline,
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
    <div className={`w-full md:px-5 px-1 py-[35px] ${containerStyles} border-b-2 border-black`}>
      <section className="py-3 px-5">
    <h3 className="md:text-2xl text-lg  mb-3 text-left">{Headline}</h3>


    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2">
      <div id="sq" className="">
     <div className="flex items-center">
      <h4 className="font-bold capitialize">
      {SQtitle1}
      </h4>
      </div>
     <p className="text">{SQparagraph1}</p>
     </div>
  
     <div id="sq" className="">
     <div className="">
      <h4 className="font-bold capitialize">
      {SQtitle2}
      </h4>
      </div>
     <p className="">{SQparagraph2}</p>
     </div>

  
     <div id="sq" className="">
     <div className="">
      <h4 className="font-bold capitialize">
      {SQtitle3}
      </h4>
      </div>
     <p className="">{SQparagraph3}</p>
     </div>

  
     <div id="sq" className="">
     <div className="">
      <h4 className="font-bold capitialize">
      {SQtitle4}
      </h4>
      </div>
     <p className="">{SQparagraph4}</p>
     </div>
    </div>
    </section>
 </div>
  )
}

export default DynamicGridSqs