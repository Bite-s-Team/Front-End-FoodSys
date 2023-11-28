import Image from "next/image";
import { FoodCard } from "@/components/FoodCards/FoodCard";
import image from "./image.jpeg";
import { Button } from "@/components/ui/Button";

const data = [
  {
    id: 1,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 2,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 3,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 3,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 4,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 5,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  },
  {
    id: 6,
    image: image,
    title: "Barbecue",
    price: "R$9.48"
  }
]

export default function Home() {
  return (
    <main>
      <section className="max-w-screen-2xl m-auto my-10">
        <h1 className="font-bold text-2xl text-zinc-700 my-4">Prepare para si</h1>
        <FoodCard.root>
          { data.map((card) => (
            <FoodCard.container key={card.id}>
              <FoodCard.imageContainer>
                <Image
                  src={card.image} 
                  alt="Imagem do prato"
                  className="w-full rounded-md"
                />
              </FoodCard.imageContainer>
              <FoodCard.title title={card.title}/>
              <FoodCard.price title={card.price}/>
            </FoodCard.container>
          ))

          }
        </FoodCard.root>
      </section>
      <div className="flex max-w-screen-2xl m-auto">
        <Image
          src={image} 
          alt="Imagem do prato"
          width={500}
        />
        <FoodCard.root>
          <FoodCard.shadow>
            <Image
              src={image} 
              alt="Imagem do prato"
              className="w-full"
            />
            <FoodCard.details>
              <FoodCard.title title="Barbecue"/>
              <FoodCard.price title=" R$9,48"/>
            </FoodCard.details>
            <Button variant="cardButton">
              Adicionar no carrinho
            </Button>
          </FoodCard.shadow>
          <FoodCard.shadow>
            <Image
              src={image} 
              alt="Imagem do prato"
              className="w-full"
            />
            <FoodCard.details>
              <FoodCard.title title="Barbecue"/>
              <FoodCard.price title=" R$9,48"/>
            </FoodCard.details>
            <Button variant="cardButton">
              Adicionar no carrinho
            </Button>
          </FoodCard.shadow>
        </FoodCard.root>
      </div>
    </main>
  )
}
