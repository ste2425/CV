import { IEntityDescription } from "@/cvDataTypes"

export interface IEntityDescriptionComponentProps {
  entities: IEntityDescription[]
}

export function EntityDescriptionComponent({ entities }: IEntityDescriptionComponentProps) {
  return (<div>
    {entities.map((e, i) => 
      <div key={i}>
        <h3 className="fs-5">{e.name} {e.subName && <span> - <small>{e.subName}</small></span>}</h3>
        {e.date && <p className="pt-3 fs-6 text-primary">{e.date}</p>}
        {e.link && <a className="w-100 text-primary" href={e.link}><u>{e.link}</u></a>}
        { e.summary && <p className="pt-1 fs-6">{e.summary}</p>}
        <p className="pt-2 fs-6 pb-3">{e.description}</p>
      </div>
    )}
  </div>);
}