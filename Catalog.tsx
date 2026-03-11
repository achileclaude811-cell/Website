
"use client"

import {useState} from "react"

type Animal={
id:string
name:string
category:string
race:string
age:number
price:number
image:string
}

export default function Catalog({animals}:{animals:Animal[]}){

const [category,setCategory]=useState("all")

const filtered = animals.filter(a =>
category==="all" ? true : a.category===category
)

return(

<div>

<div style={{marginBottom:20}}>

<button onClick={()=>setCategory("all")}>Tous</button>
<button onClick={()=>setCategory("poulets")}>Poulets</button>
<button onClick={()=>setCategory("cobayes")}>Cobayes</button>
<button onClick={()=>setCategory("cailles")}>Cailles</button>

</div>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:20
}}>

{filtered.map(a=>(

<div key={a.id} style={{
border:"1px solid #ddd",
padding:15,
borderRadius:10
}}>

<img src={a.image} style={{width:"100%",borderRadius:8}}/>

<h3>{a.name}</h3>

<p>{a.race}</p>

<p>{a.price} FCFA</p>

<button style={{
background:"#198754",
color:"white",
border:"none",
padding:"8px 12px",
borderRadius:6
}}>

Acheter / Réserver

</button>

</div>

))}

</div>

</div>

)
}
