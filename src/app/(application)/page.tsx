"use client"
import Image from "next/image"
import { FoodCard } from "@/components/FoodCards/FoodCard"
import image from "./image.jpeg"
import { Button } from "@/components/ui/Button"
import { Splide, SplideSlide } from "@splidejs/react-splide"

const data = [
  {
    id: 1,
    image: image,
    title: "Barbecue",
    price: "R$9.48",
  },
  {
    id: 2,
    image: image,
    title: "Barbecue",
    price: "R$9.48",
  },
  {
    id: 3,
    image: image,
    title: "Barbecue",
    price: "R$9.48",
  },
  {
    id: 3,
    image: image,
    title: "Barbecue",
    price: "R$9.48",
  },
  {
    id: 4,
    image: image,
    title: "Barbecue",
    price: "R$9.48",
  },
  {
    id: 5,
    image: image,
    title: "Barbecue",
    price: "R$9.48",
  },
  {
    id: 6,
    image: image,
    title: "Barbecue",
    price: "R$9.48",
  },
]

import "@splidejs/react-splide/css"

import "@splidejs/react-splide/css/sea-green"

import "@splidejs/react-splide/css/core"

export default function Home() {
  return (
    <main className="font-sans">
      <section className="m-auto my-10 max-w-screen-2xl">
        <h1 className="my-4 text-2xl font-bold text-zinc-700">
          Prepare para si
        </h1>
        <FoodCard.root>
          {data.map((card) => (
            <FoodCard.container key={card.id}>
              <FoodCard.imageContainer>
                <Image
                  src={card.image}
                  alt="Imagem do prato"
                  className="w-full rounded-md"
                />
              </FoodCard.imageContainer>
              <FoodCard.title title={card.title} />
              <FoodCard.price title={card.price} />
            </FoodCard.container>
          ))}
        </FoodCard.root>
      </section>
      <section className="m-auto flex max-w-screen-2xl items-center justify-between">
        <div className="relative w-fit">
          <h2 className="absolute bottom-20 z-10 w-full text-center text-4xl font-bold text-white drop-shadow-2xl">
            Escolha uma das opçoes na sua cidade
          </h2>
          <Splide
            hasTrack={true}
            options={{
              type: "loop",
              perPage: 1,
              drag: true,
              gap: 8,
              fixedHeight: 500,
              fixedWidth: 800,
              flickMaxPages: 1,
              direction: "ttb",
              height: 500,
              width: 800,
              paginationDirection: "rtl",
              cover: true,
            }}
          >
            <SplideSlide>
              <Image src={image} fill alt="teste" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <Image src={image} fill alt="teste" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <Image src={image} fill alt="teste" className="w-full" />
            </SplideSlide>
          </Splide>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="flex w-full items-center justify-center rounded-md bg-zinc-100 py-4 text-2xl font-semibold text-orange-400 shadow-2xl">
            Recentemente Adicionados
          </h2>
          <FoodCard.root>
            <FoodCard.shadow>
              <Image src={image} alt="Imagem do prato" className="w-full" />
              <FoodCard.details>
                <FoodCard.title title="Barbecue" />
                <FoodCard.price title=" R$9,48" />
              </FoodCard.details>
              <Button variant="cardButton">Adicionar no carrinho</Button>
            </FoodCard.shadow>
            <FoodCard.shadow>
              <Image src={image} alt="Imagem do prato" className="w-full" />
              <FoodCard.details>
                <FoodCard.title title="Barbecue" />
                <FoodCard.price title=" R$9,48" />
              </FoodCard.details>
              <Button variant="cardButton">Adicionar no carrinho</Button>
            </FoodCard.shadow>
          </FoodCard.root>
        </div>
      </section>
      <section className="m-auto my-10 max-w-screen-2xl">
        <FoodCard.root>
          {data.map((card) => (
            <FoodCard.container key={card.id}>
              <FoodCard.imageContainer>
                <Image
                  src={card.image}
                  alt="Imagem do prato"
                  className="w-full rounded-md"
                />
              </FoodCard.imageContainer>
              <FoodCard.title title={card.title} />
              <FoodCard.price title={card.price} />
            </FoodCard.container>
          ))}
        </FoodCard.root>
      </section>
    </main>
  )
}
