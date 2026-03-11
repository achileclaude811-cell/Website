
import Catalog from "../components/Catalog"

export default function Home(){

const animals = [
{
id:"1",
name:"Brahma Pure",
category:"poulets",
race:"Brahma",
age:4,
price:18000,
image:"https://images.unsplash.com/photo-1589927986089-35812388d1f4"
},
{
id:"2",
name:"Poulet Goliath",
category:"poulets",
race:"Goliath",
age:3,
price:12000,
image:"https://images.unsplash.com/photo-1548550023-2bdb3c5beed7"
},
{
id:"3",
name:"Cobaye",
category:"cobayes",
race:"Cobaye Géant",
age:2,
price:5000,
image:"https://images.unsplash.com/photo-1595433562696-9a6d3d1a3e0b"
},
{
id:"4",
name:"Caille",
category:"cailles",
race:"Caille pondeuse",
age:1,
price:1500,
image:"https://images.unsplash.com/photo-1612178992972-2f9e3cd90851"
}
]

return(
<div>

<header style={{background:"#0f5132",color:"white",padding:20}}>
<h1>ACNAA FERME</h1>
<p>Ferme moderne spécialisée en élevage de qualité</p>
</header>

<main style={{padding:40}}>

<h2>Nos Animaux</h2>

<Catalog animals={animals}/>

</main>

<footer style={{background:"#111",color:"white",padding:20}}>

<h3>Paiement Mobile Money</h3>

<p>Orange Money : 691153597</p>
<p>MTN Money : 677376818</p>
<p>Nom : CACHAREL</p>

</footer>

</div>
)
}
