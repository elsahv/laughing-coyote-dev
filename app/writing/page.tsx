import {getProjects} from "@/sanity/sanity-utils"


export default async function Writing() {
    const projects = await getProjects()
  return (
    <div className="h-screem">
      <h2>Writing</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, praesentium? At, accusamus placeat cum dolores culpa autem in amet veritatis labore quibusdam voluptas, adipisci incidunt quae possimus dolore molestiae ad.</p>
       <>
         {projects.map((project) => (
        <div key={project._id}>
            <h2 className="capitalize pl-1 pt-5">{project.name}</h2> 
     
              </div>
         ))}
       </>
      </div>
  )
}
